import { useState, useCallback, useEffect } from 'react';
import { StickerColor, StickerEditorState } from '../types/sticker';
import useDiaryEntry from './useDiaryEntry';

const useStickerEditor = (initialColor: StickerColor = 'yellow') => {
  const { diary } = useDiaryEntry();
  
  const [editorState, setEditorState] = useState<StickerEditorState>(() => ({
    diaryId: diary?.id ?? '',
    content: diary?.content ?? '',
    emoji: diary?.emoji ?? '☀️',
    color: diary?.stickerColor ?? initialColor,
    showPicker: false
  }));

  useEffect(() => {
    if (diary) {
      setEditorState(prev => ({
        ...prev,
        diaryId: diary.id,
        content: diary.content,
        emoji: diary.emoji,
        color: diary.stickerColor
      }));
    }
  }, [diary]);

  const updateEditor = useCallback((updates: Partial<StickerEditorState>) => {
    setEditorState(prev => ({ ...prev, ...updates }));
  }, []);

  return { editorState, updateEditor };
};

export { useStickerEditor };
