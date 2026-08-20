import React from 'react';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import type { WindowState } from '../../types/window';

interface WindowHeaderProps {
  window: WindowState;
  isActive: boolean;
  isMobile?: boolean;
}

export const WindowHeader: React.FC<WindowHeaderProps> = ({ window, isActive, isMobile = false }) => {
  const language = useWindowStore((state) => state.language);
  const closeWindow = useWindowStore((state) => state.closeWindow);
  const minimizeWindow = useWindowStore((state) => state.minimizeWindow);
  const toggleMaximize = useWindowStore((state) => state.toggleMaximize);

  const title = language === 'en' && window.titleEn ? window.titleEn : window.title;

  return (
    <div
      className={`h-[30px] px-2 flex items-center justify-between select-none rounded-t-[6px] transition-colors duration-100 ${
        isActive ? 'xp-titlebar-active text-white' : 'xp-titlebar-inactive text-[#DCE6F8]'
      }`}
      onDoubleClick={() => {
        if (!isMobile && window.maximizable) {
          toggleMaximize(window.id);
        }
      }}
    >
      {/* Title & Icon */}
      <div className="flex items-center gap-1.5 min-w-0 flex-1 mr-2 pointer-events-none">
        <XpIcon name={window.icon} size={16} className="shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
        <span className="font-bold text-[12px] tracking-wide truncate leading-none">
          {title}
        </span>
      </div>

      {/* Control Buttons */}
      <div
        className="flex items-center gap-[3px] shrink-0"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimize Button */}
        {window.minimizable && !isMobile && (
          <button
            type="button"
            aria-label="Küçült"
            onClick={() => minimizeWindow(window.id)}
            className="xp-btn-minimize w-[21px] h-[21px] rounded-[3px] flex items-center justify-center cursor-pointer group"
          >
            <span className="w-[8px] h-[2px] bg-white group-hover:bg-white inline-block mt-[8px] shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
          </button>
        )}

        {/* Maximize / Restore Button */}
        {window.maximizable && !isMobile && (
          <button
            type="button"
            aria-label={window.isMaximized ? 'Önceki Boyut' : 'Ekranı Kapla'}
            onClick={() => toggleMaximize(window.id)}
            className="xp-btn-maximize w-[21px] h-[21px] rounded-[3px] flex items-center justify-center cursor-pointer"
          >
            {window.isMaximized ? (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="0.5" width="6" height="6" stroke="white" strokeWidth="1.2" fill="none" />
                <path d="M0.5 3.5V8.5H5.5" stroke="white" strokeWidth="1.2" fill="none" />
              </svg>
            ) : (
              <span className="w-[9px] h-[9px] border-[1.5px] border-white inline-block shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
            )}
          </button>
        )}

        {/* Close Button */}
        <button
          type="button"
          aria-label="Kapat"
          onClick={() => closeWindow(window.id)}
          className="xp-btn-close w-[21px] h-[21px] rounded-[3px] flex items-center justify-center cursor-pointer text-white font-bold text-[12px] leading-none"
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8 8M8 1L1 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};
