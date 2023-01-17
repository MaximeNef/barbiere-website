import Container from "../../shared/container";
import MyImage from "../../shared/myimage";
import CardChiffre from "./CardChiffre";

const ChiffreAgence = () => {
  return (
    <Container className='relative mx-[-20px] '>
      <Container className='absolute  w-full top-[130px]  right-0  md:hidden inline-flex  '>
        <MyImage
          source='/assets/LogoAgence.svg'
          w={600}
          h={800}
          objectFit={"cover"}
          className='absolute md:w-[30%] z-[-10]'
        />
      </Container>
      <Container className='md:flex md:flex-row md:justify-start md:w-full'>
        <Container className='md:max-w-[50%] md:flex md:flex-row'>
          <CardChiffre
            img='/assets/starsImmo.svg'
            nbr={"98%"}
            txt={
              "de nos clients ont été totalement satisfaits par nos services"
            }
          />
          <CardChiffre
            img='/assets/Language.png'
            nbr={"3"}
            txt={
              "langues étrangères parlées au sein de l'agence (néerlandais, anglais, allemand)"
            }
          />
        </Container>
        <Container className='md:max-w-[50%] md:flex md:flex-row'>
          <CardChiffre
            img='/assets/reco.svg'
            nbr={"85%"}
            txt={"de nos clients viennent suite à une recommandation"}
          />
          <CardChiffre
            img='/assets/chart.svg'
            nbr={"95%"}
            txt={
              " des biens sont vendus au prix estimé ou à une valeur supérieure"
            }
          />
        </Container>
      </Container>
    </Container>
  );
};
export default ChiffreAgence;
