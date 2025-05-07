import { COMMON_EMOJIS } from '../constants/emojis';
import { EmojipickerProps } from '../types/sticker';

const Emojipicker = ({ isOpen, handleEmojiSelect }: EmojipickerProps) => {
  if (!isOpen) return false;

  return (
    <div className="absolute top-full left-0 mt-2 p-2 bg-white rounded-lg shadow-lg z-10 w-64 flex flex-wrap">
      {COMMON_EMOJIS.map(emoji => (
        <button key={emoji} onClick={() => handleEmojiSelect(emoji)}
          className="p-2 text-xl hover:bg-gray-100 rounded"
        >
          {emoji}
        </button>
      ))}
    </div>
  )
};

export default Emojipicker;
