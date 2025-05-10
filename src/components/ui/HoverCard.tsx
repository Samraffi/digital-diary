import React from 'react';

interface HoverCardProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ content, children, className = '' }) => {
  return (
    <div className="relative group">
      {children}
      <div
        className={`
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1
          text-xs text-white bg-gray-900 rounded shadow-lg
          opacity-0 group-hover:opacity-100
          scale-95 group-hover:scale-100
          pointer-events-none
          transition-all duration-200
          whitespace-nowrap
          z-50
          ${className}
        `}
      >
        {/* Стрелка */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 
                      border-4 border-transparent border-t-gray-900" />
        {content}
      </div>
    </div>
  );
};

export default HoverCard;
