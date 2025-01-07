"use client";

import { useEffect, useState } from "react";
// import { storyNodes } from "@/lib/story-data";
import StoryNode from "@/components/StoryNode";
import { BookOpen, Stars, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import CookieConsent from "@/components/CookieConsent";
import { getProgress } from "@/lib/cookies";
import AvatarSelection from "@/components/AvatarSelection";
import { catStoryNodes, dogStoryNodes } from "@/lib/story-data";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [avatar, setAvatar] = useState<"cat" | "dog" | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string>("start");

  useEffect(() => {
    if (avatar) {
      const savedProgress = getProgress();
      setCurrentNodeId(savedProgress);
    }
  }, [avatar]);

  const handleChoiceSelect = (nextNodeId: string) => {
    setCurrentNodeId(nextNodeId);
  };

  if (!avatar) {
    return <AvatarSelection onSelect={setAvatar} />;
  }

  const storyNodes = avatar === "cat" ? catStoryNodes : dogStoryNodes;

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.header
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="page-title mb-4">La Forêt Magique</h1>
          <p className="text-2xl text-[#12a76e]">
            Une aventure extraordinaire où TU es le héros !
          </p>
          {avatar && (
            <Button
              onClick={() => {
                setAvatar(null);
              }}
              className="mt-4 choice-button"
            >
              Retour à la sélection du héros
            </Button>
          )}
        </motion.header>

        <StoryNode
          node={storyNodes[currentNodeId]}
          onChoiceSelect={handleChoiceSelect}
        />
      </div>
      <CookieConsent />
    </main>
  );
}
//prompt image:
// tu est un chat blanc au yeux vert dans le style Akira Toriyama  destiné au enfant  genere moi une image qui raconte cette histoire :Le livre t'enseigne la magie et tu deviens un puissant magicien de la forêt enchantée. Chaque sort appris semble réveiller une partie de la forêt qui dormait depuis des siècles.
