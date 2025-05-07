import { useState, useCallback } from 'react';
import { StickerColor, StickerEditorState } from '../types/sticker';

const useStickerEditor = (initialColor: StickerColor = 'yellow') => {
  const [state, setState] = useState<StickerEditorState>({
    content: '',
    emoji: '☀️',
    color: initialColor,
    showPicker: false,
  });

  const updateState = useCallback(
    (update: Partial<StickerEditorState>) => {
      setState(prev => ({ ...prev, ...update }));
    },
    []
  );

  return { state, updateState };
};

export { useStickerEditor };