import React from 'react';mbLightbox
import ScrollReveal from './ScrollReveal';
import { Sparkles } from 'lucide-react';

export default function MemoryStats({ data }) {
  const cards = data.cards || [
    { value: "∞", label: "Memories", note: "And still counting…" },
    { value: "100+", label: "Conversations", note: "So many things to talk about." },
    { value: "♡", label: "Favorite Person", note: "You already know who." }
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto">
      <ScrollReveal animation="fade-up">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100/70 text-burgundy-700 text-xs font-sans font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Little Milestones</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-warm-900 mb-2 tracking-tight">
            {data.title || 'A Few Little Numbers'}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-600 font-light">
            {data.subtitle || 'Small reminders of how far we’ve come.'}
          </p>
        </div>

        {/* Exactly Three Cards: 3 in row on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <div className="group relative bg-white/80 border border-blush-200/80 rounded-3xl p-8 sm:p-10 text-center shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px]">
                
                {/* Subtle top decorative accent */}
                <div className="w-8 h-1 rounded-full bg-blush-200 mb-6 group-hover:w-12 group-hover:bg-burgundy-400 transition-all duration-300" />

                {/* Big Stat Value */}
                <div className="font-serif text-5xl sm:text-6xl font-light text-burgundy-700 mb-3 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {card.value}
                </div>

                {/* Stat Label */}
                <h3 className="font-serif text-xl font-medium text-warm-900 mb-1">
                  {card.label}
                </h3>

                {/* Stat Note */}
                <p className="font-sans text-xs sm:text-sm text-warm-500 font-light italic">
                  {card.note}
                </p>

                {/* Glow ring */}
                <div className="absolute inset-0 rounded-3xl border border-burgundy-500/0 group-hover:border-burgundy-500/20 pointer-events-none transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
