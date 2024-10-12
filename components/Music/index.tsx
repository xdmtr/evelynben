'use client'; // Indicates this is a client component in Next.js App Router

import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

// Define props for the Music component
interface MusicProps {
  onReady: () => void;
}

// Declare the YouTube API types globally
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: typeof YT;
  }
}

const Music = forwardRef<{ playMusic: () => void }, MusicProps>(({ onReady }, ref) => {
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState<YT.Player | null>(null);

  useEffect(() => {
    // Load the YouTube iframe API dynamically
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // YouTube Iframe API ready event
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player("music-player", {
        videoId: "cpYYX3ONPGc", // Replace with your video ID
        events: {
          onReady: (event: YT.PlayerEvent) => {
            event.target.setVolume(50); // Set initial volume
            onReady(); // Notify parent that the player is ready
          },
        },
        playerVars: {
          autoplay: 0, // Do not autoplay the video
          loop: 1,
          playlist: "jtK-xIM-7tU", // If looping, specify playlist
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
        },
      });
      setPlayer(newPlayer); // Save player instance
    };
  }, [onReady]);

  // Expose playMusic function to the parent component through ref
  useImperativeHandle(ref, () => ({
    playMusic: () => {
      if (player) {
        player.playVideo(); // Play the video when called
      }
    },
  }));

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute(); // Unmute player
      } else {
        player.mute(); // Mute player
      }
      setIsMuted(!isMuted); 
    }
  };

  return (
    <>
      <div className="hidden">
        <div id="music-player"></div>
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
