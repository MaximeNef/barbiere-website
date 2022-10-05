import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import H3 from "../../../shared/h3";

const Generales = (props) => {
  console.log(props, "generales ");
  const generales = [
    {
      name: "Surface habitable",
      info: props.details.data.slices[0].primary.surface_habitable[0]?.text,
      carac: "m²",
    },
    {
      name: "Superficie terrain",
      info: props.details.data.slices[0].primary.superficie_terrain[0]?.text,
      carac: "m²",
    },
    {
      name: "Type d’environnement ",
      info: props.details.data.slices[0].primary.type_env[0]?.text,
      carac: "m²",
    },
    {
      name: "Chambres ",
      info: props.details.data.slices[0].primary.nbr_chanbre[0]?.text,
    },
    {
      name: "Nombre d’étages ",
      info: props.details.data.slices[0].primary.nbr_etages[0]?.text,
      carac: "m²",
    },
    {
      name: "Largeur de façade ",
      info: props.details.data.slices[0].primary.lgr_facade[0]?.text,
      carac: "m²",
    },
    {
      name: "Disponibilité ",
      info: props.details.data.slices[0].primary.Disponibilite[0]?.text,
      carac: "m²",
    },
    {
      name: "Garage ",
      info: props.details.data.slices[0].primary.garage[0]?.text,
    },
    {
      name: "Salles de bains ",
      info: props.details.data.slices[0].primary.sdb_bien[0].text,
    },
    {
      name: "Toilettes ",
      info: props.details.data.slices[0].primary.nbr_toilettes[0]?.text,
    },
    {
      name: "Nombre de parking extérieur ",
      info: props.details.data.slices[0].primary.nbr_parking[0]?.text,
    },
  ];
  return (
    <Container className=' p-5 rounded-[12px] shadow-cardDetails'>
      <H3 className='mb-5'>{"Caractéristiques générales"}</H3>
      <Container className='md:flex-wrap md:max-h-[200px] md:ml-[-40px] '>
        {generales.map((generale, i) => (
          <Container key={i} className='md:ml-10  md:w-[46%] leading-8'>
            {generale.info ? (
              <Flex justify='between' className=''>
                <Container>
                  <p>{generale.name}</p>
                </Container>
                <Container>
                  <p className='text-black'>
                    {generale.info}

                    <span className='ml-1 text-black'>{generale.carac}</span>
                  </p>
                </Container>{" "}
              </Flex>
            ) : (
              <div />
            )}
          </Container>
        ))}
      </Container>
    </Container>
  );
};
export default Generales;
