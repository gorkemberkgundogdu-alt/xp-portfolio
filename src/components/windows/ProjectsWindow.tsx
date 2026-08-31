import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import { PROJECTS_DATA, type ProjectItem } from '../../data/portfolioData';
import { OperaterCaseStudy } from '../case-study/OperaterCaseStudy';
import { StudioV1beCaseStudy } from '../case-study/StudioV1beCaseStudy';
import { pushProjectUrl } from '../../utils/routes';

export const ProjectsWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const activeProjectId = useWindowStore((state) => state.activeProjectId);
  const setActiveProjectId = useWindowStore((state) => state.setActiveProjectId);

  const handleSelectProject = (slug: string) => {
    setActiveProjectId(slug);
    pushProjectUrl(slug, language);
  };

  const selectedProject =
    PROJECTS_DATA.find((p) => p.slug === activeProjectId || p.id === activeProjectId) ||
    PROJECTS_DATA[0];

  const appDesignProjects = PROJECTS_DATA.filter((p) => p.category === 'app-design');
  const webDesignProjects = PROJECTS_DATA.filter((p) => p.category === 'web-design');

  const menuItems =
    language === 'tr'
      ? ['Dosya', 'Düzen', 'Görünüm', 'Sık Kullanılanlar', 'Araçlar', 'Yardım']
      : ['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'];

  return (
    <MasterWindow
      id="projects"
      menuBar={
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {menuItems.map((item) => (
              <span
                key={item}
                className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px] transition-colors"
              >
                <span className="underline">{item[0]}</span>
                {item.slice(1)}
              </span>
            ))}
          </div>
          <div className="text-[11px] text-slate-500 pr-2">Windows XP Explorer</div>
        </div>
      }
      statusBar={
        <>
          <span>{PROJECTS_DATA.length} {language === 'tr' ? 'öğe' : 'items'} (2 {language === 'tr' ? 'Kategori' : 'Categories'})</span>
          <span>C:\Portfolio\Projects</span>
          <span>{language === 'tr' ? 'Yerel Disk (C:)' : 'Local Disk (C:)'}</span>
        </>
      }
    >
      <div className="flex flex-col h-full bg-[#FAFAF8]">
        {/* Address Bar */}
        <div className="flex items-center gap-2 px-2 py-1 bg-[#ECE9D8] border-b border-[#D4D0C8] text-[12px]">
          <span className="text-slate-500">{language === 'tr' ? 'Adres:' : 'Address:'}</span>
          <div className="flex-1 bg-white border border-[#7F9DB9] px-2 py-0.5 rounded-sm flex items-center gap-1">
            <XpIcon name="folder" size={14} />
            <span className="font-mono text-slate-700">
              C:\Portfolio\Projects\{selectedProject.category}\{selectedProject.slug}.exe
            </span>
          </div>
          <button
            type="button"
            className="px-2.5 py-0.5 border border-[#7F9DB9] bg-[#ECE9D8] rounded-sm hover:bg-slate-200 text-xs"
          >
            {language === 'tr' ? 'Git' : 'Go'}
          </button>
        </div>

        {/* Main 2-column view */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left panel: File list categorized */}
          <div className="w-full md:w-64 border-r border-[#D4D0C8] bg-[#F8F9FA] p-3 space-y-4 overflow-y-auto shrink-0 select-none">
            {/* Category 1: App Design */}
            <div>
              <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5 border-b border-blue-100 pb-1">
                <span>📁</span>
                <span>{language === 'tr' ? 'App Design' : 'App Design'}</span>
              </div>
              <div className="space-y-1 pl-1">
                {appDesignProjects.map((item) => {
                  const isSelected = selectedProject.id === item.id;
                  return (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSelectProject(item.slug)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelectProject(item.slug);
                        }
                      }}
                      className={`flex items-center gap-2 p-1.5 rounded cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#316AC5] text-white shadow-xs'
                          : 'hover:bg-[#E8F0FE] text-slate-800'
                      }`}
                    >
                      <XpIcon name="notepad" size={20} />
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-[12px] truncate">{item.id}.exe</div>
                        <div
                          className={`text-[10px] truncate ${
                            isSelected ? 'text-blue-100' : 'text-slate-500'
                          }`}
                        >
                          {language === 'tr' ? item.badgeTr : item.badgeEn}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Category 2: Web Design & Development */}
            <div>
              <div className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-1.5 border-b border-emerald-100 pb-1">
                <span>📁</span>
                <span>{language === 'tr' ? 'Web Design & Dev' : 'Web Design & Dev'}</span>
              </div>
              <div className="space-y-1 pl-1">
                {webDesignProjects.map((item) => {
                  const isSelected = selectedProject.id === item.id;
                  return (
                    <div
                      key={item.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleSelectProject(item.slug)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleSelectProject(item.slug);
                        }
                      }}
                      className={`flex items-center gap-2 p-1.5 rounded cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-[#316AC5] text-white shadow-xs'
                          : 'hover:bg-[#E8F0FE] text-slate-800'
                      }`}
                    >
                      <XpIcon name="folder" size={20} />
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-[12px] truncate">{item.id}.exe</div>
                        <div
                          className={`text-[10px] truncate ${
                            isSelected ? 'text-blue-100' : 'text-slate-500'
                          }`}
                        >
                          {language === 'tr' ? item.badgeTr : item.badgeEn}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right panel: Details & Deep Case Study / Mini Case Study */}
          <div
            className={`flex-1 overflow-y-auto w-full ${
              selectedProject.slug === 'operater'
                ? 'bg-[#060911] p-4 sm:p-6 md:p-8'
                : selectedProject.slug === 'studio-v1be'
                ? 'bg-[#0c0f14] p-4 sm:p-6 md:p-8'
                : 'bg-white p-5 md:p-6'
            }`}
          >
            {selectedProject.slug === 'operater' ? (
              <OperaterCaseStudy locale={language} />
            ) : selectedProject.slug === 'studio-v1be' ? (
              <StudioV1beCaseStudy locale={language} />
            ) : (
              <div className="w-full space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-slate-200">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[11px] font-bold rounded mb-1.5 uppercase tracking-wider">
                      {language === 'tr' ? selectedProject.badgeTr : selectedProject.badgeEn}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                      {language === 'tr' ? selectedProject.titleTr : selectedProject.titleEn}
                    </h2>
                  </div>
                  <div className="px-3 py-1 bg-slate-100 border border-slate-300 rounded font-mono text-[12px] text-slate-600 self-start sm:self-auto shrink-0 shadow-xs">
                    📅 {selectedProject.date}
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                  <div className="xl:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        {language === 'tr' ? 'Proje Özeti & Açıklama' : 'Project Summary & Overview'}
                      </h3>
                      <p className="text-[14px] text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                        {language === 'tr' ? selectedProject.descriptionTr : selectedProject.descriptionEn}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                        {language === 'tr' ? 'Kullanılan Teknolojiler & Yetkinlikler' : 'Technologies & Competencies'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 rounded-md text-[12px] font-medium transition-colors"
                          >
                            🏷️ {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {selectedProject.highlightsTr && (
                      <div>
                        <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                          {language === 'tr' ? 'Önemli Çıktılar & Odak Noktaları' : 'Key Highlights'}
                        </h3>
                        <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside bg-slate-50 p-3 rounded-lg border border-slate-200">
                          {(language === 'tr' ? selectedProject.highlightsTr : selectedProject.highlightsEn || []).map((h) => (
                            <li key={h}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg shadow-xs space-y-2">
                      <div className="font-bold text-[13px] text-blue-900 flex items-center gap-1.5">
                        <span>📌</span>
                        <span>{language === 'tr' ? 'Rol & Katkı' : 'Role & Impact'}</span>
                      </div>
                      <div className="text-[12px] text-blue-800 leading-relaxed">
                        <strong>{language === 'tr' ? selectedProject.roleTr : selectedProject.roleEn}</strong>
                      </div>
                    </div>

                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg text-xs font-semibold text-emerald-900 transition-colors text-center"
                      >
                        🌐 {language === 'tr' ? 'Canlı Bağlantıyı Ziyaret Et' : 'Visit Live Project'} →
                      </a>
                    )}

                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600 space-y-1">
                      <div><strong>{language === 'tr' ? 'Kategori:' : 'Category:'}</strong> {language === 'tr' ? selectedProject.categoryTitleTr : selectedProject.categoryTitleEn}</div>
                      <div><strong>{language === 'tr' ? 'Slug / Rota:' : 'Slug / Route:'}</strong> <code className="text-blue-700 font-mono">/projeler/{selectedProject.slug}/</code></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
