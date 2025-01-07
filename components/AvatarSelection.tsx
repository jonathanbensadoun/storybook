"use client";

import { motion } from "framer-motion";
import { Cat, Dog } from "lucide-react";

interface AvatarSelectionProps {
  onSelect: (avatar: "cat" | "dog") => void;
}

export default function AvatarSelection({ onSelect }: AvatarSelectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="page-title mb-8">Choisis ton héros !</h1>
        <div className="flex gap-8 justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("cat")}
            className="story-card p-8 flex flex-col items-center gap-4 cursor-pointer hover:border-[#FF6B6B]"
          >
            <Cat className="w-24 h-24 text-[#FF6B6B]" />
            <p className="text-2xl font-bold text-[#FF6B6B]">Chat Curieux</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect("dog")}
            className="story-card p-8 flex flex-col items-center gap-4 cursor-pointer hover:border-[#4ECDC4]"
          >
            <Dog className="w-24 h-24 text-[#4ECDC4]" />
            <p className="text-2xl font-bold text-[#4ECDC4]">Chien Joyeux</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
