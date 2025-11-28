import NavPage from "../../components/all/Nav-page";
import CardBien from "../../components/biens/cardBiens";
import Btn3 from "../../components/shared/btn3";
import Container from "../../components/shared/container";
import Flex from "../../components/shared/flex";
import H1 from "../../components/shared/h1";
import H3 from "../../components/shared/h3";
import { createClient } from "../../../prismicio";
import CardBienVendu from "../../components/biens/cardBiensVendu";
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
        <CardBien pages={pages} bieneAvendre={true} />
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
        <CardBien pages={locations} bieneAvendre={false} />
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

  // 1. Récupérer tous les biens à vendre et à louer
  const allVendre = await client.getAllByType("vendre");
  const allLocation = await client.getAllByType("location");
  const allBiens = [...allVendre, ...allLocation];

  // 2. Récupérer le document d'ordre
  let ordreDoc = null;
  try {
    ordreDoc = await client.getSingle("ordre_biens");
  } catch (e) {
    ordreDoc = null;
  }

  // 3. Extraire les IDs des biens dans l'ordre
  const orderedIds = ordreDoc
    ? ordreDoc.data.liste_biens.map((item) => item.bien.id)
    : [];

  // 4. Construire la liste ordonnée
  const orderedBiens = [];
  const remainingBiens = [...allBiens];

  orderedIds.forEach((id) => {
    const idx = remainingBiens.findIndex((bien) => bien.id === id);
    if (idx !== -1) {
      orderedBiens.push(remainingBiens[idx]);
      remainingBiens.splice(idx, 1);
    }
  });
  const finalBiens = [...orderedBiens, ...remainingBiens];

  // 5. Filtrer pour chaque catégorie
  const pages = finalBiens.filter(
    (bien) =>
      bien.type === "vendre" && bien.data.slices[0].primary.vendu !== true
  );
  const locations = finalBiens.filter(
    (bien) =>
      bien.type === "location" && bien.data.slices[0].primary.vendu !== true
  );
  const vendu = finalBiens.filter(
    (bien) =>
      bien.type === "vendre" && bien.data.slices[0].primary.vendu === true
  );
  const loue = finalBiens.filter(
    (bien) =>
      bien.type === "location" && bien.data.slices[0].primary.vendu === true
  );

  return {
    props: {
      pages,
      locations,
      vendu,
      loué: loue,
    },
  };
}
