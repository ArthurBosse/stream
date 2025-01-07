"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  movieTitle: string;
}

export default function VideoPlayer({ movieTitle }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const streamingUrl = "https://cjewz.com/af?o=80c91bd01d642b96f2837a0f9febeb53:d63d7c5a6c5ff78c96114eac911fe497";

  const handlePlay = () => {
    setIsPlaying(true);
    // Afficher la popup après quelques secondes
    setTimeout(() => {
      setShowPopup(true);
    }, 3000);
  };

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
      {!isPlaying ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handlePlay}
            className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-full transition-colors"
          >
            <Play className="w-8 h-8" />
          </button>
        </div>
      ) : (
        <>
          <iframe
            src="https://www.dailymotion.com/embed/video/xx1h83?autoplay=1"
            className="w-full h-full"
            allow="autoplay"
            allowFullScreen
          />
          
          {showPopup && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10 p-4">
              <div className="bg-white p-4 sm:p-8 rounded-xl w-full max-w-sm sm:max-w-md text-center">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                  Vous devez créer un compte pour continuer à regarder {movieTitle}
                </h3>
                <p className="text-gray-600 mb-6">Activez votre compte GRATUITEMENT</p>
                <a
                  href={streamingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#82e295] hover:bg-[#6bc77d] text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition-colors text-sm sm:text-base"
                >
                  Inscrivez-vous Gratuitement
                </a>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}