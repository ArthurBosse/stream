"use client";

import { Play, Download } from "lucide-react";

interface MovieActionButtonsProps {
  movieTitle: string;
}

export default function MovieActionButtons({ movieTitle }: MovieActionButtonsProps) {
  const streamingUrl = "https://cjewz.com/af?o=80c91bd01d642b96f2837a0f9febeb53:d63d7c5a6c5ff78c96114eac911fe497";

  return (
    <div className="flex flex-col gap-4 my-8">
      <a 
        href={streamingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors w-full md:w-auto"
      >
        <Play className="w-6 h-6" />
        Regarder en streaming
      </a>
      
      <a 
        href={streamingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors w-full md:w-auto"
      >
        <Download className="w-6 h-6" />
        Télécharger
      </a>
    </div>
  );
}