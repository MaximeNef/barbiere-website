import Container from "../../shared/container";
import MyImage from "../../shared/myimage";

const ImgAgence = () => {
  return (
    <Container className='mt-10 '>
      {" "}
      <Container className='absolute top-[130px] left-20'>
        <MyImage source='/assets/LogoAgence.svg' w={600} h={800} />
      </Container>
      <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] shadow-cardinfo'>
        {" "}
        <Container className=' rounded-[18px] relative '>
          <MyImage
            source='/assets/agenceImg.jpg'
            w={300}
            h={300}
            className='rounded-[18px]'
            objectFit={"cover"}
          />
        </Container>{" "}
      </Container>{" "}
    </Container>
  );
};
export default ImgAgence;
