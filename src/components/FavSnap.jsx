import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import MediaImage from './MediaImage';
import { Video } from 'lucide-react';

export default function FavSnap({ data, onOpenLightbox }) {
  const items = data.items || [
    { id: 1, type: "image", src: "/memories/photos/1.jpg" },
    { id: 2, type: "image", src: "/memories/photos/2.jpg" },
    { id: 3, type: "image", src: "/memories/photos/3.jpg" },
    { id: 4, type: "image", src: "/memories/photos/4.jpg" },
    { id: 5, type: "video", src: "/memories/photos/videos-1.mp4" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto text-center relative">
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
          {data.heading || 'My Fav Snap'}
        </h2>

        {/* 5 Media Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {items.map((item, idx) => (
            <ScrollReveal key={item.id || idx} delay={idx * 60}>
              <div className="bg-surface border border-border-color rounded-2xl p-2 shadow-soft hover:shadow-glow-pink hover:border-accent/40 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-400 group">
                <div className="rounded-xl overflow-hidden bg-surface-subtle aspect-[3/4] flex items-center justify-center relative">
                  {item.type === 'video' ? (
                    <VideoCard src={item.src} />
                  ) : (
                    <MediaImage
                      src={item.src}
                      alt={`Favorite snap ${idx + 1}`}
                      placeholderType="photo"
                      title={`Fav Snap ${idx + 1}`}
                      className="w-full h-full object-cover cursor-pointer transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      onClick={() => onOpenLightbox({
                        image: item.src,
                        title: 'My Fav Snap',
                      })}
                    />
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function VideoCard({ src }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center bg-surface-subtle rounded-xl overflow-hidden">
      {!hasError ? (
        <video
          src={src}
          controls
          playsInline
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="p-4 text-center text-text-color flex flex-col items-center justify-center h-full">
          <div className="p-2.5 rounded-full bg-surface-light border border-border-color mb-2">
            <Video className="w-6 h-6 text-accent" />
          </div>
          <p className="text-xs font-serif text-accent-soft font-medium">Video Clip</p>
          <p className="text-[10px] text-text-soft mt-1">{src.replace('/memories/', '')}</p>
        </div>
      )}
    </div>
  );
}
