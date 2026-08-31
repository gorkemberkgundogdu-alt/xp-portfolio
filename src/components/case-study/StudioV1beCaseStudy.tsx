import React from 'react';
import { HeroPair } from './primitives/HeroPair';
import { FeatureVisual } from './primitives/FeatureVisual';
import { EditorialStatement } from './primitives/EditorialStatement';
import { ProductFrame } from './primitives/ProductFrame';
import { ReflectionBlock } from './primitives/ReflectionBlock';

export interface StudioV1beCaseStudyProps {
  locale?: 'tr' | 'en';
}

export const StudioV1beCaseStudy: React.FC<StudioV1beCaseStudyProps> = ({ locale = 'tr' }) => {
  const isTr = locale === 'tr';

  return (
    <article className="w-full max-w-5xl mx-auto space-y-16 select-text font-sans text-slate-200">
      {/* ========================================================================= */}
      {/* 00 — HERO / CONTEXT                                                      */}
      {/* ========================================================================= */}
      <header className="space-y-8 pb-10 border-b border-slate-800" id="hero">
        {/* Top Badges & Live Platform Link */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-lime-950/70 border border-lime-800/70 rounded-md text-lime-300 text-xs font-semibold">
              <img
                src="/assets/v1be-logo.webp"
                alt="v1be studio"
                width={14}
                height={14}
                className="w-3.5 h-3.5 rounded-xs shrink-0 object-contain"
              />
              <span>v1be studio</span>
            </span>
            <span className="px-2.5 py-1 bg-slate-800/90 border border-slate-700/80 rounded-md text-slate-300 text-xs font-medium">
              {isTr ? 'Web Tasarım & Geliştirme' : 'Web Design & Development'}
            </span>
            <span className="px-2.5 py-1 bg-emerald-950/50 border border-emerald-800/60 rounded-md text-emerald-300 text-xs font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isTr ? 'Canlıda / Üretimde' : 'Live in Production'}</span>
            </span>
          </div>

          <a
            href="https://studio.v1be.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold rounded-md text-xs transition-all shadow-sm shadow-lime-950/40 no-underline"
          >
            <span>{isTr ? 'Canlı Siteyi Ziyaret Et' : 'Visit Live Site'}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Main Title & Role Intro */}
        <div className="space-y-4">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? 'VAKA ÇALIŞMASI · 2026' : 'CASE STUDY · 2026'}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {isTr
              ? 'Studio v1be — Web Tasarım, UX ve Front-End Mimarisini Buluşturan Servis Sitesi'
              : 'Studio v1be — Web Design, UX & Front-End Service Website'}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {isTr
              ? 'v1be\'nin web tasarım ve geliştirme servis kolu için sıfırdan tasarlanan ve Astro v7 + Tailwind CSS v4 ile kodlanan kurumsal web deneyimi. Güçlü görsel dil, özel masaüstü scroll akışı, responsive davranış ayrımı ve yapay zeka arama motorları için optimize edilmiş içerik mimarisi.'
              : 'The web design and development service arm of v1be: An engineered web experience built from scratch with Astro v7 + Tailwind CSS v4. Combines strong visual identity, desktop paginated scroll pacing, responsive behavioral adaptations, and AI-search-readable architecture.'}
          </p>
        </div>

        {/* Project Scope & Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-xs">
          <div>
            <div className="text-slate-400 font-mono text-[11px] uppercase">{isTr ? 'Rol' : 'Role'}</div>
            <div className="text-white font-semibold mt-0.5">{isTr ? 'Web Designer & Front-End Builder' : 'Web Designer & Front-End Builder'}</div>
          </div>
          <div>
            <div className="text-slate-400 font-mono text-[11px] uppercase">{isTr ? 'Kapsam' : 'Scope'}</div>
            <div className="text-white font-semibold mt-0.5">{isTr ? 'UI/UX, Front-End, Responsive, SEO/GEO' : 'UI/UX, Front-End, Responsive, SEO/GEO'}</div>
          </div>
          <div>
            <div className="text-slate-400 font-mono text-[11px] uppercase">{isTr ? 'Teknoloji' : 'Tech Stack'}</div>
            <div className="text-white font-semibold mt-0.5">Astro v7, TypeScript, Tailwind v4, Three.js</div>
          </div>
          <div>
            <div className="text-slate-400 font-mono text-[11px] uppercase">{isTr ? 'Mimari' : 'Architecture'}</div>
            <div className="text-white font-semibold mt-0.5">{isTr ? 'Sıfır Framework Adası (Zero Islands)' : 'Zero Framework Islands (Pure SSG)'}</div>
          </div>
        </div>

        {/* Primary Editorial Statement */}
        <EditorialStatement
          locale={locale}
          quoteTr="Bir site sadece iyi görünmesin. Anlaşılmalı, bulunmalı ve çalışmalı."
          quoteEn="A website shouldn't just look good. It should be understood, found and work."
        />

        {/* Main Hero Visual */}
        <FeatureVisual
          slotId="studio-hero"
          titleTr="Studio v1be Açılış Sahnesi"
          titleEn="Studio v1be Hero Scene"
          src="/assets/case-study/studio-v1be/studio-hero-desktop.webp"
          altTr="Studio v1be Hero masaüstü ekranı: Prosedürel 3D robot maskotu ve tipografi"
          altEn="Studio v1be Hero desktop view featuring procedural 3D robot mascot and typography"
          captionTr="Studio v1be açılış sahnesi: Montserrat tipografisi, Three.js prosedürel robot maskotu (v1ben.) ve mimari blueprint dokusu."
          captionEn="Studio v1be hero scene: Montserrat display typography, procedural Three.js robot mascot (v1ben.), and architectural grid texture."
          locale={locale}
        />
      </header>

      {/* ========================================================================= */}
      {/* 01 — AYNI MARKA, FARKLI GÖREV                                            */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="brand-dna">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '01 · MARKA VE POZİSYONLAMA' : '01 · BRAND & POSITIONING'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Aynı marka. Farklı bir görev.' : 'Same brand. Different job.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {isTr
              ? 'Studio v1be, bağımsız iki landing page değil; v1be platformunun web tasarım ve geliştirme hizmet koludur. v1be\'nin maskot, koyu yüzeyler ve neon vurgulardan oluşan görsel DNA\'sını taşır; ancak hizmet kolunu platformdan ayrıştırmak için renk hiyerarşisi koyu mimari zemin (#121214) ve neon lime (#d1f300) odaklı olarak yeniden yapılandırıldı.'
              : 'Studio v1be is not two separate landing pages; it is the web design and development service arm of v1be. It inherits v1be\'s visual DNA—mascot, dark surfaces, and neon accents—while shifting the palette toward an engineered blueprint theme (#121214 base with #d1f300 lime) to give the services arm its own clear identity.'}
          </p>
        </div>

        <HeroPair
          primarySlotId="studio-about"
          primaryTitleTr="Marka Mimari İlişkisi"
          primaryTitleEn="Brand Relationship Architecture"
          primarySrc="/assets/case-study/studio-v1be/studio-about-brand-architecture-desktop.webp"
          primaryAltTr="About sayfası: Platform ve Servis Kolu ilişki kartları"
          primaryAltEn="About page: Platform and Service Arm relationship cards"
          primaryBrowserUrl="studio.v1be.io/about"
          secondarySlotId="v1be-platform-hero"
          secondaryTitleTr="v1be Platformu (Mor Tema)"
          secondaryTitleEn="v1be Platform (Purple Theme)"
          secondarySrc="/assets/case-study/studio-v1be/v1be-platform-hero-desktop.webp"
          secondaryAltTr="v1be.io platformu mor hero ekranı ve 3D robot maskotu"
          secondaryAltEn="v1be.io platform purple hero screen and 3D robot mascot"
          secondaryBrowserUrl="v1be.io"
          captionTr="About ve v1be.io ekranları: v1be platformunun mor görsel DNA'sı ile Studio servis kolunun koyu mimari ve lime teması arasındaki ilişki."
          captionEn="About and v1be.io screens: Relationship between v1be platform's purple visual DNA and Studio's dark blueprint & lime service identity."
          locale={locale}
        />
      </section>

      {/* ========================================================================= */}
      {/* 02 — İLK EKRANDA ANLATMAK                                                */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="information-hierarchy">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '02 · BİLGİ HİYERARŞİSİ' : '02 · INFORMATION HIERARCHY'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'İlk ekranda anlatmak' : 'Making it clear on the first screen'}
          </h2>
        </div>

        <EditorialStatement
          locale={locale}
          quoteTr="İlk ekranda ne yaptığınızı anlatamazsanız, potansiyel müşterinizi kaybedebilirsiniz."
          quoteEn="If the first screen doesn't make clear what you do, you can lose a potential client before the rest of the page gets a chance."
        />

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {isTr
            ? 'Home sayfasının ilk sahneleri ziyaretçinin zihnindeki üç temel soruyu kademeli ve net bir sırayla yanıtlamak üzere kurgulandı: NE yapıyoruz (What), NEDEN farklıyız (Why) ve NASIL çalışıyoruz (How). Her sahne tek bir güçlü mesaj odağına, yüksek kontrastlı tipografiye ve doğrudan aksiyon butonlarına sahiptir.'
            : 'The initial Home scenes were structured to answer three fundamental visitor questions in progressive clarity: WHAT we do, WHY it matters, and HOW it works. Each scene carries a single strong message focus, high-contrast typography, and immediate access to primary conversion actions.'}
        </p>

        <HeroPair
          primarySlotId="home-scene-02"
          primaryTitleTr="Sahne 02 — Ne Yapıyoruz (WHAT)"
          primaryTitleEn="Scene 02 — What We Do (WHAT)"
          primarySrc="/assets/case-study/studio-v1be/studio-home-scene-02-what-desktop.webp"
          primaryAltTr="Sahne 02: Değer önerisi ve ikili aksiyon butonu"
          primaryAltEn="Scene 02: Value proposition and dual CTAs"
          primaryBrowserUrl="studio.v1be.io"
          secondarySlotId="home-scene-03"
          secondaryTitleTr="Sahne 03 — Nasıl Yapıyoruz (HOW)"
          secondaryTitleEn="Scene 03 — How We Do It (HOW)"
          secondarySrc="/assets/case-study/studio-v1be/studio-home-scene-03-how-desktop.webp"
          secondaryAltTr="Sahne 03: Açık krem zemin ve 4 makro sütun"
          secondaryAltEn="Scene 03: Light cream background and 4 macro pillars"
          secondaryBrowserUrl="studio.v1be.io"
          captionTr="Sahne 02 ve 03: Ne yaptığımızı koyu zemin üzerinde tek güçlü iddiayla açıklayan, ardından krem zemin ile süreci 4 adıma bölen kademeli anlatım."
          captionEn="Scenes 02 and 03: Progressive narrative establishing core value on a focused dark scene, then breaking the flow with a light cream section."
          locale={locale}
        />
      </section>

      {/* ========================================================================= */}
      {/* 03 — SCROLL'U DENEYİMİN PARÇASI YAPMAK                                    */}
      {/* ========================================================================= */}
      <section className="space-y-6" id="desktop-motion">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '03 · ETKİLEŞİM VE ANİMASYON' : '03 · INTERACTION & MOTION'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Scroll\'u deneyimin parçası yapmak' : 'Making scroll part of the experience'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {isTr
              ? 'Masaüstü Home deneyimi, tam ekran sahneler arasında kontrollü bir tempo oluşturan tekerlek tabanlı bir sayfalama sistemiyle (paginated wheel) çalışır. Bu yapı GSAP, ScrollTrigger veya Framer Motion gibi harici kütüphaneler yerine; tarayıcı performansını ve SEO erişilebilirliğini korumak amacıyla sıfır bağımlılıkla, saf TypeScript ve GPU hızlandırmalı CSS geçişleriyle kodlandı.'
              : 'The desktop Home experience uses a custom paginated wheel controller that paces the visitor through full-viewport scenes. Rather than loading heavy external animation suites like GSAP, ScrollTrigger, or Framer Motion, this was engineered in pure vanilla TypeScript with GPU-accelerated CSS transitions to protect runtime performance and zero-JS crawlability.'}
          </p>
        </div>

        {/* Technical highlight block */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-mono text-lime-400 font-bold uppercase">{isTr ? 'Masaüstü Etkileşim Mimarisi' : 'Desktop Interaction Architecture'}</span>
            <span className="font-mono text-slate-400 text-[11px]">src/lib/paginate.ts</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300">
            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800/80">
              <div className="text-white font-semibold">{isTr ? 'Tekerlek Kontrolü' : 'Wheel Controller'}</div>
              <div className="mt-1 text-slate-400 text-[11px]">{isTr ? '6 sahne + Footer tek sürekli dizide yönetilir. 650ms geçiş animasyonu.' : '6 scenes + Footer managed in one continuous sequence. 650ms transition gate.'}</div>
            </div>
            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800/80">
              <div className="text-white font-semibold">{isTr ? 'İç Scroll Yönetimi' : 'Internal Scroll Gate'}</div>
              <div className="mt-1 text-slate-400 text-[11px]">{isTr ? 'FAQ gibi uzun bölümlerde önce kart içi scroll tamamlanır, ardından sonraki sahneye geçilir.' : 'Tall sections like FAQ handle internal scroll first before advancing to next scene.'}</div>
            </div>
            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800/80">
              <div className="text-white font-semibold">{isTr ? 'Sıfır Harici Kütüphane' : 'Zero Framework Bloat'}</div>
              <div className="mt-1 text-slate-400 text-[11px]">{isTr ? 'IntersectionObserver + CSS class toggle. JS kapalıyken tüm içerik normal akışta okunur.' : 'IntersectionObserver + CSS class toggles. 100% readable when JS is disabled.'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — RESPONSIVE: DAVRANIŞ DEĞİŞİMİ                                       */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="responsive">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '04 · DUYARLI TASARIM FELSEFESİ' : '04 · RESPONSIVE PHILOSOPHY'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Responsive: Davranış değişimi' : 'Responsive: A change in behavior'}
          </h2>
        </div>

        <EditorialStatement
          locale={locale}
          quoteTr="Responsive benim için ölçek değil, davranış değişimi."
          quoteEn="Responsive design isn't scale. It's a change in behavior."
        />

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {isTr
            ? 'Studio v1be\'da masaüstü tasarım mobilde sadece piksel olarak küçültülmedi; cihaz bağlamına göre etkileşim modeli kökten değişti. Masaüstündeki tam ekran tekerlekli sahneler ve yapışkan süreç panelleri, mobilde yerini dokunmatik ekrana optimize edilmiş akıcı ve doğal dikey kaydırmaya (native scroll) bıraktı.'
            : 'In Studio v1be, desktop layouts were not merely scaled down for smaller screens; the interaction model was fundamentally adapted to device context. Desktop\'s pinned paginated scenes and sticky process decks gracefully deactivate on mobile, returning to a touch-optimized, natural vertical flow.'}
        </p>

        {/* 4 Responsive Comparison Pairs */}
        <div className="space-y-12">
          {/* Pair 1: Hero */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="font-mono text-lime-400 font-bold">01</span>
              <span>{isTr ? 'Hero: Masaüstü Pacing vs Mobil Doğal Akış & Satır Sarma' : 'Hero: Desktop Pacing vs Mobile Natural Flow & Dynamic Line Wrap'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <ProductFrame
                  src="/assets/case-study/studio-v1be/studio-hero-desktop.webp"
                  alt="Desktop Hero with 4 locked display lines"
                  captionTr="Masaüstü Hero (≥1024px): 4 satıra kilitlenen display tipografi ve tam ekran sayfalama sahnesi."
                  captionEn="Desktop Hero (≥1024px): 4 locked display lines and full-viewport paginated scene."
                  locale={locale}
                />
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[260px]">
                  <ProductFrame
                    src="/assets/case-study/studio-v1be/studio-hero-mobile.webp"
                    alt="Mobile Hero with adaptive inline line wrapping"
                    captionTr="Mobil Hero: Inline satır akışı ve doğal dikey kaydırma."
                    captionEn="Mobile Hero: Adaptive inline wrapping and fluid scroll."
                    locale={locale}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 2: Packages Configurator */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="font-mono text-lime-400 font-bold">02</span>
              <span>{isTr ? 'Packages: Masaüstü Yan Yana Konfigüratör vs Mobil Kademeli Kartlar' : 'Packages: Desktop Split Estimator vs Mobile Stacked Priority Cards'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <ProductFrame
                  src="/assets/case-study/studio-v1be/studio-packages-configurator-desktop.webp"
                  alt="Desktop Packages interactive brief configurator"
                  captionTr="Masaüstü Paketler: Sol sütunda seçenekler, sağ sütunda canlı Project Brief kartı."
                  captionEn="Desktop Packages: Interactive selections on the left, live Project Brief card on the right."
                  locale={locale}
                />
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[260px]">
                  <ProductFrame
                    src="/assets/case-study/studio-v1be/studio-packages-mobile.webp"
                    alt="Mobile Packages starting point cards"
                    captionTr="Mobil Paketler: Tek sütunlu, dokunmatik seçim kartları."
                    captionEn="Mobile Packages: Single-column, touch-optimized cards."
                    locale={locale}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 3: Process Stages */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="font-mono text-lime-400 font-bold">03</span>
              <span>{isTr ? 'Process: Masaüstü Yapışkan Aşama Paneli vs Mobil Dikey Akış' : 'Process: Desktop Sticky Stage Deck vs Mobile Vertical Narrative'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <ProductFrame
                  src="/assets/case-study/studio-v1be/studio-process-stage-build-desktop.webp"
                  alt="Desktop Process stage with inspectable build terminal"
                  captionTr="Masaüstü Süreç: Tek bir yapışkan panelde tekerlek kontrollü aşama geçişi ve kod terminali."
                  captionEn="Desktop Process: Wheel-controlled sticky stage deck with inspectable code terminal."
                  locale={locale}
                />
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[260px]">
                  <ProductFrame
                    src="/assets/case-study/studio-v1be/studio-process-mobile.webp"
                    alt="Mobile Process stage with top tab navigation"
                    captionTr="Mobil Süreç: Üst sekme navigasyonu ve bağımsız dikey aşama blokları."
                    captionEn="Mobile Process: Top tab navigation and standalone vertical stage blocks."
                    locale={locale}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 4: Work & Labs */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <span className="font-mono text-lime-400 font-bold">04</span>
              <span>{isTr ? 'Work & Labs: Masaüstü Kanıt Grid\'i vs Mobil Odaklı Case Kartı' : 'Work & Labs: Desktop Proof Grid vs Mobile Focused Case Card'}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8">
                <ProductFrame
                  src="/assets/case-study/studio-v1be/studio-work-case-02-labs-desktop.webp"
                  alt="Desktop Work Hub with Case 002 and Lab 001 card"
                  captionTr="Masaüstü Work: Case 002 ve LAB 001 deneyinin terminal detaylarıyla sergilendiği geniş grid."
                  captionEn="Desktop Work: Broad grid showcasing Case 002 and LAB 001 experiment with terminal previews."
                  locale={locale}
                />
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[260px]">
                  <ProductFrame
                    src="/assets/case-study/studio-v1be/studio-work-mobile.webp"
                    alt="Mobile Work Case 002 card"
                    captionTr="Mobil Work: Tam genişlikli, doğrudan aksiyon odaklı temiz vaka kartı."
                    captionEn="Mobile Work: Full-width, clean case card with direct CTA."
                    locale={locale}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — KARAR ANI TEK BİR YERDE OLUŞMUYOR                                    */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="conversion-architecture">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '05 · DÖNÜŞÜM MİMARİSİ' : '05 · CONVERSION ARCHITECTURE'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Karar anı tek bir yerde oluşmuyor' : 'Decision moments don\'t happen in just one place'}
          </h2>
        </div>

        <EditorialStatement
          locale={locale}
          quoteTr="Karar anı tek bir yerde oluşmuyor."
          quoteEn="Decision moments don't happen in just one place."
        />

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {isTr
            ? 'Ana dönüşüm hedefi "Ücretsiz Audit Al" (Get a free audit) olarak belirlendi. Ancak kullanıcıyı sadece sayfa sonundaki bir forma zorlamak yerine; Header, Hero, Paketler, Süreç ve Vaka Çalışmaları gibi her karar anında CTA erişilebilir kılındı. Packages sayfasında statik fiyat listesi yerine kullanıcının ihtiyacına göre şekillenen interaktif bir konfigüratör (ServiceNeedsConfigurator) tasarlandı.'
            : 'The primary conversion path is "Get a free audit". Instead of confining the call-to-action to a footer form, conversion touchpoints intentionally reappear at natural decision moments across Header, Hero, Packages, Process, and Work. On the Packages page, an interactive configurator translates client needs directly into a pre-filled audit scope.'}
        </p>

        <FeatureVisual
          slotId="studio-packages"
          titleTr="Paketler ve İnteraktif Brief Konfigüratörü"
          titleEn="Packages & Interactive Brief Configurator"
          src="/assets/case-study/studio-v1be/studio-packages-configurator-desktop.webp"
          altTr="Packages sayfası: İnteraktif brief oluşturucu"
          altEn="Packages page: Interactive brief configurator"
          captionTr="Packages sayfası: Sıfırdan başlama veya mevcut siteyi onarma seçeneklerine göre canlı kapsam ve maliyet hesaplayan interaktif brief oluşturucu."
          captionEn="Packages page: Interactive brief configurator dynamically calculating scope and starting estimates based on user needs."
          locale={locale}
        />
      </section>

      {/* ========================================================================= */}
      {/* 06 — SÜRECİ GÖRÜNÜR HALE GETİRMEK                                         */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="process-visualization">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '06 · SÜREÇ İLETİŞİMİ' : '06 · PROCESS VISUALIZATION'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Süreci yazmak yerine görünür hale getirmek' : 'Making the process visible instead of only writing about it'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {isTr
              ? 'Müşteriyle çalışma süreci uzun metin paragrafları yerine; incelenebilir canlı modeller, şemalar ve teslimat terminalleriyle görselleştirildi. 01 Teşhis (Diagnose), 02 Tasarım (Design), 03 Geliştirme (Build) ve 04 Doğrulama & Ölçüm (Validate & Measure) adımları şeffaf teslimat kriterleriyle desteklendi.'
              : 'The client engagement process avoids becoming an exhaustive wall of text. Instead, it utilizes inspectable engagement models, structural diagrams, and deliverable code terminals across four distinct stages: 01 Diagnose, 02 Design, 03 Build, and 04 Validate & Measure.'}
          </p>
        </div>

        <HeroPair
          primarySlotId="process-model"
          primaryTitleTr="Canlı İş Modeli Şeması"
          primaryTitleEn="Live Engagement Model"
          primarySrc="/assets/case-study/studio-v1be/studio-process-engagement-model-desktop.webp"
          primaryAltTr="Process sayfası iş modeli diyagramı"
          primaryAltEn="Process page engagement model diagram"
          primaryBrowserUrl="studio.v1be.io/process"
          secondarySlotId="process-build"
          secondaryTitleTr="Aşama 03 — Build Terminali"
          secondaryTitleEn="Stage 03 — Build Terminal"
          secondarySrc="/assets/case-study/studio-v1be/studio-process-stage-build-desktop.webp"
          secondaryAltTr="Process Aşama 03: Kod ve dosya yapısı terminali"
          secondaryAltEn="Process Stage 03: Code and file structure terminal"
          secondaryBrowserUrl="studio.v1be.io/process"
          captionTr="Process sayfası: Başlangıç noktalarının tek bir süreçte buluştuğu model ve somut geliştirici teslimatını kanıtlayan terminal yapısı."
          captionEn="Process page: Engagement model diagram and inspectable terminal proving authentic developer deliverables."
          locale={locale}
        />
      </section>

      {/* ========================================================================= */}
      {/* 07 — WORK İÇİN BİR İÇERİK SİSTEMİ KURMAK                                  */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="work-architecture">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '07 · İÇERİK MİMARİSİ' : '07 · CONTENT ARCHITECTURE'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Work için bir içerik sistemi kurmak' : 'Building a content system for Work'}
          </h2>
        </div>

        <EditorialStatement
          locale={locale}
          quoteTr="Yaptığımız işi göstermek kadar, neleri websitenize uyguladığımızı da anlatmak istedim."
          quoteEn="I wanted to show not only the work we deliver, but also what we actually apply to the websites we build."
        />

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {isTr
            ? 'Work bölümü sıradan bir görsel portfolyo galerisi olarak değil, genişleyebilir bir içerik sistemi olarak kurgulandı. Sistem iki temel yapıyı net bir şekilde ayrıştırır: Gerçekleştirilen projeleri anlatan Vaka Çalışmaları (Cases — Case 001 v1be.io, Case 002 studio.v1be.io) ve araştırma/doğrulama testlerini belgeleyen Laboratuvar Deneyleri (Labs — LAB 001 AI Crawlability).'
            : 'The Work hub was structured not as a flat image gallery, but as a scalable content architecture. It clearly delineates between Production Cases (Case 001 v1be.io, Case 002 studio.v1be.io) demonstrating shipped systems, and Laboratory Experiments (Labs — LAB 001 AI Crawlability) documenting empirical technical validation.'}
        </p>

        <HeroPair
          primarySlotId="work-case-01"
          primaryTitleTr="Case 01 — v1be.io Platformu"
          primaryTitleEn="Case 01 — v1be.io Platform"
          primarySrc="/assets/case-study/studio-v1be/studio-work-case-01-v1be-desktop.webp"
          primaryAltTr="Case 01: v1be.io kanıt kartı"
          primaryAltEn="Case 01: v1be.io proof card"
          primaryBrowserUrl="v1be.io"
          secondarySlotId="work-case-02"
          secondaryTitleTr="Case 02 & LAB 001"
          secondaryTitleEn="Case 02 & LAB 001"
          secondarySrc="/assets/case-study/studio-v1be/studio-work-case-02-labs-desktop.webp"
          secondaryAltTr="Case 02 ve LAB 001 kartları"
          secondaryAltEn="Case 02 and LAB 001 cards"
          secondaryBrowserUrl="studio.v1be.io/work"
          captionTr="Work Hub: Canlı platform vaka çalışmaları ve deneysel test laboratuvarlarının (LAB 001) hiyerarşik yapısı."
          captionEn="Work Hub: Hierarchical architecture separating applied production cases from empirical validation labs (LAB 001)."
          locale={locale}
        />
      </section>

      {/* ========================================================================= */}
      {/* 08 — TASARIM DOSYADA KALMADI                                              */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="implementation">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '08 · GELİŞTİRME VE TESLİMAT' : '08 · FRONT-END & DELIVERY'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Tasarım dosyada kalmadı' : 'The design didn\'t stop in the design file'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {isTr
              ? 'Tasarım kararlarının tamamı bizzat front-end koduna dönüştürülerek production\'a taşındı. Web sitesi hiçbir istemci framework adası (zero React/Vue islands) barındırmayan, 100% statik pre-rendered Astro mimarisiyle sıfırdan inşa edildi.'
              : 'Every design decision was directly translated into production code. The website was engineered from scratch on a 100% static pre-rendered Astro architecture with zero client-side UI framework bloat.'}
          </p>
        </div>

        {/* Engineering Architecture Breakdown Card */}
        <div className="p-5 sm:p-6 bg-slate-900/90 rounded-xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="font-mono text-xs text-lime-400 font-bold uppercase">{isTr ? 'Üretim ve Front-End Mimarisi' : 'Production & Front-End Architecture'}</div>
            <div className="font-mono text-[11px] text-slate-400">Astro v7.0.6 · Tailwind v4.3.2 · TS Strict</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-1">
              <div className="text-lime-400 font-mono font-bold">01 · Astro SSG</div>
              <div className="text-slate-300">{isTr ? '100% statik pre-rendered HTML çıktısı (~42 KB). İstemci framework yükü yok.' : '100% static pre-rendered HTML (~42 KB). Zero client framework runtime overhead.'}</div>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-1">
              <div className="text-lime-400 font-mono font-bold">02 · Three.js Mascot</div>
              <div className="text-slate-300">{isTr ? 'GLB indirmeyen tamamen prosedürel WebGL maskot; TBT\'yi korumak için idle callback ile yüklenir.' : 'Fully procedural WebGL mascot without GLB network downloads; idle-loaded to preserve TBT.'}</div>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-1">
              <div className="text-lime-400 font-mono font-bold">03 · İki Dilli Rota</div>
              <div className="text-slate-300">{isTr ? 'Root (EN) ve /tr/ (TR) için tam içerik ve şema paritesi; karşılıklı hreflang etiketleri.' : 'Full content and schema parity for root (EN) and /tr/ (TR) with reciprocal hreflangs.'}</div>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-1">
              <div className="text-lime-400 font-mono font-bold">04 · cPanel Dağıtımı</div>
              <div className="text-slate-300">{isTr ? 'Otomatik OG görseli üretimi, dist zip derlemesi ve cPanel File Manager dağıtım scripti.' : 'Automated build-time OG generation, dist zip packaging, and cPanel static delivery script.'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 — GÖRÜNMENİN ÖTESİNDE ANLAŞILMAK                                       */}
      {/* ========================================================================= */}
      <section className="space-y-8" id="seo-geo">
        <div className="space-y-2">
          <div className="font-mono text-xs text-lime-400 uppercase tracking-widest font-semibold">
            {isTr ? '09 · SEO & GEO ALTYAPISI' : '09 · SEO & GEO FOUNDATIONS'}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isTr ? 'Görünmenin ötesinde anlaşılmak' : 'Being understood beyond being seen'}
          </h2>
        </div>

        <EditorialStatement
          locale={locale}
          quoteTr="Crawl edilmek, anlaşılmak demek değil. (Maalesef.)"
          quoteEn="Being crawled doesn't mean being understood. Unfortunately."
        />

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {isTr
            ? 'Studio v1be, arama motorlarının yanı sıra yapay zeka arama sistemlerinin (ChatGPT, Gemini, Perplexity) siteyi rahatça tarayabilmesi ve içeriği doğru anlamlandırabilmesi için tasarlandı. Bu amaçla dinamik llms.txt, robots.txt AI bot direktifleri, bağlantılı Organization JSON-LD şemaları ve JavaScript kapalıyken bile eksiksiz okunan ham HTML mimarisi kuruldu. LAB 001 deneyi ile 10 farklı bot user-agent string\'i üzerinden request-level erişim doğrulaması yapıldı.'
            : 'Studio v1be was engineered to be accessed and clearly understood by both traditional search engines and AI answer engines (ChatGPT, Gemini, Perplexity). Dynamic llms.txt endpoints, AI-permissive robots.txt directives, linked Organization JSON-LD schemas, and JS-off raw HTML payloads were established from day one. In LAB 001, request-level accessibility was empirically validated across 10 crawler user-agent strings.'}
        </p>

        {/* Factual Progression Matrix */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="font-mono text-xs text-lime-400 uppercase font-bold tracking-wider">
            {isTr ? 'Doğrulanmış GEO & Anlaşılabilirlik Aşamaları' : 'Validated GEO & Readability Framework'}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-lg">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono">
                <span>✓</span>
                <span>01 · ERİŞİM (ACCESS)</span>
              </div>
              <div className="text-slate-300 mt-1 text-[11px]">
                {isTr ? '10 UA string\'i ile HTTP 200 ve ~42 KB ham HTML doğrulaması (LAB 001).' : 'HTTP 200 and ~42 KB raw HTML validated across 10 UA strings (LAB 001).'}
              </div>
              <span className="inline-block mt-2 px-1.5 py-0.5 bg-emerald-900/60 text-emerald-300 text-[10px] rounded font-mono font-semibold">
                {isTr ? 'DOĞRULANDI' : 'VALIDATED'}
              </span>
            </div>

            <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-lg">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono">
                <span>✓</span>
                <span>02 · ANLAMA (UNDERSTANDING)</span>
              </div>
              <div className="text-slate-300 mt-1 text-[11px]">
                {isTr ? 'JSON-LD şema grafiği, llms.txt, parentOrganization bağlantısı.' : 'JSON-LD schema graph, llms.txt, parentOrganization linkage.'}
              </div>
              <span className="inline-block mt-2 px-1.5 py-0.5 bg-emerald-900/60 text-emerald-300 text-[10px] rounded font-mono font-semibold">
                {isTr ? 'KURULDU' : 'ESTABLISHED'}
              </span>
            </div>

            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg opacity-85">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold font-mono">
                <span>⚡</span>
                <span>03 · GETİRME (RETRIEVAL)</span>
              </div>
              <div className="text-slate-300 mt-1 text-[11px]">
                {isTr ? 'Doğal dil odaklı içerik yapısı hazır; canlı arama sorguları ölçümleniyor.' : 'Natural-language content structure ready; live query retrieval under active measurement.'}
              </div>
              <span className="inline-block mt-2 px-1.5 py-0.5 bg-amber-950/60 text-amber-300 text-[10px] rounded font-mono font-semibold">
                {isTr ? 'KISMİ / TEST AŞAMASINDA' : 'PARTIAL / IN TESTING'}
              </span>
            </div>

            <div className="p-3 bg-slate-950/40 border border-slate-800/60 rounded-lg opacity-60">
              <div className="flex items-center gap-1.5 text-slate-400 font-bold font-mono">
                <span>○</span>
                <span>04 · KAYNAK GÖSTERME</span>
              </div>
              <div className="text-slate-400 mt-1 text-[11px]">
                {isTr ? 'Teknik citability temeli hazır; henüz harici log ölçümü yapılmadı.' : 'Technical citability baseline ready; external citation logs not yet measured.'}
              </div>
              <span className="inline-block mt-2 px-1.5 py-0.5 bg-slate-800/80 text-slate-400 text-[10px] rounded font-mono font-semibold">
                {isTr ? 'HENÜZ ÖLÇÜLMEDİ' : 'NOT MEASURED'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10 — SONUÇ VE ÇIKARIMLAR (REFLECTION)                                     */}
      {/* ========================================================================= */}
      <footer className="pt-6 border-t border-slate-800" id="reflection">
        <ReflectionBlock
          locale={locale}
          titleTr="Tasarımcı ve Geliştirici Olarak Temel Çıkarımlarım"
          titleEn="Key Takeaways as Designer & Builder"
          takeawaysTr={[
            'Görsel tasarım ve ön yüz geliştirme birbirinden bağımsız adımlar değildir; iyi bir tasarımcı, tarayıcı bağlamındaki performans ve etkileşim detaylarını da inşa edebilmelidir.',
            'Responsive tasarım yalnızca CSS breakpoint\'leriyle ekranı sıkıştırmak değil; masaüstündeki yapışkan ve zengin etkileşimi mobilde doğal, dokunmatik dikey bir deneyime dönüştürmektir.',
            'Modern web projelerinde SEO ve GEO, sonradan eklenen bir eklenti değil; sıfırdan semantik HTML, şema grafikleri ve makine tarafından okunabilir içerik mimarisiyle inşa edilen bir temeldir.',
          ]}
          takeawaysEn={[
            'Visual design and front-end engineering are not disconnected phases; a great designer builds the performance and interaction nuances directly in the browser.',
            'Responsive design is never just shrinking layouts into CSS breakpoints; it means reimagining desktop\'s spatial and rich interactions into an intuitive, touch-first mobile narrative.',
            'In modern web architecture, SEO and GEO are not afterthoughts; they are day-one foundations engineered through semantic HTML, linked schema graphs, and machine-readable content systems.',
          ]}
          lessonTr="Studio v1be mimarisi, yeni vaka çalışmaları ve planlanan GEO laboratuvar deneyleri (LAB 002 GEO Readiness) ile yaşayan ve genişleyen bir servis platformu olarak çalışmaya devam ediyor."
          lessonEn="The Studio v1be architecture continues to scale as an active service platform, evolving with upcoming client case studies and empirical GEO experiments (LAB 002 GEO Readiness)."
        />
      </footer>
    </article>
  );
};
