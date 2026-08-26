import React from 'react';
import { PlaceholderSlot } from './PlaceholderSlot';

export interface DetailCropProps {
  slotId: string;
  titleTr: string;
  titleEn: string;
  src?: string;
  altTr?: string;
  altEn?: string;
  captionTr?: string;
  captionEn?: string;
  badgeTr?: string;
  badgeEn?: string;
  aspectRatio?: string;
  locale?: 'tr' | 'en';
}

export const DetailCrop: React.FC<DetailCropProps> = ({
  slotId,
  titleTr,
  titleEn,
  src,
  altTr,
  altEn,
  captionTr,
  captionEn,
  badgeTr = 'Detay İnceleme',
  badgeEn = 'Detail Crop',
  aspectRatio = '21/9',
  locale = 'tr',
}) => {
  return (
    <div className="w-full my-5 space-y-2">
      <div className="flex items-center gap-2">
        <span className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-purple-300 text-[10px] font-mono uppercase tracking-wider rounded">
          🔍 {locale === 'tr' ? badgeTr : badgeEn}
        </span>
      </div>
      <PlaceholderSlot
        id={slotId}
        nameTr={titleTr}
        nameEn={titleEn}
        src={src}
        altTr={altTr}
        altEn={altEn}
        aspectRatio={aspectRatio}
        captionTr={captionTr}
        captionEn={captionEn}
        locale={locale}
      />
    </div>
  );
};
