"use client";

import { useState } from "react";
import { StoryNode as StoryNodeType } from "@/lib/types";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import Image from "next/image";

interface StoryNodeProps {
  node: StoryNodeType;
  onChoiceSelect: (nextNodeId: string) => void;
}

export default function StoryNode({ node, onChoiceSelect }: StoryNodeProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChoice = (nextNodeId: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      onChoiceSelect(nextNodeId);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* <div className="absolute ml-14 lg:ml-0 lg:inset-y-1/4 z-0">
        <Image
          src={`/${node.id}.png`}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> */}
      <div className="story-card p-8">
        <Image
          src={`/${node.id}.png`}
          alt={node.id}
          width={800}
          height={800}
          className="rounded-2xl mb-"
        />
        <p className="story-text my-8">{node.content}</p>

        {!node.isEnding && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary-color flex items-center gap-2">
              <Star className="w-6 h-6" />
              Que veux-tu faire ?
            </h3>
            <div className="flex flex-col gap-4">
              {node.choices.map((choice) => (
                <motion.button
                  key={choice.nextNodeId}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleChoice(choice.nextNodeId)}
                  className="choice-button"
                  disabled={isAnimating}
                >
                  {choice.text}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {node.isEnding && (
          <div className="mt-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-primary-color mb-6 flex items-center justify-center gap-2">
                <Sparkles className="w-8 h-8" />
                Bravo ! Tu as terminé l&apos;aventure !
              </h3>
            </motion.div>
            <button
              onClick={() => onChoiceSelect("start")}
              className="choice-button mt-4"
            >
              Vivre une nouvelle aventure !
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
