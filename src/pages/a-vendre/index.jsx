import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";
import CardCTA from "../../components/shared/card-Cta";
import CardBienVendre from "../../components/biens/cardBienVendre";
import H1 from "../../components/shared/h1";
import MotionRight from "../../components/shared/motion-CardRight";
import CardDesktop from "../../components/shared/card-cta-desktop";
import FilterProduct from "../../components/FilterProduct";
import { useState } from "react";

const Avendre = ({ pages, allBiens }) => {
  const [newProductList, setNewProductList] = useState(pages);
  const [filterValue, setFilterValue] = useState("all");
  const [postalValue, setPostalValue] = useState("all");
  const [newCodeList, setNewCodeList] = useState([]);

  // Construire la liste des codes postaux à partir de tous les biens à vendre (disponibles + vendus)
  const codePostalSet = new Set();
  const withoutDuplicates = [];
  allBiens.forEach((page) => {
    const raw = page?.data.slices[0].primary.postal_type?.[0]?.text || "";
    const normalized = raw.replace(/\s+/g, "").toLowerCase();
    if (normalized && !codePostalSet.has(normalized)) {
      codePostalSet.add(normalized);
      withoutDuplicates.push(raw);
    }
  });
  withoutDuplicates.sort((a, b) => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    return a.localeCompare(b);
  });

  // Filtrage avancé : si aucun bien dispo pour le code postal, afficher les vendus
  const filteredProductList = (() => {
    if (postalValue === "all") {
      return newProductList.filter((page) =>
        filterValue === "all"
          ? true
          : filterValue === page?.data.slices[0].primary.typeFiltre
      );
    }
    // 1. Biens disponibles pour ce code postal
    const biensDispo = newProductList.filter(
      (page) =>
        page?.data.slices[0].primary.postal_type?.[0]?.text === postalValue &&
        (filterValue === "all" ||
          filterValue === page?.data.slices[0].primary.typeFiltre)
    );
    if (biensDispo.length > 0) {
      return biensDispo;
    }
    // 2. Sinon, biens vendus pour ce code postal
    return allBiens
      .filter(
        (page) =>
          page?.data.slices[0].primary.postal_type?.[0]?.text === postalValue &&
          page.data.slices[0].primary.vendu === true
      )
      .filter(
        (page) =>
          filterValue === "all" ||
          filterValue === page?.data.slices[0].primary.typeFiltre
      );
  })();

  function onFilterValueSelected(filterValue) {
    setFilterValue(filterValue);
  }
  function onPostalValueSelected(postalValue) {
    setPostalValue(postalValue);
  }

  return (
    <NavPage current='Nos biens'>
      <H1>{"Nos biens à vendre"}</H1>{" "}
      <FilterProduct
        pages={allBiens}
        withoutDuplicates={withoutDuplicates}
        filterValueSelected={onFilterValueSelected}
        postalValueSelected={onPostalValueSelected}
      />
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7 }}
        className='md:w-[65%] mx-auto my-4'
      >
        <CardDesktop />
      </MotionRight>
      <CardBienVendre
        pages={filteredProductList}
        filterValue={filterValue}
        postalValue={postalValue}
      />
    </NavPage>
  );
};
export default Avendre;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  // 1. Récupérer tous les biens à vendre et à louer
  const allVendre = await client.getAllByType("vendre");
  const allLocation = await client.getAllByType("location");
  const allBiens = [...allVendre, ...allLocation];

  // 2. Récupérer le document d'ordre
  let ordreDoc = null;
  try {
    ordreDoc = await client.getSingle("ordre_biens");
  } catch (e) {
    ordreDoc = null;
  }

  // 3. Extraire les IDs des biens dans l'ordre
  const orderedIds = ordreDoc
    ? ordreDoc.data.liste_biens.map((item) => item.bien.id)
    : [];

  // 4. Construire la liste ordonnée
  const orderedBiens = [];
  const remainingBiens = [...allBiens];

  orderedIds.forEach((id) => {
    const idx = remainingBiens.findIndex((bien) => bien.id === id);
    if (idx !== -1) {
      orderedBiens.push(remainingBiens[idx]);
      remainingBiens.splice(idx, 1);
    }
  });
  const finalBiens = [...orderedBiens, ...remainingBiens];

  // 5. Filtrer pour n'afficher que les biens à vendre non vendus
  const pages = finalBiens.filter(
    (bien) =>
      bien.type === "vendre" && bien.data.slices[0].primary.vendu !== true
  );

  return {
    props: {
      pages,
      allBiens: finalBiens.filter((bien) => bien.type === "vendre"),
    },
  };
}
