import Link from "next/link";
import Container from "../../shared/container";
import MyImage from "../../shared/myimage";
import HeroBtn from "../heroBtn";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
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
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <Container className='w-full h-full relative'>
      <Container className='relative h-screen mx-[-20px] md:mx-[-60px] mt-[-80px]'>
        {/* <MyImage
          source={"/assets/bgHero4.jpg"}
          layout='fill'
          objectFit='cover'
        /> */}
        <div className='md:hidden'>
          <VideoPlayer video='video/videobarbiereM.mp4' />
        </div>
        <div className='hidden md:inline-flex'>
          <VideoPlayer video='video/videoBarbiere.mp4' />
        </div>
      </Container>{" "}
      <Container className='  absolute w-full bottom-[280px] md:bottom-[220px] md:w-[45%] md:mx-auto md:relative'>
        {" "}
        <motion.div
          animate={{ scale: [0.9, 1.02, 1] }}
          transition={{ duration: 0.7 }}
        >
          <HeroBtn />
        </motion.div>
      </Container>{" "}
      <a href='#some'>
        <Container className='absolute w-full bottom-[110px] md:bottom-[70px] md:relative animate-bounce'>
          <MyImage source={"/assets/arrow-down.svg"} h={"60"} w={"100"} />
        </Container>{" "}
      </a>
    </Container>
  );
};
export default HeroImg;
