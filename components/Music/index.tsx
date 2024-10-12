"use client";

import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

interface MusicProps {
  onReady: () => void; 
}

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

const Music = forwardRef<any, MusicProps>(({ onReady }, ref) => {
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
            event.target.setVolume(50);
            onReady();
          },
        },
        playerVars: {
          autoplay: 0, 
          loop: 1,
          playlist: "jtK-xIM-7tU",
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
        },
      });
      setPlayer(newPlayer);
    };
  }, [onReady]);

  useImperativeHandle(ref, () => ({
    playMusic: () => {
      if (player) {
        player.playVideo(); // Play the video when called
      }
    }
  }));

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
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
        className="fixed bottom-5 right-5 bg-gray-800 text-white p-2 rounded-full z-50"
      >
        {isMuted ? <MdMusicOff size={30} /> : <MdMusicNote size={30} />}
      </button>
    </>
  );
});

Music.displayName = "Music";

export default Music;
