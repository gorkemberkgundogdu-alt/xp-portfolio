import React from 'react';
import { IDENTITY_DATA } from '../../data/portfolioData';

interface FindMeHereProps {
  locale: 'tr' | 'en';
  variant?: 'msn' | 'properties';
}

export const FindMeHere: React.FC<FindMeHereProps> = ({ locale, variant = 'properties' }) => {
  const links = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: IDENTITY_DATA.social.linkedin,
      icon: '💼',
      detail: 'linkedin.com/in/gorkemberkgundogdu',
    },
    {
      id: 'gmail',
      label: 'Gmail',
      href: `mailto:${IDENTITY_DATA.social.email}`,
      icon: '✉️',
      detail: IDENTITY_DATA.social.email,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: IDENTITY_DATA.social.whatsappUrl,
      icon: '💬',
      detail: IDENTITY_DATA.social.whatsapp,
    },
  ];

  if (variant === 'msn') {
    return (
      <div className="pt-2 border-t border-[#B5CDE8] space-y-1.5 font-sans">
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          {locale === 'tr' ? 'Bana buradan da ulaşabilirsin' : 'Find me here'}
        </div>
        <div className="flex items-center gap-2 flex-wrap text-[11px]">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              target={l.id === 'gmail' ? '_self' : '_blank'}
              rel={l.id === 'gmail' ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-white hover:bg-[#E8F0FE] text-[#0A246A] hover:text-[#0055EA] border border-[#7F9DB9] rounded shadow-2xs font-semibold no-underline transition-colors cursor-pointer"
            >
              <span>{l.icon}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 bg-[#FAF8F5] border border-[#D4D0C8] rounded space-y-2 font-sans">
      <div className="text-[11px] font-bold text-slate-600">
        {locale === 'tr' ? 'Bana buradan da ulaşabilirsin' : 'Find me here'}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {links.map((l) => (
          <a
            key={l.id}
            href={l.href}
            target={l.id === 'gmail' ? '_self' : '_blank'}
            rel={l.id === 'gmail' ? undefined : 'noopener noreferrer'}
            className="flex items-center gap-2 p-2 bg-white hover:bg-[#E8F0FE] border border-[#7F9DB9] hover:border-[#316AC5] rounded shadow-2xs text-xs font-semibold text-slate-800 no-underline transition-all cursor-pointer"
          >
            <span className="text-sm">{l.icon}</span>
            <div className="min-w-0">
              <div className="font-bold text-slate-900 leading-tight">{l.label}</div>
              <div className="text-[10px] text-slate-500 truncate">{l.detail}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
