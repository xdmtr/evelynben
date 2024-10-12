"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import ImageSeparator from "@/components/Separator/ImageSeparator";
import ImageSeparatorBrown from "@/components/Separator/ImageSeparatorBrown";
import { ComponentLoadProvider, useComponentLoad } from "@/context/ComponentLoadContext";
import { ComponentLoader } from "@/components/ComponentLoader";

// Dynamically import components and wrap them with ComponentLoader
const GuestInvitation = ComponentLoader(dynamic(() => import('./components/GuestInvitation'), { ssr: false }), 'GuestInvitation');
const BrideInitiation = ComponentLoader(dynamic(() => import('./components/BrideInitiation'), { ssr: false }), 'BrideInitiation');
const WeddingDate = ComponentLoader(dynamic(() => import('./components/WeddingDate'), { ssr: false }), 'WeddingDate');
const BrideGallery = ComponentLoader(dynamic(() => import('./components/BrideGallery'), { ssr: false }), 'BrideGallery');
const TheBride = ComponentLoader(dynamic(() => import('./components/TheBride'), { ssr: false }), 'TheBride');
const TheGroom = ComponentLoader(dynamic(() => import('./components/TheGroom'), { ssr: false }), 'TheGroom');
const LoveStory = ComponentLoader(dynamic(() => import('./components/LoveStory'), { ssr: false }), 'LoveStory');
const PemberkatanAddress = ComponentLoader(dynamic(() => import('./components/PemberkatanAddress'), { ssr: false }), 'PemberkatanAddress');
const WeddingAddress = ComponentLoader(dynamic(() => import('./components/WeddingAddress'), { ssr: false }), 'WeddingAddress');
const GuestConfirmationMessage = ComponentLoader(dynamic(() => import('./components/GuestConfirmMessage'), { ssr: false }), 'GuestConfirmationMessage');

// SplashScreen component
const SplashScreen = () => {
  const { allComponentsLoaded } = useComponentLoad();

  // The splash screen is shown until all components are loaded
  return (
    !allComponentsLoaded && (
      <div className="w-full h-screen bg-browny flex flex-col items-center justify-center fixed top-0 left-0 z-50">
        <Image
          src="/logo.png" // Path to your logo
          alt="logo"
          width={100}
          height={100}
          className="w-[100px] h-[100px] animate-bounce"
        />
      </div>
    )
  );
};

const HomeContent = () => {
  const { allComponentsLoaded } = useComponentLoad(); // Move useComponentLoad to HomeContent

  return (
    <div className={`m-0 w-full overflow-x-hidden relative ${allComponentsLoaded ? 'visible' : 'invisible'}`}>
      {/* Background Carousel */}
      <div className="w-full flex flex-col items-center fixed">
        <BackgroundCarousel overlay="bg-black opacity-10" />
      </div>

      {/* Your components exactly as you had them */}
      <div>
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
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <ComponentLoadProvider>
      <SplashScreen />
      <HomeContent /> {/* Move useComponentLoad hook to this inner component */}
    </ComponentLoadProvider>
  );
}
