import Head from "next/head";
import Flex from "../components/shared/flex";
import H3 from "../components/shared/h3";
import Btn3 from "../components/shared/btn3";
import NavPage from "../components/all/Nav-page";
import Container from "../components/shared/container";
import CardBien from "../components/biens/cardBiens";
import { createClient } from "../../prismicio";
import MotionRight from "../components/shared/motion-CardRight";
import MotionBottom from "../components/shared/motion-bottom";
import MotionCardRight from "../components/shared/motion-right";
import dynamic from "next/dynamic";
import BannerSection from "../components/home/BannerSection";
const DynamicCarte = dynamic(() => import("../components/home/CarteBelgique"));
const DynamicVideo = dynamic(() => import("../components/hero/heroImg"));
const DynamicChiffre = dynamic(() =>
  import("../components/home/chiffre-agence")
);
const DynamicCardCTA = dynamic(() => import("../components/shared/card-Cta"));
const DynamicAvis = dynamic(() => import("../components/shared/cardAvis"));

export default function Home({ pages }) {
  const avis = [
    {
      txt: "Nous avions tenté de gérer la mise en vente de notre habitation en direct avec les potentiels acheteurs. Cela s’est très vite évéré extrêmement contraignant, et davantage complexe que nous l’avions pensé. L’agence Barbière nous a proposé ses services, et, nous a tout de suite mis en confiance, malgré nos aprioris sur les agences immobilières.Après quelques entrevues, et un accord signé, les choses se sont très vite activées. Ils ont été hyper professionnels du début à la fin. Aucun tracas pour nous et une habitation vendue très rapidement !  En résumé ?   Professionnels, honnêtes et transparents. Nous restons en contact !",
      user: "B.D. & K.D.",
      region: "Wezeren",
    },
    {
      txt: "La présentation du projet, avec un entretien cordial, franc et très professionnel. En effet, vous avez mis en avant les avantages du bien, mais également les inconvénients. La brochure présentant le bien, avec quantité de photos mettant clairement en valeur les différents lots. Le bon conseil, de regrouper le tout en 1 seul lot. Une évaluation réelle, avec prix minimum, moyen et maximum. La vente a été réalisée entre le prix moyen et maximum ! La bonne négociation avec l’acheteur, tout en informant à chaque étape le vendeur. Sans oublier toutes les démarches administratives : service d’urbanisme, notaire, géomètre, … Je terminerai en certifiant que, grâce à ma propre expérience, je mets en avant les qualités de cette agence immobilière, qui plus est, EST LOCALE ….  N’allez pas chercher ailleurs ce que vous avez à portée de main à Hannut !!!",
      user: "M.J.",
      region: "Crehen",
    },
    {
      txt: "Nous avons fait appel à l’agence Barbière dans le cadre de la vente de deux maisons: l’une située à Dinant et l’autre à Beauraing.L’estimation des bâtiments s’est faite  au prix le plus juste compte tenu de la nature des biens mis en vente. Valérie et Monsieur Barbière ont effectué les visites de façon très professionnelle.  Les maisons ont été vendues assez rapidement.L’immobilière se charge de toutes les modalités et tracasseries administratives: offre d’achat, contact avec le notaire, etc.Nous sommes entièrement satisfaits des services proposés par M.Barbière et ses collaborateurs.",
      user: "M.D.",
      region: "Beauraing & Dinant",
    },
    {
      txt: "Un grand merci à toute l'équipe immobilière ‘François Barbière & associés’ pour les conseils lors de notre achat mais également pour l'accompagnement de la vente de notre bien. Équipe très professionnelle dans le CONSEIL. Nous n'avons jamais senti de pression mais plutôt de la bienveillance.",
      user: "L.B. & famille",
      region: "Berloz",
    },
    {
      txt: "Je ne peux que me féliciter d’avoir découvert votre société et mon avis se résume en quelques mots : Réactivité, positivité, disponibilité et gentillesse.",
      user: "V.C.",
      region: "Hannut",
    },
    {
      txt: "Bonjour, Ce petit mail pour féliciter l'agence Barbière de son professionnalisme, sa gentillesse ainsi que de ses bons conseils. Je ne manquerai pas de revenir vers vos services si l'occasion se présente. Bien à vous",
      user: "A.D.",
      region: "Omal",
    },
    {
      txt: "Des explications claires et complètes lors de la visite du bien. Un suivi régulier et une disponibilité de l’agent immobilier. Sans hésitation, je recommande l'agence Barbière.",
      user: "F.DS.",
      region: "Villers-le-Peuplier",
    },
    {
      txt: "Je recommande vivement l’agence immobilière Barbière. Une écoute et un professionnalisme irréprochable qui m'ont permis de vendre sereinement une maison familiale. Les explications claires ainsi que la transparence de la vente m'ont confirmé que j'avais fait le bon choix d'agence immobilière.",
      user: "A.G. ",
      region: "Sprimont",
    },
    {
      txt: "Travail rigoureux, efficace et dans le respect des attentes du client 😊. Je referais appel à vous les yeux fermés ! ",
      user: "A.V ",
      region: "Saint-Nicolas",
    },
    {
      txt: "Je remercie toute l’équipe pour le professionnalisme dont ils ont fait preuve pour la vente de nos deux biens. Nous avons été bien conseillés et suivis. ",
      user: "F.R ",
      region: "Jandrain & Saint-Hilaire-du-Bois",
    },
  ];

  return (
    <NavPage current='Accueil'>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='description'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        {/* <Link  rel='shortcut icon' href='/favicon.ico' /> */}
      </Head>
      <Container className=' 2xl:h-[1100px] md:max-h-[100vh] '>
        <DynamicVideo />
      </Container>
      <a name='some' className=' absolute bottom-[22px]' />
      <H3 className='mt-1 md:mt-0  ' id='Ancre'>
        {"Nous sommes actifs près de chez vous "}
      </H3>
      <DynamicCarte />
      <Container className='mt-5 md:mt-12 md:flex md:flex-row md:m-auto md:justify-around md:w-full md:min-h-[350px] md:mb-[60px] '>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.5 }}
          className='w-full inline-flex md:hidden'
        >
          <DynamicCardCTA
            text1={"Tous nos biens se trouvent ici"}
            text2={"Découvrez tous nos biens à vendre & louer."}
            text3={"Nos biens >"}
            src='/biens'
          />{" "}
        </MotionRight>{" "}
        <Container className='absolute w-full'>
          <BannerSection />
        </Container>
      </Container>
      <Flex justify='between' className='mt-12 mb-5 md:mt-[150px]'>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
          <H3 className=''>{"Nos nouveautés"}</H3>{" "}
        </MotionRight>
        <MotionRight
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
          <Btn3 src='/biens' color='black' text='voir plus' />
        </MotionRight>
      </Flex>
      <Flex className='md:w-[100%] container-snap snap-x snap-mandatory overflow-scroll  pr-10 pb-5 mx-[-20px] pl-[10px] md:pl-[20px] md:mr-auto md:my-5'>
        <CardBien pages={pages} />
      </Flex>
      <MotionBottom
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3 }}
      >
        <H3 className='mt-12 mb-6 md:mb-8 '>
          {"Notre agence en quelques chiffres"}
        </H3>
      </MotionBottom>
      <DynamicChiffre />
      <Container className='space-y-[20px] mt-12 '>
        <MotionBottom
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
        >
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
            {avis.map((avi, i) => {
              return (
                <DynamicAvis
                  key={i}
                  txt={avi.txt}
                  user={avi.user}
                  region={avi.region}
                />
              );
            })}

            <Container className='w-[10%]  snap-always snap-center flex-shrink-0   ' />
          </MotionCardRight>
        </Flex>
      </Container>
    </NavPage>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("vendre");

  const pagesFilter = pages.filter(
    (page) => page.data.slices[0].primary.vendu !== true
  );
  return {
    props: {
      pages: pagesFilter,
    },
  };
}
