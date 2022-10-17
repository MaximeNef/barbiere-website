import Btn2 from "../../shared/btn2";
import Container from "../../shared/container";
import Flex from "../../shared/flex";
import H2 from "../../shared/h2";
import MyImage from "../../shared/myimage";
import P from "../../shared/p";
import dynamic from "next/dynamic";
import H3 from "../../shared/h3";
const DynamicCardCTA = dynamic(() => import("../../shared/card-Cta"));

const BannerSection = () => {
  return (
    <Container className='bg-[#7a767c] relative  h-[400px] 2xl:h-[500px] hidden md:inline-flex md:flex-row  shadow-cardcta max-w-[100%]'>
      <Container className='bg-[#ECECEC]  skew-x-[-10deg] ml-[-30px] min-w-[60%]'>
        <Container className='skew-x-[10deg] h-full '>
          <Container className='h-full'>
            <MyImage
              source={"/assets/team.png"}
              w='100%'
              h={"380"}
              objectFit={"cover"}
              layout='responsive'
            />
          </Container>
        </Container>
      </Container>

      <Container className='bg-[#7a767c] max-w-[30%] skew-x-[-10deg] '>
        <Container className='my-auto'>
          <Container className='skew-x-[10deg] p-10 pl-20 pr-0 w-full h-full'>
            <Container className='space-y-14'>
              <h2
                className={` text-white  text-[20px] font-bold leading-[32px] text-left `}
              >
                {
                  " Retrouvez notre équipe expérimentée pour répondre à tous vos besoins !"
                }
              </h2>

              <Container className='mr-auto'>
                <Btn2 src={"/agence"} color='white' text={"Découvrez Nous >"} />
              </Container>
            </Container>{" "}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default BannerSection;
