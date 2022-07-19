import H1 from "../../components/shared/h1";

import H3 from "../../components/shared/h3";

import CardInfo from "../../components/shared/card-Info";
import NavPage from "../../components/all/Nav-page";
import Container from "../../components/shared/container";

export default function Services() {
  const services = [
    {
      img: "/assets/serviceVendre.svg",
      h2: "Vendre",
      p: "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !",
      btn: "En savoir plus",
    },
    {
      img: "/assets/serviceVendre.svg",
      h2: "Vendre",
      p: "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !",
      btn: "En savoir plus",
    },
    {
      img: "/assets/serviceVendre.svg",
      h2: "Vendre",
      p: "Quand vous trouvez enfin la perle rare, on vous annonce qu’elle est déjà sous compromis... En vous inscrivant cela ne vous arrivera plus !",
      btn: "En savoir plus",
    },
  ];
  return (
    <NavPage current={"Services"}>
      <H1>{"Nos Services"}</H1>
      <H3 className='mt-12'>
        {
          "Immo Barbière vous propose plusieures services pour vous aider dans votre projet quel qu’il soit.  "
        }
      </H3>
      <Container className='space-y-[40px] mt-12'>
        {services.map((service, i) => {
          return (
            <CardInfo
              img={service.img}
              h2={service.h2}
              p={service.p}
              btn={service.btn}
              key={i}
            />
          );
        })}
      </Container>
    </NavPage>
  );
}
