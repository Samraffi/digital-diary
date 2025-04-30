import { StickerColor } from './sticker';

export type DiaryEntry = {
  id: string;
  content: string;
  emoji: string;
  createdAt: string;
  updatedAt: string;
  stickerColor: StickerColor;
}

export type DiaryItemProps = {
  diary: DiaryEntry;
  onClick: () => void;
};

export interface DiariesPageProps {
  diaries: DiaryEntry[];
}
