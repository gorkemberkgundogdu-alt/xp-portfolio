import React, { useState } from 'react';
import { HeroPair } from './primitives/HeroPair';
import { FeatureVisual } from './primitives/FeatureVisual';
import { AnnotatedVisual } from './primitives/AnnotatedVisual';
import { DetailCrop } from './primitives/DetailCrop';
import { FloatingPanelComposition } from './primitives/FloatingPanelComposition';
import { StateStrip } from './primitives/StateStrip';
import { SideBySideDecision } from './primitives/SideBySideDecision';
import { FlowStrip } from './primitives/FlowStrip';
import { ReflectionBlock } from './primitives/ReflectionBlock';
import { CaseAccordionSection } from './primitives/CaseAccordionSection';
import { EditorialStatement } from './primitives/EditorialStatement';
import { ProductFrame } from './primitives/ProductFrame';
import { ArtifactFrame } from './primitives/ArtifactFrame';

export interface OperaterCaseStudyProps {
  locale?: 'tr' | 'en';
}

export const OperaterCaseStudy: React.FC<OperaterCaseStudyProps> = ({ locale = 'tr' }) => {
  // Multi-open state: 01 Onboarding open by default, 02 & 03 closed by default
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['onboarding']));

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  return (
    <article className="w-full max-w-5xl mx-auto space-y-12 select-text font-sans text-slate-200">
      {/* ========================================================================= */}
      {/* PROJECT COVER / HERO                                                      */}
      {/* ========================================================================= */}
      <header className="space-y-8 pb-8 border-b border-slate-800">
        {/* Top Badges & Live Platform Link */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-950/70 border border-purple-800/70 rounded-md text-purple-300 text-xs font-semibold">
              <img
                src="/assets/operater-logo.webp"
                alt="Operater.io"
                width={14}
                height={14}
                className="w-3.5 h-3.5 rounded-xs shrink-0 object-contain"
              />
              <span>Operater.io</span>
            </span>
            <span className="px-2.5 py-1 bg-slate-800/90 border border-slate-700/80 rounded-md text-slate-300 text-xs font-medium">
              {locale === 'tr' ? 'B2B SaaS / Yapay Zeka Operasyon Platformu' : 'B2B SaaS / AI Operations Platform'}
            </span>
            <span className="px-2.5 py-1 bg-emerald-950/50 border border-emerald-800/60 rounded-md text-emerald-300 text-xs font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{locale === 'tr' ? 'Canlıda / Üretimde' : 'Live in Production'}</span>
            </span>
          </div>

          <a
            href="https://operater.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-xs font-bold transition-all shadow-md hover:shadow-purple-600/30 no-underline"
          >
            <span>{locale === 'tr' ? 'Canlı Ürünü Ziyaret Et' : 'Visit Live Platform'}</span>
            <span className="text-purple-200">↗</span>
          </a>
        </div>

        {/* Title & Editorial Lead */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold text-slate-100 tracking-tight leading-[1.15]">
            {locale === 'tr'
              ? 'Karmaşık Otonom Yapay Zeka Ajanlarını Güvenilir ve Kontrol Edilebilir B2B SaaS Deneyimine Dönüştürmek'
              : 'Transforming Complex Autonomous AI Agents into a Trustworthy & Controllable B2B SaaS Experience'}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans leading-relaxed">
            {locale === 'tr'
              ? 'Operater.io için 0’dan 1’e tasarlanan; onboarding akışından otonomi ayarlarına, insan denetimli (Human-in-the-Loop) onay panellerinden modüler tasarım sistemine kadar uzanan uçtan uca ürün tasarımı ve kullanıcı deneyimi vaka çalışması.'
              : 'End-to-end product design and UX case study for Operater.io, designed from 0 to 1: spanning seamless onboarding, graduated autonomy settings, human-in-the-loop review panels, and a comprehensive design system.'}
          </p>
        </div>

        {/* Quiet Hairline Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-2 border-y border-slate-800/80 text-xs">
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              {locale === 'tr' ? 'Rol' : 'Role'}
            </div>
            <div className="font-semibold text-slate-200 mt-1 font-display">
              {locale === 'tr' ? 'UI/UX Designer' : 'UI/UX Designer'}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              {locale === 'tr' ? 'Kapsam' : 'Scope'}
            </div>
            <div className="font-semibold text-slate-200 mt-1 font-display">
              {locale === 'tr' ? '0 → 1 Ürün & Tasarım Sistemi' : '0 → 1 Product & Design System'}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              {locale === 'tr' ? 'Disiplinler' : 'Disciplines'}
            </div>
            <div className="font-semibold text-slate-200 mt-1 font-display">
              Web & SaaS, Design Systems, AI UX
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              {locale === 'tr' ? 'Durum' : 'Status'}
            </div>
            <div className="font-semibold text-emerald-400 mt-1 font-display">
              {locale === 'tr' ? 'Aktif B2B Platformu' : 'Active B2B Platform'}
            </div>
          </div>
        </div>

        {/* Project Cover Visual: Landing + Signup Overlap */}
        <HeroPair
          primarySlotId="HERO_PRIMARY_SCREENSHOT"
          primaryTitleTr="Operater.io Ana Landing Sayfası"
          primaryTitleEn="Operater.io Main Landing Page"
          primarySrc="/assets/case-study/operater/operater-landing.webp"
          primaryAltTr="Operater.io Landing Sayfası - Scale your startup without scaling your headcount"
          primaryAltEn="Operater.io Landing Page - Scale your startup without scaling your headcount"
          secondarySlotId="HERO_SECONDARY_SCREENSHOT"
          secondaryTitleTr="Operater Hızlı Kayıt Akışı"
          secondaryTitleEn="Operater Frictionless Signup"
          secondarySrc="/assets/case-study/operater/operater-create-account.webp"
          secondaryAltTr="Operater.io Hesap Oluşturma Ekranı"
          secondaryAltEn="Operater.io Create Account Screen"
          captionTr="Proje Kapağı: Ürün konumlandırmasını hesap açılışına bağlayan açılış kompozisyonu."
          captionEn="Project Cover: The opening visual composition connecting product positioning to frictionless signup."
          locale={locale}
        />
      </header>

      {/* ========================================================================= */}
      {/* 01 — ONBOARDING SECTION                                                   */}
      {/* ========================================================================= */}
      <CaseAccordionSection
        id="onboarding"
        numberPrefix="01"
        titleTr="Onboarding: İlk Karşılaşmadan Değer Üretimine"
        titleEn="Onboarding: From First Touch to Tangible Value"
        subtitleTr="Karmaşık teknik entegrasyonları kullanıcı için zahmetsiz, şeffaf ve güven veren bir kurulum yolculuğuna dönüştürmek."
        subtitleEn="Turning complex technical integrations into an effortless, transparent, and confidence-building setup journey."
        isOpen={openSections.has('onboarding')}
        onToggle={() => toggleSection('onboarding')}
        locale={locale}
      >
        {/* Editorial Statement 1: Trust Before Autonomy */}
        <EditorialStatement
          quoteTr="Otonomiden önce güven gelir."
          quoteEn="Before autonomy comes trust."
          subtextTr="Otonom yapay zeka ajanları, şirket verilerine ve iş araçlarına doğrudan erişim gerektirir. Kullanıcının kontrolü kaybetme korkusunu aşmanın tek yolu; açılış deneyimini sürtünmesiz, şeffaf ve her aşamada net kılmaktır."
          subtextEn="Autonomous AI agents request direct access to enterprise tools and proprietary context. Overcoming initial security friction requires an onboarding experience engineered around transparency, clarity, and zero ambiguity."
          locale={locale}
        />

        {/* ------------------------------------------------------------------------- */}
        {/* 01A — EMAIL VERIFICATION (Transitional Artifact)                           */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Column: Narrative */}
            <div className="md:col-span-6 space-y-3">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                {locale === 'tr' ? 'Adım 01 · Geçiş Katmanı' : 'Step 01 · Transitional Step'}
              </span>
              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-100">
                {locale === 'tr' ? 'Hesap Açılışından Ürün Kurulumuna Kesintisiz Geçiş' : 'A Frictionless Bridge into Product Setup'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                {locale === 'tr'
                  ? 'Kayıt işlemi tamamlandıktan hemen sonra kullanıcıyı karmaşık bir form yığını yerine 6 haneli odaklanmış doğrulama ekranı karşılar. Boş alanlardan arındırılmış bu ara durak, kullanıcıyı bilişsel olarak bir sonraki şirket kurulumuna hazırlar.'
                  : 'Immediately after account creation, users encounter a focused 6-digit verification modal rather than cognitive clutter. Stripped of excess canvas, it acts as a lightweight security bridge directly into workspace configuration.'}
              </p>
            </div>

            {/* Right Column: Cropped Verification Artifact */}
            <div className="md:col-span-6">
              <ArtifactFrame
                src="/assets/case-study/operater/crop-email-verify.webp"
                alt="Operater E-posta Doğrulama Arayüzü"
                titleTr="6 Haneli Güvenlik Doğrulaması"
                titleEn="6-Digit Security Verification"
                badgeTr="Geçiş Arayüzü"
                badgeEn="Transitional Artifact"
                captionTr="Gereksiz boşluklardan arındırılmış, sürtünmesiz doğrulama modalı."
                captionEn="Clean, cropped verification modal maintaining momentum into setup."
                maxWidth="max-w-xs"
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 01B — COMPANY CONTEXT (User Input -> Agent Context)                       */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <EditorialStatement
            quoteTr="Aksiyondan önce bağlam."
            quoteEn="Context before action."
            subtextTr="Arayüz sadece şirket bilgisi toplamaz; girilen bilginin yapay zeka ajanlarının kavrayışını ve çalışma kalitesini nasıl şekillendireceğini anlık olarak kullanıcıya kanıtlar."
            subtextEn="The interface does not merely collect static domain fields; it actively proves in real time how supplied context empowers autonomous agent understanding."
            locale={locale}
          />

          {/* Setup Journey Flow Strip */}
          <FlowStrip
            titleTr="Operater.io Kurulum Adımları"
            titleEn="Operater.io Setup Journey"
            steps={[
              { id: '1', stepNumber: 1, labelTr: 'Hesap', labelEn: 'Account', sublabelTr: 'Google / Mail', sublabelEn: 'Google / Mail' },
              { id: '2', stepNumber: 2, labelTr: 'Doğrulama', labelEn: 'Verify', sublabelTr: 'Güvenlik', sublabelEn: 'Security' },
              { id: '3', stepNumber: 3, labelTr: 'Şirket', labelEn: 'Company', sublabelTr: 'Bağlam', sublabelEn: 'Context' },
              { id: '4', stepNumber: 4, labelTr: 'Ajanlar', labelEn: 'Agents', sublabelTr: 'Seçim', sublabelEn: 'Selection' },
              { id: '5', stepNumber: 5, labelTr: 'Araçlar', labelEn: 'Tools', sublabelTr: 'Entegrasyon', sublabelEn: 'Integration' },
              { id: '6', stepNumber: 6, labelTr: 'Bağlandı', labelEn: 'Connected', sublabelTr: 'Canlı', sublabelEn: 'Live' },
            ]}
            locale={locale}
          />

          {/* Major Full-Width Screen: Company Setup */}
          <ProductFrame
            src="/assets/case-study/operater/operater-company-setup.webp"
            alt="Operater Şirket Tanımlama ve Canlı Önizleme Ekranı"
            captionTr="Sol tarafta şirket bilgileri tanımlanırken, sağ tarafta 'YOUR AGENTS WILL SEE' alanında ajanın veriyi nasıl yorumlayacağı anlık simüle edilir."
            captionEn="While defining company domain inputs on the left, the 'YOUR AGENTS WILL SEE' container previews live agent reasoning."
            showMinimalBar={true}
            locale={locale}
          />

          {/* Secondary Detail View: Sharp Context Crop */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
            <div className="md:col-span-7">
              <ArtifactFrame
                src="/assets/case-study/operater/crop-company-context.webp"
                alt="Canlı Ajan Bağlam Simülasyonu Kırpması"
                titleTr="Canlı Bağlam Simülasyonu (YOUR AGENTS WILL SEE)"
                titleEn="Live Context Simulation (YOUR AGENTS WILL SEE)"
                badgeTr="Mikro-Etkileşim Kanıtı"
                badgeEn="Micro-Interaction Evidence"
                maxWidth="max-w-lg"
                locale={locale}
              />
            </div>
            <div className="md:col-span-5 space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
              <h5 className="font-display font-bold text-slate-100 text-sm sm:text-base">
                {locale === 'tr' ? 'Kullanıcı Girdisi → Ajan Bağlamı' : 'User Input → Agent Context'}
              </h5>
              <p className="text-slate-400 leading-relaxed text-xs">
                {locale === 'tr'
                  ? 'Kullanıcı form doldurmayı sıkıcı bir formalite olarak değil, kendi yapay zeka çalışanını eğittiği interaktif bir hazırlık süreci olarak deneyimler.'
                  : 'Transforms static form completion into an engaging training loop where users observe their input shaping autonomous behavior in real time.'}
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 01C — ENABLE AGENTS (The Inflection Moment)                                */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              {locale === 'tr' ? 'Adım 02 · Kırılma Anı' : 'Step 02 · The Core Mental Model'}
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'İlk Ajanları Etkinleştirmek (Enable Agents)' : 'Enabling the First AI Agents'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Bu ekran sıradan bir özellik aç/kapa listesi değildir. Kullanıcının Operater’ın temel çalışma felsefesini (iş akışlarını üstlenen, araçları kullanan ve otonom çalışan ajanlar) ilk kez kavradığı ve operasyon modelini kurduğu ana dönüm noktasıdır.'
                : 'Far from a generic feature toggle list, this is the central inflection point where users grasp Operater’s core philosophy: autonomous AI teammates that own dedicated workflows, invoke tools, and operate continuously.'}
            </p>
          </div>

          {/* High-Resolution Enable Agents Screen */}
          <ProductFrame
            src="/assets/case-study/operater/operater-enable-agents-hd.webp"
            alt="Operater Ajan Kataloğu ve Seçim Arayüzü (HD)"
            captionTr="14 hazır ajan profili, kategori filtreleri ve ajan yetki hiyerarşisini gösteren yüksek çözünürlüklü görünüm."
            captionEn="High-resolution view displaying pre-built agent profiles, category filters, and workflow scopes."
            showMinimalBar={true}
            locale={locale}
          />

          {/* Refined Minimalist Annotation Rail */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-[#0F172A]/80 border border-slate-800 rounded-lg space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h5 className="font-display font-bold text-xs sm:text-sm text-slate-200">
                  {locale === 'tr' ? 'Ajanın Görevi (Mission)' : 'Agent Mission & Purpose'}
                </h5>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Her ajanın uzmanlaştığı operasyonel iş akışı (Lead Gen, Outreach, PR, CRM) açık ve net tanımlanır.'
                  : 'Explicit mission statement defining the exact operational workflow owned by the agent.'}
              </p>
            </div>

            <div className="p-4 bg-[#0F172A]/80 border border-slate-800 rounded-lg space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h5 className="font-display font-bold text-xs sm:text-sm text-slate-200">
                  {locale === 'tr' ? 'Gerekli Araçlar (Required Tools)' : 'Required Integrations'}
                </h5>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Ajanın çalışması için ihtiyaç duyduğu Slack, Gmail, HubSpot gibi araçlar kart üzerinde peşinen gösterilir.'
                  : 'Required tool scopes (Slack, Gmail, HubSpot) are surfaced transparently upfront on each card.'}
              </p>
            </div>

            <div className="p-4 bg-[#0F172A]/80 border border-slate-800 rounded-lg space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h5 className="font-display font-bold text-xs sm:text-sm text-slate-200">
                  {locale === 'tr' ? 'Aktivasyon Durumu (State)' : 'Enable & Readiness State'}
                </h5>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Kullanıcı tek tıkla ajanı çalışma alanına dahil eder ve arka plan hazırlık sürecini başlatır.'
                  : 'Single-click enable action immediately provisioning the agent for workspace execution.'}
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 01D — CONNECT TOOLS (Connect Once, Reuse Everywhere)                      */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <EditorialStatement
            quoteTr="Bir kez bağla. Her yerde kullan."
            quoteEn="Connect once. Reuse everywhere."
            subtextTr="Çalışma alanı kapsamlı (workspace-scoped) bağlantı modeli sayesinde bir araç (örneğin HubSpot veya Slack) bir kez bağlandığında, o araca ihtiyaç duyan tüm yetkili ajanlar aynı güvenli kimlik bilgisini yeniden izin istemeden kullanır."
            subtextEn="Under the workspace-scoped connection model, authenticating an enterprise tool once allows all authorized agents to leverage that credential automatically. One connection powers multiple autonomous agents."
            locale={locale}
          />

          {/* Asymmetric Composition: Cropped Connect Tools + Overlapping HubSpot Permission Panel */}
          <div className="relative w-full my-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Main Connect Tools Canvas */}
              <div className="lg:col-span-8">
                <ProductFrame
                  src="/assets/case-study/operater/crop-connect-tools-header.webp"
                  alt="Operater Veri Kaynakları ve Araç Entegrasyonları Arayüzü"
                  captionTr="Kategori bazlı kurumsal araç bağlantı masası."
                  captionEn="Category-organized enterprise integration workspace."
                  showMinimalBar={true}
                  locale={locale}
                />
              </div>

              {/* Overlapping / Floating Permission Panel */}
              <div className="lg:col-span-4 lg:-ml-8 z-10">
                <ArtifactFrame
                  src="/assets/case-study/operater/crop-hubspot-connect-modal.webp"
                  alt="HubSpot Entegrasyon İzinleri Kartı"
                  titleTr="HubSpot Çalışma Alanı Kapsamı"
                  titleEn="HubSpot Scope Breakdown"
                  badgeTr="İzin Şeffaflığı"
                  badgeEn="Scope Transparency"
                  maxWidth="max-w-sm"
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 01E — AUTHORIZATION (Permission Transparency)                             */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              {locale === 'tr' ? 'Adım 03 · İzin Şeffaflığı' : 'Step 03 · Permission Transparency'}
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Kurumsal Güvenlik: Slack ve HubSpot Yetkilendirme Modalları' : 'Enterprise Trust: Slack & HubSpot Authorization Modals'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Slack entegrasyonunda özel mesajların (DM) asla okunmayacağının açıkça belirtilmesi ve HubSpot izinlerinin şeffaf dökümü, kurumsal IT güvenlik onaylarını hızlandıran temel UX kararları oldu.'
                : 'Surfacing explicit privacy guarantees (such as "DMs are never accessed" in Slack) and granular CRM scopes directly eliminated enterprise security friction during authentication.'}
            </p>
          </div>

          {/* Staggered Paired Modals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start pt-2">
            <div className="sm:mt-4">
              <ArtifactFrame
                src="/assets/case-study/operater/crop-hubspot-auth-modal.webp"
                alt="HubSpot OAuth Giriş ve Erişim Onayı Modalı"
                titleTr="HubSpot OAuth Giriş Modalı"
                titleEn="HubSpot OAuth Authorization"
                badgeTr="OAuth 2.0"
                badgeEn="OAuth 2.0"
                captionTr="Okuma ve yazma izinlerinin net dökümü."
                captionEn="Explicit breakdown of read and deal-creation scopes."
                locale={locale}
              />
            </div>
            <div>
              <ArtifactFrame
                src="/assets/case-study/operater/crop-slack-auth-modal.webp"
                alt="Slack İzin Modalı - DMs are never accessed"
                titleTr="Slack İzin Modalı"
                titleEn="Slack Permission Scope"
                badgeTr="Gizlilik Güvencesi"
                badgeEn="Privacy Guarantee"
                captionTr="'DMs are never accessed' açık gizlilik teminatı."
                captionEn="'DMs are never accessed' explicit privacy promise."
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 01F — SUCCESS STATES & DASHBOARD LAUNCHPAD                                */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              {locale === 'tr' ? 'Adım 04 · Kapanış & Dashboard Köprüsü' : 'Step 04 · System Readiness & Launchpad'}
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Mutlu Yolun Ötesi & Dashboard Öncesi Başlangıç Masası' : 'Beyond the Happy Path & The Final Pre-Dashboard Launchpad'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Bağlantı teyidi alındıktan sonra kullanıcı boşlukta bırakılmaz. Kurulum süreci; bağlantı başarısı, hazır ekip bildirimi ve doğrudan canlı operasyon merkezine (Dashboard) geçişi sağlayan kişiselleştirilmiş "İlk AI Takım Arkadaşı" başlangıç masasıyla taçlandırılır.'
                : 'Following integration verification, users are never left in an ambiguous void. The onboarding arc culminates in connection confirmations, team readiness signals, and the personalized launchpad bridging directly into live dashboard operations.'}
            </p>
          </div>

          {/* Visual Progression: Connection Success -> Team Ready */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-2">
            <ArtifactFrame
              src="/assets/case-study/operater/crop-hubspot-connected.webp"
              alt="HubSpot Bağlantı Başarısı Onay Ekranı"
              titleTr="Bağlantı Başarılı"
              titleEn="Connection Verified"
              badgeTr="Başarı Bildirimi"
              badgeEn="Success State"
              captionTr="Tüm ajanların HubSpot ile çalışmaya hazır olduğunun doğrulaması."
              captionEn="Verification that all agents are empowered with HubSpot access."
              maxWidth="max-w-sm"
              locale={locale}
            />
            <ArtifactFrame
              src="/assets/case-study/operater/crop-team-ready.webp"
              alt="Operater AI Takımı Hazır Kapanış Ekranı"
              titleTr="AI Takımı Hazır"
              titleEn="Your AI Team is Ready"
              badgeTr="Onboarding Kapanışı"
              badgeEn="Setup Complete"
              captionTr="1 Çalışma Alanı, 2 Ajan, 1 Araç kurulumunun tamamlanma anı."
              captionEn="Immediate readiness: 1 Space created, 2 Agents active, 1 Tool connected."
              maxWidth="max-w-sm"
              locale={locale}
            />
          </div>

          {/* The Pivotal Pre-Dashboard Launchpad Screen */}
          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-purple-950/80 border border-purple-800/70 text-purple-300 text-[10px] font-mono uppercase tracking-wider rounded">
                {locale === 'tr' ? 'Dashboard Öncesi Son Ekran' : 'Final Pre-Dashboard Screen'}
              </span>
            </div>
            <ProductFrame
              src="/assets/case-study/operater/operater-first-teammate-launchpad.webp"
              alt="Operater İlk AI Takım Arkadaşı Başlangıç Masası"
              captionTr="Onboarding'den canlı Dashboard operasyonlarına geçişi sağlayan 3 adımlı net karşılama ve başlangıç ekranı."
              captionEn="The pivotal 3-step launchpad welcoming founders and transitioning them directly into live dashboard operations."
              showMinimalBar={true}
              locale={locale}
            />
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* REFLECTION: WHAT CHANGED IN MY THINKING                                   */}
        {/* ------------------------------------------------------------------------- */}
        <ReflectionBlock
          titleTr="Düşünce Yapımda Ne Değişti?"
          titleEn="What Changed in My Thinking"
          takeawaysTr={[
            'Ekrandan Akışa: Yalnızca tekil UI ekranları tasarlamaktan, kullanıcı ve ajan arasındaki çok adımlı uçtan uca yolculukları kurgulamaya geçtim.',
            'Akıştan Durumlara: Yalnızca mutlu yolu değil; bağlantı kopması, eksik yetki ve kurtarma adımları gibi tüm operasyonel durumları peşinen tasarlamayı benimsedim.',
            'Durumlardan Sisteme: Bileşenleri ve izinleri izole düşünmek yerine; bir kez bağlanan aracın tüm çalışma alanında yeniden kullanılabilir olduğu ölçeklenebilir bir sistem mimarisi inşa ettim.',
          ]}
          takeawaysEn={[
            'From Screens to Flows: Shifted focus from isolated visual canvases to orchestrating multi-step human-AI collaborative journeys.',
            'From Flows to States: Systematically designed edge cases, connection timeouts, and self-healing recovery paths rather than assuming happy paths.',
            'From States to Systems: Architected reusable, workspace-scoped permission models where one connection seamlessly empowers multiple autonomous agents.',
          ]}
          lessonTr="Tasarım ilerledikçe; Ekran → Akış → Durumlar → Sistem hiyerarşisinin ürün olgunluğunu belirleyen ana unsur olduğunu gördüm."
          lessonEn="As product depth matured, I realized the true continuum of UX excellence: Screen → Flow → States → System."
          locale={locale}
        />
      </CaseAccordionSection>

      {/* ========================================================================= */}
      {/* 02 — DASHBOARD SECTION                                                    */}
      {/* ========================================================================= */}
      <CaseAccordionSection
        id="dashboard"
        numberPrefix="02"
        titleTr="Dashboard: Operasyonel Genel Bakış & İnsan Denetimi (HITL)"
        titleEn="Dashboard: Operational Overview & Human-in-the-Loop"
        subtitleTr="Otonom ajanların kararlarını şeffaf, izlenebilir ve gerektiğinde insan müdahalesine açık tutan kontrol merkezi."
        subtitleEn="A control center keeping autonomous decisions transparent, traceable, and open to human review when confidence thresholds require."
        isOpen={openSections.has('dashboard')}
        onToggle={() => toggleSection('dashboard')}
        locale={locale}
      >
        {/* Intro */}
        <div className="space-y-3">
          <h4 className="text-lg sm:text-xl font-display font-bold text-slate-100">
            {locale === 'tr' ? 'Kara Kutu Yerine Açıklanabilir Yapay Zeka' : 'Explainable AI Over Black-Box Behavior'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            {locale === 'tr'
              ? 'Otonom sistemlerde en büyük tehlike kullanıcının arkada ne döndüğünü anlamamasıdır. Dashboard arayüzü, ajanların aldığı her kararı, başvurduğu araçları ve bekleyen onayları tek bir bakışta anlaşılır kılan bir operasyon masası olarak tasarlandı.'
              : 'The greatest pitfall in autonomous systems is opacity. The Operater dashboard was engineered as an operations flight deck where every agent decision, tool invocation, and pending human review is instantly parseable.'}
          </p>
        </div>

        {/* Sub-section: Home as an operational overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '1. Operasyonel Genel Bakış: Home Ekranı' : '1. Operational Overview: Home Dashboard'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            {locale === 'tr'
              ? 'Home ekranı, statik bir analitik panosu değil; anlık operasyon durumunu, bekleyen insan onaylarını ve kritik olayları önceliklendiren dinamik bir komut merkezidir.'
              : 'The Home view is not a passive analytics board; it is a prioritized operational command desk highlighting real-time agent activity, pending approvals, and system alerts.'}
          </p>
          <AnnotatedVisual
            slotId="DASHBOARD_HOME_OVERVIEW"
            titleTr="Operater.io Ana Kontrol Masası (Home Overview)"
            titleEn="Operater.io Main Operations Desk (Home Overview)"
            annotations={[
              {
                id: 'ann-1',
                pinNumber: 1,
                labelTr: 'İnceleme Bekleyenler (Items to Review)',
                labelEn: 'Items to Review Queue',
                descriptionTr: 'Düşük güven skorlu veya hassas işlem onayları en üstte vurgulanır.',
                descriptionEn: 'High-risk or low-confidence agent actions surfaced prominently for quick review.',
              },
              {
                id: 'ann-2',
                pinNumber: 2,
                labelTr: 'Canlı Ajan Akışı (Live Stream)',
                labelEn: 'Live Agent Stream',
                descriptionTr: 'Ajanların anlık işlem logları ve araç çağrıları adım adım izlenir.',
                descriptionEn: 'Step-by-step visibility into tool invocations and live reasoning traces.',
              },
              {
                id: 'ann-3',
                pinNumber: 3,
                labelTr: 'Operasyonel Sağlık Metrikleri',
                labelEn: 'Operational Health Metrics',
                descriptionTr: 'Hata oranları, yanıt süreleri ve başarılı tamamlanma grafikleri.',
                descriptionEn: 'Success rates, latency breakdowns, and agent health indicators.',
              },
            ]}
            locale={locale}
          />
        </div>

        {/* Sub-section: Human-in-the-loop by design */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '2. Tasarımla Gelen İnsan Denetimi (Human-in-the-Loop)' : '2. Human-in-the-Loop by Design'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            {locale === 'tr'
              ? 'Ajanın güven skoru belirlenen eşiğin altına düştüğünde veya dış dünyayı etkileyen bir işlem yapacağı zaman, işlem otomatik olarak insan onayına düşer.'
              : 'Whenever an agent encounters ambiguous intent or initiates an external action, the action is suspended in a review drawer until confirmed by a human.'}
          </p>
          <SideBySideDecision
            problemTr="Onay bekleyen maddeler klasik e-posta tarzı liste yapıldığında aciliyet ve bağlam kayboluyordu."
            problemEn="Traditional table-row review items lacked contextual urgency and reasoning visibility."
            decisionTr="Ajanın niyetini, taslak mesajını ve karar gerekçesini tek tıkla onaylama veya düzenleme olanağı sunan zenginleştirilmiş 'İnceleme Çekmecesi' tasarlandı."
            decisionEn="We designed a rich 'Review Drawer' displaying intent, draft output, and reasoning chain with inline edit and one-click approve/reject actions."
            tradeoffTr="Daha geniş bir modal alanı gerektirdi ancak onaylama süresini hızlandırdı."
            tradeoffEn="Required a wider drawer canvas but reduced decision time significantly."
            slotId="DASHBOARD_ITEMS_REVIEW_PANEL"
            slotTitleTr="İnceleme Bekleyenler & Onay Arayüzü"
            slotTitleEn="Items to Review & Approval Interface"
            locale={locale}
          />
        </div>

        {/* Sub-section: Designing operational states */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '3. Operasyonel Durumların Tasarımı' : '3. Designing Operational States'}
          </h4>
          <StateStrip
            titleTr="Ajan Aksiyon Yaşam Döngüsü Durumları"
            titleEn="Agent Action Lifecycle States"
            states={[
              {
                id: 'sending',
                type: 'pending',
                labelTr: 'Gönderiliyor',
                labelEn: 'Sending',
                badgeTr: 'PENDING',
                badgeEn: 'PENDING',
                descTr: 'Ajan araca istek gönderdi, yanıt bekleniyor.',
                descEn: 'Request dispatched to tool endpoint.',
              },
              {
                id: 'sent',
                type: 'success',
                labelTr: 'Tamamlandı',
                labelEn: 'Completed',
                badgeTr: 'SUCCESS',
                badgeEn: 'SUCCESS',
                descTr: 'İşlem başarıyla icra edildi.',
                descEn: 'Action verified and logged in CRM/Slack.',
              },
              {
                id: 'review',
                type: 'warning',
                labelTr: 'İnceleme Gerekli',
                labelEn: 'Review Required',
                badgeTr: 'HITL',
                badgeEn: 'HITL',
                descTr: 'Güven skoru eşik altında, insan onayı bekliyor.',
                descEn: 'Awaiting operator review and decision.',
              },
              {
                id: 'rejected',
                type: 'error',
                labelTr: 'Reddedildi',
                labelEn: 'Rejected',
                badgeTr: 'CANCELLED',
                badgeEn: 'CANCELLED',
                descTr: 'Operatör tarafından iptal edildi.',
                descEn: 'Action rejected with feedback note.',
              },
              {
                id: 'retrying',
                type: 'neutral',
                labelTr: 'Yeniden Deneniyor',
                labelEn: 'Retrying',
                badgeTr: 'RETRY',
                badgeEn: 'RETRY',
                descTr: 'Hata sonrası otomatik kurtarma devrede.',
                descEn: 'Exponential backoff retry triggered.',
              },
            ]}
            locale={locale}
          />
        </div>

        {/* Sub-section: Explainability */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '4. Açıklanabilirlik & Akıl Yürütme İncelemesi' : '4. Explainability & Reasoning Inspection'}
          </h4>
          <FeatureVisual
            slotId="DASHBOARD_ACTIVITY_REASONING"
            titleTr="Ajan Aktivite Akışı & Akıl Yürütme Detay Paneli"
            titleEn="Agent Activity Timeline & Reasoning Inspection Panel"
            tagTr="Açıklanabilir AI"
            tagEn="Explainable AI"
            captionTr="Ajanın hangi verilere dayanarak karar aldığını gösteren şeffaf düşünce zinciri."
            captionEn="Transparent thought-process breakdown citing referenced documents and API calls."
            locale={locale}
          />
        </div>

        {/* Sub-section: Destructive Actions */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '5. Yıkıcı Eylemlerin Güvenli Tasarımı & Ajan Detay Çekmecesi' : '5. De-emphasizing Destructive Actions & Agent Detail Drawer'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8">
              <DetailCrop
                slotId="DASHBOARD_AGENTS_DRAWER"
                titleTr="Ajan Yönetim & Sağ Çekmece Görünümü"
                titleEn="Agent Management & Right Drawer View"
                badgeTr="Ajan Çekmecesi"
                badgeEn="Agent Drawer"
                aspectRatio="16/10"
                locale={locale}
              />
            </div>
            <div className="md:col-span-4">
              <DetailCrop
                slotId="DASHBOARD_DESTRUCTIVE_KEBAB_CROP"
                titleTr="Yıkıcı Eylem Kebab Menü & Onay Katmanı"
                titleEn="Destructive Action Kebab Menu & Confirmation Gate"
                captionTr="Kazara tetiklemeleri önleyen güvenlik katmanı."
                captionEn="Safety gate preventing accidental destruction."
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* Dashboard Reflection */}
        <ReflectionBlock
          titleTr="Dashboard Tasarımı Çıkarımları"
          titleEn="Dashboard Key Takeaways"
          takeawaysTr={[
            'İnsan-yapay zeka iş birliğinde en kritik bileşen hızlı ve bağlamından kopmayan inceleme arayüzüdür.',
            'Yapay zekanın neden hata yaptığını veya neden onay istediğini net açıklamak kullanıcı stresini sıfıra indirir.',
            'Yıkıcı butonların gizlenmesi operasyon güvenliğini doğrudan teminat altına aldı.',
          ]}
          takeawaysEn={[
            'The pivotal element in human-AI collaboration is a fast, context-preserving review interface.',
            'Clearly explaining why an agent requires human validation eliminates operator friction and anxiety.',
            'Safeguarding destructive actions behind secondary gates guaranteed enterprise-level operational safety.',
          ]}
          lessonTr="Operatör yapay zekayı bir tehdit veya kontrolsüz bir güç olarak değil, yetkin bir yardımcı olarak görmelidir."
          lessonEn="The operator should perceive the AI not as a high-risk black box, but as a transparent and collaborative coworker."
          locale={locale}
        />
      </CaseAccordionSection>

      {/* ========================================================================= */}
      {/* 03 — SETTINGS & GOVERNANCE SECTION                                        */}
      {/* ========================================================================= */}
      <CaseAccordionSection
        id="settings"
        numberPrefix="03"
        titleTr="Ayarlar & Kurumsal Yönetişim: Dereceli Otonomi"
        titleEn="Settings & Enterprise Governance: Graduated Autonomy"
        subtitleTr="Farklı departman ve risk seviyelerine göre ajanların bağımsız hareket alanını kademeli olarak belirleyen kurallar bütünü."
        subtitleEn="A granular governance system configuring autonomous boundaries based on department risk tiers and escalation policies."
        isOpen={openSections.has('settings')}
        onToggle={() => toggleSection('settings')}
        locale={locale}
      >
        {/* Intro */}
        <div className="space-y-3">
          <h4 className="text-lg sm:text-xl font-display font-bold text-slate-100">
            {locale === 'tr' ? 'Her Şirket İçin Uyarlanabilir Otonomi Seviyeleri' : 'Adaptable Autonomy Tiers for Enterprise'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            {locale === 'tr'
              ? 'Her şirketin risk toleransı farklıdır. Kimi ekipler ajanın her adımını onaylamak isterken, kimi ekipler rutin operasyonların tam otonom akmasını tercih eder. Settings & Governance mimarisi, bu spektrumu tek bir anahtar yerine kademeli kurallarla çözdü.'
              : 'Risk tolerance varies across organizations. Some teams require explicit sign-off on every action, while others demand fully hands-off automation. Our settings architecture resolved this through graduated autonomy rules rather than an inflexible global switch.'}
          </p>
        </div>

        {/* Sub-section: Graduated autonomy */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '1. Kademeli Otonomi Modeli (Graduated Autonomy)' : '1. Graduated Autonomy Framework'}
          </h4>
          <FeatureVisual
            slotId="SETTINGS_AUTONOMY_LEVELS"
            titleTr="Kademeli Otonomi Seviyeleri ve Güvenlik Eşikleri"
            titleEn="Graduated Autonomy Tiers & Safety Thresholds"
            tagTr="Otonomi Kontrolü"
            tagEn="Autonomy Control"
            captionTr="Departman veya ajan bazında bağımsız otonomi seviyesi atama paneli."
            captionEn="Granular autonomy level assignment matrix per department or individual agent."
            locale={locale}
          />
        </div>

        {/* Sub-section: Governance through rules and access */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '2. Kurallar ve Erişim Kontrolü ile Yönetişim' : '2. Governance via Escalation Rules & RBAC'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <DetailCrop
              slotId="SETTINGS_GOVERNANCE_CROPS_ESCALATION"
              titleTr="Eskalasyon Kuralları Konfigürasyonu"
              titleEn="Escalation Rules Engine"
              badgeTr="Kural Motoru"
              badgeEn="Rule Engine"
              locale={locale}
            />
            <DetailCrop
              slotId="SETTINGS_GOVERNANCE_CROPS_ACCESS"
              titleTr="Ajan Erişim ve İzin Matrisi"
              titleEn="Agent Access & Permissions"
              badgeTr="Erişim İzni"
              badgeEn="Access Control"
              locale={locale}
            />
            <DetailCrop
              slotId="SETTINGS_GOVERNANCE_CROPS_CONNECTIONS"
              titleTr="Kurumsal Araç Entegrasyon Sağlığı"
              titleEn="Tool Connection Health"
              badgeTr="Bağlantı"
              badgeEn="Connection"
              locale={locale}
            />
          </div>
        </div>

        {/* Sub-section: Operational visibility */}
        <div className="space-y-3">
          <h4 className="text-sm font-display font-bold text-slate-100">
            {locale === 'tr' ? '3. Operasyonel Görünürlük & Kullanım Analitiği' : '3. Operational Visibility & Usage Analytics'}
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8">
              <DetailCrop
                slotId="SETTINGS_ANALYTICS_OVERVIEW"
                titleTr="Kurumsal Kullanım & Performans Analitiği"
                titleEn="Enterprise Usage & Performance Analytics"
                badgeTr="Analitik Pano"
                badgeEn="Analytics Board"
                aspectRatio="16/10"
                locale={locale}
              />
            </div>
            <div className="lg:col-span-4">
              <DetailCrop
                slotId="SETTINGS_USAGE_SUPPORTING"
                titleTr="Maliyet & Token Tüketim Detayı"
                titleEn="Cost & Token Consumption Breakdown"
                badgeTr="Token Analitiği"
                badgeEn="Token Analytics"
                aspectRatio="4/3"
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* Settings Reflection */}
        <ReflectionBlock
          titleTr="Yönetişim & Ayarlar Çıkarımları"
          titleEn="Governance & Settings Key Takeaways"
          takeawaysTr={[
            'Kurumsal müşterilerin yapay zekayı benimsemesindeki ana etken özellik sayısı değil, kontrol ve eskalasyon kurallarının sağlamlığıdır.',
            'Kademeli otonomi, ekiplerin ürüne duyduğu güven arttıkça ajanı daha bağımsız bırakmasına olanak tanıdı.',
            'Görünür maliyet ve token analitiği bütçe sürprizlerini tamamen engelledi.',
          ]}
          takeawaysEn={[
            'Enterprise adoption is driven not by raw feature count, but by the rigor of governance and escalation controls.',
            'Graduated autonomy enabled organizations to systematically expand automation as confidence matured.',
            'Transparent token and cost attribution prevented unexpected billing friction.',
          ]}
          lessonTr="Kurumsal güvenilirlik, yapay zekaya sınırsız özgürlük vermekle değil; net sınırlar çizip denetlenebilir kılmakla sağlanır."
          lessonEn="Enterprise trust is built not by granting unconstrained autonomy, but by defining verifiable operational boundaries."
          locale={locale}
        />
      </CaseAccordionSection>

      {/* ========================================================================= */}
      {/* CASE STUDY CONCLUSION (Layer 1: Scope & Design System)                   */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-8 border-t border-slate-800">
        <div className="space-y-2">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
            {locale === 'tr' ? 'Sonuçlar & Çıktılar' : 'Deliverables & Outcomes'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100">
            {locale === 'tr' ? 'Somut Ürün Çıktıları & Tasarım Sistemi Temeli' : 'Tangible Project Scope & Design System'}
          </h3>
        </div>

        {/* Clean 2-Column Editorial Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm sm:text-base text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-2">
              <span className="text-purple-400">📦</span>
              <span>{locale === 'tr' ? 'Yayına Alınan Ürün Kapsamı' : 'Shipped Product Scope'}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span className="leading-relaxed">{locale === 'tr' ? '6 adımlı rehberli Onboarding ve çalışma alanı bazlı araç yetkilendirme akışı' : '6-step guided onboarding & workspace-scoped tool authorization workflow'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span className="leading-relaxed">{locale === 'tr' ? 'Canlı ajan akışı, HITL onay çekmecesi ve Home operasyon komut paneli' : 'Live agent stream, HITL review drawer, and Home command flight deck'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span className="leading-relaxed">{locale === 'tr' ? '3 kademeli otonomi modeli, eskalasyon kuralları ve kullanım analitiği panelleri' : '3-tier graduated autonomy framework, escalation rules, and analytics'}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm sm:text-base text-slate-200 flex items-center gap-2 border-b border-slate-800 pb-2">
              <span className="text-purple-400">🎨</span>
              <span>{locale === 'tr' ? 'Tasarım Sistemi & Mühendislik Hızı' : 'Design System & Team Velocity'}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span className="leading-relaxed">{locale === 'tr' ? 'Koyu temalı, erişilebilir renk tokenları, tipografi hiyerarşisi ve bileşen matrisi' : 'Dark-mode, accessible token hierarchy and comprehensive component state matrix'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span className="leading-relaxed">{locale === 'tr' ? 'Şeffaf izin şemaları ile üçüncü taraf araç entegrasyonunda sürtünmesiz onay' : 'Transparent permission scopes streamlining third-party enterprise integrations'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span className="leading-relaxed">{locale === 'tr' ? 'Geliştiricilerin yeni ajan yeteneklerini dakikalar içinde standart kabuklara entegre edebilmesi' : 'Engineers can ship new agent capabilities rapidly within standardized UI shells'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CASE STUDY CONCLUSION (Layer 2: A Personal Milestone)                    */}
      {/* ========================================================================= */}
      <section className="p-6 sm:p-8 bg-gradient-to-br from-[#0F172A] to-[#1E1B4B]/20 border border-purple-900/40 rounded-2xl space-y-3">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full bg-purple-900/90 border border-purple-700/60 text-purple-300 text-xs flex items-center justify-center font-bold">
            ★
          </span>
          <h3 className="text-base sm:text-lg font-display font-bold text-slate-100">
            {locale === 'tr' ? 'Kişisel Bir Dönüm Noktası' : 'A Personal Milestone'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          {locale === 'tr'
            ? 'Operater.io, mevcut bir tasarım kılavuzu olmadan, 0’dan 1’e karmaşık bir B2B yapay zeka operasyon platformunun tüm tasarım vizyonunu ve sistematiğini tek başıma şekillendirdiğim en kapsamlı projelerden biri oldu. Tasarımın yalnızca görsel bir cila değil; yapay zeka gibi soyut bir teknolojiyi somut, güvenilir ve vazgeçilmez bir iş aracına dönüştüren ana omurga olduğunu bir kez daha kanıtladı.'
            : 'Operater.io stands as one of the most comprehensive milestones in my career: establishing the entire design vision, UI architecture, and component library from 0 to 1 without pre-existing guidelines. It reinforced my core philosophy that design is not mere visual polish, but the foundational bridge turning ambiguous AI capabilities into indispensable, trustworthy enterprise software.'}
        </p>
      </section>

      {/* ========================================================================= */}
      {/* CASE STUDY CONCLUSION (Layer 3: Next Actions & CTAs)                     */}
      {/* ========================================================================= */}
      <footer className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          <div className="font-display font-bold text-slate-200">Operater.io Case Study</div>
          <div className="font-sans">Görkem Berk Gündoğdu · UI/UX Designer</div>
        </div>

        {/* Action CTAs: Live Product & Reserved Figma Prototype */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://operater.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold font-display transition-all shadow-md hover:shadow-purple-600/30 no-underline flex items-center gap-1.5"
          >
            <span>{locale === 'tr' ? 'Canlı Platformu Ziyaret Et' : 'Visit Live Platform'}</span>
            <span>↗</span>
          </a>

          {/* Figma Designs Button */}
          <a
            href="https://www.figma.com/design/8LAlpHDK0yGPMjdqozYM1m/Operater-Flow?node-id=0-1&t=Ok4ktlITx1lwaocB-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold font-display transition-all no-underline flex items-center gap-1.5 shadow-sm"
          >
            <span>{locale === 'tr' ? 'Figma Tasarımlarını İncele' : 'View Figma Designs'}</span>
            <span className="text-slate-400">↗</span>
          </a>
        </div>
      </footer>
    </article>
  );
};
