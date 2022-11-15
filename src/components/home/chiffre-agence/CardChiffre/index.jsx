import Container from "../../../shared/container";
import MyImage from "../../../shared/myimage";

const CardChiffre = (props) => {
  return (
    <Container className='rounded-[20px] p-5 bg-white shadow-cardChiffre  border-2 mx-6 relative mb-6 mt-8 w-[100%]'>
      <Container className='absolute left-1/2 transform -translate-x-1/2 -translate-y-[65px] bg-gray-100 rounded-full p-4'>
        <MyImage
          source={props.img}
          w={"52px"}
          h={"52px"}
          objectFit={"contain"}
        />
      </Container>

      <p className=' font-light text-[43px] leading-[29px] text-[#E88DB1] mx-auto my-auto mt-10 mb-2'>
        {props.nbr}
      </p>
      <Container className=' font-light text-[17px] leading-[21px] text-[#646464] ml-[10px] text-center md:text-center px-8 md:px-4'>
        {props.txt}
      </Container>
    </Container>
  );
};
export default CardChiffre;
