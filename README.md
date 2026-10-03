# Boyfriend Day Memory Website ♡

A luxurious, dark pink, cinematic romantic digital memory book built with **React** and **Tailwind CSS**.

---

## 📁 Exact Media Folder Structure

All media files are stored directly in `public/memories/`:

```text
public/
└── memories/
    ├── calls/
    │   └── 1vd.jpg          (Our First Video Call)
    │
    ├── chats/
    │   └── fight.jpg        (Our First Fight)
    │
    ├── favs/
    │   ├── fg1.jpg          (Our Memories chat 1)
    │   ├── fg2.jpg          (Our Memories chat 2)
    │   ├── fg3.jpg          (Our Memories chat 3)
    │   └── fg4.jpg          (Our Memories chat 4)
    │
    └── photos/
        ├── 1.jpg            (My Fav Snap 1)
        ├── 2.jpg            (My Fav Snap 2)
        ├── 3.jpg            (My Fav Snap 3)
        ├── 4.jpg            (My Fav Snap 4)
        └── videos-1.mp4     (My Fav Snap video)
```

---

## 🎨 Theme Palette (Dark Pink Romantic Palette)

Controlled centrally via CSS variables in [`src/index.css`](file:///c:/Users/lenovo/OneDrive/Desktop/Works/bf/src/index.css) and [`src/data/memories.js`](file:///c:/Users/lenovo/OneDrive/Desktop/Works/bf/src/data/memories.js):

```css
:root {
  --primary: #8E1746;        /* Deep Dark Pink / Burgundy */
  --primary-dark: #5C0B2C;   /* Rich Dark Berry */
  --secondary: #C94F75;      /* Rose Pink */
  --accent: #E45B83;         /* Soft Vibrant Pink Highlights & Glows */
  --accent-soft: #F3A6BA;    /* Delicate Blush Pink */

  --background: #16070D;     /* Deep Dark Burgundy/Pink Background */
  --background-soft: #210A13;/* Soft Dark Background */

  --surface: #2A0D19;        /* Dark Rose Card Surface */
  --surface-light: #351321;  /* Elevated Card Tone */
  --surface-subtle: #210A13; /* Inner Container Dark Tone */

  --text: #FFF1F5;           /* Light Pink / Cream Text */
  --text-soft: #E7B9C6;      /* Muted Romantic Pink Text */

  --border: #67223C;         /* Thin Dark Pink / Burgundy Border */
}
```

---

## 🚀 Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build
```
