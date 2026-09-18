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
  primaryBrowserTitle?: string;
  secondarySlotId: string;
  secondaryTitleTr: string;
  secondaryTitleEn: string;
  secondarySrc?: string;
  secondaryAltTr?: string;
  secondaryAltEn?: string;
  secondaryBrowserUrl?: string;
  secondaryBrowserTitle?: string;
  captionTr?: string;
  captionEn?: string;
  theme?: 'purple' | 'lime';
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
  primaryBrowserTitle,
  secondarySlotId,
  secondaryTitleTr,
  secondaryTitleEn,
  secondarySrc,
  secondaryAltTr,
  secondaryAltEn,
  secondaryBrowserUrl,
  secondaryBrowserTitle,
  captionTr,
  captionEn,
  theme = 'purple',
  locale = 'tr',
}) => {
  const defaultUrl = theme === 'lime' ? 'studio.v1be.io' : 'app.operater.io';
  const secondaryBorderClass =
    theme === 'lime' ? 'border-lime-500/30' : 'border-purple-900/50';

  return (
    <div className="relative w-full max-w-full my-6 overflow-hidden">
      {/* Desktop Overlapping / Mobile Stacked Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
        {/* Dominant Primary Screenshot Slot (65-70% width on desktop) */}
        <div className="lg:col-span-8 z-10 w-full min-w-0">
          <PlaceholderSlot
            id={primarySlotId}
            nameTr={primaryTitleTr}
            nameEn={primaryTitleEn}
            src={primarySrc}
            altTr={primaryAltTr}
            altEn={primaryAltEn}
            browserUrl={primaryBrowserUrl || defaultUrl}
            browserTitle={primaryBrowserTitle}
            locale={locale}
            theme={theme}
          />
        </div>

        {/* Secondary Overlapping / Supporting Screenshot Slot (35-40% width on desktop) */}
        <div className="lg:col-span-4 lg:-ml-12 z-20 w-full min-w-0">
          <div className={`shadow-2xl border ${secondaryBorderClass} rounded-xl bg-[#0B0F19] p-1`}>
            <PlaceholderSlot
              id={secondarySlotId}
              nameTr={secondaryTitleTr}
              nameEn={secondaryTitleEn}
              src={secondarySrc}
              altTr={secondaryAltTr}
              altEn={secondaryAltEn}
              browserUrl={secondaryBrowserUrl || defaultUrl}
              browserTitle={secondaryBrowserTitle}
              locale={locale}
              theme={theme}
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
