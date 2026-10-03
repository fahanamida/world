import React, { useMemo } from 'react';

export default function FloatingParticles({ count = 15 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 4, // 4px to 12px
      left: Math.random() * 100, // 0% to 100%
      top: Math.random() * 100,
      duration: Math.random() * 15 + 15, // 15s to 30s
      delay: Math.random() * 5,
      opacity: Math.random() * 0.25 + 0.1, // 0.1 to 0.35 (subtle)
      isHeart: i % 3 === 0,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `drift ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
          className="absolute"
        >
          {p.isHeart ? (
            <svg viewBox="0 0 24 24" fill="#C57279" className="w-full h-full text-blush-400">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-blush-300 to-rose-gold/40 blur-[1px]" />
          )}
        </div>
      ))}
    </div>
  );
}
