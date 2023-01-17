import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import Btn3 from "../../components/shared/btn3";
import Container from "../../components/shared/container";
import Flex from "../../components/shared/flex";
import H1 from "../../components/shared/h1";
import H3 from "../../components/shared/h3";
import { createClient } from "../../../prismicio";
import CardBienVendu from "../../components/biens/cardBiensVendu";
import CardBienLocation from "../../components/biens/CardBienLocation";
import MotionBottom from "../../components/shared/motion-bottom";
import MotionRight from "../../components/shared/motion-CardRight";
import Head from "next/head";
import CardDesktop from "../../components/shared/card-cta-desktop";
export default function Biens({ pages, locations, vendu, loué }) {
  return (
    <NavPage current='Nos biens'>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <H1>{"Nos biens"}</H1>
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {" "}
        <Flex justify='between' className=' my-5'>
          {" "}
          <H3 className=''>{"Nos biens à vendre"}</H3>{" "}
          <Btn3 src='/a-vendre' color='black' text='voir plus' />
        </Flex>{" "}
      </MotionBottom>
      <Flex className='md:w-[100%]   container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px]  md:mr-[-60px] '>
        <CardBien pages={pages} />
      </Flex>
      <Container className='my-10'>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.7, delay: 0.9 }}
          className='md:w-[65%] mx-auto'
        >
          <CardDesktop />
        </MotionRight>
      </Container>
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5 }}
      >
        {" "}
        <Flex justify='between' className='mb-5'>
          <H3 className=''>{"Nos biens à louer"}</H3>{" "}
          <Btn3 src='/a-louer' color='black' text='voir plus' />{" "}
        </Flex>
      </MotionBottom>
      <Flex className='md:w-[100%]  container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px]  md:mr-auto'>
        <CardBienLocation pages={locations} />
        {/* <Container className='  w-[100px] flex-shrink-0 h-[200px] flex items-center justify-center mx-10  md:hidden  '></Container> */}
      </Flex>{" "}
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.5 }}
      >
        <Flex justify='between' className='mb-5 mt-[60px]'>
          <H3 className=''>{"Nos biens vendus/loués"}</H3>{" "}
          <Btn3 src='/vendu' color='black' text='voir plus' />{" "}
        </Flex>{" "}
      </MotionBottom>
      <Flex className='md:w-[100%] container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px] md:pl-[20px]   md:mr-auto'>
        <CardBienVendu pages={vendu} locations={loué} />
      </Flex>
    </NavPage>
  );
}

// connection a prismic et affiche tous les biens a vendre et a louer et vendu
// quand tu click ça va vers la page en question

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("vendre");
  const locations = await client.getAllByType("location");
  const pagesFilter = pages.filter(
    (page) => page.data.slices[0].primary.vendu !== true
  );
  const locationsFilter = locations.filter(
    (location) => location.data.slices[0].primary.vendu !== true
  );
  return {
    props: {
      pages: pagesFilter,
      locations: locationsFilter,
      vendu: pages,
      loué: locations,
    },
  };
}
