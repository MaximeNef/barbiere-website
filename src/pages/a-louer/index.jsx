import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";

import CardBienLouer from "../../components/biens/cardBienLouer";

const Alouer = ({ pages }) => {
  return (
    <NavPage current='Avendre'>
      <CardBienLouer pages={pages} />
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
