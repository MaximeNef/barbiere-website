import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import H3 from "../../../shared/h3";

const Energie = (props) => {
  console.log(props, "generales ");
  const generales = [
    {
      name: "Consommation d'énergie primaire",
      info: props.details.data.slices[0].primary.conso_primaire[0]?.text,
      carac: "kWh/m²",
    },
    {
      name: "Classe énergétique",
      info: props.details.data.slices[0].primary.classe_energie[0]?.text,
    },
    {
      name: "Numéro du rapport PEB",
      info: props.details.data.slices[0].primary.rapport_peb[0]?.text,
    },
    {
      name: "Emission CO₂",
      info: props.details.data.slices[0].primary.emission_co2[0]?.text,
      carac: "kg CO₂/m²",
    },
  ];
  return (
    <Container className='bg-white p-5 rounded-[12px] shadow-cardDetails'>
      <H3 className='mb-5'>{"Énergie"}</H3>
      <Container className='md:flex-wrap md:max-h-[70px] md:ml-[-20px]  '>
        {generales.map((generale, i) => (
          <Container key={i} className='md:ml-5 md:w-[47%] leading-8'>
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
export default Energie;
