import React from 'react';

export interface PlaceholderSlotProps {
  id: string;
  nameTr: string;
  nameEn: string;
  src?: string; // Path to real screenshot
  altTr?: string;
  altEn?: string;
  aspectRatio?: string; // e.g. '16/10', '16/9', '4/3', '1/1', '21/9'
  minHeight?: string; // e.g. '280px', '360px', '420px'
  maxHeight?: string;
  className?: string;
  browserFrame?: boolean;
  browserUrl?: string;
  captionTr?: string;
  captionEn?: string;
  locale?: 'tr' | 'en';
}

export const PlaceholderSlot: React.FC<PlaceholderSlotProps> = ({
  id,
  nameTr,
  nameEn,
  src,
  altTr,
  altEn,
  aspectRatio,
  minHeight,
  maxHeight,
  className = '',
  browserFrame = true,
  browserUrl = 'app.operater.io',
  captionTr,
  captionEn,
  locale = 'tr',
}) => {
  const altText = locale === 'tr' ? (altTr || nameTr) : (altEn || nameEn);

  return (
    <figure className={`w-full my-3 sm:my-4 group ${className}`}>
      <div
        className="w-full bg-[#0F172A] border border-slate-700/70 rounded-lg overflow-hidden shadow-md transition-all flex flex-col"
        style={{ minHeight, maxHeight }}
      >
        {/* Optional Clean Dark Window / Browser Bar */}
        {browserFrame && (
          <div className="flex items-center justify-between px-3 py-2 bg-[#1E293B] border-b border-slate-700/60 select-none text-[11px] shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
            </div>
            <div className="bg-[#0F172A]/90 border border-slate-700/50 rounded px-2.5 py-0.5 text-slate-400 font-mono text-[10px] truncate max-w-[200px] sm:max-w-xs">
              https://{browserUrl}
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              {browserUrl ? browserUrl.replace(/^https?:\/\//, '').split('/')[0] : (src ? 'Operater.io' : `Slot: ${id}`)}
            </div>
          </div>
        )}

        {/* Real Screenshot or Fallback Placeholder Slot */}
        {src ? (
          <div className="w-full relative bg-[#090D16] flex items-center justify-center overflow-hidden">
            <img
              src={src}
              alt={altText}
              loading="lazy"
              className="w-full h-auto object-contain block select-none"
              style={{ maxHeight }}
            />
          </div>
        ) : (
          <div
            className="flex-1 w-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0F172A] to-[#0B0F19] text-center"
            style={{ aspectRatio: aspectRatio || '16/10', minHeight: minHeight || '240px' }}
          >
            {/* Subtle grid pattern background */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            <div className="relative z-10 space-y-2 max-w-md px-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-950/60 border border-purple-800/50 rounded text-purple-300 text-[10px] font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>{id}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-300">
                {locale === 'tr' ? nameTr : nameEn}
              </h4>
              <p className="text-[11px] text-slate-500 font-mono">
                [Gerçek ekran görüntüsü sonraki adımda yerleştirilecek]
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Optional Accessible Caption */}
      {(captionTr || captionEn) && (
        <figcaption className="mt-2 text-[11px] sm:text-xs text-slate-400 text-center font-sans leading-relaxed">
          {locale === 'tr' ? captionTr : captionEn}
        </figcaption>
      )}
    </figure>
  );
};
