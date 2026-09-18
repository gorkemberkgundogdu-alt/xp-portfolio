import React, { useState } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import { STRAVA_DATA, type StravaActivity } from '../../data/stravaData';

export const StravaWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const isTr = language === 'tr';

  const [selectedActivityId, setSelectedActivityId] = useState<number>(
    STRAVA_DATA.activities[0]?.id || 0
  );
  const [filterType, setFilterType] = useState<'all' | 'recent'>('all');

  const selectedActivity =
    STRAVA_DATA.activities.find((a) => a.id === selectedActivityId) ||
    STRAVA_DATA.activities[0];

  const displayedActivities =
    filterType === 'recent'
      ? STRAVA_DATA.activities.slice(0, 10)
      : STRAVA_DATA.activities;

  const menuItems = isTr
    ? ['Dosya', 'Düzen', 'Görünüm', 'Sporcu', 'Yardım']
    : ['File', 'Edit', 'View', 'Athlete', 'Help'];

  return (
    <MasterWindow
      id="strava"
      menuBar={
        <div className="flex items-center justify-between w-full text-xs text-slate-700">
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
          <div className="text-[11px] text-slate-500 pr-2">Strava Athlete v1.0</div>
        </div>
      }
      statusBar={
        <div className="flex items-center justify-between w-full text-[11px] text-slate-700 font-sans px-1">
          <div className="flex items-center gap-2">
            <span>🏃 {isTr ? 'Spor: Koşu' : 'Sport: Running'}</span>
            <span className="text-slate-400">|</span>
            <span className="text-emerald-700 font-medium">● {isTr ? 'Strava API Bağlı' : 'Strava API Synced'}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{STRAVA_DATA.stats.allRuns.count} {isTr ? 'Koşu' : 'Runs'}</span>
            <span>·</span>
            <span>{STRAVA_DATA.stats.allRuns.distanceKm} km</span>
            <span>·</span>
            <span className="font-mono text-slate-500">GPS: Locked</span>
          </div>
        </div>
      }
    >
      <div className="bg-[#ECE9D8] flex flex-col h-full overflow-hidden select-text font-sans">
        {/* Top XP Toolbar Strip */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-[#F1EFE2] border-b border-[#D4D0C8] shrink-0 text-xs text-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              {isTr ? 'Filtrele:' : 'Filter:'}
            </span>
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-2.5 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#316AC5] text-white border-[#1B4FA0] shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-[#ACA899]'
              }`}
            >
              {isTr ? 'Tüm Koşular' : 'All Runs'} ({STRAVA_DATA.activities.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('recent')}
              className={`px-2.5 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                filterType === 'recent'
                  ? 'bg-[#316AC5] text-white border-[#1B4FA0] shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-[#ACA899]'
              }`}
            >
              {isTr ? 'Son 10 Koşu' : 'Recent 10'}
            </button>
          </div>

          <a
            href={STRAVA_DATA.athlete.stravaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FC4C02] hover:bg-[#E34000] text-white font-bold rounded text-[11px] shadow-xs transition-colors no-underline"
          >
            <span>{isTr ? 'Strava Profilimi Aç' : 'Open Strava Profile'}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3">
          {/* Athlete Profile & Quick Badge Card */}
          <div className="p-3 bg-white border border-[#919B9C] rounded shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="relative shrink-0">
                <img
                  src={STRAVA_DATA.athlete.profilePhoto}
                  alt={STRAVA_DATA.athlete.name}
                  className="w-14 h-14 rounded-full border-2 border-[#FC4C02] object-cover shadow-sm bg-slate-100"
                  onError={(e) => {
                    // Fallback to local avatar if image load fails
                    (e.target as HTMLImageElement).src = '/assets/tommy-avatar.webp';
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#FC4C02] flex items-center justify-center text-white text-[10px] font-bold border border-white shadow-xs">
                  ⚡
                </div>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-slate-900 leading-tight truncate">
                    {STRAVA_DATA.athlete.name}
                  </h2>
                  <span className="px-1.5 py-0.2 bg-[#FC4C02]/10 border border-[#FC4C02]/30 text-[#FC4C02] text-[10px] font-bold rounded uppercase">
                    ATHLETE
                  </span>
                </div>
                <div className="text-xs text-slate-600 mt-0.5 flex items-center gap-2">
                  <span>📍 {STRAVA_DATA.athlete.city}, {STRAVA_DATA.athlete.country}</span>
                  <span>•</span>
                  <span>🏃 {isTr ? 'Yarı Maraton / Yol Koşucusu' : 'Road Runner'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
              <div className="text-right">
                <div className="text-[10px] text-slate-400 font-mono uppercase">
                  {isTr ? 'Son Senkronizasyon' : 'Last Synced'}
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  {new Date(STRAVA_DATA.lastSyncedAt).toLocaleDateString(isTr ? 'tr-TR' : 'en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Metric Stat Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-2.5 bg-gradient-to-b from-[#FFFDF9] to-[#FDF4EE] border border-[#F3C4AA] rounded shadow-xs">
              <div className="text-[10px] font-bold text-[#FC4C02] uppercase tracking-wider">
                {isTr ? 'Toplam Koşu' : 'Total Distance'}
              </div>
              <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                {STRAVA_DATA.stats.allRuns.distanceKm} <span className="text-xs font-semibold text-slate-600">km</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {STRAVA_DATA.stats.allRuns.count} {isTr ? 'tamamlanan koşu' : 'completed runs'}
              </div>
            </div>

            <div className="p-2.5 bg-gradient-to-b from-[#FAFBFD] to-[#F0F4FA] border border-[#BFD1EE] rounded shadow-xs">
              <div className="text-[10px] font-bold text-[#316AC5] uppercase tracking-wider">
                {isTr ? 'Bu Yıl (YTD)' : 'Year to Date'}
              </div>
              <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                {STRAVA_DATA.stats.ytdRuns.distanceKm} <span className="text-xs font-semibold text-slate-600">km</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {STRAVA_DATA.stats.ytdRuns.count} {isTr ? 'koşu bu yıl' : 'runs this year'}
              </div>
            </div>

            <div className="p-2.5 bg-gradient-to-b from-[#FAFCFA] to-[#EFF7EF] border border-[#BEE0BE] rounded shadow-xs">
              <div className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                {isTr ? 'Toplam Koşu Süresi' : 'Total Moving Time'}
              </div>
              <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                {STRAVA_DATA.stats.allRuns.movingTimeHours} <span className="text-xs font-semibold text-slate-600">saat</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {isTr ? 'Aktif ayak hareketi' : 'Active on feet'}
              </div>
            </div>

            <div className="p-2.5 bg-gradient-to-b from-[#FCFAFD] to-[#F7EEFA] border border-[#DFBFEE] rounded shadow-xs">
              <div className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">
                {isTr ? 'Toplam İrtifa' : 'Elevation Gain'}
              </div>
              <div className="text-xl font-extrabold text-slate-900 mt-0.5">
                {STRAVA_DATA.stats.allRuns.elevationM} <span className="text-xs font-semibold text-slate-600">m</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                {isTr ? 'Yokuş & tırmanış' : 'Climbed gain'}
              </div>
            </div>
          </div>

          {/* Activities List View in Classic Windows XP Details Table */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs px-0.5">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <span>📁</span>
                <span>{isTr ? 'Son Aktiviteler & Antrenman Günlüğü' : 'Recent Activities & Training Log'}</span>
              </span>
              <span className="text-[11px] text-slate-500">
                {isTr ? 'Detay için satıra tıklayın' : 'Click row for details'}
              </span>
            </div>

            <div className="bg-white border border-[#7F9DB9] rounded overflow-hidden shadow-inner">
              <div className="max-h-[220px] overflow-y-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-[#ECE9D8] border-b border-[#ACA899] sticky top-0 text-[11px] text-slate-700 select-none shadow-xs">
                    <tr>
                      <th className="py-1.5 px-3 font-bold border-r border-[#D4D0C8] w-28">
                        {isTr ? 'Tarih' : 'Date'}
                      </th>
                      <th className="py-1.5 px-3 font-bold border-r border-[#D4D0C8]">
                        {isTr ? 'Aktivite Başlığı' : 'Activity Name'}
                      </th>
                      <th className="py-1.5 px-3 font-bold border-r border-[#D4D0C8] w-20 text-right">
                        {isTr ? 'Mesafe' : 'Distance'}
                      </th>
                      <th className="py-1.5 px-3 font-bold border-r border-[#D4D0C8] w-18 text-right">
                        {isTr ? 'Süre' : 'Time'}
                      </th>
                      <th className="py-1.5 px-3 font-bold border-r border-[#D4D0C8] w-20 text-right">
                        {isTr ? 'Pace' : 'Pace'}
                      </th>
                      <th className="py-1.5 px-2 font-bold w-12 text-center">
                        Strava
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedActivities.map((act) => {
                      const isSelected = act.id === selectedActivity.id;
                      const formattedDate = new Date(act.startDate).toLocaleDateString(
                        isTr ? 'tr-TR' : 'en-US',
                        { day: '2-digit', month: 'short', year: 'numeric' }
                      );

                      return (
                        <tr
                          key={act.id}
                          onClick={() => setSelectedActivityId(act.id)}
                          className={`cursor-pointer transition-colors border-b border-slate-100 ${
                            isSelected
                              ? 'bg-[#316AC5] text-white font-medium'
                              : 'hover:bg-[#E8F0FE] text-slate-800'
                          }`}
                        >
                          <td className="py-1.5 px-3 font-mono text-[11px]">
                            {formattedDate}
                          </td>
                          <td className="py-1.5 px-3 flex items-center gap-1.5 min-w-0">
                            <span className="shrink-0">{act.type === 'Run' ? '🏃' : '🚴'}</span>
                            <span className="truncate">{act.name}</span>
                            {act.prCount > 0 && (
                              <span className={`px-1 rounded text-[9px] font-bold shrink-0 ${
                                isSelected ? 'bg-amber-400 text-slate-950' : 'bg-amber-100 text-amber-900 border border-amber-300'
                              }`}>
                                PR
                              </span>
                            )}
                          </td>
                          <td className="py-1.5 px-3 text-right font-mono text-[11px] font-bold">
                            {act.distanceKm} km
                          </td>
                          <td className="py-1.5 px-3 text-right font-mono text-[11px]">
                            {act.formattedDuration}
                          </td>
                          <td className="py-1.5 px-3 text-right font-mono text-[11px]">
                            {act.pace} /km
                          </td>
                          <td className="py-1.5 px-2 text-center">
                            <a
                              href={act.stravaUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title={isTr ? 'Bu koşuyu Strava\'da aç' : 'Open in Strava'}
                              className={`inline-block font-bold hover:underline ${
                                isSelected ? 'text-amber-200' : 'text-[#FC4C02]'
                              }`}
                            >
                              ↗
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Selected Activity Preview Inspector */}
          {selectedActivity && (
            <div className="p-3 bg-[#FBFBFA] border border-[#919B9C] rounded space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-base">🏃</span>
                  <div>
                    <div className="font-bold text-xs text-slate-900">
                      {selectedActivity.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {new Date(selectedActivity.startDate).toLocaleDateString(isTr ? 'tr-TR' : 'en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                </div>

                <a
                  href={selectedActivity.stravaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded text-[11px] font-semibold text-[#FC4C02] shadow-2xs transition-colors no-underline flex items-center gap-1"
                >
                  <span>{isTr ? 'Strava Detayı' : 'Strava Details'}</span>
                  <span>↗</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-mono">{isTr ? 'Mesafe' : 'Distance'}</div>
                  <div className="font-bold text-slate-900">{selectedActivity.distanceKm} km</div>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-mono">{isTr ? 'Koşu Süresi' : 'Moving Time'}</div>
                  <div className="font-bold text-slate-900">{selectedActivity.formattedDuration}</div>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-mono">{isTr ? 'Ort. Pace' : 'Avg Pace'}</div>
                  <div className="font-bold text-slate-900">{selectedActivity.pace} /km</div>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-mono">{isTr ? 'Ort. Hız' : 'Avg Speed'}</div>
                  <div className="font-bold text-slate-900">{selectedActivity.avgSpeedKmh} km/h</div>
                </div>
                <div className="p-1.5 bg-white rounded border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-mono">{isTr ? 'İrtifa Kazanımı' : 'Elevation Gain'}</div>
                  <div className="font-bold text-slate-900">{selectedActivity.elevationGainM} m</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MasterWindow>
  );
};
