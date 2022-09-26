import Container from "../container";
import Flex from "../flex";
import H3 from "../h3";
import MyImage from "../myimage";
import P from "../p";

const CardAvis = (props) => {
  return (
    <Container className=' rounded-[20px] p-5 bg-white shadow-cardAvis snap-always snap-center flex-shrink-0 w-[300px] m-2 md:min-w-[55%] '>
      <Container className='md:flex-row md:items-start'>
        <Flex
          justify='between'
          className=' md:px-5 max-h-[30px] items-start md:justify-start'
        >
          <MyImage source={"/assets/Logoblueu.svg"} h={20} w={30} />{" "}
          <h3 className='text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start justify-center text-default md:ml-4 '>
            {props.user}
          </h3>{" "}
        </Flex>
        <Container className=' flex justify-start items-end'>
          <MyImage source={"/assets/stars.svg"} h={14} w={60} />
        </Container>
      </Container>

      <P className='mt-5'>{props.txt}</P>
    </Container>
  );
};
export default CardAvis;
