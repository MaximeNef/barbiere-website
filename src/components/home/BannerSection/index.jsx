import Btn2 from "../../shared/btn2";
import Container from "../../shared/container";
import MyImage from "../../shared/myimage";

const BannerSection = () => {
  return (
    <Container className='bg-[#7a767c] relative  h-[400px] 2xl:h-[500px] hidden md:inline-flex md:flex-row  shadow-cardcta max-w-[100%]'>
      <Container className='bg-[#ECECEC]  skew-x-[-10deg] ml-[-30px] min-w-[60%]'>
        <Container className='skew-x-[10deg] h-full '>
          <Container className='h-full '>
            <MyImage
              source={"/assets/team.webp"}
              objectFit={"cover"}
              layout='fill'
            />
          </Container>
        </Container>
      </Container>

      <Container className='bg-[#7a767c] max-w-[30%] skew-x-[-10deg] '>
        <Container className='my-auto'>
          <Container className='skew-x-[10deg] p-10 pl-20 pr-0 w-full h-full'>
            <Container className='space-y-5 ml-12 mr-[-100px]'>
              <h1 className=' text-[36px] leading-[50px] text-left text-white flex flex-col mb-5 '>
                {"Besoin d'un conseil ?"}
              </h1>
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
