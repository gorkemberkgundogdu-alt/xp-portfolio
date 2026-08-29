import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';
import { XpIcon } from '../common/XpIcon';
import { SkillsExplorer } from '../common/SkillsExplorer';

export const SkillsWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);

  return (
    <MasterWindow
      id="skills"
      statusBar={
        <>
          <span>{language === 'tr' ? 'Yetenekler & Araçlar' : 'Skills & Tools'}</span>
          <span>{language === 'tr' ? 'Sistem Yetkinlikleri: Aktif' : 'System Competencies: Active'}</span>
        </>
      }
    >
      <div className="p-4 sm:p-6 md:p-8 bg-white h-full overflow-y-auto select-text font-sans">
        <div className="w-full max-w-5xl mx-auto space-y-5">
          {/* Header Banner */}
          <div className="flex items-center gap-3.5 border-b pb-3.5 border-slate-200">
            <XpIcon name="skills" size={32} />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {language === 'tr' ? 'Yetenekler & Araçlar' : 'Skills & Tools'}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {language === 'tr'
                  ? 'Görkem Berk Gündoğdu — Tasarım, Geliştirme & AI Yetkinlikleri'
                  : 'Görkem Berk Gündoğdu — Design, Development & AI Competencies'}
              </p>
            </div>
          </div>

          {/* Interactive Skills Explorer */}
          <SkillsExplorer locale={language} variant="desktop" />
        </div>
      </div>
    </MasterWindow>
  );
};
