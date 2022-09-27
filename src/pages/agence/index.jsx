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

export default function Agence() {
  return (
    <NavPage current={"Agence / Equipe"}>
      <Container className='md:px-14'>
        <H1>{"Notre agence"}</H1>{" "}
        <MotionTop
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className='	  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default  mt-12 '>
            {
              "Forte d’une expérience de plus de 20 années dans l’immobilier et la construction, notre équipe d’agents immobiliers (agréés IPI), vous assurera un service de qualité, sur mesure, pour louer et vendre votre bien immobilier au mieux de vos intérêts."
            }
          </h3>
        </MotionTop>{" "}
        <ImgAgence />
        <H1 className='mt-12'>{"Notre équipe"}</H1>{" "}
        <MotionTop
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className='	  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default   md:mt-12 md:mb-10 '>
            {
              " Une valorisation optimale de votre bien immobilier et votre entière satisfaction est notre but. "
            }
          </h3>
        </MotionTop>{" "}
        <MotionTop
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <MyImage
            source='/assets/equipe.png'
            w='100%'
            h='50%'
            className={" object-cover   w-full  mx-[-20px] m-auto  "}
            // objectFit={"cover"}
            layout='responsive'
            objectFit='contain'
          />
        </MotionTop>{" "}
        <Container className='space-y-[20px] md:flex md:flex-row md:flex-wrap md:space-y-0 md:justify-center '>
          <MotionRight
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <CardTeams
              img={"/assets/barbiere.svg"}
              nom={"François Barbière "}
              post={"Agent Immobilier - Gérant"}
              ipi={"Nr d’agréation IPI : 506259"}
              region={"Région : Hebaye"}
              tel={"0493/193.003"}
              mail={"fb@barbiere.be"}
            />
          </MotionRight>{" "}
          <MotionRight
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <CardTeams
              img={"/assets/ste.jpg"}
              nom={"Stéphane Beaujot "}
              post={"Agent Immobilier"}
              ipi={"Nr d’agréation IPI : 510059"}
              region={"Région : Liège"}
              tel={"0477/75.44.10"}
              mail={"sb@barbiere.be"}
            />
          </MotionRight>{" "}
          <MotionRight
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <CardTeams
              img={"/assets/Gillon.jpg"}
              nom={"Camille Gillon"}
              post={"Conseillère en Immobilier"}
              ipi={"Nr d’agréation IPI : 506259"}
              region={"Région : Hannut"}
              tel={"0497/40.85.29"}
              mail={"cg@barbiere.be"}
            />
          </MotionRight>{" "}
          <MotionRight
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <CardTeams
              img={"/assets/VanHove.jpg"}
              nom={"G. Van Hove "}
              post={"Conseillère en Immobilier"}
              ipi={"Nr d’agréation IPI : 510912"}
              region={"Région : Hannut"}
              tel={"0473/29.00.70"}
              mail={"gv@barbiere.be"}
            />
          </MotionRight>
        </Container>
      </Container>
    </NavPage>
  );
}
