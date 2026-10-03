import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Heart } from 'lucide-react';

export default function LoveExpression({ data }) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center relative overflow-hidden">
      {/* Subtle radial pink glow behind section */}
      <div className="absolute inset-0 max-w-md mx-auto bg-accent/15 blur-3xl pointer-events-none -z-10 rounded-full" />

      <ScrollReveal animation="fade-up">
        <div className="bg-surface border border-border-color rounded-2xl p-8 sm:p-12 shadow-soft hover:border-accent/40 transition-colors duration-500 relative">
          
          {/* Section label */}
          {data.sectionLabel && (
            <div className="mb-2">
              <span className="text-[11px] font-mono tracking-widest text-accent font-medium">
                {data.sectionLabel}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-color mb-4 leading-tight">
            {data.heading || 'Something I Never Expected…'}
          </h2>

          {/* Single glowing Heart decoration */}
          <div className="flex justify-center my-4">
            <Heart className="w-4 h-4 text-accent fill-primary stroke-accent drop-shadow-[0_0_8px_rgba(228,91,131,0.5)]" />
          </div>
          
          <div className="max-w-xl mx-auto space-y-3 font-sans text-sm sm:text-base text-text-soft font-light leading-relaxed">
            <p className="text-text-color">
              {data.story}
            </p>
            {data.note && (
              <p className="font-serif italic text-base sm:text-lg text-accent-soft pt-2 font-normal">
                {data.note}
              </p>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
