import NavPage from "../../components/all/Nav-page";
import CardInfo from "../../components/shared/card-Info";
import Container from "../../components/shared/container";
import H1 from "../../components/shared/h1";
import H3 from "../../components/shared/h3";
import MotionTop from "../../components/shared/motion-top";
import MotionRight from "../../components/shared/motion-CardRight";
export default function Emplois() {
  const services = [
    {
      img: "/assets/serviceVendre.svg",
      h2: "Agent immobilier",
      p: "Pour soutenir notre développement, nous rechercherons des agents immobiliers (agrées IPI) expérimentés ou un nouveau stagiaire IPI en 2021, pour les régions de Waremme, Jodoigne et Eghezée. N’hésitez pas à nous contacter pour plus d'informations et à nous transmettre votre curriculum vitae complet, vos références, ainsi qu’une lettre de motivation, à l’adresse suivante: fb@barbiere.be A très bientôt !",
      btn: "je postule",
    },
    {
      img: "/assets/serviceVendre.svg",
      h2: "Candidature spontanée",
      p: "Pour toute demande de candidature spontanée, n’hésitez pas à nous contacter pour plus d'informations et à nous transmettre votre curriculum vitae complet, vos références, ainsi qu’une lettre de motivation, à l’adresse suivante: fb@barbiere.be A très bientôt !",
      btn: "je postule",
    },
  ];
  return (
    <NavPage current={"Emplois"}>
      <H1>{"Emplois"}</H1>
      <MotionTop
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h3 className='	 mt-12 text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start md:items-center justify-center text-default '>
          {
            "Immo Barbière est toujours à la recherche de bons éléments pour agrandir son équipe  "
          }
        </h3>
      </MotionTop>
      <Container className='space-y-[40px] mt-12 md:flex md:flex-row md:flex-wrap md:space-y-0 md:justify-center '>
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
