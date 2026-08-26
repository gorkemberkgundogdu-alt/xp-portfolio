import React, { useState, useEffect } from 'react';

interface XpNotificationBalloonProps {
  locale: 'tr' | 'en';
}

export const XpNotificationBalloon: React.FC<XpNotificationBalloonProps> = ({ locale }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 1.2s delay if not dismissed in this session
    const isDismissed = sessionStorage.getItem('xp_hint_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('xp_hint_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label={locale === 'tr' ? 'Sistem Bildirimi' : 'System Notification'}
      className="fixed z-[9999] animate-in fade-in slide-in-from-bottom-3 duration-300 pointer-events-auto
        /* Desktop: Bottom right, above taskbar */
        right-3 sm:right-6 bottom-10 sm:bottom-12 max-w-[340px] sm:max-w-[380px] w-[calc(100vw-24px)]
        /* Typography & Filter */
        font-sans select-none drop-shadow-xl"
    >
      {/* Classic Windows XP Balloon Bubble */}
      <div className="relative bg-[#FFFFE1] text-[#000000] border border-[#000000] rounded-md p-3 sm:p-3.5 shadow-2xl">
        {/* Balloon speech indicator / tail on desktop (bottom right pointing down-right toward tray) */}
        <div
          className="hidden sm:block absolute -bottom-2 right-8 w-4 h-4 bg-[#FFFFE1] border-r border-b border-[#000000] rotate-45"
          aria-hidden="true"
        />

        {/* Header Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5 min-w-0">
            {/* XP Blue Info Icon Circle */}
            <span
              className="w-4 h-4 rounded-full bg-[#0055EA] text-white text-[10px] font-bold flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              i
            </span>
            <span className="font-bold text-[12px] text-[#003399] truncate">
              {locale === 'tr' ? 'Portfolyo Geliştirme Notu' : 'Portfolio Development Note'}
            </span>
          </div>

          {/* Close 'X' button */}
          <button
            type="button"
            onClick={handleDismiss}
            aria-label={locale === 'tr' ? 'Bildirimi kapat' : 'Close notification'}
            className="w-4 h-4 rounded hover:bg-black/10 text-slate-700 hover:text-black flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="text-[11px] sm:text-[12px] leading-relaxed text-[#222222]">
          {locale === 'tr' ? (
            <p>
              İçerik, SEO ve GEO kod mimarisi tamamlanmış olup; makaleler, vaka çalışmaları ve görsel geliştirmeler aşamalı olarak eklenmeye devam etmektedir.
            </p>
          ) : (
            <p>
              Content, SEO, and GEO code architecture is fully completed. Copywriting polishing and visual case studies are being progressively published.
            </p>
          )}
        </div>

        {/* Optional Action / Acknowledgement Link */}
        <div className="mt-2.5 pt-1.5 border-t border-black/5 flex items-center justify-between text-[10px] text-slate-500">
          <span>Windows XP Service Pack 3</span>
          <button
            type="button"
            onClick={handleDismiss}
            className="text-[#0055EA] hover:underline font-semibold cursor-pointer"
          >
            {locale === 'tr' ? 'Tamam / Anladım' : 'Got it'}
          </button>
        </div>
      </div>
    </aside>
  );
};
