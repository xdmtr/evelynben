"use client";

import { useEffect, useState } from "react";
import OnePage from "@/components/OnePage";
import Image from "next/image";
import bride from "@/public/bride.webp";
import rumahadat from "@/public/patangkerapa.webp";
import { motion, useAnimation } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 
import React from "react";

const TheBride: React.FC = () => {
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
      <OnePage className="justify-center" id="the-bride">
        <div className="flex relative w-full min-h-screen justify-center">
          <div className="bg-brown-gradient-tu h-screen w-full max-w-[540px] absolute z-10 mix-blend-overlay"></div>
          <div className="z-0 h-screen w-screen flex flex-col items-center text-center">
            <Image
              src={bride}
              alt="bride"
              className="absolute h-screen w-full max-w-[540px] object-cover object-[calc(0px+55%)] md:object-[center_35%]"
            />
          </div>
          <div className="absolute top-0 z-20 flex flex-col justify-between w-full max-w-[540px] h-full text-white">
            <div className="text-center h-full font-bodoni text-xs flex flex-col gap-5 items-center p-5">
              <Image
                src={rumahadat}
                alt="rumah adat"
                height={88}
                width={68}
                className=""
              />
              <p>
                Dengan perasaan penuh syukur, <br />
                kami mengundang Bapak/Ibu/Saudara/i <br />
                untuk datang dan menjadi saksi dalam perjalanan cinta kami
              </p>
            </div>

            {/* Animate only 'The Bride' title */}
            <motion.div
              className="p-5 h-full flex flex-col self-end font-cinzel text-4xl"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={slideUpVariants}
            >
              <h1>The</h1>
              <h1 className="ml-5">Bride</h1>
            </motion.div>

            {/* Animate only the bride's name */}
            <motion.div
              className="h-full flex flex-col justify-end p-5"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={slideUpVariants}
            >
              <h2 className="font-caramel text-[55px] leading-[0.9]">Evelyn</h2>
              <p className="font-playfair text-lg font-bold">
                Evelyn Arista Tumbo, S.Ak
              </p>
              <p className="font-playfair text-xs">
                Anak ke-2 dari Bapak Aris Tumbo
              </p>
              <p className="font-playfair text-xs">& Ibu Murni Herawati</p>
            </motion.div>
          </div>
          <div className="bg-babypink-gradient-tb !bg-opacity-35 h-[80vh] w-full max-w-[540px] absolute z-10 bottom-0 mix-blend-overlay"></div>
        </div>
      </OnePage>
    </>
  );
};

export default TheBride;
