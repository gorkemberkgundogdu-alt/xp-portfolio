import React from 'react';

interface ProductFrameProps {
  src: string;
  alt: string;
  captionTr?: string;
  captionEn?: string;
  locale?: 'tr' | 'en';
  aspectRatio?: string;
  maxHeight?: string;
  className?: string;
  showMinimalBar?: boolean;
  barUrl?: string;
  theme?: 'purple' | 'lime';
}

export const ProductFrame: React.FC<ProductFrameProps> = ({
  src,
  alt,
  captionTr,
  captionEn,
  locale = 'tr',
  maxHeight,
  className = '',
  showMinimalBar = false,
  barUrl,
  theme = 'purple',
}) => {
  const caption = locale === 'tr' ? captionTr : captionEn;
  const displayBarUrl = barUrl || (theme === 'lime' ? 'studio.v1be.io' : 'app.operater.io');

  return (
    <figure className={`w-full my-6 select-text group ${className}`}>
      <div className="relative w-full bg-[#080C14] border border-slate-800/80 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700/90">
        {showMinimalBar && (
          <div className="flex items-center justify-between px-3.5 py-2 bg-[#0F172A]/90 border-b border-slate-800 select-none text-[11px] shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block" />
            </div>
            <div className="text-[10px] text-slate-400 font-mono">{displayBarUrl}</div>
            <div className="w-6" />
          </div>
        )}
        <div className="w-full flex items-center justify-center overflow-hidden">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto object-contain block select-none"
            style={{ maxHeight }}
          />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-[11px] sm:text-xs text-slate-400 font-sans leading-relaxed text-center sm:text-left px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
