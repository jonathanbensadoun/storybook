"use client";

import { useState } from "react";
import { storyNodes } from "@/lib/story-data";
import StoryNode from "@/components/StoryNode";
import { BookOpen, Stars, Wand2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [currentNodeId, setCurrentNodeId] = useState("start");

  const handleChoiceSelect = (nextNodeId: string) => {
    setCurrentNodeId(nextNodeId);
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.header
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className="flex items-center justify-center gap-4 mb-6">
            <Stars className="w-12 h-12 text-[#FFD93D]" />
            <BookOpen className="w-16 h-16 text-primary-color" />
            <Wand2 className="w-12 h-12 text-[#12a76e]" />
          </div> */}
          <h1 className="page-title mb-4">La Forêt Magique</h1>
          <p className="text-2xl text-[#12a76e]">
            Une aventure extraordinaire où TU es le héros !
          </p>
        </motion.header>

        <StoryNode
          node={storyNodes[currentNodeId]}
          onChoiceSelect={handleChoiceSelect}
        />
      </div>
    </main>
  );
}
//prompt image:
// tu est un chat blanc au yeux vert dans le style Akira Toriyama  destiné au enfant  genere moi une image qui raconte cette histoire :Le livre t'enseigne la magie et tu deviens un puissant magicien de la forêt enchantée. Chaque sort appris semble réveiller une partie de la forêt qui dormait depuis des siècles.
