export type StickerColor =
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "purple";

export const colorsMap = ["yellow", "pink", "blue", "green", "purple"] as StickerColor[]
 
export const colorMap: Record<StickerColor, string> = {
  yellow: 'bg-amber-100',
  pink: 'bg-pink-100',
  blue: 'bg-sky-100',
  green: 'bg-emerald-100',
  purple: 'bg-purple-100'
};

export type EmojipickerProps = {
  isOpen: boolean;
  handleEmojiSelect: (emoji: string) => void
}

export type StickerEditorState = {
  content: string;
  emoji: string;
  color: StickerColor;
  showPicker: boolean;
};
