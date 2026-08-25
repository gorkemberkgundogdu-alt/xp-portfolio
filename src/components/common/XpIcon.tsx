import React from 'react';

export type XpIconName =
  | 'notepad'
  | 'folder'
  | 'ie'
  | 'pdf'
  | 'msn'
  | 'computer'
  | 'skills'
  | 'tools'
  | (string & {});

interface XpIconProps {
  name: XpIconName;
  className?: string;
  size?: number;
}

export const XpIcon: React.FC<XpIconProps> = ({ name, className = '', size = 32 }) => {
  switch (name) {
    case 'notepad':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          {/* Notepad Cover */}
          <rect x="8" y="6" width="32" height="38" rx="2" fill="#4B95D6" stroke="#255A9B" strokeWidth="1.5" />
          {/* Spiral binding */}
          <rect x="8" y="6" width="6" height="38" fill="#1C5396" />
          <line x1="8" y1="11" x2="14" y2="11" stroke="#A9D0F5" strokeWidth="1.5" />
          <line x1="8" y1="17" x2="14" y2="17" stroke="#A9D0F5" strokeWidth="1.5" />
          <line x1="8" y1="23" x2="14" y2="23" stroke="#A9D0F5" strokeWidth="1.5" />
          <line x1="8" y1="29" x2="14" y2="29" stroke="#A9D0F5" strokeWidth="1.5" />
          <line x1="8" y1="35" x2="14" y2="35" stroke="#A9D0F5" strokeWidth="1.5" />
          {/* Paper */}
          <rect x="14" y="8" width="24" height="34" fill="#FFFFFF" rx="1" />
          {/* Text lines */}
          <line x1="18" y1="14" x2="34" y2="14" stroke="#7AA9E6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="19" x2="34" y2="19" stroke="#7AA9E6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="24" x2="30" y2="24" stroke="#7AA9E6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="29" x2="32" y2="29" stroke="#7AA9E6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="18" y1="34" x2="26" y2="34" stroke="#7AA9E6" strokeWidth="1.5" strokeLinecap="round" />
          {/* Yellow pencil overlay */}
          <path d="M30 38L42 16L36 12L24 34L30 38Z" fill="#F4D03F" stroke="#B7950B" strokeWidth="1" />
          <path d="M42 16L38 9L34 13L36 12L42 16Z" fill="#E74C3C" stroke="#922B21" strokeWidth="1" />
          <polygon points="24,34 22,40 28,38" fill="#FADBD8" stroke="#7B7D7D" strokeWidth="1" />
          <polygon points="22,40 21,41 23,39" fill="#2C3E50" />
        </svg>
      );

    case 'folder':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          {/* Back folder tab */}
          <path
            d="M6 12C6 10.8954 6.89543 10 8 10H18L22 14H40C41.1046 14 42 14.8954 42 16V36C42 37.1046 41.1046 38 40 38H8C6.89543 38 6 37.1046 6 36V12Z"
            fill="#D9A838"
            stroke="#B58117"
            strokeWidth="1.5"
          />
          {/* Inside paper */}
          <rect x="10" y="15" width="28" height="18" rx="1" fill="#FFFDF0" stroke="#DDD4B8" strokeWidth="1" />
          {/* Front folder face */}
          <path
            d="M5 19H43L39 39H9L5 19Z"
            fill="url(#xp-folder-grad)"
            stroke="#C48E1D"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="xp-folder-grad" x1="24" y1="19" x2="24" y2="39" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEE685" />
              <stop offset="0.5" stopColor="#F5C73D" />
              <stop offset="1" stopColor="#E5A61E" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'ie':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          <defs>
            <linearGradient id="ie-blue" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4FA4F4" />
              <stop offset="0.5" stopColor="#1976D2" />
              <stop offset="1" stopColor="#0D47A1" />
            </linearGradient>
            <linearGradient id="ie-halo" x1="8" y1="12" x2="40" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFDE59" />
              <stop offset="0.8" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#D97706" />
            </linearGradient>
          </defs>
          {/* IE Orbit Halo */}
          <path
            d="M8 32C12 40 34 44 42 28C46 20 38 10 24 10C16 10 10 16 9 22"
            stroke="url(#ie-halo)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Blue 'e' glyph */}
          <circle cx="24" cy="24" r="14" fill="url(#ie-blue)" />
          <path
            d="M14 23H34C34 17.5 29.5 14 24 14C18.5 14 14 18.5 14 24C14 29.5 18.5 34 24 34C28 34 31.5 32 33 29"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'pdf':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          {/* Document Sheet */}
          <path
            d="M10 6C10 4.89543 10.8954 4 12 4H30L38 12V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42V6Z"
            fill="#FFFFFF"
            stroke="#B0BEC5"
            strokeWidth="1.5"
          />
          {/* Folded corner */}
          <path d="M30 4L38 12H30V4Z" fill="#CFD8DC" stroke="#B0BEC5" strokeWidth="1" />
          {/* Red Adobe/PDF badge */}
          <rect x="6" y="20" width="22" height="14" rx="2" fill="#E53935" />
          <text x="9" y="30" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="Arial">
            PDF
          </text>
          {/* Document lines */}
          <line x1="16" y1="12" x2="26" y2="12" stroke="#90A4AE" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="16" x2="26" y2="16" stroke="#90A4AE" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="38" x2="34" y2="38" stroke="#90A4AE" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'msn':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          {/* Green butterfly wing */}
          <path
            d="M24 24C16 14 10 16 8 22C6 28 14 34 24 26"
            fill="#43A047"
            stroke="#2E7D32"
            strokeWidth="1.2"
          />
          {/* Blue butterfly wing */}
          <path
            d="M24 24C32 14 38 16 40 22C42 28 34 34 24 26"
            fill="#1E88E5"
            stroke="#1565C0"
            strokeWidth="1.2"
          />
          {/* Orange lower wing */}
          <path
            d="M24 26C18 32 16 38 20 40C24 42 26 36 24 26"
            fill="#FB8C00"
            stroke="#E65100"
            strokeWidth="1.2"
          />
          {/* Yellow lower wing */}
          <path
            d="M24 26C30 32 32 38 28 40C24 42 22 36 24 26"
            fill="#FDD835"
            stroke="#F57F17"
            strokeWidth="1.2"
          />
          {/* Center MSN buddy heads */}
          <circle cx="21" cy="16" r="4" fill="#43A047" stroke="#1B5E20" strokeWidth="1" />
          <circle cx="27" cy="16" r="4" fill="#1E88E5" stroke="#0D47A1" strokeWidth="1" />
        </svg>
      );

    case 'computer':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          {/* Monitor */}
          <rect x="8" y="6" width="32" height="24" rx="2" fill="#D2E3F8" stroke="#3A6EA5" strokeWidth="1.5" />
          <rect x="11" y="9" width="26" height="18" fill="#1C5EAE" />
          {/* Screen highlight */}
          <polygon points="11,9 25,9 11,23" fill="#3B82F6" opacity="0.5" />
          {/* Stand */}
          <path d="M21 30H27L29 36H19L21 30Z" fill="#90A4AE" stroke="#546E7A" strokeWidth="1" />
          {/* Base */}
          <rect x="14" y="36" width="20" height="4" rx="1" fill="#78909C" stroke="#455A64" strokeWidth="1" />
        </svg>
      );

    case 'skills':
    case 'tools':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          {/* Gear / System Tool icon */}
          <circle cx="24" cy="24" r="14" fill="#60A5FA" stroke="#1D4ED8" strokeWidth="1.5" />
          <path
            d="M24 6V10M24 38V42M6 24H10M38 24H42M11.3 11.3L14.1 14.1M33.9 33.9L36.7 36.7M11.3 36.7L14.1 33.9M33.9 14.1L36.7 11.3"
            stroke="#1E40AF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="8" fill="#F8FAFC" stroke="#1D4ED8" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="4" fill="#3B82F6" />
        </svg>
      );

    case 'minesweeper':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          {/* Ground / Base Drop Shadow */}
          <ellipse cx="22" cy="42" rx="14" ry="4" fill="#000000" opacity="0.35" />

          {/* Bomb Body (Spherical Dark Metal with Retro Radial Gradient) */}
          <defs>
            <radialGradient id="bombSphere" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#6B7280" />
              <stop offset="25%" stopColor="#374151" />
              <stop offset="70%" stopColor="#111827" />
              <stop offset="100%" stopColor="#030712" />
            </radialGradient>
            <linearGradient id="fuseCollar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
          </defs>

          {/* Metallic Studs/Spikes of the Mine */}
          <line x1="22" y1="9" x2="22" y2="43" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
          <line x1="5" y1="26" x2="39" y2="26" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
          <line x1="10" y1="14" x2="34" y2="38" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
          <line x1="10" y1="38" x2="34" y2="14" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />

          {/* Main Bomb Sphere */}
          <circle cx="22" cy="26" r="14" fill="url(#bombSphere)" stroke="#0F172A" strokeWidth="1.5" />

          {/* Specular Highlight on Sphere */}
          <ellipse cx="17" cy="20" rx="4.5" ry="2.5" transform="rotate(-30 17 20)" fill="#FFFFFF" opacity="0.65" />
          <circle cx="21" cy="18" r="1.5" fill="#FFFFFF" opacity="0.45" />

          {/* Fuse Collar (Brass/Gold Mount) */}
          <rect x="18" y="10" width="8" height="4" rx="1" fill="url(#fuseCollar)" stroke="#78350F" strokeWidth="1" />

          {/* Curved Rope Fuse */}
          <path
            d="M22 10C22 6 26 5 28 6C30 7 32 6 34 4"
            stroke="#D97706"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M22 10C22 6 26 5 28 6C30 7 32 6 34 4"
            stroke="#FEF08A"
            strokeWidth="1"
            strokeDasharray="1 2"
            strokeLinecap="round"
          />

          {/* Glowing Fuse Spark / Ember */}
          {/* Spark Rays */}
          <line x1="34" y1="4" x2="38" y2="1" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="34" y1="4" x2="39" y2="6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="34" y1="4" x2="31" y2="1" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="34" y1="4" x2="35" y2="9" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />

          {/* Outer Orange Flame */}
          <circle cx="35" cy="4" r="3" fill="#F97316" />
          {/* Bright Yellow Core */}
          <circle cx="35" cy="4" r="1.8" fill="#FDE047" />
          {/* White Center Hotspot */}
          <circle cx="35" cy="4" r="0.8" fill="#FFFFFF" />
        </svg>
      );

    case 'game':
    case 'viceCity':
      return (
        <img
          src="/assets/vice-city-icon.webp"
          alt="Vice City"
          width={size}
          height={size}
          className={`inline-block select-none rounded-[3px] shadow-xs object-cover ${className}`}
          style={{ width: size, height: size }}
        />
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none ${className}`}
        >
          <rect x="8" y="8" width="32" height="32" rx="4" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
          <text x="24" y="28" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            XP
          </text>
        </svg>
      );
  }
};
