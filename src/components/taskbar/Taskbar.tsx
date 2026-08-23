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
  const activeProjectId = useWindowStore((state) => state.activeProjectId);

  const openWindowsList = Object.values(windows).filter((w) => w.isOpen);

  const getTargetLocaleUrl = (targetLocale: 'tr' | 'en') => {
    if (typeof window === 'undefined') return targetLocale === 'en' ? '/en/' : '/';
    const path = window.location.pathname;

    if (targetLocale === 'en') {
      if (path.startsWith('/projeler/')) {
        return path.replace('/projeler/', '/en/projects/');
      }
      if (path.startsWith('/makaleler/')) {
        return '/en/articles/ai-driven-ui-ux-design/';
      }
      if (activeWindowId === 'projects' && activeProjectId) {
        return `/en/projects/${activeProjectId}/`;
      }
      if (activeWindowId === 'browser') {
        return '/en/articles/ai-driven-ui-ux-design/';
      }
      return '/en/';
    } else {
      if (path.startsWith('/en/projects/')) {
        return path.replace('/en/projects/', '/projeler/');
      }
      if (path.startsWith('/en/articles/')) {
        return '/makaleler/ai-ile-ui-ux-tasarimi/';
      }
      if (activeWindowId === 'projects' && activeProjectId) {
        return `/projeler/${activeProjectId}/`;
      }
      if (activeWindowId === 'browser') {
        return '/makaleler/ai-ile-ui-ux-tasarimi/';
      }
      return '/';
    }
  };

  const handleLanguageToggle = () => {
    const nextLang = language === 'tr' ? 'en' : 'tr';
    const targetUrl = getTargetLocaleUrl(nextLang);
    window.location.href = targetUrl;
  };

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
            aria-expanded={isStartMenuOpen}
            aria-label="Başlat Menüsü"
            onClick={() => toggleStartMenu()}
            className="h-full px-3.5 xp-start-btn rounded-r-[10px] flex items-center gap-1.5 shadow-[2px_0_4px_rgba(0,0,0,0.3)] cursor-pointer text-white font-black italic tracking-wide text-[13px] group focus-visible:ring-2 focus-visible:ring-white"
          >
            {/* Windows Flag Icon */}
            <div className="w-4 h-4 grid grid-cols-2 gap-[1px] transform -rotate-12 group-hover:rotate-0 transition-transform">
              <div className="bg-[#EB3C00] rounded-tl-[2px]" />
              <div className="bg-[#4E9C00] rounded-tr-[2px]" />
              <div className="bg-[#007AEB] rounded-bl-[2px]" />
              <div className="bg-[#FAB800] rounded-br-[2px]" />
            </div>
            <span className="drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] font-sans">
              {language === 'tr' ? 'başlat' : 'start'}
            </span>
          </button>

          {/* Quick Launch Separator */}
          <div className="h-4 w-[1px] bg-[#0E51B5] mx-1 border-r border-[#3C91FF]" />

          {/* Quick Launch Icons */}
          <div className="flex items-center gap-0.5 px-1">
            <button
              type="button"
              title={language === 'tr' ? 'Masaüstünü Göster' : 'Show Desktop'}
              aria-label={language === 'tr' ? 'Masaüstünü Göster' : 'Show Desktop'}
              onClick={minimizeAll}
              className="p-1 hover:bg-[#1E52BF] rounded-[2px] transition-colors cursor-pointer"
            >
              <div className="w-3.5 h-3.5 bg-gradient-to-br from-blue-300 to-blue-600 border border-white/60 shadow-xs" />
            </button>
            <button
              type="button"
              title="Internet Explorer"
              aria-label="Internet Explorer"
              onClick={() => openWindow('browser')}
              className="p-0.5 hover:bg-[#1E52BF] rounded-[2px] transition-colors cursor-pointer"
            >
              <XpIcon name="ie" size={16} />
            </button>
            <button
              type="button"
              title="MSN Messenger"
              aria-label="MSN Messenger"
              onClick={() => openWindow('contact')}
              className="p-0.5 hover:bg-[#1E52BF] rounded-[2px] transition-colors cursor-pointer"
            >
              <XpIcon name="msn" size={16} />
            </button>
          </div>

          <div className="h-4 w-[1px] bg-[#0E51B5] mx-1 border-r border-[#3C91FF]" />

          {/* Open Windows Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-[calc(100vw-350px)] px-1">
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
          <a
            href={getTargetLocaleUrl(language === 'tr' ? 'en' : 'tr')}
            onClick={(e) => {
              e.preventDefault();
              handleLanguageToggle();
            }}
            title={language === 'tr' ? 'English (EN)' : 'Türkçe (TR)'}
            aria-label={language === 'tr' ? 'İngilizceye Geç' : 'Switch to Turkish'}
            className="px-1.5 py-0.5 bg-[#0C59B9] hover:bg-[#1E73DB] border border-[#3E98FA] rounded text-[10px] font-bold uppercase cursor-pointer text-white no-underline shadow-xs"
          >
            {language.toUpperCase()}
          </a>

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
