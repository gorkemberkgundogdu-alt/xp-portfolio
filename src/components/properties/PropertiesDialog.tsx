import React, { useState } from 'react';
import {
  IDENTITY_DATA,
  PROJECTS_DATA,
  ARTICLES_DATA,
  SKILLS_DATA,
  type ProjectItem,
  type ArticleItem,
} from '../../data/portfolioData';
import { XpIcon } from '../common/XpIcon';
import { AboutAccordion } from '../common/AboutAccordion';
import { OperaterCaseStudy } from '../case-study/OperaterCaseStudy';

export type PropertiesTab = 'general' | 'projects' | 'articles' | 'skills' | 'cv' | 'contact';

interface PropertiesDialogProps {
  currentLocale: 'tr' | 'en';
  initialTab?: PropertiesTab;
  initialProjectSlug?: string;
  initialArticleSlug?: string;
}

const TABS: { id: PropertiesTab; labelTr: string; labelEn: string; icon: string }[] = [
  { id: 'general', labelTr: 'Genel', labelEn: 'General', icon: 'computer' },
  { id: 'projects', labelTr: 'Projeler', labelEn: 'Projects', icon: 'folder' },
  { id: 'articles', labelTr: 'Makaleler', labelEn: 'Articles', icon: 'ie' },
  { id: 'skills', labelTr: 'Yetenekler', labelEn: 'Skills & Tools', icon: 'skills' },
  { id: 'cv', labelTr: 'Özgeçmiş (CV)', labelEn: 'CV', icon: 'pdf' },
  { id: 'contact', labelTr: 'İletişim', labelEn: 'Contact', icon: 'msn' },
];

export const PropertiesDialog: React.FC<PropertiesDialogProps> = ({
  currentLocale,
  initialTab = 'general',
  initialProjectSlug,
  initialArticleSlug,
}) => {
  const [activeTab, setActiveTab] = useState<PropertiesTab>(initialTab);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(
    initialProjectSlug || null
  );
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string | null>(
    initialArticleSlug || null
  );

  // MSN Contact form state
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactStatus, setContactStatus] = useState<string | null>(null);

  const activeTabIndex = TABS.findIndex((t) => t.id === activeTab);

  const handlePrevTab = () => {
    if (activeTabIndex > 0) {
      setActiveTab(TABS[activeTabIndex - 1].id);
    }
  };

  const handleNextTab = () => {
    if (activeTabIndex < TABS.length - 1) {
      setActiveTab(TABS[activeTabIndex + 1].id);
    }
  };

  // Language switch URL helper preserving current entity
  const getLanguageToggleUrl = (targetLocale: 'tr' | 'en') => {
    if (targetLocale === 'en') {
      if (activeTab === 'projects' && selectedProjectSlug) {
        return `/en/projects/${selectedProjectSlug}/`;
      }
      if (activeTab === 'articles' && selectedArticleSlug) {
        return `/en/articles/ai-driven-ui-ux-design/`;
      }
      return '/en/';
    } else {
      if (activeTab === 'projects' && selectedProjectSlug) {
        return `/projeler/${selectedProjectSlug}/`;
      }
      if (activeTab === 'articles' && selectedArticleSlug) {
        return `/makaleler/ai-ile-ui-ux-tasarimi/`;
      }
      return '/';
    }
  };

  // Selected project or article
  const currentProject = selectedProjectSlug
    ? PROJECTS_DATA.find((p) => p.slug === selectedProjectSlug)
    : null;

  const currentArticle = selectedArticleSlug
    ? ARTICLES_DATA.find(
        (a) => a.slugTr === selectedArticleSlug || a.slugEn === selectedArticleSlug
      )
    : null;

  const appProjects = PROJECTS_DATA.filter((p) => p.category === 'app-design');
  const webProjects = PROJECTS_DATA.filter((p) => p.category === 'web-design');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMsg.trim()) return;
    setContactStatus(
      currentLocale === 'tr'
        ? 'Mesajlaşma özelliği yakında aktif olacaktır. Acil konular için lütfen WhatsApp üzerinden ulaşın.'
        : 'Messaging will be available shortly. For urgent inquiries, please reach out via WhatsApp.'
    );
  };

  return (
    <div
      className="fixed inset-0 w-full h-[100dvh] flex flex-col bg-[#1F64DE] p-1 sm:p-4 overflow-hidden select-none font-sans"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #114EBF 0%, #2A79F5 25%, #60A5FA 60%, #93C5FD 100%)',
      }}
    >
      {/* Properties Dialog Outer Frame (Fixed full-height container) */}
      <div className="flex-1 flex flex-col bg-[#ECE9D8] rounded-t-lg rounded-b-sm border-2 border-[#0055EA] shadow-2xl overflow-hidden max-w-4xl mx-auto w-full h-full min-h-0">
        {/* Luna Titlebar (Fixed) */}
        <div className="h-8 bg-gradient-to-r from-[#0055EA] via-[#2A75F3] to-[#0055EA] px-2 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-2 font-bold text-xs truncate">
            <XpIcon name="computer" size={16} />
            <span>
              {IDENTITY_DATA.name} - {currentLocale === 'tr' ? 'Özellikler' : 'Properties'}
            </span>
          </div>

          {/* Decorative Chrome Controls */}
          <div
            className="flex items-center gap-1 opacity-90 pointer-events-none"
            aria-hidden="true"
            tabIndex={-1}
          >
            <div className="w-4 h-4 bg-[#2A75F3] border border-white/60 rounded-xs flex items-center justify-center text-[10px] leading-none">
              _
            </div>
            <div className="w-4 h-4 bg-[#2A75F3] border border-white/60 rounded-xs flex items-center justify-center text-[10px] leading-none">
              □
            </div>
            <div className="w-4 h-4 bg-[#D9381E] border border-white/60 rounded-xs flex items-center justify-center text-[10px] font-bold leading-none">
              ✕
            </div>
          </div>
        </div>

        {/* 6 Tabs (Stable static 2-row layout, active tab highlights in-place without moving/swapping) */}
        <div className="bg-[#ECE9D8] pt-1.5 px-2 flex flex-col shrink-0 select-none border-b border-[#919B9C]">
          {/* Row 1: General, Projects, Articles */}
          <div className="grid grid-cols-3 gap-1 mb-1">
            {TABS.slice(0, 3).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === 'projects') setSelectedProjectSlug(null);
                    if (tab.id === 'articles') setSelectedArticleSlug(null);
                  }}
                  className={`px-1.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-t-md transition-colors flex items-center justify-center gap-1 cursor-pointer truncate ${
                    isActive
                      ? 'bg-white text-blue-900 font-bold border-t-2 border-x border-[#0055EA] border-b-transparent shadow-xs -mb-[1px] z-10'
                      : 'bg-[#DCD8CA] text-slate-700 hover:bg-[#E4E0D2] border border-[#B5B0A2] border-b-[#919B9C]'
                  }`}
                >
                  <XpIcon name={tab.icon} size={13} className="shrink-0" />
                  <span className="truncate">{currentLocale === 'tr' ? tab.labelTr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* Row 2: Skills & Tools, CV, Contact */}
          <div className="grid grid-cols-3 gap-1 -mb-[1px]">
            {TABS.slice(3, 6).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === 'projects') setSelectedProjectSlug(null);
                    if (tab.id === 'articles') setSelectedArticleSlug(null);
                  }}
                  className={`px-1.5 py-1.5 text-[11px] sm:text-xs font-semibold rounded-t-md transition-colors flex items-center justify-center gap-1 cursor-pointer truncate ${
                    isActive
                      ? 'bg-white text-blue-900 font-bold border-t-2 border-x border-[#0055EA] border-b-transparent shadow-xs -mb-[1px] z-10'
                      : 'bg-[#DCD8CA] text-slate-700 hover:bg-[#E4E0D2] border border-[#B5B0A2] border-b-[#919B9C]'
                  }`}
                >
                  <XpIcon name={tab.icon} size={13} className="shrink-0" />
                  <span className="truncate">{currentLocale === 'tr' ? tab.labelTr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Scrollable Content Container (Only this body scrolls) */}
        <div className="flex-1 bg-white p-4 md:p-6 overflow-y-auto min-h-0 select-text font-sans overscroll-contain">
          {/* TAB 1: GENERAL */}
          {activeTab === 'general' && (
            <div className="space-y-5 max-w-2xl mx-auto">
              {/* Recruiter-friendly Profile Card with real Photo */}
              <div className="bg-[#F8F7F2] p-4 rounded-lg border border-[#D4D0C8] shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img
                  src="/assets/gorkem-berk-gundogdu.jpg"
                  alt="Görkem Berk Gündoğdu"
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover border-2 border-[#7F9DB9] shadow-sm shrink-0"
                />
                <div className="flex-1 text-center sm:text-left space-y-1.5 min-w-0">
                  <h1 className="text-xl font-bold text-slate-900">{IDENTITY_DATA.name}</h1>
                  <p className="text-xs sm:text-sm font-bold text-blue-700 leading-snug">
                    {currentLocale === 'tr' ? IDENTITY_DATA.titleTr : IDENTITY_DATA.titleEn}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed max-w-xl">
                    {currentLocale === 'tr' ? IDENTITY_DATA.subtextTr : IDENTITY_DATA.subtextEn}
                  </p>
                  <p className="text-xs text-slate-500">
                    📍 {currentLocale === 'tr' ? IDENTITY_DATA.locationTr : IDENTITY_DATA.locationEn}
                  </p>
                  {/* Current Professional Role Badges (Clickable external links with official logos) */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1.5">
                    <a
                      href="https://operater.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-950 border border-blue-200 hover:border-blue-300 rounded-md text-[11px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 no-underline max-w-full"
                      title="Operater.io · UI/UX Designer"
                    >
                      <img
                        src="/assets/operater-logo.webp"
                        alt="Operater.io"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 rounded-xs shrink-0 object-contain"
                      />
                      <span className="truncate">Operater.io · UI/UX Designer</span>
                    </a>

                    <a
                      href="https://v1be.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 hover:border-emerald-300 rounded-md text-[11px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 no-underline max-w-full"
                      title="v1be.io · Co-Founder"
                    >
                      <img
                        src="/assets/v1be-logo.webp"
                        alt="v1be.io"
                        width={14}
                        height={14}
                        className="w-3.5 h-3.5 rounded-xs shrink-0 object-contain"
                      />
                      <span className="truncate">v1be.io · Co-Founder</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Prominent Retro-styled LinkedIn Button */}
              <div>
                <a
                  href={IDENTITY_DATA.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-[#0A66C2] hover:bg-[#084e96] text-white rounded font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                >
                  <span>🔗</span>
                  <span>{currentLocale === 'tr' ? 'LinkedIn Profilini Ziyaret Et' : 'Connect on LinkedIn'}</span>
                </a>
              </div>

              {/* Personal About Sections (Multi-open progressive disclosure accordion) */}
              <div className="space-y-2.5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {currentLocale === 'tr' ? 'Hakkında' : 'About'}
                </h2>
                <AboutAccordion locale={currentLocale} variant="properties" />
              </div>

              {/* External Links */}
              <div className="border-t pt-4 border-slate-200 flex flex-wrap gap-2 text-xs">
                <a
                  href={IDENTITY_DATA.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded font-semibold text-slate-800"
                >
                  🐙 GitHub
                </a>
                <a
                  href={`mailto:${IDENTITY_DATA.social.email}`}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded font-semibold text-slate-800"
                >
                  ✉️ {IDENTITY_DATA.social.email}
                </a>
                <a
                  href={IDENTITY_DATA.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 rounded font-semibold"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-5 max-w-3xl mx-auto">
              {!currentProject ? (
                // Projects List View
                <div className="space-y-6">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      {currentLocale === 'tr' ? 'Projeler & Ürün Çalışmaları' : 'Projects & Product Work'}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {currentLocale === 'tr'
                        ? 'Detayları ve mini case study çıktısını incelemek için bir projeye dokunun.'
                        : 'Tap on any project to view its overview and mini case study.'}
                    </p>
                  </div>

                  {/* Category 1: App Design */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-blue-900 uppercase tracking-wider border-b pb-1 border-blue-100 flex items-center gap-1.5">
                      <span>📁</span>
                      <span>{currentLocale === 'tr' ? 'App Design (Uygulama Tasarımı)' : 'App Design'}</span>
                    </div>
                    <div className="space-y-2">
                      {appProjects.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedProjectSlug(p.slug)}
                          className="p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg cursor-pointer transition-all shadow-xs flex items-center justify-between gap-3"
                        >
                          <div className="space-y-1 min-w-0">
                            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded uppercase">
                              {currentLocale === 'tr' ? p.badgeTr : p.badgeEn}
                            </span>
                            <h3 className="font-bold text-sm text-slate-900 truncate">
                              {currentLocale === 'tr' ? p.titleTr : p.titleEn}
                            </h3>
                            <p className="text-xs text-slate-600 line-clamp-1">
                              {currentLocale === 'tr' ? p.summaryTr : p.summaryEn}
                            </p>
                          </div>
                          <span className="text-blue-600 font-bold text-lg shrink-0">→</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2: Web Design & Development */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider border-b pb-1 border-emerald-100 flex items-center gap-1.5">
                      <span>📁</span>
                      <span>{currentLocale === 'tr' ? 'Web Design & Development' : 'Web Design & Development'}</span>
                    </div>
                    <div className="space-y-2">
                      {webProjects.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedProjectSlug(p.slug)}
                          className="p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-lg cursor-pointer transition-all shadow-xs flex items-center justify-between gap-3"
                        >
                          <div className="space-y-1 min-w-0">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">
                              {currentLocale === 'tr' ? p.badgeTr : p.badgeEn}
                            </span>
                            <h3 className="font-bold text-sm text-slate-900 truncate">
                              {currentLocale === 'tr' ? p.titleTr : p.titleEn}
                            </h3>
                            <p className="text-xs text-slate-600 line-clamp-1">
                              {currentLocale === 'tr' ? p.summaryTr : p.summaryEn}
                            </p>
                          </div>
                          <span className="text-emerald-600 font-bold text-lg shrink-0">→</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // In-shell Project Detail View
                <div className="space-y-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProjectSlug(null)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-xs font-bold text-slate-800 flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                  >
                    ← {currentLocale === 'tr' ? 'Tüm Projelere Dön' : 'Back to Projects'}
                  </button>

                  {currentProject.slug === 'operater' ? (
                    <div className="bg-[#060911] p-4 sm:p-5 rounded-xl border border-slate-800">
                      <OperaterCaseStudy locale={currentLocale} />
                    </div>
                  ) : (
                    <div className="space-y-5">
                      <div className="border-b pb-3 border-slate-200 space-y-1.5">
                        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded uppercase">
                          {currentLocale === 'tr' ? currentProject.badgeTr : currentProject.badgeEn}
                        </span>
                        <h2 className="text-lg md:text-xl font-bold text-slate-900">
                          {currentLocale === 'tr' ? currentProject.titleTr : currentProject.titleEn}
                        </h2>
                        <div className="text-xs text-slate-500">
                          📅 {currentProject.date} • <strong>{currentLocale === 'tr' ? currentProject.roleTr : currentProject.roleEn}</strong>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {currentLocale === 'tr' ? 'Açıklama & Kapsam' : 'Overview & Scope'}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                          {currentLocale === 'tr' ? currentProject.descriptionTr : currentProject.descriptionEn}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {currentLocale === 'tr' ? 'Kullanılan Teknolojiler' : 'Technologies & Skills'}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {currentProject.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-900 rounded text-xs font-medium"
                            >
                              🏷️ {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {currentProject.highlightsTr && (
                        <div className="space-y-2">
                          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            {currentLocale === 'tr' ? 'Önemli Çıktılar' : 'Key Highlights'}
                          </h3>
                          <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside bg-slate-50 p-3 rounded-lg border border-slate-200">
                            {(currentLocale === 'tr' ? currentProject.highlightsTr : currentProject.highlightsEn || []).map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded text-center transition-colors shadow-xs"
                        >
                          🌐 {currentLocale === 'tr' ? 'Canlı Projeyi Ziyaret Et' : 'Visit Live Project'} →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ARTICLES */}
          {activeTab === 'articles' && (
            <div className="space-y-5 max-w-3xl mx-auto">
              {!currentArticle ? (
                // Articles List View
                <div className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      {currentLocale === 'tr' ? 'Makaleler & Düşünceler' : 'Articles & Thoughts'}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {currentLocale === 'tr'
                        ? 'Tasarım, yapay zeka ve ön yüz mimarisi üzerine yazılar.'
                        : 'Articles and insights on UI/UX, AI workflows, and front-end engineering.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {ARTICLES_DATA.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => setSelectedArticleSlug(currentLocale === 'tr' ? art.slugTr : art.slugEn)}
                        className="p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg cursor-pointer transition-all shadow-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>📅 {art.date}</span>
                          <span>⏳ {currentLocale === 'tr' ? art.readTimeTr : art.readTimeEn}</span>
                        </div>
                        <h3 className="font-bold text-sm text-slate-900">
                          {currentLocale === 'tr' ? art.titleTr : art.titleEn}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {currentLocale === 'tr' ? art.summaryTr : art.summaryEn}
                        </p>
                        <div className="text-blue-600 font-bold text-xs pt-1">
                          {currentLocale === 'tr' ? 'Devamını Oku →' : 'Read More →'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // In-shell Article Detail View
                <div className="space-y-5">
                  <button
                    type="button"
                    onClick={() => setSelectedArticleSlug(null)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-xs font-bold text-slate-800 flex items-center gap-1 cursor-pointer transition-colors shadow-xs"
                  >
                    ← {currentLocale === 'tr' ? 'Tüm Makalelere Dön' : 'Back to Articles'}
                  </button>

                  <div className="border-b pb-3 border-slate-200 space-y-1">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                      {currentLocale === 'tr' ? currentArticle.titleTr : currentArticle.titleEn}
                    </h2>
                    <div className="text-xs text-slate-500">
                      Görkem Berk Gündoğdu • {currentArticle.date} • {currentLocale === 'tr' ? currentArticle.readTimeTr : currentArticle.readTimeEn}
                    </div>
                  </div>

                  <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
                    {(currentLocale === 'tr' ? currentArticle.contentTr : currentArticle.contentEn).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: SKILLS & TOOLS */}
          {activeTab === 'skills' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  {currentLocale === 'tr' ? 'Yetenekler & Araçlar' : 'Skills & Tools'}
                </h2>
                <p className="text-xs text-slate-500">
                  {currentLocale === 'tr'
                    ? 'Doğrulanmış tasarım ve web geliştirme yetkinlikleri.'
                    : 'Verified design and front-end engineering competencies.'}
                </p>
              </div>

              <div className="space-y-4">
                {SKILLS_DATA.map((cat) => (
                  <div key={cat.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
                    <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center justify-between border-b pb-1 border-blue-100">
                      <span>{currentLocale === 'tr' ? cat.nameTr : cat.nameEn}</span>
                      <span className="text-[10px] text-slate-400 font-mono">({cat.skills.length})</span>
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 bg-white border border-slate-300 rounded text-xs text-slate-700 font-medium shadow-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CV */}
          {activeTab === 'cv' && (
            <div className="space-y-4 max-w-2xl mx-auto">
              {/* Top Banner with Persistent Top-Right Download Control (No scroll required!) */}
              <div className="p-3 bg-[#ECE9D8] border border-[#D4D0C8] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                <div className="text-xs font-bold text-slate-800 truncate">
                  📄 Gorkem_Berk_Gundogdu_CV_2026.pdf
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={IDENTITY_DATA.social.cvPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-xs font-semibold text-slate-800 shadow-xs transition-colors"
                  >
                    🔍 {currentLocale === 'tr' ? 'Aç' : 'Open'} ↗
                  </a>
                  <a
                    href={IDENTITY_DATA.social.cvPath}
                    download="Gorkem_Berk_Gundogdu_CV_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
                  >
                    📥 {currentLocale === 'tr' ? 'CV İndir (PDF)' : 'Download (PDF)'}
                  </a>
                </div>
              </div>

              {/* Document Overview Preview */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-4 text-xs">
                <div className="border-b pb-2 border-slate-300 flex justify-between items-baseline">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{IDENTITY_DATA.name}</h3>
                    <p className="text-blue-600 font-semibold">{IDENTITY_DATA.taglineTr}</p>
                  </div>
                  <div className="text-slate-500 font-mono text-[11px]">{IDENTITY_DATA.social.email}</div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold uppercase text-slate-500 text-[10px]">
                    {currentLocale === 'tr' ? 'Deneyim Özeti' : 'Experience Summary'}
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {currentLocale === 'tr' ? IDENTITY_DATA.aboutShortTr : IDENTITY_DATA.aboutShortEn}
                  </p>
                </div>

                <div className="space-y-2 border-t pt-2 border-slate-200">
                  <div>
                    <strong>Operater.io (Jan 2026 - Present):</strong> UI/UX Designer
                  </div>
                  <div>
                    <strong>v1be.io (July 2026 - Present):</strong> Co-Founder
                  </div>
                  <div>
                    <strong>Freelance (Rook AI & MyNessa Media):</strong> Web Designer & Developer
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-5 max-w-2xl mx-auto">
              <div className="p-3 bg-gradient-to-b from-[#E6EFF9] to-[#D5E4F5] border border-[#B5CDE8] rounded-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <XpIcon name="msn" size={28} />
                  <div>
                    <div className="font-bold text-xs text-slate-900">{IDENTITY_DATA.name}</div>
                    <div className="text-[11px] text-slate-600">{IDENTITY_DATA.social.email}</div>
                  </div>
                </div>
                <a
                  href={IDENTITY_DATA.social.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold shadow-xs transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>

              {/* Form */}
              <form onSubmit={handleContactSubmit} className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">
                    {currentLocale === 'tr' ? 'E-posta Adresiniz (isteğe bağlı):' : 'Your Email (optional):'}
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="ornek@alanadi.com"
                    className="w-full px-3 py-1.5 bg-white border border-[#7F9DB9] rounded text-xs outline-none focus:border-blue-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">
                    {currentLocale === 'tr' ? 'Mesajınız:' : 'Message:'}
                  </label>
                  <textarea
                    rows={3}
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder={currentLocale === 'tr' ? 'Mesajınızı buraya yazın...' : 'Type your message here...'}
                    className="w-full px-3 py-1.5 bg-white border border-[#7F9DB9] rounded text-xs outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#316AC5] hover:bg-[#2556A3] text-white font-bold text-xs rounded shadow transition-colors cursor-pointer"
                >
                  {currentLocale === 'tr' ? 'Gönder' : 'Send'}
                </button>

                {contactStatus && (
                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900 font-medium">
                    ℹ️ {contactStatus}
                  </div>
                )}
              </form>
            </div>
          )}
        </div>

        {/* Tab Footer (Fixed Functional Linear Navigation + TR/EN Switcher) */}
        <div className="bg-[#ECE9D8] border-t border-[#D4D0C8] px-3 py-2.5 flex items-center justify-between gap-2 shrink-0 select-none">
          {/* Functional Linear Navigation (< Previous / Next >) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={activeTabIndex === 0}
              onClick={handlePrevTab}
              className={`px-3 py-1.5 rounded border text-xs font-bold flex items-center gap-1 shadow-xs transition-colors ${
                activeTabIndex === 0
                  ? 'bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed opacity-50'
                  : 'bg-[#F4F4F0] hover:bg-white text-slate-800 border-[#7F9DB9] cursor-pointer'
              }`}
            >
              ◀ {currentLocale === 'tr' ? 'Önceki' : 'Previous'}
            </button>

            <button
              type="button"
              disabled={activeTabIndex === TABS.length - 1}
              onClick={handleNextTab}
              className={`px-3 py-1.5 rounded border text-xs font-bold flex items-center gap-1 shadow-xs transition-colors ${
                activeTabIndex === TABS.length - 1
                  ? 'bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed opacity-50'
                  : 'bg-[#0055EA] hover:bg-[#0045B8] text-white border-[#003D9E] cursor-pointer'
              }`}
            >
              {currentLocale === 'tr' ? 'Sonraki' : 'Next'} ▶
            </button>
          </div>

          {/* Meaningful TR / EN Navigation Switch */}
          <div className="flex items-center gap-1.5 text-xs font-bold">
            <span className="text-[11px] text-slate-500 font-mono hidden xs:inline">
              {activeTabIndex + 1}/{TABS.length}
            </span>

            <a
              href={getLanguageToggleUrl('tr')}
              className={`px-2 py-1 rounded border text-xs no-underline ${
                currentLocale === 'tr'
                  ? 'bg-blue-600 text-white border-blue-700'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              TR
            </a>
            <a
              href={getLanguageToggleUrl('en')}
              className={`px-2 py-1 rounded border text-xs no-underline ${
                currentLocale === 'en'
                  ? 'bg-blue-600 text-white border-blue-700'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              EN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
