export interface StoryNode {
  id: string;
  content: string;
  choices: Choice[];
  isEnding: boolean;
}

export interface Choice {
  text: string;
  nextNodeId: string;
}

export interface StoryProgress {
  currentNodeId: string;
  history: string[];
}