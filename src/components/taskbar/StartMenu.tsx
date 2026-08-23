import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '../../stores/windowStore';
import { XpIcon } from '../common/XpIcon';
import { IDENTITY_DATA } from '../../data/portfolioData';
import type { WindowId } from '../../types/window';

export const StartMenu: React.FC = () => {
  const isStartMenuOpen = useWindowStore((state) => state.isStartMenuOpen);
  const toggleStartMenu = useWindowStore((state) => state.toggleStartMenu);
  const openWindow = useWindowStore((state) => state.openWindow);
  const language = useWindowStore((state) => state.language);

  const handleOpenItem = (id: WindowId) => {
    openWindow(id);
    toggleStartMenu(false);
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, id: WindowId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenItem(id);
    }
  };

  return (
    <AnimatePresence>
      {isStartMenuOpen && (
        <motion.div
          role="menu"
          aria-label="Windows XP Başlat Menüsü"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="fixed bottom-[30px] left-0 w-[380px] bg-[#ECE9D8] rounded-t-[6px] border-2 border-[#0055EA] shadow-2xl z-50 flex flex-col select-none overflow-hidden font-sans"
        >
          {/* Header Profile Bar */}
          <div className="h-[52px] bg-gradient-to-r from-[#0058EE] via-[#2F82FF] to-[#0055EA] px-3 flex items-center gap-3 border-b border-[#0A246A]">
            <div className="w-10 h-10 rounded-md border-2 border-white bg-blue-700 text-white font-bold overflow-hidden shadow-inner flex items-center justify-center text-sm">
              GB
            </div>
            <div className="text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)] min-w-0">
              <div className="font-bold text-[14px] truncate">{IDENTITY_DATA.name}</div>
              <div className="text-[11px] text-blue-100 truncate">
                {language === 'tr' ? IDENTITY_DATA.titleTr : IDENTITY_DATA.titleEn}
              </div>
            </div>
          </div>

          {/* Main 2-Column Menu Body */}
          <div className="flex bg-white min-h-[300px]">
            {/* Left Column - Frequent Apps */}
            <div className="w-[52%] p-2 space-y-1 bg-white border-r border-[#D4D0C8]">
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('readme')}
                onKeyDown={(e) => handleItemKeyDown(e, 'readme')}
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer group outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <XpIcon name="notepad" size={24} />
                <div className="min-w-0">
                  <div className="text-[12px] font-bold">
                    {language === 'tr' ? 'Beni Oku (Not Defteri)' : 'Readme (Notepad)'}
                  </div>
                  <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                    {language === 'tr' ? 'Hakkımda & Vizyon' : 'About & Vision'}
                  </div>
                </div>
              </div>

              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('projects')}
                onKeyDown={(e) => handleItemKeyDown(e, 'projects')}
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer group outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <XpIcon name="folder" size={24} />
                <div className="min-w-0">
                  <div className="text-[12px] font-bold">
                    {language === 'tr' ? 'Projelerim' : 'Projects'}
                  </div>
                  <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                    Operater.io & v1be
                  </div>
                </div>
              </div>

              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('browser')}
                onKeyDown={(e) => handleItemKeyDown(e, 'browser')}
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer group outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <XpIcon name="ie" size={24} />
                <div className="min-w-0">
                  <div className="text-[12px] font-bold">Internet Explorer</div>
                  <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                    {language === 'tr' ? 'Makaleler & Blog' : 'Articles & Blog'}
                  </div>
                </div>
              </div>

              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('skills')}
                onKeyDown={(e) => handleItemKeyDown(e, 'skills')}
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer group outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <XpIcon name="skills" size={24} />
                <div className="min-w-0">
                  <div className="text-[12px] font-bold">
                    {language === 'tr' ? 'Yetenekler & Araçlar' : 'Skills & Tools'}
                  </div>
                  <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                    UI/UX, Frontend & AI
                  </div>
                </div>
              </div>

              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('cv')}
                onKeyDown={(e) => handleItemKeyDown(e, 'cv')}
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer group outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <XpIcon name="pdf" size={24} />
                <div className="min-w-0">
                  <div className="text-[12px] font-bold">CV_2026.pdf</div>
                  <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                    {language === 'tr' ? 'Özgeçmiş Belgesi' : 'Curriculum Vitae'}
                  </div>
                </div>
              </div>

              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('contact')}
                onKeyDown={(e) => handleItemKeyDown(e, 'contact')}
                className="flex items-center gap-2 p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer group outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <XpIcon name="msn" size={24} />
                <div className="min-w-0">
                  <div className="text-[12px] font-bold">MSN Messenger</div>
                  <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                    {language === 'tr' ? 'Titreşim & İletişim' : 'Chat & Contact'}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Places & Links */}
            <div className="w-[48%] p-2 bg-[#D3E5FA] space-y-1 text-[#0A246A] text-[11px] font-semibold">
              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('projects')}
                onKeyDown={(e) => handleItemKeyDown(e, 'projects')}
                className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <span className="text-[14px]">📁</span>
                <span>{language === 'tr' ? 'Projelerim' : 'My Projects'}</span>
              </div>

              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('skills')}
                onKeyDown={(e) => handleItemKeyDown(e, 'skills')}
                className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <span className="text-[14px]">⚙️</span>
                <span>{language === 'tr' ? 'Sistem Özellikleri' : 'System Properties'}</span>
              </div>

              <div
                role="menuitem"
                tabIndex={0}
                onClick={() => handleOpenItem('cv')}
                onKeyDown={(e) => handleItemKeyDown(e, 'cv')}
                className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <span className="text-[14px]">📄</span>
                <span>{language === 'tr' ? 'Özgeçmiş (CV)' : 'Curriculum Vitae'}</span>
              </div>

              <div className="border-t border-[#A8C6EE] my-1" />

              <a
                href={IDENTITY_DATA.social.github}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <span className="text-[14px]">🐙</span>
                <span>GitHub ↗</span>
              </a>

              <a
                href={IDENTITY_DATA.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <span className="text-[14px]">💼</span>
                <span>LinkedIn ↗</span>
              </a>

              <a
                href={`mailto:${IDENTITY_DATA.social.email}`}
                role="menuitem"
                className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
              >
                <span className="text-[14px]">✉️</span>
                <span>E-posta Gönder ↗</span>
              </a>
            </div>
          </div>

          {/* Footer / Status */}
          <div className="h-[36px] bg-gradient-to-r from-[#1941A5] to-[#245EDC] px-3 flex items-center justify-between border-t border-[#0A246A] text-white text-[11px]">
            <span className="opacity-80 font-mono">v2026.1</span>
            <button
              type="button"
              onClick={() => toggleStartMenu(false)}
              className="flex items-center gap-1.5 hover:bg-red-600 px-2 py-0.5 rounded cursor-pointer transition-colors"
            >
              <span>🚪</span>
              <span>{language === 'tr' ? 'Kapat' : 'Close'}</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
