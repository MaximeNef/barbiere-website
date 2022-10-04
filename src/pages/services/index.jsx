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
      p: "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !",
      btn: "En savoir plus",
    },
    {
      img: "/assets/Key.svg",
      h2: "Louer",
      p: "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !",
      btn: "En savoir plus",
    },
    {
      img: "/assets/Expert.svg",
      h2: "Expertise",
      p: "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis...  plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !",
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
        <h3 className='	  text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default  mt-12 '>
          {
            "Immo Barbière vous propose une maîtrise parfaite et prise en charge complète de votre dossier "
          }
        </h3>
      </MotionTop>
      <Container className='space-y-[40px] md:space-y-0 mt-12 md:flex md:flex-row md:flex-wrap md:justify-center md:items-center  '>
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
