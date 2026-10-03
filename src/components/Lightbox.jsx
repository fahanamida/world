import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({
  isOpen,
  onClose,
  item,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  if (!isOpen || !item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/90 backdrop-blur-md transition-opacity duration-300">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-label="Close lightbox" />
      {/* Close button */}
      <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-surface-light hover:bg-primary text-text-color border border-border-color shadow-soft transition-all duration-200" title="Close (Esc)">
        <X className="w-5 h-5" />
      </button>
      {/* Media + Date container */}
      <div className="relative z-10 max-w-3xl max-h-[90vh] w-full flex flex-col items-center justify-center p-2" onClick={(e) => e.stopPropagation()}>
        {/* Image */}
        <img src={item.image || item.src} alt={item.title || 'Memory fullscreen view'} className="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-border-color/60 bg-surface/30" />
        {/* Title + Date */}
        <div className="mt-4 text-center">
          {item.title && (<h3 className="font-serif text-lg sm:text-xl font-medium text-text-color"> {item.title} </h3>)}
          {item.date && (<p className="mt-1 text-xs sm:text-sm font-mono tracking-wider text-accent"> {item.date} </p>)}
        </div>
      </div>
    </div>
  );
}