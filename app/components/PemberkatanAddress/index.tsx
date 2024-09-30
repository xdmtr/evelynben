"use client";

import { useEffect, useState } from "react";
import OnePage from "@/components/OnePage";
import picture from "@/public/bg-carousel/5.webp";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiMapPinBold } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion"; 
import { useInView } from "react-intersection-observer"; 

const PemberkatanAddress: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  // Track scroll direction
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

  // Framer Motion animation control
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Trigger the animation when the user scrolls down and the component comes into view
  useEffect(() => {
    if (inView && scrollDirection === "down") {
      // Reset the animation every time the user scrolls down and the component enters view
      controls.start("visible");
    }
  }, [controls, inView, scrollDirection]);

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
      <OnePage
        className="relative w-full flex flex-col items-start   text-white bg-black bg-opacity-30 max-h-screen"
        id="pemberkatan-address"
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariants}
          className="flex flex-col items-start min-h-screen"
        >
        <div className="w-full">
          <div className="w-full self-center text-center pt-16 pb-4 flex items-end z-10 justify-center">
            <h1 className="font-caramel text-[46px]">Save The Date</h1>
          </div>
          <div className="w-full bg-bg-brown-gradient flex flex-col items-center z-10 border border-white font-poppins">
            <div className="w-full max-w-[540px] px-5 pb-5 flex flex-col gap-3">
              <h2 className="font-caramel text-[46px]">Pemberkatan</h2>
              <div className=" text-sm">
                <h3 className="font-bold">Sabtu, 02 November 2024</h3>
                <p className="text-xs">10:00 WIB</p>
              </div>
              <div className=" text-sm">
                <h3 className="font-bold">Gereja Toraja Jemaat Galaxi</h3>
                <p className="text-xs">
                  Jl Gardenia Tengah Blok BA 1, Jaka Setia, <br />
                  Kec. Bekasi Selatan, Kota Bekasi
                </p>
              </div>
              <Link href="https://maps.app.goo.gl/e2eR6cmCEjpJGz429?g_st=ic" className="w-fit py-1 px-5 bg-white  opacity-80 text-[#312B27] rounded-full text-xs  flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"><PiMapPinBold />Google Maps</Link>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden">
          <Image
            src={picture}
            alt="Bride and Groom"
            className=" w-screen h-[60vh]  object-cover scale-[1.8] -translate-y-24 smx:scale-125 smx:translate-y-0 object-[center_90%] smx:object-[center_70%] sm:object-[center_60%] md:object-[center_45%] sm:scale-100"
          />
        </div>
        </motion.div>
      </OnePage>
    </>
  );
};

export default PemberkatanAddress;
