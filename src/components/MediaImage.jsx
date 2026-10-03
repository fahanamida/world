import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, Video } from 'lucide-react';

export default function MediaImage({
  src,
  alt = 'Memory',
  className = '',
  containerClassName = '',
  placeholderType = 'chat',
  title = '',
  onClick,
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleError = () => {
    // If .jpg fails, attempt .png
    if (currentSrc.endsWith('.jpg')) {
      setCurrentSrc(currentSrc.replace(/\.jpg$/, '.png'));
    } else if (currentSrc.endsWith('.png')) {
      setCurrentSrc(currentSrc.replace(/\.png$/, '.jpg'));
    } else {
      setHasError(true);
    }
  };

  const getIcon = () => {
    switch (placeholderType) {
      case 'call-video':
        return <Video className="w-7 h-7 text-accent stroke-[1.5]" />;
      case 'fight':
        return <MessageSquare className="w-7 h-7 text-accent stroke-[1.5]" />;
      case 'photo':
        return <Heart className="w-7 h-7 text-accent fill-primary stroke-accent" />;
      default:
        return <MessageSquare className="w-7 h-7 text-accent stroke-[1.5]" />;
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden cursor-pointer group ${containerClassName}`}
    >
      {!hasError ? (
        <>
          <img
            src={currentSrc}
            alt={alt}
            onError={handleError}
            onLoad={() => setIsLoaded(true)}
            className={`${className} transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-surface-subtle animate-pulse">
              <div className="p-3 rounded-full bg-surface-light border border-border-color shadow-soft-sm mb-2">
                {getIcon()}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-4 text-center border border-border-color rounded-xl bg-surface-subtle">
          <div className="w-12 h-12 rounded-full bg-surface-light border border-border-color shadow-soft-sm flex items-center justify-center mb-2">
            {getIcon()}
          </div>
          <h4 className="text-xs font-serif font-medium text-text-color mb-1 max-w-[180px] truncate">
            {title || alt}
          </h4>
          <p className="text-[10px] text-text-soft font-sans max-w-[200px] truncate">
            {src.replace('/memories/', '')}
          </p>
        </div>
      )}
    </div>
  );
}
