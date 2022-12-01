import MotionTop from "../motion-top";
import { motion } from "framer-motion";

export default function H1(props) {
  return (
    <MotionTop
      initial='hidden'
      animate='visible'
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{ scale: [0.9, 1.1, 1] }}
        transition={{ duration: 0.7 }}
      >
        <h1
          className={` ${props.className} text-[40px] font-medium leading-[50px] text-center flex flex-col items-center justify-center md:mt-10 `}
        >
          {props.children}
        </h1>
      </motion.div>
    </MotionTop>
  );
}
