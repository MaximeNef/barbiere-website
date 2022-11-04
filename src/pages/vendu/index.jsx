import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";
import CardCTA from "../../components/shared/card-Cta";
import CardBienVendre from "../../components/biens/cardBienVendre";
import CardBienVendu from "../../components/biens/cardBiensVendu";
import MotionRight from "../../components/shared/motion-CardRight";
import H1 from "../../components/shared/h1";
import CardDesktop from "../../components/shared/card-cta-desktop";
import CardVendu from "../../components/biens/cardVendu";
import { useState } from "react";
import FilterProduct from "../../components/FilterProduct";
const Avendre = ({ pages, locations }) => {
  const [newProductList, setNewProductList] = useState(pages);
  const [newLocationList, setNewLocationList] = useState(locations);
  const [filterValue, setFilterValue] = useState("all");
  const [postalValue, setPostalValue] = useState("all");
  const [newCodeList, setNewCodeList] = useState([]);
  {
    pages.map((page) => {
      if (
        newCodeList.text !== page?.data.slices[0].primary.postal_type[0]?.text
      ) {
        newCodeList.push(page?.data.slices[0].primary.postal_type[0]?.text);
      }
    });
  }
  const withoutDuplicates = [...new Set(newCodeList)];
  console.log(withoutDuplicates, "code postal AAA");
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
    } else {
      return page;
    }
  });
  const filteredLocationList = newLocationList.filter((location) => {
    if (filterValue === "all") {
      if (postalValue === location?.data.slices[0].primary.postal_type) {
        return (
          location &&
          location?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return location;
      }
    } else if (filterValue === "maison") {
      if (postalValue === location?.data.slices[0].primary.postal_type) {
        return (
          location?.data.slices[0].primary.typeFiltre === "maison" &&
          location?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return location?.data.slices[0].primary.typeFiltre === "maison";
      }
    } else if (filterValue === "appartement") {
      if (postalValue === location?.data.slices[0].primary.postal_type) {
        return (
          location?.data.slices[0].primary.typeFiltre === "appartement" &&
          location?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return location?.data.slices[0].primary.typeFiltre === "appartement";
      }
      return location.data.slices[0].primary.typeFiltre === "appartemement ";
    } else if (filterValue === "terrain") {
      if (postalValue === location?.data.slices[0].primary.postal_type) {
        return (
          location?.data.slices[0].primary.typeFiltre === "terrain" &&
          location?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return location?.data.slices[0].primary.typeFiltre === "terrain";
      }
    } else if (filterValue === "bureaux") {
      if (postalValue === location?.data.slices[0].primary.postal_type) {
        return (
          location?.data.slices[0].primary.typeFiltre === "bureaux" &&
          location?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return location?.data.slices[0].primary.typeFiltre === "bureaux";
      }
    } else if (filterValue === "garage") {
      if (postalValue === location?.data.slices[0].primary.postal_type) {
        return (
          location?.data.slices[0].primary.typeFiltre === "garage" &&
          location?.data.slices[0].primary.postal_type == postalValue
        );
      } else if (postalValue === "all") {
        return location?.data.slices[0].primary.typeFiltre === "garage";
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
      return location;
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
      <H1>{"Nos Biens vendu"}</H1>
      <FilterProduct
        pages={pages}
        location={locations}
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

      <CardVendu pages={filteredProductList} locations={filteredLocationList} />
    </NavPage>
  );
};
export default Avendre;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("vendre");
  const locations = await client.getAllByType("location");

  return {
    props: {
      pages,
      locations,
    },
  };
}
