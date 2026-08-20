import React, { useState, useRef, useEffect } from 'react';
import { MasterWindow } from '../window/MasterWindow';
import { XpIcon } from '../common/XpIcon';
import gsap from 'gsap';

interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
  isSystem?: boolean;
}

export const ContactMsnWindow: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'Görkem',
      text: 'Selam! Portfolyoma hoş geldin. Bana buradan mesaj gönderebilir veya aşağıdan bir titreşim yollayabilirsin 😊',
      time: '18:00',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'Ziyaretçi',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Automated reply simulation with safe timer tracking
    const replyTimer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'Görkem',
          text: 'Mesajın için teşekkürler! En kısa sürede geri dönüş yapacağım. Dilersen gorkemberk@operater.io adresinden de ulaşabilirsin.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);

    timeoutsRef.current.push(replyTimer);
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
        text: '💥 Bir titreşim gönderdiniz!',
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
            <span className="underline">D</span>osya
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">K</span>işiler
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">E</span>ylemler
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">A</span>raçlar
          </span>
          <span className="cursor-default hover:bg-[#0A246A] hover:text-white px-1.5 py-0.5 rounded-[2px]">
            <span className="underline">Y</span>ardım
          </span>
        </div>
      }
      statusBar={
        <>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Çevrimiçi
          </span>
          <span>MSN Messenger 7.5</span>
        </>
      }
    >
      <div ref={containerRef} className="flex flex-col h-full bg-[#EBF2FC] text-slate-800 font-sans">
        {/* MSN Contact Header */}
        <div className="p-3 bg-gradient-to-b from-[#E6EFF9] to-[#D5E4F5] border-b border-[#B5CDE8] flex items-center gap-3">
          <div className="w-11 h-11 rounded border-2 border-[#316AC5] bg-white p-0.5 shadow-sm flex items-center justify-center shrink-0">
            <XpIcon name="msn" size={32} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-bold text-[13px] text-slate-900 truncate">
              Görkem Berk Gündoğdu
            </div>
            <div className="text-[11px] text-slate-600 truncate italic">
              &quot;Yapay zeka ile UI/UX tasarlıyor & geliştiriyor 🚀&quot;
            </div>
          </div>
        </div>

        {/* Chat History Box */}
        <div className="flex-1 p-3 bg-white overflow-y-auto space-y-3 m-2 rounded border border-[#7F9DB9] text-[12px]">
          {messages.map((msg) => (
            <div key={msg.id}>
              {msg.isSystem ? (
                <div className="text-center font-bold text-red-600 text-[11px] my-1">
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
        <div className="px-2 py-1 flex items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleNudge}
              className="px-2.5 py-1 bg-amber-100 hover:bg-amber-200 border border-amber-400 rounded text-amber-900 font-bold flex items-center gap-1 shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
              ⚡ Titreşim Gönder!
            </button>
            <span className="text-[10px] text-slate-500 hidden sm:inline">(GSAP Titreşim Efekti)</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">MSN Live</span>
        </div>

        {/* Input & Send Form */}
        <form onSubmit={handleSend} className="p-2 pt-1 flex gap-2">
          <input
            type="text"
            placeholder="Mesajınızı yazın..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 px-2.5 py-1.5 bg-white border border-[#7F9DB9] rounded text-[12px] outline-none focus:border-blue-600 font-sans"
          />
          <button
            type="submit"
            className="px-4 py-1.5 bg-[#316AC5] hover:bg-[#2556A3] text-white font-bold text-[12px] rounded shadow transition-colors cursor-pointer"
          >
            Gönder
          </button>
        </form>
      </div>
    </MasterWindow>
  );
};
