import React from 'react';

export interface ReflectionBlockProps {
  titleTr: string;
  titleEn: string;
  takeawaysTr: string[];
  takeawaysEn: string[];
  lessonTr?: string;
  lessonEn?: string;
  theme?: 'purple' | 'lime';
  locale?: 'tr' | 'en';
}

export const ReflectionBlock: React.FC<ReflectionBlockProps> = ({
  titleTr,
  titleEn,
  takeawaysTr,
  takeawaysEn,
  lessonTr,
  lessonEn,
  theme = 'purple',
  locale = 'tr',
}) => {
  const takeaways = locale === 'tr' ? takeawaysTr : takeawaysEn;

  const containerClass =
    theme === 'lime'
      ? 'bg-gradient-to-br from-[#0F172A] to-[#122216]/40 border border-lime-900/40'
      : 'bg-gradient-to-br from-[#0F172A] to-[#1E1B4B]/30 border border-purple-900/40';

  const iconClass =
    theme === 'lime'
      ? 'bg-lime-950/80 border border-lime-700/60 text-lime-300'
      : 'bg-purple-900/80 border border-purple-700/60 text-purple-300';

  const bulletClass = theme === 'lime' ? 'text-lime-400' : 'text-purple-400';
  const lessonClass = theme === 'lime' ? 'text-lime-300/90' : 'text-purple-300/90';

  return (
    <div className={`w-full my-6 p-4 sm:p-5 rounded-xl space-y-3 shadow-md ${containerClass}`}>
      <div className="flex items-center gap-2">
        <span className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${iconClass}`}>
          💡
        </span>
        <h4 className="text-sm font-bold text-slate-100">
          {locale === 'tr' ? titleTr : titleEn}
        </h4>
      </div>

      <ul className="space-y-2 text-xs text-slate-300">
        {takeaways.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className={`font-bold shrink-0 mt-0.5 ${bulletClass}`}>•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      {(lessonTr || lessonEn) && (
        <div className={`pt-2 border-t border-slate-800 text-[11px] italic ${lessonClass}`}>
          &ldquo;{locale === 'tr' ? lessonTr : lessonEn}&rdquo;
        </div>
      )}
    </div>
  );
};
