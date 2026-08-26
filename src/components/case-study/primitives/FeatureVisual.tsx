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
  locale = 'tr',
}) => {
  return (
    <div className="w-full my-6 space-y-2">
      {(tagTr || tagEn) && (
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-purple-950/60 border border-purple-800/60 text-purple-300 text-[10px] font-mono uppercase tracking-wider rounded">
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
        captionTr={captionTr}
        captionEn={captionEn}
        locale={locale}
      />
    </div>
  );
};
