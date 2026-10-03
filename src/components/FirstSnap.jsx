import React, { useRef, useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { Play, Pause, Volume2, VolumeX, Video, Sparkles } from 'lucide-react';

export default function FirstSnap({ data }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasVideoError, setHasVideoError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Video play error:', err);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <ScrollReveal animation="fade-up">
        {/* Header */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100/70 text-burgundy-700 text-xs font-sans font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Moving Memory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-warm-900 mb-3 tracking-tight">
            {data.title || 'The First Snap You Sent Me 🤍'}
          </h2>
          <p className="font-sans text-sm sm:text-base text-warm-600 font-light">
            {data.subtitle || 'One little video that became a memory.'}
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative max-w-md mx-auto">
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-blush-200/30 blur-2xl rounded-3xl -z-10" />

          <div className="bg-white/95 border border-blush-200/90 rounded-[2.5rem] p-3 sm:p-4 shadow-soft-lg overflow-hidden group">
            
            {/* Video Container (aspect ratio suitable for phone snap / vertical or 4:5 video) */}
            <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] bg-warm-900 rounded-2xl overflow-hidden flex items-center justify-center">
              {!hasVideoError ? (
                <>
                  <video
                    ref={videoRef}
                    src={data.video || '/memories/videos/first-snap.mp4'}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleVideoEnded}
                    onError={() => setHasVideoError(true)}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Play / Pause Big Button on Click */}
                  <div 
                    onClick={togglePlay}
                    className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
                      isPlaying ? 'opacity-0 hover:opacity-100 bg-black/20' : 'opacity-100 bg-black/30'
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      className="w-16 h-16 rounded-full bg-white/90 text-burgundy-700 shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                      {isPlaying ? (
                        <Pause className="w-7 h-7 fill-burgundy-700" />
                      ) : (
                        <Play className="w-7 h-7 fill-burgundy-700 ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Custom Bottom Control Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col gap-2 z-20">
                    {/* Progress slider */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-blush-300 hover:accent-blush-200 focus:outline-none"
                    />

                    <div className="flex items-center justify-between text-white text-xs font-sans">
                      <button
                        onClick={togglePlay}
                        className="p-1 hover:text-blush-200 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <span className="font-mono text-[11px] opacity-80">
                        {videoRef.current ? Math.floor(videoRef.current.currentTime || 0) : 0}s / {Math.floor(duration || 0)}s
                      </span>

                      <button
                        onClick={toggleMute}
                        className="p-1 hover:text-blush-200 transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Clean Placeholder if video file not yet added */
                <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-cream-100 via-blush-50 to-cream-200 text-warm-800 h-full w-full">
                  <div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center mb-4 text-burgundy-600">
                    <Video className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-warm-900 mb-1">
                    First Snap Video
                  </h3>
                  <p className="font-sans text-xs text-burgundy-700 bg-white/80 px-3 py-1.5 rounded-full border border-blush-200 shadow-soft-sm font-medium mb-3">
                    Add first-snap.mp4 here
                  </p>
                  <p className="text-[11px] text-warm-500 max-w-[220px]">
                    Place your video inside <code className="bg-white px-1 py-0.5 rounded text-warm-700">public/memories/videos/first-snap.mp4</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Caption */}
          {data.caption && (
            <div className="mt-5 text-center">
              <p className="font-serif italic text-base sm:text-lg text-warm-800">
                "{data.caption}"
              </p>
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
