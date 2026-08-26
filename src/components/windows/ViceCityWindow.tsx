import React, { useState } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';

export const ViceCityWindow: React.FC = () => {
  const globalLanguage = useWindowStore((state) => state.language);
  const [activeTab, setActiveTab] = useState<'tr' | 'en'>(globalLanguage === 'en' ? 'en' : 'tr');

  return (
    <MasterWindow
      id="viceCity"
      statusBar={
        <div className="flex items-center justify-between w-full text-xs text-slate-600">
          <span>🌴 Grand Theft Auto: Vice City</span>
          <span>Rockstar Games · 2002</span>
        </div>
      }
    >
      <div className="bg-[#ECE9D8] p-2 flex flex-col h-full overflow-hidden select-text font-sans">
        {/* Tab Strip */}
        <div className="flex items-end gap-1 px-2 pt-1 border-b border-[#919B9C] z-10 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('tr')}
            className={`px-4 py-1 text-xs font-bold rounded-t transition-all cursor-pointer ${
              activeTab === 'tr'
                ? 'bg-white text-slate-900 border-t-2 border-x border-[#919B9C] border-t-[#0055EA] -mb-[1px] pt-1.5 pb-1.5 shadow-xs'
                : 'bg-[#D8D4C8] text-slate-600 hover:bg-[#E4E0D5] border-t border-x border-[#ACA899]'
            }`}
          >
            TR
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('en')}
            className={`px-4 py-1 text-xs font-bold rounded-t transition-all cursor-pointer ${
              activeTab === 'en'
                ? 'bg-white text-slate-900 border-t-2 border-x border-[#919B9C] border-t-[#0055EA] -mb-[1px] pt-1.5 pb-1.5 shadow-xs'
                : 'bg-[#D8D4C8] text-slate-600 hover:bg-[#E4E0D5] border-t border-x border-[#ACA899]'
            }`}
          >
            EN
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="flex-1 bg-white border border-[#919B9C] border-t-0 p-4 sm:p-6 md:p-8 overflow-y-auto min-h-0">
          <div className="max-w-4xl mx-auto w-full h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Left Column: Artwork Poster */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="rounded-md overflow-hidden border border-[#D4D0C8] shadow-md bg-slate-950 flex items-center justify-center max-w-[340px] w-full">
                  <img
                    src="/assets/vice-city-poster.webp"
                    alt="Grand Theft Auto: Vice City Artwork"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Right Column: Story Copy, Signature & Quote Box */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-mono sm:font-sans">
                    The game that started a <span className="underline decoration-pink-500 decoration-2 underline-offset-4">love.</span>
                  </h2>
                  <span className="text-pink-500 text-lg select-none" aria-hidden="true">🌴</span>
                </div>

                {/* Paragraphs */}
                <div className="text-xs sm:text-[13px] text-slate-700 leading-relaxed space-y-2.5 font-mono sm:font-sans">
                  {activeTab === 'tr' ? (
                    <>
                      <p>
                        Windows XP&apos;li bilgisayarımda ilk oynadığım ve hayran kaldığım oyunlardan biriydi. Kaç saat oynadığımı hatırlamıyorum.
                      </p>
                      <p>
                        Vice City, benim için sadece bir oyun değildi; özgürlük hissi, atmosferi, müzikleri ve o pembe gün batımıyla bambaşka bir dünyaya açılan kapıydı.
                      </p>
                      <p>
                        Aynı zamanda GTA serisine olan bağlılığımı da oluşturan oyundur. O günden beri oyunların, tasarımın ve dijital deneyimlerin insanlara ne kadar güçlü hisler yaşatabileceğine inanıyorum.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        It was one of the first games I played and fell in love with on my Windows XP computer. I can&apos;t even remember how many hours I spent playing it.
                      </p>
                      <p>
                        Vice City was never just a game to me; with its sense of freedom, atmosphere, iconic music, and that pink sunset, it was a gateway to an entirely different world.
                      </p>
                      <p>
                        It is also the game that sparked my lifelong devotion to the GTA series. Ever since, I&apos;ve believed in how deeply games, design, and digital experiences can move people.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Pink Script Artwork Text */}
              <div className="py-1 flex justify-end">
                <div className="font-serif italic font-bold text-2xl sm:text-3xl text-pink-500 tracking-wide -rotate-3 select-none drop-shadow-xs">
                  Welcome to Vice City
                </div>
              </div>

              {/* Tommy Vercetti Quote Box */}
              <div className="bg-[#FCEBF2] border border-[#F48FB1] rounded-sm p-3 flex items-center gap-3.5 shadow-xs">
                <img
                  src="/assets/tommy-avatar.webp"
                  alt="Tommy Vercetti"
                  className="w-12 h-14 object-cover rounded-xs border border-[#F48FB1] shrink-0"
                />
                <div className="text-xs text-slate-900 leading-snug space-y-1">
                  <p className="font-medium">
                    &ldquo;In this town, you gotta make your own opportunities. You gotta create your own luck.&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-600 italic">
                    — Tommy Vercetti
                  </p>
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
