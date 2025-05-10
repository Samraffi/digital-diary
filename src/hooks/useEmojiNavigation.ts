import { useState, useEffect, useCallback } from 'react';
import { EmojiData } from '../types/sticker';

interface UseEmojiNavigationOptions {
  emojis: EmojiData[];
  columns: number;
  onSelect: (emoji: string) => void;
}

export const useEmojiNavigation = ({ emojis, columns, onSelect }: UseEmojiNavigationOptions) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const rows = Math.ceil(emojis.length / columns);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === -1 && ['ArrowDown', 'ArrowRight'].includes(e.key)) {
      setSelectedIndex(0);
      return;
    }

    const currentRow = Math.floor(selectedIndex / columns);
    const currentCol = selectedIndex % columns;

    switch (e.key) {
      case 'ArrowLeft':
        if (currentCol > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
        break;

      case 'ArrowRight':
        if (currentCol < columns - 1 && selectedIndex < emojis.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        }
        break;

      case 'ArrowUp':
        if (currentRow > 0) {
          const newIndex = selectedIndex - columns;
          if (newIndex >= 0) {
            setSelectedIndex(newIndex);
          }
        }
        break;

      case 'ArrowDown':
        if (currentRow < rows - 1) {
          const newIndex = selectedIndex + columns;
          if (newIndex < emojis.length) {
            setSelectedIndex(newIndex);
          }
        }
        break;

      case 'Enter':
      case ' ':
        if (selectedIndex >= 0 && selectedIndex < emojis.length) {
          onSelect(emojis[selectedIndex].emoji);
        }
        break;

      case 'Escape':
        setSelectedIndex(-1);
        break;
    }
  }, [selectedIndex, columns, rows, emojis, onSelect]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    // Reset selection when emojis list changes
    setSelectedIndex(-1);
  }, [emojis]);

  return {
    selectedIndex,
    setSelectedIndex
  };
};

export default useEmojiNavigation;
