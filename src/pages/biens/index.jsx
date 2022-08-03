import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import Btn3 from "../../components/shared/btn3";
import CardCTA from "../../components/shared/card-Cta";
import Container from "../../components/shared/container";
import Flex from "../../components/shared/flex";
import H1 from "../../components/shared/h1";
import H3 from "../../components/shared/h3";
//
import { SliceZone } from "@prismicio/react";
import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
import Image from "next/image";
import MyImage from "../../components/shared/myimage";

export default function Biens({ pages }) {
  console.log(pages, "prismic");
  return (
    <NavPage current='Nos biens'>
      <H1>{"Nos Biens"}</H1>
      <Flex justify='between' className=' my-5'>
        <H3 className=''>{"Nos biens à vendre"}</H3>
        <Btn3 src='/page' color='black' text='voir plus' />
      </Flex>
      <Flex className=' container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px] space-x-3'>
        <CardBien pages={pages} />
        <Container className='  w-[100px] flex-shrink-0 h-[200px] flex items-center justify-center mx-10  '></Container>
      </Flex>

      <Container className='my-10'>
        <CardCTA
          text1={"Ne manquez plus nos nouveaux biens !"}
          text2={
            "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !"
          }
          text3={"Nos biens >"}
          src='/pages'
        />
      </Container>
      {/* <Flex justify='between' className='mb-5'>
        <H3 className=''>{"Nos biens à louer"}</H3>
        <Btn3 src='/page' color='black' text='voir plus' />
      </Flex>
      <Flex className=' container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px]'>
        <CardBien /> <CardBien /> <CardBien /> <CardBien />
      </Flex>
      <Flex justify='between' className='mb-5 mt-[60px]'>
        <H3 className=''>{"Nos biens vendus/loués"}</H3>
        <Btn3 src='/page' color='black' text='voir plus' />
      </Flex>
      <Flex className=' container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px]'>
        <CardBien /> <CardBien /> <CardBien /> <CardBien />
      </Flex> */}
    </NavPage>
  );
}

// connection a prismic et affiche tous les biens a vendre et a louer et vendu
// quand tu click ça va vers la page en question
//

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("biencard");

  return {
    props: {
      pages,
    },
  };
}
