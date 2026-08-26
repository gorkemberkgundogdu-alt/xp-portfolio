import React from 'react';

export interface StateItem {
  id: string;
  labelTr: string;
  labelEn: string;
  badgeTr: string;
  badgeEn: string;
  type: 'neutral' | 'success' | 'warning' | 'error' | 'pending';
  descTr: string;
  descEn: string;
}

export interface StateStripProps {
  titleTr: string;
  titleEn: string;
  states: StateItem[];
  locale?: 'tr' | 'en';
}

export const StateStrip: React.FC<StateStripProps> = ({
  titleTr,
  titleEn,
  states,
  locale = 'tr',
}) => {
  const getTypeClasses = (type: StateItem['type']) => {
    switch (type) {
      case 'success':
        return 'border-emerald-700/60 bg-emerald-950/20 text-emerald-300';
      case 'warning':
        return 'border-amber-700/60 bg-amber-950/20 text-amber-300';
      case 'error':
        return 'border-rose-700/60 bg-rose-950/20 text-rose-300';
      case 'pending':
        return 'border-purple-700/60 bg-purple-950/20 text-purple-300';
      default:
        return 'border-slate-700/60 bg-slate-900/40 text-slate-300';
    }
  };

  return (
    <div className="w-full my-6 p-4 bg-[#0F172A] border border-slate-800 rounded-lg space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
          {locale === 'tr' ? titleTr : titleEn}
        </h4>
        <span className="text-[10px] font-mono text-purple-400">
          {states.length} {locale === 'tr' ? 'Operasyonel Durum' : 'Operational States'}
        </span>
      </div>

      {/* Responsive State Strip (Horizontally wrap / 2-column on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {states.map((st) => (
          <div
            key={st.id}
            className={`p-2.5 rounded border ${getTypeClasses(st.type)} flex flex-col justify-between space-y-1.5`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase">
                {locale === 'tr' ? st.badgeTr : st.badgeEn}
              </span>
            </div>
            <div className="text-xs font-bold text-slate-200">
              {locale === 'tr' ? st.labelTr : st.labelEn}
            </div>
            <p className="text-[10px] text-slate-400 leading-tight">
              {locale === 'tr' ? st.descTr : st.descEn}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
