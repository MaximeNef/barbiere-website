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
import BannerSection from "../components/home/BannerSection";
const DynamicCarte = dynamic(() => import("../components/home/CarteBelgique"));
const DynamicVideo = dynamic(() => import("../components/hero/heroImg"));
const DynamicChiffre = dynamic(() =>
  import("../components/home/chiffre-agence")
);
const DynamicCardBienVendu = dynamic(() =>
  import("../components/biens/cardBiensVendu")
);
const DynamicCardCTA = dynamic(() => import("../components/shared/card-Cta"));
const DynamicAvis = dynamic(() => import("../components/shared/cardAvis"));

export default function Home({ pages, locations }) {
  return (
    <NavPage current='Accueil'>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      {/* <HeroImg />*/}
      <DynamicVideo /> <a name='some' className=' absolute bottom-[22px]' />
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.1 }}
        className='bg-white z-10 relative'
      >
        <H3 className='mt-1 md:mt-0' id='Ancre'>
          {"Nous sommes actif près de chez vous "}
        </H3>
      </MotionRight>
      <DynamicCarte />
      <Container className='mt-5 md:mt-12 md:flex md:flex-row md:m-auto md:justify-around md:w-full md:min-h-[350px] md:mb-[60px]'>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
          className='w-full inline-flex md:hidden'
        >
          {" "}
          <DynamicCardCTA
            text1={"Tous nos biens se trouvent ici"}
            text2={"Découvrez tous nos biens à vendre & louer."}
            text3={"Nos biens >"}
            src='/biens'
          />{" "}
        </MotionRight>{" "}
        <Container className='absolute w-full '>
          <BannerSection />
        </Container>
      </Container>
      <Flex justify='between' className='mt-12 mb-5'>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
          {" "}
          <H3 className=''>{"Nos biens vendus/loués"}</H3>{" "}
        </MotionRight>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
          <Btn3 src='/biens' color='black' text='voir plus' />
        </MotionRight>
      </Flex>{" "}
      <Flex className=' container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px] md:pl-[20px] md:mr-auto md:my-5'>
        <DynamicCardBienVendu pages={pages} locations={locations} />
      </Flex>{" "}
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3 }}
      >
        <H3 className='mt-12 mb-4 '>{"Notre agence en quelques chiffres"}</H3>
      </MotionBottom>
      <DynamicChiffre />
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
            <DynamicAvis
              txt={
                "L’agence Barbière nous a proposé ses services, les choses se sont très vite activées. Ils ont été hyper professionnels,honnêtes et transparents du début à la fin"
              }
              user={"B. & K."}
            />
            <DynamicAvis
              txt={
                "Félicitations à l'agence Barbière de son professionnalisme, sa gentillesse ainsi que de ses bons conseils. Je ne manquerai pas de revenir vers vos services."
              }
              user={"A.D."}
            />
            <DynamicAvis
              txt={
                "Je ne peux que me féliciter d'avoir découvert votre société et mon avis se résume en quelques mots: Réactivité, positivité, disponibilité et gentillesse."
              }
              user={"C."}
            />
            <DynamicAvis
              txt={
                "Un grand merci à toute l'équipe immobilière ‘François Barbière & associés’ pour les conseils lors de notre achat mais également pour l'accompagnement de la vente de notre bien."
              }
              user={"L. & famille"}
            />
            <DynamicAvis
              txt={
                "J’ai vraiment apprécié la prise en charge de la vente de la maison. Rapidité et efficacité sont leurs mots d'ordre."
              }
              user={"V.C."}
            />
            <DynamicAvis
              txt={
                "Des explications claires et complètes lors de la visite du bien. Un suivi régulier et une disponibilité de l’agent immobilier"
              }
              user={"F.D."}
            />{" "}
            <Container className='w-[20%]  snap-always snap-center flex-shrink-0  md:inline-flex hidden' />
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
