import React from 'react';
import { PlaceholderSlot } from './PlaceholderSlot';

export interface FloatingPanelCompositionProps {
  baseSlotId: string;
  baseTitleTr: string;
  baseTitleEn: string;
  baseSrc?: string;
  baseAltTr?: string;
  baseAltEn?: string;
  floatingSlotId: string;
  floatingTitleTr: string;
  floatingTitleEn: string;
  floatingSrc?: string;
  floatingAltTr?: string;
  floatingAltEn?: string;
  captionTr?: string;
  captionEn?: string;
  locale?: 'tr' | 'en';
}

export const FloatingPanelComposition: React.FC<FloatingPanelCompositionProps> = ({
  baseSlotId,
  baseTitleTr,
  baseTitleEn,
  baseSrc,
  baseAltTr,
  baseAltEn,
  floatingSlotId,
  floatingTitleTr,
  floatingTitleEn,
  floatingSrc,
  floatingAltTr,
  floatingAltEn,
  captionTr,
  captionEn,
  locale = 'tr',
}) => {
  return (
    <div className="relative w-full my-6 space-y-2">
      <div className="relative">
        {/* Base Main Screen (Connect Tools - ~80-85% max desktop width) */}
        <div className="w-full lg:max-w-[85%] mx-auto">
          <PlaceholderSlot
            id={baseSlotId}
            nameTr={baseTitleTr}
            nameEn={baseTitleEn}
            src={baseSrc}
            altTr={baseAltTr}
            altEn={baseAltEn}
            locale={locale}
          />
        </div>

        {/* Floating Modal / Drawer Overlap (Stacked on mobile, floating on desktop) */}
        <div className="mt-3 lg:mt-0 lg:absolute lg:right-0 lg:bottom-12 lg:w-96 lg:shadow-2xl z-20">
          <div className="border border-purple-800/60 rounded-xl bg-[#0F172A]/95 p-1 backdrop-blur-xs shadow-2xl">
            <PlaceholderSlot
              id={floatingSlotId}
              nameTr={floatingTitleTr}
              nameEn={floatingTitleEn}
              src={floatingSrc}
              altTr={floatingAltTr}
              altEn={floatingAltEn}
              browserFrame={false}
              locale={locale}
            />
          </div>
        </div>
      </div>

      {(captionTr || captionEn) && (
        <p className="mt-2 text-[11px] sm:text-xs text-slate-400 text-center font-sans">
          {locale === 'tr' ? captionTr : captionEn}
        </p>
      )}
    </div>
  );
};
