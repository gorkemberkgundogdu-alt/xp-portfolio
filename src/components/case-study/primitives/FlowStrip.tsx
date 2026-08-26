import React from 'react';

export interface FlowStep {
  id: string;
  stepNumber: number;
  labelTr: string;
  labelEn: string;
  sublabelTr?: string;
  sublabelEn?: string;
}

export interface FlowStripProps {
  titleTr: string;
  titleEn: string;
  steps: FlowStep[];
  locale?: 'tr' | 'en';
}

export const FlowStrip: React.FC<FlowStripProps> = ({
  titleTr,
  titleEn,
  steps,
  locale = 'tr',
}) => {
  return (
    <div className="w-full my-5 p-3.5 sm:p-4 bg-[#0F172A] border border-slate-800 rounded-lg space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
          {locale === 'tr' ? titleTr : titleEn}
        </h4>
        <span className="text-[10px] font-mono text-purple-400">
          {steps.length} {locale === 'tr' ? 'Adımlı Akış' : 'Steps Flow'}
        </span>
      </div>

      {/* Horizontal Flow Line on Desktop / Multi-column on Mobile */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 overflow-x-auto py-1">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          return (
            <React.Fragment key={step.id}>
              <div className="flex-1 min-w-[90px] sm:min-w-0 p-2 rounded bg-slate-900/90 border border-slate-800 text-center space-y-1">
                <div className="w-5 h-5 mx-auto rounded-full bg-purple-900/60 border border-purple-700/60 text-purple-300 font-mono text-[10px] font-bold flex items-center justify-center">
                  {step.stepNumber}
                </div>
                <div className="text-[11px] font-semibold text-slate-200 truncate">
                  {locale === 'tr' ? step.labelTr : step.labelEn}
                </div>
                {(step.sublabelTr || step.sublabelEn) && (
                  <div className="text-[9px] text-slate-500 truncate">
                    {locale === 'tr' ? step.sublabelTr : step.sublabelEn}
                  </div>
                )}
              </div>

              {!isLast && (
                <span className="text-purple-400/80 font-bold text-xs shrink-0 select-none px-0.5 hidden sm:inline-block">
                  →
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
