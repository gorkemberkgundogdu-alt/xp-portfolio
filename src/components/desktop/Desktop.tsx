import React from 'react';
import { useWindowStore } from '../../stores/windowStore';
import { DesktopIcon } from './DesktopIcon';
import { Taskbar } from '../taskbar/Taskbar';
import { ReadmeWindow } from '../windows/ReadmeWindow';
import { ProjectsWindow } from '../windows/ProjectsWindow';
import { BrowserWindow } from '../windows/BrowserWindow';
import { CvViewerWindow } from '../windows/CvViewerWindow';
import { ContactMsnWindow } from '../windows/ContactMsnWindow';

export const Desktop: React.FC = () => {
  const toggleStartMenu = useWindowStore((state) => state.toggleStartMenu);

  const handleDesktopClick = () => {
    toggleStartMenu(false);
  };

  return (
    <div
      onClick={handleDesktopClick}
      className="relative w-screen h-screen overflow-hidden select-none bg-[#245EDC]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 50% 35%, #76A9F7 0%, #3884F4 40%, #1557CB 85%, #0B398A 100%)
        `,
      }}
    >
      {/* XP Bliss Rolling Hills Illusion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90">
        {/* Soft Sunny Sky Light */}
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
          }}
        />

        {/* Back Hill */}
        <div
          className="absolute -bottom-16 -left-20 w-[120vw] h-[55vh] rounded-[50%]"
          style={{
            background: 'linear-gradient(135deg, #74BA24 0%, #4E9512 60%, #387309 100%)',
            transform: 'rotate(-4deg)',
          }}
        />

        {/* Front Hill with Lush Green Shading */}
        <div
          className="absolute -bottom-24 -right-20 w-[110vw] h-[50vh] rounded-[45%]"
          style={{
            background: 'linear-gradient(120deg, #87CF2E 0%, #5EA916 50%, #3B7E0A 100%)',
            transform: 'rotate(3deg)',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
          }}
        />
      </div>

      {/* Desktop Icons Grid */}
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

        <DesktopIcon
          id="trash"
          label="Geri Dönüşüm Kutusu"
          labelEn="Recycle Bin"
          icon="trash"
          onClick={() => alert('Geri Dönüşüm Kutusu Boş')}
        />
      </div>

      {/* Interactive Windows Layer */}
      <div className="relative z-20">
        <ReadmeWindow />
        <ProjectsWindow />
        <BrowserWindow />
        <CvViewerWindow />
        <ContactMsnWindow />
      </div>

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
};
