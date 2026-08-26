import React, { useState } from 'react';
import { HeroPair } from './primitives/HeroPair';
import { FeatureVisual } from './primitives/FeatureVisual';
import { AnnotatedVisual } from './primitives/AnnotatedVisual';
import { DetailCrop } from './primitives/DetailCrop';
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
  // Multi-open state: 01 Onboarding and 02 Dashboard open by default
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['onboarding', 'dashboard']));

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
      {/* PROJECT COVER / HERO (Preserved)                                          */}
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
            href="https://www.figma.com/design/8LAlpHDK0yGPMjdqozYM1m/Operater-Flow?node-id=0-1&t=Ok4ktlITx1lwaocB-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-xs font-bold font-display transition-all shadow-md hover:shadow-purple-600/30 no-underline"
          >
            <span>{locale === 'tr' ? 'Figma Tasarımlarını İncele' : 'View Figma Designs'}</span>
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
      {/* 01 — ONBOARDING SECTION (Frozen / Preserved)                               */}
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
        {/* 1. OPENING STATEMENT */}
        <EditorialStatement
          quoteTr="Otonomiden önce güven gelir."
          quoteEn="Before autonomy comes trust."
          subtextTr="Otonom ajanlar şirket verilerine ve kullanılan araçlara doğrudan erişiyor. Bu yüzden onboarding'deki ilk problem kullanıcıyı mümkün olduğunca hızlı ilerletmek değil, neye erişildiğini ve kontrolün kimde olduğunu her adımda anlaşılır kılmaktı."
          subtextEn="Autonomous agents access company data and core tools directly. Therefore, the primary challenge in onboarding was not pushing users through as fast as possible, but making data access and user control transparent at every step."
          locale={locale}
        />

        {/* ------------------------------------------------------------------------- */}
        {/* 2. EMAIL VERIFICATION / TRANSITION                                        */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Column: Narrative */}
            <div className="md:col-span-6 space-y-3">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                {locale === 'tr' ? 'ADIM 01 · GEÇİŞ KATMANI' : 'STEP 01 · TRANSITIONAL STEP'}
              </span>
              <h4 className="text-lg sm:text-xl font-display font-bold text-slate-100">
                {locale === 'tr' ? 'Hesap Açılışından Ürün Kurulumuna Kesintisiz Geçiş' : 'A Frictionless Bridge into Product Setup'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                {locale === 'tr'
                  ? 'Kayıt tamamlandıktan sonra kullanıcıyı uzun bir kurulum formuna göndermek yerine araya yalnızca e-posta doğrulamasını koydum. Altı haneli kod ekranı hem hesabı güvenceye alıyor hem de kayıt ile şirket kurulumu arasında kısa ve anlaşılır bir geçiş yaratıyor.'
                  : 'Rather than routing users into a long setup form immediately after signup, I placed only email verification in between. The 6-digit code screen secures the account while creating a brief, focused transition into company onboarding.'}
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
                badgeEn="Transitional Step"
                captionTr="6 haneli doğrulama, kayıt ile şirket kurulumu arasındaki tek ara adım."
                captionEn="6-digit verification: the single focused step between signup and company onboarding."
                maxWidth="max-w-xs"
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 3. COMPANY CONTEXT                                                        */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <EditorialStatement
            quoteTr="Aksiyondan önce bağlam."
            quoteEn="Context before action."
            subtextTr="Şirket bilgileri yalnızca profil oluşturmak için toplanmıyor. Kullanıcının girdiği bağlam, ajanların şirketi nasıl anlayacağını ve sonraki aksiyonlarını doğrudan etkiliyor. Bu ilişkiyi form doldurulurken görünür hale getirdim."
            subtextEn="Company data is not collected merely for profile creation. The context provided directly shapes how agents understand the business and take action. I made this causal relationship visible as the form is completed."
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
            captionTr="Şirket bilgisi girildikçe ajan bağlamının nasıl oluşacağı eş zamanlı gösteriliyor."
            captionEn="Live preview demonstrating how agent context is generated in real time as company details are input."
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
                badgeTr="Canlı Önizleme"
                badgeEn="Live Preview"
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
                  ? 'Kullanıcı şirketini tanımlarken sağ taraftaki önizleme aynı bilgiyi ajanın göreceği bağlama dönüştürüyor. Böylece girilen bilginin sistemde nereye gittiği daha kurulum sırasında görülebiliyor.'
                  : 'As users define their company, the live preview translates that information into the context agents will see. This allows users to understand where their input lands in the system during initial setup.'}
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 4. ENABLE AGENTS                                                          */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              {locale === 'tr' ? 'ADIM 02 · AJAN SEÇİMİ' : 'STEP 02 · AGENT SELECTION'}
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'İlk Ajanları Etkinleştirmek (Enable Agents)' : 'Enabling the First AI Agents'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Kullanıcı burada yalnızca bir ajan seçmiyor. Her kart, ajanın hangi işi üstlendiğini, hangi araçlara ihtiyaç duyduğunu ve mevcut durumunu aynı yüzeyde gösteriyor. Böylece seçim, isim veya kategori yerine ajanın gerçek çalışma alanı üzerinden yapılabiliyor.'
                : 'Users are not merely picking an agent here. Each card surfaces what work the agent owns, what tools it requires, and its current status on a single canvas. Selection happens through operational scope rather than abstract names.'}
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
                  {locale === 'tr' ? 'Görev' : 'Mission'}
                </h5>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Ajanın üstlendiği iş ve üreteceği çıktı.'
                  : 'The operational workflow owned by the agent and its expected output.'}
              </p>
            </div>

            <div className="p-4 bg-[#0F172A]/80 border border-slate-800 rounded-lg space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h5 className="font-display font-bold text-xs sm:text-sm text-slate-200">
                  {locale === 'tr' ? 'Gerekli Araçlar' : 'Required Tools'}
                </h5>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Çalışabilmesi için bağlanması gereken veri kaynakları.'
                  : 'The data sources and integrations required for execution.'}
              </p>
            </div>

            <div className="p-4 bg-[#0F172A]/80 border border-slate-800 rounded-lg space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h5 className="font-display font-bold text-xs sm:text-sm text-slate-200">
                  {locale === 'tr' ? 'Durum' : 'Status'}
                </h5>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Ajanın kullanıma hazır, hazırlanıyor veya devre dışı olduğunu gösteren durum bilgisi.'
                  : 'Status indicators showing ready, provisioning, or disabled states.'}
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 5. WORKSPACE-SCOPED CONNECTION                                            */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <EditorialStatement
            quoteTr="Bir kez bağla. Her yerde kullan."
            quoteEn="Connect once. Reuse everywhere."
            subtextTr="Entegrasyonları ajan bazında tekrar tekrar bağlatmak yerine çalışma alanı seviyesinde ele aldım. Slack veya HubSpot bir kez bağlandığında, aynı araca ihtiyaç duyan diğer ajanlar mevcut bağlantıyı yeniden kullanabiliyor."
            subtextEn="Rather than prompting tool connections repeatedly per agent, I architected integrations at the workspace level. Once Slack or HubSpot is connected, any authorized agent requiring that tool reuses the existing credential."
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
        {/* 6. PERMISSION TRANSPARENCY                                                */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              {locale === 'tr' ? 'ADIM 03 · İZİN ŞEFFAFLIĞI' : 'STEP 03 · PERMISSION TRANSPARENCY'}
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Bağlanmadan Önce Neye İzin Verildiği Görülmeli' : 'Surfacing Permission Scopes Before Connection'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Üçüncü taraf bağlantılarında yalnızca ‘Connect’ demek yeterli değildi. Kullanıcıya Operater\'ın hangi verilere erişeceğini ve hangi aksiyonları gerçekleştirebileceğini yetkilendirmeden önce açıkça göstermeyi tercih ettim.'
                : 'In third-party integrations, a simple ‘Connect’ button was insufficient. I chose to explicitly surface what data Operater will access and what actions it can perform before users grant authorization.'}
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

          {/* Editorial Punctuation Statement */}
          <div className="pt-4">
            <div className="border-l-2 border-purple-500 pl-4 py-1">
              <p className="text-sm sm:text-base md:text-lg font-display font-bold text-slate-200 leading-snug">
                “{locale === 'tr'
                  ? 'Güven, bağlantı kurulduktan sonra açıklanan bir detay değil; bağlantının ön koşulu.'
                  : 'Trust is not an afterthought explained after connection; it is the prerequisite for connecting.'}”
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 7. REBUILD THE FINAL ONBOARDING NARRATIVE (Transition to Operations)       */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              {locale === 'tr' ? 'ADIM 04 · OPERASYONA GEÇİŞ' : 'STEP 04 · TRANSITION TO OPERATIONS'}
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Kurulum Bitti. Peki Şimdi Ne Olacak?' : 'Setup Complete. What Happens Next?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Araçlar bağlandı ve ajanlar hazır. Ancak teknik kurulumun tamamlanması, kullanıcının ürünü kullanmaya hazır olduğu anlamına gelmiyor. Dashboard\'a geçmeden önce tasarladığım son ekran, kurulan sistemin nasıl çalışacağını üç basit adımda yeniden özetliyor.'
                : 'Tools are wired up and agents are ready. But completing technical setup does not automatically mean the user understands what to do next. The final screen I designed before the dashboard summarizes how the system will work in three simple steps.'}
            </p>
          </div>

          {/* Visual Progression: Connection Success -> Team Ready */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center pt-2">
            <ArtifactFrame
              src="/assets/case-study/operater/crop-hubspot-connected.webp"
              alt="HubSpot Bağlantı Başarısı Onay Ekranı"
              titleTr="Bağlantı Başarılı"
              titleEn="Connection Verified"
              badgeTr="Tamamlandı"
              badgeEn="Verified"
              captionTr="Bağlantının yalnızca başarılı olduğunu değil, artık hangi ajanlar tarafından kullanılabileceğini de doğruluyor."
              captionEn="Verifies not only a successful handshake, but explicitly confirms which agents are now empowered to use it."
              maxWidth="max-w-sm"
              locale={locale}
            />
            <ArtifactFrame
              src="/assets/case-study/operater/crop-team-ready.webp"
              alt="Operater AI Takımı Hazır Kapanış Ekranı"
              titleTr="AI Takımı Hazır"
              titleEn="AI Team Ready"
              badgeTr="Hazır"
              badgeEn="Ready"
              captionTr="Kurulumun sonucunu çalışma alanı, ajan ve bağlı araç sayısıyla somutlaştırıyor."
              captionEn="Materializes setup outcomes into concrete counts: 1 workspace, active agents, and connected tools."
              maxWidth="max-w-sm"
              locale={locale}
            />
          </div>

          {/* 8. STRENGTHEN THE “HI [NAME]” SCREEN */}
          <div className="pt-8 border-t border-slate-800/60 space-y-4">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                {locale === 'tr' ? 'DASHBOARD ÖNCESİ SON EKRAN' : 'FINAL PRE-DASHBOARD SCREEN'}
              </span>
              <h5 className="text-lg sm:text-xl font-display font-bold text-slate-100">
                {locale === 'tr' ? 'Teknik Kurulumdan İlk Operasyona' : 'From Technical Setup to First Operation'}
              </h5>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
                {locale === 'tr'
                  ? 'Kullanıcıyı başarı ekranından doğrudan yoğun bir Dashboard\'a göndermek yerine, karşısına bundan sonra ürünün nasıl çalışacağını anlatan basit bir mental model çıkıyor.'
                  : 'Rather than dropping users from a success screen straight into a dense dashboard, this screen provides a clear mental model of how the product will function.'}
              </p>
            </div>

            {/* Prominent Launchpad Product Frame */}
            <ProductFrame
              src="/assets/case-study/operater/operater-first-teammate-launchpad.webp"
              alt="Operater İlk AI Takım Arkadaşı Başlangıç Masası"
              captionTr="Kullanıcıyı karşılayan ve doğrudan canlı operasyon merkezine bağlayan 3 adımlı başlangıç ekranı."
              captionEn="The pivotal 3-step launchpad welcoming founders and transitioning them directly into live operations."
              showMinimalBar={true}
              locale={locale}
            />

            {/* Lightweight Monospace / Editorial Annotations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-[#0F172A]/70 border border-slate-800/80 rounded-lg space-y-1">
                <span className="font-mono text-[11px] font-bold text-purple-400 block">
                  01 · Connect Your Tools
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {locale === 'tr'
                    ? 'Ajanların çalışacağı veri kaynaklarını belirle.'
                    : 'Designate the data sources where agents will operate.'}
                </p>
              </div>

              <div className="p-3 bg-[#0F172A]/70 border border-slate-800/80 rounded-lg space-y-1">
                <span className="font-mono text-[11px] font-bold text-purple-400 block">
                  02 · Enable AI Agents
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {locale === 'tr'
                    ? 'Bu araçların üzerinde çalışacak ajanları etkinleştir.'
                    : 'Enable the specific agents working across those tools.'}
                </p>
              </div>

              <div className="p-3 bg-[#0F172A]/70 border border-slate-800/80 rounded-lg space-y-1">
                <span className="font-mono text-[11px] font-bold text-purple-400 block">
                  03 · See It Work
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {locale === 'tr'
                    ? 'Ajanların ürettiği işleri ve sinyalleri operasyon ekranından takip et.'
                    : 'Track generated signals and tasks directly from the operations desk.'}
                </p>
              </div>
            </div>

            {/* Editorial Closing Statement */}
            <div className="pt-6">
              <blockquote className="text-base sm:text-lg md:text-xl font-display font-bold text-slate-100 leading-snug pl-4 border-l-2 border-purple-500">
                “{locale === 'tr'
                  ? 'Onboarding benim için kurulum tamamlandığında değil, kullanıcı bundan sonra ne olacağını bildiğinde bitiyor.'
                  : 'For me, onboarding does not conclude when setup finishes, but when the user clearly understands what happens next.'}”
              </blockquote>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 9. DESIGN PROCESS TAKEAWAYS (Replaced "Düşünce Yapımda Ne Değişti?")       */}
        {/* ------------------------------------------------------------------------- */}
        <div className="pt-8 border-t border-slate-800/80 space-y-5">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              {locale === 'tr' ? 'TASARIM SÜRECİNDEN ÇIKARDIĞIM' : 'DESIGN TAKEAWAYS'}
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Ekranlardan durumlara, durumlardan sisteme.' : 'From screens to states, from states to systems.'}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
            {locale === 'tr'
              ? 'İlk başta problem tek tek onboarding ekranlarını çözmek gibi görünüyordu. Akış büyüdükçe tasarım kararlarını değiştiren sorular ekranların arasında ortaya çıkmaya başladı.'
              : 'Initially, the challenge seemed to be solving individual onboarding screens. As the workflow expanded, critical questions began emerging in between the screens.'}
          </p>

          {/* Visually Distinguished Questions (Clean minimal grid, no heavy cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
            <div className="px-3.5 py-2.5 bg-[#0F172A]/80 border-l-2 border-purple-500 rounded-r-lg text-xs font-mono text-slate-200">
              “{locale === 'tr' ? 'Bağlantı başarısız olursa ne olur?' : 'What happens if a connection fails?'}”
            </div>
            <div className="px-3.5 py-2.5 bg-[#0F172A]/80 border-l-2 border-purple-500 rounded-r-lg text-xs font-mono text-slate-200">
              “{locale === 'tr' ? 'Bir ajan gerekli izne sahip değilse?' : 'What if an agent lacks required scopes?'}”
            </div>
            <div className="px-3.5 py-2.5 bg-[#0F172A]/80 border-l-2 border-purple-500 rounded-r-lg text-xs font-mono text-slate-200">
              “{locale === 'tr' ? 'İnsan onayı gerekiyorsa?' : 'What if human review is required?'}”
            </div>
            <div className="px-3.5 py-2.5 bg-[#0F172A]/80 border-l-2 border-purple-500 rounded-r-lg text-xs font-mono text-slate-200">
              “{locale === 'tr' ? 'İkinci bir ajan aynı bağlantıyı kullanacaksa?' : 'What if a second agent shares that connection?'}”
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
            {locale === 'tr'
              ? 'Bu sorularla birlikte odağım tekil ekranlardan; durumlara, izinlere ve ürün genelinde tekrar kullanılabilecek davranış kurallarına kaydı.'
              : 'These questions shifted my focus from isolated canvases to states, permissions, and reusable interaction rules across the product.'}
          </p>

          {/* Monospace Progression */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0F172A] border border-slate-800 rounded-md font-mono text-[11px] text-purple-300">
              <span>SCREEN</span>
              <span className="text-slate-500">→</span>
              <span>FLOW</span>
              <span className="text-slate-500">→</span>
              <span>STATE</span>
              <span className="text-slate-500">→</span>
              <span>SYSTEM</span>
            </div>
          </div>
        </div>
      </CaseAccordionSection>

      {/* ========================================================================= */}
      {/* 02 — DASHBOARD SECTION (Art-Directed Redesign)                            */}
      {/* ========================================================================= */}
      <CaseAccordionSection
        id="dashboard"
        numberPrefix="02"
        titleTr="Dashboard: Çalışan Ajanları Görünür Kılmak"
        titleEn="Dashboard: Making Working Agents Visible"
        subtitleTr="Birden fazla yapay zeka ajanının eş zamanlı çalıştığı bir sistemde dikkat, onay, durum ve izlenebilirlik hiyerarşisi kurmak."
        subtitleEn="Establishing attention, review, state, and traceability hierarchies in an ecosystem where multiple autonomous agents operate simultaneously."
        isOpen={openSections.has('dashboard')}
        onToggle={() => toggleSection('dashboard')}
        locale={locale}
      >
        {/* Section Opening Editorial Lead */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-100 tracking-tight">
            {locale === 'tr' ? 'Çalışan ajanları görünür kılmak.' : 'Making working agents visible.'}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-sans leading-relaxed max-w-4xl">
            {locale === 'tr'
              ? 'Birden fazla AI agent aynı anda çalışırken yalnızca sonuçları göstermek yeterli değildi. Kullanıcının hangi işin devam ettiğini, neyin tamamlandığını, neyin başarısız olduğunu ve hangi noktada kendisinin devreye girmesi gerektiğini anlayabileceği ortak bir durum dili gerekiyordu. Dashboard\'u bu yüzden yalnızca bir overview ekranı olarak değil, sistemin o anda ne yaptığını okunabilir hale getiren operasyon katmanı olarak ele aldım.'
              : 'When multiple AI agents work in parallel, merely surfacing outputs is insufficient. Users require a cohesive operational vocabulary to parse ongoing tasks, completed milestones, system failures, and the exact moments requiring human intervention. I treated the dashboard not as a passive overview, but as an active operational layer making real-time agent execution readable.'}
          </p>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02A — OPERATIONS OVERVIEW                                                 */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              OPERATIONS OVERVIEW
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Önce: Şu anda ne oluyor?' : 'First: What is happening right now?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Home ekranında farklı bilgi türlerini aynı ağırlıkta göstermek yerine, kullanıcının önce dikkat gerektiren işleri, ardından sistem aktivitesini ve çalışan ajanları okuyabileceği bir hiyerarşi kurdum.'
                : 'Rather than displaying disparate information streams with equal visual weight, I engineered a structured hierarchy allowing users to absorb critical attention items first, followed by system telemetry and agent fleet states.'}
            </p>
          </div>

          {/* Full-Width Home Dashboard Screen */}
          <ProductFrame
            src="/assets/case-study/operater/operater-dashboard-home.webp"
            alt="Operater.io Ana Operasyon Masası (Home Overview)"
            captionTr="Home ekranı: En üstte dikkat gerektiren 4 görev (Needs You), öneriler (Suggestions) ve ajan bazlı onay kuyruğu hiyerarşisi."
            captionEn="Home flight deck: Prioritizing 'Needs You' blockers upfront, operational suggestions, and agent review queues."
            showMinimalBar={true}
            locale={locale}
          />

          {/* Editorial Index / Legend */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 bg-[#0F172A]/50 border-l-2 border-purple-500/80 rounded-r-lg space-y-1">
              <span className="font-mono text-[11px] font-bold text-purple-400 block tracking-wider">
                01 / ATTENTION
              </span>
              <div className="font-display font-semibold text-xs text-slate-200">
                Items to Review
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'İnsan kararı ve anında dikkat gerektiren işler.'
                  : 'Human decisions and attention-required work.'}
              </p>
            </div>

            <div className="p-3 bg-[#0F172A]/50 border-l-2 border-purple-500/80 rounded-r-lg space-y-1">
              <span className="font-mono text-[11px] font-bold text-purple-400 block tracking-wider">
                02 / TRACE
              </span>
              <div className="font-display font-semibold text-xs text-slate-200">
                Activity
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Ajanların icra ettiği geçmiş ve güncel olay logları.'
                  : 'Recent and historical work performed by agents.'}
              </p>
            </div>

            <div className="p-3 bg-[#0F172A]/50 border-l-2 border-purple-500/80 rounded-r-lg space-y-1">
              <span className="font-mono text-[11px] font-bold text-purple-400 block tracking-wider">
                03 / CONTROL
              </span>
              <div className="font-display font-semibold text-xs text-slate-200">
                Agents
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                {locale === 'tr'
                  ? 'Çalışan ajan ekibinin anlık durumu ve yönetimi.'
                  : 'Current state and management of the agent team.'}
              </p>
            </div>
          </div>

          {/* Intentional Editorial Pull Quote */}
          <div className="pt-4">
            <div className="border-l-2 border-purple-500 pl-4 py-2 space-y-1">
              <div className="font-mono text-xs text-purple-400 uppercase tracking-widest font-bold">
                NOT EVERYTHING NEEDS YOUR ATTENTION.
              </div>
              <div className="font-display font-bold text-slate-200 text-sm sm:text-base">
                {locale === 'tr'
                  ? 'Ama neyin gerektirdiği hemen anlaşılmalı.'
                  : 'But what does need attention should be obvious.'}
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02B — ITEMS TO REVIEW / HUMAN DECISION LAYER                              */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              HUMAN DECISION LAYER
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Ajanın durduğu yer, insanın başladığı yer.' : 'Where the agent stops, the human steps in.'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Bazı aksiyonlar ajanın kendi başına ilerlemesi için uygunken bazıları insan kararı gerektiriyor. Items to Review alanını bu ayrımın görünür olduğu yer olarak tasarladım. Kullanıcı bütün agent activity\'yi takip etmek yerine yalnızca karar vermesi gereken işleri önünde buluyor.'
                : 'While routine tasks proceed autonomously, high-stake actions mandate explicit human sign-off. I designed Items to Review as the dedicated surface where this threshold is made visible. Instead of parsing endless agent telemetry, users encounter only tasks requiring decisive human judgment.'}
            </p>
          </div>

          {/* Master Screen + Large Overlapping Review Drawer Composition */}
          <div className="space-y-4">
            <ProductFrame
              src="/assets/case-study/operater/operater-items-review-main.webp"
              alt="Operater Items to Review Ana İnceleme Listesi ve Çekmece Görünümü"
              captionTr="Items to Review: Sol listede bekleyen onaylar, sağda Maria Chen için hazırlanan detaylı e-posta taslak inceleme çekmecesi."
              captionEn="Items to Review: Action item queue on the left, paired with the granular email draft review drawer on the right."
              showMinimalBar={true}
              locale={locale}
            />

            {/* Focused Crop of the Review Drawer Artifact with Concrete UI Annotations */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
              <div className="lg:col-span-7">
                <ArtifactFrame
                  src="/assets/case-study/operater/crop-review-drawer.webp"
                  alt="Items to Review Sağ İnceleme Çekmecesi Detayı"
                  titleTr="İnceleme Çekmecesi (AWAITING YOUR CALL)"
                  titleEn="Review Drawer (AWAITING YOUR CALL)"
                  badgeTr="İnsan Onayı"
                  badgeEn="Human Gate"
                  maxWidth="max-w-md"
                  locale={locale}
                />
              </div>

              {/* Verified UI Element Annotations */}
              <div className="lg:col-span-5 space-y-3 font-sans text-xs">
                <div className="space-y-1 border-b border-slate-800 pb-2">
                  <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider block">
                    {locale === 'tr' ? 'Sorumlu Ajan' : 'Responsible Agent'}
                  </span>
                  <p className="text-slate-300">
                    {locale === 'tr'
                      ? 'Outreach Agent (12 dk önce taslak oluşturuldu)'
                      : 'Outreach Agent (Drafted 12m ago)'}
                  </p>
                </div>

                <div className="space-y-1 border-b border-slate-800 pb-2">
                  <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider block">
                    {locale === 'tr' ? 'Karar Gerekçesi (Why this draft)' : 'Reasoning Context'}
                  </span>
                  <p className="text-slate-300">
                    {locale === 'tr'
                      ? 'ICP match (%80+), Seniority (VP), 3-günlük temas kuralı ve şirket tonu.'
                      : 'ICP match, domain seniority, 3-day spacing rule, brand voice alignment.'}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider block">
                    {locale === 'tr' ? 'İnsan Aksiyonları' : 'Human Actions'}
                  </span>
                  <p className="text-slate-300">
                    {locale === 'tr'
                      ? 'Approve and next (Mor), Reject (Kırmızı), Save changes (Gri).'
                      : 'Approve & Next (Purple), Reject (Red), Save Changes (Inline edit).'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subheading & In-Context Decision Reasoning */}
          <div className="space-y-2 pt-4">
            <h5 className="font-display font-bold text-slate-200 text-sm sm:text-base">
              {locale === 'tr' ? 'Bağlamı kaybetmeden karar vermek' : 'Deciding Without Context Loss'}
            </h5>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Bir öğe açıldığında kullanıcıyı başka bir sayfaya taşımak yerine detayları mevcut çalışma alanının üzerinde açtım. Böylece hem işin geldiği bağlam korunuyor hem de inceleme ve karar verme işlemi aynı akış içinde tamamlanabiliyor.'
                : 'Rather than routing users to a separate subpage upon clicking a pending item, I anchored the details within an overlay drawer above the current workspace. This preserves operational context while enabling review, inline adjustments, and decisions in a single seamless flow.'}
            </p>
          </div>

          {/* Editorial Statement */}
          <div className="pt-4">
            <div className="border-l-2 border-purple-500 pl-4 py-2">
              <p className="text-sm sm:text-base md:text-lg font-display font-bold text-slate-200 leading-snug">
                “{locale === 'tr'
                  ? 'Ajan işi yapabilir. Kararın ağırlığı arttığında insan devreye girer.'
                  : 'The agent can do the work. When the decision carries more weight, the human steps in.'}”
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02C — OPERATIONAL STATE SYSTEM                                            */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              STATE SYSTEM
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr'
                ? 'Durum değişince yalnızca renk değişmemeli.'
                : 'A state change should change more than color.'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Bir agent action oluşturulduğu andan tamamlanana kadar tek bir durumda kalmıyor. Bekleyebilir, tamamlanabilir, başarısız olabilir veya geçmişe taşınabilir. Bu yüzden aynı component\'in farklı durumlarda ne söylemesi ve hangi aksiyonları sunması gerektiğini ayrıca tasarladım.'
                : 'An agent action never exists in a static state from initiation to resolution. It transitions across execution queues, completions, rate-limited failures, and archived traces. I engineered each state artifact to explicitly communicate what happened and surface contextual recovery actions.'}
            </p>
          </div>

          {/* Staggered / Editorial 4-State Grid Sequence (Real Product Modal Artifacts) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* 1. SENDING... (Pending) */}
            <div className="space-y-2">
              <ArtifactFrame
                src="/assets/case-study/operater/operater-action-state-sending.webp"
                alt="Operater Aksiyon Durumu: Sending..."
                titleTr="SENDING... (İşlem Sürüyor)"
                titleEn="SENDING... (Pending Execution)"
                badgeTr="Beklemede"
                badgeEn="In Progress"
                locale={locale}
              />
              <p className="text-[11px] font-mono text-slate-400 px-1">
                {locale === 'tr'
                  ? '→ Beklenen süre (~2 sn) ve ilerleme çubuğu ile anlık geri bildirim.'
                  : '→ Expected duration (~2s) and dynamic progress bar providing immediate feedback.'}
              </p>
            </div>

            {/* 2. SENT (Completed) */}
            <div className="space-y-2 sm:mt-6">
              <ArtifactFrame
                src="/assets/case-study/operater/operater-action-state-sent.webp"
                alt="Operater Aksiyon Durumu: Sent at 14:08"
                titleTr="SENT (Başarıyla Tamamlandı)"
                titleEn="SENT (Verified Complete)"
                badgeTr="Tamamlandı"
                badgeEn="Success"
                locale={locale}
              />
              <p className="text-[11px] font-mono text-slate-400 px-1">
                {locale === 'tr'
                  ? '→ Teslim teyidi, açılma zamanı ve sonraki takip adımı (Touch 2 in 3 days).'
                  : '→ Delivery timestamp, open metrics, and scheduled follow-up cadence (Touch 2 in 3 days).'}
              </p>
            </div>

            {/* 3. FAILED (Rate Limit & Safe Recovery) */}
            <div className="space-y-2">
              <ArtifactFrame
                src="/assets/case-study/operater/operater-action-state-failed.webp"
                alt="Operater Aksiyon Durumu: Send Failed (Gmail 429 rate limit)"
                titleTr="FAILED (Hata & Güvenli Kurtarma)"
                titleEn="FAILED (Rate Limit & Safe State)"
                badgeTr="Hata Durumu"
                badgeEn="Error State"
                locale={locale}
              />
              <p className="text-[11px] font-mono text-slate-400 px-1">
                {locale === 'tr'
                  ? '→ Hata nedeni (Gmail 429), otomatik deneme süresi ve CRM veri güvenliği teyidi.'
                  : '→ Explicit error reason (Gmail 429), auto-retry window, and CRM safety confirmation.'}
              </p>
            </div>

            {/* 4. REJECTED / ARCHIVED */}
            <div className="space-y-2 sm:mt-6">
              <ArtifactFrame
                src="/assets/case-study/operater/operater-action-state-rejected.webp"
                alt="Operater Aksiyon Durumu: Rejected & Archived"
                titleTr="REJECTED · ARCHIVED (Red & Öğrenme)"
                titleEn="REJECTED · ARCHIVED (Feedback Loop)"
                badgeTr="Arşivlendi"
                badgeEn="Archived"
                locale={locale}
              />
              <p className="text-[11px] font-mono text-slate-400 px-1">
                {locale === 'tr'
                  ? '→ Reddetme kaydı, HubSpot durumu ve ajana özel geri bildirim notu alanı.'
                  : '→ Rejection logged, CRM state preserved, and optional feedback note input to improve drafts.'}
              </p>
            </div>
          </div>

          {/* Product Design Takeaway Insight */}
          <div className="pt-4">
            <div className="border-l-2 border-purple-500 pl-4 py-2">
              <p className="text-sm sm:text-base md:text-lg font-display font-bold text-slate-200 leading-snug">
                “{locale === 'tr'
                  ? 'State değiştiğinde yalnızca badge değil, kullanıcının yapabileceği şey de değişmeli.'
                  : 'When the state changes, the user\'s available actions should change with it.'}”
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02D — SECTION INFO / CONTEXTUAL HELP (Design Ownership)                    */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                CONTEXT, BEFORE INTERACTION
              </span>
              <span className="px-2 py-0.5 bg-purple-950/80 border border-purple-800/60 rounded text-[9px] font-mono text-purple-300 uppercase">
                {locale === 'tr' ? 'Kendi Önerim' : 'My Initiative'}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr'
                ? 'Kullanıcıya yalnızca ne olduğunu değil, neden orada olduğunu anlatmak.'
                : 'Explain not only what it is, but why it is there.'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Bazı bölümler ürünün iç yapısını bilen ekip için açık olsa da ilk kez kullanan biri için aynı derecede anlaşılır değildi. Bu yüzden brief’te olmamasına rağmen açıklamayı ihtiyaç duyulan yüzeye taşıyan kısa bilgi kartları önerdim.'
                : 'Some areas were obvious to the internal team, but not equally clear to a first-time user. Although they were not part of the original brief, I proposed short contextual info cards that explain the page exactly where the user needs it.'}
            </p>
          </div>

          {/* Real Section Info Cards Cluster */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <ArtifactFrame
              src="/assets/case-study/operater/operater-items-review-modal.webp"
              alt="Items to Review Bilgi Kartı"
              titleTr="Items to Review Bilgisi"
              titleEn="Items to Review Info"
              badgeTr="Bilgi Modalı"
              badgeEn="Context Card"
              captionTr="'Yalnızca engellenen işler burada yaşar' net ayrımı."
              captionEn="'Only blocked items live here' explicit functional boundary."
              locale={locale}
            />

            <ArtifactFrame
              src="/assets/case-study/operater/operater-activity-info-modal.webp"
              alt="Activity Bilgi Kartı"
              titleTr="Activity Bilgisi"
              titleEn="Activity Info"
              badgeTr="Salt Okunur"
              badgeEn="Read-Only"
              captionTr="'Bu sayfa salt okunurdur' karar netliği."
              captionEn="'This page is read-only' operational clarity."
              locale={locale}
            />

            <ArtifactFrame
              src="/assets/case-study/operater/operater-agents-info-modal.webp"
              alt="Agents Bilgi Kartı"
              titleTr="Agents Bilgisi"
              titleEn="Agents Info"
              badgeTr="Ajan Rehberi"
              badgeEn="Agent Guide"
              captionTr="'Dikkat gerektiren ajanlar en üstte listelenir' kuralı."
              captionEn="'Agents that need you are surfaced first' prioritization rule."
              locale={locale}
            />
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02E — ACTIVITY OF AGENTS (Traceability)                                   */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              TRACEABILITY
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Bir sonuçtan geriye doğru yürüyebilmek.' : 'Being able to trace a result backwards.'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Bir aksiyon tamamlandıktan sonra da kullanıcı ‘bunu hangi ajan yaptı?’ veya ‘burada ne oldu?’ diye sorabilir. Activity alanını, ajanların yaptığı işleri geriye dönük okunabilir tutmak için tasarladım.'
                : 'Even after an action is executed, founders and operators need to answer ‘Which agent triggered this?’ or ‘Why was this lead skipped?’. I designed Activity as the retrospective timeline keeping autonomous agent history verifiable.'}
            </p>
          </div>

          {/* Master Activity Screen */}
          <ProductFrame
            src="/assets/case-study/operater/operater-activity-feed-main.webp"
            alt="Operater.io Activity Feed ve Ajan Olay Geçmişi"
            captionTr="Activity Feed: Zaman kazancı özeti, filtreler (Done, Skipped, Failed) ve sağ tarafta Lead Gen karar gerekçesi çekmecesi."
            captionEn="Activity Feed: Time saved telemetry, status filters, and the granular Lead Gen reasoning drawer."
            showMinimalBar={true}
            locale={locale}
          />

          {/* Activity Detail / Reasoning Drawers (Master-Detail Relationship) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <ArtifactFrame
                src="/assets/case-study/operater/operater-activity-skipped-drawer.webp"
                alt="Activity Detay: Atlanan Aday ve Karar Ağacı"
                titleTr="Neden atlandı?"
                titleEn="Why was it skipped?"
                badgeTr="DECISION TREE"
                badgeEn="DECISION TREE"
                captionTr="3-günlük temas kuralı nedeniyle adayın neden atlandığını adım adım gösteren şeffaf karar ağacı."
                captionEn="Transparent 4-step decision tree explaining why a duplicate outreach touch was suppressed."
                locale={locale}
              />
            </div>

            <div>
              <ArtifactFrame
                src="/assets/case-study/operater/operater-activity-reasoning-drawer.webp"
                alt="Activity Detay: Hata Analizi ve Akıl Yürütme İzi"
                titleTr="Neden başarısız oldu?"
                titleEn="Why did it fail?"
                badgeTr="REASONING TRACE"
                badgeEn="REASONING TRACE"
                captionTr="3 deneme sonrası durdurulan e-posta gönderimi ve 'Decide in Items to Review' aksiyon köprüsü."
                captionEn="Gmail rate-limit trace citing exhausted retries and routing to 'Decide in Items to Review'."
                locale={locale}
              />
            </div>
          </div>

          {/* Minimal System Model */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-[#0F172A] border border-slate-800 rounded-md font-mono text-[11px] text-purple-300">
              <span>WHO</span>
              <span className="text-slate-500">→</span>
              <span>WHAT</span>
              <span className="text-slate-500">→</span>
              <span>STATUS</span>
              <span className="text-slate-500">→</span>
              <span>WHEN</span>
            </div>
            <span className="text-xs text-slate-400 font-sans ml-3">
              {locale === 'tr' ? 'Ajan aktivitesini taranabilir kılmak için kullandığım temel bilgi sırası.' : 'This was the information model that needed to look effortless.'}
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02F — AGENTS OVERVIEW (Agent Management)                                  */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                AGENT MANAGEMENT
              </span>
              <span className="text-[10px] font-mono text-slate-500">·</span>
              <span className="text-[10px] font-mono text-purple-300/90 tracking-wider">
                OVERVIEW → RULES → ACTIONS
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Tek tek özellikler değil, çalışan bir ekip.' : 'Not isolated features, but a working team.'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'Agent ekranında odağım yalnızca hangi ajanların aktif olduğunu göstermek değildi. Kullanıcının her ajanın rolünü, durumunu ve gerektiğinde yönetim seçeneklerini anlayabileceği ortak bir model kurmaya çalıştım.'
                : 'On the Agents surface, the objective was not merely listing active toggles. I established a cohesive operational model where users configure an agent\'s mission brief, tune score weights, and govern autonomy tiers.'}
            </p>
          </div>

          {/* Master Agents Overview Screen */}
          <ProductFrame
            src="/assets/case-study/operater/operater-agents-main-overview.webp"
            alt="Operater.io Ajan Yönetim Masası ve Lead Gen Detay Çekmecesi"
            captionTr="Agents Masası: Sol tarafta ajan filosu sağlık durumları, sağ tarafta seçili ajanın genel bakış çekmecesi."
            captionEn="Agents Desk: Agent fleet health indicators on the left, paired with the selected agent's overview drawer on the right."
            showMinimalBar={true}
            locale={locale}
          />

          {/* Granular Agent Configuration Drawers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <ArtifactFrame
                src="/assets/case-study/operater/operater-agent-brief-rules-drawer.webp"
                alt="Ajan Görev Tanımı ve Puan Ağırlıkları Paneli"
                titleTr="Görev Tanımı & Puan Ağırlıkları (Brief & Rules)"
                titleEn="Mission Brief & Score Weights"
                badgeTr="Ajan Kuralları"
                badgeEn="Rules Engine"
                captionTr="ICP eşleşmesi, kıdem ve sinyal gücü kaydırıcıları ile ajanın değerlendirme kriterlerini ayarlama paneli."
                captionEn="Configurable sliders tuning ICP match, seniority, and signal thresholds per agent."
                locale={locale}
              />
            </div>

            <div>
              <ArtifactFrame
                src="/assets/case-study/operater/crop-agent-drawer-overview.webp"
                alt="Ajan Sağ Çekmece Görünümü"
                titleTr="Ajan Durum & Yetki Genel Bakışı"
                titleEn="Agent State & Access Overview"
                badgeTr="Ajan Çekmecesi"
                badgeEn="Agent Drawer"
                captionTr="Ajanın gerçekleştirdiği eylemler, son aktivite zamanı ve anlık aç/kapa anahtarı."
                captionEn="Tracked actions, recency telemetry, and non-destructive pause/resume toggle."
                locale={locale}
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02G — DESTRUCTIVE ACTION DESIGN DECISION (Real Feedback Story)             */}
        {/* ------------------------------------------------------------------------- */}
        <div className="space-y-6 pt-8 border-t border-slate-800/80">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              VISIBLE ≠ EQUALLY IMPORTANT
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr' ? 'Her aksiyon aynı ağırlığı hak etmiyor.' : 'Not every action deserves the same weight.'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
              {locale === 'tr'
                ? 'İlk tasarımda agent üzerinde değişiklik yapma ve silme gibi aksiyonlar ekran üzerinde daha görünürdü. PM feedback\'iyle birlikte özellikle geri döndürülmesi zor aksiyonların ana kullanım akışıyla aynı ağırlıkta olmaması gerektiğini fark ettim. Delete Agent aksiyonunu bunun üzerine kebab menünün içine taşıdım, listenin en altına yerleştirdim ve diğer aksiyonlardan separator ile ayırdım.'
                : 'In initial iterations, administrative actions like renaming and deletion were exposed prominently on the main canvas. Following product feedback, I recognized that irreversible destructive actions should never compete visually with daily operational tasks. I relocated ‘Delete Agent’ inside a secondary kebab menu, pinned it to the bottom, and isolated it behind a clear visual separator.'}
            </p>
          </div>

          {/* Focused Kebab Menu Crop & UX Decision Annotation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <ArtifactFrame
                src="/assets/case-study/operater/operater-agent-kebab-menu-crop.webp"
                alt="Ajan Sağ Tık Kebab Menüsü ve Delete Agent Ayracı"
                titleTr="İkincil Kebab Menü"
                titleEn="Secondary Kebab Menu"
                badgeTr="Yıkıcı Eylem Güvenliği"
                badgeEn="Destructive Safety"
                maxWidth="max-w-xs"
                locale={locale}
              />
            </div>

            <div className="md:col-span-7 space-y-3 font-sans text-xs sm:text-sm text-slate-300">
              <div className="p-4 bg-[#0F172A]/80 border border-slate-800 rounded-lg space-y-2">
                <div className="font-display font-bold text-slate-100 text-sm">
                  {locale === 'tr' ? 'Görünür olmak, aynı önemde olmak demek değil.' : 'Being visible does not mean equally important.'}
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                  <li>{locale === 'tr' ? 'Rutin Eylemler: Duplicate, Rename, Export Config üstte.' : 'Routine Actions: Duplicate, Rename, Export Config at the top.'}</li>
                  <li>{locale === 'tr' ? 'Görsel Ayraç: Kazara tıklamayı önleyen separator çizgisi.' : 'Visual Separator: Clear divider preventing accidental mis-clicks.'}</li>
                  <li>{locale === 'tr' ? 'Yıkıcı Eylem: Kırmızı vurgulu Delete Agent en altta izole edildi.' : 'Destructive Action: Red-accented Delete Agent isolated at the bottom.'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* 02H — SECTION CONCLUSION & PROGRESSION                                    */}
        {/* ------------------------------------------------------------------------- */}
        <div className="pt-8 border-t border-slate-800/80 space-y-5">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              02 / DASHBOARD
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
              {locale === 'tr'
                ? 'Kontrolü sürekli istemek yerine, ne zaman gerekli olduğunu görünür kılmak.'
                : 'Instead of demanding constant control, make it clear when control is needed.'}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
            {locale === 'tr'
              ? 'Dashboard üzerinde çalışırken odağım zamanla ekranın kendisinden, sistemin farklı durumlarda kullanıcıyla nasıl iletişim kurduğuna kaydı. Ajanlar arka planda çalışabilir; fakat ne yaptıkları, hangi durumda oldukları ve ne zaman insan kararına ihtiyaç duydukları görünmez kalmamalı.'
              : 'Working through the dashboard, my focus transitioned from static layouts to orchestrating how the system communicates across operational thresholds. Agents can operate quietly in the background; but what they do, their current state, and the moments requiring human judgment must remain legible.'}
          </p>

          {/* Minimal System Progression */}
          <div className="pt-2">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-[#0F172A] border border-slate-800 rounded-md font-mono text-[11px] text-purple-300">
              <span>AGENT ACTS</span>
              <span className="text-slate-500">→</span>
              <span>STATE CHANGES</span>
              <span className="text-slate-500">→</span>
              <span>SYSTEM SURFACES</span>
              <span className="text-slate-500">→</span>
              <span>HUMAN INTERVENES</span>
            </div>
          </div>

          {/* Section 02 Closing Statement */}
          <div className="pt-4">
            <blockquote className="text-base sm:text-lg md:text-xl font-display font-bold text-slate-100 leading-snug pl-4 border-l-2 border-purple-500">
              “{locale === 'tr' ? 'Otonomi görünmezlik değil.' : 'Autonomy is not invisibility.'}”
            </blockquote>
          </div>
        </div>
      </CaseAccordionSection>

      {/* ========================================================================= */}
      {/* 03 — SETTINGS & GOVERNANCE SECTION (Preserved)                            */}
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
      {/* RETROSPECTIVE (Preserved)                                                 */}
      {/* ========================================================================= */}
      <section className="p-6 sm:p-8 bg-gradient-to-br from-[#0F172A] to-[#1E1B4B]/20 border border-purple-900/40 rounded-2xl space-y-3">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
            RETROSPECTIVE
          </span>
          <h3 className="text-base sm:text-xl font-display font-bold text-slate-100">
            {locale === 'tr'
              ? 'Bu projede rolüm ekran tasarlamanın ötesine geçti.'
              : 'In this project, my role extended beyond designing screens.'}
          </h3>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          <p>
            {locale === 'tr'
              ? 'Operater.io\'ya başladığımda önümde takip edebileceğim hazır bir tasarım sistemi veya tamamlanmış ürün kalıpları yoktu. Onboarding\'den ajan seçimlerine, entegrasyonlardan izin ve durum modellerine kadar birçok yapıyı ürünle birlikte şekillendirdim.'
              : 'When I started Operater.io, there were no pre-existing design systems or established UI patterns to follow. From onboarding to agent catalogs, from integrations to permission and state models, I shaped these systems alongside the product.'}
          </p>
          <p>
            {locale === 'tr' ? (
              <>
                Benim için asıl kazanım, AI ürünlerinde arayüzün yalnızca yapılan işi göstermekten ibaret olmadığını görmek oldu. Kullanıcının ajanın{' '}
                <span className="text-purple-300 font-medium">ne yaptığını, neye eriştiğini ve ne zaman kendisinin devreye girmesi gerektiğini</span>{' '}
                anlayabilmesi tasarım probleminin merkezine yerleşti.
              </>
            ) : (
              <>
                For me, the primary realization was that in AI products, an interface is not merely about showcasing outputs. Helping users understand{' '}
                <span className="text-purple-300 font-medium">what the agent does, what it accesses, and when they need to step in</span>{' '}
                became the true core of the design problem.
              </>
            )}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CASE STUDY CONCLUSION (Layer 3: Next Actions & CTAs)                     */}
      {/* ========================================================================= */}
      <footer className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          <div className="font-display font-bold text-slate-200">Operater.io Case Study</div>
          <div className="font-sans">Görkem Berk Gündoğdu · UI/UX Designer</div>
        </div>

        {/* Action CTAs: Live Product & Figma Designs */}
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
