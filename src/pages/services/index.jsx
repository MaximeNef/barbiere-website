import H1 from "../../components/shared/h1";

import H3 from "../../components/shared/h3";

import CardInfo from "../../components/shared/card-Info";
import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";
import MotionBottom from "../../components/shared/motion-bottom";
import MotionRight from "../../components/shared/motion-CardRight";
import MotionTop from "../../components/shared/motion-top";
import { useEffect, useState } from "react";
import Head from "next/head";
import ImgAgence from "../../components/agence/img-agence";
import Carousel from "../../components/shared/carousel";
export default function Services() {
  // The default value is 'blue', it will be used during pre-rendering and the first render in the browser (hydration)
  const [color, setColor] = useState("blue");
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setColor("red"), []);
  const services = [
    {
      img: "/assets/serviceVendre.svg",
      h2: "Vendre",
      p: "La première étape, essentielle, consiste en une analyse approfondie du bien afin de pouvoir en évaluer la valeur vénale, de manière professionnelle et objective, en fonction des conditions de marché (celle-ci est gratuite et sans engagement). Préalablement à la mise en vente, nous procédons à différentes recherches administratives, nous permettant de vérifier de nombreux points, gage d’une vente totalement sécurisée. Selon de type de bien, nous procédons ensuite au choix des canaux de publicité, rédaction de support de présentation (dossier détaillée, photos et vidéos de présentation réalisées par des partenaire professionnels, permettant une valorisation optimale de votre bien.  La promotion est réalisée de manière pro-active (mailing ciblés) auprès de nos nombreux candidats, mais également sur les plus grands sites immobiliers et les réseaux sociaux.L’ensemble des visites sont réalisées par du personnel formé, encadré par les associés de l’agence, avec pour objectif une présentation complète et détaillé de chaque maison, avec la volonté de permettre à chaque acheteur d’avoir une image positive et parfaite compréhension de chaque maison mise en vente. Durant tout le processus de mise en vente et les étapes de la négociation et l’examen de la solvabilité et du plan de financement de l’acheteur, nous veillons à vous tenir régulièrement au courant de leur avancement. Vous bénéficiez toujours d’un temps de réflexion … ; vous pouvez décider en toute quiétude, Nous nous chargeons de la rédaction du compromis de vente en des termes protégeant vos droits, en collaboration avec les études des parties, afin de concrétiser et parfaitement finaliser  tous les aspects de la vente. Durant toute notre mission de vente, nous nous occupons de tous les détails du projet. Vous pouvez vivre ces étapes en confiance et en toute sérénité.",
      btn: "En savoir plus",
    },
    {
      img: "/assets/Key.svg",
      h2: "Louer",
      p: "Nous nous occupons de tout le processus de présentation de votre bien et de la sélection des meilleurs candidats, selon des critères objectifs et respectant notre code de déontologie. Une fois le(s) candidat(s) choisi(s), nous rédigeons le contrat de bail, établissons un état des lieux détaillé et nous chargeons de l'enregistrement de ceux-ci. Nous restons la première personne de contact avec votre locataire, pour solutionner les premiers problèmes éventuels. Nous restons dès lors la personne de contact durant toute la durée du bail et gérons, à la fin de la location, l'état des lieux de sortie.",
      btn: "En savoir plus",
    },
    {
      img: "/assets/Expert.svg",
      h2: "Expertise",
      p: "Notre équipe d'experts se tient à votre disposition pour réaliser tout type d'expertise dans le cadre de successions, divorces, constitution de société, faillites, … ou simplement pour vous permettre de connaître la valeur de votre bien.",
      btn: "En savoir plus",
    },
    {
      img: "/assets/lien.svg",
      h2: "Liens utiles",
      href: {
        name: "•Calcul de frais ",
        desc: "https://www.notaire.be/calcul-de-frais/achat",
      },
      href1: {
        name: "•Formulaire des energies ",
        desc: "https://www.cwape.be/formulaire-de-reprise-des-energies",
      },
      href2: {
        name: "•Formulaire changement usager ",
        desc: "https://www.cile.be/sites/default/files/2022-06/Formulaire%20de%20changement%20d'usager.pdf?ver=2019-07-23-075233-290",
      },
      href3: {
        name: "•Formulaire de déménagement",
        desc: "https://www.swde.be/sites/default/files/2022-06/form.demenagement_fr.pdf",
      },
      btn: "En savoir plus",
    },
  ];
  const photo = ["/assets/emploi1.jpg", "/assets/desk.jpg"];
  return (
    <NavPage current={"Nos services"}>
      <Head>
        <title>{"Barbiere-Immo "}</title>
        <meta
          name='Barbiere immobilier'
          content="François Barbiere et ses associés ont pour vocation de dénicher le biens de vos rêves. Maison , appartement , ect  vous retrouverez tout ce qu'il faut chez nous "
        />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <H1>{"Nos Services"}</H1>{" "}
      <MotionTop
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h3 className='	  text-[20px] md:text-[24px]  font-light leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default  mt-12 '>
          {
            "Une maîtrise parfaite et prise en charge complète de votre dossier:  "
          }
          <span className=' py-2 md:py-4'>
            {
              "accompagnement, assistance et conseils jusqu’à la signature de l’acte de vente chez votre Notaire."
            }
          </span>
          <span>
            {
              "Dans le respect le plus strict des règles déontologiques imposées par notre profession."
            }
          </span>
        </h3>
      </MotionTop>{" "}
      <Container className='md:px-14'>
        <Carousel photo={photo} />
      </Container>
      <Container className='space-y-[40px] md:space-y-0 mt-10 md:mt-4 md:flex md:flex-row md:flex-wrap md:justify-center md:items-center  '>
        {services.map((service, i) => {
          return (
            <CardInfo
              img={service.img}
              h2={service.h2}
              p={service.p}
              href={service.href}
              href1={service.href1}
              href2={service.href2}
              href3={service.href3}
              btn={service.btn}
              key={i}
            />
          );
        })}
      </Container>
    </NavPage>
  );
}
