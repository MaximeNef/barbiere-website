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
import InfoFinanciere from "../../components/biens/details/financier";
import CardContact from "../../components/biens/details/contact";
import Equipement from "../../components/biens/details/Equipement";
import Construction from "../../components/biens/details/construction";
import Exterieur from "../../components/biens/details/exterieur";
import Energie from "../../components/biens/details/Energie";
export default function DetailsVendre({ details }) {
  console.log(details, "doc");
  return (
    <NavPage current='Nos biens'>
      <Container className='md:mx-5'>
        <DetailsImg details={details} />
        <Container className=' space-y-[30px]'>
          <HeroDetails details={details} />
          <Description details={details} />
          <Generales details={details} />
          <Container className=' space-y-[30px] md:space-y-0 md:space-x-[30px]  md:flex md:flex-row'>
            <InfoFinanciere details={details} />
            <CardContact />
          </Container>
          <Equipement details={details} />
          <Container className=' space-y-[30px] md:space-y-0 md:space-x-[30px]  md:flex md:flex-row'>
            <Construction details={details} />
            <Exterieur details={details} />
          </Container>
          <Energie details={details} />
        </Container>{" "}
      </Container>
    </NavPage>
  );
}
export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("vendre");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),

    fallback: false,
  };
}
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const details = (await client.getByUID("vendre", params.uid)) || {};

  return {
    props: {
      details,
    },
  };
}
