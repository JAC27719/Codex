export type PixelArt = {
  slug: string;
  title: string;
  src: string; // path under /public, e.g. /pixel-art/name.png
  description?: string;
};

export type Landscape = PixelArt; // 320x180 (16:9)
export type Character = PixelArt;  // 32x32 (1:1)

// 16:9 landscapes
export const landscapes: Landscape[] = [
];

// 1:1 character sprites (start empty or add your files under /public/pixel-art/characters)
export const characters: Character[] = [
  { slug: 'faith-unawakened', title: 'Faith, Unawakened', src: '/pixel-art/characters/Faith-Unawakened.png',
    description: 'Perched atop a glowing platform, the figure’s violet hair drifts like a whisper of another realm. Shadows cling to their dark attire, broken only by a faint golden emblem at the waist—an echo of forgotten power. The blade at their side glimmers faintly, less a weapon than a key, as if waiting for the moment when long-buried truths awaken.'
   },
  { slug: 'faith-suns-disciple', title: 'Faith, Sun\'s Disciple', src: '/pixel-art/characters/Faith-Suns-Disciple.png',
    description: 'Standing firm upon a crimson dais, this figure radiates both warmth and danger. Their flame-colored hair seems to burn against the dark fabric of their garb, where golden bands trace symbols of an order long thought lost. Though no blade is drawn, their presence carries the weight of ancient vows—an oath sworn beneath the sun itself. Whether guardian or herald, they wait in silence, as if the turning of the age depends on their next step.'
   },
  { slug: 'donut', title: 'Donut', src: '/pixel-art/characters/Donut.png',
    description: 'A Donut'
   },
];
