import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import LoveLetter from './LoveLetter';
import { Heart } from 'lucide-react';

export default function FinalCard({ data, letterData }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-3xl mx-auto text-center relative">
      <ScrollReveal animation="fade-up">
        {!isOpen ? (
          /* Centered Premium Dark-Pink Keepsake Card with soft pink glow */
          <div className="relative max-w-lg mx-auto group">
            {/* Soft pink pulsing glow behind card */}
            <div className="absolute inset-0 bg-accent/25 blur-3xl rounded-3xl -z-10 animate-pulse" />

            <div className="bg-surface border border-border-color rounded-2xl p-8 sm:p-12 shadow-soft-lg hover:border-accent/50 hover:shadow-glow-pink transition-all duration-500 flex flex-col items-center">
              {/* Heart Icon */}
              <div className="w-12 h-12 rounded-full bg-surface-light border border-border-color flex items-center justify-center text-accent mb-5 group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 fill-primary stroke-accent drop-shadow-[0_0_8px_rgba(228,91,131,0.5)]" />
              </div>

              {/* Main Text */}
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-text-color mb-6 tracking-tight">
                {data.text || 'This Is For You ♡'}
              </h2>

              {/* Button: Open It */}
              <button
                onClick={() => setIsOpen(true)}
                className="group/btn inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-text-color font-sans text-xs uppercase tracking-widest font-medium shadow-glow-pink hover:shadow-glow-soft hover:scale-[1.04] active:scale-95 transition-all duration-300 border border-accent/40"
              >
                <span>{data.buttonText || 'Open It'}</span>
                <Heart className="w-3.5 h-3.5 fill-accent stroke-none group-hover/btn:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        ) : (
          /* Love Letter Revealed */
          <LoveLetter data={letterData} />
        )}
      </ScrollReveal>
    </section>
  );
}
