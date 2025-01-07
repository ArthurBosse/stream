"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  movieTitle: string;
}

export default function VideoPlayer({ movieTitle }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamingUrl = "https://cjewz.com/af?o=80c91bd01d642b96f2837a0f9febeb53:d63d7c5a6c5ff78c96114eac911fe497";

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Erreur de lecture vidéo:", error);
      });
      setIsPlaying(true);
      // Afficher la popup après quelques secondes
      setTimeout(() => {
        setShowPopup(true);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 3000);
    }
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
          <video ref={videoRef} className="w-full h-full">
            <source src="/preview.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          
          {showPopup && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
              <div className="bg-white p-8 rounded-xl max-w-md text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Vous devez créer un compte pour continuer à regarder
                </h3>
                <p className="text-gray-600 mb-6">(Activez votre compte GRATUIT !)</p>
                <a
                  href={streamingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#82e295] hover:bg-[#6bc77d] text-white font-bold px-8 py-3 rounded-lg transition-colors"
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