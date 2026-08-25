import React from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';

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
          <div className="space-y-5 max-w-4xl">
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

            <p>
              Merhaba, ben <strong>Görkem Berk Gündoğdu</strong>.
            </p>
            <p>
              Dijital ürünler tasarlama ve inşa etme tutkum, makine mühendisliği eğitimimi son senesinde
              bırakma kararımla tam zamanlı bir serüvene dönüştü. Kendi girişimim olan{' '}
              <span className="text-blue-600 font-semibold cursor-pointer underline decoration-dotted" onClick={() => openWindow('projects')}>
                v1be.io
              </span>
              'nun temellerini atarken başlayan bu yolculuk, bugün{' '}
              <span className="text-blue-600 font-semibold cursor-pointer underline decoration-dotted" onClick={() => openWindow('projects')}>
                Operater.io
              </span>
              'da <strong>UI/UX Designer</strong> olarak sıfırdan ürün arayüzleri ve kullanıcı akışları
              kurguladığım bir noktaya evrildi.
            </p>
            <p>
              Benim için tasarım sadece görsel bir katman değil. Estetik içgüdülerimi{' '}
              <strong>HTML, CSS, JavaScript, Astro ve Tailwind CSS</strong> gibi modern web teknolojileriyle
              birleştirerek; hızlı, duyarlı (responsive) ve erişilebilir deneyimler üretiyorum.
            </p>
            <p>
              Bu retro arayüzün altında modern bir mimari yatıyor. Çalışma sürecimde yapay zekayı
              (ChatGPT, Claude, Copilot) sadece hızlandırıcı bir asistan olarak değil; araştırma,
              prototipleme ve sorun çözme aşamalarında benimle birlikte üreten bir partner olarak konumluyorum.
            </p>
            <p>
              Masaüstündeki pencereleri karıştırmaktan çekinmeyin. B2B SaaS arayüzlerinden e-ticaret projelerine
              uzanan çalışmalarımı inceleyebilir veya sağ alttaki{' '}
              <span className="text-emerald-700 font-semibold cursor-pointer underline" onClick={() => openWindow('contact')}>
                MSN Messenger
              </span>{' '}
              üzerinden bana doğrudan bir &quot;titreşim&quot; gönderebilirsiniz.
            </p>

            <div className="pt-2 border-t border-dashed border-slate-300 flex items-center justify-between text-[12px] text-slate-600 font-sans">
              <span>İyi eğlenceler, <strong>Görkem</strong></span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => openWindow('projects')}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] font-sans font-medium text-slate-800"
                >
                  📁 Projeleri İncele
                </button>
                <button
                  type="button"
                  onClick={() => openWindow('cv')}
                  className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-400 rounded text-[11px] font-sans font-medium text-blue-900"
                >
                  📄 CV Görüntüle
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
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

            <p>
              Hello, I&apos;m <strong>Görkem Berk Gündoğdu</strong>.
            </p>
            <p>
              My passion for designing and building digital products evolved into a full-time journey when I made
              the decisive choice to leave mechanical engineering in my final year. Starting with founding my own venture,{' '}
              <span className="text-blue-600 font-semibold cursor-pointer underline decoration-dotted" onClick={() => openWindow('projects')}>
                v1be.io
              </span>
              , this path has led me to my current role as <strong>UI/UX Designer</strong> at{' '}
              <span className="text-blue-600 font-semibold cursor-pointer underline decoration-dotted" onClick={() => openWindow('projects')}>
                Operater.io
              </span>
              , architecting end-to-end product interfaces and user flows from scratch.
            </p>
            <p>
              To me, design is far more than a visual skin. By combining aesthetic intuition with modern web technologies like{' '}
              <strong>HTML, CSS, JavaScript, Astro, and Tailwind CSS</strong>, I craft blazing-fast, responsive, and accessible digital experiences.
            </p>
            <p>
              Beneath this nostalgic retro shell lies a modern architecture. In my daily workflow, I leverage AI (ChatGPT, Claude, Copilot) not merely as a speed booster, but as an active creative co-pilot in user research, rapid prototyping, and complex problem-solving.
            </p>
            <p>
              Feel free to explore the desktop windows! Dive into my work ranging from B2B SaaS platforms to e-commerce, or send me a &quot;Nudge&quot; directly via{' '}
              <span className="text-emerald-700 font-semibold cursor-pointer underline" onClick={() => openWindow('contact')}>
                MSN Messenger
              </span>{' '}
              in the bottom corner.
            </p>

            <div className="pt-2 border-t border-dashed border-slate-300 flex items-center justify-between text-[12px] text-slate-600 font-sans">
              <span>Enjoy exploring, <strong>Görkem</strong></span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => openWindow('projects')}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[11px] font-sans font-medium text-slate-800"
                >
                  📁 Explore Projects
                </button>
                <button
                  type="button"
                  onClick={() => openWindow('cv')}
                  className="px-2.5 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-400 rounded text-[11px] font-sans font-medium text-blue-900"
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
