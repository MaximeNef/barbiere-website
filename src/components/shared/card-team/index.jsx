import Link from "next/link";
import Container from "../container";
import Flex from "../flex";
import H3 from "../h3";
import MyImage from "../myimage";
import P from "../p";

const CardTeam = (props) => {
  return (
    <Container className='pt-[70px]'>
      <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] shadow-cardinfo'>
        <Container className='bg-white rounded-[18px] relative px-5 pt-10 pb-8'>
          <Container className='border-[2px] border-teal-400 bg-white   rounded-full  w-[100px] h-[100px] m-auto mt-[-33%] '>
            <MyImage
              source={props.img}
              w={100}
              h={100}
              className={"rounded-full"}
            />
          </Container>{" "}
          <H3>{props.nom}</H3>
          <H3>{props.post}</H3>
          <P className='mt-2'>{props.ipi}</P>
          <Container className='my-[15px]'>
            <Link href={`tel:${props.tel}`} passHref>
              <a>
                <P>Gsm : {props.tel}</P>
              </a>
            </Link>
            <Link href={`mailto:${props.mail}`} passHref>
              <a>
                <P>Mail : {props.mail}</P>
              </a>
            </Link>
          </Container>
          <Flex justify='center' className='space-x-[45px] mt-1'>
            <Container>
              {" "}
              <Link href={`tel:${props.tel}`} passHref>
                <a>
                  <MyImage source='/assets/phone.svg' w={45} h={45} />
                </a>
              </Link>
            </Container>
            <Container>
              <Link href={`mailto:${props.mail}`} passHref>
                <a>
                  <MyImage source='/assets/mail.svg' w={45} h={45} />
                </a>
              </Link>
            </Container>
          </Flex>
        </Container>
      </Container>
    </Container>
  );
};
export default CardTeam;
