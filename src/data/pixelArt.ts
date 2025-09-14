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
  { slug: 'cloudy-city-skyline', title: 'Cloudy City Skyline', src: '/pixel-art/landscapes/cloudy-city-skyline-396959.png', 
    description: 'The color palette shifts from soft gold to deep violet, evoking the calm of dawn or dusk. Three distinctive buildings pierce the horizon, their angular silhouettes bathed in warm light while smaller structures fade into the misty background. The clouds themselves billow and swirl like waves, giving the impression that the city is floating on an endless sea of light. Above, a star-speckled sky arcs across the gradient, reinforcing the surreal blend of night and day. The entire composition balances futuristic architecture with a tranquil, otherworldly atmosphere-inviting the viewer to imagine a city suspended between earth and sky, reality and dream.' },
  { slug: 'dragon-sky', title: 'Dragon Sky', src: '/pixel-art/landscapes/dragon-sky-640975.png', 
    description: 'A lone figure stands silhouetted atop a hill, gazing skyward as a great dragon ascends into the heavens. Its form is framed by radiant clouds painted in soft pinks and purples, swirling dramatically around the celestial moment. A massive moon looms above, casting its pale glow across the sky, while stars and streaking comets enhance the sense of cosmic grandeur. The contrast between the tiny figure and the vast dragon emphasizes themes of awe, destiny, and the call to adventure. The palette of dusky violets and glowing rose tones adds both warmth and mystery, making the scene feel like a dream suspended between twilight and fantasy.' },
  { slug: 'river-landscape-illustration-pixel-art-style', title: 'River Landscape', src: '/pixel-art/landscapes/river-landscape-illustration-pixel-art-style.jpg', 
    description: 'Jagged mountains rise proudly in the distance, their rocky faces painted in shades of cool gray and soft green. Below them, a pristine lake stretches outward, perfectly mirroring the peaks, drifting clouds, and the lush greenery that frames both sides of the scene. The reflection is so clear it blurs the line between earth and sky, giving the composition a dreamlike symmetry. Foreground boulders and dense trees anchor the image, their deep greens and blues contrasting with the bright, open sky. The carefully crafted pixel work captures the stillness of the moment-an untouched wilderness where the only movement is the gentle ripple of water and the slow drift of clouds.' },
  { slug: 'red-forest', title: 'Red Forest', src: '/pixel-art/landscapes/red-forest.jpg', 
    description: 'Scarlet trees rise tall and proud, their leaves burning bright against the cool blues of distant mountains and the pale glow of the moon above. A quiet stream winds its way through the forest floor, mirroring flashes of crimson and sky, as if carrying whispers from the peaks beyond. Dark stone outcrops punctuate the fiery landscape, grounding its otherworldly beauty with a touch of permanence. The composition feels both serene and mysterious—an untouched place where seasons turn with ritual precision, and where the path of water leads deeper into secrets hidden beneath the canopy of red.' },
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
