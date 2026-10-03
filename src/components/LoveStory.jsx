import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Heart, Sparkles } from 'lucide-react';

export default function LoveStory({ data }) {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-3xl mx-auto text-center">
      {/* Subtle background glow */}
      <div className="absolute inset-0 max-w-lg mx-auto bg-gradient-to-b from-blush-200/30 via-cream-200/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <ScrollReveal animation="fade-up">
        <div className="relative bg-cream-50/90 border border-blush-200/80 rounded-3xl p-8 sm:p-12 md:p-16 shadow-soft text-center overflow-hidden">
          
          {/* Subtle watermark / icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center text-burgundy-600 shadow-soft-sm">
              <Heart className="w-5 h-5 fill-blush-300 stroke-burgundy-600" />
            </div>
          </div>

          <span className="inline-block text-xs uppercase tracking-widest text-burgundy-600 font-sans font-semibold mb-3">
            {data.badge || 'The Turning Point'}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-warm-900 mb-4 tracking-tight leading-tight">
            {data.title || 'Something I Never Expected…'}
          </h2>

          <p className="font-serif italic text-base sm:text-lg text-burgundy-700/80 mb-8 max-w-md mx-auto">
            {data.subtitle || 'When friendship slowly became something more.'}
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center gap-3 my-6 max-w-xs mx-auto justify-center opacity-60">
            <div className="h-px bg-burgundy-300 flex-1" />
            <Sparkles className="w-3.5 h-3.5 text-burgundy-400" />
            <div className="h-px bg-burgundy-300 flex-1" />
          </div>

          {/* Story Paragraphs */}
          <div className="space-y-6 font-sans text-base sm:text-lg text-warm-700 font-light leading-relaxed max-w-xl mx-auto">
            {Array.isArray(data.story) ? (
              data.story.map((para, i) => (
                <p 
                  key={i} 
                  className={i === data.story.length - 1 ? 'font-serif italic text-xl sm:text-2xl text-burgundy-900 pt-2 font-medium' : ''}
                >
                  {para}
                </p>
              ))
            ) : (
              <p>{data.story}</p>
            )}
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
