import { NavigateFunction } from 'react-router';
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
  handleGoToDiary: (id: string) => void;
};

export type DiariesPageProps = {
  diaries: DiaryEntry[];
}

export type DeleteDiaryProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export type DiaryViewProps = {
  diary: DiaryEntry | null;
  diaryId: string | undefined;
  redirect: (path: string) => void;
  showModal: () => void;
}

export type UseDeleteDiary = {
  (diaryId: string | undefined, navigate: NavigateFunction): () => Promise<void>;
}

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
}