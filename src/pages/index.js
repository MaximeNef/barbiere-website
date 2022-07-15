import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Flex from "../components/shared/flex";
import H1 from "../components/shared/h1";
import H2 from "../components/shared/h2";
import H3 from "../components/shared/h3";
import P from "../components/shared/p";
import Btn3 from "../components/shared/btn3";
import Btn2 from "../components/shared/btn2";
import CardCTA from "../components/shared/card-Cta";
import CardInfo from "../components/shared/card-Info";
import CardTeam from "../components/shared/card-team";
import CardAvis from "../components/shared/cardAvis";
import NavPage from "../components/all/Nav-page";
import Container from "../components/shared/container";

export default function Home() {
  return (
    <NavPage>
      <Container className='space-y-5  text-[#37474F] px-5 py-10'>
        <H1> Biens à vendre</H1>
        <H2> hey </H2>

        <H3> hey </H3>
        <P> hey </P>
        <Btn3 src='/page' color='black' text='voir plus' />
        <Btn3 src='/blog' color='blueu' text='En savoir plus' />
        <Btn2 src='/blog' color='blueu' text='Estimation gratuite' />
        <Btn2 src='/blog' color='white' text="je m'inscris" />
        <Btn2 src='/blog' color='white' text='Nos biens >' />
        <CardCTA
          text1={"Tous nos biens se trouvent ici"}
          text2={"Vous trouverez ici tous nos biens à vendre qu’à louer."}
          text3={"Nos biens >"}
          src='/pages'
        />
        <CardCTA
          text1={"Ne manquez plus nos nouveaux biens !"}
          text2={
            "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !"
          }
          text3={"Je m’inscris  "}
          src='/pages'
        />
        <CardInfo
          img='/assets/serviceVendre.svg'
          h2={"Vendre"}
          p={
            "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !"
          }
          btn={"En savoir plus"}
        />
        <CardInfo
          h2={"Louer"}
          p={
            "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !"
          }
          btn={"En savoir plus"}
        />
        <CardTeam
          img={"/assets/barbiere.svg"}
          nom={"François Barbière "}
          post={"Agent Immobilier - Gérant"}
          ipi={"Nr d’agréation IPI : 506259"}
          tel={"0493/193.003"}
          mail={"fb@barbiere.be"}
        />
        <CardAvis />
      </Container>
    </NavPage>
  );
}
