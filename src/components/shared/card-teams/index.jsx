import Link from "next/link";
import Container from "../container";
import Flex from "../flex";
import H3 from "../h3";

import MyImage from "../myimage";
import P from "../p";

const CardTeams = (props) => {
  return (
    <Container className='pt-[70px]  sm:mx-2   md:pb-10'>
      <Container className='border-[2px] border-teal-400 bg-white   rounded-[20px]  h-fit     mt-[-50px] shadow-2xl  '>
        <MyImage
          source={props.img}
          w={334}
          h={520}
          objectFit={"cover"}
          className={`   rounded-[18px] object-top `}
        />
      </Container>{" "}
      <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] drop-shadow-lg z-10 mt-[-50px] max-w-full h-fit'>
        <Container className='bg-white rounded-[18px] pt-[15px] sm:min-h-[300px] text-left'>
          <H3 className='mx-auto'>{props.nom}</H3>{" "}
          <h3 className='mx-auto text-[14px] lg:text-[16px] font-extralight leading-[20px] text-center flex flex-col items-start align-top justify-center text-default mb-2 max-w-[80%] md:h-10'>
            {props.bac}
          </h3>
          <h3 className='mx-auto text-[24px] md:text-[24px]  leading-[26px] text-center flex flex-col items-start justify-center text-default mt-2'>
            {props.post}
          </h3>
          <P className='mt-2 mx-auto text-[14px] md:text-[16px]'>
            {props.region}
          </P>
          <Flex className='mt-[15px] mx-auto space-y-2 flex-col '>
            <Container className='mr-auto'>
              <Link href={`tel:${props.tel}`} passHref>
                <a className='flex'>
                  {props.tel ? (
                    <MyImage source='/assets/Phone.svg' w={20} h={20} />
                  ) : (
                    <div />
                  )}
                  <P className='ml-2'>{props.tel}</P>
                </a>
              </Link>
            </Container>

            <Container className='mr-auto'>
              <Link href={`mailto:${props.mail}`} passHref>
                <a className='flex'>
                  {props.tel ? (
                    <MyImage source='/assets/mail.svg' w={20} h={20} />
                  ) : (
                    <div />
                  )}
                  <P className='ml-2'> {props.mail}</P>
                </a>
              </Link>
            </Container>
          </Flex>
          <P className='mt-2 md:mt-0 mb-2 mx-auto text-xs '>{props.ipi}</P>
        </Container>
      </Container>
    </Container>
  );
};
export default CardTeams;
