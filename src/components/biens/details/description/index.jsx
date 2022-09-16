import Container from "../../../shared/container";
import H3 from "../../../shared/h3";
import P from "../../../shared/p";

const Description = (props) => {
  return (
    <Container className=' p-5 rounded-[20px] shadow-cardDetails'>
      <H3>{"Description"}</H3>
      <p className='mt-5 font-light text-[17px] leading-[22px]'>
        {props.details.data.slices[0].primary.description_biens[0].text}
      </p>
      <p className=' font-semibold text-[17px]  leading-[21px] ml-auto'>
        lire plus...
      </p>
    </Container>
  );
};
export default Description;
