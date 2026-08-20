import React, { useState } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';

export const BrowserWindow: React.FC = () => {
  const [url, setUrl] = useState('https://gorkemberk.design/articles/ai-driven-ui-ux');

  return (
    <MasterWindow
      id="browser"
      menuBar={
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
      }
      statusBar={
        <>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Bitti
          </span>
          <span>İnternet | Korumalı Mod: Açık</span>
          <span>100%</span>
        </>
      }
    >
      <div className="flex flex-col h-full bg-white">
        {/* IE Navigation & Address Bar */}
        <div className="bg-[#ECE9D8] border-b border-[#D4D0C8] p-1.5 space-y-1 select-none">
          <div className="flex items-center gap-2">
            <button type="button" className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px] flex items-center gap-1">
              ⬅ Geri
            </button>
            <button type="button" className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px] opacity-60">
              İleri ➡
            </button>
            <button type="button" className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px]">
              🛑 Durdur
            </button>
            <button type="button" className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px]">
              🔄 Yenile
            </button>
            <button type="button" className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded text-[12px]">
              🏠 Giriş
            </button>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-[12px] text-slate-600 font-medium">Adres:</span>
            <div className="flex-1 bg-white border border-[#7F9DB9] px-2 py-0.5 rounded-sm flex items-center gap-1.5">
              <XpIcon name="ie" size={14} />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full text-[12px] text-slate-800 outline-none font-sans"
              />
            </div>
            <button type="button" className="px-3 py-0.5 bg-[#ECE9D8] border border-[#7F9DB9] rounded-sm text-[12px] hover:bg-slate-200">
              Git ➡
            </button>
          </div>
        </div>

        {/* Article Webpage Content */}
        <div className="flex-1 p-6 md:p-8 max-w-3xl mx-auto overflow-y-auto space-y-6 select-text font-sans">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Makale & Düşünceler</span>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
              Yapay Zeka Çağında UI/UX: Hızlandırıcıdan Yaratıcı İş Ortağına
            </h1>
            <div className="text-xs text-slate-500 mt-2 flex items-center gap-2">
              <span>Görkem Berk Gündoğdu</span> • <span>2026</span> • <span>5 dk okuma süresi</span>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            Geleneksel tasarım süreçleri, tel çerçevelerden (wireframe) nihai prototiplere kadar uzanan lineer bir akış izlerdi.
            Bugün yapay zeka entegrasyonu, tasarımcıyı sadece arayüz çizen bir operatör olmaktan çıkarıp, karmaşık ürün kararlarını
            ve kullanıcı problemlerini hızla simüle eden bir sistem mimarına dönüştürüyor.
          </p>

          <div className="p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 text-sm">Temel İlkeler:</h3>
            <ul className="list-disc list-inside text-xs md:text-sm text-slate-700 mt-2 space-y-1">
              <li><strong>Hızlı Hipotez Testi:</strong> Kullanıcı senaryolarını dakikalar içinde test edilebilir prototiplere dönüştürmek.</li>
              <li><strong>Erişilebilirlik ve Kod Uyumu:</strong> Tasarlanan bileşenin doğrudan temiz HTML/Tailwind çıktısını kurgulamak.</li>
              <li><strong>Veri Odaklı Kararlar:</strong> B2B panellerinde bilgi yoğunluğunu (information density) kullanıcıyı boğmadan sunmak.</li>
            </ul>
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
