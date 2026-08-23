import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';

interface ProjectItem {
  id: string;
  name: string;
  type: string;
  size: string;
  date: string;
  icon: string;
  badge: string;
  title: string;
  desc: string;
  tech: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'operater',
    name: 'Operater_SaaS.exe',
    type: 'Application',
    size: '18.4 MB',
    date: '2025-2026',
    icon: 'notepad',
    badge: 'B2B SaaS / Product Design',
    title: 'Operater.io — End-to-End Product UI/UX & Design System',
    desc: 'Sıfırdan tasarlanan yapay zeka destekli operasyon ve veri analiz arayüzü. Karmaşık veri tabloları, kullanıcı akışları ve ölçeklenebilir tasarım sistemi mimarisi.',
    tech: ['Figma', 'Design Systems', 'AI Workflows', 'React / Tailwind'],
  },
  {
    id: 'v1be',
    name: 'v1be_Platform.exe',
    type: 'Application',
    size: '12.8 MB',
    date: '2024-2025',
    icon: 'folder',
    badge: 'Startup / Co-Founder',
    title: 'v1be.io — Kurucu Ortak Vizyonu & Erken Aşama Ürün Tasarımı',
    desc: 'Yaratıcı ekonomi ve dijital ürün ekosistemi için erken aşama arayüz prototipleri, landing page tasarımı ve front-end mimarisi kurgusu.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Product Strategy'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce_Bundle.zip',
    type: 'Compressed Archive',
    size: '34.2 MB',
    date: '2024',
    icon: 'folder',
    badge: 'Freelance & Agency',
    title: 'Freelance Web Deneyimleri (Rook AI & MyNessa Media)',
    desc: 'Yüksek dönüşüm oranlı, performans ve erişilebilirlik odaklı responsive e-ticaret ve marka web arayüzleri.',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'SEO / Web Vitals'],
  },
];

export const ProjectsWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const [selectedProjectId, setSelectedProjectId] = React.useState<string>('operater');

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <MasterWindow
      id="projects"
      menuBar={
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
              <span className="underline">D</span>osya
            </span>
            <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
              <span className="underline">D</span>üzen
            </span>
            <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
              <span className="underline">G</span>örünüm
            </span>
            <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
              <span className="underline">S</span>ık Kullanılanlar
            </span>
            <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
              <span className="underline">A</span>raçlar
            </span>
            <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
              <span className="underline">Y</span>ardım
            </span>
          </div>
          <div className="text-[11px] text-slate-500 pr-2">Windows XP Explorer</div>
        </div>
      }
      statusBar={
        <>
          <span>{PROJECTS.length} nesne</span>
          <span>C:\Portfolio\Projects</span>
          <span>Yerel Disk (C:)</span>
        </>
      }
    >
      <div className="flex flex-col h-full bg-[#FAFAF8]">
        {/* Address Bar */}
        <div className="flex items-center gap-2 px-2 py-1 bg-[#ECE9D8] border-b border-[#D4D0C8] text-[12px]">
          <span className="text-slate-500">Adres:</span>
          <div className="flex-1 bg-white border border-[#7F9DB9] px-2 py-0.5 rounded-sm flex items-center gap-1">
            <XpIcon name="folder" size={14} />
            <span className="font-mono text-slate-700">C:\Portfolio\Projects</span>
          </div>
          <button type="button" className="px-2 py-0.5 border border-[#7F9DB9] bg-[#ECE9D8] rounded-sm hover:bg-slate-200">
            Git
          </button>
        </div>

        {/* Main 2-column view */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left panel: File list */}
          <div className="w-full md:w-64 border-r border-[#D4D0C8] bg-white p-3 space-y-2 overflow-y-auto shrink-0">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Klasör Öğeleri ({PROJECTS.length})
            </div>
            {PROJECTS.map((item) => {
              const isSelected = selectedProjectId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedProjectId(item.id)}
                  className={`flex items-center gap-2.5 p-2 rounded cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-[#316AC5] text-white'
                      : 'hover:bg-[#E8F0FE] text-slate-800'
                  }`}
                >
                  <XpIcon name={item.icon} size={28} />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-[13px] truncate">{item.name}</div>
                    <div className={`text-[11px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {item.size} • {item.date}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right panel: Details & Preview */}
          <div className="flex-1 p-5 md:p-6 bg-white overflow-y-auto w-full">
            <div className="w-full space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-slate-200">
                <div>
                  <span className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 text-[11px] font-bold rounded mb-1.5 uppercase tracking-wider">
                    {selectedProject.badge}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>
                <div className="px-3 py-1 bg-slate-100 border border-slate-300 rounded font-mono text-[12px] text-slate-600 self-start sm:self-auto shrink-0 shadow-sm">
                  📅 {selectedProject.date}
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                <div className="xl:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Proje Özeti & Vizyon
                    </h3>
                    <p className="text-[14px] text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                      {selectedProject.desc}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Kullanılan Teknolojiler & Yetkinlikler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 rounded-md text-[12px] font-medium transition-colors"
                        >
                          🏷️ {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg shadow-sm space-y-2">
                    <div className="font-bold text-[13px] text-blue-900 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>UI/UX Çözüm Özeti</span>
                    </div>
                    <div className="text-[12px] text-blue-800 leading-relaxed">
                      Operasyonel verimliliği artırmak amacıyla kullanıcı araştırmaları ve hızlı prototipleme ile bileşen kütüphaneleri optimize edilmiş, kullanıcıların karmaşık iş akışlarını basitleştiren modern arayüzler kurgulanmıştır.
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-[12px] text-amber-900 flex items-center justify-between">
                    <span>Durum: <strong>Tamamlandı & Yayında</strong></span>
                    <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-amber-300">v2.4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
