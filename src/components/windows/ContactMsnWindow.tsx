import React, { useRef } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import { IDENTITY_DATA } from '../../data/portfolioData';
import { useContactForm } from '../../hooks/useContactForm';
import { FindMeHere } from '../common/FindMeHere';
import gsap from 'gsap';

export const ContactMsnWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    email,
    setEmail,
    message,
    setMessage,
    website,
    setWebsite,
    status,
    errorMessage,
    handleSubmit,
    resetForm,
    isSubmitting,
    isSuccess,
  } = useContactForm({ locale: language, source: 'msn-window' });

  const handleNudge = () => {
    // GSAP Shake animation on container
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { x: -8 },
        {
          x: 8,
          duration: 0.05,
          repeat: 7,
          yoyo: true,
          ease: 'power1.inOut',
          onComplete: () => {
            if (containerRef.current) {
              gsap.set(containerRef.current, { x: 0 });
            }
          },
        }
      );
    }
  };

  return (
    <MasterWindow
      id="contact"
      menuBar={
        <div className="flex items-center gap-3">
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'D' : 'F'}</span>
            {language === 'tr' ? 'osya' : 'ile'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'K' : 'C'}</span>
            {language === 'tr' ? 'işiler' : 'ontacts'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'E' : 'A'}</span>
            {language === 'tr' ? 'ylemler' : 'ctions'}
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">{language === 'tr' ? 'Y' : 'H'}</span>
            {language === 'tr' ? 'ardım' : 'elp'}
          </span>
        </div>
      }
      statusBar={
        <>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />{' '}
            {language === 'tr' ? 'Çevrimiçi' : 'Online'}
          </span>
          <span>MSN Messenger 7.5</span>
        </>
      }
    >
      <div ref={containerRef} className="flex flex-col h-full bg-[#EBF2FC] text-slate-800 font-sans select-text">
        {/* MSN Contact Header */}
        <div className="p-3 bg-gradient-to-b from-[#E6EFF9] to-[#D5E4F5] border-b border-[#B5CDE8] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded border-2 border-[#316AC5] bg-white p-0.5 shadow-xs flex items-center justify-center shrink-0">
              <XpIcon name="msn" size={32} />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-[13px] text-slate-900 truncate">
                {IDENTITY_DATA.name}
              </div>
              <div className="text-[11px] text-slate-600 truncate italic">
                &quot;{IDENTITY_DATA.social.email}&quot;
              </div>
            </div>
          </div>

          <a
            href={IDENTITY_DATA.social.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-xs no-underline"
          >
            💬 WhatsApp
          </a>
        </div>

        {/* Main Conversation / Form Area */}
        <div className="flex-1 p-3 bg-white overflow-y-auto space-y-3 m-2 rounded border border-[#7F9DB9] text-[12px]">
          {isSuccess ? (
            /* Success State */
            <div
              role="status"
              aria-live="polite"
              className="p-4 bg-[#FAF8F5] border border-[#7F9DB9] rounded space-y-3 text-center my-auto"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 font-bold text-lg flex items-center justify-center">
                ✓
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">
                  {language === 'tr' ? 'Mesajın ulaştı.' : 'Message received.'}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {language === 'tr'
                    ? 'En kısa sürede dönüş yapacağım.'
                    : "I'll get back to you as soon as I can."}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-3 py-1.5 bg-[#ECE9D8] hover:bg-[#F5F4EE] active:bg-[#DCD8CA] border border-[#716F64] rounded text-xs font-bold text-slate-900 shadow-xs cursor-pointer transition-colors"
                >
                  {language === 'tr' ? 'Yeni mesaj gönder' : 'Send another message'}
                </button>
              </div>
            </div>
          ) : (
            /* Chat Greeting & Instructions */
            <div className="space-y-2.5">
              <div className="p-2.5 bg-[#F4F7FC] rounded border border-[#C5D8F0] space-y-1">
                <div className="flex items-center gap-1.5 text-blue-800 font-bold text-xs">
                  <span>Görkem:</span>
                  <span className="text-[10px] text-slate-400 font-mono font-normal">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {language === 'tr'
                    ? 'Selam! Projeler, iş birlikleri veya aklına takılan herhangi bir soru için formu doldurup doğrudan mesaj gönderebilirsin.'
                    : 'Hi! For projects, collaborations, or any questions, feel free to fill out the form and send a message.'}
                </p>
              </div>

              {/* Find Me Here Links */}
              <FindMeHere locale={language} variant="msn" />
            </div>
          )}
        </div>

        {/* Action Toolbar */}
        <div className="px-2 py-0.5 flex items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleNudge}
              className="px-2 py-0.5 bg-amber-100 hover:bg-amber-200 border border-amber-400 rounded text-amber-900 font-bold flex items-center gap-1 transition-transform active:scale-95 cursor-pointer text-[11px]"
            >
              ⚡ {language === 'tr' ? 'Titreşim Gönder!' : 'Send Nudge!'}
            </button>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">MSN Live Contact</span>
        </div>

        {/* Input & Send Form (Only when not success) */}
        {!isSuccess && (
          <form onSubmit={handleSubmit} className="p-2 pt-1.5 space-y-2 bg-[#EBF2FC] border-t border-[#D4D0C8]">
            {/* Honeypot field (hidden from genuine users) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="msn-website">Website</label>
              <input
                id="msn-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <div>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  aria-label={language === 'tr' ? 'E-posta adresiniz' : 'Your email'}
                  placeholder={language === 'tr' ? 'E-posta adresiniz (gerekli)...' : 'Your email (required)...'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white border border-[#7F9DB9] rounded text-xs outline-none focus:border-blue-600 font-sans disabled:bg-slate-100 disabled:text-slate-400"
                />
              </div>

              <div className="flex gap-2">
                <textarea
                  required
                  rows={2}
                  disabled={isSubmitting}
                  aria-label={language === 'tr' ? 'Mesajınız' : 'Your message'}
                  placeholder={language === 'tr' ? 'Mesajınızı yazın (en az 10 karakter)...' : 'Type your message (at least 10 characters)...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 px-2.5 py-1.5 bg-white border border-[#7F9DB9] rounded text-xs outline-none focus:border-blue-600 font-sans resize-none disabled:bg-slate-100 disabled:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-1.5 rounded font-bold text-xs shadow-xs transition-colors flex items-center justify-center shrink-0 cursor-pointer ${
                    isSubmitting
                      ? 'bg-slate-300 text-slate-500 border border-slate-400 cursor-not-allowed'
                      : 'bg-[#316AC5] hover:bg-[#2556A3] text-white border border-[#0A246A]'
                  }`}
                >
                  {isSubmitting
                    ? language === 'tr'
                      ? 'Gönderiliyor...'
                      : 'Sending...'
                    : language === 'tr'
                    ? 'Mesaj Gönder'
                    : 'Send Message'}
                </button>
              </div>
            </div>

            {/* Error Announcement */}
            {errorMessage && (
              <div
                role="alert"
                aria-live="assertive"
                className="p-1.5 bg-red-50 border border-red-200 rounded text-[11px] text-red-700 font-semibold"
              >
                ⚠️ {errorMessage}
              </div>
            )}
          </form>
        )}
      </div>
    </MasterWindow>
  );
};
