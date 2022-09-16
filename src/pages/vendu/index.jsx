import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";
import CardCTA from "../../components/shared/card-Cta";
import CardBienVendre from "../../components/biens/cardBienVendre";
import CardBienVendu from "../../components/biens/cardBiensVendu";

const Avendre = ({ pages, locations }) => {
  return (
    <NavPage current='Avendre'>
      <CardBienVendu pages={pages} locations={locations} />
      <Container className='relative z-20 h-44 w-full'></Container>
    </NavPage>
  );
};
export default Avendre;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("biencard");
  const locations = await client.getAllByType("location");

  return {
    props: {
      pages,
      locations,
    },
  };
}
