"use client";

import OnePage from "@/components/OnePage";
import Image from "next/image";
import picture from "@/public/bg-carousel/4.webp";
import { galleryP3 } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import React from "react";

const BrideGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const slideUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, ease: "easeOut" },
    },
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <OnePage
        className="z-20 flex flex-col gap-3= justify-start items-start relative"
        id="bride-gallery"
      >
        <div className="bg-brown-gradient-gallery !bg-opacity-35 h-[30vh] w-full max-w-[540px] absolute z-10 bottom-0"></div>
        <div className="h-full w-full max-w-[540px] absolute z-0 bottom-0 bg-black bg-opacity-50 "></div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideUpVariants}
          className="z-20 w-full max-w-[540px] py-5 px-10 flex flex-col justify-center gap-5 items-center"
        >
          <div className="flex justify-center p-2 border border-white w-fit">
            <Image
              src={picture.src}
              alt="images"
              width={500}
              height={600}
              className="w-full max-h-[450px] object-contain"
            />
          </div>
          <div className="text-white text-center font-Italianno text-[27px] smol:text-[29px] tracking-wide">
            <p>
              It has been six long years. <br />
              Look how far we’ve come. <br />
              Though it took the long way. <br />
              We knew we’d get there someday. <br />
              And now, We’ve finally made it.
            </p>
          </div>
        </motion.div>
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          loop={true}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="z-50 mySwiper w-full overflow-hidden !p-2 max-w-[540px]"
        >
          {galleryP3.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={typeof item === "string" ? item : item.src}
                alt="background carousel"
                width={160}
                height={109}
                className="max-h-[109px] overflow-hidden object-cover object-center md:object-[center_30%] border-2 border-white rounded-lg cursor-pointer z-40"
                onClick={() =>
                  handleImageClick(typeof item === "string" ? item : item.src)
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </OnePage>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-auto touch-pan-y">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Zoomed Image"
              width={800}
              height={600}
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BrideGallery;
