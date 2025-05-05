import { Suspense, useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import LoadingDiarySkeleton from '../components/Skeletons/LoadingDiarySkeleton';
import DiaryView from '../components/DiaryView';
import DeleteDiary from '../components/DeleteDiary';
import useDiaryEntry from '../hooks/useDiaryEntry';
import useDeleteDiary from '../hooks/useDeleteDiary';
import { getBackgroundColor } from '../utils/getBackgroundColor';

const DiaryViewPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  const { diaryId } = useParams<{ diaryId: string }>();
  const { diary, loading, error } = useDiaryEntry();

  if (error) {
    throw error;
  }

  const handleConfirmDelete = useDeleteDiary(diaryId, navigate);
  const showModal = useCallback(() => setShowDeleteModal(true), []);
  const hideModal = useCallback(() => setShowDeleteModal(false), []);

  return (
    <div className="min-h-screen p-4 wood-texture">
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
        Back
      </button>

      {/* Diary content as a large sticky note */}
      <div className="flex justify-center items-start">
        <div
          className={`
            ${getBackgroundColor(diary?.stickerColor ?? null)} 
            max-w-2xl w-full
            rounded-sm
            shadow-lg
            p-8
            relative
          `}
        >
          {loading && <LoadingDiarySkeleton />}
          <Suspense fallback={<LoadingDiarySkeleton />}>
            {!loading && <DiaryView diary={diary} diaryId={diaryId} redirect={navigate} showModal={showModal} />}
          </Suspense>
        </div>
      </div>

      {/* Delete confirmation modal */}
      <DeleteDiary
        isOpen={showDeleteModal}
        onConfirm={handleConfirmDelete}
        onCancel={hideModal}
      />
    </div >
  );
};

export default DiaryViewPage;
