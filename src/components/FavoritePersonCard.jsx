import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import LoveLetter from './LoveLetter';
import confetti from 'canvas-confetti';
import { Mail, Heart, Sparkles } from 'lucide-react';

export default function FavoritePersonCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    // Subtle romantic confetti (cream, rose, gold, blush)
    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#E6B8B8', '#BF6C70', '#832A3E', '#DFCAAF', '#F9EDED'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <ScrollReveal animation="fade-up">
        
        {!isOpen ? (
          /* Keepsake Envelope Card */
          <div className="relative max-w-xl mx-auto bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200/90 border border-blush-200 rounded-[2.5rem] p-8 sm:p-14 shadow-paper text-center overflow-hidden envelope-shadow group hover:shadow-soft-xl transition-all duration-500">
            
            {/* Subtle paper grain texture */}
            <div className="absolute inset-0 subtle-grain opacity-60 pointer-events-none" />

            {/* Decorative stamp / wax seal top right */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-burgundy-700/90 border-2 border-champagne-300 text-cream-100 flex items-center justify-center shadow-soft transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
              <Heart className="w-5 h-5 fill-cream-100 stroke-none" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Mail Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blush-100/80 border border-blush-200 flex items-center justify-center text-burgundy-700 mb-6 shadow-soft-sm group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-7 h-7 stroke-[1.5]" />
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-warm-900 mb-3 tracking-tight">
                {data.cardHeading || 'For My Favorite Person ♡'}
              </h2>

              {/* Small description */}
              <p className="font-sans text-sm sm:text-base text-warm-600 font-light mb-8 max-w-md">
                {data.cardSubtitle || 'A little something I wanted you to keep.'}
              </p>

              {/* Open Letter Button */}
              <button
                onClick={handleOpenLetter}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-cream-50 font-sans text-sm tracking-wider uppercase font-medium shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>{data.buttonText || 'Open My Letter'}</span>
                <Heart className="w-4 h-4 fill-blush-300 stroke-none group-hover:scale-125 transition-transform duration-200" />
              </button>
            </div>

            {/* Bottom decorative stitch line */}
            <div className="mt-8 pt-4 border-t border-dashed border-blush-200/80 flex justify-center items-center gap-2 text-xs font-serif italic text-warm-400">
              <span>Sealed with love</span>
            </div>
          </div>
        ) : (
          /* Animated Unfolded Love Letter */
          <LoveLetter data={data} onClose={() => setIsOpen(false)} />
        )}

      </ScrollReveal>
    </section>
  );
}
