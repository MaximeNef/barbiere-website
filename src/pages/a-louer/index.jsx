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

const Alouer = ({ pages }) => {
  const [newProductList, setNewProductList] = useState(pages);
  const [filterValue, setFilterValue] = useState("all");
  const [postalValue, setPostalValue] = useState("all");
  const [newCodeList, setNewCodeList] = useState([]);
  // Trier le tableau en fonction de la valeur de la clé 'ordres'
  pages.sort((a, b) => {
    if (
      a.data.slices[0].primary.ordres === null &&
      b.data.slices[0].primary.ordres === null
    ) {
      0;
    }
    if (a.data.slices[0].primary.ordres === null) {
      return 1;
    }
    if (b.data.slices[0].primary.ordres === null) {
      return -1;
    }
    return a.data.slices[0].primary.ordres - b.data.slices[0].primary.ordres;
  });
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
  withoutDuplicates.sort();
  const filteredProductList = newProductList.filter((page) => {
    if (filterValue === "all") {
      if (postalValue === "all") {
        return page;
      }
      if (postalValue === page?.data.slices[0].primary.postal_type[0]?.text) {
        return page;
      }
    }
    if (filterValue === page?.data.slices[0].primary.typeFiltre) {
      if (postalValue === "all") {
        return page;
      }
      if (postalValue === page?.data.slices[0].primary.postal_type[0]?.text) {
        return page;
      }
    }
  });

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
        pages={pages}
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
        pages={filteredProductList}
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

  const pages = await client.getAllByType("location");

  return {
    props: {
      pages,
    },
  };
}
