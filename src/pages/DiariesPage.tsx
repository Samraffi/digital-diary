import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import DiaryList from '../components/DiaryList';
import { DiaryEntry } from '../types/diary';
import { getDiaries } from '../services/diary/getDiaries';
import { useTheme } from '../hooks/useTheme';

const DiariesPage = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const { isDarkMode, toggleTheme } = useTheme();
  let navigate = useNavigate();

  // Load diaries when component mounts
  useEffect(() => {
    const loadDiaries = async () => {
      const data = await getDiaries();
      if (data) setDiaries(data);
    };
    loadDiaries();
  }, []);

  const searchQuery = '';

  return (
    <div className="min-h-screen">
      {/* Header with search and theme toggle */}
      <div className="sticky top-0 z-10 p-4 shadow-sm backdrop-blur-sm bg-opacity-90 flex items-center justify-between">
        <h1 className="text-2xl font-handwriting">My Diary</h1>
        
        {/* Search bar */}
        <div className="relative max-w-md w-full mx-4">
          <input
            type="text"
            placeholder="Find entry..."
            value={searchQuery}
            onChange={(e) => (e.target.value)}
            className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-2.5">🔍</span>
        </div>
        
        {/* Theme toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Main content */}
      <DiaryList diaries={diaries} />
      
      {/* Floating add button */}
      <button
        onClick={() => navigate('/diaries/add')}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-3xl"
      >
        +
      </button>
    </div>
  );
};

export default DiariesPage;
