import { useEffect } from "react";
import { useState } from "react";
import Btn3 from "../btn3";
import Container from "../container";
import Flex from "../flex";
import H2 from "../h2";
import MotionRight from "../motion-CardRight";
import MyImage from "../myimage";
import P from "../p";

const CardJob = (props) => {
  const [height, setheight] = useState(false);

  const handleClick = () => {
    setheight((prevState) => !prevState);
  };
  return (
    <MotionRight
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.7, delay: 0.5 }}
      className='md:max-w-[45%] md:m-2 md:flex md:justify-center md:items-center '
    >
      <Container className='p-[2px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] rounded-[20px] shadow-cardinfo md:w-full md:h-fit md:mx-4 md:mb-8  '>
        <Container className='bg-white rounded-[18px] relative space-y-[30px] px-5 py-10 '>
          {" "}
          <Container className='relative w-full'>
            {props.img == undefined ? (
              <></>
            ) : (
              <Container className='absolute top-[-30px] left-[-10px]'>
                <MyImage source={props.img} w={"50"} h={"50"} />
              </Container>
            )}

            <H2>{props.h2}</H2>
          </Container>
          <Container
            className={` text-[17px] font-light leading-[21px]   items-center justify-center h-fit `}
          >
            <p className='relative  overflow-hidden   text-center'>{props.p}</p>
          </Container>{" "}
          {props.btn == "je postule" ? (
            <div
              className={`text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] text-[19px] font-semibold leading-6 text-center relative w-fit mx-auto  cursor-pointer`}
            >
              <a href='mailto:no-one@snai1mai1.com?subject=Agent Immobilier'>
                {" "}
                <p>{props.btn}</p>
              </a>

              <div
                className={` w-full absolute bottom-[1px] h-[1px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9]`}
              />
            </div>
          ) : (
            <Container onClick={handleClick}>
              <div
                className={`text-transparent bg-clip-text bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9] text-[19px] font-semibold leading-6 text-center relative w-fit mx-auto  cursor-pointer`}
              >
                <p>{props.btn}</p>
                <div
                  className={` w-full absolute bottom-[1px] h-[1px] bg-gradient-to-r from-[#41B8B8] to-[#1AD9D9]`}
                />
              </div>
            </Container>
          )}
        </Container>
      </Container>{" "}
    </MotionRight>
  );
};
export default CardJob;
