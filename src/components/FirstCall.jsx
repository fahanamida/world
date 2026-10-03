import React from 'react';
import ScrollReveal from './ScrollReveal';
import MediaImage from './MediaImage';

export default function FirstCall({ data, onOpenLightbox }) {
  const imageSrc = data.image || '/memories/calls/1vd.jpg';

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
          {data.heading || 'Our First Video Call'}
        </h2>
        <h6 className="text-primary text-2xl mb-10 font-medium">25 / 01 / 2026</h6>

        {/* Centered Video Call Image in dark pink frame with soft pink glow */}
        <div className="max-w-md mx-auto bg-surface border border-border-color rounded-2xl p-3 sm:p-4 shadow-soft hover:shadow-glow-pink hover:border-accent/50 transition-all duration-500 group">
          <div className="rounded-xl overflow-hidden bg-surface-subtle">
            <MediaImage
              src={imageSrc}
              alt={data.heading || 'Our First Video Call'}
              placeholderType="call-video"
              title="First Video Call"
              className="w-full h-auto max-h-[440px] object-contain cursor-pointer transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              onClick={() => onOpenLightbox({
                image: imageSrc,
                title: data.heading || 'Our First Video Call',
              })}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
