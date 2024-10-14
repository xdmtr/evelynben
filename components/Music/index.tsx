"use client"; // Indicates this is a client component in Next.js App Router

import React, { useState, forwardRef, MutableRefObject } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

// Declare the YouTube API types globally
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: typeof YT;
  }
}

const Music = forwardRef<HTMLAudioElement>((_, ref) => {
  const [isMuted, setIsMuted] = useState(false);

  // Function to toggle mute/unmute
  const toggleMute = () => {
    const musicRef = ref as MutableRefObject<HTMLAudioElement | null>;
    if (musicRef.current) {
      if (musicRef.current.muted) {
        musicRef.current.muted = false;
      } else {
        musicRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <div className="hidden">
        <audio loop ref={ref}>
          <source src="music/turning_page.mp3" />
        </audio>
      </div>

      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
        className="fixed bottom-5 right-5 bg-gray-800 text-white p-2 rounded-full z-50"
      >
        {isMuted ? <MdMusicOff size={30} /> : <MdMusicNote size={30} />}
      </button>
    </>
  );
});

Music.displayName = "Music";

export default Music;
