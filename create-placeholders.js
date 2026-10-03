import fs from 'fs';
import path from 'path';

// Exact folders
const dirs = [
  'public/memories/calls',
  'public/memories/chats',
  'public/memories/favs',
  'public/memories/photos'
];

dirs.forEach(d => {
  fs.mkdirSync(d, { recursive: true });
});

// Remove old videos folder if present
if (fs.existsSync('public/memories/videos')) {
  try {
    fs.rmSync('public/memories/videos', { recursive: true, force: true });
  } catch (e) {}
}

function createChatSvg(title, text1, text2, timestamp) {
  return `<svg width="600" height="800" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#16070D"/>
      <stop offset="100%" stop-color="#2A0D19"/>
    </linearGradient>
  </defs>
  <rect width="600" height="800" fill="url(#bg)"/>
  
  <!-- Header Bar -->
  <rect x="0" y="0" width="600" height="80" fill="#2A0D19" opacity="0.95"/>
  <circle cx="50" cy="40" r="22" fill="#351321"/>
  <text x="50" y="47" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" text-anchor="middle" fill="#E45B83">♡</text>
  <text x="85" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-weight="bold" font-size="16" fill="#FFF1F5">${title}</text>
  <text x="85" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#E7B9C6">Online</text>
  <line x1="0" y1="80" x2="600" y2="80" stroke="#67223C" stroke-width="1"/>

  <!-- Timestamp Badge -->
  <rect x="230" y="110" width="140" height="26" rx="13" fill="#351321" stroke="#67223C" stroke-width="1"/>
  <text x="300" y="127" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" text-anchor="middle" fill="#E45B83">${timestamp}</text>

  <!-- Incoming Message Bubble -->
  <rect x="40" y="170" width="380" height="90" rx="20" fill="#2A0D19" stroke="#67223C" stroke-width="1"/>
  <text x="65" y="210" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" fill="#FFF1F5">${text1}</text>
  <text x="380" y="245" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#E7B9C6">11:11 PM</text>

  <!-- Outgoing Message Bubble -->
  <rect x="180" y="290" width="380" height="90" rx="20" fill="#8E1746" stroke="#E45B83" stroke-width="1"/>
  <text x="205" y="330" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" fill="#FFF1F5">${text2}</text>
  <text x="520" y="365" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" fill="#F3A6BA">11:12 PM ✓✓</text>

  <!-- Heart Flourish -->
  <circle cx="300" cy="520" r="45" fill="#2A0D19" stroke="#67223C" stroke-width="1.5"/>
  <text x="300" y="534" font-family="serif" font-size="40" text-anchor="middle" fill="#E45B83">♡</text>
</svg>`;
}

function createCallSvg(title, duration) {
  return `<svg width="600" height="700" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="callBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#16070D"/>
      <stop offset="100%" stop-color="#210A13"/>
    </linearGradient>
  </defs>
  <rect width="600" height="700" fill="url(#callBg)"/>
  
  <circle cx="300" cy="220" r="65" fill="#2A0D19" stroke="#E45B83" stroke-width="2"/>
  <text x="300" y="235" font-family="serif" font-size="50" text-anchor="middle" fill="#FFF1F5">♡</text>
  
  <text x="300" y="330" font-family="'Plus Jakarta Sans', sans-serif" font-weight="bold" font-size="22" text-anchor="middle" fill="#FFF1F5">${title}</text>
  <text x="300" y="360" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" text-anchor="middle" fill="#E45B83">Video Call</text>
  <text x="300" y="400" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="500" text-anchor="middle" fill="#E7B9C6">${duration}</text>

  <!-- Call Action Buttons -->
  <circle cx="210" cy="520" r="30" fill="#351321" stroke="#67223C" stroke-width="1"/>
  <text x="210" y="528" font-size="20" text-anchor="middle" fill="#FFF1F5">🎤</text>

  <circle cx="300" cy="520" r="32" fill="#8E1746" stroke="#E45B83" stroke-width="1"/>
  <text x="300" y="528" font-size="20" text-anchor="middle" fill="#FFF1F5">📞</text>

  <circle cx="390" cy="520" r="30" fill="#351321" stroke="#67223C" stroke-width="1"/>
  <text x="390" y="528" font-size="20" text-anchor="middle" fill="#FFF1F5">📹</text>
</svg>`;
}

function createPhotoSvg(number) {
  return `<svg width="600" height="800" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="snapBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#16070D"/>
      <stop offset="50%" stop-color="#2A0D19"/>
      <stop offset="100%" stop-color="#351321"/>
    </linearGradient>
  </defs>
  <rect width="600" height="800" fill="url(#snapBg)"/>
  <circle cx="300" cy="380" r="60" fill="#2A0D19" stroke="#E45B83" stroke-width="1.5"/>
  <text x="300" y="396" font-family="serif" font-size="50" text-anchor="middle" fill="#E45B83">♡</text>
  <text x="300" y="480" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="600" text-anchor="middle" fill="#FFF1F5">Photo 0${number}</text>
</svg>`;
}

// Create exact files
const files = [
  { path: 'public/memories/calls/1vd.jpg', content: createCallSvg('First Video Call', '01:24:50') },
  { path: 'public/memories/chats/fight.jpg', content: createChatSvg('First Misunderstanding', 'I think we misunderstood each other...', 'I care about you too much to stay upset ❤️', 'GROWING STRONGER') },
  { path: 'public/memories/favs/fg1.jpg', content: createChatSvg('Our Memory', 'Are you still awake?', 'Always here for you 🌙', 'MEMORY 01') },
  { path: 'public/memories/favs/fg2.jpg', content: createChatSvg('Our Memory', 'You won’t believe what happened today 😂', 'Tell me everything!', 'MEMORY 02') },
  { path: 'public/memories/favs/fg3.jpg', content: createChatSvg('Our Memory', 'Just wanted to say you make me really happy.', 'You mean the world to me ♡', 'MEMORY 03') },
  { path: 'public/memories/favs/fg4.jpg', content: createChatSvg('Our Memory', 'Nobody else gets our humor 🙈', 'Always us!', 'MEMORY 04') },
  { path: 'public/memories/photos/1.jpg', content: createPhotoSvg(1) },
  { path: 'public/memories/photos/2.jpg', content: createPhotoSvg(2) },
  { path: 'public/memories/photos/3.jpg', content: createPhotoSvg(3) },
  { path: 'public/memories/photos/4.jpg', content: createPhotoSvg(4) },
];

files.forEach(f => {
  fs.writeFileSync(f.path, f.content);
});

console.log('Exact requested media files created successfully!');
