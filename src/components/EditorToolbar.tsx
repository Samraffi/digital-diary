import { memo } from 'react';
import Emojipicker from './Emojipicker';
import { StickerColor, colorMap, colorsMap } from '../types/sticker';

const EditorToolbar = memo(({
  emoji,
  color,
  showPicker,
  onEmojiChange,
  onColorChange,
  onTogglePicker,
}: {
  emoji: string;
  color: StickerColor;
  showPicker: boolean;
  onEmojiChange: (emoji: string) => void;
  onColorChange: (color: StickerColor) => void;
  onTogglePicker: () => void;
}) => (
  <div className="flex items-center justify-between mb-6 p-3 bg-white/50 rounded-lg shadow-sm">
    <div className="relative">
      <button
        onClick={onTogglePicker}
        aria-label="Select emoji"
        aria-haspopup="true"
        aria-expanded={showPicker}
      >
        <span className="text-2xl">{emoji}</span>
        <span aria-hidden="true">▼</span>
      </button>
      
      <Emojipicker
        isOpen={showPicker}
        handleEmojiSelect={onEmojiChange}
      />
    </div>
    
    <div className="flex gap-2">
      {colorsMap.map((colorOption) => (
        <button
          key={colorOption}
          onClick={() => onColorChange(colorOption)}
          className={`w-8 h-8 rounded-full ${colorMap[colorOption]} ${
            color === colorOption ? 'ring-2 ring-offset-2 ring-gray-500' : ''
          } shadow-sm`}
          aria-label={`Select ${colorOption} color`}
        />
      ))}
    </div>
  </div>
));

export default EditorToolbar;