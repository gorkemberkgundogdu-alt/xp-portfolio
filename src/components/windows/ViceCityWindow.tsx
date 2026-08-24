import React, { useState } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { useWindowStore } from '../../stores/windowStore';

export const ViceCityWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const [selectedStation, setSelectedStation] = useState<string>('Flash FM');

  const stations = [
    { name: 'Flash FM', dj: 'Toni', song: 'Michael Jackson - Billie Jean // Laura Branigan - Self Control' },
    { name: 'Wave 103', dj: 'Adam First', song: 'Frankie Goes To Hollywood - Two Tribes // Spandau Ballet - Gold' },
    { name: 'V-Rock', dj: 'Lazlow', song: 'Judas Priest - You\'ve Got Another Thing Comin\' // Megadeth - Peace Sells' },
    { name: 'Emotion 98.3', dj: 'Fernando Martinez', song: 'Toto - Africa // Cutting Crew - (I Just) Died In Your Arms' },
  ];

  const currentStationInfo = stations.find((s) => s.name === selectedStation) || stations[0];

  return (
    <MasterWindow
      id="viceCity"
      statusBar={
        <div className="flex items-center justify-between w-full text-xs text-slate-600">
          <span>🌴 Tommy Vercetti &amp; 80s Nostalgia</span>
          <span>Station: {selectedStation}</span>
        </div>
      }
    >
      <div className="bg-[#111827] text-white p-5 space-y-4 font-sans h-full overflow-y-auto select-text">
        {/* Retro Neon Banner */}
        <div className="rounded-lg p-4 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 shadow-lg flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden">
          <img
            src="/assets/vice-city-icon.webp"
            alt="GTA Vice City"
            className="w-20 h-20 rounded-md border-2 border-white/80 shadow-md shrink-0 object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <div className="text-xs font-mono font-bold tracking-widest text-pink-200 uppercase">
              {language === 'tr' ? 'Çocukluk & Nostalji Köşesi' : 'Childhood & Nostalgia Corner'}
            </div>
            <h2 className="text-xl sm:text-2xl font-black italic tracking-wide text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)] mt-0.5">
              GRAND THEFT AUTO: VICE CITY
            </h2>
            <p className="text-xs text-cyan-100 mt-1 font-mono">
              {language === 'tr' ? 'CRT Monitörler · 2000\'ler Başı · İlk Dijital Kıvılcım' : 'CRT Monitors · Early 2000s · The First Digital Spark'}
            </p>
          </div>
        </div>

        {/* Story / Personal Note */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 text-xs sm:text-sm leading-relaxed text-slate-200 space-y-3 font-mono">
          {language === 'tr' ? (
            <>
              <p>
                🕹️ <strong>Görkem'in Notu:</strong> 2000'lerin başında tüplü CRT monitör karşısında Tommy Vercetti ile Vice City sokaklarında gezdiğim, Flash FM ve Wave 103 eşliğinde gün batımını izlediğim günler...
              </p>
              <p>
                Bilgisayarla, piksel sanatıyla ve dijital dünyayla ilk gerçek bağım bu oyunla kuruldu. Bugün hazırladığım bu Windows XP portfolyosundaki retro estetiğin, arayüz tutkusunun ve detaycılığın tohumları tam da o günlerde atıldı.
              </p>
            </>
          ) : (
            <>
              <p>
                🕹️ <strong>Görkem's Note:</strong> Cruising the sun-drenched neon streets of Vice City as Tommy Vercetti back in the early 2000s on a heavy CRT monitor, listening to Flash FM and Wave 103...
              </p>
              <p>
                That era sparked my lifelong passion for computers, pixel aesthetics, and digital interface design. The seeds for this retro Windows XP portfolio experience were planted right there in those childhood afternoons.
              </p>
            </>
          )}
        </div>

        {/* Nostalgic Radio Station Selector */}
        <div className="bg-slate-900/90 border border-pink-900/50 rounded-lg p-3 space-y-2">
          <div className="text-[11px] font-bold text-pink-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
            📻 {language === 'tr' ? 'Favori Radyo İstasyonları:' : 'Favorite Radio Stations:'}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {stations.map((st) => (
              <button
                key={st.name}
                type="button"
                onClick={() => setSelectedStation(st.name)}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-colors cursor-pointer ${
                  selectedStation === st.name
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {st.name}
              </button>
            ))}
          </div>

          <div className="bg-black/50 p-2.5 rounded border border-slate-800 text-xs font-mono text-cyan-300">
            <span className="text-slate-400">DJ:</span> {currentStationInfo.dj} <br />
            <span className="text-slate-400">Iconic Track:</span> {currentStationInfo.song}
          </div>
        </div>
      </div>
    </MasterWindow>
  );
};
