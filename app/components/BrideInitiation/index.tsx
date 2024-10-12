"use client";

import OnePage from "@/components/OnePage";
import Image from "next/image";
import picture from "@/public/fix1.webp";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BrideInitiation: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true,  // Only trigger the animation once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const hrVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "120px",
      opacity: 1,
      transition: { duration: 4, ease: "easeOut" },
    },
  };
  
  return (
    <>
      <OnePage className="" id="bride-initiation">
        <div className="flex justify-center items-center relative w-full">
          <div className="z-0 h-screen w-full flex flex-col items-center text-center overflow-hidden">
            <Image
              src={picture}
              alt="image"
              className="h-screen w-screen object-cover object-[calc(50%+30px)] sm:object-center"
            />
          </div>
          <div className="z-20 top-0 absolute flex flex-col justify-end items-center text-center w-full h-[73%] text-white gap-2">
            <h1 className="text-lg font-bodoni">The wait is finally over!</h1>
            <div className="flex items-center gap-2 font-Italianno text-xl font-light">
              <p>from 2018</p>
              <div className="w-[120px]" ref={ref}>
                <motion.hr
                  className="border-white border"
                  variants={hrVariants}
                  initial="hidden"
                  animate={controls}
                />
              </div>
              <p>to 2024</p>
            </div>
          </div>
        </div>
      </OnePage>
    </>
  );
};

export default BrideInitiation;