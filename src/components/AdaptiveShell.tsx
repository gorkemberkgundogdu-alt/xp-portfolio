import React, { useEffect, useState } from 'react';
import { Desktop } from './desktop/Desktop';
import { PropertiesDialog, type PropertiesTab } from './properties/PropertiesDialog';
import { XpPreloader } from './common/XpPreloader';
import { XpNotificationBalloon } from './common/XpNotificationBalloon';
import { useWindowStore } from '../stores/windowStore';
import type { WindowId } from '../types/window';
import { parseProjectRoute, isLocaleRoot } from '../utils/routes';

interface AdaptiveShellProps {
  currentLocale: 'tr' | 'en';
  initialWindow?: WindowId;
  initialProjectSlug?: string;
  initialArticleSlug?: string;
  initialPropertiesTab?: PropertiesTab;
}

export const AdaptiveShell: React.FC<AdaptiveShellProps> = ({
  currentLocale,
  initialWindow,
  initialProjectSlug,
  initialArticleSlug,
  initialPropertiesTab,
}) => {
  const [isPropertiesMode, setIsPropertiesMode] = useState<boolean | null>(null);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isPreloaderDismissed, setIsPreloaderDismissed] = useState(false);

  const setLanguage = useWindowStore((state) => state.setLanguage);
  const openWindow = useWindowStore((state) => state.openWindow);
  const focusWindow = useWindowStore((state) => state.focusWindow);
  const setActiveProjectId = useWindowStore((state) => state.setActiveProjectId);
  const setActiveArticleId = useWindowStore((state) => state.setActiveArticleId);
  const closeTour = useWindowStore((state) => state.closeTour);

  // Desktop Browser Back / Forward popstate synchronization
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = () => {
      const pathname = window.location.pathname;
      const projectRoute = parseProjectRoute(pathname);

      if (projectRoute) {
        setLanguage(projectRoute.locale);
        setActiveProjectId(projectRoute.slug);
        openWindow('projects');
        focusWindow('projects');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [setLanguage, setActiveProjectId, openWindow, focusWindow]);

  useEffect(() => {
    // Sync store language
    setLanguage(currentLocale);

    // Deep link initialization in desktop store
    if (initialProjectSlug) {
      setActiveProjectId(initialProjectSlug);
    }
    if (initialArticleSlug) {
      setActiveArticleId(initialArticleSlug);
    }
    if (initialWindow) {
      openWindow(initialWindow);
      focusWindow(initialWindow);
    }

    // Capability-aware device detection logic
    const checkMode = () => {
      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
      const hasFinePointer =
        window.matchMedia('(pointer: fine)').matches || window.matchMedia('(hover: hover)').matches;
      const isSmallViewport = window.innerWidth < 768;
      const isTabletUA =
        /iPad|Android(?!.*Mobile)|Tablet/i.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

      // Detection decision:
      // - Phones (< 768px) -> Properties
      // - Tablets (iPadOS, tablet UA, or coarse touch without fine pointer) -> Properties
      // - Touchscreen PC / Laptop (width >= 1024px, hasFinePointer / desktop OS) -> Desktop XP
      const useProperties =
        isSmallViewport ||
        isTabletUA ||
        (isTouchDevice && !hasFinePointer) ||
        (window.innerWidth < 1024 && !hasFinePointer);

      if (useProperties) {
        // Safely close desktop tour if switching into Properties mode
        closeTour(false);
      }

      setIsPropertiesMode(useProperties);
      setIsAppReady(true);
    };

    checkMode();
    window.addEventListener('resize', checkMode);
    return () => window.removeEventListener('resize', checkMode);
  }, [
    currentLocale,
    initialWindow,
    initialProjectSlug,
    initialArticleSlug,
    setLanguage,
    openWindow,
    focusWindow,
    setActiveProjectId,
    setActiveArticleId,
    closeTour,
  ]);

  return (
    <div className="relative w-full h-full">
      {/* XP Hourglass Preloader Overlay */}
      {!isPreloaderDismissed && (
        <XpPreloader
          locale={currentLocale}
          isReady={isAppReady}
          onDismiss={() => setIsPreloaderDismissed(true)}
        />
      )}

      {/* Main OS Interactive Shell */}
      {isPropertiesMode ? (
        <PropertiesDialog
          currentLocale={currentLocale}
          initialTab={
            initialPropertiesTab ||
            (initialProjectSlug ? 'projects' : initialArticleSlug ? 'articles' : 'general')
          }
          initialProjectSlug={initialProjectSlug}
          initialArticleSlug={initialArticleSlug}
        />
      ) : (
        <Desktop />
      )}

      {/* Temporary Notice Balloon (Desktop & Mobile Adaptive) */}
      <XpNotificationBalloon locale={currentLocale} />
    </div>
  );
};
