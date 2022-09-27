import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";
import CardCTA from "../../components/shared/card-Cta";
import CardBienVendre from "../../components/biens/cardBienVendre";
import CardBienVendu from "../../components/biens/cardBiensVendu";
import MotionRight from "../../components/shared/motion-CardRight";
import H1 from "../../components/shared/h1";

const Avendre = ({ pages, locations }) => {
  return (
    <NavPage current='Avendre'>
      <H1>{"Nos Biens vendu"}</H1>
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <CardCTA
          text1={"Ne manquez plus nos nouveaux biens !"}
          text2={
            "Quand vous trouvez enfin un bien qui correspond à vos attentes, on vous annonce qu’il est déjà vendu... En vous inscrivant cela ne vous arrivera plus !"
          }
          text3={"Nos biens >"}
          src='/pages'
        />
      </MotionRight>
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
