import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";
import H1 from "../../components/shared/h1";
import MotionTop from "../../components/shared/motion-top";
import CardJob from "../../components/shared/card-job";
import Head from "next/head";
import ImgAgence from "../../components/agence/img-agence";
import Carousel from "../../components/shared/carousel";
export default function Emplois() {
  const services = [
    {
      img: "/assets/serviceVendre.svg",
      h2: "Agent immobilier",
      p: "Pour soutenir notre développement en Wallonie et à Bruxelles, nous rechercherons des agents immobiliers (agrées IPI) expérimentés. N’hésitez pas à nous contacter pour plus d'informations et à nous transmettre votre curriculum vitae complet, vos références, ainsi qu’une lettre de motivation, à l’adresse suivante: fb@barbiere.be.      A très bientôt !",
      btn: "Je postule",
      mail: "mailto:fb@barbiere.be?subject=Agent Immobilier",
    },
    {
      img: "/assets/serviceVendre.svg",
      h2: "Candidature spontanée",
      p: "Pour toute demande de candidature spontanée, n’hésitez pas à nous contacter pour plus d'informations et à nous transmettre votre curriculum vitae, vos références, ainsi qu’une lettre de motivation, à l’adresse suivante: fb@barbiere.be. A très bientôt !",
      btn: "Je postule",
      mail: "mailto:fb@barbiere.be?subject=Candidature spontanée",
    },
  ];
  return (
    <NavPage current={"Emplois"}>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <H1>{"Emplois"}</H1>
      <MotionTop
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h3 className='	 mt-12 text-[20px] md:text-[24px]  font-light leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default '>
          {
            "L'Immobilière François Barbière est toujours à la recherche de bons éléments pour agrandir son équipe  "
          }
        </h3>
      </MotionTop>
      <Container className='md:px-14'>
        <ImgAgence src='/assets/inter.jpg' />
      </Container>

      <Container className='space-y-[40px] mt-12 md:flex md:flex-row md:flex-wrap md:space-y-0 md:justify-center '>
        {services.map((service, i) => {
          return (
            <CardJob
              img={service.img}
              h2={service.h2}
              p={service.p}
              btn={service.btn}
              key={i}
              mail={service.mail}
            />
          );
        })}
      </Container>
    </NavPage>
  );
}
