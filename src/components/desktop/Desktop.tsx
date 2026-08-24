import React from 'react';
import { useWindowStore } from '../../stores/windowStore';
import { DesktopIcon } from './DesktopIcon';
import { Taskbar } from '../taskbar/Taskbar';
import { ReadmeWindow } from '../windows/ReadmeWindow';
import { ProjectsWindow } from '../windows/ProjectsWindow';
import { BrowserWindow } from '../windows/BrowserWindow';
import { SkillsWindow } from '../windows/SkillsWindow';
import { CvViewerWindow } from '../windows/CvViewerWindow';
import { ContactMsnWindow } from '../windows/ContactMsnWindow';
import { MinesweeperWindow } from '../windows/MinesweeperWindow';
import { ViceCityWindow } from '../windows/ViceCityWindow';

export const Desktop: React.FC = () => {
  const toggleStartMenu = useWindowStore((state) => state.toggleStartMenu);
  const setSelectedIconId = useWindowStore((state) => state.setSelectedIconId);

  const handleDesktopClick = () => {
    toggleStartMenu(false);
    setSelectedIconId(null);
  };

  return (
    <div
      onClick={handleDesktopClick}
      className="relative w-screen h-screen overflow-hidden select-none bg-[#1F64DE]"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, #114EBF 0%, #2A79F5 25%, #60A5FA 60%, #93C5FD 100%)
        `,
      }}
    >
      {/* Authentic XP Bliss Nostalgic Wallpaper Treatment */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Sky Sunlight Bloom */}
        <div
          className="absolute -top-40 left-1/3 w-[800px] h-[800px] rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0) 75%)',
          }}
        />

        {/* Soft Cumulus Clouds */}
        <div className="absolute top-[18%] left-[10%] w-[320px] h-[75px] bg-white/40 rounded-full blur-[24px]" />
        <div className="absolute top-[22%] left-[45%] w-[480px] h-[95px] bg-white/50 rounded-full blur-[28px]" />
        <div className="absolute top-[14%] right-[8%] w-[360px] h-[80px] bg-white/35 rounded-full blur-[22px]" />

        {/* Distant Rolling Ridge (Atmospheric Soft Green) */}
        <div
          className="absolute -bottom-10 -left-32 w-[130vw] h-[60vh] rounded-[52%]"
          style={{
            background: 'linear-gradient(145deg, #62A41B 0%, #437D0E 65%, #2D5807 100%)',
            transform: 'rotate(-5deg)',
            opacity: 0.92,
          }}
        />

        {/* Middle Sunlit Rolling Hill */}
        <div
          className="absolute -bottom-20 -right-24 w-[115vw] h-[54vh] rounded-[48%]"
          style={{
            background: 'linear-gradient(125deg, #8AE328 0%, #58AB14 45%, #347007 100%)',
            transform: 'rotate(4deg)',
            boxShadow: '0 -15px 45px rgba(0, 32, 96, 0.25)',
          }}
        />

        {/* Foreground Lush Hill (Signature XP Emerald Curve) */}
        <div
          className="absolute -bottom-36 -left-16 w-[125vw] h-[52vh] rounded-[46%]"
          style={{
            background: 'linear-gradient(110deg, #96F02E 0%, #68BD18 40%, #428B0A 75%, #255804 100%)',
            transform: 'rotate(-2deg)',
            boxShadow: '0 -20px 50px rgba(0, 20, 80, 0.35)',
          }}
        />
      </div>

      {/* Desktop Icons Grid (6 Core Content Domains + 2 Personal Easter Eggs) */}
      <div className="relative z-10 p-4 grid grid-flow-col grid-rows-6 gap-3 w-fit">
        <DesktopIcon
          id="readme"
          label="Gorkem_Berk_Beni_Oku.txt"
          labelEn="Gorkem_Berk_Readme.txt"
          icon="notepad"
        />

        <DesktopIcon
          id="projects"
          label="Projeler (C:\)"
          labelEn="Projects (C:\)"
          icon="folder"
        />

        <DesktopIcon
          id="browser"
          label="Internet Explorer"
          labelEn="Internet Explorer"
          icon="ie"
        />

        <DesktopIcon
          id="skills"
          label="Yetenekler & Araçlar"
          labelEn="Skills & Tools"
          icon="skills"
        />

        <DesktopIcon
          id="cv"
          label="CV_2026.pdf"
          labelEn="CV_2026.pdf"
          icon="pdf"
        />

        <DesktopIcon
          id="contact"
          label="Contact.exe"
          labelEn="Contact.exe"
          icon="msn"
        />

        {/* Personal Shortcuts / Easter Eggs (Col 2) */}
        <DesktopIcon
          id="minesweeper"
          label="Mayın Tarlası"
          labelEn="Minesweeper"
          icon="minesweeper"
        />

        <DesktopIcon
          id="viceCity"
          label="ViceCity.exe"
          labelEn="ViceCity.exe"
          icon="game"
        />
      </div>

      {/* Interactive Windows Layer */}
      <div className="relative z-20">
        <ReadmeWindow />
        <ProjectsWindow />
        <BrowserWindow />
        <SkillsWindow />
        <CvViewerWindow />
        <ContactMsnWindow />
        <MinesweeperWindow />
        <ViceCityWindow />
      </div>

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
};
