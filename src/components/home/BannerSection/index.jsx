import Btn2 from "../../shared/btn2";
import Container from "../../shared/container";
import MyImage from "../../shared/myimage";

const BannerSection = () => {
  return (
    <Container className='bg-[#ECEBE6] relative  h-[400px] 2xl:h-[500px] hidden md:inline-flex md:flex-row  shadow-cardcta max-w-[100%]'>
      <Container className='bg-[#ECEBE6]  skew-x-[-10deg] ml-[-30px] min-w-[60%]'>
        <Container className='skew-x-[10deg] h-full '>
          <Container className='h-full '>
            <MyImage
              source={"/assets/Barbiere-photo-Group.webp"}
              objectFit={"cover"}
              h={500}
              w={800}
              className='object-top'
            />
          </Container>
        </Container>
      </Container>

      <Container className='bg-[#ECEBE6] max-w-[30%] skew-x-[-10deg] '>
        <Container className='my-auto'>
          <Container className='skew-x-[10deg] p-10 pl-20 pr-0 w-full h-full'>
            <Container className='space-y-5 ml-12 mr-[-100px]'>
              <h2 className='  text-7xl text-left flex flex-col mb-5 font-semibold leading-[70px] text-[#0b2528] '>
                {"Besoin d'un conseil ?"}
              </h2>
              <Container className='mr-auto'>
                <Btn2
                  src={"/agence"}
                  color='white'
                  text={"Rencontrons-nous !"}
                />
              </Container>
            </Container>{" "}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default BannerSection;
