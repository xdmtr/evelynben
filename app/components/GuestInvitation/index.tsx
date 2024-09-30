"use client";

import { useSearchParams } from "next/navigation"; 
import OnePage from "@/components/OnePage";
import Image from "next/image";
import Link from "next/link";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import picture2 from "@/public/bg-carousel/2.webp";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const GuestInvitation: React.FC = () => {
  const searchParams = useSearchParams(); 
  const guestName = searchParams.get("to") || "Our Guest"; 

  const controls = useAnimation();

  const topToBottom = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const bottomToTop = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <>
      <OnePage className="" id="guest-invitation">
        <div className="flex relative w-full justify-center">
          <div className="bg-black opacity-50 z-10 absolute h-screen w-screen flex justify-center"></div>
          <div className="z-0 h-screen w-screen flex flex-col items-center text-center">
            <Image
              src={picture2}
              alt="image"
              className="absolute h-screen object-cover object-center"
            />
          </div>
          <div className="z-20 top-0 absolute flex flex-col justify-between items-center text-center w-full h-full text-white">
            <motion.div
              className="h-[60%] flex flex-col justify-center"
              initial="hidden"
              animate={controls}
              variants={topToBottom}
            >
              <p className="font-Italianno text-2xl tracking-wider">dear,</p>
              <h1 className="font-cinzel text-3xl">{guestName}</h1>
            </motion.div>

            <motion.div
              className="h-full mt-10 flex flex-col items-center justify-center gap-7"
              initial="hidden"
              animate={controls}
              variants={bottomToTop}
            >
              <p className="font-Italianno tracking-wider text-2xl">
                You are invited to witness <br /> and celebrate our special day
              </p>
              <Link
                href="#bride-initiation"
                className="flex items-center gap-2 font-poppins bg-[#666666] bg-opacity-80 py-2 px-5 rounded-full shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
              >
                <BsEnvelopeOpenHeart />
                Open Invitation
              </Link>
            </motion.div>
          </div>
        </div>
      </OnePage>
    </>
  );
};

export default GuestInvitation;