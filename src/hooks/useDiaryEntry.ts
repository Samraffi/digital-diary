import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DiaryEntry } from '../types/diary';
import { getDiary } from '../services/diary/getDiary';

const useDiaryEntry = () => {
  const [diary, setDiary] = useState<DiaryEntry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const { diaryId } = useParams<{ diaryId: string }>();

  useEffect(() => {
    const loadDiary = async () => {
      if (!diaryId) return;

      const data = await getDiary(diaryId);
      if (data) {
        setDiary(data);
        setLoading(false);
      }
    };
    loadDiary();
  }, [diaryId]);


  return { diary, loading, error };
};

export default useDiaryEntry;
