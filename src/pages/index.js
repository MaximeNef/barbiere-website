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
import CardBienVendu from "../components/biens/cardBiensVendu";
import { createClient } from "../../prismicio";
import MotionRight from "../components/shared/motion-CardRight";
import MotionBottom from "../components/shared/motion-bottom";
import MotionCardRight from "../components/shared/motion-right";
import ChiffreAgence from "../components/home/chiffre-agence";
import CarteBelgique from "../components/home/CarteBelgique";
import dynamic from "next/dynamic";
const DynamicCarte = dynamic(() => import("../components/home/CarteBelgique"));
const DynamicVideo = dynamic(() => import("../components/hero/heroImg"));
const DynamicChiffre = dynamic(() =>
  import("../components/home/chiffre-agence")
);
const DynamicCardBienVendu = dynamic(() =>
  import("../components/biens/cardBiensVendu")
);

export default function Home({ pages, locations }) {
  return (
    <NavPage current='Accueil'>
      <HeroImg /> <a name='some' className=' absolute bottom-[22px]' />
      <DynamicVideo />
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3 }}
        className='bg-white z-10 relative'
      >
        <H3 className='mt-1 md:mt-0' id='Ancre'>
          {"Nous sommes actif près de chez vous "}
        </H3>
      </MotionBottom>
      {/* <CarteBelgique /> */}
      <DynamicCarte />
      <Container className='mt-5 md:mt-12 md:flex md:flex-row md:m-auto md:justify-around md:w-full'>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.7 }}
        >
          <CardCTA
            text1={"Tous nos biens se trouvent ici"}
            text2={"Vous trouverez ici tous nos biens à vendre qu’à louer."}
            text3={"Nos biens >"}
            src='/biens'
          />{" "}
        </MotionRight>{" "}
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.7 }}
        >
          <CardCTA
            text1={"Tous nos biens se trouvent ici"}
            text2={"Vous trouverez ici tous nos biens à vendre qu’à louer."}
            text3={"Nos biens >"}
            src='/biens'
          />{" "}
        </MotionRight>
      </Container>
      <Flex justify='between' className='mt-12 mb-5'>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
          {" "}
          <H3 className=''>{"Nos biens vendus/loués"}</H3>{" "}
        </MotionBottom>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
          <Btn3 src='/biens' color='black' text='voir plus' />
        </MotionBottom>
      </Flex>{" "}
      <Flex className=' container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px] md:pl-[20px] md:mr-auto'>
        <DynamicCardBienVendu pages={pages} locations={locations} />
      </Flex>{" "}
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3 }}
      >
        <H3 className='mt-12 '>{"Notre agence en quelques chiffres"}</H3>
      </MotionBottom>
      <ChiffreAgence />
      <Container className='space-y-[20px] mt-12 '>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
          {" "}
          <H3 className=''>{"Ils parlent de nous ... "}</H3>
        </MotionBottom>
        <Flex className=' container-snap snap-x snap-mandatory overflow-scroll mx-[-15px] md:mx-[-60px] pr-10 pb-5 '>
          <Container className='w-[60px]  snap-always snap-center flex-shrink-0 hidden md:inline-flex' />
          <MotionCardRight
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5 }}
            className='  w-full flex'
          >
            <CardAvis />
            <CardAvis />
            <CardAvis />{" "}
            <Container className='w-[20%]  snap-always snap-center flex-shrink-0  inline-flex' />
          </MotionCardRight>
        </Flex>
      </Container>
    </NavPage>
  );
}

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
