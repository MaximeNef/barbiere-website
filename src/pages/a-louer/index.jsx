import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import { createClient } from "../../../prismicio";
import Container from "../../components/shared/container";

import CardBienLouer from "../../components/biens/cardBienLouer";
import MotionRight from "../../components/shared/motion-CardRight";
import CardCTA from "../../components/shared/card-Cta";
import H1 from "../../components/shared/h1";

const Alouer = ({ pages }) => {
  return (
    <NavPage current='Avendre'>
      <H1>{"Nos Biens à vendre"}</H1>
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
