import React from 'react';

interface XpHourglassProps {
  className?: string;
  size?: number;
}

export const XpHourglass: React.FC<XpHourglassProps> = ({ className = '', size = 36 }) => {
  return (
    <div
      className={`inline-block relative select-none xp-hourglass-container ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="xp-hourglass-anim"
      >
        {/* Top Frame Bar */}
        <rect x="6" y="2" width="20" height="3" rx="1" fill="#8B5A2B" stroke="#4A2F13" strokeWidth="1" />
        <rect x="8" y="3" width="16" height="1" fill="#D49A6A" />

        {/* Bottom Frame Bar */}
        <rect x="6" y="27" width="20" height="3" rx="1" fill="#8B5A2B" stroke="#4A2F13" strokeWidth="1" />
        <rect x="8" y="28" width="16" height="1" fill="#D49A6A" />

        {/* Side Pillars */}
        <rect x="7" y="5" width="2" height="22" fill="#5C3A1E" />
        <rect x="23" y="5" width="2" height="22" fill="#5C3A1E" />

        {/* Glass Bulb Outer Shape */}
        <path
          d="M 9 5 L 23 5 C 23 11, 18 14, 16 16 C 14 14, 9 11, 9 5 Z"
          fill="#E6F2FF"
          fillOpacity="0.8"
          stroke="#4682B4"
          strokeWidth="1"
        />
        <path
          d="M 9 27 L 23 27 C 23 21, 18 18, 16 16 C 14 18, 9 21, 9 27 Z"
          fill="#E6F2FF"
          fillOpacity="0.8"
          stroke="#4682B4"
          strokeWidth="1"
        />

        {/* Top Sand (Animated Level) */}
        <path
          d="M 10 7 Q 16 9, 22 7 C 21 11, 18 13.5, 16 15 C 14 13.5, 11 11, 10 7 Z"
          fill="#FFCC00"
          stroke="#D48800"
          strokeWidth="0.5"
          className="xp-sand-top"
        />

        {/* Sand Falling Stream */}
        <line x1="16" y1="14" x2="16" y2="24" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="2 1" className="xp-sand-stream" />

        {/* Bottom Sand (Animated Fill) */}
        <path
          d="M 10 26 Q 16 23, 22 26 C 22 26, 21.5 26.5, 16 26.5 C 10.5 26.5, 10 26, 10 26 Z"
          fill="#FFCC00"
          stroke="#D48800"
          strokeWidth="0.5"
          className="xp-sand-bottom"
        />

        {/* Glass Highlights */}
        <path d="M 11 6 C 11 9, 13 11, 14 12" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />
        <path d="M 11 26 C 11 23, 13 21, 14 20" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.8" />
      </svg>
    </div>
  );
};
