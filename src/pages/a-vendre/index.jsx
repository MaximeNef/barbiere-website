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

const Avendre = ({ pages }) => {
  const [newProductList, setNewProductList] = useState(pages);
  const [filterValue, setFilterValue] = useState("all");
  const [postalValue, setPostalValue] = useState("all");

  const filteredProductList = newProductList.filter((page) => {
    if (filterValue === "all") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return page && page?.data.slices[0].primary.postal_type == postalValue;
      } else if (postalValue === "all") {
        return page;
      }
    } else if (filterValue === "maison") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return (
          page?.data.slices[0].primary.typeFiltre === "maison" &&
          page?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return page?.data.slices[0].primary.typeFiltre === "maison";
      }
    } else if (filterValue === "appartement") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return (
          page?.data.slices[0].primary.typeFiltre === "appartement" &&
          page?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return page?.data.slices[0].primary.typeFiltre === "appartement";
      }
      return page.data.slices[0].primary.typeFiltre === "appartemement ";
    } else if (filterValue === "terrain") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return (
          page?.data.slices[0].primary.typeFiltre === "terrain" &&
          page?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return page?.data.slices[0].primary.typeFiltre === "terrain";
      }
    } else if (filterValue === "bureaux") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return (
          page?.data.slices[0].primary.typeFiltre === "bureaux" &&
          page?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return page?.data.slices[0].primary.typeFiltre === "bureaux";
      }
    } else if (filterValue === "garage") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return (
          page?.data.slices[0].primary.typeFiltre === "garage" &&
          page?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return page?.data.slices[0].primary.typeFiltre === "garage";
      }
    } else if (filterValue === "entrepot") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return (
          page?.data.slices[0].primary.typeFiltre === "entrepot" &&
          page?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return page?.data.slices[0].primary.typeFiltre === "entrepot";
      }
    } else if (filterValue === "immeuble mixte") {
      if (postalValue === page?.data.slices[0].primary.postal_type) {
        return (
          page?.data.slices[0].primary.typeFiltre === "immeuble mixte" &&
          page?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return page?.data.slices[0].primary.typeFiltre === "immeuble mixte";
      }
    } else {
      return page;
    }
  });

  function onFilterValueSelected(filterValue) {
    console.log(filterValue);
    setFilterValue(filterValue);
  }
  function onPostalValueSelected(postalValue) {
    console.log(postalValue);
    setPostalValue(postalValue);
  }

  return (
    <NavPage current='Nos biens'>
      <H1>{"Nos Biens à vendre"}</H1>{" "}
      <FilterProduct
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
      <CardBienVendre pages={filteredProductList} />
      {/* <Container className='relative z-20 h-44 w-full'></Container> */}
    </NavPage>
  );
};
export default Avendre;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("vendre");

  return {
    props: {
      pages,
    },
  };
}
