import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/diaries`)}
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
  );
};

export default BackButton;
