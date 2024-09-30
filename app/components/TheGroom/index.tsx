"use client";

import { useEffect, useState } from "react";
import OnePage from "@/components/OnePage";
import Image from "next/image";
import groom from "@/public/groom.webp";
import { motion, useAnimation } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 
import React from "react";

const TheGroom: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Trigger animation when scrolling down
  useEffect(() => {
    if (inView && scrollDirection === "down") {
      controls.start("visible");
    }
  }, [controls, inView, scrollDirection]);

  // Animation variants
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  return (
    <>
      <OnePage id="the-groom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariants}
          className="flex relative w-full min-h-screen justify-center"
        >
          <div className="bg-babypink-gradient-tu !bg-opacity-35  h-[30vh] w-full max-w-[540px] absolute z-10"></div>
          <div className="bg-darkBrowny h-screen w-full max-w-[540px] absolute z-10 mix-blend-overlay"></div>
          <div className="z-0 h-screen w-screen flex flex-col items-center text-center">
            <Image
              src={groom}
              alt="groom"
              className="w-full max-w-[540px] absolute h-screen object-cover object-[calc(0px+60%)] md:object-[center_30%] transform scale-x-[-1]"
            />
          </div>
          <div className="absolute top-0 z-20 flex flex-col justify-between w-full max-w-[540px] h-full p-5 pt-10 text-white">
            <div className="text-center h-full font-bodoni text-xs flex flex-col gap-5 items-center ">
              <h2 className="font-caramel text-[100px]">- & -</h2>
            </div>
            <div className="h-full flex flex-col font-cinzel text-4xl">
              <h1 className="">The</h1>
              <h1 className="ml-5">Groom</h1>
            </div>
            <div className="h-full flex flex-col justify-end self-end text-right">
              <h2 className="font-caramel text-[55px] leading-[0.9]">Benhard</h2>
              <p className="font-playfair text-lg font-bold">
                Benhard Sampeupa, S.Ak
              </p>
              <p className="font-playfair text-xs">
                Anak ke-3 dari Bapak Elberthard Sesa
              </p>
              <p className="font-playfair text-xs">& Ibu Elis Kalang Simbong</p>
            </div>
          </div>
          <div className="bg-brown-gradient !bg-opacity-35  h-[20vh] w-full max-w-[540px] absolute z-10 bottom-0 mix-blend-overlay"></div>
        </motion.div>
      </OnePage>
    </>
  );
};

export default TheGroom;