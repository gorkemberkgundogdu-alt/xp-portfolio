import React, { useEffect, useState, useRef } from 'react';
import { motion, useDragControls, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '../../stores/windowStore';
import { WindowHeader } from './WindowHeader';
import type { WindowId } from '../../types/window';

interface MasterWindowProps {
  id: WindowId;
  children: React.ReactNode;
  menuBar?: React.ReactNode;
  statusBar?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

export const MasterWindow: React.FC<MasterWindowProps> = ({
  id,
  children,
  menuBar,
  statusBar,
  className = '',
  bodyClassName = '',
}) => {
  const windowState = useWindowStore((state) => state.windows[id]);
  const activeWindowId = useWindowStore((state) => state.activeWindowId);
  const focusWindow = useWindowStore((state) => state.focusWindow);
  const closeWindow = useWindowStore((state) => state.closeWindow);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [viewportBounds, setViewportBounds] = useState({ width: 1280, height: 800 });
  const dragControls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setViewportBounds({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!windowState || !windowState.isOpen) {
    return null;
  }

  const isActive = activeWindowId === id;
  const isMinimized = windowState.isMinimized;
  const isMaximized = windowState.isMaximized;

  // Handle focus when clicking anywhere inside window
  const handlePointerDown = () => {
    if (!isActive) {
      focusWindow(id);
    }
  };

  // Start dragging when mouse/pointer down on header
  const handleHeaderPointerDown = (e: React.PointerEvent) => {
    handlePointerDown();
    if (!isMobile && !isMaximized) {
      dragControls.start(e);
    }
  };

  // Compute safe drag bounds so window titlebar cannot be lost off-screen
  const maxDragRight = Math.max(0, viewportBounds.width - 150);
  const maxDragBottom = Math.max(0, viewportBounds.height - 80);

  return (
    <AnimatePresence>
      {!isMinimized && (
        <>
          {/* Mobile Overlay Backdrop */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => closeWindow(id)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />
          )}

          {/* Window Container */}
          <motion.div
            ref={windowRef}
            drag={!isMobile && !isMaximized}
            dragControls={dragControls}
            dragListener={false}
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={{
              top: 0,
              left: 0,
              right: maxDragRight,
              bottom: maxDragBottom,
            }}
            initial={
              isMobile
                ? { y: '100%', opacity: 0 }
                : {
                    x: windowState.defaultPosition.x,
                    y: windowState.defaultPosition.y,
                    opacity: 0,
                    scale: 0.96,
                  }
            }
            animate={
              isMobile
                ? { y: 0, opacity: 1 }
                : isMaximized
                ? {
                    x: 0,
                    y: 0,
                    width: '100vw',
                    height: 'calc(100vh - 30px)',
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    width: windowState.defaultSize.width,
                    height: windowState.defaultSize.height,
                    opacity: 1,
                    scale: 1,
                  }
            }
            exit={
              isMobile
                ? { y: '100%', opacity: 0 }
                : { opacity: 0, scale: 0.92, transition: { duration: 0.15 } }
            }
            transition={{
              type: 'spring',
              damping: isMobile ? 28 : 30,
              stiffness: isMobile ? 300 : 350,
            }}
            onPointerDown={handlePointerDown}
            style={{
              zIndex: isMobile ? 50 : windowState.zIndex,
              position: 'fixed',
              ...(isMobile
                ? {
                    top: '32px',
                    left: '8px',
                    right: '8px',
                    bottom: '36px',
                    width: 'auto',
                    height: 'auto',
                  }
                : {}),
            }}
            className={`flex flex-col bg-[#ECE9D8] select-none ${
              isMobile
                ? 'rounded-t-lg rounded-b-none border-2 border-[#0055EA] shadow-2xl'
                : isMaximized
                ? 'rounded-none border-t-0 border-x-0 border-b-2 border-[#0055EA]'
                : isActive
                ? 'rounded-t-[8px] xp-window-border'
                : 'rounded-t-[8px] xp-window-border-inactive'
            } ${className}`}
          >
            {/* Header / Titlebar */}
            <div
              onPointerDown={handleHeaderPointerDown}
              className="cursor-move select-none touch-none"
            >
              <WindowHeader
                window={windowState}
                isActive={isActive}
                isMobile={isMobile}
              />
            </div>

            {/* Optional Menu Bar */}
            {menuBar && (
              <div className="bg-[#ECE9D8] border-b border-[#D4D0C8] px-2 py-0.5 text-[11px] flex items-center gap-3 select-none">
                {menuBar}
              </div>
            )}

            {/* Window Body */}
            <div
              className={`flex-1 overflow-auto bg-white xp-scrollbar xp-inset m-[3px] select-text ${bodyClassName}`}
            >
              {children}
            </div>

            {/* Optional Status Bar */}
            {statusBar && (
              <div className="bg-[#ECE9D8] border-t border-[#D4D0C8] px-2 py-1 text-[11px] text-[#444444] flex items-center justify-between select-none">
                {statusBar}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
