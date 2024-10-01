import React, { Suspense } from "react";
import logo from "@/public/logo.png";
import GuestInvitation from "./components/GuestInvitation";
import BrideInitiation from "./components/BrideInitiation";
import WeddingDate from "./components/WeddingDate";
import BrideGallery from "./components/BrideGallery";
import TheBride from "./components/TheBride";
import TheGroom from "./components/TheGroom";
import LoveStory from "./components/LoveStory";
import PemberkatanAddress from "./components/PemberkatanAddress";
import WeddingAddress from "./components/WeddingAddress";
import GuestConfirmationMessage from "./components/GuestConfirmMessage";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import PinkToBabyPink from "@/components/Separator/PinkToBabyPink";
import ImageSeparator from "@/components/Separator/ImageSeparator";
import ImageSeparatorBrown from "@/components/Separator/ImageSeparatorBrown";
import Music from "@/components/Music";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="m-0 w-full overflow-x-hidden relative">
        <div className="w-full flex flex-col items-center fixed">
          <BackgroundCarousel overlay="bg-black opacity-10" />
        </div>
        <Suspense fallback={
          <div className="w-full h-screen bg-browny flex flex-col items-center text-center gap-5 mt-20">
            <Image 
              src={logo}
              alt="logo"
              className="animate-bounce duration-700 w-[50px] h-[50px]"
            />
            <p className="font-cinzel text-xl">Loading Invitation...</p> 
          </div>
        }>
          <GuestInvitation />
        </Suspense>
        <BrideInitiation />
        <WeddingDate />
        <BrideGallery />
        <div className="w-full flex flex-col items-center m-0">
          <ImageSeparator />
        </div>
        <TheBride />
        <div className="w-full flex flex-col items-center m-0">
          <PinkToBabyPink />
        </div>
        <TheGroom />
        <div className="w-full flex flex-col items-center m-0">
          <ImageSeparatorBrown />
        </div>

        <LoveStory />
        <PemberkatanAddress />
        <WeddingAddress />

        <Suspense fallback={<div>Loading Confirmation...</div>}>
          <GuestConfirmationMessage />
        </Suspense>

        <Music />
      </div>
    </>
  );
}
