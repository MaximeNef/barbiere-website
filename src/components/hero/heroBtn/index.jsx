import Container from "../../shared/container";
import Flex from "../../shared/flex";
import H2 from "../../shared/h2";
import H3 from "../../shared/h3";
import MyImage from "../../shared/myimage";

const HeroBtn = () => {
  return (
    <Container>
      <Container className='bg-gradient-to-b from-[#41B8B8] to-[#1AD9D9] absolute  w-full rounded-[20px] pt-3 pb-2 '>
        <H2 className='text-white'>{"Je cherche un bien "}</H2>
        <Flex justify='between' className='mt-2 text-white space-x-4 px-14'>
          <H3>{" A vendre"}</H3>
          <Container className='h-[30px] bg-white w-[1px]' />
          <H3>{" a louer"}</H3>
        </Flex>
      </Container>{" "}
    </Container>
  );
};
export default HeroBtn;
