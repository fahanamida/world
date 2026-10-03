import React from 'react';
import MediaImage from './MediaImage';

export default function ChatMemoryCard({ chat, index, onSelect }) {
  return (
    <div 
      className="group flex flex-col bg-white/80 border border-blush-200/80 rounded-3xl p-3 sm:p-4 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Card Image area */}
      <div className="relative rounded-2xl overflow-hidden bg-cream-50/70 border border-blush-100 flex items-center justify-center aspect-[4/5] sm:aspect-[3/4]">
        <MediaImage
          src={chat.image}
          alt={chat.caption || `Chat memory ${index + 1}`}
          placeholderType="chat"
          title={chat.caption || `Memory ${index + 1}`}
          date={chat.date}
          className="w-full h-full object-contain p-1 rounded-2xl"
          onClick={() => onSelect(chat, index)}
        />
      </div>

      {/* Card Info */}
      <div className="pt-3 px-1.5 flex flex-col flex-1 justify-between">
        {chat.date && (
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-burgundy-600 bg-blush-50 px-2 py-0.5 rounded-md border border-blush-100/60">
              {chat.date}
            </span>
          </div>
        )}
        
        {chat.caption && (
          <p className="font-serif italic text-xs sm:text-sm text-warm-700 leading-snug line-clamp-2 mt-1">
            "{chat.caption}"
          </p>
        )}
      </div>
    </div>
  );
}
