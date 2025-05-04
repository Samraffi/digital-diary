export type StickerColor =
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "purple";

export const colorMap: Record<StickerColor, string> = {
  yellow: 'bg-amber-100',
  pink: 'bg-pink-100',
  blue: 'bg-sky-100',
  green: 'bg-emerald-100',
  purple: 'bg-purple-100'
};

