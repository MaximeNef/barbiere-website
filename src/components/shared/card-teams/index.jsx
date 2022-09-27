import Link from "next/link";
import Container from "../container";
import Flex from "../flex";
import H3 from "../h3";
import MyImage from "../myimage";
import P from "../p";

const CardTeams = (props) => {
  return (
    <Container className='pt-[70px] md:min-w-[324px] md:mx-8 '>
      <Container className='border-[2px] border-teal-400 bg-white   rounded-[20px]  w-[95%] h-full m-auto    mt-[-50px] shadow-2xl  '>
        <MyImage
          source={props.img}
          w={100}
          h={400}
          className={" object-cover  rounded-[20px] "}
        />
      </Container>{" "}
      <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] drop-shadow-lg z-20 mt-[-50px]'>
        <Container className='bg-white rounded-[18px] pt-[15px]'>
          <H3 className='mx-auto'>{props.nom}</H3>
          <H3 className='mx-auto'>{props.post}</H3>
          <P className='mt-2 mx-auto'>{props.ipi}</P>
          <P className=' mx-auto'>{props.region}</P>
          <Flex className='my-[15px] mx-auto space-x-8 md:space-x-4 '>
            {" "}
            <Container className='mr-auto'>
              <Link href={`tel:${props.tel}`} passHref>
                <a className='flex'>
                  <MyImage source='/assets/Phone.svg' w={20} h={20} />
                  <P className='ml-1'>{props.tel}</P>
                </a>
              </Link>
            </Container>
            <Container className='mr-auto'>
              <Link href={`mailto:${props.mail}`} passHref>
                <a className='flex'>
                  <MyImage source='/assets/mail.svg' w={20} h={20} />
                  <P className='ml-1'> {props.mail}</P>
                </a>
              </Link>
            </Container>
          </Flex>{" "}
        </Container>
      </Container>
    </Container>
  );
};
export default CardTeams;
