import Link from "next/link";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";

const Footer = ({ current }) => {
  return (
    <Container
      className={` z-20  ${
        current == "contact" ? "mt-[-20px] " : "pt-20 bg-[#FBFFFF]"
      }`}
    >
      <Container className='' />
      <Container className='bg-[#41B8B8]  m-auto w-full text-center pb-2 rounded-tl-[25px] rounded-tr-[25px] border-t-[3px] border-[#41B8B8]'>
        {/* btn contact us  */}
        <Flex justify='center' className='  mt-[-28px] mb-5 '>
          <Link href='/contact' passHref>
            <a className=''>
              <Container className='border-[#FBFFFF] border-2 rounded-[27px] '>
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
          className='mx-5 text-[#FFFFFF] text-[14px] md:text-[18px] leading-4 md:mx-[15%]'
        >
          <Container className='text-start space-y-[18px]'>
            <Link href='/' passHref>
              <a>Accueil</a>
            </Link>
            <Link href='/biens' passHref>
              <a> Nos biens</a>
            </Link>
            <Link href='/services' passHref>
              <a> Nos services</a>
            </Link>
            <Link href='/agence' passHref>
              <a> Agence / Equipe </a>
            </Link>
            <Link href='/emplois' passHref>
              <a> Emplois</a>
            </Link>
            <Link href='/contact' passHref>
              <a> Contact</a>
            </Link>
            <Link href='/deontologie' passHref>
              <a> Déontologie</a>
            </Link>
          </Container>
          <Container className='space-y-[26px]  md:space-y-[10px]'>
            <Container>
              <Container className=' hidden md:inline-flex '>
                <MyImage source={"/assets/logoB.svg"} h={120} w={120} />
              </Container>
              <Container className='md:hidden inline-flex '>
                <MyImage source={"/assets/logoB.svg"} h={92} w={92} />
              </Container>
            </Container>{" "}
            <Container>
              <p className='text-[14px] md:text-[16px]  leading-[13px] max-w-[120px] md:max-w-[240px] mx-auto font-medium'>
                {"Rue de Tirlemont 7 4280 Hannut"}
              </p>
            </Container>
            <Container>
              <Link href={"tel:+32493 19 30 03"} passHref>
                <a className='text-[14px] md:text-[16px]  leading-[13px]  font-medium'>
                  {"019/30.57.32"}
                </a>
              </Link>{" "}
            </Container>
            <Container>
              <Link href={"mailto:info@barbiere.be"} passHref>
                <a className='text-[14px] md:text-[16px]  leading-[13px]  font-medium'>
                  {"info@barbiere.be"}
                </a>
              </Link>{" "}
            </Container>
          </Container>
        </Flex>
        <Container className='text-[#FFFFFF] '>
          <Flex justify='center' className='space-x-[8px] mb-2'>
            <Flex justify='center' className='space-x-2'>
              <Link
                href='https://www.youtube.com/@immobilierefrancoisbarbier1746'
                passhref
                target='_blank'
              >
                <a target='_blank'>
                  <MyImage source={"/assets/logoYoutube.svg"} h={30} w={25} />
                </a>
              </Link>{" "}
              <Link
                href='https://www.facebook.com/profile.php?id=100063790292167'
                passhref
                target='_blank'
              >
                <a target='_blank'>
                  <MyImage source={"/assets/facebook.svg"} h={25} w={25} />
                </a>
              </Link>{" "}
            </Flex>
          </Flex>
          <p className='text-[7px] leading-[9px] mx-3 font-light md:text-[14px] md:px-[15%] md:leading-4'>
            {
              "François Barbière - Agent immobilier agréé IPI Nr 506.259 (Belgique). Nr d'entreprise : BE 0546.735.847 . Autorité de surveillance : Institut professionnel des agents immobiliers, rue du Luxembourg 16B à 1000 Bruxelles www.ipi.be  - "
            }
            <span>
              <Link
                href='https://www.ipi.be/agent-immobilier-ipi/la-deontologie-de-lagent-immobilier'
                passHref
              >
                <a target='_blank' className='underline underline-offset-2'>
                  {"code de déontologie de l’IPI"}
                </a>
              </Link>
            </span>
            {
              ". RC professionnelle : AXA Belgium Nr 7304044070280 et Nr 7304010470284"
            }
          </p>
          <p className='md:text-[13px] text-[11px] my-3 '>
            {" 2022 © listri | Designed with passion by "}
            <span>
              <Link href='https://www.listri.digital/' passHref>
                <a target='_blank' className='underline underline-offset-2'>
                  {"LISTRI"}
                </a>
              </Link>
            </span>
          </p>
        </Container>
      </Container>{" "}
    </Container>
  );
};
export default Footer;
