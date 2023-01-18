import MotionTop from "../motion-top";

export default function H1(props) {
  return (
    <MotionTop
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.3 }}
    >
      <h1
        className={` ${props.className} text-[40px] font-medium leading-[50px] text-center flex flex-col items-center justify-center md:mt-10 `}
      >
        {props.children}
      </h1>
    </MotionTop>
  );
}
