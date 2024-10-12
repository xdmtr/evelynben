"use client";
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import ImageSeparator from "@/components/Separator/ImageSeparator";
import ImageSeparatorBrown from "@/components/Separator/ImageSeparatorBrown";
import { ComponentLoader } from "@/components/ComponentLoader";

// Dynamically import components
const GuestInvitation = dynamic(() => import('./components/GuestInvitation'), { ssr: false });
const BrideInitiation = dynamic(() => import('./components/BrideInitiation'), { ssr: false });
const WeddingDate = dynamic(() => import('./components/WeddingDate'), { ssr: false });
const BrideGallery = dynamic(() => import('./components/BrideGallery'), { ssr: false });
const TheBride = dynamic(() => import('./components/TheBride'), { ssr: false });
const TheGroom = dynamic(() => import('./components/TheGroom'), { ssr: false });
const LoveStory = dynamic(() => import('./components/LoveStory'), { ssr: false });
const PemberkatanAddress = dynamic(() => import('./components/PemberkatanAddress'), { ssr: false });
const WeddingAddress = dynamic(() => import('./components/WeddingAddress'), { ssr: false });
const GuestConfirmationMessage = dynamic(() => import('./components/GuestConfirmMessage'), { ssr: false });

export default function Home() {
  const [componentsLoaded, setComponentsLoaded] = useState(0); // Track how many components have loaded
  const totalComponents = 10; // Total number of components

  const handleComponentLoad = () => {
    setComponentsLoaded((prev) => prev + 1); // Increment count when a component loads
  };

  const allComponentsLoaded = componentsLoaded === totalComponents; // Check if all components are loaded

  return (
    <>
      {/* Splash screen, displayed while loading */}
      {!allComponentsLoaded && (
        <div className="w-full h-screen bg-browny flex flex-col items-center justify-center fixed top-0 left-0 z-50">
          <Image
            src="/logo.png" // Path to your logo
            alt="logo"
            width={100}
            height={100}
            className="w-[100px] h-[100px] animate-bounce"
          />
        </div>
      )}

      {/* Main content */}
      {allComponentsLoaded && (
        <div className="m-0 w-full overflow-x-hidden relative">
          {/* Background Carousel */}
          <div className="w-full flex flex-col items-center fixed">
            <BackgroundCarousel overlay="bg-black opacity-10" />
          </div>

          {/* Render components */}
          <div>
            {/* Render components with ComponentLoader */}
            {ComponentLoader(GuestInvitation, handleComponentLoad)({})}
            {ComponentLoader(BrideInitiation, handleComponentLoad)({})}
            {ComponentLoader(WeddingDate, handleComponentLoad)({})}
            {ComponentLoader(BrideGallery, handleComponentLoad)({})}
            <div className="w-full flex flex-col items-center m-0">
              <ImageSeparator />
            </div>
            {ComponentLoader(TheBride, handleComponentLoad)({})}
            {ComponentLoader(TheGroom, handleComponentLoad)({})}
            <div className="w-full flex flex-col items-center m-0">
              <ImageSeparatorBrown />
            </div>
            {ComponentLoader(LoveStory, handleComponentLoad)({})}
            {ComponentLoader(PemberkatanAddress, handleComponentLoad)({})}
            {ComponentLoader(WeddingAddress, handleComponentLoad)({})}
            {ComponentLoader(GuestConfirmationMessage, handleComponentLoad)({})}
          </div>
        </div>
      )}
    </>
  );
}
