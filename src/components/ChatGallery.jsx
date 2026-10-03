import React from 'react';
import ScrollReveal from './ScrollReveal';
import ChatMemoryCard from './ChatMemoryCard';
import { MessageCircleHeart } from 'lucide-react';

export default function ChatGallery({ data, onOpenLightbox }) {
  const handleCardClick = (chat, index) => {
    onOpenLightbox({
      ...chat,
      index,
      gallery: data.chats,
    });
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
      <ScrollReveal animation="fade-up">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100/70 text-burgundy-700 text-xs font-sans font-medium mb-3">
            <MessageCircleHeart className="w-3.5 h-3.5" />
            <span>Saved Conversations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-warm-900 mb-3 tracking-tight">
            {data.title || 'Chats I Could Never Delete 💬'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-warm-600 font-light">
            {data.subtitle || 'Little pieces of conversations that became memories.'}
          </p>
        </div>

        {/* Responsive Grid: 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.chats && data.chats.map((chat, idx) => (
            <ScrollReveal key={chat.id || idx} animation="fade-up" delay={idx * 80}>
              <ChatMemoryCard
                chat={chat}
                index={idx}
                onSelect={handleCardClick}
              />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
