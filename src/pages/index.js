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

export default function Home() {
  return (
    <div className='space-y-5 bg-teal-100 text-[#37474F] px-5'>
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
    </div>
  );
}
