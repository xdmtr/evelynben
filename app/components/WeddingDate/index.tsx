"use client";

import { useEffect, useState, useMemo } from "react";
import OnePage from "@/components/OnePage";
import { FaRegCalendarDays } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const WeddingDate: React.FC = () => {
  const targetDate = useMemo(() => new Date("2024-11-02T11:30:00Z"), []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

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

  useEffect(() => {
    if (inView && scrollDirection === "down") {
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
      <OnePage className="w-full relative h-auto !items-start" id="wedding-date">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariants}
          className="w-full flex flex-col items-center justify-between text-white z-20 h-screen pb-20 md:pb-5"
        >
          <div className="flex w-full max-w-[540px] justify-between items-center font-cinzel font-bold p-5">
            <p className="border-b flex items-center gap-1 tracking-tight leading-tight">
              <FaRegCalendarDays className="text-xs" />
              Save The Date
            </p>
            <p>02.11.24</p>
          </div>
          <div className="w-full flex flex-col items-center text-center gap-6 px-5 !justify-end pb-5 sm:pb-0">
            <h2 className="font-bodoni text-xl">The Wedding of</h2>
            <h1 className="font-caramel text-[90px] leading-[0.9]">
              Evelyn <br /> & <br /> Benhard
            </h1>
            <div className="mt-5 flex items-center justify-around w-full max-w-[540px] font-cinzel">
              <div className="bg-[#666666] font-bold bg-opacity-40 p-2 px-5 rounded-xl">
                <p className="text-xl">{timeLeft.days}</p>
                <p className="text-[8px]">Days</p>
              </div>
              <div className="bg-[#666666] font-bold bg-opacity-40 p-2 px-5 rounded-xl">
                <p className="text-xl">{timeLeft.hours}</p>
                <p className="text-[8px]">Hours</p>
              </div>
              <div className="bg-[#666666] font-bold bg-opacity-40 p-2 px-5 rounded-xl">
                <p className="text-xl">{timeLeft.minutes}</p>
                <p className="text-[8px]">Minutes</p>
              </div>
              <div className="bg-[#666666] font-bold bg-opacity-40 p-2 px-5 rounded-xl">
                <p className="text-xl">{timeLeft.seconds}</p>
                <p className="text-[8px]">Seconds</p>
              </div>
            </div>
          </div>
        </motion.div>
      </OnePage>
    </>
  );
};

export default WeddingDate;