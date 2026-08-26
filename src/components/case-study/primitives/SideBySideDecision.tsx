import React from 'react';
import { PlaceholderSlot } from './PlaceholderSlot';

export interface SideBySideDecisionProps {
  problemTr: string;
  problemEn: string;
  decisionTr: string;
  decisionEn: string;
  tradeoffTr?: string;
  tradeoffEn?: string;
  slotId: string;
  slotTitleTr: string;
  slotTitleEn: string;
  locale?: 'tr' | 'en';
}

export const SideBySideDecision: React.FC<SideBySideDecisionProps> = ({
  problemTr,
  problemEn,
  decisionTr,
  decisionEn,
  tradeoffTr,
  tradeoffEn,
  slotId,
  slotTitleTr,
  slotTitleEn,
  locale = 'tr',
}) => {
  return (
    <div className="w-full my-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
      {/* Left: Text Reasoning / Tradeoff Block */}
      <div className="lg:col-span-5 space-y-3.5">
        {/* Problem Card */}
        <div className="p-3.5 bg-[#0F172A] border border-slate-800 rounded-lg space-y-1.5">
          <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
            {locale === 'tr' ? 'Karşılaşılan Problem' : 'Problem Encountered'}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {locale === 'tr' ? problemTr : problemEn}
          </p>
        </div>

        {/* Decision & Logic Card */}
        <div className="p-3.5 bg-purple-950/20 border border-purple-800/40 rounded-lg space-y-1.5">
          <div className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider">
            {locale === 'tr' ? 'Tasarım & Ürün Kararı' : 'UX & Product Decision'}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {locale === 'tr' ? decisionTr : decisionEn}
          </p>
        </div>

        {/* Tradeoff Consideration (if any) */}
        {(tradeoffTr || tradeoffEn) && (
          <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg space-y-1">
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              {locale === 'tr' ? 'Değerlendirilen Ödünleşim (Tradeoff)' : 'Considered Tradeoff'}
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {locale === 'tr' ? tradeoffTr : tradeoffEn}
            </p>
          </div>
        )}
      </div>

      {/* Right: Visual Evidence Screenshot Slot */}
      <div className="lg:col-span-7">
        <PlaceholderSlot
          id={slotId}
          nameTr={slotTitleTr}
          nameEn={slotTitleEn}
          aspectRatio="16/10"
          minHeight="260px"
          locale={locale}
        />
      </div>
    </div>
  );
};
