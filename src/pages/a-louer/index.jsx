import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";

import CardBienLouer from "../../components/biens/cardBienLouer";
import MotionRight from "../../components/shared/motion-CardRight";
import CardCTA from "../../components/shared/card-Cta";
import H1 from "../../components/shared/h1";
import CardDesktop from "../../components/shared/card-cta-desktop";
const Alouer = ({ pages }) => {
  return (
    <NavPage current='Nos biens'>
      <H1>{"Nos biens à Louer"}</H1>
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7, delay: 0.9 }}
        className='md:w-[65%] mx-auto my-4'
      >
        <CardDesktop />
      </MotionRight>
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
