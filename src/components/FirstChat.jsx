import React from 'react';
import ScrollReveal from './ScrollReveal';
import MediaImage from './MediaImage';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function FirstChat({ data, onOpenLightbox }) {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <ScrollReveal animation="fade-up">
        {/* Section Header */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100/70 text-burgundy-700 text-xs font-sans font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>First Words</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-warm-900 mb-3 tracking-tight">
            {data.title || 'Our First Chat 💬'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-warm-600 font-light">
            {data.subtitle || 'Where our conversations actually began.'}
          </p>
        </div>

        {/* Centered Phone / Chat Frame */}
        <div className="relative max-w-sm sm:max-w-md mx-auto">
          {/* Subtle glow behind frame */}
          <div className="absolute inset-0 bg-blush-200/30 blur-2xl rounded-3xl -z-10" />

          {/* Elegant Phone Mockup Container */}
          <div className="bg-white/90 border border-blush-200/90 rounded-[2.5rem] p-3 sm:p-4 shadow-soft-lg hover:shadow-soft-xl transition-shadow duration-500">
            {/* Phone notch / header bar */}
            <div className="w-full flex items-center justify-between px-4 py-2 border-b border-blush-100/80 mb-2">
              <span className="text-[10px] font-sans font-semibold text-warm-400">9:41</span>
              <div className="w-16 h-4 bg-warm-200/50 rounded-full" />
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-400" />
                <span className="w-1.5 h-1.5 rounded-full bg-warm-400" />
              </div>
            </div>

            {/* Chat Image Frame */}
            <div className="rounded-2xl overflow-hidden bg-cream-50 border border-blush-100/80">
              <MediaImage
                src={data.image || '/memories/chats/first-chat.jpg'}
                alt={data.title || 'Our First Chat'}
                placeholderType="chat"
                title="First Chat"
                date={data.date}
                className="w-full h-auto max-h-[480px] object-contain rounded-2xl cursor-pointer"
                onClick={() => onOpenLightbox({
                  image: data.image || '/memories/chats/first-chat.jpg',
                  title: data.title || 'Our First Chat',
                  date: data.date,
                  caption: data.caption,
                })}
              />
            </div>

            {/* Date Tag */}
            {data.date && (
              <div className="mt-3 text-center">
                <span className="text-[11px] font-sans uppercase tracking-widest text-burgundy-600 font-medium bg-blush-50 px-3 py-1 rounded-full border border-blush-100">
                  {data.date}
                </span>
              </div>
            )}
          </div>

          {/* Short caption underneath */}
          <div className="mt-6 text-center max-w-sm mx-auto">
            <p className="font-serif italic text-base sm:text-lg text-warm-800">
              "{data.caption || 'The first conversation that started everything.'}"
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
