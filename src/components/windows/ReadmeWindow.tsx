import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';
import { AboutAccordion } from '../common/AboutAccordion';

export const ReadmeWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const openWindow = useWindowStore((state) => state.openWindow);

  const menuItemsTr = ['Dosya', 'Düzen', 'Biçim', 'Görünüm', 'Yardım'];
  const menuItemsEn = ['File', 'Edit', 'Format', 'View', 'Help'];
  const menuItems = language === 'en' ? menuItemsEn : menuItemsTr;

  return (
    <MasterWindow
      id="readme"
      menuBar={
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
      }
      statusBar={
        <>
          <span>Ln 1, Col 1</span>
          <span>100%</span>
          <span>Windows (CRLF)</span>
          <span>UTF-8</span>
        </>
      }
    >
      <div className="p-5 md:p-8 font-mono text-[13px] md:text-[14px] leading-relaxed text-[#111827] bg-white h-full selection:bg-[#0A246A] selection:text-white overflow-y-auto w-full">
        {language === 'tr' ? (
          <div className="space-y-5 w-full max-w-5xl mx-auto">
            <div className="font-bold text-[15px] border-b pb-2 border-slate-200 text-blue-900 flex items-center justify-between">
              <span>GÖRKEM BERK GÜNDOĞDU — UI/UX DESIGNER — WEB &amp; SAAS · FRONT-END BUILDER</span>
              <span className="text-[11px] font-normal text-slate-500 font-sans">v2026.1</span>
            </div>

            {/* Profile Photo Header Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-3.5 bg-slate-50 border border-slate-200 rounded-sm">
              <img
                src="/assets/gorkem-berk-gundogdu.jpg"
                alt="Görkem Berk Gündoğdu"
                className="w-20 h-20 rounded object-cover border border-slate-300 shadow-xs shrink-0"
              />
              <div className="space-y-1 text-center sm:text-left font-sans">
                <div className="font-bold text-slate-900 text-sm">Görkem Berk Gündoğdu</div>
                <div className="text-xs text-blue-700 font-semibold">UI/UX Designer — Web &amp; SaaS · Front-end Builder</div>
                <div className="text-[11px] text-slate-600 leading-relaxed max-w-2xl">
                  Çoğunlukla web ve SaaS için tasarlıyorum. Tasarladıklarımı web ortamında geliştiriyorum. Son zamanlarda mobil tarafı da daha fazla keşfediyorum.
                </div>
                <div className="text-[11px] text-slate-500 pt-0.5">🏢 Operater.io (UI/UX) · 🚀 v1be.io (Co-Founder) · 📍 İstanbul, TR</div>
              </div>
            </div>

            {/* Expandable About Accordion System */}
            <div className="space-y-3 pt-1">
              <AboutAccordion locale="tr" variant="notepad" />
            </div>

            <div className="pt-2 border-t border-dashed border-slate-300 flex items-center justify-between text-[12px] text-slate-600 font-sans">
              <span>İyi eğlenceler, <strong>Görkem</strong></span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => openWindow('projects')}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] font-sans font-medium text-slate-800 cursor-pointer"
                >
                  📁 Projeleri İncele
                </button>
                <button
                  type="button"
                  onClick={() => openWindow('cv')}
                  className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-400 rounded text-[11px] font-sans font-medium text-blue-900 cursor-pointer"
                >
                  📄 CV Görüntüle
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 w-full max-w-5xl mx-auto">
            <div className="font-bold text-[15px] border-b pb-2 border-slate-200 text-blue-900 flex items-center justify-between">
              <span>GÖRKEM BERK GÜNDOĞDU — UI/UX DESIGNER — WEB &amp; SAAS · FRONT-END BUILDER</span>
              <span className="text-[11px] font-normal text-slate-500 font-sans">v2026.1</span>
            </div>

            {/* Profile Photo Header Card */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-3.5 bg-slate-50 border border-slate-200 rounded-sm">
              <img
                src="/assets/gorkem-berk-gundogdu.jpg"
                alt="Görkem Berk Gündoğdu"
                className="w-20 h-20 rounded object-cover border border-slate-300 shadow-xs shrink-0"
              />
              <div className="space-y-1 text-center sm:text-left font-sans">
                <div className="font-bold text-slate-900 text-sm">Görkem Berk Gündoğdu</div>
                <div className="text-xs text-blue-700 font-semibold">UI/UX Designer — Web &amp; SaaS · Front-end Builder</div>
                <div className="text-[11px] text-slate-600 leading-relaxed max-w-2xl">
                  Mostly designing for web and SaaS. Often building what I design for the web. Lately, exploring more of mobile too.
                </div>
                <div className="text-[11px] text-slate-600">🏢 Operater.io (UI/UX) · 🚀 v1be.io (Co-Founder) · 📍 Istanbul, TR</div>
              </div>
            </div>

            {/* Expandable About Accordion System */}
            <div className="space-y-3 pt-1">
              <AboutAccordion locale="en" variant="notepad" />
            </div>

            <div className="pt-2 border-t border-dashed border-slate-300 flex items-center justify-between text-[12px] text-slate-600 font-sans">
              <span>Enjoy exploring, <strong>Görkem</strong></span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => openWindow('projects')}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] font-sans font-medium text-slate-800 cursor-pointer"
                >
                  📁 Explore Projects
                </button>
                <button
                  type="button"
                  onClick={() => openWindow('cv')}
                  className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-400 rounded text-[11px] font-sans font-medium text-blue-900 cursor-pointer"
                >
                  📄 View CV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </MasterWindow>
  );
};
