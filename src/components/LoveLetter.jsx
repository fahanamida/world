import React from 'react';
import { Heart } from 'lucide-react';

export default function LoveLetter({ data }) {
  const paragraphs = data.paragraphs || [
    "I don't know exactly where our story will take us, but I know I'm grateful for every little moment that brought us here.",
    "From a simple Snapchat connection to all the conversations, calls, memories, silly moments and even the difficult ones — somehow, you became one of the most special parts of my life.",
    "Thank you for being part of my story. And if I could choose again, I'd still choose all these little moments with you.",
    "Happy Boyfriend Day. ♡"
  ];

  return (
    <div className="bg-surface-light border-2 border-accent/30 rounded-2xl p-8 sm:p-14 shadow-paper text-left letter-reveal-active max-w-2xl mx-auto paper-card relative overflow-hidden">
      {/* Subtle top inner border highlight */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Letter Heading */}
      <div className="text-center mb-8 pb-4 border-b border-border-color">
        <h3 className="font-serif text-3xl sm:text-4xl font-light text-text-color tracking-tight">
          {data.heading || 'For You ♡'}
        </h3>
      </div>

      {/* Letter Body with gentle staggered entrance */}
      <div className="space-y-5 font-serif text-base sm:text-lg text-text-color font-light leading-relaxed max-w-xl mx-auto">
        {paragraphs.map((para, idx) => {
          if (para.includes('Happy Boyfriend Day')) {
            return (
              <p 
                key={idx} 
                className="font-serif italic text-lg sm:text-xl text-accent font-medium pt-2 text-center drop-shadow-[0_0_10px_rgba(228,91,131,0.3)]"
              >
                {para}
              </p>
            );
          }
          return (
            <p key={idx} className="text-text-soft">
              {para}
            </p>
          );
        })}

        {data.signOff && (
          <div className="pt-4 text-right font-serif italic text-base sm:text-lg text-accent-soft whitespace-pre-line">
            {data.signOff}
          </div>
        )}
      </div>

      {/* Subtle bottom detail */}
      <div className="mt-8 pt-4 border-t border-border-color flex justify-center items-center gap-1.5 text-xs font-serif text-text-soft">
        <Heart className="w-3.5 h-3.5 text-accent fill-primary drop-shadow-[0_0_6px_rgba(228,91,131,0.5)]" />
      </div>
    </div>
  );
}
