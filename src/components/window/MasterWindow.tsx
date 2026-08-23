import React, { useEffect, useState, useRef } from 'react';
import { motion, useDragControls, useMotionValue, AnimatePresence } from 'framer-motion';
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
  const [viewportBounds, setViewportBounds] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  const dragControls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);

  // Calculate responsive dimensions
  const winWidth = Math.min(windowState?.defaultSize?.width || 680, Math.max(320, viewportBounds.width - 32));
  const winHeight = Math.min(windowState?.defaultSize?.height || 500, Math.max(260, viewportBounds.height - 80));

  // Compute initial spawn coordinates
  const initialSpawnX = windowState?.defaultPosition?.x === -1
    ? Math.max(16, Math.round((viewportBounds.width - winWidth) / 2))
    : Math.max(16, Math.min(windowState?.defaultPosition?.x ?? 80, Math.max(16, viewportBounds.width - winWidth - 16)));

  const initialSpawnY = windowState?.defaultPosition?.y === -1
    ? Math.max(20, Math.round((viewportBounds.height - winHeight - 40) / 2))
    : Math.max(16, Math.min(windowState?.defaultPosition?.y ?? 50, Math.max(16, viewportBounds.height - winHeight - 46)));

  // Motion values to preserve exact drag position during maximize/restore
  const x = useMotionValue(initialSpawnX);
  const y = useMotionValue(initialSpawnY);
  const prevCoords = useRef({ x: initialSpawnX, y: initialSpawnY });

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

  // Update motion values when maximize toggles
  useEffect(() => {
    if (isMobile) return;
    if (windowState?.isMaximized) {
      prevCoords.current = { x: x.get(), y: y.get() };
      x.set(0);
      y.set(0);
    } else {
      x.set(prevCoords.current.x);
      y.set(prevCoords.current.y);
    }
  }, [windowState?.isMaximized, isMobile]);

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
            style={{
              x: !isMobile ? x : undefined,
              y: !isMobile ? y : undefined,
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
                : {
                    top: 0,
                    left: 0,
                  }),
            }}
            initial={
              isMobile
                ? { y: '100%', opacity: 0 }
                : {
                    opacity: 0,
                    scale: 0.96,
                  }
            }
            animate={
              isMobile
                ? { y: 0, opacity: 1 }
                : isMaximized
                ? {
                    width: '100vw',
                    height: 'calc(100vh - 30px)',
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    width: winWidth,
                    height: winHeight,
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
