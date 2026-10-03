import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function OpeningScreen({ data, topLabel, onOpen }) {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 text-center relative overflow-hidden bg-background">
      {/* Soft romantic pink background glow spots */}
      <div className="absolute w-[360px] sm:w-[540px] h-[360px] sm:h-[540px] rounded-full bg-accent/15 blur-[120px] pointer-events-none -z-10 animate-slow-glow top-1/4 left-1/3" />
      <div className="absolute w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full bg-primary/25 blur-[140px] pointer-events-none -z-10 animate-slow-glow bottom-1/4 right-1/4" style={{ animationDelay: '-8s' }} />

      {/* Tiny subtle floating dark-pink particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute w-2 h-2 rounded-full bg-accent/30 blur-[1px] top-3/4 left-1/5 animate-particle-float" style={{ animationDuration: '14s', animationDelay: '0s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-secondary/35 blur-[1px] top-2/3 right-1/4 animate-particle-float" style={{ animationDuration: '16s', animationDelay: '4s' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-accent-soft/25 blur-[1px] top-1/2 left-3/4 animate-particle-float" style={{ animationDuration: '18s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-lg mx-auto flex flex-col items-center z-10">
        
        {/* Top Boyfriend Day Label */}
        {topLabel && (
          <div 
            className="mb-4 opacity-0"
            style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards' }}
          >
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-accent font-medium">
              {topLabel}
            </span>
          </div>
        )}

        {/* Small text (fades in) */}
        <span 
          className="font-serif italic text-sm text-accent-soft tracking-wide mb-3 opacity-0"
          style={{ animation: 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards' }}
        >
          {data.tagline || 'a little place for us ♡'}
        </span>

        {/* Main heading (smoothly reveals) */}
        <h1 
          className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-text-color mb-4 leading-tight opacity-0"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards' }}
        >
          {data.title || 'Our Little Story'}
        </h1>

        {/* Subtitle */}
        {data.subtitle && (
          <p 
            className="font-sans text-xs sm:text-sm text-text-soft font-light max-w-sm mb-8 leading-relaxed opacity-0"
            style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards' }}
          >
            {data.subtitle}
          </p>
        )}

        {/* Action Button (with soft pink glow) */}
        <button
          onClick={onOpen}
          className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-text-color font-sans text-xs tracking-widest uppercase font-medium shadow-glow-pink hover:shadow-glow-soft hover:scale-[1.03] active:scale-95 transition-all duration-300 opacity-0 border border-accent/30"
          style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards' }}
        >
          <span>{data.buttonText || 'Open Our Memories'}</span>
          <ArrowDown className="w-3.5 h-3.5 text-accent-soft group-hover:translate-y-0.5 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
}
