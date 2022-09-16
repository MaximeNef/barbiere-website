import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function MotionRight({
  id,
  children,
  fitHeight,
  style,
  onClick,
  animate,
  initial,
  transition,
  className,
}) {
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        onClick={onClick}
        id={id}
        style={{
          ...(fitHeight && { height: "fit-content" }),
          ...style,
        }}
        initial={initial}
        animate={controls}
        transition={transition}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
}
