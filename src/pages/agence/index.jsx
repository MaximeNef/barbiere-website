import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Flex from "../../components/shared/flex";
import H1 from "../../components/shared/h1";
import H2 from "../../components/shared/h2";
import H3 from "../../components/shared/h3";
import P from "../../components/shared/p";
import Btn3 from "../../components/shared/btn3";
import Btn2 from "../../components/shared/btn2";
import CardCTA from "../../components/shared/card-Cta";
import CardInfo from "../../components/shared/card-Info";
import CardTeam from "../../components/shared/card-team";
import CardAvis from "../../components/shared/cardAvis";
import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";
import ImgAgence from "../../components/agence/img-agence";
import MyImage from "../../components/shared/myimage";
import MotionBottom from "../../components/shared/motion-bottom";
import MotionTop from "../../components/shared/motion-top";
import MotionRight from "../../components/shared/motion-CardRight";
import CardTeams from "../../components/shared/card-teams";
import DetailsImg from "../../components/biens/details/detailsImage";
import Carousel from "../../components/shared/carousel";
export default function Agence() {
  const photo = [
    "/assets/façade.jpg",
    "/assets/vitrine.jpg",
    "/assets/deco.jpg",
  ];
  return (
    <NavPage current={"Agence / Équipe"}>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Container className='md:px-14'>
        <H1>{"Notre agence"}</H1>{" "}
        <MotionTop
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className='	  text-[20px] md:text-[24px]  font-light leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default  mt-5 md:mt-8 '>
            {
              "Forte d’une expérience de plus de 20 années dans l’immobilier et la construction,"
            }
            <span className='py-2 md:py-4'>
              {
                "notre équipe d’agents immobiliers (agréés IPI) vous assurera un service de qualité, sur mesure,"
              }
            </span>
            <span>
              {
                "pour louer et vendre votre bien immobilier au mieux de vos intérêts."
              }
            </span>
          </h3>
        </MotionTop>{" "}
        <Carousel photo={photo} />
        <H1 className='mt-12 md:mt-20'>{"Notre équipe"}</H1>{" "}
        <MotionTop
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className='	  text-[20px] md:text-[24px]  font-light leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default mt-5  md:mt-12 md:mb-10 md:mx-[15%] '>
            {
              "Notre équipe est à votre écoute pour vous apporter des conseils avisés et vous accompagner"
            }
            <span className='md:py-4'>
              {"pour une valorisation optimale de votre bien immobilier."}
            </span>
          </h3>
        </MotionTop>{" "}
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.7, delay: 0.5 }}
          className='relative'
        >
          <Container className=' relative w-[100%] z-20 mt-6'>
            <Container className='ml-[-20px] md:ml-[-116px] md:mr-[-116px] mr-[-20px] shadow-cardcta md:h-[40%]'>
              <MyImage
                source='/assets/team.png'
                w='100%'
                h='50%'
                // objectFit={"cover"}
                layout='responsive'
                objectFit='cover'
              />
            </Container>
          </Container>{" "}
        </MotionRight>{" "}
        <Container className='space-y-[20px] md:flex md:flex-row md:flex-wrap md:space-y-0 md:justify-start md:mx-auto md:ml-[7%] mt-8  '>
          <CardTeams
            img={"/assets/barbiere.jpg"}
            nom={"François Barbière "}
            post={"Agent Immobilier - Gérant"}
            ipi={"Nr d’agréation IPI : 506259"}
            region={"Hannut / Waremme & leurs villages"}
            tel={"019 30 57 32"}
            mail={"fb@barbiere.be"}
            bac={"Expert Immobilier IFAPME  Licencié HEC Lg "}
          />

          <CardTeams
            img={"/assets/ste.jpg"}
            nom={"Stéphane Beaujot "}
            post={"Agent immobilier - Associé"}
            ipi={"Nr d’agréation IPI : 510059"}
            region={"Liège / Embourg / Beaufays"}
            tel={"0477 75 44 10"}
            mail={"sb@barbiere.be"}
            bac={"Bachelier en Immobilier"}
          />

          <CardTeams
            img={"/assets/cam.jpg"}
            nom={"Camille Gillon"}
            post={"Conseillère en Immobilier"}
            ipi={"Nr d’agréation IPI : 517107"}
            region={"Hélécine / Orp-Jauche"}
            tel={"0497 40 85 29"}
            mail={"cg@barbiere.be"}
            bac={"Bachelière en Immobilier"}
          />

          <CardTeams
            img={"/assets/VanHove.jpg"}
            nom={"Gaëtane Van Hove "}
            post={"Conseillère en Immobilier"}
            ipi={"Nr d’agréation IPI : 516771"}
            region={"Braives / Wasseiges"}
            tel={"0479 54 76 01"}
            mail={"gv@barbiere.be"}
            bac={"Bachelière en Immobilier Architecte d'intérieur"}
          />
          <CardTeams
            img={"/assets/barbiere.jpg"}
            nom={"Philippe Gatz"}
            post={"Agent Immobilier"}
            ipi={"Nr d’agréation IPI : 510912"}
            region={"Verviers / Herve"}
            tel={"0473 29 00 70"}
            mail={"pg@barbiere.be"}
            bac={""}
          />

          <CardTeams
            img={"/assets/pers1test.jpg"}
            nom={"Zoé Livron"}
            post={"Conseillère en immobilier"}
            ipi={"Nr d’agréation IPI : 513512"}
            region={"Huy / Héron / Burdinne / Andenne"}
            tel={"0473 29 00 70"}
            mail={"zl@barbiere.be"}
            bac={"Bachelière en Immobilier"}
          />

          <CardTeams
            img={"/assets/lisa.jpg"}
            nom={"Lisa Yodts"}
            post={"Stagiaire en Immobilier"}
            ipi={""}
            region={""}
            tel={"019 30 57 32"}
            mail={"ly@barbiere.be"}
            bac={""}
          />
          <CardTeams
            img={"/assets/logoB.svg"}
            nom={"dévoiler en 2023"}
            post={"Conseillère en immobilier"}
            ipi={""}
            region={"Namur / Beauraing / Dinant"}
            tel={""}
            mail={""}
            bac={""}
          />
        </Container>
      </Container>
    </NavPage>
  );
}
