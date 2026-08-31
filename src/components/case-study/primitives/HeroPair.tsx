import React from 'react';
import { PlaceholderSlot } from './PlaceholderSlot';

export interface HeroPairProps {
  primarySlotId: string;
  primaryTitleTr: string;
  primaryTitleEn: string;
  primarySrc?: string;
  primaryAltTr?: string;
  primaryAltEn?: string;
  primaryBrowserUrl?: string;
  secondarySlotId: string;
  secondaryTitleTr: string;
  secondaryTitleEn: string;
  secondarySrc?: string;
  secondaryAltTr?: string;
  secondaryAltEn?: string;
  secondaryBrowserUrl?: string;
  captionTr?: string;
  captionEn?: string;
  locale?: 'tr' | 'en';
}

export const HeroPair: React.FC<HeroPairProps> = ({
  primarySlotId,
  primaryTitleTr,
  primaryTitleEn,
  primarySrc,
  primaryAltTr,
  primaryAltEn,
  primaryBrowserUrl,
  secondarySlotId,
  secondaryTitleTr,
  secondaryTitleEn,
  secondarySrc,
  secondaryAltTr,
  secondaryAltEn,
  secondaryBrowserUrl,
  captionTr,
  captionEn,
  locale = 'tr',
}) => {
  return (
    <div className="relative w-full my-6">
      {/* Desktop Overlapping / Mobile Stacked Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
        {/* Dominant Primary Screenshot Slot (65-70% width on desktop) */}
        <div className="lg:col-span-8 z-10">
          <PlaceholderSlot
            id={primarySlotId}
            nameTr={primaryTitleTr}
            nameEn={primaryTitleEn}
            src={primarySrc}
            altTr={primaryAltTr}
            altEn={primaryAltEn}
            browserUrl={primaryBrowserUrl || 'app.operater.io'}
            locale={locale}
          />
        </div>

        {/* Secondary Overlapping / Supporting Screenshot Slot (35-40% width on desktop) */}
        <div className="lg:col-span-4 lg:-ml-12 z-20">
          <div className="shadow-2xl border border-purple-900/50 rounded-xl bg-[#0B0F19] p-1">
            <PlaceholderSlot
              id={secondarySlotId}
              nameTr={secondaryTitleTr}
              nameEn={secondaryTitleEn}
              src={secondarySrc}
              altTr={secondaryAltTr}
              altEn={secondaryAltEn}
              browserUrl={secondaryBrowserUrl || 'app.operater.io'}
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
