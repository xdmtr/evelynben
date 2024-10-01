"use client";

import React, { useState, useEffect } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: typeof YT; 
  }

  namespace YT {
    interface PlayerOptions {
      videoId: string;
      playerVars?: {
        autoplay?: number;
        loop?: number;
        playlist?: string;
        controls?: number;
        showinfo?: number;
        modestbranding?: number;
      };
      events?: {
        onReady?: (event: PlayerEvent) => void;
      };
    }

    interface PlayerEvent {
      target: Player;
    }
  }
}

const Music: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState<YT.Player | null>(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player("music-player", {
        videoId: "cpYYX3ONPGc", 
        events: {
          onReady: (event: YT.PlayerEvent) => {
            event.target.setVolume(50); // Set initial volume
            event.target.playVideo(); // Try to autoplay with sound
          },
        },
        playerVars: {
          autoplay: 1, // Autoplay the video
          loop: 1, // Loop the video
          playlist: "cpYYX3ONPGc", // Loop playlist
          controls: 0, // Hide controls
          showinfo: 0, // Hide video info
          modestbranding: 1, // Remove YouTube logo
        },
      });
      setPlayer(newPlayer);
    };
  }, []);

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute(); // Unmute the player
      } else {
        player.mute(); // Mute the player
      }
      setIsMuted(!isMuted); // Toggle mute state
    }
  };

  return (
    <>
      {/* YouTube Player */}
      <div className="hidden"> {/* Hide the iframe visually */}
        <div id="music-player"></div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 bg-gray-800 text-white p-2 rounded-full z-50"
      >
        {isMuted ? <MdMusicOff size={30} /> : <MdMusicNote size={30} />}
      </button>
    </>
  );
};

export default Music;
