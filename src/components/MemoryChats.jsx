import React from 'react';
import ScrollReveal from './ScrollReveal';
import MediaImage from './MediaImage';

export default function MemoryChats({ data, onOpenLightbox }) {
  const chats = (data.chats || [
  {
    id: "fav-1",
    src: "/memories/favs/fg1.jpg",
    date: "19 February",
  },
  {
    id: "fav-2",
    src: "/memories/favs/fg2.jpg",
    date: "9 September",
  },
  {
    id: "fav-3",
    src: "/memories/favs/fg3.jpg",
    date: "25 March",
  },
  {
    id: "fav-4",
    src: "/memories/favs/fg4.jpg",
    date: "28 February",
  },
]).map((chat, idx) => ({
  ...chat,
  date: chat.date || [
    "19 February",
    "9 September",
    "25 March",
    "28 February",
  ][idx],
}));

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto text-center relative">
      <ScrollReveal animation="fade-up">

        {/* Section label */}
        {data.sectionLabel && (
          <div className="mb-2">
            <span className="text-[11px] font-mono tracking-widest text-accent font-medium">
              {data.sectionLabel}
            </span>
          </div>
        )}

        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-color mb-8 leading-tight">
          {data.heading || 'Our Memories'}
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {chats.map((chat, idx) => (
            <ScrollReveal key={chat.id || idx} delay={idx * 60}>
              <div className="bg-surface border border-border-color rounded-2xl p-2.5 shadow-soft hover:shadow-glow-pink hover:border-accent/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-400 group">

                <div className="rounded-xl overflow-hidden bg-surface-subtle aspect-[3/4] flex items-center justify-center">

                  <MediaImage
                    src={chat.src}
                    alt={`Memory screenshot ${idx + 1}`}
                    placeholderType="chat"
                    title={`Chat Memory ${idx + 1}`}
                    className="w-full h-full object-contain p-1 cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                    onClick={() =>
                      onOpenLightbox({
                        image: chat.src,
                        title: 'Our Memories',
                        date: chat.date,
                      })
                    }
                  />

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </ScrollReveal>
    </section>
  );
}