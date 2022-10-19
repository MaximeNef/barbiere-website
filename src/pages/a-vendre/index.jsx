import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";
import CardCTA from "../../components/shared/card-Cta";
import CardBienVendre from "../../components/biens/cardBienVendre";
import H1 from "../../components/shared/h1";
import MotionRight from "../../components/shared/motion-CardRight";
import CardDesktop from "../../components/shared/card-cta-desktop";

const Avendre = ({ pages }) => {
  return (
    <NavPage current='Nos biens'>
      <H1>{"Nos Biens à vendre"}</H1>
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7 }}
        className='md:w-[65%] mx-auto my-4'
      >
        <CardDesktop />
      </MotionRight>
      <CardBienVendre pages={pages} />

      {/* <Container className='relative z-20 h-44 w-full'></Container> */}
    </NavPage>
  );
};
export default Avendre;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("vendre");

  return {
    props: {
      pages,
    },
  };
}
