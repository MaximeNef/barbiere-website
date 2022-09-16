import Btn2 from "../btn2";
import Container from "../container";
import Flex from "../flex";
import H2 from "../h2";
import MyImage from "../myimage";
import P from "../p";

const CardCTA = (props) => {
  console.log(props);
  return (
    <Container className='bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px]  py-5 relative  shadow-cardcta w-full h-full text-center'>
      <Container className='absolute h-full w-full  my-auto top-0 '>
        <MyImage
          source='/assets/logo.svg'
          w={"200"}
          h={"200"}
          objectFit={"contain"}
        />
      </Container>{" "}
      <Flex type='col' justify='between' className=' space-y-[20px] px-[22px]'>
        <H2 className='text-white md:px-5 px-3    '> {props.text1}</H2>{" "}
        <P className='text-white md:px-5 px-3 '>{props.text2}</P>{" "}
        <Btn2 src={props.src} color='white' text={props.text3} />{" "}
      </Flex>
    </Container>
  );
};
export default CardCTA;
