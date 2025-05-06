import { useState } from 'react';
import { useNavigate } from 'react-router';
import { colorMap, colorsMap, StickerColor } from '../types/sticker';
import { getBackgroundColor } from '../utils/getBackgroundColor';
import { COMMON_EMOJIS } from '../constants/emojis';
import { createDiary } from '../services/diary/createDiary';
import BackButton from '../components/BackButton';

const DiaryCreatePage = () => {
  const navigate = useNavigate();
  const [createdContent, setCreatedContent] = useState('');
  const [createdEmoji, setCreatedEmoji] = useState('☀️');
  const [createdColor, setCreatedColor] = useState<StickerColor>('yellow');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSave = () => {
    createDiary({
      content: createdContent,
      emoji: createdEmoji,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      stickerColor: createdColor
    });
    navigate(`/diaries`);
  }

  const handleEmojiSelect = (emoji: string) => {
    setCreatedEmoji(emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="min-h-screen p-4 wood-texture">
      <BackButton />

      {/* Create form as a large sticky note */}
      <div className="flex justify-center items-start">
        <div 
          className={`
            ${getBackgroundColor(createdColor)} 
            max-w-2xl w-full 
            rounded-sm 
            shadow-lg 
            p-8 
            relative
          `}
        >
          {/* Toolbar styled as office supplies */}
          <div className="flex items-center justify-between mb-6 p-3 bg-white/50 rounded-lg shadow-sm">
            {/* Emoji picker */}
            <div className="relative">
              <button 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="flex items-center gap-1 px-3 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
              >
                <span className="text-2xl">{createdEmoji}</span>
                <span>▼</span>
              </button>
              
              {showEmojiPicker && (
                <div className="absolute top-full left-0 mt-2 p-2 bg-white rounded-lg shadow-lg z-10 w-64 flex flex-wrap">
                  {COMMON_EMOJIS.map(emoji => (
                    <button
                      key={emoji}
                      onClick={() => handleEmojiSelect(emoji)}
                      className="p-2 text-xl hover:bg-gray-100 rounded"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Color picker */}
            <div className="flex gap-2">
              {colorsMap.map(color => (
                <button
                  key={color}
                  onClick={() => setCreatedColor(color)}
                  className={`
                    w-8 h-8 rounded-full 
                    ${colorMap[color]} 
                    ${createdColor === color ? 'ring-2 ring-offset-2 ring-gray-500' : ''}
                    shadow-sm
                  `}
                />
              ))}
            </div>
            
            {/* Save/Cancel buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-1"
              >
                <span>📌</span> Save
              </button>
              <button
                onClick={() => navigate(`/diaries`)}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-1"
              >
                <span>❌</span> Cancel
              </button>
            </div>
          </div>

          <textarea
            value={createdContent}
            onChange={(e) => setCreatedContent(e.target.value)}
            className="w-full h-[calc(100vh-300px)] resize-none px-4 pb-4 bg-transparent border-0 focus:outline-none font-handwriting text-lg"
            placeholder="Start writing..."
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryCreatePage;
