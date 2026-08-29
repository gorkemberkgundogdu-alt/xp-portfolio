import React, { useEffect, useRef } from 'react';
import { useWindowStore } from '../../stores/windowStore';

interface TourStepData {
  stepNumber: number;
  titleTr: string;
  titleEn: string;
  bodyTr: string;
  bodyEn: string;
}

const TOUR_STEPS: TourStepData[] = [
  {
    stepNumber: 1,
    titleTr: 'Masaüstü senin.',
    titleEn: 'The desktop is yours.',
    bodyTr:
      'Uygulamaları açmak için ikonlara çift tıkla. Klavyeyle seçip Enter veya Space de kullanabilirsin.',
    bodyEn:
      'Double-click an icon to open it. You can also select it with the keyboard and use Enter or Space.',
  },
  {
    stepNumber: 2,
    titleTr: 'Her şey masaüstünde değil.',
    titleEn: 'Not everything lives on the desktop.',
    bodyTr:
      'Projeler, CV, iletişim ve diğer alanlara Start menüsünden de ulaşabilirsin.',
    bodyEn:
      'You can also reach projects, CV, contact and other areas from the Start menu.',
  },
  {
    stepNumber: 3,
    titleTr: 'Dili buradan değiştirebilirsin.',
    titleEn: 'Switch language here.',
    bodyTr:
      'Portfolyonun Türkçe ve İngilizce sürümleri arasında geçiş burada.',
    bodyEn:
      'Use this control to move between the Turkish and English versions of the portfolio.',
  },
  {
    stepNumber: 4,
    titleTr: 'Pencereler birlikte çalışıyor.',
    titleEn: 'Windows work together.',
    bodyTr:
      'Birden fazla pencere açabilir, taşıyabilir, küçültebilir ve aralarında geçiş yapabilirsin.',
    bodyEn:
      'You can open multiple windows, move or minimize them, and switch between them.',
  },
];

export const DesktopTourBalloon: React.FC = () => {
  const isTourOpen = useWindowStore((state) => state.isTourOpen);
  const tourStep = useWindowStore((state) => state.tourStep);
  const closeTour = useWindowStore((state) => state.closeTour);
  const nextTourStep = useWindowStore((state) => state.nextTourStep);
  const prevTourStep = useWindowStore((state) => state.prevTourStep);
  const language = useWindowStore((state) => state.language);

  const containerRef = useRef<HTMLDivElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const currentStepData = TOUR_STEPS.find((s) => s.stepNumber === tourStep) || TOUR_STEPS[0];

  // Keyboard navigation: Escape exits and marks completed
  useEffect(() => {
    if (!isTourOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeTour(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTourOpen, closeTour]);

  // Focus primary action when step changes
  useEffect(() => {
    if (isTourOpen && nextBtnRef.current) {
      nextBtnRef.current.focus();
    }
  }, [isTourOpen, tourStep]);

  if (!isTourOpen) return null;

  // Step-specific positioning & tail styling
  const getStepPositionClasses = () => {
    switch (tourStep) {
      case 1:
        // Desktop icons: placed to the right of the icon column
        return 'left-[140px] top-[40px]';
      case 2:
        // Start button: placed just above the Start button on bottom-left
        return 'left-[12px] bottom-[42px]';
      case 3:
        // Language toggle: placed just above the system tray toggle on bottom-right
        return 'right-[40px] sm:right-[60px] bottom-[42px]';
      case 4:
        // Windows/Taskbar: placed above the open taskbar window switching area
        return 'left-[220px] sm:left-[300px] bottom-[44px]';
      default:
        return 'left-[140px] top-[40px]';
    }
  };

  const renderTail = () => {
    switch (tourStep) {
      case 1:
        // Tail pointing left
        return (
          <div
            className="absolute top-6 -left-2 w-3.5 h-3.5 bg-[#FFFFE1] border-l border-b border-black rotate-45 shadow-xs"
            aria-hidden="true"
          />
        );
      case 2:
        // Tail pointing down-left toward Start button
        return (
          <div
            className="absolute -bottom-2 left-6 w-3.5 h-3.5 bg-[#FFFFE1] border-r border-b border-black rotate-45 shadow-xs"
            aria-hidden="true"
          />
        );
      case 3:
        // Tail pointing down-right toward Language toggle
        return (
          <div
            className="absolute -bottom-2 right-8 w-3.5 h-3.5 bg-[#FFFFE1] border-r border-b border-black rotate-45 shadow-xs"
            aria-hidden="true"
          />
        );
      case 4:
        // Tail pointing down toward Taskbar windows
        return (
          <div
            className="absolute -bottom-2 left-10 w-3.5 h-3.5 bg-[#FFFFE1] border-r border-b border-black rotate-45 shadow-xs"
            aria-hidden="true"
          />
        );
      default:
        return null;
    }
  };

  return (
    <aside
      ref={containerRef}
      role="dialog"
      aria-modal="false"
      aria-label={
        language === 'tr'
          ? `Masaüstü İpucu ${tourStep} / 4: ${currentStepData.titleTr}`
          : `Desktop Hint ${tourStep} / 4: ${currentStepData.titleEn}`
      }
      className={`fixed z-[10000] pointer-events-auto w-[310px] sm:w-[340px] font-sans select-none drop-shadow-2xl animate-in fade-in zoom-in-95 duration-150 ${getStepPositionClasses()}`}
    >
      {/* Classic Windows XP Help Balloon */}
      <div className="relative bg-[#FFFFE1] text-[#000000] border border-black rounded-md p-3.5 shadow-2xl">
        {renderTail()}

        {/* Header Bar */}
        <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5 min-w-0">
            {/* XP Blue Info Circle */}
            <span
              className="w-4 h-4 rounded-full bg-[#0055EA] text-white text-[10px] font-bold flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              i
            </span>
            <h3 className="font-bold text-[12px] sm:text-[13px] text-[#003399] truncate m-0 p-0 leading-tight">
              {language === 'tr' ? currentStepData.titleTr : currentStepData.titleEn}
            </h3>
          </div>

          {/* Close 'X' button */}
          <button
            type="button"
            onClick={() => closeTour(true)}
            aria-label={language === 'tr' ? 'İpuçlarını kapat' : 'Close hints'}
            className="w-4 h-4 rounded hover:bg-black/10 text-slate-700 hover:text-black flex items-center justify-center text-xs font-bold transition-colors cursor-pointer shrink-0 focus:outline-none focus:ring-1 focus:ring-[#0055EA]"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="text-[11px] sm:text-[12px] leading-relaxed text-[#222222] font-sans">
          <p className="m-0">
            {language === 'tr' ? currentStepData.bodyTr : currentStepData.bodyEn}
          </p>
        </div>

        {/* Footer Bar: Counter & Navigation Buttons */}
        <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-xs">
          {/* Left: Skip Link */}
          <button
            type="button"
            onClick={() => closeTour(true)}
            className="text-[11px] text-slate-600 hover:text-black hover:underline cursor-pointer bg-transparent border-0 p-0 focus:outline-none focus:ring-1 focus:ring-[#0055EA]"
          >
            {language === 'tr' ? 'İpuçlarını geç' : 'Skip hints'}
          </button>

          {/* Right: Step Counter & Back / Next Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-slate-500 mr-0.5">
              {tourStep} / 4
            </span>

            {tourStep > 1 && (
              <button
                type="button"
                onClick={prevTourStep}
                className="px-2.5 py-0.5 bg-[#ECE9D8] hover:bg-[#F5F4EE] active:bg-[#DCD8CA] border border-[#716F64] rounded text-[11px] font-semibold text-slate-800 shadow-2xs cursor-pointer transition-colors focus:outline-none focus:ring-1 focus:ring-[#0055EA]"
              >
                {language === 'tr' ? 'Geri' : 'Back'}
              </button>
            )}

            {tourStep < 4 ? (
              <button
                ref={nextBtnRef}
                type="button"
                onClick={nextTourStep}
                className="px-3 py-0.5 bg-[#ECE9D8] hover:bg-[#F5F4EE] active:bg-[#DCD8CA] border border-[#716F64] rounded text-[11px] font-bold text-slate-900 shadow-2xs cursor-pointer transition-colors focus:outline-none focus:ring-1 focus:ring-[#0055EA]"
              >
                {language === 'tr' ? 'Sonraki' : 'Next'}
              </button>
            ) : (
              <button
                ref={nextBtnRef}
                type="button"
                onClick={() => closeTour(true)}
                className="px-3 py-0.5 bg-[#0055EA] hover:bg-[#0041C4] active:bg-[#003399] text-white border border-[#003399] rounded text-[11px] font-bold shadow-2xs cursor-pointer transition-colors focus:outline-none focus:ring-1 focus:ring-white"
              >
                {language === 'tr' ? 'Anladım' : 'Got it'}
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
