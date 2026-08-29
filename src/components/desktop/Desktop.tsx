import React, { useEffect } from 'react';
import { useWindowStore } from '../../stores/windowStore';
import { DesktopIcon } from './DesktopIcon';
import { Taskbar } from '../taskbar/Taskbar';
import { DesktopTourBalloon } from '../common/DesktopTourBalloon';
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
  const isTourOpen = useWindowStore((state) => state.isTourOpen);
  const tourStep = useWindowStore((state) => state.tourStep);
  const setTourStep = useWindowStore((state) => state.setTourStep);
  const startTour = useWindowStore((state) => state.startTour);

  // First desktop visit or ongoing tour resume (e.g. after language switch)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const activeStepStr = sessionStorage.getItem('activeTourStep');
      if (activeStepStr) {
        const stepNum = parseInt(activeStepStr, 10);
        if (stepNum >= 1 && stepNum <= 4) {
          startTour(stepNum);
          return;
        }
      }

      const isCompleted = localStorage.getItem('desktopTourCompleted');
      if (!isCompleted) {
        const timer = setTimeout(() => {
          startTour();
        }, 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage access restrictions
    }
  }, [startTour, setTourStep]);

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
      {/* Desktop Contextual Hint Tour Balloon */}
      <DesktopTourBalloon />

      {/* Desktop Shortcuts (Single Continuous Vertical Column) */}
      <div
        data-tour="desktop-icons"
        className={`relative z-10 p-4 flex flex-col gap-3 w-fit transition-all duration-200 ${
          isTourOpen && tourStep === 1
            ? 'ring-2 ring-white/90 ring-offset-2 ring-offset-blue-600/40 rounded-xl bg-white/5 backdrop-blur-[1px]'
            : ''
        }`}
      >
        {/* Primary Portfolio Shortcuts */}
        <DesktopIcon
          id="readme"
          label="Beni_Oku.txt"
          labelEn="Readme.txt"
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
          label="Articles"
          labelEn="Articles"
          icon="globe"
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

        {/* Secondary / Personal Shortcuts (Directly continuing in the same column) */}
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
