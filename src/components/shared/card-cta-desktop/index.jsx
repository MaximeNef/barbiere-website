import Btn2 from "../btn2";
import Container from "../container";
import Flex from "../flex";
import H2 from "../h2";
import MyImage from "../myimage";
import P from "../p";

const CardDesktop = (props) => {
  console.log(props);
  return (
    <Container className='bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px]  py-6 relative  shadow-cardcta w-full h-full'>
      <Container className='absolute h-full w-full  my-auto top-0 z-10'>
        <MyImage
          source={"/assets/Logo.svg"}
          w={350}
          h={180}
          objectFit={"contain"}
        />
      </Container>{" "}
      <Flex className='pl-3'>
        <Container className='md:w-[70%] '>
          <h2 className='text-white md:px-5 px-3   text-[20px] font-bold leading-[25px] text-left flex flex-col pb-3   '>
            {" Estimation offerte !"}
          </h2>{" "}
          <p className='text-default md:px-5 px-3  text-[17px] font-light leading-[21px] text-left flex flex-col  '>
            {
              " Vous souhaitez vendre ou louer votre bien immobilier,  nous vous offrons notre estimation dans les plus brefs délais ! "
            }
          </p>{" "}
          <Container className='my-auto pr-5 z-20 md:hidden pt-4 mr-auto pl-2'>
            <Btn2
              src={"/contact"}
              color='white'
              text={"fixer un rendez-vous"}
            />{" "}
          </Container>
        </Container>

        <Container className='my-auto pr-5 z-20 hidden md:inline-flex'>
          <Btn2 src={"/contact"} color='white' text={"fixer un rendez-vous"} />{" "}
        </Container>
      </Flex>
    </Container>
  );
};
export default CardDesktop;
