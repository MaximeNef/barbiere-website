import Container from "../../shared/container";
import Flex from "../../shared/flex";
import MyImage from "../../shared/myimage";

const ChiffreAgence = () => {
  return (
    <Container className='relative mx-[-20px] '>
      <Container className='absolute  w-full top-[130px]  right-0  md:hidden inline-flex  '>
        <MyImage
          source='/assets/LogoAgence.svg'
          w={600}
          h={800}
          objectFit={"cover"}
          className='absolute md:w-[30%] z-[-10]'
        />
      </Container>
      <Container className='md:flex md:flex-row md:justify-start md:w-full'>
        <Container className=''>
          <Container className=' my-3 mx-6 rounded-[20px] p-5 bg-white shadow-cardChiffre md:w-fit'>
            <Flex
              justify='start'
              align='center'
              className='flex-col md:flex-row'
            >
              <Flex>
                <Container className='min-w-[52px]   '>
                  <MyImage
                    source='/assets/starsImmo.svg'
                    w={"52px"}
                    h={"52px"}
                    objectFit={"contain"}
                  />
                </Container>
                <Container className='font-semibold text-[43px] leading-[29px] text-[#E88DB1] ml-[10px] my-auto'>
                  {" 98%"}
                </Container>
              </Flex>
              <Container className=' font-light text-[17px] leading-[21px] text-[#646464] ml-[10px] text-center md:text-left'>
                {"de satisfaction client,"}
                <br /> {" vous ne repartirez pas déçus "}
              </Container>
            </Flex>
          </Container>

          <Container className=' my-3 mx-6 rounded-[20px] p-5 bg-white shadow-cardChiffre '>
            <Flex
              justify='start'
              align='center'
              className='flex-col md:flex-row'
            >
              <Flex className='w-fit'>
                <Container className='min-w-[52px]   '>
                  <MyImage
                    source='/assets/Language.png'
                    w={"52px"}
                    h={"52px"}
                    objectFit={"contain"}
                  />
                </Container>
                <Container className='font-semibold text-[43px] leading-[29px] text-[#E88DB1] ml-[10px] my-auto w-fit md:mx-auto'>
                  {" 4"}
                </Container>
              </Flex>
              <Container className=' font-light text-[17px] leading-[21px] text-[#646464] text-center md:text-left md:pr-8'>
                {"langues étrangères parlées"}
                <br /> {" au sein de l’agence"}
              </Container>
            </Flex>
          </Container>
        </Container>
        <Container>
          <Container className=' my-3 mx-6 rounded-[20px] p-5 bg-white shadow-cardChiffre md:w-fit'>
            <Flex
              justify='start'
              align='center'
              className='flex-col md:flex-row'
            >
              <Flex>
                <Container className='min-w-[52px]   '>
                  <MyImage
                    source='/assets/reco.svg'
                    w={"52px"}
                    h={"52px"}
                    objectFit={"contain"}
                  />
                </Container>
                <Container className='font-semibold text-[43px] leading-[29px] text-[#E88DB1] ml-[10px] my-auto'>
                  {" 85%"}
                </Container>
              </Flex>
              <Container className=' font-light text-[17px] leading-[21px] text-[#646464] ml-[10px] text-center md:text-left'>
                {"de nos clients "}
                <br /> {"viennent suite à une recommandation"}
              </Container>
            </Flex>
          </Container>

          <Container className=' my-3 mx-6 rounded-[20px] p-5 bg-white shadow-cardChiffre md:w-fit'>
            <Flex
              justify='start'
              align='center'
              className='flex-col md:flex-row'
            >
              <Flex>
                <Container className='min-w-[52px]   '>
                  <MyImage
                    source='/assets/chart.svg'
                    w={"52px"}
                    h={"52px"}
                    objectFit={"contain"}
                  />
                </Container>
                <Container className='font-semibold text-[43px] leading-[29px] text-[#E88DB1] ml-[10px] my-auto'>
                  {" 95%"}
                </Container>
              </Flex>
              <Container className=' font-light text-[17px] leading-[21px] text-[#646464] ml-[10px] text-center md:text-left'>
                {" des biens sont vendus au prix estimé"}
                <br /> {" ou à une valeur supérieure"}
              </Container>
            </Flex>
          </Container>
        </Container>

        {/* <Container>
          <Flex
            justify='start'
            className='mx-6 my-3 rounded-[20px] p-5 bg-white shadow-cardAvis'
          >
            <Container className='min-w-[52px] '>
              <MyImage
                source='/assets/reco.svg'
                w={"52px"}
                h={"52px"}
                objectFit={"contain"}
              />
            </Container>
            <Container className='ml-[30px]'>
              <Container className='font-semibold text-[23px] leading-[29px] text-[#E88DB1]'>
                {" 85%"}
              </Container>
              <Container className=' font-light text-[17px] leading-[21px] text-[#646464]'>
                {"de nos clients viennent suite à une recommandation"}
              </Container>
            </Container>
          </Flex>
          <Flex
            justify='start'
            className='mx-6 my-3 rounded-[20px] p-5 bg-white shadow-cardAvis'
          >
            <Container className='min-w-[52px] '>
              <MyImage
                source='/assets/chart.svg'
                w={"52px"}
                h={"52px"}
                objectFit={"contain"}
              />
            </Container>
            <Container className='ml-[30px]'>
              <Container className='font-semibold text-[23px] leading-[29px] text-[#E88DB1]'>
                {"95%"}
              </Container>
              <Container className=' font-light text-[17px] leading-[21px] text-[#646464]'>
                {
                  "des biens sont vendus au prix estimé ou à une valeur supérieure"
                }
              </Container>
            </Container>
          </Flex>{" "}
        </Container> */}
      </Container>
    </Container>
  );
};
export default ChiffreAgence;
