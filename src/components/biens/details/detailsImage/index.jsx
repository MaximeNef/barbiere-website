import * as React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import MyImage from "../../../shared/myimage";
import Container from "../../../shared/container";
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

  const handleShow = () => {
    if (showModal == true) {
      setShowModal(false);
    }
    if (showModal == false) {
      setShowModal(true);
    }
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
  const [showModal, setShowModal] = useState(false);
  console.log(showModal, "modal");
  return (
    <div className='relative z-10'>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className={` m-auto inset-y-1/2 cursor-pointer text-[#1AD9D9] z-20 ${
          showModal
            ? " fixed left-20 text-[50px] md:text-[100px] bottom-[-80px] md:bottom-auto"
            : "absolute left-0 text-5xl"
        }`}
      />
      <div
        className={`w-full h-[50vh] md:h-[65vh] flex overflow-hidden relative m-auto  rounded-[20px] ${
          showModal ? " " : ""
        }`}
      >
        {showModal ? (
          <Container
            className='absolute right-0 md:top-8 md:right-16 text-3xl text-white cursor-pointer z-30'
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </Container>
        ) : (
          <div />
        )}

        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className='relative z-10 w-full h-full cursor-pointer '
          onClick={() => {
            setShowModal(true);
          }}
        >
          {props.details.data.slices[0].items.map((item, index) => {
            console.log(item, "itemsssssssss");
            if (index === currentSlide) {
              return (
                <>
                  <MyImage
                    source={item.autres_img.url}
                    layout='fill'
                    objectFit='cover'
                    className='animate-fadeIn rounded-[20px] w-full hover:scale-110 transition duration-700 ease-in-out'
                  />
                  {showModal && (
                    <Container className='  top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/90 overflow-hidden  fixed'>
                      <Container className=' w-full md:w-[80%] md:h-[80%] mt-[5%]'>
                        <MyImage
                          source={item.autres_img.url}
                          objectFit='contain'
                          className='animate-fadeIn rounded-[20px]'
                          w={1000}
                          h={1000}
                        />
                      </Container>
                    </Container>
                  )}{" "}
                </>
              );
            }
          })}
        </Swipe>
      </div>

      <AiOutlineRight
        onClick={handleNextSlide}
        className={` m-auto  inset-y-1/2 cursor-pointer text-[#1AD9D9] z-20 ${
          showModal
            ? " fixed right-20 text-[50px] md:text-[100px] bottom-[-80px] md:bottom-auto"
            : "absolute right-0 text-5xl"
        }`}
      />

      <div className='relative flex justify-center p-2'>
        {props.details.data.slices[0].items.map((_, index) => {
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
