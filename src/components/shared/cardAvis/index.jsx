import Container from "../container";
import Flex from "../flex";

import MyImage from "../myimage";

const CardAvis = (props) => {
  return (
    <Container className=' rounded-[20px] p-5 bg-white shadow-cardAvis snap-always snap-center flex-shrink-0 w-[300px] m-2 md:min-w-[55%] min-h-[100px] '>
      <Container className='md:flex-row md:items-start md:pr-5'>
        <Flex
          justify='between'
          className=' md:px-5 max-h-[30px] items-start md:justify-start'
        >
          <MyImage source={"/assets/Logoblueu.svg"} h={30} w={30} />{" "}
          <div className='flex flex-row '>
            <h3 className='text-[20px] md:text-[24px]  font-semibold leading-[26px] text-center flex flex-col items-start justify-center text-default md:ml-4 '>
              {props.user}
            </h3>{" "}
            <p className=' mt-1 text-left text-[17px] font-bold leading-[21px] flex flex-col md:px-3 ml-3 md:ml-0'>
              - {props.region}
            </p>
          </div>
        </Flex>
        <Container className=' flex justify-start items-end md:my-auto'>
          <MyImage source={"/assets/stars.svg"} h={14} w={60} />
        </Container>
      </Container>

      <p className='mt-3 text-left text-[17px] font-light leading-[21px] flex flex-col items-center justify-center md:px-3'>
        {props.txt}
      </p>
    </Container>
  );
};
export default CardAvis;
