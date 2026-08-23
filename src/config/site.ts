/**
 * Single Source of Truth Configuration for Görkem Berk Gündoğdu Portfolio
 *
 * NOTE: Planned production domain is 'https://gorkemberkgundogdu.com'.
 * If the domain changes or is confirmed upon purchase, update it ONLY here.
 */

export const SITE_CONFIG = {
  // Planned production domain (single source of truth)
  domain: 'https://gorkemberkgundogdu.com',
  name: 'Görkem Berk Gündoğdu',
  author: 'Görkem Berk Gündoğdu',
  titleTr: 'Görkem Berk Gündoğdu — UI/UX Designer & Front-End Builder | Windows XP Portfolio',
  titleEn: 'Görkem Berk Gündoğdu — UI/UX Designer & Front-End Builder | Windows XP Portfolio',
  descriptionTr:
    'Görkem Berk Gündoğdu retro Windows XP portfolyosu. B2B SaaS, Operater.io, v1be.io, ürün arayüzleri ve modern web deneyimleri.',
  descriptionEn:
    'Görkem Berk Gündoğdu retro Windows XP portfolio. B2B SaaS, Operater.io, v1be.io, product interfaces, and modern frontend web engineering.',
  defaultLocale: 'tr',
  locales: ['tr', 'en'] as const,
  social: {
    linkedin: 'https://www.linkedin.com/in/gorkemberkgundogdu/',
    github: 'https://github.com/gorkemberkgundogdu-alt',
    email: 'gorkemberkgundogdu@gmail.com',
    whatsapp: '+90 505 502 97 63',
    whatsappUrl: 'https://wa.me/905055029763',
    cvPath: '/assets/Gorkem_Berk_Gundogdu_CV_2026.pdf',
  },
};

export type Locale = (typeof SITE_CONFIG.locales)[number];

/**
 * Generate absolute canonical URL
 */
export function getAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_CONFIG.domain}${cleanPath}`;
}
