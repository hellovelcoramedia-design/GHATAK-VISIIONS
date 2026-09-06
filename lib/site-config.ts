export type PortfolioItem = { title: string; category: string; location: string; year: string; image: string; description: string };
export type Testimonial = { name: string; project: string; review: string; image?: string };

export const siteConfig = {
  brand: 'GHATAK VISION',
  tagline: 'Cinematic Storytelling',
  location: 'Mumbai, India',
  phone: '9769772615',
  whatsapp: '919769772615',
  instagram: 'GHATAKVISION',
  hero: { eyebrow: 'Mumbai, India · Cinematic Production', title: ['WE TURN MOMENTS', 'INTO CINEMA.'], description: 'Premium visual storytelling for automobiles, celebrations, events and brands.' },
  services: [
    { number: '01', title: 'Luxury Car Delivery Films', label: 'AUTOMOTIVE', description: 'Capture the moment a dream becomes real.', image: '/images/car-01.jpg' },
    { number: '02', title: 'Birthday & Celebration Films', label: 'CELEBRATIONS', description: 'Birthdays, anniversaries, proposals and celebrations shaped into cinematic memories.', image: '/images/birthday-01.jpg' },
    { number: '03', title: 'Event & Public Coverage', label: 'EVENTS', description: 'Professional visual coverage for large-scale events, public appearances and campaigns.', image: '/images/event-01.jpg' },
    { number: '04', title: 'Cinematic Reels & Content', label: 'SOCIAL', description: 'Premium short-form content designed for Instagram and social media.', image: '/images/reel-01.jpg' },
  ],
  portfolio: [
    { title: 'BMW DELIVERY', category: 'Automotive Film', location: 'Mumbai', year: '2026', image: '/images/car-01.jpg', description: 'A new machine. A first drive. A film worth keeping.' },
    { title: 'THE BIG DAY', category: 'Celebration Film', location: 'Mumbai', year: '2026', image: '/images/birthday-01.jpg', description: 'Emotion, energy and the moments between the moments.' },
    { title: 'MUMBAI NIGHTS', category: 'Event Film', location: 'Mumbai', year: '2026', image: '/images/event-01.jpg', description: 'A city alive after dark.' },
    { title: 'THE NEW MACHINE', category: 'Automotive Campaign', location: 'Mumbai', year: '2026', image: '/images/car-02.jpg', description: 'Automotive visual language with precision and attitude.' },
  ] as PortfolioItem[],
  testimonials: [
    { name: 'CLIENT TESTIMONIAL', project: 'Replace with verified client story', review: 'Add a genuine customer review here. We never publish fabricated testimonials.' },
  ] as Testimonial[],
};

// GHATAK VISION LOGO — REPLACE THIS FILE WITH YOUR OWN LOGO
export const logo = '/images/logo.png';
export const logoWhite = '/images/logo-white.png';
export const logoBlack = '/images/logo-black.png';
export const showreel = '/videos/showreel.mp4';

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hi GHATAK VISION, I would like to enquire about booking a shoot.')}`;
export const telUrl = `tel:+91${siteConfig.phone}`;