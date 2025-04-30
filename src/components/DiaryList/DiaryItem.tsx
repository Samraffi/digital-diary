import { DiaryItemProps } from '../../types/diary';
import { COLORMAP } from '../../constants/api';

const DiaryItem = ({ diary }: DiaryItemProps) => {
  const bgColorClass = COLORMAP[diary.stickerColor] || 'bg-amber-100';

  return (
    <div 
      className={`
        ${bgColorClass} 
        p-5 m-4 
        w-56 h-56 
        rounded-sm 
        shadow-md 
        cursor-pointer 
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        relative
        overflow-hidden
        sticky-note-enter
      `}
      onClick={() => {}}
    >
      {/* Date in handwritten style */}
      <div className="text-right font-handwriting text-xs text-gray-600 mb-2">
        {new Date(diary.createdAt).toLocaleDateString()}
      </div>
      
      {/* Emoji in corner */}
      <div className="absolute top-2 left-2 text-2xl">
        {diary.emoji}
      </div>

      {/* Content with paper-like styling */}
      <div className="mt-6">
        <p className="text-gray-800 font-handwriting line-clamp-5 text-sm">
          {diary.content || 'Здесь будет ваша запись...'}
        </p>
      </div>
      
      {/* Shadow gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-100/20 to-transparent"></div>
    </div>
  );
};

export default DiaryItem;
