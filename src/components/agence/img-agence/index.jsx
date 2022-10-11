import Container from "../../shared/container";
import MotionRight from "../../shared/motion-CardRight";
import MyImage from "../../shared/myimage";

const ImgAgence = () => {
  return (
    <Container className='mt-10 '>
      {" "}
      <Container className='absolute top-[130px] left-20 md:left-[110vh]'>
        <MyImage source='/assets/LogoAgence.svg' w={600} h={800} />
      </Container>
      <MotionRight
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] shadow-cardinfo'>
          {" "}
          <Container className=' rounded-[18px] relative min-h-[300px] md:min-h-[600px] '>
            <MyImage
              source='/assets/façade.jpg'
              layout='fill'
              className='rounded-[18px] md:min-h-[600px] '
              objectFit={"cover"}
            />
          </Container>{" "}
        </Container>
      </MotionRight>
    </Container>
  );
};
export default ImgAgence;
