import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Milestones({ data }) {
  const cards = data.cards || [
    { value: "∞", label: "Memories" },
    { value: "100+", numericTarget: 100, suffix: "+", label: "Conversations" },
    { value: "♡", label: "Favorite Person" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center relative">
      <ScrollReveal animation="fade-up">
        
        {/* Section label */}
        {data.sectionLabel && (
          <div className="mb-2">
            <span className="text-[11px] font-mono tracking-widest text-accent font-medium">
              {data.sectionLabel}
            </span>
          </div>
        )}

        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-text-color mb-8 leading-tight">
          {data.heading || 'Milestones'}
        </h2>

        {/* Exactly 3 simple cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <MilestoneCard card={card} />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function MilestoneCard({ card }) {
  const [count, setCount] = useState(card.numericTarget ? 0 : null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    if (!card.numericTarget) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = card.numericTarget;
          const duration = 1200; // ms
          const stepTime = 20; // ms
          const increment = Math.ceil(end / (duration / stepTime));

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    const current = cardRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [card.numericTarget, hasAnimated]);

  return (
    <div 
      ref={cardRef}
      className="bg-surface border border-border-color rounded-2xl p-6 sm:p-8 text-center shadow-soft hover:shadow-glow-pink hover:border-accent hover:scale-[1.03] transition-all duration-400 flex flex-col items-center justify-center min-h-[160px] group"
    >
      {/* Large Value with subtle pink hover glow */}
      <div className="font-serif text-4xl sm:text-5xl font-light text-accent mb-2 tracking-tight group-hover:text-accent-soft group-hover:drop-shadow-[0_0_12px_rgba(228,91,131,0.6)] transition-all duration-300">
        {card.numericTarget ? `${count}${card.suffix || ''}` : card.value}
      </div>
      
      {/* Label */}
      <h3 className="font-sans text-xs sm:text-sm uppercase tracking-wider font-medium text-text-soft">
        {card.label}
      </h3>
    </div>
  );
}
