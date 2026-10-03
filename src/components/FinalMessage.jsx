import React from 'react';
import ScrollReveal from './ScrollReveal';
import MediaImage from './MediaImage';
import { Heart } from 'lucide-react';

export default function FinalMessage({ data, onOpenLightbox }) {
  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 max-w-3xl mx-auto text-center overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 max-w-md mx-auto bg-gradient-to-t from-blush-200/30 via-cream-200/20 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

      <ScrollReveal animation="fade-up">
        {/* Optional Final Image */}
        {data.image && (
          <div className="max-w-xs sm:max-w-sm mx-auto mb-10 rounded-3xl overflow-hidden bg-white border border-blush-200 p-2 shadow-soft-lg group hover:scale-[1.02] transition-transform duration-500">
            <div className="rounded-2xl overflow-hidden aspect-square">
              <MediaImage
                src={data.image}
                alt="Our Final Memory"
                placeholderType="photo"
                title="Our Story"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => onOpenLightbox && onOpenLightbox({
                  image: data.image,
                  title: 'Happy Boyfriend Day ❤️',
                  caption: 'Our story is still being written…',
                })}
              />
            </div>
          </div>
        )}

        {/* Floating Heart Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blush-100 text-burgundy-600 mb-6 shadow-soft-sm animate-float-gentle">
          <Heart className="w-5 h-5 fill-blush-300 stroke-burgundy-600" />
        </div>

        {/* Big Title */}
        <h2 className="font-serif text-4xl sm:text-6xl font-light text-warm-900 mb-4 tracking-tight leading-tight">
          {data.title || 'Happy Boyfriend Day ❤️'}
        </h2>

        {/* Subtitle */}
        <p className="font-serif italic text-lg sm:text-2xl text-burgundy-700/90 max-w-md mx-auto leading-relaxed">
          {data.subtitle || 'Our story is still being written…'}
        </p>

        {/* Delicate decorative flourish */}
        <div className="mt-12 flex items-center justify-center gap-3 opacity-40 text-burgundy-400 text-xs">
          <span>———</span>
          <span>♡</span>
          <span>———</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
