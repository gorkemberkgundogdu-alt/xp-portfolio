import React from 'react';

interface ArtifactFrameProps {
  src: string;
  alt: string;
  titleTr?: string;
  titleEn?: string;
  badgeTr?: string;
  badgeEn?: string;
  captionTr?: string;
  captionEn?: string;
  locale?: 'tr' | 'en';
  className?: string;
  maxWidth?: string;
}

export const ArtifactFrame: React.FC<ArtifactFrameProps> = ({
  src,
  alt,
  titleTr,
  titleEn,
  badgeTr,
  badgeEn,
  captionTr,
  captionEn,
  locale = 'tr',
  className = '',
  maxWidth = 'max-w-md',
}) => {
  const title = locale === 'tr' ? titleTr : titleEn;
  const badge = locale === 'tr' ? badgeTr : badgeEn;
  const caption = locale === 'tr' ? captionTr : captionEn;

  return (
    <figure className={`w-full ${maxWidth} mx-auto my-4 select-text ${className}`}>
      {(badge || title) && (
        <div className="mb-2 flex items-center justify-between gap-2 px-1">
          {title && <span className="text-xs font-semibold text-slate-300 truncate">{title}</span>}
          {badge && (
            <span className="px-2 py-0.5 bg-purple-950/60 border border-purple-800/60 text-purple-300 text-[10px] font-mono uppercase tracking-wider rounded shrink-0">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="relative bg-[#0B0F19] border border-slate-800/90 rounded-xl overflow-hidden shadow-2xl p-1.5 transition-all duration-300 hover:border-purple-800/60">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-contain rounded-lg block select-none"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-[11px] text-slate-400 font-sans leading-relaxed text-center px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
