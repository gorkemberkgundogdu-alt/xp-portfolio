import React from 'react';

export interface CaseAccordionSectionProps {
  id: string;
  numberPrefix: string; // e.g. '01', '02', '03'
  titleTr: string;
  titleEn: string;
  subtitleTr?: string;
  subtitleEn?: string;
  isOpen: boolean;
  onToggle: () => void;
  locale?: 'tr' | 'en';
  children: React.ReactNode;
}

export const CaseAccordionSection: React.FC<CaseAccordionSectionProps> = ({
  id,
  numberPrefix,
  titleTr,
  titleEn,
  subtitleTr,
  subtitleEn,
  isOpen,
  onToggle,
  locale = 'tr',
  children,
}) => {
  const contentId = `case-section-content-${id}`;
  const headerId = `case-section-header-${id}`;

  return (
    <section
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-purple-900/60 bg-[#0A0E17] shadow-md shadow-purple-950/20'
          : 'border-purple-500/40 bg-gradient-to-r from-[#120D24] via-[#0F172A] to-[#0D111C] shadow-[0_0_30px_-5px_rgba(168,85,247,0.18)] hover:shadow-[0_0_35px_0_rgba(168,85,247,0.28)] hover:border-purple-400/70'
      }`}
    >
      {/* Header / Toggle Button */}
      <h3 className="m-0 p-0">
        <button
          id={headerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-all duration-200 cursor-pointer group ${
            isOpen
              ? 'bg-[#0F172A] hover:bg-[#1E293B]/90 border-b border-slate-800'
              : 'bg-transparent hover:bg-purple-950/20'
          }`}
        >
          <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
            <span
              className={`font-mono text-sm sm:text-base font-bold shrink-0 px-2.5 py-1 rounded-md transition-colors ${
                isOpen
                  ? 'text-purple-400 bg-purple-950/60 border border-purple-800/60'
                  : 'text-purple-200 bg-purple-600/30 border border-purple-500/60 group-hover:bg-purple-600 group-hover:text-white shadow-sm'
              }`}
            >
              {numberPrefix}
            </span>
            <div className="min-w-0">
              <span
                className={`font-display font-extrabold text-base sm:text-lg transition-colors block truncate ${
                  isOpen
                    ? 'text-slate-100 group-hover:text-purple-300'
                    : 'text-purple-100 group-hover:text-white drop-shadow-[0_1px_8px_rgba(192,132,252,0.25)]'
                }`}
              >
                {locale === 'tr' ? titleTr : titleEn}
              </span>
              {(subtitleTr || subtitleEn) && (
                <span
                  className={`text-xs font-sans block truncate mt-0.5 transition-colors ${
                    isOpen ? 'text-slate-400' : 'text-purple-300/80 group-hover:text-purple-200'
                  }`}
                >
                  {locale === 'tr' ? subtitleTr : subtitleEn}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {!isOpen ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 group-hover:bg-purple-500 text-white rounded-lg text-xs font-bold font-display shadow-md shadow-purple-600/30 transition-all duration-200 scale-95 group-hover:scale-100">
                <span>{locale === 'tr' ? 'Bölümü İncele' : 'Explore Section'}</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </span>
            ) : (
              <>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                  {locale === 'tr' ? 'Daralt' : 'Collapse'}
                </span>
                <span
                  className="w-6 h-6 rounded-md bg-purple-950/60 border border-purple-800/80 text-purple-300 flex items-center justify-center text-xs transition-transform duration-200 rotate-180"
                  aria-hidden="true"
                >
                  ▼
                </span>
              </>
            )}
          </div>
        </button>
      </h3>

      {/* Accordion Body Content */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        hidden={!isOpen}
        className={`${isOpen ? 'block' : 'hidden'} p-4 sm:p-6 md:p-8 space-y-8 bg-[#0B0F19] text-slate-300`}
      >
        {children}
      </div>
    </section>
  );
};
