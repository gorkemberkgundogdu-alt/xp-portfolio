import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import { PROJECTS_DATA, type ProjectItem } from '../../data/portfolioData';
import { OperaterCaseStudy } from '../case-study/OperaterCaseStudy';
import { StudioV1beCaseStudy } from '../case-study/StudioV1beCaseStudy';
import { ProjectSummaryView } from '../common/ProjectSummaryView';
import { pushProjectUrl, pushLocaleRootUrl } from '../../utils/routes';

export const ProjectsWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const activeProjectId = useWindowStore((state) => state.activeProjectId);
  const setActiveProjectId = useWindowStore((state) => state.setActiveProjectId);

  const handleSelectProject = (slug: string) => {
    setActiveProjectId(slug);
    pushProjectUrl(slug, language);
  };

  const handleBackToProjects = () => {
    setActiveProjectId(null);
    pushLocaleRootUrl(language);
  };

  const selectedProject = activeProjectId
    ? PROJECTS_DATA.find((p) => p.slug === activeProjectId || p.id === activeProjectId) || null
    : null;

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
              {selectedProject
                ? `C:\\Portfolio\\Projects\\${selectedProject.category}\\${selectedProject.slug}.exe`
                : 'C:\\Portfolio\\Projects'}
            </span>
          </div>
          <button
            type="button"
            onClick={selectedProject ? handleBackToProjects : undefined}
            className="px-2.5 py-0.5 border border-[#7F9DB9] bg-[#ECE9D8] rounded-sm hover:bg-slate-200 text-xs cursor-pointer"
          >
            {language === 'tr' ? 'Git' : 'Go'}
          </button>
        </div>

        {/* Main 2-column view */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left panel: File list categorized */}
          <div className="w-full md:w-64 border-r border-[#D4D0C8] bg-[#F8F9FA] p-3 space-y-4 overflow-y-auto shrink-0 select-none">
            {/* Root / All Projects Folder Item */}
            <div
              role="button"
              tabIndex={0}
              onClick={handleBackToProjects}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleBackToProjects();
                }
              }}
              className={`flex items-center gap-2 p-1.5 rounded cursor-pointer transition-colors ${
                !selectedProject
                  ? 'bg-[#316AC5] text-white shadow-xs'
                  : 'hover:bg-[#E8F0FE] text-slate-800'
              }`}
            >
              <XpIcon name="folder" size={20} />
              <div className="min-w-0 flex-1">
                <div className="font-bold text-[12px] truncate">
                  {language === 'tr' ? 'Tüm Projeler (C:\\)' : 'All Projects (C:\\)'}
                </div>
                <div
                  className={`text-[10px] truncate ${
                    !selectedProject ? 'text-blue-100' : 'text-slate-500'
                  }`}
                >
                  {language === 'tr' ? `${PROJECTS_DATA.length} Proje Klasörü` : `${PROJECTS_DATA.length} Project Files`}
                </div>
              </div>
            </div>

            {/* Category 1: App Design */}
            <div>
              <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5 border-b border-blue-100 pb-1">
                <span>📁</span>
                <span>{language === 'tr' ? 'App Design' : 'App Design'}</span>
              </div>
              <div className="space-y-1 pl-1">
                {appDesignProjects.map((item) => {
                  const isSelected = selectedProject?.id === item.id;
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
                  const isSelected = selectedProject?.id === item.id;
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

          {/* Right panel: Details & Deep Case Study / Mini Case Study OR Folder Overview */}
          <div
            className={`flex-1 overflow-y-auto w-full ${
              selectedProject?.slug === 'operater'
                ? 'bg-[#060911] p-4 sm:p-6 md:p-8'
                : selectedProject?.slug === 'studio-v1be'
                ? 'bg-[#0c0f14] p-4 sm:p-6 md:p-8'
                : 'bg-[#FAFAF8] p-4 sm:p-6'
            }`}
          >
            {selectedProject ? (
              selectedProject.slug === 'operater' ? (
                <OperaterCaseStudy
                  locale={language}
                  onBackToProjects={handleBackToProjects}
                  onNextCaseStudy={() => handleSelectProject('studio-v1be')}
                />
              ) : selectedProject.slug === 'studio-v1be' ? (
                <StudioV1beCaseStudy
                  locale={language}
                  onBackToProjects={handleBackToProjects}
                  onNextCaseStudy={() => handleSelectProject('operater')}
                />
              ) : (
                <div className="space-y-4 max-w-3xl mx-auto">
                  <button
                    type="button"
                    onClick={handleBackToProjects}
                    className="px-2.5 py-1 bg-[#ECE9D8] hover:bg-[#F4F4F0] active:bg-[#D4D0C8] border border-[#7F9DB9] rounded-xs text-xs font-bold text-slate-800 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
                  >
                    ← {language === 'tr' ? 'Tüm Projelere Dön' : 'Back to All Projects'}
                  </button>
                  <ProjectSummaryView project={selectedProject} locale={language} />
                </div>
              )
            ) : (
              <div className="w-full max-w-4xl mx-auto font-sans text-slate-900 space-y-5 select-text">
                {/* Folder Header Banner */}
                <div className="flex items-start gap-3.5 p-3.5 bg-[#F0EFE9] border border-[#D4D0C8] rounded-sm shadow-[inset_1px_1px_0_white]">
                  <div className="w-12 h-12 bg-white border border-[#7F9DB9] rounded-xs flex items-center justify-center shrink-0 shadow-xs">
                    <XpIcon name="folder" size={32} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-[#0055EA] text-white text-[10px] font-bold rounded-xs uppercase tracking-wider font-mono">
                        C:\Portfolio\Projects
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#0A246A] leading-tight">
                      {language === 'tr' ? 'Tüm Projeler & Vaka Analizleri' : 'All Projects & Case Studies'}
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                      {language === 'tr'
                        ? 'İncelemek istediğiniz projenin üzerine tıklayarak detaylı vaka analizini veya teknik özetini açabilirsiniz.'
                        : 'Click on any project below to open its in-depth case study or technical overview.'}
                    </p>
                  </div>
                </div>

                {/* Category 1: App Design */}
                <fieldset className="border border-[#D4D0C8] bg-white rounded-xs p-4 text-xs space-y-3 shadow-xs">
                  <legend className="px-2 font-bold text-[11px] text-[#0A246A] uppercase tracking-wide flex items-center gap-1.5">
                    <span>📁</span>
                    <span>{language === 'tr' ? 'App Design (Uygulama Tasarımı)' : 'App Design'}</span>
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {appDesignProjects.map((project) => (
                      <div
                        key={project.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelectProject(project.slug)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectProject(project.slug);
                          }
                        }}
                        className="p-3 bg-[#FAFAF8] hover:bg-[#F0F4FC] border border-[#D4D0C8] hover:border-[#316AC5] rounded-xs cursor-pointer transition-all flex flex-col justify-between gap-3 shadow-2xs group"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded-xs uppercase font-mono">
                              {language === 'tr' ? project.badgeTr : project.badgeEn}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {project.date}
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <XpIcon name="notepad" size={20} className="shrink-0 mt-0.5" />
                            <div className="min-w-0">
                              <h3 className="font-bold text-sm text-[#0A246A] group-hover:underline leading-snug">
                                {language === 'tr' ? project.titleTr : project.titleEn}
                              </h3>
                              <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                                {language === 'tr' ? project.summaryTr : project.summaryEn}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                          <span className="text-slate-500 font-medium">
                            {language === 'tr' ? 'Rol:' : 'Role:'} <strong className="text-slate-700">{language === 'tr' ? project.roleTr : project.roleEn}</strong>
                          </span>
                          <span className="text-blue-600 font-bold group-hover:translate-x-0.5 transition-transform">
                            {language === 'tr' ? 'Görüntüle →' : 'View →'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>

                {/* Category 2: Web Design & Development */}
                <fieldset className="border border-[#D4D0C8] bg-white rounded-xs p-4 text-xs space-y-3 shadow-xs">
                  <legend className="px-2 font-bold text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
                    <span>📁</span>
                    <span>{language === 'tr' ? 'Web Design & Development' : 'Web Design & Development'}</span>
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {webDesignProjects.map((project) => (
                      <div
                        key={project.id}
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelectProject(project.slug)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectProject(project.slug);
                          }
                        }}
                        className="p-3 bg-[#FAFAF8] hover:bg-[#F0FDF4] border border-[#D4D0C8] hover:border-emerald-600 rounded-xs cursor-pointer transition-all flex flex-col justify-between gap-3 shadow-2xs group"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-xs uppercase font-mono">
                              {language === 'tr' ? project.badgeTr : project.badgeEn}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">
                              {project.date}
                            </span>
                          </div>
                          <div className="flex items-start gap-2">
                            <XpIcon name="folder" size={20} className="shrink-0 mt-0.5" />
                            <div className="min-w-0">
                              <h3 className="font-bold text-sm text-[#0A246A] group-hover:underline leading-snug">
                                {language === 'tr' ? project.titleTr : project.titleEn}
                              </h3>
                              <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                                {language === 'tr' ? project.summaryTr : project.summaryEn}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
                          <span className="text-slate-500 font-medium">
                            {language === 'tr' ? 'Rol:' : 'Role:'} <strong className="text-slate-700">{language === 'tr' ? project.roleTr : project.roleEn}</strong>
                          </span>
                          <span className="text-emerald-700 font-bold group-hover:translate-x-0.5 transition-transform">
                            {language === 'tr' ? 'Görüntüle →' : 'View →'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
