import { DiaryViewProps } from '../types/diary';

const DiaryView = ({ diary, diaryId, redirect, showModal }: DiaryViewProps) => {
  return (
    <>
      {/* Date in handwritten style */}
      <div className="text-right font-handwriting text-sm text-gray-600 mb-4">
        {new Date(diary.createdAt).toLocaleDateString()}
      </div>

      {/* Emoji in corner */}
      <div className="absolute top-4 left-4 text-4xl">
        {diary.emoji}
      </div>

      {/* Content with paper-like styling */}
      <div className="mt-12 mb-16">
        <p className="text-gray-800 font-handwriting text-lg whitespace-pre-wrap">
          {diary.content}
        </p>
      </div>

      {/* Action buttons styled as office supplies */}
      <div className="flex justify-end gap-4">
        <button
          onClick={() => redirect(`/diaries/${diaryId}/edit`)}
          className="flex items-center gap-1 px-4 py-2 bg-white/70 rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <span>✏️</span> Редактировать
        </button>
        <button
          onClick={showModal}
          className="flex items-center gap-1 px-4 py-2 bg-white/70 rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <span>🗑️</span> Удалить
        </button>
      </div>
    </>
  );
};

export default DiaryView;
