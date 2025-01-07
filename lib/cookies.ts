import Cookies from 'js-cookie';

const STORY_PROGRESS_KEY = 'story-progress';
const VISITED_NODES_KEY = 'visited-nodes';

export interface StoryProgress {
  currentNodeId: string;
  visitedNodes: string[];
}

export const saveProgress = (nodeId: string) => {
  const visitedNodes = getVisitedNodes();
  if (!visitedNodes.includes(nodeId)) {
    visitedNodes.push(nodeId);
    Cookies.set(VISITED_NODES_KEY, JSON.stringify(visitedNodes), { expires: 30 });
  }
  Cookies.set(STORY_PROGRESS_KEY, nodeId, { expires: 30 });
};

export const getProgress = (): string => {
  return Cookies.get(STORY_PROGRESS_KEY) || 'start';
};

export const getVisitedNodes = (): string[] => {
  const visited = Cookies.get(VISITED_NODES_KEY);
  return visited ? JSON.parse(visited) : [];
};

export const resetProgress = () => {
  Cookies.remove(STORY_PROGRESS_KEY);
  Cookies.remove(VISITED_NODES_KEY);
};