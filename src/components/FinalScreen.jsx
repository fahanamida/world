import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function FinalScreen({ data }) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-2xl mx-auto text-center relative overflow-hidden bg-background">
      {/* Soft pink center glow */}
      <div className="absolute inset-0 max-w-sm mx-auto bg-accent/15 blur-[100px] pointer-events-none -z-10 rounded-full animate-slow-glow" />

      {/* 3-4 subtle slow floating hearts/particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute w-2 h-2 rounded-full bg-accent/30 blur-[1px] bottom-6 left-1/4 animate-particle-float" style={{ animationDuration: '14s' }} />
        <div className="absolute w-2 h-2 rounded-full bg-secondary/35 blur-[1px] bottom-12 right-1/4 animate-particle-float" style={{ animationDuration: '17s', animationDelay: '3s' }} />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-soft/30 blur-[1px] bottom-20 left-1/2 animate-particle-float" style={{ animationDuration: '15s', animationDelay: '6s' }} />
      </div>

      <ScrollReveal animation="fade-up">
        {/* Large Text */}
        <h2 className="font-serif text-3xl sm:text-5xl font-light text-text-color mb-3 tracking-tight">
          {data.largeText || 'Happy Boyfriend Day ❤️'}
        </h2>

        {/* Small Text */}
        <p className="font-serif italic text-base sm:text-xl text-accent font-light mb-4">
          {data.smallText || 'Our story is still being written…'}
        </p>

        {/* Closing Line */}
        {data.closingLine && (
          <p className="font-sans text-xs sm:text-sm text-text-soft font-light mb-8">
            {data.closingLine}
          </p>
        )}

        {/* Special Boyfriend Day Signature Detail */}
        {data.signature && (
          <div className="pt-6 border-t border-border-color/60 max-w-xs mx-auto">
            <span className="text-xs font-serif italic text-text-soft/80 tracking-wider block">
              {data.signature}
            </span>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
