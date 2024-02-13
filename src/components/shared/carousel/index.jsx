import * as React from "react";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import MyImage from "../myimage";
import Container from "../container";

import { useEffect } from "react";
/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param  - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === props.photo.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const timer = setInterval(function () {
      let newSlide =
        currentSlide <= props.photo.length - 2
          ? currentSlide + 1
          : (currentSlide = 0);
      setCurrentSlide(newSlide);
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  clearInterval();

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
        className={`w-full h-[55vh] md:h-[55vh] flex overflow-hidden relative m-auto  rounded-[20px]`}
      >
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className='relative z-10 w-full h-full '
        >
          {props.photo.map((item, index) => {
            if (index === currentSlide) {
              return (
                <Container key={index} className='mt-10 w-full  '>
                  {" "}
                  <Container className='absolute top-[130px] left-20 md:left-[110vh]'>
                    <MyImage source='/assets/LogoAgence.svg' w={300} h={400} />
                  </Container>
                  <Container className='  rounded-[20px]  w-full '>
                    <Container className='hidden md:inline-flex relative   z-30 '>
                      <MyImage
                        source={item}
                        w={300}
                        h={500}
                        objectFit='cover'
                        className='  animate-fadeIn  rounded-[16px] transition duration-700  shadow-cardinfo '
                      />
                    </Container>
                    <Container className=' inline-flex md:hidden  relative   z-30 '>
                      <MyImage
                        source={item}
                        w={300}
                        h={400}
                        objectFit='cover'
                        className='  rounded-[16px] transition duration-700  shadow-cardinfo '
                      />
                    </Container>
                  </Container>{" "}
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

      <div className='relative flex justify-center  p-2  '>
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
