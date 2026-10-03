import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Heart } from 'lucide-react';

export default function FirstChatStory({ data }) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center relative">
      <ScrollReveal animation="fade-up">
        <div className="bg-surface border border-border-color rounded-2xl p-8 sm:p-12 shadow-soft relative">
          
          {/* Section label */}
          {data.sectionLabel && (
            <div className="mb-3">
              <span className="text-[11px] font-mono tracking-widest text-accent font-medium">
                {data.sectionLabel}
              </span>
            </div>
          )}

          {/* Tiny decorative heart */}
          <div className="flex justify-center mb-3">
            <Heart className="w-3.5 h-3.5 text-accent fill-primary stroke-none" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-color mb-6 leading-tight">
            {data.heading || 'Our First Chat'}
          </h2>
          
          <div className="max-w-xl mx-auto space-y-4 font-sans text-sm sm:text-base text-text-color font-light leading-relaxed">
            <p className="font-serif italic text-base sm:text-lg text-accent-soft leading-relaxed">
              "{data.story}"
            </p>
            {data.reflection && (
              <p className="text-text-soft text-xs sm:text-sm pt-2">
                {data.reflection}
              </p>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
