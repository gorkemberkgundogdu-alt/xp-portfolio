import React, { useState } from 'react';
import { ABOUT_SECTIONS, type AboutSection } from '../../data/portfolioData';

interface AboutAccordionProps {
  locale: 'tr' | 'en';
  variant?: 'notepad' | 'properties';
}

export const AboutAccordion: React.FC<AboutAccordionProps> = ({ locale, variant = 'properties' }) => {
  // Initial state: Section 01 open, sections 02-05 closed
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set(['01']));

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Helper to render text with approved subtle emphasis
  const renderParagraphContent = (text: string, sectionId: string, pIndex: number) => {
    if (sectionId === '03' && pIndex === 1) {
      if (locale === 'tr') {
        const parts = text.split('hangi işi ona bırakacağımı, nerede yöneteceğimi ve nerede kararı kendim vereceğimi bilmek.');
        return (
          <>
            {parts[0]}
            <strong>hangi işi ona bırakacağımı, nerede yöneteceğimi ve nerede kararı kendim vereceğimi bilmek.</strong>
            {parts[1]}
          </>
        );
      } else {
        const parts = text.split('what to delegate, what to direct, and where the decision should remain mine.');
        return (
          <>
            {parts[0]}
            <strong>what to delegate, what to direct, and where the decision should remain mine.</strong>
            {parts[1]}
          </>
        );
      }
    }

    if (sectionId === '04' && pIndex === 1) {
      if (locale === 'tr') {
        const parts = text.split('nasıl çalıştığımı gösteren işlerden biri');
        return (
          <>
            {parts[0]}
            <strong>nasıl çalıştığımı gösteren işlerden biri</strong>
            {parts[1]}
          </>
        );
      } else {
        const parts = text.split('one of the projects that shows how I work.');
        return (
          <>
            {parts[0]}
            <strong>one of the projects that shows how I work.</strong>
            {parts[1]}
          </>
        );
      }
    }

    if (sectionId === '05' && pIndex === 1) {
      if (locale === 'tr') {
        const parts = text.split('güzel zaman geçirmek, yeni bir şey keşfetmek, nasıl çalıştığını anlamak ve mümkünse kendim denemek.');
        return (
          <>
            {parts[0]}
            <strong>güzel zaman geçirmek, yeni bir şey keşfetmek, nasıl çalıştığını anlamak ve mümkünse kendim denemek.</strong>
            {parts[1]}
          </>
        );
      } else {
        const parts = text.split('enjoy the time I have, discover something new, understand how it works, and if possible, try it myself.');
        return (
          <>
            {parts[0]}
            <strong>enjoy the time I have, discover something new, understand how it works, and if possible, try it myself.</strong>
            {parts[1]}
          </>
        );
      }
    }

    return text;
  };

  const isNotepad = variant === 'notepad';

  return (
    <div className={`space-y-2 select-text ${isNotepad ? 'font-mono' : 'font-sans'}`}>
      {ABOUT_SECTIONS.map((section: AboutSection) => {
        const isOpen = openSections.has(section.id);
        const title = locale === 'tr' ? section.titleTr : section.titleEn;
        const paragraphs = locale === 'tr' ? section.contentTr : section.contentEn;
        const buttonId = `about-toggle-${section.id}-${variant}`;
        const panelId = `about-panel-${section.id}-${variant}`;

        return (
          <div
            key={section.id}
            className={`border rounded-sm transition-colors ${
              isNotepad
                ? 'border-slate-200 bg-white'
                : 'border-[#D4D0C8] bg-[#FAF9F5]'
            }`}
          >
            {/* Section Header / Accessible Trigger Button */}
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleSection(section.id)}
              className={`w-full px-3 py-2 text-left flex items-center justify-between gap-2 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset ${
                isOpen
                  ? isNotepad
                    ? 'bg-slate-100/90 text-blue-900 font-bold'
                    : 'bg-[#ECE9D8] text-blue-950 font-bold border-b border-[#D4D0C8]'
                  : isNotepad
                  ? 'hover:bg-slate-50 text-slate-800 font-semibold'
                  : 'hover:bg-[#F0EEE2] text-slate-800 font-semibold'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {/* Classic XP Tree / Document Indicator */}
                <span
                  className="font-mono text-[11px] font-bold text-blue-700 select-none shrink-0"
                  aria-hidden="true"
                >
                  {isOpen ? '[-]' : '[+]'}
                </span>
                <span className="text-xs sm:text-sm truncate">{title}</span>
              </div>

              {/* Status indicator for screen readers */}
              <span className="sr-only">
                {isOpen
                  ? locale === 'tr'
                    ? 'Bölümü daralt'
                    : 'Collapse section'
                  : locale === 'tr'
                  ? 'Bölümü genişlet'
                  : 'Expand section'}
              </span>
            </button>

            {/* Section Body Content */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`${isOpen ? 'block' : 'hidden'} p-3 sm:p-4 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2.5 bg-white`}
            >
              {paragraphs.map((para, pIndex) => (
                <p key={pIndex} className="leading-relaxed">
                  {renderParagraphContent(para, section.id, pIndex)}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
