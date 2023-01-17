import Link from "next/link";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import H2 from "../../shared/h2";
import H3 from "../../shared/h3";
import MyImage from "../../shared/myimage";

const HeroBtn = () => {
  return (
    <Container className=''>
      <Container className='bg-gradient-to-b from-[#41B8B8] to-[#1AD9D9] absolute  w-full  rounded-[20px] pt-3  shadow-cardcta text-white md:h-[100px] md:pb-0'>
        <H2 className='text-white w-full mx-auto'>{"Je cherche un bien "}</H2>
        <Flex justify='between' className='mt-2 text-white    md:space-x-0 '>
          <Link legacyBehavior href='/a-vendre' passHref>
            <a className='w-full h-[40px] md:h-full hover:bg-white hover:text-[#41B8B8] hover:rounded-bl-[20px] hover:shadow-cardAvis hover:rounded-t-[5px] hover:rounded-br-[5px]  '>
              <Container className=' h-full   '>
                <p className='m-auto h-full w-full hover:text-[#41B8B8] text-white text-[19px] md:text-[24px]  font-semibold leading-[24px] text-center flex flex-col items-center justify-center '>
                  {" A vendre"}
                </p>
              </Container>
            </a>
          </Link>
          <Container className='h-[30px] bg-white w-[1px] md:h-[45px] m-auto ' />
          <Link legacyBehavior href='/a-louer' passHref>
            <a className='w-full h-[40px] md:h-full hover:bg-white hover:text-[#41B8B8] hover:rounded-br-[20px] hover:shadow-cardAvis hover:rounded-t-[5px] hover:rounded-bl-[5px]'>
              <Container className=' h-full'>
                <p className='m-auto h-full w-full hover:text-[#41B8B8] text-white text-[19px] md:text-[24px]  font-semibold leading-[24px] text-center flex flex-col items-center justify-center '>
                  {" "}
                  {" A louer"}
                </p>
              </Container>{" "}
            </a>
          </Link>
        </Flex>
      </Container>{" "}
    </Container>
  );
};
export default HeroBtn;
