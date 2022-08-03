import Container from "../container";
import Flex from "../flex";
import H3 from "../h3";
import MyImage from "../myimage";
import P from "../p";

const CardAvis = () => {
  return (
    <Container className=' rounded-[20px] p-5 bg-white shadow-cardAvis snap-always snap-center flex-shrink-0 w-[300px] m-2 '>
      <Flex justify='between' className=''>
        <Flex className='space-x-[16px]'>
          <MyImage source={"/assets/logoblueu.svg"} h={20} w={30} />{" "}
          <H3>Julien Nef</H3>
        </Flex>

        <Container className='my-auto'>
          <MyImage source={"/assets/stars.svg"} h={14} w={65} />
        </Container>
      </Flex>
      <P className='mt-5'>
        “Équipe polyvalente, réactive et à l’écoute. Ils ont trouvé exactement
        le bien que nous voulions”
      </P>
    </Container>
  );
};
export default CardAvis;
