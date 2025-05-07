export type StickerColor =
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "purple";

export const colorsMap = ["yellow", "pink", "blue", "green", "purple"] as StickerColor[]
 
export const colorMap: Record<StickerColor, string> = {
  yellow: 'sticker-yellow',
  pink: 'sticker-pink',
  blue: 'sticker-blue',
  green: 'sticker-green',
  purple: 'sticker-purple'
};

export type EmojipickerProps = {
  isOpen: boolean;
  handleEmojiSelect: (emoji: string) => void
}

export type StickerEditorState = {
  diaryId: string;
  content: string;
  emoji: string;
  color: StickerColor;
  showPicker: boolean;
};
