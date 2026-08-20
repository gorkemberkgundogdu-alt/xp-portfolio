import React, { useEffect, useState, memo } from 'react';
import { useWindowStore } from '../../stores/windowStore';
import { XpIcon } from '../common/XpIcon';
import { StartMenu } from './StartMenu';

// Isolated Clock Component to avoid re-rendering the whole taskbar every second
const SystemTrayClock: React.FC = memo(() => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-[11px] font-mono tracking-tight text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
      aria-label={`Saat ${time}`}
    >
      {time || '18:00'}
    </div>
  );
});

SystemTrayClock.displayName = 'SystemTrayClock';

export const Taskbar: React.FC = () => {
  const windows = useWindowStore((state) => state.windows);
  const activeWindowId = useWindowStore((state) => state.activeWindowId);
  const toggleMinimize = useWindowStore((state) => state.toggleMinimize);
  const minimizeAll = useWindowStore((state) => state.minimizeAll);
  const openWindow = useWindowStore((state) => state.openWindow);
  const isStartMenuOpen = useWindowStore((state) => state.isStartMenuOpen);
  const toggleStartMenu = useWindowStore((state) => state.toggleStartMenu);
  const language = useWindowStore((state) => state.language);
  const setLanguage = useWindowStore((state) => state.setLanguage);

  const openWindowsList = Object.values(windows).filter((w) => w.isOpen);

  return (
    <>
      <StartMenu />

      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed bottom-0 left-0 right-0 h-[30px] xp-taskbar-bg flex items-center justify-between z-50 select-none text-[11px] font-sans"
      >
        {/* Left: Start Button & Quick Launch */}
        <div className="flex items-center h-full">
          {/* Start Button */}
          <button
            type="button"
            aria-label="Başlat Menüsü"
            aria-expanded={isStartMenuOpen}
            onClick={() => toggleStartMenu()}
            className={`h-full px-3 xp-start-btn flex items-center gap-1.5 rounded-r-[10px] font-bold italic text-[13px] text-white cursor-pointer shadow-md transition-all ${
              isStartMenuOpen ? 'brightness-90' : ''
            }`}
          >
            {/* Windows Flag SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5.5L10 4.5V11.5H3V5.5Z" fill="#F25022" />
              <path d="M11 4.3L21 3V11.5H11V4.3Z" fill="#7FBA00" />
              <path d="M3 12.5H10V18.5L3 17.5V12.5Z" fill="#00A4EF" />
              <path d="M11 12.5H21V20L11 18.7V12.5Z" fill="#FFB900" />
            </svg>
            <span className="drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">
              {language === 'en' ? 'start' : 'başlat'}
            </span>
          </button>

          {/* Quick Launch separator & icons */}
          <div className="hidden sm:flex items-center h-full px-2 border-r border-[#153D94] border-l border-[#4B8BF5] gap-1">
            <button
              type="button"
              title="Masaüstünü Göster"
              aria-label="Masaüstünü Göster"
              onClick={() => minimizeAll()}
              className="p-1 hover:bg-white/20 rounded cursor-pointer"
            >
              <div className="w-3.5 h-3.5 border border-white bg-blue-300 rounded-[1px]" />
            </button>
            <button
              type="button"
              title="Internet Explorer"
              aria-label="Internet Explorer"
              onClick={() => openWindow('browser')}
              className="p-0.5 hover:bg-white/20 rounded cursor-pointer"
            >
              <XpIcon name="ie" size={16} />
            </button>
            <button
              type="button"
              title="MSN Messenger"
              aria-label="MSN Messenger"
              onClick={() => openWindow('contact')}
              className="p-0.5 hover:bg-white/20 rounded cursor-pointer"
            >
              <XpIcon name="msn" size={16} />
            </button>
          </div>

          {/* Open Windows Tabs */}
          <div className="flex items-center h-full px-1 gap-1 overflow-x-auto max-w-[calc(100vw-280px)]">
            {openWindowsList.map((win) => {
              const isActive = activeWindowId === win.id && !win.isMinimized;
              const title = language === 'en' && win.titleEn ? win.titleEn : win.title;

              return (
                <button
                  key={win.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => toggleMinimize(win.id)}
                  className={`h-[24px] min-w-[120px] max-w-[180px] px-2 rounded-[2px] flex items-center gap-1.5 cursor-pointer text-left truncate transition-colors ${
                    isActive
                      ? 'bg-[#1E52BF] text-white xp-taskbar-item font-semibold shadow-inner'
                      : 'bg-[#245EDC] hover:bg-[#3471F5] text-white/90 shadow-[inset_1px_1px_0_rgba(255,255,255,0.2)]'
                  }`}
                >
                  <XpIcon name={win.icon} size={14} className="shrink-0" />
                  <span className="truncate text-[11px]">{title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: System Tray */}
        <div className="h-full px-3 xp-tray-bg flex items-center gap-3 border-l border-[#0F77D3] shrink-0 text-white">
          {/* Language Toggle (TR / EN) */}
          <button
            type="button"
            title="Dili Değiştir / Change Language"
            aria-label="Dili Değiştir"
            onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
            className="px-1.5 py-0.5 bg-[#0C59B9] hover:bg-[#1E73DB] border border-[#3E98FA] rounded text-[10px] font-bold uppercase cursor-pointer"
          >
            {language.toUpperCase()}
          </button>

          {/* Volume Icon */}
          <span className="text-[12px] opacity-90 hidden sm:inline" title="Ses">
            🔊
          </span>

          {/* Real-time Clock */}
          <SystemTrayClock />
        </div>
      </div>
    </>
  );
};
