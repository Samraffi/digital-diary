import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import DeleteDiary from '../components/DeleteDiary';
import { DiaryEntry } from '../types/diary';
import { colorMap } from '../types/sticker';
import { getDiary } from '../services/diary/getDiary';
import { deleteDiary } from '../services/diary/deleteDiary';

import 'react-loading-skeleton/dist/skeleton.css';


const DiaryViewPage = () => {
  const [diary, setDiary] = useState<DiaryEntry | null>(null);
  const { diaryId } = useParams<{ diaryId: string }>();

  // Load diary when component mounts
  useEffect(() => {
    const loadDiary = async () => {
      if (!diaryId) return;

      const data = await getDiary(diaryId);
      if (data) setDiary(data);
    };
    loadDiary();
  }, [diaryId]);

  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleConfirmDelete = () => {
    if (diaryId) {
      deleteDiary(diaryId);
      navigate('/diaries');
    }
  };

  const bgColorClass = diary ? colorMap[diary.stickerColor] : 'bg-amber-100';

  console.log('DiaryViewPage rendered', diaryId, diary);
  return (
    <div className="min-h-screen p-4 wood-texture">
      {/* Back button */}
      <button
        onClick={() => navigate('/diaries')}
        className="mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Назад
      </button>

      {/* Diary content as a large sticky note */}
      <div className="flex justify-center items-start">
        <div
          className={`
            ${bgColorClass} 
            max-w-2xl w-full 
            rounded-sm 
            shadow-lg 
            p-8 
            relative
          `}
        >
          {diary ?
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
              <div className="absolute bottom-4 right-4 flex gap-4">
                <button
                  onClick={() => navigate(`/diaries/${diaryId}/edit`)}
                  className="flex items-center gap-1 px-4 py-2 bg-white/70 rounded-full shadow-sm hover:bg-white transition-colors"
                >
                  <span>✏️</span> Редактировать
                </button>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="flex items-center gap-1 px-4 py-2 bg-white/70 rounded-full shadow-sm hover:bg-white transition-colors"
                >
                  <span>🗑️</span> Удалить
                </button>
              </div>
            </>
            : (
              <>
                <Skeleton height={20} width="60%" className="mb-4" />
                <Skeleton circle width={50} height={50} className="mb-4" />
                <Skeleton count={5} />
                <div className="absolute bottom-4 right-4 flex gap-4">
                  <Skeleton width={100} height={36} />
                  <Skeleton width={100} height={36} />
                </div>
              </>
            )
          }
        </div>
      </div>

      {/* Delete confirmation modal */}
      <DeleteDiary
        isOpen={showDeleteModal}
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div >
  );
};

export default DiaryViewPage;
