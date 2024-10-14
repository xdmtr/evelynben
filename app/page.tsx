import React from "react";
import logo from "@/public/logo.png";
import BrideInitiation from "./components/BrideInitiation";
import WeddingDate from "./components/WeddingDate";
import BrideGallery from "./components/BrideGallery";
import TheBride from "./components/TheBride";
import TheGroom from "./components/TheGroom";
import LoveStory from "./components/LoveStory";
import PemberkatanAddress from "./components/PemberkatanAddress";
import WeddingAddress from "./components/WeddingAddress";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import ImageSeparator from "@/components/Separator/ImageSeparator";
import ImageSeparatorBrown from "@/components/Separator/ImageSeparatorBrown";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";

const GuestInvitation = dynamic(() => import("./components/GuestInvitation"), {
  loading: () => (
    <div className="w-full h-screen bg-browny flex flex-col items-center text-center gap-5 pt-20">
      <Image
        src={logo}
        alt="logo"
        width={500}
        height={500}
        className="animate-bounce duration-700 w-[50px] h-[50px]"
        loading="lazy"
        decoding="async"
      />
    </div>
  ),
  ssr: false,
});

const GuestConfirmationMessage = dynamic(
  () => import("./components/GuestConfirmMessage"),
  {
    loading: () => <div>Loading Confirmation...</div>,
  }
);

export default function Home() {
  return (
    <>
      <div className="m-0 w-full overflow-x-hidden relative">
        <div className="w-full flex flex-col items-center fixed">
          <BackgroundCarousel overlay="bg-black opacity-10" />
        </div>

        <GuestInvitation />

        <BrideInitiation />
        <WeddingDate />
        <BrideGallery />

        <div className="w-full flex flex-col items-center m-0">
          <ImageSeparator />
        </div>

        <TheBride />
        <TheGroom />

        <div className="w-full flex flex-col items-center m-0">
          <ImageSeparatorBrown />
        </div>

        <LoveStory />
        <PemberkatanAddress />
        <WeddingAddress />

        <GuestConfirmationMessage />

        <Footer />
      </div>
    </>
  );
}
