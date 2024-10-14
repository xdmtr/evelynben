"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import { backgroundCarouselData } from "@/data/data";

interface overlayProps {
  overlay?: string;
}

const BackgroundCarousel: React.FC<overlayProps> = ({ overlay }) => {
  return (
    <>
      <div
        className={` z-10 absolute h-screen w-screen flex justify-center ${overlay}`}
      ></div>
      <Swiper
        effect={"fade"}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper w-screen overflow-hidden"
      >
        {backgroundCarouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="background carousel"
              className=" h-screen object-cover object-center md:object-[center_30%]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BackgroundCarousel;
