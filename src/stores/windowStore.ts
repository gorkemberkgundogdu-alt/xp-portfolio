import { create } from 'zustand';
import type { WindowId, WindowState, WindowStoreState } from '../types/window';

export const INITIAL_WINDOWS: Record<WindowId, WindowState> = {
  readme: {
    id: 'readme',
    title: 'Gorkem_Berk_Beni_Oku.txt - Not Defteri',
    titleEn: 'Gorkem_Berk_Readme.txt - Notepad',
    icon: 'notepad',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    defaultPosition: { x: 80, y: 50 },
    defaultSize: { width: 680, height: 500 },
    minSize: { width: 340, height: 280 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  },
  projects: {
    id: 'projects',
    title: 'C:\\Portfolio\\Projects',
    titleEn: 'C:\\Portfolio\\Projects',
    icon: 'folder',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    defaultPosition: { x: 120, y: 80 },
    defaultSize: { width: 780, height: 520 },
    minSize: { width: 380, height: 300 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  },
  browser: {
    id: 'browser',
    title: 'Internet Explorer - Görkem Berk Gündoğdu Makaleleri & Düşünceler',
    titleEn: 'Internet Explorer - Articles & Thoughts by Görkem Berk Gündoğdu',
    icon: 'ie',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    defaultPosition: { x: 100, y: 60 },
    defaultSize: { width: 840, height: 560 },
    minSize: { width: 400, height: 320 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  },
  cv: {
    id: 'cv',
    title: 'Gorkem_Berk_CV_2026.pdf - Windows Resim ve Faks Görüntüleyicisi',
    titleEn: 'Gorkem_Berk_CV_2026.pdf - Windows Picture and Fax Viewer',
    icon: 'pdf',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    defaultPosition: { x: 160, y: 70 },
    defaultSize: { width: 700, height: 550 },
    minSize: { width: 360, height: 300 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  },
  contact: {
    id: 'contact',
    title: 'MSN Messenger - Görkem Berk Gündoğdu (Çevrimiçi)',
    titleEn: 'MSN Messenger - Görkem Berk Gündoğdu (Online)',
    icon: 'msn',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    defaultPosition: { x: 220, y: 100 },
    defaultSize: { width: 420, height: 540 },
    minSize: { width: 320, height: 420 },
    resizable: true,
    maximizable: false,
    minimizable: true,
  },
  trash: {
    id: 'trash',
    title: 'Geri Dönüşüm Kutusu',
    titleEn: 'Recycle Bin',
    icon: 'trash',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
    defaultPosition: { x: 200, y: 120 },
    defaultSize: { width: 500, height: 380 },
    minSize: { width: 300, height: 240 },
    resizable: true,
    maximizable: true,
    minimizable: true,
  },
};

export const useWindowStore = create<WindowStoreState>((set, get) => ({
  windows: INITIAL_WINDOWS,
  activeWindowId: 'readme',
  selectedIconId: null,
  maxZIndex: 10,
  language: 'tr',
  isStartMenuOpen: false,

  openWindow: (id: WindowId, customConfig?: Partial<WindowState>) => {
    const { windows, maxZIndex } = get();
    const target = windows[id] || {
      id,
      title: id,
      icon: 'generic',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 1,
      defaultPosition: { x: 100, y: 100 },
      defaultSize: { width: 600, height: 400 },
      resizable: true,
      maximizable: true,
      minimizable: true,
      ...customConfig,
    };

    const nextZ = maxZIndex + 1;

    set({
      windows: {
        ...windows,
        [id]: {
          ...target,
          ...customConfig,
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      },
      activeWindowId: id,
      maxZIndex: nextZ,
      isStartMenuOpen: false,
    });
  },

  closeWindow: (id: WindowId) => {
    const { windows, activeWindowId } = get();
    const current = windows[id];
    if (!current) return;

    const remainingOpen = Object.values(windows).filter(
      (w) => w.id !== id && w.isOpen && !w.isMinimized
    );

    let nextActiveId: WindowId | null = null;
    if (activeWindowId === id && remainingOpen.length > 0) {
      const highest = remainingOpen.reduce((prev, curr) =>
        curr.zIndex > prev.zIndex ? curr : prev
      );
      nextActiveId = highest.id;
    } else if (activeWindowId === id) {
      nextActiveId = null;
    } else {
      nextActiveId = activeWindowId;
    }

    set({
      windows: {
        ...windows,
        [id]: {
          ...current,
          isOpen: false,
          isMinimized: false,
        },
      },
      activeWindowId: nextActiveId,
    });
  },

  minimizeWindow: (id: WindowId) => {
    const { windows, activeWindowId } = get();
    const current = windows[id];
    if (!current) return;

    const remainingOpen = Object.values(windows).filter(
      (w) => w.id !== id && w.isOpen && !w.isMinimized
    );

    let nextActiveId: WindowId | null = null;
    if (activeWindowId === id && remainingOpen.length > 0) {
      const highest = remainingOpen.reduce((prev, curr) =>
        curr.zIndex > prev.zIndex ? curr : prev
      );
      nextActiveId = highest.id;
    } else if (activeWindowId === id) {
      nextActiveId = null;
    } else {
      nextActiveId = activeWindowId;
    }

    set({
      windows: {
        ...windows,
        [id]: {
          ...current,
          isMinimized: true,
        },
      },
      activeWindowId: nextActiveId,
    });
  },

  minimizeAll: () => {
    const { windows } = get();
    const nextWindows: Record<WindowId, WindowState> = { ...windows };
    let hasOpen = false;

    Object.keys(nextWindows).forEach((key) => {
      const winId = key as WindowId;
      if (nextWindows[winId].isOpen && !nextWindows[winId].isMinimized) {
        nextWindows[winId] = {
          ...nextWindows[winId],
          isMinimized: true,
        };
        hasOpen = true;
      }
    });

    if (hasOpen) {
      set({
        windows: nextWindows,
        activeWindowId: null,
      });
    }
  },

  restoreWindow: (id: WindowId) => {
    const { windows, maxZIndex } = get();
    const current = windows[id];
    if (!current) return;

    const nextZ = maxZIndex + 1;
    set({
      windows: {
        ...windows,
        [id]: {
          ...current,
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      },
      activeWindowId: id,
      maxZIndex: nextZ,
    });
  },

  toggleMinimize: (id: WindowId) => {
    const { windows, activeWindowId, focusWindow, minimizeWindow, restoreWindow } = get();
    const current = windows[id];
    if (!current || !current.isOpen) return;

    if (current.isMinimized) {
      restoreWindow(id);
    } else if (activeWindowId === id) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  },

  maximizeWindow: (id: WindowId) => {
    const { windows, maxZIndex } = get();
    const current = windows[id];
    if (!current) return;

    const nextZ = maxZIndex + 1;
    set({
      windows: {
        ...windows,
        [id]: {
          ...current,
          isMaximized: true,
          isMinimized: false,
          zIndex: nextZ,
        },
      },
      activeWindowId: id,
      maxZIndex: nextZ,
    });
  },

  unmaximizeWindow: (id: WindowId) => {
    const { windows } = get();
    const current = windows[id];
    if (!current) return;

    set({
      windows: {
        ...windows,
        [id]: {
          ...current,
          isMaximized: false,
        },
      },
    });
  },

  toggleMaximize: (id: WindowId) => {
    const { windows, maximizeWindow, unmaximizeWindow } = get();
    const current = windows[id];
    if (!current) return;

    if (current.isMaximized) {
      unmaximizeWindow(id);
    } else {
      maximizeWindow(id);
    }
  },

  focusWindow: (id: WindowId) => {
    const { windows, maxZIndex, activeWindowId } = get();
    const current = windows[id];
    if (!current || !current.isOpen) return;

    if (activeWindowId === id && !current.isMinimized) return;

    const nextZ = maxZIndex + 1;
    set({
      windows: {
        ...windows,
        [id]: {
          ...current,
          isMinimized: false,
          zIndex: nextZ,
        },
      },
      activeWindowId: id,
      maxZIndex: nextZ,
      isStartMenuOpen: false,
    });
  },

  setSelectedIconId: (id: WindowId | null) => {
    set({ selectedIconId: id });
  },

  setLanguage: (lang: 'tr' | 'en') => {
    set({ language: lang });
  },

  toggleStartMenu: (force?: boolean) => {
    set((state) => ({
      isStartMenuOpen: typeof force === 'boolean' ? force : !state.isStartMenuOpen,
    }));
  },
}));
