import React from 'react';
import ScrollReveal from './ScrollReveal';
import MediaImage from './MediaImage';

export default function FirstFight({ data, onOpenLightbox }) {
  const imageSrc = data.image || '/memories/chats/fight.jpg';

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto text-center relative">
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
          {data.heading || 'Our First Fight'}
        </h2>

        {/* Screenshot Container */}
        <div className="bg-surface border border-border-color rounded-2xl p-4 sm:p-6 shadow-soft mb-6 max-w-lg mx-auto hover:shadow-glow-soft hover:border-accent/40 transition-all duration-500">
          <div className="rounded-xl overflow-hidden bg-surface-subtle group">
            <MediaImage
              src={imageSrc}
              alt={data.heading || 'Our First Fight'}
              placeholderType="fight"
              title="First Fight"
              className="w-full h-auto max-h-[380px] object-contain cursor-pointer transition-transform duration-500 group-hover:scale-[1.01]"
              onClick={() => onOpenLightbox({
                image: imageSrc,
                title: data.heading || 'Our First Fight',
              })}
            />
          </div>
        </div>

        {/* Short story below image */}
        <div className="max-w-xl mx-auto text-center">
          <p className="font-sans text-sm sm:text-base text-text-soft font-light leading-relaxed">
            {data.story}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
