import * as React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import MyImage from "../myimage";
import Container from "../container";
import MotionRight from "../motion-CardRight";
/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param  - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel(props) {
  console.log(props.photo, " img img ");
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === props.photo.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0 ? props.photo.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className='relative w-full h-full z-10'>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className={` m-auto inset-y-1/2 cursor-pointer text-[#1AD9D9] z-20 
            absolute left-0 text-5xl
        `}
      />
      <div
        className={`w-full h-[50vh] md:h-[65vh] flex overflow-hidden relative m-auto  rounded-[20px]`}
      >
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className='relative z-10 w-full h-full '
        >
          {props.photo.map((item, index) => {
            console.log(item, "itemsssssssss");
            if (index === currentSlide) {
              return (
                <Container className='mt-10 w-full  '>
                  {" "}
                  <Container className='absolute top-[130px] left-20 md:left-[110vh]'>
                    <MyImage source='/assets/LogoAgence.svg' w={600} h={800} />
                  </Container>
                  <MotionRight
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 0.7 }}
                  >
                    <Container className=' bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] shadow-cardinfo  w-full '>
                      <Container className=' rounded-[18px] relative    min-h-[300px] md:min-h-[600px] z-30 '>
                        <MyImage
                          source={item}
                          layout='fill'
                          objectFit='cover'
                          className='animate-fadeIn rounded-[16px] '
                        />
                      </Container>
                    </Container>{" "}
                  </MotionRight>
                </Container>
              );
            }
          })}
        </Swipe>
      </div>

      <AiOutlineRight
        onClick={handleNextSlide}
        className={` m-auto  inset-y-1/2 cursor-pointer text-[#1AD9D9] z-20 absolute right-0 text-5xl`}
      />

      <div className='relative flex justify-center  p-2'>
        {props.photo.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-2 w-4 bg-[#1AD9D9] rounded-full mx-1 mb-2 cursor-pointer"
                  : "h-2 w-2 bg-gray-300 rounded-full mx-1 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
