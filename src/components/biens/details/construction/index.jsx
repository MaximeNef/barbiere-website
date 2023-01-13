import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import H3 from "../../../shared/h3";

const Construction = (props) => {
  const generales = [
    {
      name: "Nombre de façades",
      info: props.details.data.slices[0].primary.nbr_facades[0]?.text,
    },
    {
      name: "Année de construction",
      info: props.details.data.slices[0].primary.Annee_construction[0]?.text,
    },
    {
      name: "Etat du bien",
      info: props.details.data.slices[0].primary.Etat_bien[0]?.text,
    },
    {
      name: "Orientation façade arrière",
      info: props.details.data.slices[0].primary.Orientation_facade_arriere[0]
        ?.text,
    },
    {
      name: "Toiture",
      info: props.details.data.slices[0].primary.Toiture[0]?.text,
    },
    {
      name: "Installation électrique",
      info: props.details.data.slices[0].primary.installation_electrique[0]
        ?.text,
    },
    {
      name: "Evacuation des eaux usées",
      info: props.details.data.slices[0].primary.Evacuation_eaux[0]?.text,
    },
  ];
  return (
    <Container className='bg-white p-5 rounded-[12px] shadow-cardDetails md:w-full'>
      <H3 className='mb-5'>{"Construction"}</H3>
      <Container className='md:flex-wrap '>
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
export default Construction;
