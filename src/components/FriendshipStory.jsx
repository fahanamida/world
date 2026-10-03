import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function FriendshipStory({ data, introDetail }) {
  return (
    <section id="story-start" className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto relative">
      
      {/* Small Boyfriend Day Intro Line */}
      {introDetail && (
        <div className="text-center mb-12 sm:mb-16">
          <ScrollReveal animation="fade-up">
            <p className="font-serif italic text-sm sm:text-base text-text-soft tracking-wide">
              {introDetail}
            </p>
            <div className="w-12 h-px bg-border-color mx-auto mt-4 opacity-70" />
          </ScrollReveal>
        </div>
      )}

      {/* Main Friendship Card */}
      <ScrollReveal animation="fade-up" delay={100}>
        <div className="bg-surface border border-border-color rounded-2xl p-6 sm:p-10 shadow-soft relative overflow-hidden">
          
          {/* Section label */}
          {data.sectionLabel && (
            <div className="mb-4">
              <span className="text-[11px] font-mono tracking-widest text-accent font-medium">
                {data.sectionLabel}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left side: Snapchat visual with soft pink glow */}
            <div className="md:col-span-4 flex justify-center">
              <div className="group relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-surface-light border border-border-color flex flex-col items-center justify-center p-4 transition-transform duration-500 hover:scale-[1.03] cursor-default">
                {/* Soft pink glow behind visual */}
                <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl -z-10 group-hover:bg-accent/30 transition-colors duration-500" />
                
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-text-color transition-transform duration-500 group-hover:scale-105"
                >
                  <path
                    d="M50 16C37 16 29 25 29 38C29 42 30 46 31 49C28 50 25 53 25 57C25 61 28 63 32 63C32 66 34 69 37 71C36 73 32 75 26 76C23 76.5 22 78.5 24 80C27 82 36 83 43 81C46 83 49 84 51 84C53 84 56 83 59 81C66 83 75 82 78 80C80 78.5 79 76.5 76 76C70 75 66 73 65 71C68 69 70 66 70 63C74 63 77 61 77 57C77 53 74 50 71 49C72 46 73 42 73 38C73 25 65 16 50 16Z"
                    fill="#2A0D19"
                    stroke="#E45B83"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="44" cy="37" r="2" fill="#E45B83" />
                  <circle cx="56" cy="37" r="2" fill="#E45B83" />
                </svg>
                <span className="text-[11px] font-sans uppercase tracking-widest text-accent-soft font-medium mt-2">
                  Snapchat
                </span>
              </div>
            </div>

            {/* Right side: Story text */}
            <div className="md:col-span-8 flex flex-col justify-center text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-color mb-4 leading-tight">
                {data.heading || 'How We Became Friends'}
              </h2>
              <p className="font-sans text-sm sm:text-base text-text-soft font-light leading-relaxed mb-3">
                {data.story}
              </p>
              {data.highlight && (
                <p className="font-serif italic text-sm sm:text-base text-accent-soft font-normal leading-relaxed">
                  {data.highlight}
                </p>
              )}
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
