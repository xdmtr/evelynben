"use client";

import { useEffect, useState } from "react";
import OnePage from "@/components/OnePage";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { PiMapPinBold } from "react-icons/pi";
import { FiGift } from "react-icons/fi";
import WeddingGiftDrawer from "../WeddingGiftDrawer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const WeddingAddress: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

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

  useEffect(() => {
    if (inView && scrollDirection === "down") {
      controls.start("visible");
    }
  }, [controls, inView, scrollDirection]);

  // Animation variants for fade zoom-in
  const fadeZoomInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  // Slide up animation variant
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
        className="w-full z-20 h-auto relative !items-start"
        id="wedding-address"
      >
        <div className="bg-black opacity-30 absolute top-0 w-screen min-h-full h-auto z-0"></div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariants}
          className="w-full z-20 h-auto relative"
        >
          <div className="z-10 w-full flex flex-col items-center justify-between text-white gap-5 min-h-screen">
            <div className="w-full bg-gradient-to-b from-[#8E8077] to-[#A69A92] bg-opacity-90 border-2 border-white flex flex-col items-center text-right">
              <div className="w-full max-w-[540px] leading-none px-5 pb-5 flex flex-col items-end gap-3 font-poppins">
                <h1 className="font-caramel text-[46px]">Resepsi</h1>
                <div className="">
                  <h3 className="font-bold text-sm">Sabtu, 02 November 2024</h3>
                  <p className="text-xs">18:30 - 21:00</p>
                </div>
                <div className="">
                  <h3 className="font-bold text-sm">
                    Grand Galaxy Convention Hall
                  </h3>
                  <p className="text-xs">
                    Jl. Boulevard Raya No. 1, Jaka Setia, <br />
                    Kec. Bekasi Selatan, Kota Bekasi <br />
                    Grand Galaxy Park Mall - Lt.2
                  </p>
                </div>
                <Link
                  className="flex items-center gap-1 text-right py-1 px-3 bg-white opacity-80 text-xs text-[#312B27] rounded-full shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
                  href="https://maps.app.goo.gl/wg6H6YLb5zSFTQwz8?g_st=ic"
                >
                  <PiMapPinBold /> Google Maps
                </Link>
              </div>
            </div>

            <div className="w-full max-w-[540px] p-5 flex flex-col items-center justify-around gap-5 flex-grow">
              {/* Fade zoom in for Bible verse */}
              <motion.div
                className="flex flex-col items-center justify-center text-center gap-3 font-questrial text-sm w-full py-5"
                initial="hidden"
                animate={controls}
                variants={fadeZoomInVariants}
              >
                <p>
                  Demikianlah mereka bukan lagi dua, melainkan satu. <br />
                  Karena itu, apa yang telah dipersatukan Allah, <br />
                  tidak boleh diceraikan manusia.
                </p>
                <h3>( Matius 19:6 )</h3>
              </motion.div>

              {/* Slide up for Live Streaming */}
              <motion.div
                className="bg-bg-brown-gradient border-2 border-white flex flex-col gap-2 text-center pb-5 px-2 w-full font-poppins"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
              >
                <h2 className="font-caramel text-[46px] leading-none">
                  Live Streaming
                </h2>
                <p className="text-[11px]">
                  Temui Kami secara virtual untuk menyaksikan Pemberkatan kami
                  melalui tautan dibawah ini
                </p>
                <Link
                  href="https://www.youtube.com/@inforkomGTJGalaxi/featured"
                  className="text-xs py-1 px-3 rounded-full border border-white bg-brown-gradient w-fit self-center flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
                >
                  <FaYoutube className="text-red-500 text-lg" />
                  Youtube
                </Link>
              </motion.div>

              {/* Slide up for Wedding Gift */}
              <motion.div
                className="bg-bg-brown-gradient border-2 border-white flex flex-col gap-2 text-center pb-5 px-2 w-full font-poppins"
                initial="hidden"
                animate={controls}
                variants={slideUpVariants}
              >
                <h2 className="font-caramel text-[46px] leading-none">
                  Wedding Gift
                </h2>
                <p className=" text-[11px]">
                  Tanpa Mengurangi rasa hormat,
                  <br />
                  Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan hadiah <br />
                  pernikahan dapat melalui :
                </p>
                <button
                  onClick={toggleDrawer} // Toggle the drawer when clicked
                  className="text-xs py-1 px-3 rounded-full border border-white bg-brown-gradient w-fit self-center flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
                >
                  <FiGift className="text-lg" /> Click Here
                </button>
                <p className="font-poppins text-[10px]">
                  Thank You For Your Gift
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </OnePage>

      {isDrawerOpen && (
        <WeddingGiftDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      )}
    </>
  );
};

export default WeddingAddress;