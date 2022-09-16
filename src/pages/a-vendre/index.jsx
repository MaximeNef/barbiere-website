import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";
import CardCTA from "../../components/shared/card-Cta";
import CardBienVendre from "../../components/biens/cardBienVendre";
import H1 from "../../components/shared/h1";

const Avendre = ({ pages }) => {
  return (
    <NavPage current='Avendre'>
      <H1>{"Nos Biens à vendre"}</H1>
      <CardBienVendre pages={pages} />
      {/* <Container className='relative z-20 h-44 w-full'></Container> */}
    </NavPage>
  );
};
export default Avendre;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("biencard");

  return {
    props: {
      pages,
    },
  };
}
