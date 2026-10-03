import React, { useState, useEffect } from 'react';
import { memoriesData, themeConfig } from './data/memories';
import OpeningScreen from './components/OpeningScreen';
import FriendshipStory from './components/FriendshipStory';
import FirstChatStory from './components/FirstChatStory';
import FirstCall from './components/FirstCall';
import LoveExpression from './components/LoveExpression';
import FavSnap from './components/FavSnap';
import MemoryChats from './components/MemoryChats';
import FirstFight from './components/FirstFight';
import Milestones from './components/Milestones';
import FinalCard from './components/FinalCard';
import FinalScreen from './components/FinalScreen';
import Lightbox from './components/Lightbox';

export default function App() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
  });

  // Apply dark pink theme configuration dynamically to CSS root variables
  useEffect(() => {
    if (themeConfig) {
      const root = document.documentElement;
      if (themeConfig.primary) root.style.setProperty('--primary', themeConfig.primary);
      if (themeConfig.primaryDark) root.style.setProperty('--primary-dark', themeConfig.primaryDark);
      if (themeConfig.primaryHover) root.style.setProperty('--primary-hover', themeConfig.primaryHover);
      if (themeConfig.secondary) root.style.setProperty('--secondary', themeConfig.secondary);
      if (themeConfig.accent) root.style.setProperty('--accent', themeConfig.accent);
      if (themeConfig.accentSoft) root.style.setProperty('--accent-soft', themeConfig.accentSoft);
      if (themeConfig.background) root.style.setProperty('--background', themeConfig.background);
      if (themeConfig.backgroundSoft) root.style.setProperty('--background-soft', themeConfig.backgroundSoft);
      if (themeConfig.surface) root.style.setProperty('--surface', themeConfig.surface);
      if (themeConfig.surfaceLight) root.style.setProperty('--surface-light', themeConfig.surfaceLight);
      if (themeConfig.surfaceSubtle) root.style.setProperty('--surface-subtle', themeConfig.surfaceSubtle);
      if (themeConfig.text) root.style.setProperty('--text', themeConfig.text);
      if (themeConfig.textSoft) root.style.setProperty('--text-soft', themeConfig.textSoft);
      if (themeConfig.border) root.style.setProperty('--border', themeConfig.border);
    }
  }, []);

  const handleOpenLightbox = (item) => {
    setLightboxState({
      isOpen: true,
      item,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      item: null,
    });
  };

  const handleScrollToStart = () => {
    const el = document.getElementById('story-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-background text-text-color selection:bg-accent selection:text-background overflow-x-hidden">
      
      {/* Main Single Page Scroll Content */}
      <main className="relative z-10 flex flex-col">
        {/* 1. OPENING SCREEN */}
        <OpeningScreen
          data={memoriesData.opening}
          topLabel={memoriesData.topLabel}
          onOpen={handleScrollToStart}
        />

        {/* 2. HOW WE BECAME FRIENDS (+ BOYFRIEND DAY INTRO DETAIL) */}
        <FriendshipStory
          data={memoriesData.friendship}
          introDetail={memoriesData.introDetail}
        />

        {/* 3. OUR FIRST CHAT (STORY / TEXT ONLY) */}
        <FirstChatStory
          data={memoriesData.firstChat}
        />

        {/* 4. OUR FIRST VIDEO CALL (VIDEO CALL IMAGE ONLY) */}
        <FirstCall
          data={memoriesData.firstVideoCall}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 5. SOMETHING I NEVER EXPECTED… */}
        <LoveExpression
          data={memoriesData.loveExpression}
        />

        {/* 6. MY FAV SNAP (EXACTLY 4 MEDIA CARDS) */}
        <FavSnap
          data={memoriesData.favSnap}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 7. OUR MEMORIES (CHAT SCREENSHOTS ONLY) */}
        <MemoryChats
          data={memoriesData.ourMemories}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 8. OUR FIRST FIGHT (SCREENSHOT + SHORT STORY) */}
        <FirstFight
          data={memoriesData.firstFight}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 9. MILESTONES (3 CARDS WITH COUNTING ANIMATION) */}
        <Milestones
          data={memoriesData.milestones}
        />

        {/* 10 & 11. THIS IS FOR YOU ♡ & ANIMATED LOVE LETTER */}
        <FinalCard
          data={memoriesData.finalCard}
          letterData={memoriesData.loveLetter}
        />

        {/* 12. FINAL SCREEN (+ SPECIAL SIGNATURE) */}
        <FinalScreen
          data={memoriesData.finalScreen}
        />
      </main>

      {/* Reusable Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        item={lightboxState.item}
      />
    </div>
  );
}
