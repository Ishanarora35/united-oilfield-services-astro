import type { ImageMetadata } from 'astro';

import hero1 from '@/assets/home/hero-1-drilling-rig.jpg';
import hero2 from '@/assets/home/hero-2-pumpjack-tanks.jpg';
import hero3 from '@/assets/home/hero-3-pipelines-sunset.jpg';
import hero4 from '@/assets/home/hero-4-pumpjack-flare.jpg';
import hero5 from '@/assets/home/hero-5-storage-tanks.jpg';

export interface HeroSlide {
  /** Tagline exactly as supplied in the PRD, paired to its assigned image. */
  tagline: string;
  /** Optional line break hint for large display type. */
  taglineLines: string[];
  support: string;
  image: ImageMetadata;
  alt: string;
  /** Focal point so key subjects survive cover-cropping at every ratio. */
  objectPosition: string;
  objectPositionMobile: string;
}

export const heroSlides: HeroSlide[] = [
  {
    tagline: 'The Blueprint for Safe Oilfield Solutions',
    taglineLines: ['The Blueprint for', 'Safe Oilfield Solutions'],
    support:
      'A premier multi-service provider with the experience and commitment to safety to reliably deliver every stage of your oilfield program.',
    image: hero1,
    alt: 'Aerial view of a drilling rig and lease pad laid out across open ground',
    objectPosition: '50% 52%',
    objectPositionMobile: '50% 50%',
  },
  {
    tagline: 'Driving Environmental Integrity',
    taglineLines: ['Driving', 'Environmental Integrity'],
    support:
      'Every project begins with strict adherence to our rigorous HSE guidelines — protecting our team, our clients, and the communities where we operate.',
    image: hero2,
    alt: 'Pumpjack and production tank battery silhouetted against a clear evening sky',
    objectPosition: '55% 55%',
    objectPositionMobile: '62% 55%',
  },
  {
    tagline: 'Proven History. Trusted Performance',
    taglineLines: ['Proven History.', 'Trusted Performance'],
    support:
      'Our longevity in the oil and gas industry is a testament to our customer service and technical capabilities.',
    image: hero3,
    alt: 'Gathering pipelines converging toward the horizon at sunset',
    objectPosition: '50% 50%',
    objectPositionMobile: '50% 45%',
  },
  {
    tagline: 'Setting the Standard for Oilfield Excellence',
    taglineLines: ['Setting the Standard', 'for Oilfield Excellence'],
    support:
      'Every project executed to the highest safety and quality standards in the industry — no matter your size, needs, or location.',
    image: hero4,
    alt: 'Pumpjack and gas flare operating on open prairie under an overcast sky',
    objectPosition: '45% 55%',
    objectPositionMobile: '38% 58%',
  },
  {
    tagline: 'Optimizing Energy Assets',
    taglineLines: ['Optimizing', 'Energy Assets'],
    support:
      'Servicing both upstream and midstream operations with deep familiarity for the technical and logistical demands of the energy sector.',
    image: hero5,
    alt: 'Row of crude oil storage tanks on a snow-covered midstream facility',
    objectPosition: '50% 62%',
    objectPositionMobile: '50% 68%',
  },
];
