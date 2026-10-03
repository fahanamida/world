import fs from 'fs';
import path from 'path';

const pairs = [
  ['public/memories/calls/1vd.png', 'public/memories/calls/1vd.jpg'],
  ['public/memories/chats/fight.png', 'public/memories/chats/fight.jpg'],
  ['public/memories/favs/fg1.png', 'public/memories/favs/fg1.jpg'],
  ['public/memories/favs/fg2.png', 'public/memories/favs/fg2.jpg'],
  ['public/memories/favs/fg3.png', 'public/memories/favs/fg3.jpg'],
  ['public/memories/favs/fg4.png', 'public/memories/favs/fg4.jpg'],
  ['public/memories/photos/1.png', 'public/memories/photos/1.jpg'],
  ['public/memories/photos/2.png', 'public/memories/photos/2.jpg'],
  ['public/memories/photos/3.png', 'public/memories/photos/3.jpg'],
  ['public/memories/photos/4.png', 'public/memories/photos/4.jpg'],
];

pairs.forEach(([pngPath, jpgPath]) => {
  if (fs.existsSync(pngPath)) {
    // Copy the real user png to the requested jpg path
    fs.copyFileSync(pngPath, jpgPath);
  }
});

console.log('User media synced seamlessly between png and jpg!');
