import React from 'react';
import { XpIcon, type XpIconName } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import type { WindowId } from '../../types/window';

interface DesktopIconProps {
  id: WindowId;
  label: string;
  labelEn?: string;
  icon: XpIconName;
  onClick?: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  label,
  labelEn,
  icon,
  onClick,
}) => {
  const selectedIconId = useWindowStore((state) => state.selectedIconId);
  const setSelectedIconId = useWindowStore((state) => state.setSelectedIconId);
  const openWindow = useWindowStore((state) => state.openWindow);
  const language = useWindowStore((state) => state.language);

  const isSelected = selectedIconId === id;
  const displayLabel = language === 'en' && labelEn ? labelEn : label;

  const handleOpen = () => {
    if (onClick) {
      onClick();
    } else {
      openWindow(id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${displayLabel} (${language === 'en' ? 'Double click or press Enter to open' : 'Açmak için çift tıklayın veya Enter\'a basın'})`}
      aria-pressed={isSelected}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedIconId(id);
        // On mobile single tap opens window
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          handleOpen();
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        handleOpen();
      }}
      onKeyDown={handleKeyDown}
      className={`group flex flex-col items-center justify-start w-[78px] p-1.5 rounded cursor-pointer select-none transition-all outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 ${
        isSelected
          ? 'bg-[#0B61FE]/40 border border-[#0B61FE]/70'
          : 'hover:bg-white/15 border border-transparent'
      }`}
    >
      <div className="relative w-11 h-11 flex items-center justify-center filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        <XpIcon name={icon} size={38} />
      </div>
      <span
        className={`mt-1 text-[11px] font-sans text-center text-white leading-tight break-words px-1 rounded line-clamp-2 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.9)] ${
          isSelected ? 'bg-[#0A246A] text-white' : ''
        }`}
      >
        {displayLabel}
      </span>
    </div>
  );
};
