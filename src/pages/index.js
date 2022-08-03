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
import HeroImg from "../components/hero/heroImg";
import CardBien from "../components/biens/cardBiens";
import { CardBiens } from "../../slices";

export default function Home() {
  return (
    <NavPage current='Accueil'>
      <HeroImg />
      <CardBiens />
      <a name='some' />
      <H3 className='mt-12' id='Ancre'>
        {" "}
        {"Nous sommes actif près de chez vous "}
      </H3>{" "}
      <Container className='mt-12'>
        <CardCTA
          text1={"Tous nos biens se trouvent ici"}
          text2={"Vous trouverez ici tous nos biens à vendre qu’à louer."}
          text3={"Nos biens >"}
          src='/pages'
        />
      </Container>
      <Flex justify='between' className='mt-12 mb-5'>
        <H3 className=''>{"Nos biens vendus/loués"}</H3>
        <Btn3 src='/biens' color='black' text='voir plus' />
      </Flex>{" "}
      <Flex className=' container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px]'>
        {/* <CardBien /> <CardBien /> <CardBien /> <CardBien /> */}
        <Container className='w-[10px]  snap-always snap-center flex-shrink-0' />
      </Flex>
      <H3 className='mt-12'>{"Notre agence en quelques chiffres"}</H3>
      <Container className='space-y-[20px] mt-12'>
        <H3>{"Ils parlent de nous ... "}</H3>
        <Flex className=' container-snap snap-x snap-mandatory overflow-scroll mx-[-15px] pr-10 pb-5'>
          <CardAvis />
          <CardAvis />
          <CardAvis />
          <Container className='w-[10px]  snap-always snap-center flex-shrink-0' />
        </Flex>
      </Container>
    </NavPage>
  );
}
