import Container from "../../../shared/container";
import Flex from "../../../shared/flex";
import H1 from "../../../shared/h1";
import MyImage from "../../../shared/myimage";

const HeroDetails = (props) => {
  console.log(props);
  return (
    <Container className='mx-[30px]'>
      <H1 className='mr-auto mb-[7px] tracking-widest'>
        {" "}
        {props.details.data.slices[0].primary.nom_bien[0]?.text}
      </H1>
      <Container className=''>
        <Flex justify=''>
          <MyImage source={"/assets/pin.svg"} h={"16"} w={"12"} />
          <Container className='ml-2 font-light text-[16px] leading-[18px]'>
            {props.details.data.slices[0].primary.adresse_bien[0]?.text}
          </Container>
        </Flex>
        <p className=' text-[25px] font-semibold text-[#43A8AA] leading-[31px] mx-auto tracking-widest mt-[7px]'>
          {props.details.data.slices[0].primary.prix_bien[0]?.text}
          {"€"}
        </p>
      </Container>

      <Flex justify='between' className='mt-[14px]'>
        <Container>
          <Flex align='center'>
            <MyImage source={"/assets/superficie.svg"} h={"20"} w={"20"} />
            <p className='ml-2 font-light text-[15px] leading-[18px]'>
              {props.details.data.slices[0].primary.Superficie_bien[0]?.text}
              {"m²"}
            </p>
          </Flex>
        </Container>
        <Container className=''>
          <Flex className='' align='center'>
            <MyImage source={"/assets/Bathroom.svg"} h={"20"} w={"20"} />
            <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
              {props.details.data.slices[0].primary.sdb_bien[0]?.text}
            </p>
          </Flex>
        </Container>
        <Container>
          <Flex align='center'>
            <MyImage source={"/assets/Bedroom.svg"} h={"19"} w={"28"} />
            <p className='ml-2 font-light text-[15px] leading-[18px] pt-1'>
              {props.details.data.slices[0].primary.chambre_bien[0]?.text}
            </p>
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};
export default HeroDetails;
