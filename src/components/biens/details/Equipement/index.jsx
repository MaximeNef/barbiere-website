import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import H3 from "../../../shared/h3";

const Equipement = (props) => {
  console.log(props, "generales ");
  const generales = [
    {
      name: "Type de chauffage",
      info: props.details.data.slices[0].primary.Type_chauffage[0]?.text,
    },
    {
      name: "Type de châssis",
      info: props.details.data.slices[0].primary.Type_chassis[0]?.text,
    },
    {
      name: "Cuisine",
      info: props.details.data.slices[0].primary.Cuisine[0]?.text,
    },
    {
      name: "Confort intérieur",
      info: props.details.data.slices[0].primary.Confort_interieur[0]?.text,
    },
  ];
  return (
    <Container className='bg-white p-5 rounded-[12px] shadow-cardDetails'>
      <H3 className='mb-5'>{"Equipement"}</H3>
      <Container className='md:flex-wrap md:max-h-[120px] md:ml-[-40px]'>
        {generales.map((generale, i) => (
          <Container key={i} className='md:ml-10 md:w-[46%] leading-8'>
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
export default Equipement;
