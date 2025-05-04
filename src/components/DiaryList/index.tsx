import DiaryItem from './DiaryItem';
import { DiaryEntry } from '../../types/diary';
import { useNavigate } from 'react-router';

const DiaryList = ({ diaries }: { diaries: DiaryEntry[] }) => {
  const navigate = useNavigate();
  const handleGoToDiary = (id: string) => {
    // console.log('Diary item clicked:', id);
    navigate(`/diaries/${id}`);
  }

  return (
    <div 
      className="min-h-[calc(100vh-64px)] overflow-y-auto p-4 wood-texture"
    >
      <div className="flex flex-wrap justify-center">
        {diaries.map((diary: DiaryEntry) => (
          <DiaryItem
            key={diary.id}
            diary={diary}
            handleGoToDiary={handleGoToDiary}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
