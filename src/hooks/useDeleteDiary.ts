import { deleteDiary } from '../services/diary/deleteDiary';
import { UseDeleteDiary } from '../types/diary';

const useDeleteDiary: UseDeleteDiary = (diaryId, navigate) => {
  const handleDelete = async (): Promise<void> => {
    if (!diaryId) return;

    try {
      await deleteDiary(diaryId);
      navigate('/diaries');
    } catch (err) {
      console.error('Error deleting diary:', err);
    }
  };

  return handleDelete;
};

export default useDeleteDiary;
