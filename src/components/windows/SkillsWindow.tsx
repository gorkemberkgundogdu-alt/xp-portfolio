import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';
import { SKILLS_DATA } from '../../data/portfolioData';
import { XpIcon } from '../common/XpIcon';

export const SkillsWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);

  return (
    <MasterWindow
      id="skills"
      statusBar={
        <>
          <span>{SKILLS_DATA.length} Kategori</span>
          <span>Sistem Yetkinlikleri: Aktif</span>
        </>
      }
    >
      <div className="p-4 sm:p-6 md:p-8 bg-white h-full overflow-y-auto select-text font-sans">
        <div className="w-full max-w-5xl mx-auto space-y-6">
          {/* Header Banner */}
          <div className="flex items-center gap-3.5 border-b pb-4 border-slate-200">
            <XpIcon name="skills" size={36} />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {language === 'tr' ? 'Yetenekler & Araçlar' : 'Skills & Tools'}
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'tr'
                  ? 'Görkem Berk Gündoğdu — Doğrulanmış Tasarım, Geliştirme & AI Yetkinlikleri'
                  : 'Görkem Berk Gündoğdu — Verified Design, Development & AI Competencies'}
              </p>
            </div>
          </div>

          {/* 3 Categories with Skills Listed One-by-One Vertically */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {SKILLS_DATA.map((cat) => (
              <div
                key={cat.id}
                className="bg-slate-50/80 border border-slate-200 rounded-lg p-4 space-y-3.5 shadow-xs"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b pb-2.5 border-slate-200">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-blue-900">
                    {language === 'tr' ? cat.nameTr : cat.nameEn}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                    {cat.skills.length} {language === 'tr' ? 'araç' : 'skills'}
                  </span>
                </div>

                {/* Skills Listed Vertically (Alt alta teker teker) */}
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 p-2 bg-white rounded border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
                    >
                      <span
                        className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 select-none"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className="text-xs font-semibold text-slate-800 leading-snug">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
