import Head from "next/head";
import NavPage from "../../components/all/Nav-page";
import H1 from "../../components/shared/h1";
import Container from "../../components/shared/container";
import Carousel from "../../components/shared/carousel";
import MyImage from "../../components/shared/myimage";
import CardTeams from "../../components/shared/card-teams";

export default function AgenceTest() {
  const photo = [
    "/assets/façade.webp",
    "/assets/vitrine.webp",
    "/assets/deco.webp",
  ];

  const Teams = [
    {
      img: "/assets/Mrbarbiere.webp",
      nom: "François Barbière ",
      post: "Agent Immobilier - Gérant",
      ipi: "Nr d’agréation IPI : 506259",
      region: "Hannut / Waremme & leurs villages",
      tel: "019 30 57 32",
      mail: "fb@barbiere.be",
      bac: "Expert Immobilier IFAPME  Licencié HEC Lg ",
    },

    {
      img: "/assets/ste.webp",
      nom: "Stéphane Beaujot ",
      post: "Agent immobilier - Associé",
      ipi: "Nr d’agréation IPI : 510059",
      region: "Liège / Embourg / Beaufays",
      tel: "0477 75 44 10",
      mail: "sb@barbiere.be",
      bac: "Bachelier en Immobilier",
    },

    {
      img: "/assets/vanhove.webp",
      nom: "Gaëtane Van Hove ",
      post: "Conseillère en Immobilier",
      ipi: "Nr d’agréation IPI : 516771",
      region: "Braives / Brabant Wallon",
      tel: "0479 54 76 01",
      mail: "gv@barbiere.be",
      bac: "Bachelière en Immobilier Architecte d'intérieur",
    },
    {
      img: "/assets/NewGatz.webp",
      nom: "Philippe Gatz",
      post: "Agent Immobilier - Associé",
      ipi: "Nr d’agréation IPI : 510912",
      region: "Verviers / Herve / Heusy",
      tel: "0473 29 00 70",
      mail: "pg@barbiere.be",
      bac: "",
    },
    {
      img: "/assets/kenzacopie.webp",
      nom: "Kenza Haddioui",
      post: "Conseillère en Immobilier",
      ipi: "Nr d’agréation IPI : en attente",
      region: "",
      tel: "019 30 57 32",
      mail: "kh@barbiere.be",
      bac: "Bachelière en Immobilier",
    },
    {
      img: "/assets/corinne.webp",
      nom: "Corinne Genon",
      post: "Agent Immobilier",
      ipi: "Ordre des Architectes : 1700803",
      region: "Waremme – Geer",
      tel: "019 30 57 32",
      mail: "cg@barbiere.be",
      bac: "Architecte",
    },
    // {
    //   img: "/assets/pers1test.webp",
    //   nom: "Zoé Livron",
    //   post: "Agent immobilier",
    //   ipi: "Nr d’agréation IPI : 513512",
    //   region: "Huy / Héron / Burdinne / Andenne",
    //   tel: "0492 55 69 36",
    //   mail: "zl@barbiere.be",
    //   bac: "Bachelière en Immobilier",
    // },
    // {
    //   img: "/assets/lisa.webp",
    //   nom: "Lisa Yodts",
    //   post: "Stagiaire en Immobilier",
    //   ipi: "",
    //   region: "",
    //   tel: "019 30 57 32",
    //   mail: "ly@barbiere.be",
    //   bac: "",
    // },
    // {
    //   img: "/assets/Valerie.webp",
    //   nom: "Valérie Crahay",
    //   post: "Conseillère en Immobilier",
    //   ipi: "Nr d’agréation IPI : 514538",
    //   region: "Namur / Beauraing / Dinant / Wasseiges",
    //   tel: "0498 71 40 57",
    //   mail: "vc@barbiere.be",
    //   bac: "",
    // },
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
        <h3 className='	  text-[18px] md:text-[24px]  font-light leading-[20px] text-center flex flex-col items-start md:items-center justify-center text-default  mt-5 md:mt-8 '>
          {
            "Forte d’une expérience de plus de 20 années dans l’immobilier et la construction,"
          }
          <span className='py-2 md:py-4'>
            {
              "notre équipe d’agents immobiliers (agréés IPI) vous assurera un service, sur mesure,"
            }
          </span>
          <span>
            {
              "pour louer ou vendre votre bien immobilier au mieux de vos intérêts."
            }
          </span>
        </h3>
      </Container>
      <Carousel photo={photo} />
      <H1 className='mt-12 md:mt-20'>{"Notre équipe"}</H1>
      <h3 className='	  text-[18px] md:text-[24px]  font-light leading-[20px] text-center flex flex-col items-start md:items-center justify-center text-default mt-5  md:mt-12 md:mb-10 md:mx-[15%] '>
        {
          "Notre équipe est à votre écoute pour vous apporter des conseils avisés et vous accompagner pour une valorisation optimale de votre bien immobilier."
        }
      </h3>
      <Container className='md:hidden mt-4'>
        <MyImage
          source='/assets/teambarbiere.webp'
          w='100'
          h='300'
          objectFit='cover'
          className={" rounded-2xl"}
        />
      </Container>
      <Container className='hidden md:inline-flex relative h-[600px]'>
        <MyImage
          source='/assets/teambarbiereCrop.webp'
          w='100'
          h='600'
          objectFit='cover'
          className={"  rounded-2xl "}
        />
      </Container>
      <Container className='space-y-[20px]   sm:space-y-0 md:justify-start   mt-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4  '>
        {Teams.map((team, i) => {
          return (
            <CardTeams
              key={i}
              img={team.img}
              nom={team.nom}
              post={team.post}
              ipi={team.ipi}
              region={team.region}
              tel={team.tel}
              mail={team.mail}
              bac={team.bac}
            />
          );
        })}
      </Container>
    </NavPage>
  );
}
