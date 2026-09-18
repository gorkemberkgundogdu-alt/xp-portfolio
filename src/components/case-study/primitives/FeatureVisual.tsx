import React from 'react';
import { PlaceholderSlot } from './PlaceholderSlot';

export interface FeatureVisualProps {
  slotId: string;
  titleTr: string;
  titleEn: string;
  src?: string;
  altTr?: string;
  altEn?: string;
  captionTr?: string;
  captionEn?: string;
  tagTr?: string;
  tagEn?: string;
  maxHeight?: string;
  browserUrl?: string;
  browserTitle?: string;
  theme?: 'purple' | 'lime';
  locale?: 'tr' | 'en';
}

export const FeatureVisual: React.FC<FeatureVisualProps> = ({
  slotId,
  titleTr,
  titleEn,
  src,
  altTr,
  altEn,
  captionTr,
  captionEn,
  tagTr,
  tagEn,
  maxHeight,
  browserUrl,
  browserTitle,
  theme = 'purple',
  locale = 'tr',
}) => {
  return (
    <div className="w-full my-6 space-y-2">
      {(tagTr || tagEn) && (
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-0.5 border text-[10px] font-mono uppercase tracking-wider rounded ${
              theme === 'lime'
                ? 'bg-lime-950/60 border-lime-800/60 text-lime-300'
                : 'bg-purple-950/60 border-purple-800/60 text-purple-300'
            }`}
          >
            {locale === 'tr' ? tagTr : tagEn}
          </span>
        </div>
      )}
      <PlaceholderSlot
        id={slotId}
        nameTr={titleTr}
        nameEn={titleEn}
        src={src}
        altTr={altTr}
        altEn={altEn}
        maxHeight={maxHeight}
        browserUrl={browserUrl}
        browserTitle={browserTitle}
        captionTr={captionTr}
        captionEn={captionEn}
        theme={theme}
        locale={locale}
      />
    </div>
  );
};
