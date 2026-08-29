import React, { useState } from 'react';
import {
  CATEGORY_GROUPS,
  SKILL_TOOL_ITEMS,
  type SkillToolItem,
  type EvidenceItem,
} from '../../data/skillsData';
import { useWindowStore } from '../../stores/windowStore';

interface SkillsExplorerProps {
  locale: 'tr' | 'en';
  variant?: 'desktop' | 'properties';
}

export const SkillsExplorer: React.FC<SkillsExplorerProps> = ({
  locale = 'tr',
  variant = 'desktop',
}) => {
  // Initial state: nothing selected
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Store hooks for desktop window interactions
  const openWindow = useWindowStore((state) => state.openWindow);
  const setActiveProjectId = useWindowStore((state) => state.setActiveProjectId);

  const selectedItem: SkillToolItem | undefined = SKILL_TOOL_ITEMS.find(
    (item) => item.id === selectedId
  );

  const handleToggleItem = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const getEvidenceUrl = (ev: EvidenceItem) => {
    if (!ev.projectSlug) return undefined;
    const base = locale === 'tr' ? `/projeler/${ev.projectSlug}/` : `/en/projects/${ev.projectSlug}/`;
    return ev.anchor ? `${base}${ev.anchor}` : base;
  };

  const handleEvidenceClick = (e: React.MouseEvent<HTMLAnchorElement>, ev: EvidenceItem) => {
    if (variant === 'desktop' && ev.projectSlug) {
      // If we are inside the desktop window environment, focus/open the project in ProjectsWindow
      try {
        setActiveProjectId(ev.projectSlug);
        openWindow('projects');
      } catch {
        // Fallback to standard link navigation
      }
    }
  };

  // Helper to render the detail panel content
  const renderDetailContent = (item: SkillToolItem, isInline = false) => {
    return (
      <div
        id={`skill-detail-${item.id}`}
        role="region"
        aria-live="polite"
        aria-label={`${item.title} ${locale === 'tr' ? 'Detayları' : 'Details'}`}
        className={`font-sans space-y-3 ${
          isInline
            ? 'p-3 bg-[#FAF8F5] border border-[#7F9DB9] rounded shadow-inner my-2 text-slate-800'
            : 'h-full flex flex-col justify-between'
        }`}
      >
        <div className="space-y-2">
          {/* Header with Subgroup & Title */}
          <div className="border-b pb-2 border-slate-200">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono font-bold text-blue-800 uppercase tracking-wider">
                {locale === 'tr' ? item.subgroupNameTr : item.subgroupNameEn}
              </span>
              {item.metadata && (
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-purple-50 text-purple-900 border border-purple-200 rounded">
                  {item.metadata}
                </span>
              )}
            </div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
              {item.title}
            </h4>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-sans">
            {locale === 'tr' ? item.descriptionTr : item.descriptionEn}
          </p>
        </div>

        {/* Evidence Block (Only when evidence exists) */}
        {item.evidence && item.evidence.length > 0 && (
          <div className="pt-3 border-t border-slate-200 space-y-2 bg-[#F3F1E7]/60 p-2.5 rounded border border-[#E5E2D5]">
            <div className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
              <span>📌</span>
              <span>{locale === 'tr' ? 'KULLANILDIĞI YER & KANIT' : 'USED IN / EVIDENCE'}</span>
            </div>

            <div className="space-y-2">
              {item.evidence.map((ev, idx) => {
                const url = getEvidenceUrl(ev);
                const area = locale === 'tr' ? ev.areaTr : ev.areaEn;

                return (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs font-bold text-slate-900">
                      {ev.projectTitle}
                    </div>
                    {area && (
                      <div className="text-[11px] text-slate-600 font-sans leading-snug">
                        {area}
                      </div>
                    )}
                    {url && (
                      <div className="pt-1">
                        <a
                          href={url}
                          onClick={(e) => handleEvidenceClick(e, ev)}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-white hover:bg-blue-50 text-blue-900 border border-[#7F9DB9] hover:border-[#316AC5] rounded text-[11px] font-semibold transition-colors shadow-2xs no-underline"
                        >
                          <span>
                            {ev.isCaseStudy
                              ? locale === 'tr'
                                ? 'Vakada İncele →'
                                : 'View in case →'
                              : locale === 'tr'
                              ? 'Projeyi İncele →'
                              : 'View project →'}
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  // =========================================================================
  // DESKTOP VARIANT: 2-Column with selector list on left & persistent detail on right
  // =========================================================================
  if (variant === 'desktop') {
    return (
      <div className="space-y-4">
        {/* Interaction Hint Banner */}
        <div className="p-2.5 bg-[#FAF9F5] border border-[#D4D0C8] rounded flex items-center gap-2 text-xs font-medium text-slate-700 shadow-2xs">
          <span className="text-blue-700 font-bold text-sm select-none" aria-hidden="true">
            ℹ️
          </span>
          <span>
            {locale === 'tr'
              ? 'Birine tıkla. Nerede ve nasıl kullandığımı göstereyim.'
              : "Pick one and I'll show you where and how I use it."}
          </span>
        </div>

        {/* 2-Column Master Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column: Selectable Lists Grouped by Category & Subgroup */}
          <div className="lg:col-span-7 space-y-4">
            {CATEGORY_GROUPS.map((cat) => (
              <div key={cat.id} className="space-y-3">
                <div className="border-b pb-1 border-slate-300">
                  <h3 className="font-display font-bold text-xs sm:text-sm text-blue-900 uppercase tracking-wider">
                    {locale === 'tr' ? cat.titleTr : cat.titleEn}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.subgroups.map((sub) => (
                    <fieldset
                      key={sub.id}
                      className="border border-[#D4D0C8] rounded p-2.5 bg-[#FAFAF8] space-y-2"
                    >
                      <legend className="text-[11px] font-bold text-slate-600 px-1 font-sans">
                        {locale === 'tr' ? sub.titleTr : sub.titleEn}
                      </legend>

                      <div className="flex flex-wrap gap-1.5">
                        {sub.items.map((item) => {
                          const isSelected = selectedId === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleToggleItem(item.id)}
                              aria-expanded={isSelected}
                              aria-controls={`skill-detail-${item.id}`}
                              className={`px-2.5 py-1.5 text-xs font-semibold rounded border transition-all cursor-pointer flex items-center gap-1.5 text-left focus:outline-none focus:ring-1 focus:ring-[#0055EA] ${
                                isSelected
                                  ? 'bg-[#316AC5] text-white border-[#0A246A] shadow-inner font-bold'
                                  : 'bg-white hover:bg-[#E8F0FE] text-slate-800 border-[#7F9DB9] hover:border-[#316AC5] shadow-2xs'
                              }`}
                            >
                              <span>{item.title}</span>
                              <span
                                className={`text-[11px] transition-transform ${
                                  isSelected ? 'text-white' : 'text-slate-400'
                                }`}
                                aria-hidden="true"
                              >
                                ›
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Persistent Shared Detail Panel */}
          <div className="lg:col-span-5 sticky top-2">
            <div className="bg-white border-2 border-[#7F9DB9] rounded p-4 shadow-sm min-h-[380px] flex flex-col justify-between">
              {selectedItem ? (
                renderDetailContent(selectedItem)
              ) : (
                /* Minimal XP-Native Empty State */
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-2 text-slate-400 my-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xl text-slate-400 select-none">
                    📄
                  </div>
                  <div className="font-bold text-xs text-slate-600">
                    {locale === 'tr' ? 'Öğe Özellikleri' : 'Item Properties'}
                  </div>
                  <p className="text-[11px] text-slate-500 max-w-xs leading-relaxed">
                    {locale === 'tr'
                      ? 'Detayları ve vaka kanıtlarını görmek için soldaki yetkinlik veya araçlardan birini seçin.'
                      : 'Select a skill or tool on the left to view usage details and project evidence.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // PROPERTIES DIALOG VARIANT: Mobile/Tablet Inline Expandable Single-Panel
  // =========================================================================
  return (
    <div className="space-y-4">
      {/* Interaction Hint Banner */}
      <div className="p-2.5 bg-[#FAF9F5] border border-[#D4D0C8] rounded flex items-center gap-2 text-xs font-medium text-slate-700 shadow-2xs">
        <span className="text-blue-700 font-bold text-sm select-none" aria-hidden="true">
          ℹ️
        </span>
        <span>
          {locale === 'tr'
            ? 'Birine tıkla. Nerede ve nasıl kullandığımı göstereyim.'
            : "Pick one and I'll show you where and how I use it."}
        </span>
      </div>

      {/* Categories with Subgroups & Inline Accordion Detail */}
      <div className="space-y-4">
        {CATEGORY_GROUPS.map((cat) => (
          <div key={cat.id} className="space-y-3">
            <div className="border-b pb-1 border-slate-300">
              <h3 className="font-display font-bold text-xs sm:text-sm text-blue-900 uppercase tracking-wider">
                {locale === 'tr' ? cat.titleTr : cat.titleEn}
              </h3>
            </div>

            <div className="space-y-3">
              {cat.subgroups.map((sub) => (
                <fieldset
                  key={sub.id}
                  className="border border-[#D4D0C8] rounded p-2.5 bg-[#FAFAF8] space-y-2"
                >
                  <legend className="text-[11px] font-bold text-slate-600 px-1 font-sans">
                    {locale === 'tr' ? sub.titleTr : sub.titleEn}
                  </legend>

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap gap-1.5">
                      {sub.items.map((item) => {
                        const isSelected = selectedId === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleToggleItem(item.id)}
                            aria-expanded={isSelected}
                            aria-controls={`skill-detail-${item.id}`}
                            className={`px-2.5 py-1.5 text-xs font-semibold rounded border transition-all cursor-pointer flex items-center gap-1.5 text-left focus:outline-none focus:ring-1 focus:ring-[#0055EA] ${
                              isSelected
                                ? 'bg-[#316AC5] text-white border-[#0A246A] shadow-inner font-bold'
                                : 'bg-white hover:bg-[#E8F0FE] text-slate-800 border-[#7F9DB9] hover:border-[#316AC5] shadow-2xs'
                            }`}
                          >
                            <span>{item.title}</span>
                            <span
                              className={`text-[11px] transition-transform ${
                                isSelected ? 'rotate-90 text-white' : 'text-slate-400'
                              }`}
                              aria-hidden="true"
                            >
                              ›
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Single Inline Expanded Detail rendered directly if the selected item belongs to this subgroup */}
                    {sub.items.some((item) => item.id === selectedId) && selectedItem && (
                      <div className="pt-1">
                        {renderDetailContent(selectedItem, true)}
                      </div>
                    )}
                  </div>
                </fieldset>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
