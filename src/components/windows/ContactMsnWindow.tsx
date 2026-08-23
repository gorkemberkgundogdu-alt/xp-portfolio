import React, { useState, useRef, useEffect } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import { useWindowStore } from '../../stores/windowStore';
import { IDENTITY_DATA } from '../../data/portfolioData';
import gsap from 'gsap';

interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
  isSystem?: boolean;
}

export const ContactMsnWindow: React.FC = () => {
  const language = useWindowStore((state) => state.language);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'Görkem',
      text:
        language === 'tr'
          ? 'Selam! Portfolyoma hoş geldin. Bana buradan mesaj gönderebilir, WhatsApp üzerinden ulaşabilir veya aşağıdan bir titreşim yollayabilirsin 😊'
          : 'Hi! Welcome to my portfolio. You can send a message, reach out via WhatsApp, or send a nudge below 😊',
      time: '18:00',
    },
  ]);
  const [emailInput, setEmailInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: emailInput.trim() ? emailInput.trim() : language === 'tr' ? 'Ziyaretçi' : 'Visitor',
      text: msgInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setMsgInput('');

    // Authentic XP / MSN Feedback state
    const feedbackText =
      language === 'tr'
        ? 'Mesajlaşma özelliği yakında aktif olacaktır. Acil konular için lütfen WhatsApp üzerinden ulaşın veya doğrudan gorkemberkgundogdu@gmail.com adresine yazın.'
        : 'Messaging will be available shortly. For urgent inquiries, please reach out via WhatsApp or directly at gorkemberkgundogdu@gmail.com.';

    setStatusMessage(
      language === 'tr' ? 'Mesajlaşma özelliği yakında aktif olacaktır.' : 'Messaging will be available shortly.'
    );

    const timer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'MSN Messenger System',
          text: feedbackText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isSystem: true,
        },
      ]);
    }, 600);

    timeoutsRef.current.push(timer);
  };

  const handleNudge = () => {
    // GSAP Shake animation strictly on inner container to protect outer drag transform
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

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'Sistem',
        text: language === 'tr' ? '💥 Bir titreşim gönderdiniz!' : '💥 You sent a nudge!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSystem: true,
      },
    ]);
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
      <div ref={containerRef} className="flex flex-col h-full bg-[#EBF2FC] text-slate-800 font-sans">
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
            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors shadow-xs"
          >
            💬 WhatsApp
          </a>
        </div>

        {/* Chat History Box */}
        <div className="flex-1 p-3 bg-white overflow-y-auto space-y-3 m-2 rounded border border-[#7F9DB9] text-[12px]">
          {messages.map((msg) => (
            <div key={msg.id}>
              {msg.isSystem ? (
                <div className="text-center font-bold text-red-600 text-[11px] my-1 bg-red-50 p-1.5 rounded border border-red-200">
                  {msg.text}
                </div>
              ) : (
                <div className="space-y-0.5">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`font-bold ${
                        msg.sender === 'Görkem' ? 'text-blue-700' : 'text-slate-800'
                      }`}
                    >
                      {msg.sender}:
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{msg.time}</span>
                  </div>
                  <div className="text-slate-800 pl-2 leading-relaxed">{msg.text}</div>
                </div>
              )}
            </div>
          ))}
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
          <span className="text-[10px] text-slate-400 font-mono">MSN Live</span>
        </div>

        {/* Input & Send Form */}
        <form onSubmit={handleSend} className="p-2 pt-1 space-y-1.5 bg-[#EBF2FC] border-t border-[#D4D0C8]">
          <div className="flex gap-2">
            <input
              type="email"
              aria-label={language === 'tr' ? 'E-posta adresiniz (isteğe bağlı)' : 'Your email (optional)'}
              placeholder={language === 'tr' ? 'E-posta adresiniz (isteğe bağlı)...' : 'Your email (optional)...'}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="w-1/3 px-2 py-1 bg-white border border-[#7F9DB9] rounded text-[11px] outline-none focus:border-blue-600 font-sans"
            />
            <input
              type="text"
              aria-label={language === 'tr' ? 'Mesajınız' : 'Your message'}
              placeholder={language === 'tr' ? 'Mesajınızı yazın...' : 'Type your message...'}
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              className="flex-1 px-2.5 py-1 bg-white border border-[#7F9DB9] rounded text-[11px] outline-none focus:border-blue-600 font-sans"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-[#316AC5] hover:bg-[#2556A3] text-white font-bold text-[11px] rounded shadow-xs transition-colors cursor-pointer"
            >
              {language === 'tr' ? 'Gönder' : 'Send'}
            </button>
          </div>

          {statusMessage && (
            <div className="text-[10px] text-blue-800 font-medium italic">
              ℹ️ {statusMessage}
            </div>
          )}
        </form>
      </div>
    </MasterWindow>
  );
};
