import React, { useState, useRef, useEffect } from 'react';
import { EMOJI_CATEGORIES } from '../constants/emojis';
import { EmojipickerProps, EmojiData } from '../types/sticker';
import HoverCard from '../components/ui/HoverCard';
import useEmojiNavigation from '../hooks/useEmojiNavigation';
import useClickOutside from '../hooks/useClickOutside';

const GRID_COLUMNS = 6;

const Emojipicker: React.FC<EmojipickerProps> = ({ isOpen, handleEmojiSelect, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(EMOJI_CATEGORIES)[0]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  useClickOutside(pickerRef, onClose);

  const filteredEmojis: EmojiData[] = searchTerm
    ? Object.values(EMOJI_CATEGORIES)
        .flat()
        .filter(emoji => 
          emoji.keywords.some(keyword => 
            keyword.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
    : EMOJI_CATEGORIES[activeCategory];

  const { selectedIndex, setSelectedIndex } = useEmojiNavigation({
    emojis: filteredEmojis,
    columns: GRID_COLUMNS,
    onSelect: (emoji) => {
      handleEmojiSelect(emoji);
      onClose();
    }
  });

  // Автофокус на поле поиска при открытии
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Сброс состояния при закрытии
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
      setSelectedIndex(-1);
      setActiveCategory(Object.keys(EMOJI_CATEGORIES)[0]);
    }
  }, [isOpen, setSelectedIndex]);

  if (!isOpen) return null;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(-1); // Сброс выделения при поиске
  };

  return (
    <div 
      ref={pickerRef}
      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg z-10 w-72 max-h-96 flex flex-col overflow-hidden"
      onMouseLeave={() => setSelectedIndex(-1)}
    >
      {/* Поиск */}
      <div className="p-2 border-b">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Поиск эмодзи..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-3 py-1.5 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Категории */}
      {!searchTerm && (
        <div className="flex overflow-x-auto border-b scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {Object.entries(EMOJI_CATEGORIES).map(([category, emojis]) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                flex-shrink-0 px-3 py-2 text-sm transition-colors
                ${activeCategory === category
                  ? 'text-cyan-600 border-b-2 border-cyan-500'
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              {emojis[0].emoji} {category}
            </button>
          ))}
        </div>
      )}

      {/* Сетка эмодзи */}
      <div className="p-2 overflow-y-auto grid grid-cols-6 gap-1 flex-1">
        {filteredEmojis.map(({ emoji, keywords }, index) => (
          <HoverCard
            key={emoji}
            content={
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg">{emoji}</span>
                <div className="flex flex-wrap gap-1 justify-center">
                  {keywords.map(keyword => (
                    <span
                      key={keyword}
                      className="px-1.5 py-0.5 bg-gray-800 rounded-full text-[10px]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            }
          >
            <button
              onClick={() => {
                handleEmojiSelect(emoji);
                onClose();
              }}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`
                aspect-square p-1.5 text-xl w-full
                hover:bg-gray-100 rounded
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-cyan-500
                active:scale-95
                ${selectedIndex === index ? 'bg-gray-100 ring-2 ring-cyan-500' : ''}
              `}
            >
              {emoji}
            </button>
          </HoverCard>
        ))}
        {filteredEmojis.length === 0 && (
          <div className="col-span-6 py-8 text-center text-gray-500">
            Эмодзи не найдены 😕
          </div>
        )}
      </div>

      {/* Подсказка */}
      {selectedIndex !== -1 && (
        <div className="px-2 py-1 border-t text-xs text-gray-500 text-center">
          Используйте стрелки для навигации и Enter для выбора
        </div>
      )}
    </div>
  );
};

export default Emojipicker;
