export type WindowId = 'readme' | 'projects' | 'browser' | 'cv' | 'contact' | 'trash' | string;

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface WindowState {
  id: WindowId;
  title: string;
  titleEn?: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  defaultPosition: Position;
  defaultSize: Size;
  minSize?: Size;
  resizable?: boolean;
  maximizable?: boolean;
  minimizable?: boolean;
}

export interface WindowStoreState {
  windows: Record<WindowId, WindowState>;
  activeWindowId: WindowId | null;
  maxZIndex: number;
  language: 'tr' | 'en';
  isStartMenuOpen: boolean;

  // Actions
  openWindow: (id: WindowId, customConfig?: Partial<WindowState>) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  restoreWindow: (id: WindowId) => void;
  toggleMinimize: (id: WindowId) => void;
  maximizeWindow: (id: WindowId) => void;
  unmaximizeWindow: (id: WindowId) => void;
  toggleMaximize: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  setLanguage: (lang: 'tr' | 'en') => void;
  toggleStartMenu: (force?: boolean) => void;
}
