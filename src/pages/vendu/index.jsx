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
const Avendre = ({ pages, locations }) => {
  return (
    <NavPage current='Nos biens'>
      <H1>{"Nos Biens vendu"}</H1>
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7, delay: 0.9 }}
        className='md:w-[65%] mx-auto my-4'
      >
        <CardDesktop />
      </MotionRight>

      <CardVendu pages={pages} locations={locations} />

      <Container className='relative z-20 h-44 w-full'></Container>
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
