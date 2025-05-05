import { colorMap } from '../types/sticker';

export const getBackgroundColor = (color: keyof typeof colorMap | null) => {
  if (!color) {
    return 'bg-amber-100';
  }

  return colorMap[color] || 'bg-amber-100';
};
