import H1 from "../../components/shared/h1";
import CardInfo from "../../components/shared/card-Info";
import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";
import MotionTop from "../../components/shared/motion-top";
import { useEffect, useState } from "react";
import Head from "next/head";
import Carousel from "../../components/shared/carousel";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      img: "/assets/serviceVendre.svg",
      h2: "Vendre",
      p: (
        <div>
          La première étape, essentielle, est gratuite et sans engagement :
          <strong className='font-semibold'>
            {" "}
            l’analyse approfondie du bien afin de pouvoir en évaluer la valeur
            vénale,
          </strong>{" "}
          de manière professionnelle et objective, en fonction des conditions du
          marché.
          <br />
          <br />
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
          <br />
          <br />
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
            <br />
            Exemples de vidéos réalisées :{" "}
            <Link href='https://www.youtube.com/@immobilierefrancoisbarbier1746/videos'>
              <div
                passhref
                target='_blank'
                className=' text-blue-600 underline'
              >
                Cliquez-ici
              </div>
            </Link>
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
          <br />
          <br />
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
          </strong>{" "}
          <br />
          <br />
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
        </div>
      ),
      btn: "En savoir plus",
    },
    {
      img: "/assets/Key.svg",
      h2: "Louer",
      p: (
        <div>
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
        </div>
      ),
      btn: "En savoir plus",
    },
    {
      img: "/assets/Expert.svg",
      h2: "Expertise",
      p: (
        <div>
          Notre équipe d'experts se tient à votre disposition pour réaliser{" "}
          <strong className='font-semibold'>tout type d'expertise</strong> dans
          le cadre de succession, divorce, constitution de société, faillite,
          etc.{" "}
          <strong className='font-semibold'>
            ou simplement pour vous permettre de connaître la valeur de votre
            bien.
          </strong>
        </div>
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
        name: "•Formulaire changement usager (eau - CILE)",
        desc: "https://www.cile.be/sites/default/files/2022-06/Formulaire%20de%20changement%20d'usager.pdf?ver=2019-07-23-075233-290",
      },
      href3: {
        name: "•Formulaire changement usager ( eau - SWDE)",
        desc: "https://www.swde.be/sites/default/files/2022-06/form.demenagement_fr.pdf",
      },

      btn: "En savoir plus",
    },
  ];
  const photo = ["/assets/emploi1.webp", "/assets/desk.jpg"];
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
            "Pour un particulier, vendre un bien immobilier est une expérience importante mais rare, très souvent complexe et parsemée d’embûches. L’accompagnement d’un professionnel de l’immobilier s’avère la plupart du temps judicieux."
          }
          <span className=' py-2 md:py-4'>
            {
              "L’immobilière François Barbière & Associés maîtrise parfaitement toutes les étapes du processus de vente de votre bien et prend en charge l’ensemble de votre dossier, de l’expertise initiale jusqu’à la signature de l’acte chez le notaire."
            }
          </span>
          <span>
            {
              "Nous confier votre bien, c’est la garantie de la vente de votre bien dans des conditions optimales et en totale sérénité."
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
