export interface EmojiData {
  emoji: string;
  keywords: string[];
}

export interface EmojiCategories {
  [key: string]: EmojiData[];
}

export interface EmojipickerProps {
  isOpen: boolean;
  handleEmojiSelect: (emoji: string) => void;
  onClose: () => void;
}

export interface StickerData {
  id: string;
  emoji: string;
  x: number;
  y: number;
  scale?: number;
  rotation?: number;
}
