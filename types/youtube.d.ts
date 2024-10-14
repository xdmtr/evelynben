declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: typeof YT; 
  }

  namespace YT {
    class Player {
      constructor(id: string, options: PlayerOptions);
      playVideo(): void;
      pauseVideo(): void;
      mute(): void;
      unMute(): void;
      setVolume(volume: number): void;
    }

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
export {};
