export type PixelArt = {
  slug: string;
  title: string;
  src: string; // path under /public, e.g. /pixel-art/name.png
  description?: string;
};

export const pixelArt: PixelArt[] = [
  // Replace these with your real files placed in public/pixel-art/
  { slug: 'cloudy-city-skyline', title: 'Cloudy City Skyline', src: '/pixel-art/cloudy-city-skyline-396959.png', 
    description: 'The color palette shifts from soft gold to deep violet, evoking the calm of dawn or dusk. Three distinctive buildings pierce the horizon, their angular silhouettes bathed in warm light while smaller structures fade into the misty background. The clouds themselves billow and swirl like waves, giving the impression that the city is floating on an endless sea of light. Above, a star-speckled sky arcs across the gradient, reinforcing the surreal blend of night and day. The entire composition balances futuristic architecture with a tranquil, otherworldly atmosphere—inviting the viewer to imagine a city suspended between earth and sky, reality and dream.' },
  { slug: 'dragon-sky', title: 'Dragon Sky', src: '/pixel-art/dragon-sky-640975.png', 
    description: 'A lone figure stands silhouetted atop a hill, gazing skyward as a great dragon ascends into the heavens. Its form is framed by radiant clouds painted in soft pinks and purples, swirling dramatically around the celestial moment. A massive moon looms above, casting its pale glow across the sky, while stars and streaking comets enhance the sense of cosmic grandeur. The contrast between the tiny figure and the vast dragon emphasizes themes of awe, destiny, and the call to adventure. The palette of dusky violets and glowing rose tones adds both warmth and mystery, making the scene feel like a dream suspended between twilight and fantasy.' },
  { slug: 'river-landscape-illustration-pixel-art-style', title: 'River Landscape', src: '/pixel-art/river-landscape-illustration-pixel-art-style.jpg', 
    description: 'Jagged mountains rise proudly in the distance, their rocky faces painted in shades of cool gray and soft green. Below them, a pristine lake stretches outward, perfectly mirroring the peaks, drifting clouds, and the lush greenery that frames both sides of the scene. The reflection is so clear it blurs the line between earth and sky, giving the composition a dreamlike symmetry. Foreground boulders and dense trees anchor the image, their deep greens and blues contrasting with the bright, open sky. The carefully crafted pixel work captures the stillness of the moment—an untouched wilderness where the only movement is the gentle ripple of water and the slow drift of clouds.' },
  { slug: '8-bit-graphics-pixels-scene-with-forest', title: 'Skyscraper Forest', src: '/pixel-art/8-bit-graphics-pixels-scene-with-forest.jpg', 
    description: 'Tall, slender pines rise upward, their trunks stretching into a pale, overcast sky streaked with soft clouds. Clusters of golden foliage break through the deep greens, suggesting the quiet shift of seasons—perhaps the first signs of autumn creeping into summer’s lush canopy. In the foreground, dense undergrowth and bushes form a textured carpet of greens and ochres, grounding the scene with a sense of depth. The composition carries a calm, meditative rhythm: vertical lines of trees lead the eye skyward, while layered silhouettes of distant pines fade gently into mist. It feels like a moment of stillness, where time slows and the only sounds are the rustle of leaves and the distant call of birds.' },
];

