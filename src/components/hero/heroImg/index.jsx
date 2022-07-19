import Link from "next/link";
import Container from "../../shared/container";
import MyImage from "../../shared/myimage";
import HeroBtn from "../heroBtn";

const HeroImg = () => {
  return (
    <Container className='w-full h-full relative'>
      <Container className='relative h-screen mx-[-20px] mt-[-80px]'>
        <MyImage
          source={"/assets/bgHero.jpg"}
          h={"100"}
          w={"100"}
          layout='fill'
          objectFit='cover'
        />
      </Container>{" "}
      <Container className='  absolute w-full bottom-[220px]'>
        <HeroBtn />
      </Container>{" "}
      <a href='#some'>
        <Container className='absolute w-full bottom-[85px]'>
          <MyImage source={"/assets/arrowdown.svg"} h={"30"} w={"30"} />
        </Container>{" "}
      </a>
    </Container>
  );
};
export default HeroImg;
