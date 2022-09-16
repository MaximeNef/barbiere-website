import Link from "next/link";
import Container from "../container";
import Flex from "../flex";
import H3 from "../h3";
import MyImage from "../myimage";
import P from "../p";

const CardTeam = (props) => {
  return (
    <Container className='pt-[70px] md:min-w-[324px] md:mx-8 '>
      <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] shadow-cardinfo '>
        <Container className='bg-white rounded-[18px] relative px-5  pb-8  '>
          <Container className='border-[2px] border-teal-400 bg-white   rounded-full  w-[100px] h-[100px] m-auto    mt-[-50px] '>
            <MyImage
              source={props.img}
              w={100}
              h={100}
              className={"rounded-full object-cover  "}
            />
          </Container>{" "}
          <H3 className='mx-auto'>{props.nom}</H3>
          <H3 className='mx-auto'>{props.post}</H3>
          <P className='mt-2 mx-auto'>{props.ipi}</P>
          <P className=' mx-auto'>{props.region}</P>
          <Container className='my-[15px] mx-auto '>
            {" "}
            <Container className='mr-auto'>
              <Link href={`tel:${props.tel}`} passHref>
                <a className='flex'>
                  <MyImage source='/assets/phone.svg' w={20} h={20} />
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
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default CardTeam;
