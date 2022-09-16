import * as React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import MyImage from "../../../shared/myimage";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param  - Array of images with src and alt attributes
 * @returns React component
 */
export default function detailsImage(props) {
  console.log(
    props.details.data.slices[0].items[0].autres_img.url,
    " img img "
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide =
      currentSlide === props.details.data.slices[0].items.length - 1
        ? 0
        : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide =
      currentSlide === 0
        ? props.details.data.slices[0].items.length - 1
        : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  const [zoom, setzoom] = useState(false);
  const handleClick = (e) => {
    if (zoom == true) {
      setzoom(false);
    }
    if (zoom == false) {
      setzoom(true);
    }
  };
  return (
    <div className='relative z-10'>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className='absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-[#1AD9D9] z-20'
      />
      <div
        className={`w-full h-[50vh] flex overflow-hidden relative m-auto  rounded-[20px] ${
          zoom ? "" : ""
        }`}
        onClick={handleClick}
      >
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className='relative z-10 w-full h-full '
        >
          {props.details.data.slices[0].items.map((item, index) => {
            console.log(item, "itemsssssssss");
            if (index === currentSlide) {
              return (
                <MyImage
                  source={item.autres_img.url}
                  layout='fill'
                  objectFit='cover'
                  className='animate-fadeIn rounded-[20px]'
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className='absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-[#1AD9D9] z-20'
      />

      <div className='relative flex justify-center p-2'>
        {props.details.data.slices[0].items.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-[#1AD9D9] rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
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
