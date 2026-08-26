import React from 'react';

interface EditorialStatementProps {
  quoteTr: string;
  quoteEn: string;
  subtextTr?: string;
  subtextEn?: string;
  locale?: 'tr' | 'en';
  accentColor?: string;
  className?: string;
}

export const EditorialStatement: React.FC<EditorialStatementProps> = ({
  quoteTr,
  quoteEn,
  subtextTr,
  subtextEn,
  locale = 'tr',
  className = '',
}) => {
  const quote = locale === 'tr' ? quoteTr : quoteEn;
  const subtext = locale === 'tr' ? subtextTr : subtextEn;

  return (
    <div className={`w-full my-8 sm:my-12 py-4 select-text ${className}`}>
      <div className="relative max-w-3xl">
        {/* Subtle accent vertical bar */}
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="w-1 self-stretch bg-gradient-to-b from-purple-500 via-purple-600 to-transparent rounded-full shrink-0" />
          <div className="space-y-2">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-slate-100 tracking-tight leading-snug">
              “{quote}”
            </blockquote>
            {subtext && (
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-2xl">
                {subtext}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
