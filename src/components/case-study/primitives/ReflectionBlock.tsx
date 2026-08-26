import React from 'react';

export interface ReflectionBlockProps {
  titleTr: string;
  titleEn: string;
  takeawaysTr: string[];
  takeawaysEn: string[];
  lessonTr?: string;
  lessonEn?: string;
  locale?: 'tr' | 'en';
}

export const ReflectionBlock: React.FC<ReflectionBlockProps> = ({
  titleTr,
  titleEn,
  takeawaysTr,
  takeawaysEn,
  lessonTr,
  lessonEn,
  locale = 'tr',
}) => {
  const takeaways = locale === 'tr' ? takeawaysTr : takeawaysEn;

  return (
    <div className="w-full my-6 p-4 sm:p-5 bg-gradient-to-br from-[#0F172A] to-[#1E1B4B]/30 border border-purple-900/40 rounded-xl space-y-3 shadow-md">
      <div className="flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-purple-900/80 border border-purple-700/60 text-purple-300 text-xs flex items-center justify-center font-bold">
          💡
        </span>
        <h4 className="text-sm font-bold text-slate-100">
          {locale === 'tr' ? titleTr : titleEn}
        </h4>
      </div>

      <ul className="space-y-2 text-xs text-slate-300">
        {takeaways.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-purple-400 font-bold shrink-0 mt-0.5">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {(lessonTr || lessonEn) && (
        <div className="pt-2 border-t border-slate-800 text-[11px] text-purple-300/90 italic">
          &ldquo;{locale === 'tr' ? lessonTr : lessonEn}&rdquo;
        </div>
      )}
    </div>
  );
};
