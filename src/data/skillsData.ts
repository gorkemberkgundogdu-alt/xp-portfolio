/**
 * Skills & Tools Data Model
 * Single source of truth for Desktop XP Skills Window, Mobile Properties Dialog, Semantic SSR HTML, and /llms.txt
 */

export type SkillOrToolCategory = 'skills' | 'tools';

export type SkillSubgroup = 'product-ux' | 'ui-systems';
export type ToolSubgroup = 'design' | 'web' | 'motion' | 'ai-workflow' | 'ship';

export interface EvidenceItem {
  projectTitle: string;
  projectSlug?: string; // e.g. 'operater', 'studio-v1be', 'v1be-saas'
  areaTr?: string;      // e.g. 'Onboarding · Dashboard · Governance'
  areaEn?: string;
  anchor?: string;      // e.g. '#onboarding', '#dashboard', '#settings'
  isCaseStudy?: boolean;// whether it connects to an active case study
}

export interface SkillToolItem {
  id: string;
  category: SkillOrToolCategory;
  subgroupId: SkillSubgroup | ToolSubgroup;
  subgroupNameTr: string;
  subgroupNameEn: string;
  title: string;
  descriptionTr: string;
  descriptionEn: string;
  metadata?: string;
  evidence?: EvidenceItem[];
}

export interface CategoryGroup {
  id: SkillOrToolCategory;
  titleTr: string;
  titleEn: string;
  subgroups: {
    id: SkillSubgroup | ToolSubgroup;
    titleTr: string;
    titleEn: string;
    items: SkillToolItem[];
  }[];
}

export const SKILL_TOOL_ITEMS: SkillToolItem[] = [
  // ==========================================
  // SKILLS — Product & UX
  // ==========================================
  {
    id: 'product-thinking',
    category: 'skills',
    subgroupId: 'product-ux',
    subgroupNameTr: 'Product & UX',
    subgroupNameEn: 'Product & UX',
    title: 'Product Thinking',
    descriptionTr:
      'Bir ekranı tasarlarken yalnızca o ekranı değil, ürünün geri kalanında neyi etkilediğini ve farklı durumlarda nasıl davranması gerektiğini de düşünmeye çalışıyorum.',
    descriptionEn:
      'When designing a screen, I try to think beyond the screen itself: what it affects across the product and how it should behave in different situations.',
    evidence: [
      {
        projectTitle: 'Operater.io',
        projectSlug: 'operater',
        areaTr: 'Onboarding · Dashboard · Governance',
        areaEn: 'Onboarding · Dashboard · Governance',
        anchor: '#onboarding',
        isCaseStudy: true,
      },
    ],
  },
  {
    id: 'user-flows-states',
    category: 'skills',
    subgroupId: 'product-ux',
    subgroupNameTr: 'Product & UX',
    subgroupNameEn: 'Product & UX',
    title: 'User Flows & States',
    descriptionTr:
      'Akışı sadece happy path üzerinden kurmamaya çalışıyorum. Success, failure, pending, permission ve recovery gibi durumları da tasarımın parçası olarak ele alıyorum.',
    descriptionEn:
      'I try not to design around the happy path alone. Success, failure, pending, permission and recovery states are part of the flow too.',
    evidence: [
      {
        projectTitle: 'Operater.io',
        projectSlug: 'operater',
        areaTr: 'Onboarding · Dashboard States',
        areaEn: 'Onboarding · Dashboard States',
        anchor: '#dashboard',
        isCaseStudy: true,
      },
    ],
  },
  {
    id: 'ux-writing',
    category: 'skills',
    subgroupId: 'product-ux',
    subgroupNameTr: 'Product & UX',
    subgroupNameEn: 'Product & UX',
    title: 'UX Writing',
    descriptionTr:
      "Product'ı tamamen kavradıktan sonra, UI ekranlarını tasarlarken metni de tasarımın bir parçası olarak düşünüyor ve kullanıcıya gerekli bilgiyi mümkün olduğunca efektif şekilde aktarmaya çalışıyorum.",
    descriptionEn:
      'Once I fully understand the product, I think about copy as part of the UI and try to communicate the right information to the user as effectively as possible.',
    evidence: [
      {
        projectTitle: 'Operater.io',
        projectSlug: 'operater',
        areaTr: 'Onboarding · Contextual Help',
        areaEn: 'Onboarding · Contextual Help',
        anchor: '#onboarding',
        isCaseStudy: true,
      },
    ],
  },
  {
    id: 'ux-competitor-research',
    category: 'skills',
    subgroupId: 'product-ux',
    subgroupNameTr: 'Product & UX',
    subgroupNameEn: 'Product & UX',
    title: 'UX & Competitor Research',
    descriptionTr:
      "Yeni bir akışa başlamadan önce benzer ürünlerin problemi nasıl çözdüğüne, kullandıkları pattern'lere ve nerelerde ayrıştıklarına bakıyorum.",
    descriptionEn:
      'Before starting a new flow, I look at how similar products solve the problem, the patterns they use and where their approaches differ.',
  },

  // ==========================================
  // SKILLS — UI & Systems
  // ==========================================
  {
    id: 'visual-hierarchy',
    category: 'skills',
    subgroupId: 'ui-systems',
    subgroupNameTr: 'UI & Systems',
    subgroupNameEn: 'UI & Systems',
    title: 'Information & Visual Hierarchy',
    descriptionTr:
      'Bir ekranda her şey aynı anda önemli olamaz. Kullanıcının önce neyi görmesi, sonra neyi anlaması ve nerede aksiyon alması gerektiği UI kararlarımın önemli bir kısmını oluşturuyor.',
    descriptionEn:
      'Not everything on a screen can be important at the same time. A big part of my UI decisions comes down to what the user should notice first, understand next and act on when needed.',
    evidence: [
      {
        projectTitle: 'Operater.io',
        projectSlug: 'operater',
        areaTr: 'Dashboard',
        areaEn: 'Dashboard',
        anchor: '#dashboard',
        isCaseStudy: true,
      },
    ],
  },
  {
    id: 'interface-design',
    category: 'skills',
    subgroupId: 'ui-systems',
    subgroupNameTr: 'UI & Systems',
    subgroupNameEn: 'UI & Systems',
    title: 'Interface Design',
    descriptionTr:
      'Ürün akışını typography, spacing, component ve interaction kararlarıyla kullanılabilir bir arayüze dönüştürdüğüm taraf.',
    descriptionEn:
      'Where I turn product flows into usable interfaces through typography, spacing, components and interaction decisions.',
  },
  {
    id: 'design-systems',
    category: 'skills',
    subgroupId: 'ui-systems',
    subgroupNameTr: 'UI & Systems',
    subgroupNameEn: 'UI & Systems',
    title: 'Design Systems',
    descriptionTr:
      'Ekranları tek tek çözmek yerine component kurallarını oluşturarak ortak bir sistem üzerinden ilerlemeyi tercih ediyorum.',
    descriptionEn:
      'Rather than solving screens one by one, I prefer defining component rules and working from a shared system.',
    evidence: [
      {
        projectTitle: 'Operater.io',
        projectSlug: 'operater',
        areaTr: 'Design System Architecture',
        areaEn: 'Design System Architecture',
        isCaseStudy: true,
      },
    ],
  },
  {
    id: 'responsive-design',
    category: 'skills',
    subgroupId: 'ui-systems',
    subgroupNameTr: 'UI & Systems',
    subgroupNameEn: 'UI & Systems',
    title: 'Responsive Design',
    descriptionTr:
      "Responsive tasarım benim için desktop'ı küçültmek değil. Alan değiştiğinde içeriğin önceliğini, interaction'ı ve gerektiğinde arayüzün kendisini yeniden düşünüyorum.",
    descriptionEn:
      "Responsive design isn't just shrinking desktop for me. When the available space changes, I reconsider content priority, interaction and, when necessary, the interface itself.",
    evidence: [
      {
        projectTitle: 'Studio v1be',
        projectSlug: 'studio-v1be',
        areaTr: 'Davranış Odaklı Responsive Mimari',
        areaEn: 'Behavior-Driven Responsive Architecture',
        anchor: '#responsive',
        isCaseStudy: true,
      },
    ],
  },
  {
    id: 'prototyping',
    category: 'skills',
    subgroupId: 'ui-systems',
    subgroupNameTr: 'UI & Systems',
    subgroupNameEn: 'UI & Systems',
    title: 'Prototyping',
    descriptionTr:
      "Özellikle kritik flow ve interaction'larda ekranların sadece nasıl göründüğünü değil, birbirleriyle nasıl çalıştığını göstermek için prototype kullanıyorum. Bu aynı zamanda interaction ve state davranışlarını developer'a daha açık aktararak handoff sürecini kolaylaştırıyor.",
    descriptionEn:
      'For critical flows and interactions, I use prototypes to show not only how screens look, but how they work together. This also makes handoff easier by communicating interaction and state behavior more clearly to developers.',
    evidence: [
      {
        projectTitle: 'Operater.io',
        projectSlug: 'operater',
        areaTr: 'Interactive Product Flows',
        areaEn: 'Interactive Product Flows',
        isCaseStudy: true,
      },
    ],
  },

  // ==========================================
  // TOOLS & TECHNOLOGIES — Design
  // ==========================================
  {
    id: 'figma',
    category: 'tools',
    subgroupId: 'design',
    subgroupNameTr: 'Design',
    subgroupNameEn: 'Design',
    title: 'Figma',
    descriptionTr:
      "Ürün akışlarından final UI'a, component sistemlerinden prototype'a kadar tasarım tarafındaki ana çalışma alanım.",
    descriptionEn:
      'My main design workspace, from product flows and component systems to final UI and prototypes.',
    evidence: [
      {
        projectTitle: 'Operater.io',
        projectSlug: 'operater',
        areaTr: 'End-to-End Product UI & Design System',
        areaEn: 'End-to-End Product UI & Design System',
        isCaseStudy: true,
      },
    ],
  },

  // ==========================================
  // TOOLS & TECHNOLOGIES — Web
  // ==========================================
  {
    id: 'html',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'HTML',
    descriptionTr:
      "Web tarafında semantic yapıyı kurarken ve tasarımın browser'daki temel iskeletini oluştururken doğrudan kullanıyorum.",
    descriptionEn:
      'I use it directly to build semantic structure and the underlying skeleton of my web interfaces.',
  },
  {
    id: 'css',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'CSS',
    descriptionTr:
      'Layout, responsive davranış ve tasarımdaki görsel detayları browser\'a taşırken en çok çalıştığım katmanlardan biri.',
    descriptionEn:
      'One of the layers I work with most when translating layout, responsive behavior and visual details into the browser.',
  },
  {
    id: 'javascript',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'JavaScript',
    descriptionTr:
      'Arayüzde statik tasarımın ötesine geçen interaction ve davranışları kontrol etmek gerektiğinde kullanıyorum.',
    descriptionEn:
      'I use it when an interface needs behavior and interaction beyond its static design.',
  },
  {
    id: 'typescript',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'TypeScript',
    descriptionTr:
      'Özellikle component tabanlı projelerde implementation büyüdükçe kodu daha kontrollü tutmak için kullanıyorum.',
    descriptionEn:
      'I use it mainly to keep implementation more predictable as component-based projects grow.',
  },
  {
    id: 'react',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'React',
    descriptionTr:
      "State ve interaction'ın daha yoğun olduğu component tabanlı web arayüzlerinde kullanıyorum.",
    descriptionEn:
      'I use it for component-based web interfaces with heavier state and interaction needs.',
  },
  {
    id: 'astro',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'Astro',
    descriptionTr:
      "Özellikle içerik ağırlıklı, hızlı ve SEO tarafı güçlü web projelerini production'a taşırken tercih ettiğim framework.",
    descriptionEn:
      'A framework I reach for when shipping content-heavy, fast websites where SEO also matters.',
    evidence: [
      {
        projectTitle: 'Current Portfolio',
        areaTr: 'XP Desktop & Mobile Properties Web OS',
        areaEn: 'XP Desktop & Mobile Properties Web OS',
      },
      {
        projectTitle: 'Studio v1be',
        projectSlug: 'studio-v1be',
        areaTr: 'Web Mimarisi & Servis Sitesi',
        areaEn: 'Web Architecture & Service Website',
        anchor: '#implementation',
        isCaseStudy: true,
      },
    ],
  },
  {
    id: 'nextjs',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'Next.js',
    descriptionTr:
      'React tarafında daha uygulama odaklı web projelerinde kullandığım framework\'lerden biri.',
    descriptionEn:
      'One of the frameworks I\'ve used for more application-oriented React projects.',
  },
  {
    id: 'tailwindcss',
    category: 'tools',
    subgroupId: 'web',
    subgroupNameTr: 'Web',
    subgroupNameEn: 'Web',
    title: 'Tailwind CSS',
    descriptionTr:
      "UI kurallarını implementation'a hızlı taşımak ve component'ler arasında tutarlılığı korumak için kullanıyorum.",
    descriptionEn:
      'I use it to translate UI rules into implementation quickly while keeping components consistent.',
    evidence: [
      {
        projectTitle: 'Studio v1be',
        projectSlug: 'studio-v1be',
        areaTr: 'Design Token ve Bileşen Sistemi',
        areaEn: 'Design Token & Component System',
        anchor: '#implementation',
        isCaseStudy: true,
      },
    ],
  },

  // ==========================================
  // TOOLS & TECHNOLOGIES — Motion
  // ==========================================
  {
    id: 'gsap',
    category: 'tools',
    subgroupId: 'motion',
    subgroupNameTr: 'Motion',
    subgroupNameEn: 'Motion',
    title: 'GSAP',
    descriptionTr:
      "Scroll ve transition'ın deneyimin önemli bir parçası olduğu web projelerinde daha kontrollü motion üretmek için kullanıyorum.",
    descriptionEn:
      'I use it when scroll and transitions are an important part of the web experience and need more precise motion control.',
    evidence: [
      {
        projectTitle: 'v1be',
        projectSlug: 'v1be-saas',
        areaTr: 'Core Product Visual Direction',
        areaEn: 'Core Product Visual Direction',
        isCaseStudy: false,
      },
    ],
  },
  {
    id: 'framer-motion',
    category: 'tools',
    subgroupId: 'motion',
    subgroupNameTr: 'Motion',
    subgroupNameEn: 'Motion',
    title: 'Framer Motion',
    descriptionTr:
      "React arayüzlerinde component state'leri, geçişler ve interaction feedback'i için kullanıyorum.",
    descriptionEn:
      'I use it for component states, transitions and interaction feedback in React interfaces.',
  },
  {
    id: 'threejs',
    category: 'tools',
    subgroupId: 'motion',
    subgroupNameTr: 'Motion',
    subgroupNameEn: 'Motion',
    title: 'Three.js',
    descriptionTr:
      '3D veya gerçek zamanlı görsel öğelerin arayüzün bir parçası olması gerektiğinde kullandığım taraf.',
    descriptionEn:
      'What I reach for when 3D or real-time visual elements need to become part of the interface.',
  },

  // ==========================================
  // TOOLS & TECHNOLOGIES — AI Workflow
  // ==========================================
  {
    id: 'codex',
    category: 'tools',
    subgroupId: 'ai-workflow',
    subgroupNameTr: 'AI Workflow',
    subgroupNameEn: 'AI Workflow',
    title: 'Codex',
    descriptionTr:
      "Kod tarafında yalnızca çıktı almak için değil; implementation'ı parçalara bölmek, coder ve QA agent'larıyla ilerlemek ve yapılan işi tekrar kontrol ettirmek için kullanıyorum.",
    descriptionEn:
      'I use it beyond code generation: breaking implementation into tasks, working with coder and QA agents, and having completed work checked again.',
  },
  {
    id: 'antigravity',
    category: 'tools',
    subgroupId: 'ai-workflow',
    subgroupNameTr: 'AI Workflow',
    subgroupNameEn: 'AI Workflow',
    title: 'Antigravity',
    descriptionTr:
      "Kod üzerinde çalışırken farklı agent'ları paralel yürüttüğüm ortam. Implementation ve QA dışında gerektiğinde UI/UX, SEO ve GEO tarafını ayrı agent'larla inceletiyorum.",
    descriptionEn:
      'One of the environments where I run different agents in parallel while working on code. Beyond implementation and QA, I also use separate agents for UI/UX, SEO and GEO reviews when needed.',
    metadata: 'Coder · QA · UI/UX · SEO · GEO',
  },

  // ==========================================
  // TOOLS & TECHNOLOGIES — Ship
  // ==========================================
  {
    id: 'cpanel',
    category: 'tools',
    subgroupId: 'ship',
    subgroupNameTr: 'Ship',
    subgroupNameEn: 'Ship',
    title: 'cPanel',
    descriptionTr:
      "Web projelerimi local'de bırakmayıp hosting, domain ve production tarafına kadar kendim götürdüğüm projelerde kullanıyorum.",
    descriptionEn:
      'I use it on projects I take beyond local development through hosting, domain setup and production deployment.',
  },
  {
    id: 'github-actions',
    category: 'tools',
    subgroupId: 'ship',
    subgroupNameTr: 'Ship',
    subgroupNameEn: 'Ship',
    title: 'GitHub Actions',
    descriptionTr:
      "Push'tan production'a giderken check, build, validation ve deploy adımlarını otomatikleştirdiğim projelerde kullanıyorum.",
    descriptionEn:
      'I use it to automate checks, builds, validation and deployment between a push and production.',
  },
];

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'skills',
    titleTr: 'Skills',
    titleEn: 'Skills',
    subgroups: [
      {
        id: 'product-ux',
        titleTr: 'Product & UX',
        titleEn: 'Product & UX',
        items: SKILL_TOOL_ITEMS.filter((i) => i.category === 'skills' && i.subgroupId === 'product-ux'),
      },
      {
        id: 'ui-systems',
        titleTr: 'UI & Systems',
        titleEn: 'UI & Systems',
        items: SKILL_TOOL_ITEMS.filter((i) => i.category === 'skills' && i.subgroupId === 'ui-systems'),
      },
    ],
  },
  {
    id: 'tools',
    titleTr: 'Tools & Technologies',
    titleEn: 'Tools & Technologies',
    subgroups: [
      {
        id: 'design',
        titleTr: 'Design',
        titleEn: 'Design',
        items: SKILL_TOOL_ITEMS.filter((i) => i.category === 'tools' && i.subgroupId === 'design'),
      },
      {
        id: 'web',
        titleTr: 'Web',
        titleEn: 'Web',
        items: SKILL_TOOL_ITEMS.filter((i) => i.category === 'tools' && i.subgroupId === 'web'),
      },
      {
        id: 'motion',
        titleTr: 'Motion',
        titleEn: 'Motion',
        items: SKILL_TOOL_ITEMS.filter((i) => i.category === 'tools' && i.subgroupId === 'motion'),
      },
      {
        id: 'ai-workflow',
        titleTr: 'AI Workflow',
        titleEn: 'AI Workflow',
        items: SKILL_TOOL_ITEMS.filter((i) => i.category === 'tools' && i.subgroupId === 'ai-workflow'),
      },
      {
        id: 'ship',
        titleTr: 'Ship',
        titleEn: 'Ship',
        items: SKILL_TOOL_ITEMS.filter((i) => i.category === 'tools' && i.subgroupId === 'ship'),
      },
    ],
  },
];
