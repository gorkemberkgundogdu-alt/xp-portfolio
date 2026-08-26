import React, { useState } from 'react';
import { PlaceholderSlot } from './primitives/PlaceholderSlot';
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
    <article className="w-full max-w-5xl mx-auto space-y-10 select-text font-sans text-slate-200">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <header className="space-y-6 pb-6 border-b border-slate-800">
        {/* Top Badges & Live Link Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-950/60 border border-purple-800/60 rounded text-purple-300 text-xs font-semibold">
              <img
                src="/assets/operater-logo.webp"
                alt="Operater.io"
                width={14}
                height={14}
                className="w-3.5 h-3.5 rounded-xs shrink-0 object-contain"
              />
              <span>Operater.io</span>
            </span>
            <span className="px-2.5 py-1 bg-slate-800/80 border border-slate-700 rounded text-slate-300 text-xs font-medium">
              {locale === 'tr' ? 'B2B SaaS / Yapay Zeka Operasyon Platformu' : 'B2B SaaS / AI Operations Platform'}
            </span>
            <span className="px-2.5 py-1 bg-emerald-950/40 border border-emerald-800/50 rounded text-emerald-300 text-xs font-mono flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{locale === 'tr' ? 'Canlıda / Üretimde' : 'Live in Production'}</span>
            </span>
          </div>

          <a
            href="https://operater.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-xs font-bold transition-colors shadow-sm no-underline"
          >
            <span>{locale === 'tr' ? 'Canlı Ürünü Ziyaret Et' : 'Visit Live Platform'}</span>
            <span>↗</span>
          </a>
        </div>

        {/* Title & Editorial Lead */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {locale === 'tr'
              ? 'Karmaşık Otonom Yapay Zeka Ajanlarını Güvenilir ve Kontrol Edilebilir B2B SaaS Deneyimine Dönüştürmek'
              : 'Transforming Complex Autonomous AI Agents into a Trustworthy & Controllable B2B SaaS Experience'}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
            {locale === 'tr'
              ? 'Operater.io için 0’dan 1’e tasarlanan; onboarding akışından otonomi ayarlarına, insan denetimli (Human-in-the-Loop) onay panellerinden modüler tasarım sistemine kadar uzanan uçtan uca ürün tasarımı ve kullanıcı deneyimi vaka çalışması.'
              : 'End-to-end product design and UX case study for Operater.io, designed from 0 to 1: spanning seamless onboarding, graduated autonomy settings, human-in-the-loop review panels, and a comprehensive design system.'}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#0F172A] border border-slate-800 rounded-xl text-xs">
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              {locale === 'tr' ? 'Rol' : 'Role'}
            </div>
            <div className="font-semibold text-slate-200 mt-0.5">
              {locale === 'tr' ? 'UI/UX Designer' : 'UI/UX Designer'}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              {locale === 'tr' ? 'Kapsam' : 'Scope'}
            </div>
            <div className="font-semibold text-slate-200 mt-0.5">
              {locale === 'tr' ? '0 → 1 Ürün & Tasarım Sistemi' : '0 → 1 Product & Design System'}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              {locale === 'tr' ? 'Disiplinler' : 'Disciplines'}
            </div>
            <div className="font-semibold text-slate-200 mt-0.5">
              Web & SaaS, Design Systems, AI UX
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              {locale === 'tr' ? 'Durum' : 'Status'}
            </div>
            <div className="font-semibold text-emerald-400 mt-0.5">
              {locale === 'tr' ? 'Aktif B2B Platformu' : 'Active B2B Platform'}
            </div>
          </div>
        </div>

        {/* Hero Overlapping Visual Pair (Real Landing + Create Account) */}
        <HeroPair
          primarySlotId="HERO_PRIMARY_SCREENSHOT"
          primaryTitleTr="Operater.io Ana Landing Sayfası & Command Center Önizlemesi"
          primaryTitleEn="Operater.io Main Landing Page & Command Center Preview"
          primarySrc="/assets/case-study/operater/operater-landing.webp"
          primaryAltTr="Operater.io Landing Sayfası - Scale your startup without scaling your headcount"
          primaryAltEn="Operater.io Landing Page - Scale your startup without scaling your headcount"
          secondarySlotId="HERO_SECONDARY_SCREENSHOT"
          secondaryTitleTr="Operater Hızlı Hesap Oluşturma Akışı"
          secondaryTitleEn="Operater Fast Account Creation Flow"
          secondarySrc="/assets/case-study/operater/operater-create-account.webp"
          secondaryAltTr="Operater.io Hesap Oluşturma Ekranı"
          secondaryAltEn="Operater.io Create Account Screen"
          captionTr="Operater.io ana sayfasından hesap oluşturmaya uzanan görsel güven odaklı ilk karşılaşma kompozisyonu."
          captionEn="Visual trust-focused opening composition connecting the landing experience to account creation."
          locale={locale}
        />
      </header>

      {/* ========================================================================= */}
      {/* 01 — ONBOARDING SECTION (Real Screenshot Sequence)                        */}
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
        {/* ------------------------------------------------------------------------- */}
        {/* CHAPTER A — VISUAL TRUST BEFORE PRODUCT COMPLEXITY                         */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-4">
          <div className="space-y-1.5 border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
              {locale === 'tr' ? 'Bölüm A · Karşılaşma' : 'Chapter A · First Touch'}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              {locale === 'tr' ? 'Ürün Karmaşıklığından Önce Görsel Güven İnşa Etmek' : 'Visual Trust Before Product Complexity'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {locale === 'tr'
              ? 'Otonom yapay zeka ajanları, şirket verilerine ve hassas iş araçlarına erişim gerektirdiği için kullanıcılarda doğal bir güvenlik ve bilişsel yük bariyeri oluşturur. Açılış deneyiminde temel amacımız; teknik karmaşıklığı soyutlayarak kullanıcıya her aşamada net, güvenilir ve anlaşılır bir zemin sunmaktı.'
              : 'Autonomous AI agents naturally trigger cognitive friction and security concerns as they request access to enterprise data and internal tools. In designing the opening experience, our core objective was abstracting technical complexity while providing a clean, transparent, and confidence-building foundation.'}
          </p>

          {/* Composition: Landing (65-70%) + Create Account (35-40% overlap) */}
          <HeroPair
            primarySlotId="ONBOARDING_HERO_PAIR_MAIN"
            primaryTitleTr="Operater Landing: Net Değer Önerisi & Sosyal Kanıt"
            primaryTitleEn="Operater Landing: Clear Value Proposition & Social Proof"
            primarySrc="/assets/case-study/operater/operater-landing.webp"
            primaryAltTr="Operater.io Landing Arayüzü"
            primaryAltEn="Operater.io Landing Interface"
            secondarySlotId="ONBOARDING_HERO_PAIR_OVERLAP"
            secondaryTitleTr="Kayıt Arayüzü: Hızlı & Güven Veren Giriş"
            secondaryTitleEn="Account Creation: Frictionless & Trustworthy Input"
            secondarySrc="/assets/case-study/operater/operater-create-account.webp"
            secondaryAltTr="Operater.io Hesap Oluşturma Ekranı"
            secondaryAltEn="Operater.io Account Creation Screen"
            captionTr="Landing sayfasındaki net mesaj ve '3 dakikada kurulum' vaadi, hesap açma adımında sürtünmesiz form mimarisiyle karşılandı."
            captionEn="The clear landing promise of 'setup under 3 minutes' is directly carried into frictionless account onboarding."
            locale={locale}
          />

          {/* Email Verification: Transitional Artifact */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-5 p-4 bg-[#0F172A] border border-slate-800 rounded-xl">
            <div className="w-full sm:w-80 shrink-0">
              <PlaceholderSlot
                id="ONBOARDING_VERIFY_EMAIL"
                nameTr="E-posta Doğrulama: 6 Haneli Güvenlik Kodu"
                nameEn="Email Verification: 6-Digit Security Code"
                src="/assets/case-study/operater/operater-verify-email.webp"
                altTr="Operater E-posta Doğrulama Ekranı"
                altEn="Operater Email Verification Screen"
                browserFrame={false}
                locale={locale}
              />
            </div>
            <div className="space-y-1.5 text-xs text-slate-300">
              <span className="px-2 py-0.5 bg-purple-950/60 border border-purple-800/60 text-purple-300 font-mono text-[10px] uppercase tracking-wider rounded inline-block">
                {locale === 'tr' ? 'Geçiş Katmanı' : 'Transitional Artifact'}
              </span>
              <h5 className="font-bold text-slate-100 text-sm">
                {locale === 'tr' ? 'Hesap Açılışından Ürün Kurulumuna Güvenli Köprü' : 'Secure Bridge into Product Onboarding'}
              </h5>
              <p className="text-slate-400 leading-relaxed text-[11px] sm:text-xs">
                {locale === 'tr'
                  ? 'E-posta doğrulama adımı, kullanıcıyı şifresiz/güvenli akışta tutarak kurulumun içine kesintisiz taşıyan minimal bir ara durak olarak kurgulandı.'
                  : 'The verification step was designed as a minimal, focused transition keeping users oriented before entering workspace configuration.'}
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* CHAPTER B — FROM ACCOUNT TO PRODUCT CONTEXT                                */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <div className="space-y-1.5 border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
              {locale === 'tr' ? 'Bölüm B · Bağlam İnşası' : 'Chapter B · Product Context'}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              {locale === 'tr' ? 'Kullanıcı Girdisinin Neden Önemli Olduğunu Göstermek' : 'Showing Why User Input Matters'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {locale === 'tr'
              ? 'Arayüz sadece kuru bir şirket formu doldurtmaz; girilen bilginin yapay zeka ajanlarının karar kalitesini ve operasyonel çıktısını nasıl anında güçlendireceğini canlı olarak görselleştirir.'
              : 'The interface does not merely collect static company parameters; it actively proves in real time how provided domain context shapes autonomous agent decision quality.'}
          </p>

          {/* Step Journey Flow Strip */}
          <FlowStrip
            titleTr="Operater.io Kurulum Akışı"
            titleEn="Operater.io Setup Flow"
            steps={[
              { id: '1', stepNumber: 1, labelTr: 'Hesap Aç', labelEn: 'Account', sublabelTr: 'Google / Mail', sublabelEn: 'Google / Mail' },
              { id: '2', stepNumber: 2, labelTr: 'Doğrula', labelEn: 'Verify', sublabelTr: 'Güvenlik', sublabelEn: 'Security' },
              { id: '3', stepNumber: 3, labelTr: 'Şirket', labelEn: 'Company', sublabelTr: 'Bağlam', sublabelEn: 'Context' },
              { id: '4', stepNumber: 4, labelTr: 'Ajanlar', labelEn: 'Agents', sublabelTr: 'Seçim', sublabelEn: 'Selection' },
              { id: '5', stepNumber: 5, labelTr: 'Araçlar', labelEn: 'Tools', sublabelTr: 'Entegrasyon', sublabelEn: 'Integration' },
              { id: '6', stepNumber: 6, labelTr: 'Bağlandı', labelEn: 'Connected', sublabelTr: 'Canlı', sublabelEn: 'Live' },
            ]}
            locale={locale}
          />

          {/* Onboarding Intro Supporting Screen (~40-45% width) */}
          <div className="w-full lg:max-w-[48%] mx-auto my-4">
            <PlaceholderSlot
              id="ONBOARDING_INTRO_SCREEN"
              nameTr="Onboarding Giriş: 3 Hızlı Adım Bilgilendirmesi"
              nameEn="Onboarding Intro: 3 Quick Steps Overview"
              src="/assets/case-study/operater/operater-onboarding-intro.webp"
              altTr="Operater Onboarding Giriş Ekranı"
              altEn="Operater Onboarding Intro Screen"
              captionTr="Kullanıcıyı karşılayan 3 adımlı net yol haritası kartı."
              captionEn="3-step roadmap card introducing what lies ahead before tool setup."
              locale={locale}
            />
          </div>

          {/* Company Setup: Full-Width Major Screen */}
          <FeatureVisual
            slotId="ONBOARDING_COMPANY_SETUP"
            titleTr="Şirket Tanımı & Sağ Panelde Canlı Ajan Simülasyonu"
            titleEn="Company Setup & Live Agent Simulation in Right Panel"
            src="/assets/case-study/operater/operater-company-setup.webp"
            altTr="Operater Şirket Tanımlama Ekranı"
            altEn="Operater Company Setup Screen"
            tagTr="Bağlam İnşası"
            tagEn="Context Engineering"
            captionTr="Sol tarafta şirket bilgisi girilirken, sağ tarafta 'YOUR AGENTS WILL SEE' alanında ajanın veriyi nasıl yorumlayacağı anlık gösterilir."
            captionEn="As users input company data on the left, the 'YOUR AGENTS WILL SEE' right container previews real-time agent parsing."
            locale={locale}
          />

          {/* Context Detail Crop: User Input -> Agent Context */}
          <DetailCrop
            slotId="ONBOARDING_COMPANY_CONTEXT_CROP"
            titleTr="Ajan Önizleme Alanı Kırpması: Kullanıcı Girdisi → Ajan Bağlamı"
            titleEn="Agent Preview Area Crop: User Input → Agent Context"
            src="/assets/case-study/operater/operater-company-context-crop.webp"
            altTr="Canlı Ajan Bağlam Önizleme Detayı"
            altEn="Live Agent Context Preview Detail"
            badgeTr="Mikro-Etkileşim Kanıtı"
            badgeEn="Micro-Interaction Evidence"
            captionTr="Formu sıkıcı bir zorunluluktan çıkarıp ajanı eğitme deneyimine dönüştüren canlı bağlam geri bildirimi."
            captionEn="Real-time contextual feedback that transforms passive form-filling into an engaging training loop."
            locale={locale}
          />
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* CHAPTER C — THE MOMENT THE PRODUCT CLICKS                                  */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <div className="space-y-1.5 border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
              {locale === 'tr' ? 'Bölüm C · Kırılma Anı' : 'Chapter C · The Core Moment'}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              {locale === 'tr' ? 'İlk Ajanları Etkinleştirmek (Enable Agents)' : 'Enabling the First Agents'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {locale === 'tr'
              ? 'Bu ekran basit bir özellik açma/kapama listesi değildir. Kullanıcının Operater’ın çalışma mantığını (iş akışlarına sahip çıkan, araçları kullanan ve otonom çalışan ajanlar) ilk kez kavradığı ve operasyon modelini kurduğu ana dönüm noktasıdır.'
              : 'This screen is far more than a feature toggle list. It is the central turning point where users grasp Operater’s core operating model: autonomous AI teammates that own workflows, utilize integrations, and operate continuously.'}
          </p>

          {/* Enable Agents: Midpoint Hero Visual with Annotations */}
          <AnnotatedVisual
            slotId="ONBOARDING_ENABLE_AGENTS"
            titleTr="Ajan Kataloğu & Görev Konfigürasyon Merkezi"
            titleEn="Agent Catalog & Mission Configuration Hub"
            src="/assets/case-study/operater/operater-enable-agents.webp"
            altTr="Operater Ajan Kataloğu ve Seçim Arayüzü"
            altEn="Operater Agent Catalog and Selection Interface"
            captionTr="Bölümün merkezindeki ana ekran: 14 farklı hazır ajan profili ve şeffaf izin etiketleri."
            captionEn="Midpoint hero visual: 14 pre-built agent profiles with transparent mission and permission scopes."
            annotations={[
              {
                id: 'ann-1',
                pinNumber: 1,
                labelTr: 'Ajanın Görevi (What it does)',
                labelEn: 'What the agent does',
                descriptionTr: 'Her ajanın uzmanlaştığı operasyonel görev (Lead Gen, Outreach, PR, CRM) açık ve net tanımlanır.',
                descriptionEn: 'Clear mission statement defining the exact operational workflow owned by the agent.',
              },
              {
                id: 'ann-2',
                pinNumber: 2,
                labelTr: 'Gerekli Araçlar (Required tools)',
                labelEn: 'Required tools & scopes',
                descriptionTr: 'Ajanın çalışması için ihtiyaç duyduğu Slack, Gmail, HubSpot gibi araçlar kart üzerinde peşinen gösterilir.',
                descriptionEn: 'Integrations required by the agent are surfaced upfront on the card (Slack, Gmail, HubSpot).',
              },
              {
                id: 'ann-3',
                pinNumber: 3,
                labelTr: 'Etkinleştirme Durumu (Enable state)',
                labelEn: 'Enable & toggle state',
                descriptionTr: 'Kullanıcı tek tıkla ajanı çalışma alanına dahil eder veya devre dışı bırakır.',
                descriptionEn: 'Single-click enable action initiating automated background readiness.',
              },
            ]}
            locale={locale}
          />
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* CHAPTER D — FROM AGENTS TO TOOLS                                          */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <div className="space-y-1.5 border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
              {locale === 'tr' ? 'Bölüm D · Entegrasyon Mimarisi' : 'Chapter D · Tool Architecture'}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              {locale === 'tr' ? 'Bir Kez Bağla, Her Yerde Kullan (Connect Once, Reuse Everywhere)' : 'Connect Once, Reuse Everywhere'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {locale === 'tr'
              ? 'Çalışma alanı kapsamlı (workspace-scoped) bağlantı modeli sayesinde bir araç (örneğin HubSpot veya Slack) bir kez bağlandığında, o araca ihtiyaç duyan tüm yetkili ajanlar aynı güvenli kimlik bilgisini yeniden izin istemeden kullanır. İlke: "Tek bağlantı, birden çok ajan."'
              : 'Under the workspace-scoped connection model, connecting an enterprise tool (like HubSpot or Slack) once allows all authorized agents in the workspace to share that credential seamlessly. Core insight: "One connection, multiple agents."'}
          </p>

          {/* Connect Tools: Main Canvas (~80-85% width) + HubSpot Connect Floating Overlap */}
          <FloatingPanelComposition
            baseSlotId="ONBOARDING_CONNECT_TOOLS"
            baseTitleTr="Veri Kaynaklarını & Araçları Bağlama Masası"
            baseTitleEn="Wire Up Your Agents' Data Sources Hub"
            baseSrc="/assets/case-study/operater/operater-connect-tools.webp"
            baseAltTr="Operater Veri Kaynakları ve Araç Entegrasyonları Arayüzü"
            baseAltEn="Operater Connect Tools and Data Sources Interface"
            floatingSlotId="ONBOARDING_HUBSPOT_CONNECT"
            floatingTitleTr="HubSpot İzin & Kapsam Bilgilendirmesi"
            floatingTitleEn="HubSpot Scope & Permission Overview"
            floatingSrc="/assets/case-study/operater/operater-hubspot-connect.webp"
            floatingAltTr="HubSpot Entegrasyon İzinleri Kartı"
            floatingAltEn="HubSpot Integration Permissions Card"
            captionTr="Çalışma alanı genelinde paylaşılan araç bağlantı masası ve üzerine binen HubSpot yetki önizleme paneli."
            captionEn="Workspace-wide tool connection canvas composed with an overlapping HubSpot authorization breakdown."
            locale={locale}
          />

          {/* Supporting OAuth Authorizations: HubSpot Auth + Slack Auth */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-bold text-slate-200">
              {locale === 'tr' ? 'Yetkilendirme Güvenliği: Slack ve HubSpot OAuth İzin Şeffaflığı' : 'Authorization Transparency: Slack & HubSpot OAuth Modals'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PlaceholderSlot
                id="ONBOARDING_HUBSPOT_AUTH"
                nameTr="HubSpot OAuth Giriş & Erişim Onayı"
                nameEn="HubSpot OAuth Sign-In & Access Grant"
                src="/assets/case-study/operater/operater-hubspot-auth.webp"
                altTr="HubSpot OAuth Giriş Modalı"
                altEn="HubSpot OAuth Sign-In Modal"
                browserFrame={false}
                locale={locale}
              />
              <PlaceholderSlot
                id="ONBOARDING_SLACK_AUTH"
                nameTr="Slack İzin Modalı: 'DMs are never accessed' Güvencesi"
                nameEn="Slack Permission Modal: 'DMs are never accessed' Guarantee"
                src="/assets/case-study/operater/operater-slack-auth.webp"
                altTr="Slack OAuth Yetkilendirme Modalı"
                altEn="Slack OAuth Authorization Modal"
                browserFrame={false}
                locale={locale}
              />
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 text-center font-sans">
              {locale === 'tr'
                ? 'Slack entegrasyonunda özel mesajların (DM) asla okunmayacağının açıkça belirtilmesi kurumsal güvenlik onayını hızlandırdı.'
                : 'Explicitly guaranteeing that direct messages (DMs) are never accessed eliminated security hesitations during enterprise Slack sync.'}
            </p>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* CHAPTER E — DESIGNING BEYOND THE HAPPY PATH                               */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <div className="space-y-1.5 border-b border-slate-800 pb-3">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">
              {locale === 'tr' ? 'Bölüm E · Başarı & Kapanış' : 'Chapter E · Closure & Success'}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              {locale === 'tr' ? 'Mutlu Yolun Ötesini Tasarlamak (Designing Beyond the Happy Path)' : 'Designing Beyond the Happy Path'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {locale === 'tr'
              ? 'İlk tasarımlar ağırlıklı olarak mutlu yola (happy path) odaklanmıştı ve bağlantı butonuna basıldığı an süreç bitmiş gibi kurgulanmıştı. Ürün yönetimi geri bildirimleriyle birlikte tasarım yaklaşımımız; başarı, hata, yeniden deneme ve kurulum sonrası ilk aksiyon adımlarını uçtan uca kapsayacak şekilde derinleştirildi.'
              : 'Early iterations focused predominantly on the happy path, concluding right at the connection trigger. Product feedback prompted a systematic evolution: designing comprehensive post-connection feedback, recovery triggers, and immediate next steps for the team.'}
          </p>

          {/* Real Success Artifacts: HubSpot Connected + Team Ready */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <PlaceholderSlot
              id="ONBOARDING_HUBSPOT_CONNECTED"
              nameTr="Bağlantı Başarılı: HubSpot Aktif & Ajanlar Hazır"
              nameEn="Connection Success: HubSpot Active & Agents Ready"
              src="/assets/case-study/operater/operater-hubspot-connected.webp"
              altTr="HubSpot Bağlantı Başarı Ekranı"
              altEn="HubSpot Connection Success Screen"
              browserFrame={false}
              locale={locale}
            />
            <PlaceholderSlot
              id="ONBOARDING_TEAM_READY"
              nameTr="Onboarding Kapanışı: 'Your AI Team is Ready'"
              nameEn="Onboarding Completion: 'Your AI Team is Ready'"
              src="/assets/case-study/operater/operater-team-ready.webp"
              altTr="Operater AI Takımı Hazır Kapanış Ekranı"
              altEn="Operater AI Team Ready Completion Screen"
              browserFrame={false}
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
      {/* 02 — DASHBOARD SECTION (Closed by default, multi-open)                    */}
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
          <h4 className="text-base font-bold text-slate-100">
            {locale === 'tr' ? 'Kara Kutu Yerine Açıklanabilir Yapay Zeka' : 'Explainable AI Over Black-Box Behavior'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Otonom sistemlerde en büyük tehlike kullanıcının arkada ne döndüğünü anlamamasıdır. Dashboard arayüzü, ajanların aldığı her kararı, başvurduğu araçları ve bekleyen onayları tek bir bakışta anlaşılır kılan bir operasyon masası olarak tasarlandı.'
              : 'The greatest pitfall in autonomous systems is opacity. The Operater dashboard was engineered as an operations flight deck where every agent decision, tool invocation, and pending human review is instantly parseable.'}
          </p>
        </div>

        {/* Sub-section: Home as an operational overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '1. Operasyonel Genel Bakış: Home Ekranı' : '1. Operational Overview: Home Dashboard'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '2. Tasarımla Gelen İnsan Denetimi (Human-in-the-Loop)' : '2. Human-in-the-Loop by Design'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Ajanın güven skoru belirlenen eşiğin altına düştüğünde veya dış dünyayı etkileyen bir işlem (e-posta gönderme, veritabanı silme vb.) yapacağı zaman, işlem otomatik olarak insan onayına düşer.'
              : 'Whenever an agent encounters ambiguous intent or initiates an external action (sending customer emails, modifying tickets), the action is suspended in a review drawer until confirmed by a human.'}
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
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '3. Operasyonel Durumların Tasarımı' : '3. Designing Operational States'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Ajan işlemlerinin yaşam döngüsü boyunca her durum (Gönderiliyor, Başarısız, Onaylandı, Reddedildi, Yeniden Deneniyor) ayırt edici renk kodları ve mikro-etiketlerle temsil edildi.'
              : 'Throughout an action lifecycle, states (Sending, Failed, Sent, Rejected, Retrying) are communicated via distinct status indicators and semantic micro-labels.'}
          </p>
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

        {/* Sub-section: Explainability over black-box behavior */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '4. Açıklanabilirlik & Akıl Yürütme İncelemesi' : '4. Explainability & Reasoning Inspection'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Ajanın neden bu kararı aldığını gösteren adım adım düşünce zinciri (Reasoning Trace) ve kaynak döküman alıntıları şeffaf bir akışta sunuldu.'
              : 'Step-by-step reasoning traces and source documentation citations are made accessible directly inside the activity timeline.'}
          </p>
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

        {/* Sub-section: De-emphasizing destructive actions */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '5. Yıkıcı Eylemlerin Güvenli Tasarımı & Ajan Detay Çekmecesi' : '5. De-emphasizing Destructive Actions & Agent Detail Drawer'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Ajan durdurma, veri tabanı sıfırlama veya anahtarları geçersiz kılma gibi geri dönülemez eylemler birincil butonlardan arındırılıp kebab menülere ve iki aşamalı onaylara bağlandı.'
              : 'Irreversible destructive actions (killing agent instances, revoking API keys) were tucked into secondary overflow menus protected by confirmation gates.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8">
              <PlaceholderSlot
                id="DASHBOARD_AGENTS_DRAWER"
                nameTr="Ajan Yönetim & Sağ Çekmece Görünümü"
                nameEn="Agent Management & Right Drawer View"
                aspectRatio="16/10"
                minHeight="260px"
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
      {/* 03 — SETTINGS & GOVERNANCE SECTION (Closed by default, multi-open)         */}
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
          <h4 className="text-base font-bold text-slate-100">
            {locale === 'tr' ? 'Her Şirket İçin Uyarlanabilir Otonomi Seviyeleri' : 'Adaptable Autonomy Tiers for Enterprise'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Her şirketin risk toleransı farklıdır. Kimi ekipler ajanın her adımını onaylamak isterken, kimi ekipler rutin operasyonların tam otonom akmasını tercih eder. Settings & Governance mimarisi, bu spektrumu tek bir anahtar yerine kademeli kurallarla çözdü.'
              : 'Risk tolerance varies across organizations. Some teams require explicit sign-off on every action, while others demand fully hands-off automation. Our settings architecture resolved this through graduated autonomy rules rather than an inflexible global switch.'}
          </p>
        </div>

        {/* Sub-section: Graduated autonomy */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '1. Kademeli Otonomi Modeli (Graduated Autonomy)' : '1. Graduated Autonomy Framework'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Seviye 1 (Yalnızca Taslak Oluşturma), Seviye 2 (İnsan Onaylı İcra) ve Seviye 3 (Tam Otonom Eylem) olmak üzere 3 kademeli otonomi seviyesi tanımlandı.'
              : 'Three distinct autonomy tiers were established: Level 1 (Drafting Only), Level 2 (Human-Gated Execution), and Level 3 (Full Autonomous Operation).'}
          </p>
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
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '2. Kurallar ve Erişim Kontrolü ile Yönetişim' : '2. Governance via Escalation Rules & RBAC'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Hassas müşteri verilerine erişim, bütçe sınırları aşımı veya olağandışı aktivite durumunda otomatik eskalasyon kuralları ve ekip erişim matrisi kurgulandı.'
              : 'Automated escalation policies and role-based access control (RBAC) trigger instant supervisor alerts whenever budget or data sensitivity thresholds are exceeded.'}
          </p>
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
          <h4 className="text-sm font-bold text-slate-100">
            {locale === 'tr' ? '3. Operasyonel Görünürlük & Kullanım Analitiği' : '3. Operational Visibility & Usage Analytics'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {locale === 'tr'
              ? 'Ajanların tükettiği token maliyetleri, araç kullanım sıklıkları ve operasyonel verimlilik raporları şeffaf grafiklerle sunuldu.'
              : 'Token consumption analytics, tool call frequencies, and team time savings were visualized across transparent reporting dashboards.'}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            <div className="lg:col-span-8">
              <PlaceholderSlot
                id="SETTINGS_ANALYTICS_OVERVIEW"
                nameTr="Kurumsal Kullanım & Performans Analitiği"
                nameEn="Enterprise Usage & Performance Analytics"
                aspectRatio="16/10"
                minHeight="280px"
                locale={locale}
              />
            </div>
            <div className="lg:col-span-4">
              <PlaceholderSlot
                id="SETTINGS_USAGE_SUPPORTING"
                nameTr="Maliyet & Token Tüketim Detayı"
                nameEn="Cost & Token Consumption Breakdown"
                aspectRatio="4/3"
                minHeight="200px"
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
      {/* MY PROCESS SECTION                                                        */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-6 border-t border-slate-800">
        <div className="space-y-2">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
            {locale === 'tr' ? 'Çalışma Metodolojisi' : 'Design Methodology'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            {locale === 'tr' ? 'Tasarım Süreci & Yaklaşım' : 'My Product Design Process'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
            {locale === 'tr'
              ? 'Sıfırdan kurulan bir B2B AI SaaS ürününde belirsizlikleri hızla test edilebilir prototiplere dönüştüren 4 aşamalı tasarım süreci.'
              : 'A 4-phase structured product design framework transforming technical AI ambiguities into rapidly testable, production-ready interfaces.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 font-mono text-xs font-bold flex items-center justify-center">
              01
            </div>
            <h4 className="text-sm font-bold text-slate-200">
              {locale === 'tr' ? 'Keşif & Akış Haritalama' : 'Discovery & Flow Mapping'}
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {locale === 'tr'
                ? 'Kullanıcı mental modelleri ve otonom sistem beklentileri analiz edildi. Karmaşık API süreçleri adım adım kullanıcı yolculuklarına dönüştürüldü.'
                : 'Mapped user mental models against autonomous system logic, translating complex API workflows into clean step-by-step user journeys.'}
            </p>
          </div>

          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 font-mono text-xs font-bold flex items-center justify-center">
              02
            </div>
            <h4 className="text-sm font-bold text-slate-200">
              {locale === 'tr' ? 'Tasarım Sistemi Mimarisi' : 'Design System Architecture'}
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {locale === 'tr'
                ? 'Operater.io için koyu temalı, yüksek kontrastlı ve modüler bir UI bileşen kütüphanesi (Figma tokenları, state varyasyonları) inşa edildi.'
                : 'Architected a dark-themed, high-contrast modular UI component library in Figma with comprehensive state variations and design tokens.'}
            </p>
          </div>

          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 font-mono text-xs font-bold flex items-center justify-center">
              03
            </div>
            <h4 className="text-sm font-bold text-slate-200">
              {locale === 'tr' ? 'AI Destekli Hızlı Prototipleme' : 'AI-Assisted Prototyping'}
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {locale === 'tr'
                ? 'Figma tasarımları ve kod prototipleri (React/Tailwind) paralel geliştirilerek mikro-etkileşimler ve geçiş hissiyatı gerçek ortamda test edildi.'
                : 'Combined Figma flows with live interactive code prototypes to validate micro-interactions, state transitions, and responsive behavior.'}
            </p>
          </div>

          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <div className="w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-800/60 text-purple-300 font-mono text-xs font-bold flex items-center justify-center">
              04
            </div>
            <h4 className="text-sm font-bold text-slate-200">
              {locale === 'tr' ? 'Geliştirici İletişimi & Teslim' : 'Developer Handoff & QA'}
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {locale === 'tr'
                ? 'Net token tanımları, kenar durum (edge-case) spesifikasyonları ve canlı tasarım incelemeleri ile sıfır kayıpla prodüksiyona aktarıldı.'
                : 'Delivered precise token specs, edge-case documentation, and proactive design QA ensuring zero-friction frontend implementation.'}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* A PERSONAL MILESTONE SECTION                                              */}
      {/* ========================================================================= */}
      <section className="p-6 bg-gradient-to-br from-[#0F172A] to-[#1E1B4B]/30 border border-purple-900/40 rounded-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-purple-900/90 border border-purple-700/60 text-purple-300 text-xs flex items-center justify-center font-bold">
            ★
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">
            {locale === 'tr' ? 'Kişisel Bir Dönüm Noktası' : 'A Personal Milestone'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {locale === 'tr'
            ? 'Operater.io, mevcut bir tasarım kılavuzu veya hazır şablon olmadan, 0’dan 1’e karmaşık bir B2B yapay zeka operasyon platformunun tüm tasarım vizyonunu ve sistematiğini tek başıma şekillendirdiğim en kapsamlı projelerden biri oldu. Tasarımın yalnızca estetik bir katman değil; yapay zeka gibi soyut bir teknolojiyi somut, güvenilir ve vazgeçilmez bir iş aracına dönüştüren ana omurga olduğunu bir kez daha kanıtladı.'
            : 'Operater.io stands as one of the most comprehensive milestones in my career: establishing the entire design vision, UI architecture, and component library from 0 to 1 without any pre-existing guidelines. It reinforced my core philosophy that design is not mere visual polish, but the foundational bridge turning ambiguous AI capabilities into indispensable, trustworthy enterprise software.'}
        </p>
      </section>

      {/* ========================================================================= */}
      {/* OUTCOME SECTION (Grounded per refinement 1)                               */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-6 border-t border-slate-800">
        <div className="space-y-2">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
            {locale === 'tr' ? 'Sonuçlar & Çıktılar' : 'Deliverables & Outcomes'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
            {locale === 'tr' ? 'Projenin Somut Çıktıları & Sağladığı Değer' : 'Tangible Project Scope & Delivered Impact'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Shipped Product Scope */}
          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="text-purple-400">📦</span>
              <span>{locale === 'tr' ? 'Üretilen & Yayına Alınan Ürün Kapsamı' : 'Shipped Product Scope'}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? '6 adımlı rehberli Onboarding ve araç yetkilendirme akışı' : '6-step guided onboarding & tool integration workflow'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Canlı ajan akışı, HITL onay çekmecesi ve Home komut paneli' : 'Live agent stream, HITL review drawer, and Home command deck'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? '3 kademeli otonomi, eskalasyon kuralları ve kullanım analitiği panelleri' : '3-tier autonomy settings, escalation rules, and analytics'}</span>
              </li>
            </ul>
          </div>

          {/* Design System Foundation */}
          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="text-purple-400">🎨</span>
              <span>{locale === 'tr' ? 'Tasarım Sistemi Temeli' : 'Design System Foundation'}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Koyu temalı, erişilebilir renk ve tipografi token hiyerarşisi' : 'Dark-mode, accessible color and typography token hierarchy'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Durum bildirimleri, butonlar, modallar ve kartlar için tam durum matrisi' : 'Comprehensive component state matrix for badges, modals, cards'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Figma - Kod uyumlu sıfır sürtünmeli bileşen seti' : 'Figma-to-Code aligned component specifications'}</span>
              </li>
            </ul>
          </div>

          {/* Key UX/Product Outcomes */}
          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="text-purple-400">⚡</span>
              <span>{locale === 'tr' ? 'Temel UX & Ürün Çıktıları' : 'Key UX & Product Outcomes'}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Şeffaf izin gösterimi ile üçüncü taraf araç entegrasyonu sürtünmesiz kılındı' : 'Transparent scope authorization minimized integration friction'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Akıl yürütme izleri (reasoning traces) ile kara kutu güvensizliği aşıldı' : 'Reasoning traces replaced black-box opacity with clear causality'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Kademeli otonomi ile kurumsal risk endişeleri adreslendi' : 'Graduated autonomy systematically resolved enterprise risk concerns'}</span>
              </li>
            </ul>
          </div>

          {/* What the Work Enabled for the Team */}
          <div className="p-4 bg-[#0F172A] border border-slate-800 rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <span className="text-purple-400">🚀</span>
              <span>{locale === 'tr' ? 'Ekipler İçin Sağlanan Yetkinlikler' : 'What the Work Enabled for the Team'}</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Mühendislik ekibinin yeni ajan ve araçları dakikalar içinde arayüze ekleyebilmesi' : 'Engineers can ship new agent capabilities within standardized UI shells'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Yatırımcı ve erken kullanıcı görüşmelerinde tutarlı, kurumsal bir ürün algısı' : 'Solidified early enterprise credibility during demo and pilot cycles'}</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-purple-400">•</span>
                <span>{locale === 'tr' ? 'Gelecek özellikler için ölçeklenebilir, tutarlı tasarım omurgası' : 'A scalable, consistent design backbone ready for future platform expansion'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CASE CTA SECTION                                                          */}
      {/* ========================================================================= */}
      <footer className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          <div className="font-semibold text-slate-200">Operater.io Case Study</div>
          <div>Görkem Berk Gündoğdu · UI/UX Designer</div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://operater.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm no-underline flex items-center gap-1.5"
          >
            <span>{locale === 'tr' ? 'Canlı Platformu Keşfet' : 'Explore Live Platform'}</span>
            <span>↗</span>
          </a>
        </div>
      </footer>
    </article>
  );
};
