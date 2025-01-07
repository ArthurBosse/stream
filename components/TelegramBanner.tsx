"use client";

import Link from "next/link";
import { Send } from "lucide-react";

export default function TelegramBanner() {
  return (
    <Link
      href="https://t.me/gratuit_streaming"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-[#0088cc] hover:bg-[#0099dd] transition-colors fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-2 text-white">
        <Send className="w-4 h-4" />
        <span className="text-sm font-medium">
          Cliquez ici pour rejoindre notre groupe Telegram et ne manquer aucune sortie de film ! 🎬
        </span>
      </div>
    </Link>
  );
}