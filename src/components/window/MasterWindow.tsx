import React, { useEffect, useState, useRef, useCallback } from 'react';
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

  // Calculate default responsive dimensions
  const defaultWinWidth = Math.min(windowState?.defaultSize?.width || 680, Math.max(320, viewportBounds.width - 32));
  const defaultWinHeight = Math.min(windowState?.defaultSize?.height || 500, Math.max(260, viewportBounds.height - 80));

  // Current user-adjusted size
  const [customSize, setCustomSize] = useState<{ width: number; height: number }>({
    width: defaultWinWidth,
    height: defaultWinHeight,
  });

  // Compute initial spawn coordinates
  const initialSpawnX = windowState?.defaultPosition?.x === -1
    ? Math.max(16, Math.round((viewportBounds.width - defaultWinWidth) / 2))
    : Math.max(16, Math.min(windowState?.defaultPosition?.x ?? 80, Math.max(16, viewportBounds.width - defaultWinWidth - 16)));

  const initialSpawnY = windowState?.defaultPosition?.y === -1
    ? Math.max(20, Math.round((viewportBounds.height - defaultWinHeight - 40) / 2))
    : Math.max(16, Math.min(windowState?.defaultPosition?.y ?? 50, Math.max(16, viewportBounds.height - defaultWinHeight - 46)));

  // Motion values to preserve exact drag position during maximize/restore
  const x = useMotionValue(initialSpawnX);
  const y = useMotionValue(initialSpawnY);
  const prevCoords = useRef({ x: initialSpawnX, y: initialSpawnY });

  useEffect(() => {
    const handleResize = () => {
      const isMob = window.innerWidth < 768 || (window.innerWidth < 1024 && window.matchMedia('(pointer: coarse)').matches);
      setIsMobile(isMob);
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

  // Resizing logic for desktop
  const isResizingRef = useRef(false);

  const startResize = useCallback((e: React.PointerEvent, direction: 'se' | 'e' | 's') => {
    e.preventDefault();
    e.stopPropagation();
    isResizingRef.current = true;

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = customSize.width;
    const startHeight = customSize.height;
    const minWidth = windowState?.minSize?.width || 340;
    const minHeight = windowState?.minSize?.height || 260;

    const onPointerMove = (moveEvent: PointerEvent) => {
      if (!isResizingRef.current) return;
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;

      if (direction === 'se' || direction === 'e') {
        const maxW = viewportBounds.width - x.get() - 16;
        newWidth = Math.max(minWidth, Math.min(startWidth + deltaX, maxW));
      }
      if (direction === 'se' || direction === 's') {
        const maxH = viewportBounds.height - y.get() - 36;
        newHeight = Math.max(minHeight, Math.min(startHeight + deltaY, maxH));
      }

      setCustomSize({ width: Math.round(newWidth), height: Math.round(newHeight) });
    };

    const onPointerUp = () => {
      isResizingRef.current = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
  }, [customSize, windowState, viewportBounds, x, y]);

  if (!windowState || !windowState.isOpen) {
    return null;
  }

  const isActive = activeWindowId === id;
  const isMinimized = windowState.isMinimized;
  const isMaximized = windowState.isMaximized;
  const isResizable = windowState.resizable !== false && !isMaximized && !isMobile;

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
                    width: customSize.width,
                    height: customSize.height,
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

            {/* Desktop Window Resize Handles */}
            {isResizable && (
              <>
                {/* Right edge */}
                <div
                  onPointerDown={(e) => startResize(e, 'e')}
                  className="absolute top-8 right-0 w-1.5 bottom-3 cursor-ew-resize hover:bg-blue-400/30 touch-none"
                />
                {/* Bottom edge */}
                <div
                  onPointerDown={(e) => startResize(e, 's')}
                  className="absolute left-3 bottom-0 right-3 h-1.5 cursor-ns-resize hover:bg-blue-400/30 touch-none"
                />
                {/* Bottom-Right corner */}
                <div
                  onPointerDown={(e) => startResize(e, 'se')}
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 cursor-nwse-resize z-30 touch-none flex items-end justify-end p-0.5"
                  title="Boyutlandır"
                >
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="opacity-60">
                    <line x1="6" y1="2" x2="2" y2="6" stroke="#555" strokeWidth="1" />
                    <line x1="7" y1="5" x2="5" y2="7" stroke="#555" strokeWidth="1" />
                  </svg>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
