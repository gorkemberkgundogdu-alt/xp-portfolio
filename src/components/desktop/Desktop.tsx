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
      className="relative w-screen h-screen overflow-hidden select-none bg-[#245EDC] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/bliss-wallpaper.webp')`,
      }}
    >

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
