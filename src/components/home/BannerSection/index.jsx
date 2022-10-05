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
    <Container className='bg-[#7a767c] relative  h-[350px] hidden md:inline-flex md:flex-row  shadow-cardcta max-w-[100%]'>
      <Container className='bg-white  skew-x-[-10deg] ml-[-26px] min-w-[60%]'>
        <Container className='skew-x-[10deg] my-auto mx-10'>
          <Container className='mt-[100px]'>
            <MyImage
              source={"/assets/equipe.png"}
              w={50}
              h={250}
              objectFit={"contain"}
            />
          </Container>

          {/* <DynamicCardCTA
            text1={"Tous nos biens se trouvent ici"}
            text2={"Vous trouverez ici tous nos biens à vendre qu’à louer."}
            text3={"Nos biens >"}
            src='/biens'
          /> */}
        </Container>
      </Container>

      <Container className='bg-[#7a767c] max-w-[30%]  skew-x-[-10deg]'>
        <Container className='skew-x-[10deg] p-10 pl-20 pr-0 w-full '>
          <Container className='space-y-6'>
            <h2
              className={` text-white  text-[20px] font-bold leading-[25px] text-left `}
            >
              {
                " retrouver nous dans toute la wallonie pour répondre à vos besoins"
              }
            </h2>
            <p
              className={` text-white text-[17px] font-light leading-[21px] text-left `}
            >
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis"
              }
            </p>
            <Container className='mr-auto'>
              <Btn2 src={"btn"} color='white' text={"nous retrouver >"} />
            </Container>
          </Container>{" "}
          {/*
          <Flex type='row' className=' pl-[100px] mt-5 px-10'>
            <H2 className='text-white md:px-5 px-3   '>
              {"retrouver nous dans toute la wallonie pour vous servir"}
            </H2>{" "}
            <Btn2 src={"btn"} color='white' text={"nous retrouver >"} />{" "}
          </Flex> */}
          {/* <Container className='mt-[40px]'>
            <MyImage
              source={"/assets/equipe.png"}
              w={50}
              h={190}
              objectFit={"contain"}
            />
          </Container> */}
        </Container>
      </Container>
    </Container>
  );
};
export default BannerSection;
