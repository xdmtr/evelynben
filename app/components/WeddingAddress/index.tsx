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

  const controls = useAnimation();
  const { ref: resepsiRef, inView: resepsiInView } = useInView({ triggerOnce: true });
  const { ref: bibleVerseRef, inView: bibleVerseInView } = useInView({ triggerOnce: true });
  const { ref: liveStreamingRef, inView: liveStreamingInView } = useInView({ triggerOnce: true });
  const { ref: weddingGiftRef, inView: weddingGiftInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (resepsiInView) controls.start("visible");
  }, [controls, resepsiInView]);

  useEffect(() => {
    if (bibleVerseInView) controls.start("visible");
  }, [controls, bibleVerseInView]);

  useEffect(() => {
    if (liveStreamingInView) controls.start("visible");
  }, [controls, liveStreamingInView]);

  useEffect(() => {
    if (weddingGiftInView) controls.start("visible");
  }, [controls, weddingGiftInView]);

  const fadeZoomInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

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

        <div className="w-full z-20 h-auto relative">
          <div className="z-10 w-full flex flex-col items-center justify-between text-white gap-5 min-h-screen">
            <motion.div
              ref={resepsiRef}
              initial="hidden"
              animate={resepsiInView ? "visible" : "hidden"}
              variants={slideUpVariants} 
              className="w-full bg-gradient-to-b from-[#8E8077] to-[#A69A92] bg-opacity-90 border-2 border-white flex flex-col items-center text-right"
            >
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
            </motion.div>

            <div className="w-full max-w-[540px] p-5 flex flex-col items-center justify-around gap-5 flex-grow">
              <motion.div
                ref={bibleVerseRef}
                initial="hidden"
                animate={bibleVerseInView ? "visible" : "hidden"}
                variants={fadeZoomInVariants}
                className="flex flex-col items-center justify-center text-center gap-3 font-questrial text-sm w-full py-5"
              >
                <p>
                  Demikianlah mereka bukan lagi dua, melainkan satu. <br />
                  Karena itu, apa yang telah dipersatukan Allah, <br />
                  tidak boleh diceraikan manusia.
                </p>
                <h3>( Matius 19:6 )</h3>
              </motion.div>

              <motion.div
                ref={liveStreamingRef}
                initial="hidden"
                animate={liveStreamingInView ? "visible" : "hidden"}
                variants={slideUpVariants} 
                className="bg-bg-brown-gradient border-2 border-white flex flex-col gap-2 text-center pb-5 px-2 w-full font-poppins"
              >
                <h2 className="font-caramel text-[46px] leading-none">
                  Live Streaming
                </h2>
                <p className="text-[11px]">
                  Temui Kami secara virtual untuk menyaksikan Pemberkatan kami
                  melalui tautan dibawah ini
                </p>
                <Link
                  href="https://www.youtube.com/live/n4SE2F2FI1E?si=QuV7ZE6nfdTMMyLW"
                  className="text-xs py-1 px-3 rounded-full border border-white bg-brown-gradient w-fit self-center flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
                >
                  <FaYoutube className="text-red-500 text-lg" />
                  Youtube
                </Link>
              </motion.div>
              <motion.div
                ref={weddingGiftRef}
                initial="hidden"
                animate={weddingGiftInView ? "visible" : "hidden"}
                variants={slideUpVariants} 
                className="bg-bg-brown-gradient border-2 border-white flex flex-col gap-2 text-center pb-5 px-2 w-full font-poppins"
              >
                <h2 className="font-caramel text-[46px] leading-none">
                Tanda Kasih
                </h2>
                <p className=" text-[11px]">
                  Doa restu yang kami terima sangat berarti, namun jika ingin memberi tanda kasih, tentunya semakin melengkapi kebahagiaan kami
                </p>
                <button
                  onClick={toggleDrawer}
                  className="text-xs py-1 px-3 rounded-full border border-white bg-brown-gradient w-fit self-center flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
                >
                  <FiGift className="text-lg" /> Click Here
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </OnePage>

      {isDrawerOpen && (
        <WeddingGiftDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      )}
    </>
  );
};

export default WeddingAddress;
