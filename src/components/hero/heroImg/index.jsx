import Container from "../../shared/container";
import MyImage from "../../shared/myimage";
import HeroBtn from "../heroBtn";
import React, { useEffect, useRef } from "react";
import VideoPlayer from "../../all/video";

const HeroImg = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <Container className='w-full h-full relative'>
      <Container className='relative h-screen mx-[-20px] md:mx-[-60px] mt-[-80px]'>
        <div className='md:hidden inline-flex  '>
          <VideoPlayer video='video/VideoBarbiereMV2Compress.mp4' />
        </div>
        <div className='hidden md:inline-flex w-full h-full '>
          <VideoPlayer video='video/VideoBarbiereV2Compress.mp4' />
        </div>
      </Container>{" "}
      <Container className='  absolute w-full bottom-[280px] md:bottom-[220px] md:w-[45%] md:mx-auto md:relative'>
        {" "}
        <HeroBtn />
      </Container>{" "}
      <a href='#some'>
        <Container className='absolute w-full bottom-[110px] md:bottom-[70px] md:relative animate-bounce'>
          <MyImage
            source={"/assets/arrow-down.svg"}
            h={"60"}
            w={"100"}
            priority={true}
          />
        </Container>{" "}
      </a>
    </Container>
  );
};
export default HeroImg;
