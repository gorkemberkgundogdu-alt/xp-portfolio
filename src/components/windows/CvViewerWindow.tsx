import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';
import { IDENTITY_DATA } from '../../data/portfolioData';

export const CvViewerWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);

  return (
    <MasterWindow
      id="cv"
      statusBar={
        <>
          <span>Gorkem_Berk_Gundogdu_CV_2026.pdf</span>
          <span>{language === 'tr' ? 'Sayfa 1 / 1' : 'Page 1 / 1'}</span>
          <span>{language === 'tr' ? '100% Görünüm' : '100% View'}</span>
        </>
      }
    >
      <div className="flex flex-col h-full bg-[#525659]">
        {/* XP Picture/Document Viewer Top Toolbar */}
        <div className="bg-[#ECE9D8] border-b border-[#D4D0C8] p-1.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700 px-1">
              📄 Gorkem_Berk_Gundogdu_CV_2026.pdf
            </span>
            <a
              href={IDENTITY_DATA.social.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] font-medium text-slate-800 flex items-center gap-1 shadow-xs transition-colors"
            >
              🔍 {language === 'tr' ? 'Tam Sayfa Aç' : 'Open in New Tab'} ↗
            </a>
          </div>

          <div>
            <a
              href={IDENTITY_DATA.social.cvPath}
              download="Gorkem_Berk_Gundogdu_CV_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[12px] font-bold flex items-center gap-1 shadow-xs transition-colors cursor-pointer"
            >
              📥 {language === 'tr' ? 'CV İndir (PDF)' : 'Download CV (PDF)'}
            </a>
          </div>
        </div>

        {/* Real PDF Document Embed with Fallback */}
        <div className="flex-1 w-full h-full bg-[#525659] overflow-hidden flex flex-col">
          <iframe
            src={`${IDENTITY_DATA.social.cvPath}#toolbar=1&navpanes=0`}
            title="Görkem Berk Gündoğdu CV"
            className="w-full flex-1 border-0 bg-white"
          />
        </div>
      </div>
    </MasterWindow>
  );
};
