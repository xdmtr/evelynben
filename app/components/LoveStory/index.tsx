"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { loveStoryDown, loveStoryUp } from "@/data/data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OnePage from "@/components/OnePage";
import { useEffect, useState } from "react";

const LoveStory: React.FC = () => {
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
    <OnePage
      id="love-story"
      className="flex flex-col items-center justify-end min-h-screen text-white relative"
    >
      <div className="bg-brown-gradient-tu h-[100px] w-full max-w-[540px] absolute z-0 top-0 "></div>
      <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariants}
          className="flex flex-col items-center justify-end min-h-screen py-10 text-white gap-5 relative"
        >
      <div className="relative max-w-[350px] max-h-[220px] sm:max-w-[540px] sm:max-h-[320px] w-full h-full flex items-center justify-center z-10">
        <div className="bg-black opacity-50 z-10 absolute max-w-[350px] max-h-[220px] sm:max-w-[540px] sm:max-h-[320px] w-full h-full flex justify-center"></div>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          className="mySwiper max-w-[350px] max-h-[220px] sm:max-w-[540px] sm:max-h-[320px] w-full h-full overflow-hidden"
        >
          {loveStoryUp.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center max-w-[350px] max-h-[220px] sm:max-w-[540px] sm:max-h-[320px] w-full h-full"
            >
              <Image
                src={item}
                alt="background carousel"
                width={540}
                height={320}
                className={`object-cover w-full sm:max-w-[540px] h-full max-w-[350px] max-h-[220px] sm:max-h-[320px] overflow-hidden ${
                  index === 0 ? "object-[center_30%]" : index === 9 ? "object-[center_80%]" : "object-center"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 flex flex-col items-center border border-white m-3 gap-5 justify-center text-center z-10">
          <div className="flex flex-col items-start justify-center gap-0 leading-[0.9]">
            <h2 className="text-[#E8B968] font-cinzel  text-[40px]">Love</h2>
            <h2 className="font-caramel text-[60px] ml-20">Story</h2>
          </div>
          <div>
            <p className="font-poppins text-sm">
              Tuhan membuat segala sesuatu <br />
              indah pada waktuNya.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[100px] border-white rotate-90 sm:px-10 my-4" />
      <div className="relative max-w-[350px] max-h-[220px] sm:max-w-[540px] sm:max-h-[320px] w-full h-full flex items-center overflow-hidden justify-center">
        <Swiper
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper max-w-[350px] max-h-[220px] sm:max-w-[540px]  w-full h-full sm:max-h-[320px] overflow-hidden "
        >
          {loveStoryDown.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center  w-full h-full relative"
            >
              <div className="bg-black opacity-50 z-10 absolute max-w-[350px] max-h-[220px]  sm:max-w-[540px] sm:max-h-[320px] w-full h-full flex justify-center border border-white overflow-hidden "></div>
              <Image
                src={item.image}
                alt="background carousel"
                width={1000}
                height={500}
                className="object-cover object-center w-full max-w-[350px] max-h-[220px] sm:max-w-[540px] sm:max-h-[320px] h-full relative"
              />
              <div
                className={`absolute flex flex-col items-center justify-center text-center z-10 ${
                  index === 2
                    ? "top-[20%] sm:top-[30%]"
                    : index === 0
                    ? "top-[35%] sm:top-[40%]"
                    : "top-[50%]"
                }`}
              >
                <div
                  className={`flex flex-col items-center justify-center gap-3 p-4 font-poppins self-center" ${
                    index === 4 ? "self-center" : "self-center"
                  }`}
                >
                  <p className="text-xs">{item.text}</p>
                  <p className="px-3 border border-white text-[9px]">
                    {item.date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative w-full h-full flex flex-col items-center font-poppins justify-center text-center max-w-[540px] px-8 text-[12.5px] mt-5">
        <p>
          Ia membuat segala sesuatu indah pada waktunya, bahkan Ia memberikan
          kekekalan dalam hati mereka. Tetapi manusia tidak dapat menyelami
          pekerjaan yang dilakukan Allah dari awal sampai akhir.
        </p>
        <h3 className=" font-bold">( Pengkhotbah 3:11 )</h3>
      </div>
      </motion.div>
    </OnePage>
  );
};

export default LoveStory;
