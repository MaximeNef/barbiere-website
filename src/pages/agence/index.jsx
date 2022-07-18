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

export default function Agence() {
  return (
    <NavPage>
      <H1>{"Notre agence"}</H1>
      <H3 className='mt-10'>
        {
          "Forte de 20 ans d’expérience, Immo Barbière est la référence quand il s’agit d’acheter ou de mettre son bien en vente. "
        }
      </H3>
      <ImgAgence />
      <H1 className='mt-12'>{"Notre équipe"}</H1>
      <H3 className='mt-10 mb-10'>
        {
          "Forte de 20 ans d’expérience, Immo Barbière est la référence quand il s’agit d’acheter ou de mettre son bien en vente. "
        }
      </H3>
      <Container className='space-y-[50px]'>
        <CardTeam
          img={"/assets/barbiere.svg"}
          nom={"François Barbière "}
          post={"Agent Immobilier - Gérant"}
          ipi={"Nr d’agréation IPI : 506259"}
          tel={"0493/193.003"}
          mail={"fb@barbiere.be"}
        />
        <CardTeam
          img={"/assets/barbiere.svg"}
          nom={"François Barbière "}
          post={"Agent Immobilier - Gérant"}
          ipi={"Nr d’agréation IPI : 506259"}
          tel={"0493/193.003"}
          mail={"fb@barbiere.be"}
        />
        <CardTeam
          img={"/assets/barbiere.svg"}
          nom={"François Barbière "}
          post={"Agent Immobilier - Gérant"}
          ipi={"Nr d’agréation IPI : 506259"}
          tel={"0493/193.003"}
          mail={"fb@barbiere.be"}
        />
        <CardTeam
          img={"/assets/barbiere.svg"}
          nom={"François Barbière "}
          post={"Agent Immobilier - Gérant"}
          ipi={"Nr d’agréation IPI : 506259"}
          tel={"0493/193.003"}
          mail={"fb@barbiere.be"}
        />
      </Container>
    </NavPage>
  );
}
