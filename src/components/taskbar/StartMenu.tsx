import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '../../stores/windowStore';
import { XpIcon } from '../common/XpIcon';
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
        <div className="w-10 h-10 rounded-md border-2 border-white bg-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
          <span className="text-xl">👨‍💻</span>
        </div>
        <div className="text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]">
          <div className="font-bold text-[14px]">Görkem Berk Gündoğdu</div>
          <div className="text-[11px] text-blue-100">UI/UX Designer & Front-End Builder</div>
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
              <div className="text-[12px] font-bold">Beni Oku (Notepad)</div>
              <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                Hakkımda & Vizyon
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
              <div className="text-[12px] font-bold">Projelerim</div>
              <div className="text-[10px] text-slate-500 group-hover:text-blue-100 group-focus-visible:text-blue-100 truncate">
                Operater.io & v1be.io
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
                Makaleler & Blog
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
                Özgeçmiş & Yetkinlikler
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
                Titreşim & İletişim
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
            <span>Belgelerim</span>
          </div>

          <div
            role="menuitem"
            tabIndex={0}
            onClick={() => handleOpenItem('cv')}
            onKeyDown={(e) => handleItemKeyDown(e, 'cv')}
            className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
          >
            <span className="text-[14px]">📄</span>
            <span>Resimlerim (CV)</span>
          </div>

          <div
            role="menuitem"
            tabIndex={0}
            onClick={() => handleOpenItem('projects')}
            onKeyDown={(e) => handleItemKeyDown(e, 'projects')}
            className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
          >
            <span className="text-[14px]">💻</span>
            <span>Bilgisayarım</span>
          </div>

          <div className="border-t border-[#A8C6EE] my-1" />

          <a
            href="https://github.com/gorkemberkgundogdu-alt"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
          >
            <span className="text-[14px]">🐙</span>
            <span>GitHub Profili ↗</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            role="menuitem"
            className="p-1.5 rounded hover:bg-[#2F82FF] hover:text-white cursor-pointer flex items-center gap-2 outline-none focus-visible:bg-[#2F82FF] focus-visible:text-white"
          >
            <span className="text-[14px]">💼</span>
            <span>LinkedIn Profili ↗</span>
          </a>
        </div>
      </div>

      {/* Footer / Log off / Turn Off */}
      <div className="h-[36px] bg-gradient-to-r from-[#1941A5] to-[#245EDC] px-3 flex items-center justify-end gap-3 border-t border-[#0A246A] text-white text-[11px]">
        <button
          type="button"
          onClick={() => {
            alert('Windows XP Oturumu: Görkem Berk Gündoğdu Portfolyosu');
            toggleStartMenu(false);
          }}
          className="flex items-center gap-1.5 hover:underline cursor-pointer"
        >
          <span className="w-4 h-4 bg-amber-400 rounded-sm flex items-center justify-center text-slate-900 font-bold text-[9px]">
            🔑
          </span>
          <span>Oturumu Kapat</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (confirm('Sistemi yeniden başlatmak ister misiniz?')) {
              window.location.reload();
            }
          }}
          className="flex items-center gap-1.5 hover:underline cursor-pointer"
        >
          <span className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold text-[9px]">
            ⏻
          </span>
          <span>Bilgisayarı Kapat</span>
        </button>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
