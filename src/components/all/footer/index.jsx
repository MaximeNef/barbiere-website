import Link from "next/link";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";

const Footer = () => {
  return (
    <Container className='bg-[#41B8B8]/10'>
      <Container className=' pt-10 ' />
      <Container className='bg-[#41B8B8]  m-auto w-full text-center pb-2 rounded-tl-[25px] rounded-tr-[25px] border-t-[3px] border-[#41B8B8]'>
        {/* btn contact us  */}
        <Flex justify='center' className='  mt-[-28px] mb-5 '>
          <Link href='/contactus' passHref>
            <a className=''>
              <Container className='border-[#EDF8F8] border-2 rounded-[27px] '>
                <Container className='bg-gradient-to-r from-[#41B8B8] to-[#41B8B8] p-[1px] rounded-[25px] shadow-realisationCard'>
                  <Flex
                    justify='center'
                    className='rounded-[25px]  bg-[#FFFFFF] py-[10px] px-4 t   max-w-[180px]  justify-center items-center'
                  >
                    <Container className=''>
                      <p className=' font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#41B8B8] text-[17px]'>
                        {"Contactez-nous "}
                      </p>
                    </Container>
                  </Flex>
                </Container>
              </Container>
            </a>
          </Link>
        </Flex>
        {/* reséaux sociaux  */}

        <Flex
          justify='between'
          className='mx-5 text-[#FFFFFF] text-[14px] leading-4'
        >
          <Container className='text-start space-y-[12px]'>
            <Link href='/' passHref>
              <a> Biens à vendre</a>
            </Link>
            <Link href='/' passHref>
              <a> Biens à louer</a>
            </Link>
            <Link href='/' passHref>
              <a> Notre agence</a>
            </Link>
            <Link href='/' passHref>
              <a> Emplois</a>
            </Link>
            <Link href='/' passHref>
              <a> Contact</a>
            </Link>
          </Container>
          <Container className='space-y-[10px]'>
            <Container>
              <MyImage source={"/assets/logoWhite.svg"} h={52} w={72} />
              <p className='text-[10px] leading-[13px]'>
                {" "}
                {"François Barbière & associés"}
              </p>
            </Container>
            <Container>
              <p className='text-[10px] leading-[13px] max-w-[90px] mx-auto font-medium'>
                {"Rue de Tirlemont 7 4280 Hannut"}
              </p>
            </Container>
            <Container>
              <Link href={"tel:+32493 19 30 03"} passHref>
                <a className='text-[10px] leading-[13px]  font-medium'>
                  {" "}
                  {"+32493 19 30 03"}
                </a>
              </Link>{" "}
            </Container>
          </Container>
        </Flex>
        <Container className='text-[#FFFFFF] '>
          <Flex justify='center' className='space-x-[8px] mb-2'>
            <Container>
              <MyImage source={"/assets/facebook.svg"} h={20} w={20} />{" "}
            </Container>
            <Container>
              {" "}
              <MyImage source={"/assets/instagram.svg"} h={20} w={20} />
            </Container>
          </Flex>
          <p className='text-[7px] leading-[9px] mx-3 font-light'>
            {
              "Agent immobilier agréé IPI sous le n° 506.259 – Belgique. Organisme de contrôle : Institut professionnel des agents immobiliers, rue du Luxembourg 16B à 1000 Bruxelles www.ipi.be - code de déontologie de l’IPI AXA Belgium sous les n° xxx.xxx.xxx et n° xxx.xxx.xxx"
            }
          </p>
          <p>{" 2022 © listri | Designed with passion by LISTRI"}</p>
        </Container>
      </Container>{" "}
    </Container>
  );
};
export default Footer;
