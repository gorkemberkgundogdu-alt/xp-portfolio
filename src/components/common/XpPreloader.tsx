import React, { useEffect, useState } from 'react';
import { XpHourglass } from './XpHourglass';

interface XpPreloaderProps {
  locale?: 'tr' | 'en';
  isReady?: boolean;
  onDismiss?: () => void;
}

export const XpPreloader: React.FC<XpPreloaderProps> = ({
  locale = 'tr',
  isReady = false,
  onDismiss,
}) => {
  const [visible, setVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // 1. Enforce a small minimum display time (~500ms) to prevent jarring visual flash
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 500);

    // 2. Safety timeout (~2500ms) so the loader never traps the user
    const safetyTimer = setTimeout(() => {
      handleDismiss();
    }, 2500);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(safetyTimer);
    };
  }, []);

  // When both isReady and minTimeElapsed are true, trigger smooth dismissal
  useEffect(() => {
    if (isReady && minTimeElapsed && !isFadingOut) {
      handleDismiss();
    }
  }, [isReady, minTimeElapsed, isFadingOut]);

  const handleDismiss = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 220);
  };

  if (!visible) return null;

  const titleText = locale === 'tr' ? 'Lütfen bekleyin...' : 'Please wait...';
  const headingText = locale === 'tr' ? 'Deneyim yükleniyor...' : 'Loading experience...';
  const subText = locale === 'tr' ? 'Lütfen bekleyin.' : 'Just a moment please.';

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`${headingText} ${subText}`}
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 select-none transition-opacity duration-200 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 35%, #76A9F7 0%, #3884F4 40%, #1557CB 85%, #0B398A 100%)
        `,
      }}
    >
      {/* Bliss Rolling Hills Illusion Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90" aria-hidden="true">
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)' }}
        />
        <div
          className="absolute -bottom-16 -left-20 w-[120vw] h-[55vh] rounded-[50%]"
          style={{
            background: 'linear-gradient(135deg, #74BA24 0%, #4E9512 60%, #387309 100%)',
            transform: 'rotate(-4deg)',
          }}
        />
        <div
          className="absolute -bottom-24 -right-20 w-[110vw] h-[50vh] rounded-[45%]"
          style={{
            background: 'linear-gradient(120deg, #87CF2E 0%, #5EA916 50%, #3B7E0A 100%)',
            transform: 'rotate(3deg)',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
          }}
        />
      </div>

      {/* Centered Windows XP Preloader Dialog */}
      <div
        className="relative z-10 w-full max-w-[420px] bg-[#ECE9D8] rounded-t-lg rounded-b-[3px] border-2 border-[#0055EA] shadow-2xl overflow-hidden flex flex-col font-sans"
      >
        {/* Titlebar */}
        <div className="h-7 bg-gradient-to-r from-[#0058EE] via-[#2F82FF] to-[#0055EA] px-2 flex items-center justify-between text-white shrink-0">
          <span className="font-bold text-xs truncate drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">
            {titleText}
          </span>
          <button
            type="button"
            onClick={handleDismiss}
            className="w-4 h-4 bg-[#D9381E] hover:bg-[#b5260f] border border-white/60 rounded-xs flex items-center justify-center text-[10px] font-bold text-white leading-none cursor-pointer"
            aria-label="Kapat / Close"
          >
            ✕
          </button>
        </div>

        {/* Dialog Body */}
        <div className="p-4 sm:p-5 flex items-center gap-4 bg-[#ECE9D8] text-slate-800">
          {/* Animated XP Hourglass */}
          <div className="shrink-0 flex items-center justify-center">
            <XpHourglass size={42} />
          </div>

          {/* Text & Segmented Progress Bar */}
          <div className="flex-1 min-w-0 space-y-1.5">
            <div className="font-bold text-[13px] text-slate-900 leading-tight">
              {headingText}
            </div>
            <div className="text-[11px] text-slate-600">
              {subText}
            </div>

            {/* Authentic XP Segmented Progress Bar */}
            <div className="xp-progress-track h-4 w-full mt-2.5 p-[1px]">
              <div className="xp-progress-bar-train">
                <div className="xp-progress-block" />
                <div className="xp-progress-block" />
                <div className="xp-progress-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
