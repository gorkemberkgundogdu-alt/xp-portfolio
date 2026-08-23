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
      <div className="p-4 md:p-6 bg-white h-full overflow-y-auto space-y-6">
        <div className="flex items-center gap-3 border-b pb-3 border-slate-200">
          <XpIcon name="skills" size={32} />
          <div>
            <h2 className="text-base md:text-lg font-bold text-slate-900">
              {language === 'tr' ? 'Yetenekler & Araçlar' : 'Skills & Tools'}
            </h2>
            <p className="text-xs text-slate-500">
              {language === 'tr'
                ? 'Görkem Berk Gündoğdu — Doğrulanmış Tasarım & Geliştirme Yetkinlikleri'
                : 'Görkem Berk Gündoğdu — Verified Design & Development Competencies'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS_DATA.map((cat) => (
            <div
              key={cat.id}
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 shadow-sm space-y-3"
            >
              <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider border-b pb-1.5 border-blue-100 flex items-center justify-between">
                <span>{language === 'tr' ? cat.nameTr : cat.nameEn}</span>
                <span className="font-mono text-[10px] text-slate-400">({cat.skills.length})</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-white hover:bg-blue-50 border border-slate-300 rounded text-xs text-slate-700 font-medium transition-colors shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MasterWindow>
  );
};
