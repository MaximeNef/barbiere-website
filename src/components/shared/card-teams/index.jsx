import Link from "next/link";
import Container from "../container";
import Flex from "../flex";
import H3 from "../h3";
import MotionRight from "../motion-CardRight";
import MyImage from "../myimage";
import P from "../p";

const CardTeams = (props) => {
  return (
    <MotionRight
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.7, delay: 0.5 }}
    >
      <Container className='pt-[70px] md:w-[324px] md:mx-4 md:pb-10'>
        <Container className='border-[2px] border-teal-400 bg-white   rounded-[20px]  w-fit h-fit m-auto    mt-[-50px] shadow-2xl  '>
          <MyImage
            source={props.img}
            w={305}
            h={458}
            objectFit={""}
            className={` md:object-contain  rounded-[18px] object-top ${
              props.post == "" ? "object-contain" : "object-cover"
            }`}
          />
        </Container>{" "}
        <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] drop-shadow-lg z-10 mt-[-50px] max-w-full h-full'>
          <Container className='bg-white rounded-[18px] pt-[15px] md:min-h-[280px]'>
            <H3 className='mx-auto'>{props.nom}</H3>{" "}
            <h3 className='mx-auto text-[20px] md:text-[20px] font-extralight leading-[26px] text-center flex flex-col items-start align-top justify-center text-default mb-2 max-w-[80%]'>
              {props.bac}
            </h3>
            <h3 className='mx-auto text-[20px] md:text-[24px] font-light leading-[26px] text-center flex flex-col items-start justify-center text-default'>
              {props.post}
            </h3>
            <P className='mt-2 mx-auto'>{props.region}</P>
            <Flex className='mt-[15px] mx-auto space-y-2 flex-col '>
              <Container className='mr-auto'>
                <Link legacyBehavior href={`tel:${props.tel}`} passHref>
                  <a className='flex'>
                    {props.tel ? (
                      <MyImage source='/assets/Phone.svg' w={20} h={20} />
                    ) : (
                      <div />
                    )}
                    <P className='ml-2'>{props.tel}</P>
                  </a>
                </Link>
                {props.nom == "Philippe Gatz" ? (
                  <>
                    {" "}
                    <div className='text-center font-light'>de 8h à 17h</div>
                  </>
                ) : (
                  <></>
                )}
              </Container>
              {props.nom == "Philippe Gatz" ? (
                <Container className='mr-auto'>
                  <Link legacyBehavior href={`tel:${props.tel}`} passHref>
                    <a className='flex'>
                      {props.tel ? (
                        <MyImage source='/assets/Phone.svg' w={20} h={20} />
                      ) : (
                        <div />
                      )}
                      <P className='ml-2'>0473 29 00 70</P>
                    </a>
                  </Link>
                  <div className='text-center mr-3 font-light'>après 17h</div>
                </Container>
              ) : (
                <></>
              )}
              <Container className='mr-auto'>
                <Link legacyBehavior href={`mailto:${props.mail}`} passHref>
                  <a className='flex'>
                    {props.tel ? (
                      <MyImage source='/assets/mail.svg' w={20} h={20} />
                    ) : (
                      <div />
                    )}
                    <P className='ml-2'> {props.mail}</P>
                  </a>
                </Link>
                {props.nom == "Philippe Gatz" ? (
                  <div className='text-center mr-5 font-light'>Part-Time</div>
                ) : (
                  <></>
                )}
              </Container>
            </Flex>
            <P className='mt-2 md:mt-0 mb-2 mx-auto '>{props.ipi}</P>
          </Container>
        </Container>
      </Container>
    </MotionRight>
  );
};
export default CardTeams;
