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
    <section className="border border-slate-800 rounded-xl overflow-hidden bg-[#0A0E17] transition-all shadow-sm">
      {/* Header / Toggle Button */}
      <h3 className="m-0 p-0">
        <button
          id={headerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-left bg-[#0F172A] hover:bg-[#1E293B] border-b border-slate-800 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <span className="font-mono text-sm sm:text-base font-bold text-purple-400 shrink-0">
              {numberPrefix}
            </span>
            <div className="min-w-0">
              <span className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-purple-300 transition-colors block truncate">
                {locale === 'tr' ? titleTr : titleEn}
              </span>
              {(subtitleTr || subtitleEn) && (
                <span className="text-[11px] sm:text-xs text-slate-400 block truncate">
                  {locale === 'tr' ? subtitleTr : subtitleEn}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
              {isOpen ? (locale === 'tr' ? 'Daralt' : 'Collapse') : (locale === 'tr' ? 'Genişlet' : 'Expand')}
            </span>
            <span
              className={`w-6 h-6 rounded-md bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center text-xs transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-purple-300 border-purple-800' : ''
              }`}
              aria-hidden="true"
            >
              ▼
            </span>
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
