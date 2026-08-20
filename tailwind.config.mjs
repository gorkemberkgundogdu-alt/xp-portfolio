/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        xp: ['Tahoma', 'Segoe UI', 'Trebuchet MS', 'Arial', 'sans-serif'],
        pixel: ['"MS Sans Serif"', 'Tahoma', 'sans-serif'],
        mono: ['"Lucida Console"', 'Courier New', 'monospace'],
      },
      colors: {
        xp: {
          blue: {
            titlebarStart: '#0058EE',
            titlebarMid: '#2F82FF',
            titlebarEnd: '#0055EA',
            inactiveStart: '#7697D9',
            inactiveMid: '#99B4EB',
            inactiveEnd: '#7697D9',
            frame: '#0055EA',
            taskbar: '#245EDC',
            taskbarActive: '#1E52BF',
          },
          green: {
            start: '#388E3C',
            startHover: '#43A047',
            startActive: '#2E7D32',
          },
          window: {
            bg: '#ECE9D8',
            surface: '#FFFFFF',
            border: '#0055EA',
            borderInactive: '#7697D9',
          },
        },
      },
      boxShadow: {
        'xp-window': '2px 2px 10px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgba(0, 0, 0, 0.2)',
        'xp-window-active': '3px 3px 15px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(0, 0, 0, 0.3)',
        'xp-btn': 'inset -1px -1px 1px #0a246a, inset 1px 1px 1px #ffffff',
        'xp-btn-pressed': 'inset 1px 1px 2px #0a246a, inset -1px -1px 1px #ffffff',
        'xp-taskbar-item': 'inset 1px 1px 1px rgba(255,255,255,0.4), inset -1px -1px 1px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
