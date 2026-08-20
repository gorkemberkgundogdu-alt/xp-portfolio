import React, { useState } from 'react';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import type { WindowId } from '../../types/window';

interface DesktopIconProps {
  id: WindowId;
  label: string;
  labelEn?: string;
  icon: string;
  onClick?: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  label,
  labelEn,
  icon,
  onClick,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const openWindow = useWindowStore((state) => state.openWindow);
  const language = useWindowStore((state) => state.language);

  const displayLabel = language === 'en' && labelEn ? labelEn : label;

  const handleOpen = () => {
    if (onClick) {
      onClick();
    } else {
      openWindow(id);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsSelected(true);
        // On mobile single tap opens window
        if (window.innerWidth < 768) {
          handleOpen();
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        handleOpen();
      }}
      className={`group flex flex-col items-center justify-start w-[76px] p-1.5 rounded cursor-pointer select-none transition-all ${
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
