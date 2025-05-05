import { colorMap } from '../types/sticker';

export const getBackgroundColor = (color: keyof typeof colorMap) => colorMap[color] || 'bg-amber-100';
