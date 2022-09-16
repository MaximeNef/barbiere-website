import NavPage from "../../components/all/Nav-page";
import DetailsImg from "../../components/biens/details/detailsImage";
import Btn3 from "../../components/shared/btn3";
import Container from "../../components/shared/container";
import { createClient, linkResolver } from "../../../prismicio";
import * as prismicH from "@prismicio/helpers";
import Description from "../../components/biens/details/description";
import Generales from "../../components/biens/details/generales";
import HeroDetails from "../../components/biens/details/heroDetails";
import Financier from "../../components/biens/details/financier";
export default function DetailsVendre({ details }) {
  console.log(details, "doc");
  return (
    <NavPage current='a-vendre'>
      {/* <Container className='mr-auto mb-4'>
        <Btn3 src='/biens' color='black' text='< Retour' />
      </Container> */}
      <DetailsImg details={details} />
      <Container className=' space-y-[30px]'>
        <HeroDetails details={details} />
        <Description details={details} />
        <Generales details={details} />
        <Financier details={details} />
      </Container>{" "}
    </NavPage>
  );
}
{
  /* 
      <equipement/>
      <Construction/>
      <exterieur/>
      <energie/>
      */
}
export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("biencard");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),

    fallback: false,
  };
}
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const details = (await client.getByUID("biencard", params.uid)) || {};

  return {
    props: {
      details,
    },
  };
}
