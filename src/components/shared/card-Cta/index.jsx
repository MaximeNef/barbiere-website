import Btn2 from "../btn2";
import Container from "../container";
import H2 from "../h2";
import MyImage from "../myimage";
import P from "../p";

const CardCTA = (props) => {
  console.log(props);
  return (
    <Container className='bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] space-y-[20px] py-5 relative px-5'>
      <Container className='absolute h-full w-full mx-auto '>
        <MyImage
          source='/assets/logo.svg'
          w={"200"}
          h={"200"}
          objectFit={"contain"}
        />
      </Container>{" "}
      <H2 className='text-white '> {props.text1}</H2>{" "}
      <P className='text-white'>{props.text2}</P>{" "}
      <Btn2 src={props.src} color='white' text={props.text3} />{" "}
    </Container>
  );
};
export default CardCTA;
