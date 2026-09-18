import React from 'react';
import type { ProjectItem } from '../../data/portfolioData';
import { XpIcon } from './XpIcon';

export interface ProjectSummaryViewProps {
  project: ProjectItem;
  locale?: 'tr' | 'en';
}

export const ProjectSummaryView: React.FC<ProjectSummaryViewProps> = ({
  project,
  locale = 'tr',
}) => {
  const isTr = locale === 'tr';
  const title = isTr ? project.titleTr : project.titleEn;
  const badge = isTr ? project.badgeTr : project.badgeEn;
  const role = isTr ? project.roleTr : project.roleEn;
  const categoryTitle = isTr ? project.categoryTitleTr : project.categoryTitleEn;
  const description = isTr ? project.descriptionTr : project.descriptionEn;
  const highlights = isTr ? project.highlightsTr : project.highlightsEn;

  return (
    <div className="w-full max-w-3xl mx-auto font-sans text-slate-900 select-text space-y-4">
      {/* XP Window / Document Header */}
      <div className="flex items-start gap-3.5 p-3.5 bg-[#F0EFE9] border border-[#D4D0C8] rounded-sm shadow-[inset_1px_1px_0_white]">
        <div className="w-12 h-12 bg-white border border-[#7F9DB9] rounded-xs flex items-center justify-center shrink-0 shadow-xs">
          <XpIcon name={project.category === 'app-design' ? 'notepad' : 'folder'} size={32} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="px-2 py-0.5 bg-[#0055EA] text-white text-[10px] font-bold rounded-xs uppercase tracking-wider font-mono">
              {badge}
            </span>
            <span className="text-[11px] font-mono text-slate-600">
              📅 {project.date}
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-[#0A246A] leading-tight">
            {title}
          </h2>
          <div className="text-xs text-slate-600 mt-0.5 font-medium">
            {isTr ? 'Rol & Görev:' : 'Role & Impact:'} <strong className="text-slate-800">{role}</strong>
          </div>
        </div>
      </div>

      {/* Groupbox 1: General Specs */}
      <fieldset className="border border-[#D4D0C8] bg-[#FAFAF8] rounded-xs px-3.5 py-3 text-xs space-y-2">
        <legend className="px-1.5 font-bold text-[11px] text-[#0A246A] uppercase tracking-wide">
          {isTr ? 'Genel Bilgiler' : 'General Information'}
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-1 text-[11px]">
          <div className="flex items-baseline gap-2">
            <span className="text-slate-500 shrink-0">{isTr ? 'Kategori:' : 'Category:'}</span>
            <span className="font-semibold text-slate-800 truncate">{categoryTitle}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-slate-500 shrink-0">{isTr ? 'Dosya:' : 'File:'}</span>
            <span className="font-mono text-slate-700 truncate">{project.slug}.exe</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-slate-500 shrink-0">{isTr ? 'Konum:' : 'Location:'}</span>
            <span className="font-mono text-slate-700 truncate">C:\Portfolio\Projects\{project.slug}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-slate-500 shrink-0">{isTr ? 'Tür:' : 'Type:'}</span>
            <span className="font-semibold text-slate-800 truncate">{badge}</span>
          </div>
        </div>
      </fieldset>

      {/* Groupbox 2: Description (XP Inset Text Well) */}
      <fieldset className="border border-[#D4D0C8] bg-[#FAFAF8] rounded-xs px-3.5 py-3 text-xs space-y-2">
        <legend className="px-1.5 font-bold text-[11px] text-[#0A246A] uppercase tracking-wide">
          {isTr ? 'Proje Özeti & Açıklama' : 'Project Summary & Overview'}
        </legend>
        <div className="bg-white border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-3 rounded-xs text-xs sm:text-[13px] leading-relaxed text-slate-800 shadow-[inset_1px_1px_0_#404040]">
          {description}
        </div>
      </fieldset>

      {/* Groupbox 3: Technologies & Competencies */}
      <fieldset className="border border-[#D4D0C8] bg-[#FAFAF8] rounded-xs px-3.5 py-3 text-xs space-y-2">
        <legend className="px-1.5 font-bold text-[11px] text-[#0A246A] uppercase tracking-wide">
          {isTr ? 'Kullanılan Teknolojiler & Yetkinlikler' : 'Technologies & Competencies'}
        </legend>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#ECE9D8] border border-[#7F9DB9] text-slate-800 text-[11px] font-mono rounded-xs shadow-[inset_1px_1px_0_white]"
            >
              <span className="text-blue-600 font-bold">🏷️</span>
              <span>{t}</span>
            </span>
          ))}
        </div>
      </fieldset>

      {/* Groupbox 4: Key Highlights (if available) */}
      {highlights && highlights.length > 0 && (
        <fieldset className="border border-[#D4D0C8] bg-[#FAFAF8] rounded-xs px-3.5 py-3 text-xs space-y-2">
          <legend className="px-1.5 font-bold text-[11px] text-[#0A246A] uppercase tracking-wide">
            {isTr ? 'Önemli Çıktılar & Odak Noktaları' : 'Key Highlights'}
          </legend>
          <ul className="space-y-1.5 pt-1">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-800 leading-relaxed">
                <span className="text-[#0055EA] font-bold shrink-0 mt-0.5">▶</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </fieldset>
      )}

      {/* Groupbox 5: Live Action Link (if available) */}
      {project.liveUrl && (
        <div className="pt-2 flex justify-end">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ECE9D8] hover:bg-[#F4F4F0] active:bg-[#D4D0C8] border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] text-xs font-bold text-slate-900 rounded-xs shadow-xs no-underline cursor-pointer transition-colors"
          >
            <span>🌐</span>
            <span>{isTr ? 'Canlı Projeyi Ziyaret Et' : 'Visit Live Project'}</span>
            <span className="text-blue-800 font-bold">↗</span>
          </a>
        </div>
      )}
    </div>
  );
};
