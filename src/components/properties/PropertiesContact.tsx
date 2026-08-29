import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { FindMeHere } from '../common/FindMeHere';
import { IDENTITY_DATA } from '../../data/portfolioData';
import { XpIcon } from '../common/XpIcon';

interface PropertiesContactProps {
  locale: 'tr' | 'en';
}

export const PropertiesContact: React.FC<PropertiesContactProps> = ({ locale }) => {
  const {
    email,
    setEmail,
    message,
    setMessage,
    website,
    setWebsite,
    errorMessage,
    handleSubmit,
    resetForm,
    isSubmitting,
    isSuccess,
  } = useContactForm({ locale, source: 'mobile-properties' });

  return (
    <div className="space-y-4 max-w-2xl mx-auto font-sans">
      {/* Header Info Card */}
      <div className="p-3 bg-gradient-to-b from-[#E6EFF9] to-[#D5E4F5] border border-[#B5CDE8] rounded flex items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded border border-[#316AC5] bg-white flex items-center justify-center shrink-0 shadow-2xs">
            <XpIcon name="msn" size={24} />
          </div>
          <div className="min-w-0">
            <div className="font-bold text-xs text-slate-900 truncate">{IDENTITY_DATA.name}</div>
            <div className="text-[11px] text-slate-600 truncate">{IDENTITY_DATA.social.email}</div>
          </div>
        </div>
        <a
          href={IDENTITY_DATA.social.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold shadow-xs transition-colors no-underline shrink-0"
        >
          💬 WhatsApp
        </a>
      </div>

      {/* Main Form or Success State */}
      {isSuccess ? (
        <div
          role="status"
          aria-live="polite"
          className="p-5 bg-white border border-[#7F9DB9] rounded space-y-3 text-center shadow-xs"
        >
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 font-bold text-xl flex items-center justify-center">
            ✓
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900">
              {locale === 'tr' ? 'Mesajın ulaştı.' : 'Message received.'}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {locale === 'tr'
                ? 'En kısa sürede dönüş yapacağım.'
                : "I'll get back to you as soon as I can."}
            </p>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="px-4 py-1.5 bg-[#ECE9D8] hover:bg-[#F5F4EE] active:bg-[#DCD8CA] border border-[#716F64] rounded text-xs font-bold text-slate-900 shadow-xs cursor-pointer transition-colors"
          >
            {locale === 'tr' ? 'Yeni mesaj gönder' : 'Send another message'}
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-3 bg-white p-4 rounded border border-[#7F9DB9] shadow-xs"
        >
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="prop-website">Website</label>
            <input
              id="prop-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700">
              {locale === 'tr' ? 'E-posta Adresiniz:' : 'Your Email:'}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@alanadi.com"
              className="w-full px-3 py-1.5 bg-white border border-[#7F9DB9] rounded text-xs outline-none focus:border-blue-600 font-sans disabled:bg-slate-100 disabled:text-slate-400"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700">
              {locale === 'tr' ? 'Mesajınız:' : 'Message:'}
            </label>
            <textarea
              id="contact-message"
              required
              rows={3}
              disabled={isSubmitting}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                locale === 'tr'
                  ? 'Mesajınızı buraya yazın (en az 10 karakter)...'
                  : 'Type your message here (at least 10 characters)...'
              }
              className="w-full px-3 py-1.5 bg-white border border-[#7F9DB9] rounded text-xs outline-none focus:border-blue-600 font-sans resize-none disabled:bg-slate-100 disabled:text-slate-400"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 font-bold text-xs rounded shadow-xs transition-colors cursor-pointer ${
              isSubmitting
                ? 'bg-slate-300 text-slate-500 border border-slate-400 cursor-not-allowed'
                : 'bg-[#316AC5] hover:bg-[#2556A3] text-white border border-[#0A246A]'
            }`}
          >
            {isSubmitting
              ? locale === 'tr'
                ? 'Gönderiliyor...'
                : 'Sending...'
              : locale === 'tr'
              ? 'Mesaj Gönder'
              : 'Send Message'}
          </button>

          {errorMessage && (
            <div
              role="alert"
              aria-live="assertive"
              className="p-2 bg-red-50 border border-red-200 rounded text-xs text-red-700 font-semibold"
            >
              ⚠️ {errorMessage}
            </div>
          )}
        </form>
      )}

      {/* Find Me Here Links */}
      <FindMeHere locale={locale} variant="properties" />
    </div>
  );
};
