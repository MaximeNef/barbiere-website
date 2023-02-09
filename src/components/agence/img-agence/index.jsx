import Container from "../../shared/container";
import MotionRight from "../../shared/motion-CardRight";
import MyImage from "../../shared/myimage";

const ImgAgence = (props) => {
  return (
    <Container className='mt-10 w-full  '>
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
          <Container className=' rounded-[18px] relative  z-30 '>
            <MyImage
              source={props.src}
              w={340}
              h={400}
              className='rounded-[18px] '
              objectFit={"cover"}
            />
          </Container>{" "}
        </Container>
      </MotionRight>
    </Container>
  );
};
export default ImgAgence;
