import React, { Suspense } from "react";
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

export default function Home() {
  return (
    <>
      <div className="m-0 w-full overflow-x-hidden relative">
        <div className="w-full flex flex-col items-center fixed">
          <BackgroundCarousel overlay="bg-black opacity-10" />
        </div>
        <Suspense fallback={<div>Loading Invitation...</div>}>
          <GuestInvitation />
        </Suspense>
        <BrideInitiation />
        <WeddingDate />
        <BrideGallery />
        <div className="w-full flex flex-col items-center">
          <ImageSeparator />
        </div>
        <TheBride />
        <div className="w-full flex flex-col items-center">
          <PinkToBabyPink />
        </div>
        <TheGroom />
        <div className="w-full flex flex-col items-center">
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
