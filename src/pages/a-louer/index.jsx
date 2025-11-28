import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";
import CardBienLouer from "../../components/biens/cardBienLouer";
import MotionRight from "../../components/shared/motion-CardRight";
import CardCTA from "../../components/shared/card-Cta";
import H1 from "../../components/shared/h1";
import CardDesktop from "../../components/shared/card-cta-desktop";
import FilterProduct from "../../components/FilterProduct";
import { useState } from "react";

const Alouer = ({ finalBiens, withoutDuplicates }) => {
  const [filterValue, setFilterValue] = useState("all");
  const [postalValue, setPostalValue] = useState("all");

  // Filtrage dynamique sur la liste ordonnée complète
  const filteredList = (() => {
    let filtered = finalBiens.filter((bien) => bien.type === "location");
    if (postalValue !== "all") {
      filtered = filtered.filter(
        (bien) =>
          bien.data.slices[0].primary.postal_type?.[0]?.text === postalValue
      );
    }
    if (filterValue !== "all") {
      filtered = filtered.filter(
        (bien) => bien.data.slices[0].primary.typeFiltre === filterValue
      );
    }
    // Si aucun bien dispo/sous option, fallback sur les loués pour ce code postal
    const dispoOrOption = filtered.filter(
      (bien) =>
        !bien.data.slices[0].primary.vendu || bien.data.slices[0].primary.option
    );
    if (postalValue !== "all" && dispoOrOption.length === 0) {
      return finalBiens.filter(
        (bien) =>
          bien.type === "location" &&
          bien.data.slices[0].primary.postal_type?.[0]?.text === postalValue &&
          bien.data.slices[0].primary.vendu === true &&
          (filterValue === "all" ||
            bien.data.slices[0].primary.typeFiltre === filterValue)
      );
    }
    return filtered;
  })();

  function onFilterValueSelected(filterValue) {
    setFilterValue(filterValue);
  }
  function onPostalValueSelected(postalValue) {
    setPostalValue(postalValue);
  }
  return (
    <NavPage current='Nos biens'>
      <H1>{"Nos biens à louer"}</H1>
      <FilterProduct
        pages={finalBiens.filter((bien) => bien.type === "location")}
        withoutDuplicates={withoutDuplicates}
        filterValueSelected={onFilterValueSelected}
        postalValueSelected={onPostalValueSelected}
      />
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7, delay: 0.9 }}
        className='md:w-[65%] mx-auto my-4'
      >
        <CardDesktop />
      </MotionRight>
      <CardBienLouer
        pages={filteredList}
        filterValue={filterValue}
        postalValue={postalValue}
      />
      <Container className='relative z-20 h-44 w-full'></Container>
    </NavPage>
  );
};
export default Alouer;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const allVendre = await client.getAllByType("vendre");
  const allLocation = await client.getAllByType("location");
  const allBiens = [...allVendre, ...allLocation];
  let ordreDoc = null;
  try {
    ordreDoc = await client.getSingle("ordre_biens");
  } catch (e) {
    ordreDoc = null;
  }
  const orderedIds = ordreDoc
    ? ordreDoc.data.liste_biens.map((item) => item.bien.id)
    : [];
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
  // Codes postaux sans doublons
  const codePostalSet = new Set();
  const withoutDuplicates = [];
  finalBiens.forEach((page) => {
    if (page.type === "location") {
      const raw = page?.data.slices[0].primary.postal_type?.[0]?.text || "";
      const normalized = raw.replace(/\s+/g, "").toLowerCase();
      if (normalized && !codePostalSet.has(normalized)) {
        codePostalSet.add(normalized);
        withoutDuplicates.push(raw);
      }
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
  return {
    props: {
      finalBiens,
      withoutDuplicates,
    },
  };
}
