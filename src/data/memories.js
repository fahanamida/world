// ==================================================
// MY PERSONAL PHOTOS & VIDEOS
// Add/replace files inside:
// public/memories/
// ==================================================
export const memories = {
  firstVideoCall: "/memories/calls/1vd.jpg",

  firstFight: "/memories/chats/fight.jpg",

  ourMemories: [
    "/memories/favs/fg1.jpg",
    "/memories/favs/fg2.jpg",
    "/memories/favs/fg3.jpg",
    "/memories/favs/fg4.jpg"
  ],

  myFavSnap: [
    "/memories/photos/1.jpg",
    "/memories/photos/2.jpg",
    "/memories/photos/3.jpg",
    "/memories/photos/4.jpg",
    "/memories/photos/videos-1.mp4"
  ]
};

export const themeConfig = {
  // DARK PINK ROMANTIC PALETTE
  primary: "#8E1746",        // Deep Dark Pink / Burgundy
  primaryDark: "#5C0B2C",    // Rich Dark Berry
  primaryHover: "#A31B51",   // Bright Dark Pink for hovers
  secondary: "#C94F75",      // Rose Pink
  accent: "#E45B83",         // Soft Vibrant Pink (Glows, active accents)
  accentSoft: "#F3A6BA",     // Delicate blush pink
  background: "#16070D",     // Deep Dark Burgundy/Pink Background
  backgroundSoft: "#210A13", // Soft Dark Background
  surface: "#2A0D19",        // Dark Rose Card Surface
  surfaceLight: "#351321",   // Slightly elevated card tone
  surfaceSubtle: "#210A13",  // Inner image container dark tone
  text: "#FFF1F5",           // Soft light pink / cream text
  textSoft: "#E7B9C6",       // Muted romantic pink text
  border: "#67223C",         // Thin Dark Pink / Burgundy Border
};

export const memoriesData = {
  // TOP BOYFRIEND DAY LABEL
  topLabel: "BOYFRIEND DAY • JUST FOR YOU",

  // SECTION 1 — OPENING SCREEN
  opening: {
    tagline: "a little place for us  Azhalooii ♡ Fanooii",
    title: "Our Little Story",
    subtitle: "A little collection of everything that became us.",
    buttonText: "Open Our Memories",
  },

  // BOYFRIEND DAY INTRO DETAIL
  introDetail: "For the person who became my favorite part of ordinary days.",

  // SECTION 2 — HOW WE BECAME FRIENDS
  friendship: {
    sectionLabel: "01 — US",
    heading: "How We Became Friends",
    story: "Ellathinteem thudakkam snapchat il aanu…… oru snapil  ninnum  thudangiyatha enteee rocky it's my poochaa and nte poocha kannum .snap ayachu ayachu veruppichukondirunnath, ,",
    highlight: "",
  },

  // SECTION 3 — OUR FIRST CHAT (STORY / TEXT ONLY)
  firstChat: {
    sectionLabel: "02 — THE BEGINNING",
    heading: "Our First Chat",
    story: "Enthiaaa inagnee snap ayachu veruppikkuneee.....ayshh",
    reflection: "veruppikkalil ninnuum.........",
  },

  // SECTION 4 — OUR FIRST VIDEO CALL (IMAGE ONLY)
  firstVideoCall: {
    sectionLabel: "03 — LITTLE MOMENTS",
    heading: "Our First Video Call",
    image: memories.firstVideoCall,
  },

  // SECTION 5 — SOMETHING I NEVER EXPECTED…
  loveExpression: {
    sectionLabel: "04 — TURNING POINT",
    heading: "Something I Never Expected…",
    story: "friendship il ninnuu randaalkkum evideyooo oru ishttam varaan thudangi....aarum anagattu pooyii propose aakittu ella but one time both of them manasilakki randaalkkum athrayum ishttam aanuu.....,",
    note: "The moment friendship quietly turned into love.",
  },

  // SECTION 6 — MY FAV SNAP (5 MEDIA ITEMS)
  favSnap: {
    sectionLabel: "05 — FAVORITES",
    heading: "My Fav Snap",
    items: memories.myFavSnap.map((path, idx) => ({
      id: idx + 1,
      type: path.endsWith('.mp4') ? 'video' : 'image',
      src: path
    })),
  },

  // SECTION 7 — OUR MEMORIES (CHAT SCREENSHOTS ONLY)
  ourMemories: {
    sectionLabel: "06 — ARCHIVE",
    heading: "Our Memories",
    chats: memories.ourMemories.map((path, idx) => ({
      id: `fav-${idx + 1}`,
      src: path
    })),
  },

  // SECTION 8 — OUR FIRST FIGHT
  firstFight: {
    sectionLabel: "07 — GROWTH",
    heading: "Our First Fight",
    image: memories.firstFight,
    story: "oru friday ariyatheee onnuu orangi pooyiii...........oh my god !!!!!  pittennu eneechu nookiyappoo van adi ,after 2 days kayinjittaaaa msg ayachth thaneeee,   first time aayirunnu ingane ollaa oru adi",
  },

  // SECTION 9 — MILESTONES (EXACTLY 3 CARDS)
  milestones: {
    sectionLabel: "08 — MILESTONES",
    heading: "Milestones",
    cards: [
      {
        value: "∞",
        label: "Memories",
      },
      {
        value: "100+",
        numericTarget: 100,
        suffix: "+",
        label: "Conversations",
      },
      {
        value: "♡",
        label: "Favorite Person",
      },
    ],
  },

  // SECTION 10 — THIS IS FOR YOU
  finalCard: {
    text: "This Is For You ♡",
    buttonText: "Open It",
  },

  // SECTION 11 — FINAL LOVE LETTER
  loveLetter: {
    heading: "My Azhalooii♡  ",
    paragraphs: [
      "Do you know how much I love you? 🥺❤️ I got you in my life without ever expecting it. You are the most grateful and beautiful gift I could have ever received in my life. I’m truly thankful to have you. ❤️",
      "From a simple Snapchat connection to all the conversations, calls, memories, silly moments and even the difficult ones — somehow, you became one of the most special parts of my life.",
      "Even though we know that we may not be able to be together in the end, I just want us to stay happy together for as long as we can, until the very end of this journey. ❤️ Sometimes I think about the fact that if only my home was closer to Calicut, maybe things between us would have been a little easier. That has been one of the main issues between us for such a long time. No matter how many fights we have or how many arguments we get into, I still have this fear inside me that one day you might leave me. And honestly, I never even realized how deeply I had fallen in love with you, or how much I truly love you. ❤️🥺",
      "Even after you told me everything about your past, none of it was ever a problem for me. Even knowing that you had such a complicated past, I never expected that you would still be able to accept me and choose me. I don’t even know how to properly show you how much I love you or how to be the girlfriend you deserve. But I really want to try. I want to be someone you can always rely on, someone who can make you happy, and someone who will love you no matter what.  I never really knew how to show you how much I love you. Maybe I couldn’t express my feelings properly, but  know that I still love you. I always have. ❤️🥺",
      "Thank you for being part of my story. And if I could choose again, I'd still choose all these little moments with you.",
      "Happy Boyfriend Day. ♡"
    ],
    signOff: "With all my love,\nAlways ♡"
  },

  // SECTION 12 — FINAL SCREEN & SPECIAL DETAIL
  finalScreen: {
    largeText: "Happy Boyfriend Day ❤️",
    smallText: "Our story is still being written…",
    closingLine: "",
    signature: "made with all the little moments that became us ♡",
  }
};
