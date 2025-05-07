import { useCallback, memo } from 'react';
import { useNavigate } from 'react-router';
import { getBackgroundColor } from '../utils/getBackgroundColor';
import { StickerColor } from '../types/sticker';
import { createDiary } from '../services/diary/createDiary';
import EditorToolbar from '../components/EditorToolbar';
import BackButton from '../components/BackButton';
import { useStickerEditor } from '../hooks/useStickerEditor';

const DiaryCreatePage = () => {
  const navigate = useNavigate();
  const { state: { content, emoji, color, showPicker }, updateState } = useStickerEditor();

  const handleCreate = useCallback(async () => {
    try {
      await createDiary({
        content,
        emoji,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        stickerColor: color,
      });
      navigate('/diaries');
    } catch (error) {
      console.error('Failed to create diary:', error);
    }
  }, [content, emoji, color, navigate]);

  const handleEmojiSelect = useCallback(
    (selected: string) => updateState({ emoji: selected, showPicker: false }),
    [updateState]
  );

  const handleColorSelect = useCallback(
    (selected: StickerColor) => updateState({ color: selected }),
    [updateState]
  );

  const togglePicker = useCallback(
    () => updateState({ showPicker: !showPicker }),
    [showPicker, updateState]
  );

  return (
    <div className="min-h-screen p-4 wood-texture">
      <BackButton />

      <div className="flex justify-center items-start">
        <div className={`${getBackgroundColor(color)} max-w-2xl w-full rounded-sm shadow-lg p-8 relative`}>
          <EditorToolbar
            emoji={emoji}
            color={color}
            showPicker={showPicker}
            onEmojiChange={handleEmojiSelect}
            onColorChange={handleColorSelect}
            onTogglePicker={togglePicker}
          />

          <textarea
            value={content}
            onChange={(e) => updateState({ content: e.target.value })}
            className="w-full h-[calc(100vh-300px)] resize-none px-4 pb-4 bg-transparent border-0 focus:outline-none font-handwriting text-lg"
            placeholder="Start writing..."
            aria-label="Diary content"
          />

          <div className="flex gap-2 justify-end mt-4">
            <button
              onClick={handleCreate}
              className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-1"
            >
              <span>📌</span> Create
            </button>
            <button
              onClick={() => navigate(`/diaries`)}
              className="px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 flex items-center gap-1"
            >
              <span>❌</span> Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DiaryCreatePage);