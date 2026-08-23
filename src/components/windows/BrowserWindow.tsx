import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import { ARTICLES_DATA, getArticleBySlug } from '../../data/portfolioData';
import { SITE_CONFIG } from '../../config/site';

export const BrowserWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const activeArticleId = useWindowStore((state) => state.activeArticleId);

  const article =
    getArticleBySlug(activeArticleId || 'ai-driven-ui-ux', language) || ARTICLES_DATA[0];

  const currentPath =
    language === 'tr'
      ? `/makaleler/${article.slugTr}/`
      : `/en/articles/${article.slugEn}/`;

  const fullUrl = `${SITE_CONFIG.domain}${currentPath}`;

  return (
    <MasterWindow
      id="browser"
      menuBar={
        <div className="flex items-center gap-3">
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'D' : 'F'}</span>
            {language === 'tr' ? 'osya' : 'ile'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'D' : 'E'}</span>
            {language === 'tr' ? 'üzen' : 'dit'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'G' : 'V'}</span>
            {language === 'tr' ? 'örünüm' : 'iew'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'S' : 'F'}</span>
            {language === 'tr' ? 'ık Kullanılanlar' : 'avorites'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'A' : 'T'}</span>
            {language === 'tr' ? 'raçlar' : 'ools'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'Y' : 'H'}</span>
            {language === 'tr' ? 'ardım' : 'elp'}
          </span>
        </div>
      }
      statusBar={
        <>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> {language === 'tr' ? 'Bitti' : 'Done'}
          </span>
          <span>{language === 'tr' ? 'İnternet | Korumalı Mod: Açık' : 'Internet | Protected Mode: On'}</span>
          <span>100%</span>
        </>
      }
    >
      <div className="flex flex-col h-full bg-white">
        {/* IE Navigation & Address Bar */}
        <div className="bg-[#ECE9D8] border-b border-[#D4D0C8] p-1.5 space-y-1 select-none">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px] flex items-center gap-1"
            >
              ⬅ {language === 'tr' ? 'Geri' : 'Back'}
            </button>
            <button
              type="button"
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px] opacity-60"
            >
              {language === 'tr' ? 'İleri' : 'Forward'} ➡
            </button>
            <button
              type="button"
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px]"
            >
              🛑 {language === 'tr' ? 'Durdur' : 'Stop'}
            </button>
            <button
              type="button"
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px]"
            >
              🔄 {language === 'tr' ? 'Yenile' : 'Refresh'}
            </button>
            <button
              type="button"
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px]"
            >
              🏠 {language === 'tr' ? 'Giriş' : 'Home'}
            </button>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-[12px] text-slate-600 font-medium">
              {language === 'tr' ? 'Adres:' : 'Address:'}
            </span>
            <div className="flex-1 bg-white border border-[#7F9DB9] px-2 py-0.5 rounded-sm flex items-center gap-1.5">
              <XpIcon name="ie" size={14} />
              <input
                type="text"
                readOnly
                value={fullUrl}
                className="w-full text-[12px] text-slate-800 outline-none font-sans"
              />
            </div>
            <button
              type="button"
              className="px-3 py-0.5 bg-[#ECE9D8] border border-[#7F9DB9] rounded-sm text-[12px] hover:bg-slate-200"
            >
              {language === 'tr' ? 'Git' : 'Go'} ➡
            </button>
          </div>
        </div>

        {/* Article Webpage Content */}
        <div className="flex-1 p-6 md:p-8 max-w-3xl mx-auto overflow-y-auto space-y-6 select-text font-sans w-full">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              {language === 'tr' ? 'Makale & Düşünceler' : 'Article & Insights'}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 leading-tight">
              {language === 'tr' ? article.titleTr : article.titleEn}
            </h1>
            <div className="text-xs text-slate-500 mt-2 flex items-center gap-2">
              <span>Görkem Berk Gündoğdu</span> • <span>{article.date}</span> •{' '}
              <span>{language === 'tr' ? article.readTimeTr : article.readTimeEn}</span>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
            {(language === 'tr' ? article.contentTr : article.contentEn).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg space-y-2">
            <h3 className="font-semibold text-slate-900 text-sm">
              {language === 'tr' ? 'Kalıcı Rota / Deep Link:' : 'Canonical Route / Deep Link:'}
            </h3>
            <div className="text-xs text-slate-600 font-mono">
              <a href={currentPath} className="text-blue-700 underline">
                {currentPath}
              </a>
            </div>
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
