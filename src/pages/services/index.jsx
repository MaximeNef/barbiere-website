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
      p: (
        <p>
          La première étape, essentielle, est gratuite et sans engagement :
          <strong className='font-semibold'>
            {" "}
            l’analyse approfondie du bien afin de pouvoir en évaluer la valeur
            vénale,
          </strong>{" "}
          de manière professionnelle et objective, en fonction des conditions du
          marché.
          <strong className='font-semibold'>
            {" "}
            Préalablement à la mise en vente,
          </strong>{" "}
          nous procédons à{" "}
          <strong className='font-semibold'>
            {" "}
            différentes recherches administratives
          </strong>{" "}
          nous permettant de vérifier de nombreux points, gage d’une vente
          totalement sécurisée.
          <strong className='font-semibold'>
            {" "}
            Lors de la mise en vente,
          </strong>{" "}
          selon le type de bien, nous procédons ensuite :
          <li className='pl-4 my-4'> au choix des canaux de publicité,</li>{" "}
          <li className='pl-4 my-4'>
            à l’élaboration de{" "}
            <strong className='font-semibold'>supports de présentation </strong>
            (dossier détaillé, photos et vidéos réalisées par des partenaires
            professionnels){" "}
            <strong className='font-semibold'>
              permettant une valorisation optimale de votre bien.
            </strong>{" "}
          </li>
          <li className='pl-4 my-4'>
            la
            <strong className='font-semibold'>
              {" "}
              promotion de manière pro-active
            </strong>{" "}
            (mailing ciblé) auprès de nos nombreux candidats, mais également sur
            les{" "}
            <strong className='font-semibold'>
              plus grands sites immobiliers et les réseaux sociaux.
            </strong>{" "}
          </li>
          L’ensemble des visites sont réalisées par du personnel formé,
          accompagné par les cadres de l’agence, avec pour objectif une
          <strong className='font-semibold'>
            {" "}
            présentation complète et détaillée de chaque bien,
          </strong>{" "}
          permettant à chaque acheteur d’en avoir une image positive et une
          parfaite compréhension.
          <strong className='font-semibold'>
            Durant tout le processus de mise en vente,
          </strong>{" "}
          les étapes de la négociation et l’examen de la solvabilité et du plan
          de financement de l’acheteur, nous{" "}
          <strong className='font-semibold'>
            veillons à vous tenir régulièrement au courant de leur avancement.{" "}
          </strong>
          Vous bénéficiez toujours d’un{" "}
          <strong className='font-semibold'>
            temps de réflexion et pouvez donc décider en toute quiétude.{" "}
          </strong>
          Nous nous chargeons de la{" "}
          <strong className='font-semibold'>
            rédaction du compromis de vente en des termes protégeant vos droits,
          </strong>{" "}
          en collaboration avec les études des parties, afin de concrétiser et
          parfaitement finaliser tous les aspects de la vente. Durant notre
          mission de vente, nous nous occupons de tous les détails du projet.
          <strong className='font-semibold'>
            Vous pouvez donc vivre ces étapes en confiance et en parfaite
            sérénité…
          </strong>
        </p>
        // <p>
        //   La première étape, essentielle, est gratuite et sans engagement. Elle
        //   consiste en une{" "}
        //   <strong className='font-semibold'>
        //     analyse approfondie du bien afin de pouvoir en évaluer la valeur
        //     vénale,
        //   </strong>{" "}
        //   de manière professionnelle et objective, en fonction des conditions du
        //   marché. Préalablement à la mise en vente, nous procédons à{" "}
        //   <strong className='font-semibold'>
        //     différentes recherches administratives
        //   </strong>{" "}
        //   nous permettant de vérifier de nombreux points, gage d’une vente
        //   totalement sécurisée. Selon le type de bien, nous procédons ensuite au{" "}
        //   <strong className='font-semibold'>
        //     choix des canaux de publicité,
        //   </strong>{" "}
        //   à l’élaboration de supports de présentation (dossier détaillé, photos
        //   et vidéos réalisées par des partenaires professionnels) permettant une{" "}
        //   <strong className='font-semibold'>
        //     valorisation optimale de votre bien.
        //   </strong>{" "}
        //   La promotion est réalisée de manière pro-active (mailing ciblé) auprès
        //   de nos nombreux candidats, mais également sur les plus grands sites
        //   immobiliers et les réseaux sociaux. L’ensemble des visites sont
        //   réalisées par du personnel formé, encadré par les associés de
        //   l’agence, avec pour objectif une{" "}
        //   <strong className='font-semibold'>
        //     présentation complète et détaillée de chaque bien,
        //   </strong>{" "}
        //   avec la volonté de permettre à chaque acheteur d’en avoir une image
        //   positive et une parfaite compréhension. Durant tout le processus de
        //   mise en vente, les étapes de la négociation et l’examen de la
        //   solvabilité et du plan de financement de l’acheteur, nous
        //   <strong className='font-semibold'>
        //     veillons à vous tenir régulièrement au courant de leur avancement.
        //   </strong>
        //   Vous bénéficiez toujours d’un temps de réflexion et pouvez donc
        //   décider en toute quiétude. Nous nous chargeons de la{" "}
        //   <strong className='font-semibold'>
        //     rédaction du compromis de vente en des termes protégeant vos droits,
        //   </strong>{" "}
        //   en collaboration avec les études des parties, afin de concrétiser et
        //   parfaitement finaliser tous les aspects de la vente. Durant notre
        //   mission de vente, nous nous occupons de tous les détails du projet.
        //   <strong className='font-semibold'>
        //     {" "}
        //     Vous pouvez vivre ces étapes en confiance et en parfaite sérénité..
        //   </strong>
        // </p>
      ),
      btn: "En savoir plus",
    },
    {
      img: "/assets/Key.svg",
      h2: "Louer",
      p: (
        <p>
          Nous nous occupons de tout le{" "}
          <strong className='font-semibold'>
            processus de présentation de votre bien et de la sélection des
            meilleurs candidats,
          </strong>{" "}
          selon des critères objectifs et respectant notre code de déontologie.
          Une fois le(s) candidat(s) choisi(s), nous rédigeons le contrat de{" "}
          <strong className='font-semibold'>bail,</strong> établissons un{" "}
          <strong className='font-semibold'>
            état des lieux d’entrée détaillé
          </strong>{" "}
          et nous chargeons de{" "}
          <strong className='font-semibold'>
            l'enregistrement de ceux-ci.
          </strong>{" "}
          Nous restons la première personne de contact avec votre locataire,
          pour solutionner les premiers problèmes éventuels et gérons, à la fin
          de la location,
          <strong className='font-semibold'>
            l'état des lieux de sortie.{" "}
          </strong>
        </p>
      ),
      btn: "En savoir plus",
    },
    {
      img: "/assets/Expert.svg",
      h2: "Expertise",
      p: (
        <p>
          Notre équipe d'experts se tient à votre disposition pour réaliser{" "}
          <strong className='font-semibold'>tout type d'expertise</strong> dans
          le cadre de succession, divorce, constitution de société, faillite,
          etc.{" "}
          <strong className='font-semibold'>
            ou simplement pour vous permettre de connaître la valeur de votre
            bien.
          </strong>
        </p>
      ),
      btn: "En savoir plus",
    },
    {
      img: "/assets/lien.svg",
      h2: "Liens utiles",
      href: {
        name: "•Calcul de frais d'acquisition ",
        desc: "https://www.notaire.be/calcul-de-frais/achat",
      },
      href1: {
        name: "•Document de reprise des énergies (électircité et/ou gaz)",
        desc: "https://www.cwape.be/docs/?doc=919",
      },
      href2: {
        name: "•Formulaire changement usager (eay - CILE)",
        desc: "https://www.cile.be/sites/default/files/2022-06/Formulaire%20de%20changement%20d'usager.pdf?ver=2019-07-23-075233-290",
      },
      href3: {
        name: "•Formulaire changement usager ( eau - SWDE)",
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
        <h3 className='	  text-[20px] md:text-[24px]  font-light leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default mt-5 md:mt-8 '>
          {
            "Une maîtrise parfaite et une prise en charge complète de votre dossier: "
          }
          <span className=' py-2 md:py-4'>
            {
              "accompagnement assistance et conseils jusqu’à la signature de l’acte de vente chez votre notaire, "
            }
          </span>
          <span>
            {
              " dans le respect le plus strict des règles déontologiques imposées par notre profession."
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
