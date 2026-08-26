import React from 'react';
import { PlaceholderSlot } from './PlaceholderSlot';

export interface AnnotationItem {
  id: string;
  pinNumber: number;
  labelTr: string;
  labelEn: string;
  descriptionTr: string;
  descriptionEn: string;
}

export interface AnnotatedVisualProps {
  slotId: string;
  titleTr: string;
  titleEn: string;
  src?: string;
  altTr?: string;
  altEn?: string;
  captionTr?: string;
  captionEn?: string;
  annotations: AnnotationItem[];
  locale?: 'tr' | 'en';
}

export const AnnotatedVisual: React.FC<AnnotatedVisualProps> = ({
  slotId,
  titleTr,
  titleEn,
  src,
  altTr,
  altEn,
  captionTr,
  captionEn,
  annotations,
  locale = 'tr',
}) => {
  return (
    <div className="w-full my-6 space-y-4">
      {/* Visual Canvas Slot */}
      <PlaceholderSlot
        id={slotId}
        nameTr={titleTr}
        nameEn={titleEn}
        src={src}
        altTr={altTr}
        altEn={altEn}
        captionTr={captionTr}
        captionEn={captionEn}
        locale={locale}
      />

      {/* Structured Annotation Cards / Pointers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
        {annotations.map((ann) => (
          <div
            key={ann.id}
            className="p-3 bg-[#0F172A]/90 border border-slate-800 rounded-md space-y-1.5 shadow-xs"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-600/90 text-white font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                {ann.pinNumber}
              </span>
              <span className="text-xs font-semibold text-slate-200">
                {locale === 'tr' ? ann.labelTr : ann.labelEn}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {locale === 'tr' ? ann.descriptionTr : ann.descriptionEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
