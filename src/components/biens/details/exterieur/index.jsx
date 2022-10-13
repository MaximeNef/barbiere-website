import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import H3 from "../../../shared/h3";

const Exterieur = (props) => {
  console.log(props, "generales ");
  const generales = [
    {
      name: "Surface du terrain",
      info: props.details.data.slices[0].primary.superficie_terrain[0]?.text,
      carac: "m²",
    },
    // {
    //   name: "Jardin",
    //   info: props.details.data.slices[0].primary.jardin[0] ? "✔" : "✗",
    // },
    {
      name: "Orientation du jardin",
      info: props.details.data.slices[0].primary.orientation_jardin[0]?.text,
    },
    // {
    //   name: "Terrasse",
    //   info: props.details.data.slices[0].primary.terrasse[0]?.text ? "✔" : "✗",
    // },
    {
      name: "Orientation de la terrasse",
      info: props.details.data.slices[0].primary.orientation_terrasse[0]?.text,
    },
  ];
  return (
    <Container className='bg-white p-5 rounded-[12px] shadow-cardDetails md:w-full'>
      <H3 className='mb-5 md:justify-start'>{"Extérieur"}</H3>
      <Container className='md:flex-wrap md:h-full'>
        {generales.map((generale, i) => (
          <Container key={i} className='leading-8'>
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
export default Exterieur;
