import Head from "next/head";
import H1 from "../../components/shared/h1";
import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";
import MyImage from "../../components/shared/myimage";
import MotionTop from "../../components/shared/motion-top";
import MotionRight from "../../components/shared/motion-CardRight";
import CardTeams from "../../components/shared/card-teams";
import Carousel from "../../components/shared/carousel";
export default function Agence() {
  const photo = [
    "/assets/façade.webp",
    "/assets/vitrine.webp",
    "/assets/deco.webp",
  ];
  const Teams = [
    {
      img: "/assets/barbiere.webp",
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
      img: "/assets/cam.webp",
      nom: "Camille Gillon",
      post: "Conseillère en Immobilier",
      ipi: "Nr d’agréation IPI : 517107",
      region: "Hélécine / Orp-Jauche",
      tel: "0497 40 85 29",
      mail: "cg@barbiere.be",
      bac: "Bachelière en Immobilier",
    },

    {
      img: "/assets/vanhove.webp",
      nom: "Gaëtane Van Hove ",
      post: "Conseillère en Immobilier",
      ipi: "Nr d’agréation IPI : 516771",
      region: "Braives / Wasseiges",
      tel: "0479 54 76 01",
      mail: "gv@barbiere.be",
      bac: "Bachelière en Immobilier Architecte d'intérieur",
    },
    {
      img: "/assets/gatz.webp",
      nom: "Philippe Gatz",
      post: "Agent Immobilier - Associé",
      ipi: "Nr d’agréation IPI : 510912",
      region: "Verviers / Herve",
      tel: "0493 19 30 03",
      mail: "pg@barbiere.be",
      bac: "",
    },
    {
      img: "/assets/pers1test.webp",
      nom: "Zoé Livron",
      post: "Conseillère en immobilier",
      ipi: "Nr d’agréation IPI : 513512",
      region: "Huy / Héron / Burdinne / Andenne",
      tel: "0492 55 69 36",
      mail: "zl@barbiere.be",
      bac: "Bachelière en Immobilier",
    },
    {
      img: "/assets/lisa.webp",
      nom: "Lisa Yodts",
      post: "Stagiaire en Immobilier",
      ipi: "",
      region: "",
      tel: "019 30 57 32",
      mail: "ly@barbiere.be",
      bac: "",
    },
    {
      img: "/assets/Valerie.webp",
      nom: "Valérie Crahay",
      post: "Conseiller en Immobilier",
      ipi: "Nr d’agréation IPI : 514538",
      region: "Namur / Beauraing / Dinant",
      tel: "0498 71 40 57",
      mail: "vc@barbiere.be",
      bac: "",
    },

    {
      img: "/assets/Thierry.webp",
      nom: "Thierry Quennery",
      post: "Conseiller en Immobilier - Partner",
      ipi: "Nr d’agréation IPI : 517392",
      region: "Jodoigne / Brabant Wallon / Bruxelles",
      tel: "0476 88 00 60",
      mail: "tq@barbiere.be",
      bac: "Licencié en Ph. G.",
    },
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
                "notre équipe d’agents immobiliers (agréés IPI) vous assurera un service, sur mesure,"
              }
            </span>
            <span>
              {
                "pour louer ou vendre votre bien immobilier au mieux de vos intérêts."
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
              "Notre équipe est à votre écoute pour vous apporter des conseils avisés et vous accompagner pour une valorisation optimale de votre bien immobilier."
            }
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
                source='/assets/team.webp'
                w='100'
                h='50'
                layout='responsive'
                objectFit='cover'
              />
            </Container>
          </Container>{" "}
        </MotionRight>{" "}
        <Container className='space-y-[20px] md:flex md:flex-row md:flex-wrap md:space-y-0 md:justify-start md:mx-auto md:ml-[7%] mt-8  '>
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
      </Container>
    </NavPage>
  );
}
