import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import H3 from "../../../shared/h3";

const InfoFinanciere = (props) => {
  const generales = [
    {
      name: "Loyer",
      info: props.details.data.slices[0].primary.prix_bien[0]?.text,
      carac: "€",
    },
    {
      name: "Revenu cadastral",
      info: props.details.data.slices[0].primary.Rvn_cadastral[0]?.text,
      carac: "€",
    },
  ];
  return (
    <Container className='bg-white p-5 rounded-[12px] shadow-cardDetails md:w-full'>
      <H3 className='mb-5'>{"Infos financières"}</H3>
      <Container className='md:flex-wrap md:max-h-[150px]'>
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
export default InfoFinanciere;
