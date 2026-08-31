import { PROJECTS_DATA } from '../data/portfolioData';

export type Locale = 'tr' | 'en';

/**
 * Set of valid project slugs defined in portfolioData
 */
export const VALID_PROJECT_SLUGS: ReadonlySet<string> = new Set(
  PROJECTS_DATA.map((project) => project.slug)
);

/**
 * Checks if a given slug exists in PROJECTS_DATA
 */
export function isValidProjectSlug(slug: string | null | undefined): slug is string {
  if (!slug) return false;
  return VALID_PROJECT_SLUGS.has(slug);
}

/**
 * Returns the canonical static URL for a project case study
 * TR: /projeler/[slug]/
 * EN: /en/projects/[slug]/
 */
export function getProjectUrl(slug: string, locale: Locale = 'tr'): string {
  return locale === 'en' ? `/en/projects/${slug}/` : `/projeler/${slug}/`;
}

/**
 * Returns the canonical root URL for a given locale
 * TR: /
 * EN: /en/
 */
export function getLocaleRootUrl(locale: Locale = 'tr'): string {
  return locale === 'en' ? '/en/' : '/';
}

/**
 * Parses a pathname and returns the project slug and locale if it matches a project route
 */
export function parseProjectRoute(pathname: string): { slug: string; locale: Locale } | null {
  if (!pathname) return null;
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;

  const trMatch = normalized.match(/^\/projeler\/([a-zA-Z0-9_-]+)\/$/);
  if (trMatch && isValidProjectSlug(trMatch[1])) {
    return { slug: trMatch[1], locale: 'tr' };
  }

  const enMatch = normalized.match(/^\/en\/projects\/([a-zA-Z0-9_-]+)\/$/);
  if (enMatch && isValidProjectSlug(enMatch[1])) {
    return { slug: enMatch[1], locale: 'en' };
  }

  return null;
}

/**
 * Checks if the pathname is the root of the site for either TR or EN
 */
export function isLocaleRoot(pathname: string): boolean {
  if (!pathname) return false;
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return normalized === '/' || normalized === '/en/';
}

/**
 * Checks if current pathname is a project route (for project close/exit checks)
 */
export function isProjectRoute(pathname: string): boolean {
  return parseProjectRoute(pathname) !== null;
}

/**
 * Client-side pushState to a project URL without triggering page reload
 */
export function pushProjectUrl(slug: string, locale: Locale = 'tr'): void {
  if (typeof window === 'undefined') return;
  if (!isValidProjectSlug(slug)) return;

  const targetPath = getProjectUrl(slug, locale);
  if (window.location.pathname === targetPath) return;

  window.history.pushState({ type: 'project', slug, locale }, '', targetPath);
}

/**
 * Client-side pushState to the locale root URL if leaving a project route
 */
export function pushLocaleRootUrl(locale: Locale = 'tr'): void {
  if (typeof window === 'undefined') return;

  const targetPath = getLocaleRootUrl(locale);
  if (window.location.pathname === targetPath) return;

  window.history.pushState({ type: 'root', locale }, '', targetPath);
}

/**
 * Language switch URL resolver that preserves active project case study
 */
export function getLanguageToggleUrl(
  currentPath: string,
  targetLocale: Locale,
  activeProjectSlug?: string | null
): string {
  const projectRoute = parseProjectRoute(currentPath);
  const effectiveSlug =
    projectRoute?.slug || (activeProjectSlug && isValidProjectSlug(activeProjectSlug) ? activeProjectSlug : null);

  if (effectiveSlug) {
    return getProjectUrl(effectiveSlug, targetLocale);
  }

  if (currentPath.startsWith('/makaleler/') || currentPath.startsWith('/en/articles/')) {
    return targetLocale === 'en'
      ? '/en/articles/ai-driven-ui-ux-design/'
      : '/makaleler/ai-ile-ui-ux-tasarimi/';
  }

  return getLocaleRootUrl(targetLocale);
}
