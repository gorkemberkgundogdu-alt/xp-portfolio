import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';

export const CvViewerWindow: React.FC = () => {
  return (
    <MasterWindow
      id="cv"
      statusBar={
        <>
          <span>Gorkem_Berk_CV_2026.pdf</span>
          <span>Sayfa 1 / 1</span>
          <span>100% Yakınlaştırma</span>
        </>
      }
    >
      <div className="flex flex-col h-full bg-[#525659]">
        {/* XP Picture/Document Viewer Top Toolbar */}
        <div className="bg-[#ECE9D8] border-b border-[#D4D0C8] p-1.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button type="button" className="px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] flex items-center gap-1">
              🔍 Yakınlaştır
            </button>
            <button type="button" className="px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] flex items-center gap-1">
              🔎 Uzaklaştır
            </button>
            <button type="button" className="px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] flex items-center gap-1">
              🔄 Döndür
            </button>
          </div>

          <div>
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert('CV indirme işlemi başlatılıyor...');
              }}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-[12px] font-bold flex items-center gap-1 shadow-sm transition-colors cursor-pointer"
            >
              📥 CV İndir (PDF)
            </a>
          </div>
        </div>

        {/* Document Page Preview */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center bg-[#525659]">
          <div className="w-full max-w-2xl bg-white shadow-2xl rounded p-8 font-sans text-slate-800 space-y-6">
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900">GÖRKEM BERK GÜNDOĞDU</h1>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">UI/UX Designer & Front-End Builder</p>
              </div>
              <div className="text-xs text-slate-600 space-y-0.5 md:text-right font-mono">
                <div>gorkemberk@operater.io</div>
                <div>Istanbul / Remote</div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Özet</h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Makine mühendisliği temelli analitik düşünce yapısını, modern UI/UX tasarım prensipleri ve ön yüz (front-end)
                geliştirme becerileriyle birleştiren ürün tasarımcısı. B2B SaaS ve e-ticaret alanlarında sıfırdan ürün mimarileri,
                tasarım sistemleri ve yapay zeka entegre iş akışları geliştirir.
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b pb-1">Deneyim</h2>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">Operater.io — UI/UX Designer</h3>
                  <span className="text-xs text-slate-500 font-mono">2025 — Günümüz</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1.5 space-y-1">
                  <li>Yapay zeka destekli operasyon panelinin sıfırdan kullanıcı akışları ve arayüz sisteminin kurulması.</li>
                  <li>Tasarım sistemi (Design System) bileşen mimarisinin kurgulanması ve geliştirici ekiple entegrasyonu.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">v1be.io — Kurucu Ortak & Ürün Tasarımı</h3>
                  <span className="text-xs text-slate-500 font-mono">2024 — 2025</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1.5 space-y-1">
                  <li>Erken aşama girişim vizyonu, landing page kurgusu ve kullanıcı deneyimi testleri.</li>
                  <li>Next.js, Tailwind CSS ve Framer Motion ile interaktif prototiplerin üretimi.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-bold text-slate-900">Freelance Web Designer (Rook AI & MyNessa Media)</h3>
                  <span className="text-xs text-slate-500 font-mono">2023 — 2024</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 mt-1.5 space-y-1">
                  <li>Responsive, performans odaklı ve SEO uyumlu web arayüzlerinin teslimi.</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b pb-1 mb-2">Yetenekler</h2>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div><strong>Tasarım:</strong> Figma, UI/UX, Design Systems, Wireframing, Prototyping</div>
                <div><strong>Geliştirme:</strong> HTML5, CSS3, Tailwind CSS, JavaScript, Astro, React</div>
                <div><strong>Yapay Zeka:</strong> AI-augmented UX, Prompt Engineering, Rapid Workflow</div>
                <div><strong>Diller:</strong> Türkçe (Anadil), İngilizce (İleri Düzey)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
