// "use client";

import React from "react";
// import { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const ImageSeparatorBrown: React.FC = () => {
  // const [lastScrollY, setLastScrollY] = useState(0);
  // const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
  //   null
  // );

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > lastScrollY) {
  //       setScrollDirection("down");
  //     } else {
  //       setScrollDirection("up");
  //     }
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);

  // const controls = useAnimation();
  // const { ref, inView } = useInView({
  //   threshold: 0.1,
  //   triggerOnce: false,
  // });

  // useEffect(() => {
  //   if (inView && scrollDirection === "down") {
  //     controls.start("visible");
  //   }
  // }, [controls, inView, scrollDirection]);

  // const slideUpVariants = {
  //   hidden: { opacity: 0, x: -50 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 1.3, ease: "easeOut" },
  //   },
  // };

  return (
    <>
      {/* <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideUpVariants}
        className="w-full flex justify-center"
      > */}
        <div className="h-[200px] bg-polaadat-tu bg-repeat-x bg-cover w-full max-w-[540px] text-transparent relative"></div>
      {/* </motion.div> */}
    </>
  );
};

export default ImageSeparatorBrown;
