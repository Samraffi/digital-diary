import DiaryItem from './DiaryItem';
import { DiaryEntry } from '../../types/diary';

const DiaryList = ({ diaries }: { diaries: DiaryEntry[] }) => {
  const onItemClick = (id: string) => {
    // For now, just log the clicked diary id
    console.log('Diary item clicked:', id);
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
            onClick={() => onItemClick(diary.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
