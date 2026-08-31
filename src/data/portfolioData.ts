/**
 * Single Source of Truth Portfolio Data
 * Shared across Desktop XP Windows, Mobile Properties Dialog, Semantic SSR HTML, JSON-LD Schema, and /llms.txt
 */

export interface ProjectItem {
  id: string;
  slug: string;
  category: 'app-design' | 'web-design';
  categoryTitleTr: string;
  categoryTitleEn: string;
  titleTr: string;
  titleEn: string;
  badgeTr: string;
  badgeEn: string;
  date: string;
  summaryTr: string;
  summaryEn: string;
  descriptionTr: string;
  descriptionEn: string;
  roleTr: string;
  roleEn: string;
  tech: string[];
  highlightsTr?: string[];
  highlightsEn?: string[];
  liveUrl?: string;
  figmaUrl?: string;
}

export interface ArticleItem {
  id: string;
  slugTr: string;
  slugEn: string;
  titleTr: string;
  titleEn: string;
  summaryTr: string;
  summaryEn: string;
  date: string;
  readTimeTr: string;
  readTimeEn: string;
  contentTr: string[];
  contentEn: string[];
}

export interface SkillCategory {
  id: string;
  nameTr: string;
  nameEn: string;
  skills: string[];
}

export * from './skillsData';

export interface AboutSection {
  id: string;
  titleTr: string;
  titleEn: string;
  contentTr: string[];
  contentEn: string[];
}

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    id: '01',
    titleTr: '01 — Tasarıma Nasıl Başladım',
    titleEn: '01 — How I Started Designing',
    contentTr: [
      'Hayata geçirmek istediğim bir startup vardı ve onun dijital varlığını oluşturmam gerekiyordu. Web sitesi tasarlamaya başladığımda UI/UX diye başlı başına bir disiplin olduğunu bile bilmiyordum. Öğrendikçe ilgim büyüdü ve bir noktada dijital ürün tasarlamanın yapmak istediğim şey olduğunu fark ettim.',
    ],
    contentEn: [
      'I had a startup I wanted to bring to life, and I needed to create its digital presence. When I started designing its website, I didn’t even know UI/UX existed as a discipline of its own. The more I learned, the more interested I became, until I realized that designing digital products was what I wanted to pursue.',
    ],
  },
  {
    id: '02',
    titleTr: '02 — Nasıl Düşünüyorum',
    titleEn: '02 — How I Think',
    contentTr: [
      "Bugün bir ekrana başlamadan önce neyi çözdüğümüzü anlamaya çalışıyorum. Problem gerçekten var mı, ürün açısından neden önemli ve kullanıcı için en akıcı hale nasıl gelir? Güzel görünen bir arayüz işin yalnızca bir kısmı. PM'lerle çalışma deneyimim de tasarıma yalnızca ekran üzerinden değil, ürünün bütünü üzerinden bakmayı öğretti.",
      'Aynı merak beni build tarafına da taşıdı. Tasarladığım şeyleri web ortamında kendim geliştirebilmek, fikir ile çalışan ürün arasındaki mesafeyi ciddi biçimde kısaltıyor. Bir şeyi tasarlayıp hemen tarayıcıda görmek, test etmek, bozmak ve yeniden şekillendirmek hoşuma gidiyor.',
    ],
    contentEn: [
      'Before I start designing a screen, I try to understand what we’re actually solving. Is the problem real, why does it matter to the product, and how can the experience become as frictionless as possible for the user? A good-looking interface is only one part of the work. Working with PMs has also taught me to look beyond individual screens and think about the product as a whole.',
      'That same curiosity pulled me into building as well. Being able to develop what I design for the web significantly shortens the distance between an idea and a working product. I enjoy designing something, seeing it immediately in the browser, testing it, breaking it, and shaping it again.',
    ],
  },
  {
    id: '03',
    titleTr: '03 — AI ile Nasıl Çalışıyorum',
    titleEn: '03 — How I Work with AI',
    contentTr: [
      "AI çalışma biçimimin hemen her noktasında var ama her yerde aynı rolü üstlenmiyor. Araştırmada otonom agent'larla geniş alanları taratabiliyor, geliştirmede coder ve QA agent'larıyla çalışabiliyorum. Tasarımda ise hızlı prototipleme, alternatif üretme ve düşüncelerimi sınama aracı olarak kullanıyorum. UX kararları, akışlar ve ürünün yönü gibi noktalarda kontrolü kendimde tutmayı tercih ediyorum.",
      "Benim için mesele AI'ın işi yapması değil; hangi işi ona bırakacağımı, nerede yöneteceğimi ve nerede kararı kendim vereceğimi bilmek.",
    ],
    contentEn: [
      'AI is present across almost every part of my workflow, but it doesn’t play the same role everywhere. In research, I can use autonomous agents to explore a much wider surface area. In development, I work with coder and QA agents. In design, I use it for rapid prototyping, exploring alternatives, and challenging my own thinking. When it comes to UX decisions, flows, and product direction, I prefer keeping the judgment with me.',
      'For me, it’s not about letting AI do the work; it’s about knowing what to delegate, what to direct, and where the decision should remain mine.',
    ],
  },
  {
    id: '04',
    titleTr: '04 — Neden XP Desktop Portfolyo?',
    titleEn: '04 — Why an XP Desktop Portfolio?',
    contentTr: [
      'Uzun zamandır kişisel bir portfolyo yapmak istiyordum ama klasik scroll edilen portfolyo siteleri hiçbir zaman tam olarak içime sinmedi. Sonra XP pencere estetiğiyle yapılmış bir web deneyimine denk geldim. Windows XP benim de bilgisayarla ilk tanıştığım dönemlerden bir parçaydı ve fikir hemen aklıma yattı: mobilde bir Properties penceresi, masaüstünde ise neden doğrudan bir XP desktop deneyimi olmasın dedim?',
      "Oradan sonra fikir büyüdü. Pencereler, kişisel uygulamalar, küçük detaylar ve easter egg'ler ekledim. Tasarımın yanında build, copywriting, SEO, GEO ve deployment katmanlarını da kendim yöneterek bu siteyi yalnızca işlerimi gösteren bir yer değil, nasıl çalıştığımı gösteren işlerden biri haline getirmek istedim.",
    ],
    contentEn: [
      'I’d wanted to build a personal portfolio for a long time, but the usual scroll-through portfolio never quite felt right to me. Then I came across a web experience built around the Windows XP window aesthetic. XP was also part of my first experience with computers, and the idea immediately clicked: if mobile could feel like a Properties window, why couldn’t desktop become an actual XP-style desktop experience?',
      'The idea kept growing from there. I added windows, personal apps, small details, and easter eggs. Alongside the design, I handled the build, copywriting, SEO, GEO, and deployment myself, turning this site into more than a place that displays my work. I wanted it to become one of the projects that shows how I work.',
    ],
  },
  {
    id: '05',
    titleTr: '05 — İşin Dışında',
    titleEn: '05 — Outside of Work',
    contentTr: [
      'İşin dışında keyifli bir hayat yaşamaya çalışıyorum ve anların kıymetini biliyorum. Kendime bakıyor, sağlıklı yaşamaya özen gösteriyor, spor yapıyor ve koşuyorum. Oyun oynuyorum, sevdiğim tarzlarda müzik dinliyor ve yenilerini keşfediyorum. Çoğu zaman da yine bir şeyler kurcalarken buluyorum kendimi.',
      'Sanırım ortak nokta hep aynı: güzel zaman geçirmek, yeni bir şey keşfetmek, nasıl çalıştığını anlamak ve mümkünse kendim denemek.',
    ],
    contentEn: [
      'Outside of work, I try to enjoy life and appreciate the moments that make it up. I take care of myself, try to live healthy, train, and run. I play games, listen to the music I love, and keep discovering new sounds. And more often than not, I still end up tinkering with something.',
      'I guess the pattern is pretty consistent: enjoy the time I have, discover something new, understand how it works, and if possible, try it myself.',
    ],
  },
];

export const IDENTITY_DATA = {
  name: 'Görkem Berk Gündoğdu',
  titleTr: 'UI/UX Designer — Web & SaaS · Front-end Builder',
  titleEn: 'UI/UX Designer — Web & SaaS · Front-end Builder',
  subtextTr:
    'Çoğunlukla web ve SaaS için tasarlıyorum. Tasarladıklarımı web ortamında geliştiriyorum. Son zamanlarda mobil tarafı da daha fazla keşfediyorum.',
  subtextEn:
    'Mostly designing for web and SaaS. Often building what I design for the web. Lately, exploring more of mobile too.',
  taglineTr: 'UI/UX Designer · Ürün Arayüzleri · Yapay Zeka Destekli Tasarım',
  taglineEn: 'UI/UX Designer · Product Interfaces · AI-Assisted Design',
  locationTr: 'İstanbul, Türkiye',
  locationEn: 'Istanbul, Türkiye',
  currentRolesTr: [
    'UI/UX Designer @ Operater.io',
    'Kurucu Ortak (Co-founder) @ v1be.io',
  ],
  currentRolesEn: [
    'UI/UX Designer @ Operater.io',
    'Co-founder @ v1be.io',
  ],
  aboutShortTr:
    'Dijital ürünler, duyarlı (responsive) web siteleri ve fonksiyonel arayüzler kurgulayan ürün odaklı tasarımcı. Görsel tasarım, ürün düşüncesi, front-end bilgisi ve yapay zeka destekli iş akışlarını birleştirerek erken aşama konseptleri kullanılabilir deneyimlere dönüştürüyorum.',
  aboutShortEn:
    'UI-focused designer creating digital products, responsive websites, and functional interfaces. I combine visual design, product thinking, front-end knowledge, and AI-assisted workflows to move ideas from early concepts to usable experiences.',
  aboutFullTr: [
    'Merhaba, ben Görkem Berk Gündoğdu. Dijital ürünler tasarlama ve inşa etme tutkum, makine mühendisliği eğitimimi son senesinde bırakma kararımla tam zamanlı bir serüvene dönüştü.',
    "Kendi girişimim olan v1be.io'nun temellerini atarken başlayan bu yolculuk, bugün Operater.io'da UI/UX Designer olarak sıfırdan ürün arayüzleri ve kullanıcı akışları kurguladığım bir noktaya evrildi.",
    'Benim için tasarım sadece görsel bir katman değil; estetik içgüdülerimi HTML, CSS, JavaScript, Astro ve Tailwind CSS gibi modern web teknolojileriyle birleştirerek hızlı, duyarlı (responsive) ve erişilebilir deneyimler üretiyorum.',
    'Çalışma sürecimde yapay zekayı sadece hızlandırıcı bir asistan olarak değil; araştırma, arayüz keşfi, prototipleme ve problem çözme aşamalarında benimle birlikte üreten bir partner olarak konumluyorum.',
  ],
  aboutFullEn: [
    'Hello, I am Görkem Berk Gündoğdu. My passion for designing and building digital products turned into a full-time journey when I made the decision to leave my mechanical engineering education in my final year.',
    'Starting with laying the foundations of my venture v1be.io, this path has evolved into crafting product interfaces and user flows from scratch as a UI/UX Designer at Operater.io.',
    'For me, design is not merely a visual layer. I blend aesthetic instincts with modern web technologies such as HTML, CSS, JavaScript, Astro, and Tailwind CSS to build fast, responsive, and accessible experiences.',
    'In my workflow, I position AI not just as a speed accelerator, but as a co-creative partner across research, interface exploration, prototyping, and UX problem-solving.',
  ],
  languages: [
    { nameTr: 'Türkçe', nameEn: 'Turkish', level: 'Native' },
    { nameTr: 'İngilizce', nameEn: 'English', level: 'B2 - Professional' },
  ],
  community: [
    {
      org: 'Beşiktaş Rotaract Club',
      roleTr: 'Komite Başkanı & Üye',
      roleEn: 'Committee Chair & Member',
      descTr: 'Topluluk projeleri, takım koordinasyonu, etkinlik planlama ve paydaş iletişimi.',
      descEn: 'Community projects, team coordination, event planning, and stakeholder communication.',
    },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/gorkemberkgundogdu/',
    github: 'https://github.com/gorkemberkgundogdu-alt',
    email: 'gorkemberkgundogdu@gmail.com',
    whatsapp: '+90 505 502 97 63',
    whatsappUrl: 'https://wa.me/905055029763',
    cvPath: '/assets/Gorkem_Berk_Gundogdu_CV_2026.pdf',
  },
};

export const PROJECTS_DATA: ProjectItem[] = [
  // Category 1: App Design
  {
    id: 'operater',
    slug: 'operater',
    category: 'app-design',
    categoryTitleTr: 'App Design (Uygulama Tasarımı)',
    categoryTitleEn: 'App Design',
    titleTr: 'Operater.io — End-to-End Product UI/UX & Design System',
    titleEn: 'Operater.io — End-to-End Product UI/UX & Design System',
    badgeTr: 'B2B SaaS / Product Design',
    badgeEn: 'B2B SaaS / Product Design',
    date: '2026 - Present',
    summaryTr:
      'Sıfırdan tasarlanan yapay zeka destekli operasyon ve veri analiz arayüzü. Karmaşık veri tabloları, kullanıcı akışları ve ölçeklenebilir tasarım sistemi mimarisi.',
    summaryEn:
      'AI-supported operations and analytics interface designed from scratch. Complex data tables, user flows, and scalable design system architecture.',
    descriptionTr:
      'Operater.io bünyesinde ürün gereksinimleri ve teknik kısıtlar doğrultusunda sıfırdan ürün ekranları, kullanıcı akışları ve görsel yön tasarlandı. Var olan bir tasarım sistemi olmadan sıfırdan arayüz desenleri ve tasarım sistemi temelleri oluşturuldu. Fikir geliştirme, arayüz keşfi, UX problem çözümü ve geliştirme iş birliğinde yapay zeka destekli iş akışları entegre edildi.',
    descriptionEn:
      'Designed finalized product interfaces and user flows from scratch based on product briefs and technical requirements at Operater.io. Established visual direction and interface patterns without relying on an existing design system. Utilized AI-assisted workflows for ideation, interface exploration, UX problem-solving, and developer collaboration.',
    roleTr: 'UI/UX Designer',
    roleEn: 'UI/UX Designer',
    tech: ['Figma', 'Design Systems', 'AI Workflows', 'User Flows', 'Tailwind CSS'],
    highlightsTr: [
      'Sıfırdan uçtan uca ürün ekranları ve kullanıcı yolculukları',
      'Ölçeklenebilir arayüz desenleri ve bileşen kütüphanesi temeli',
      'Yapay zeka destekli arayüz keşfi ve geliştirici el sıkışması (handoff)',
    ],
    highlightsEn: [
      'End-to-end product screens and user journeys from scratch',
      'Scalable interface patterns and foundational component library',
      'AI-assisted interface exploration and developer handoff',
    ],
    liveUrl: 'https://operater.io',
  },
  {
    id: 'v1be-saas',
    slug: 'v1be-saas',
    category: 'app-design',
    categoryTitleTr: 'App Design (Uygulama Tasarımı)',
    categoryTitleEn: 'App Design',
    titleTr: 'v1be SaaS — AI Platform & Core Product Interface',
    titleEn: 'v1be SaaS — AI Platform & Core Product Interface',
    badgeTr: 'SaaS Platform / Founder',
    badgeEn: 'SaaS Platform / Founder',
    date: '2026 - Present',
    summaryTr:
      'Kurucu ortak vizyonuyla erken aşama ürün yönü, çekirdek ürün arayüzü ve görsel yön tasarımı.',
    summaryEn:
      'Early-stage product direction, core product interface, and visual direction as part of the founding team.',
    descriptionTr:
      "Kurucu ekibin bir parçası olarak v1be.io'nun erken ürün yönü ve konumlandırmasına katkı sağlandı. Çekirdek ürün arayüzü, görsel kimliği ve kullanıcı deneyimi temelleri şekillendirilmeye başlandı.",
    descriptionEn:
      'Contributed to early product direction and positioning as part of the founding team at v1be.io. Began shaping the core product interface, visual direction, and UX foundation.',
    roleTr: 'Co-Founder & UI/UX Designer',
    roleEn: 'Co-Founder & UI/UX Designer',
    tech: ['Figma', 'Product Strategy', 'UI Architecture', 'Prototyping'],
    highlightsTr: [
      'Çekirdek SaaS ürün arayüzü ve görsel yön tasarımı',
      'Kullanıcı doğrulama ve erken aşama ürün konumlandırması',
    ],
    highlightsEn: [
      'Core SaaS product interface and visual direction design',
      'User validation and early-stage product positioning',
    ],
    liveUrl: 'https://v1be.io',
  },

  // Category 2: Web Design & Development
  {
    id: 'studio-v1be',
    slug: 'studio-v1be',
    category: 'web-design',
    categoryTitleTr: 'Web Design & Development (Web Tasarım & Geliştirme)',
    categoryTitleEn: 'Web Design & Development',
    titleTr: 'Studio v1be — Web Tasarım & Geliştirme (v1be Services)',
    titleEn: 'Studio v1be — Web Design & Development (v1be Services)',
    badgeTr: 'Web Design & Frontend',
    badgeEn: 'Web Design & Frontend',
    date: '2026',
    summaryTr:
      'v1be\'nin web tasarım ve geliştirme hizmet kolu: Güçlü görsel tasarım, UX, responsive davranış, Astro tabanlı front-end ve GEO/AI-search uyumlu web mimarisi.',
    summaryEn:
      'The web design & development service arm of v1be: Strong visual design, UX, responsive behavior, Astro-based front-end engineering, and GEO/AI-readable web architecture.',
    descriptionTr:
      'Studio v1be için marka kimliğini yansıtan karanlık/mimari arayüz tasarlandı, masaüstü için tekerlek tabanlı sayfalama (paginated wheel), mobil için akıcı dikey akış kurgulandı ve Astro + Tailwind CSS ile sıfır framework adası mimarisiyle kodlanıp yayına alındı.',
    descriptionEn:
      'Designed and built Studio v1be with an engineered dark/blueprint visual language, custom vanilla TypeScript paginated wheel scroll for desktop, native fluid vertical UX for mobile, and zero-framework-island Astro + Tailwind CSS architecture.',
    roleTr: 'Web Designer & Front-End Builder',
    roleEn: 'Web Designer & Front-End Builder',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Responsive Design', 'GEO & SEO'],
    highlightsTr: [
      'Masaüstü için özel vanilla TypeScript paginated wheel deneyimi ve mobile duyarlı doğal akış',
      'Astro v7 ve Tailwind CSS v4 ile sıfır istemci framework yükü (zero UI islands)',
      'İki dilli (TR/EN) rota sistemi, dinamik llms.txt ve yapılandırılmış JSON-LD şema grafiği',
    ],
    highlightsEn: [
      'Custom vanilla TypeScript paginated wheel experience for desktop and native fluid flow on mobile',
      'Zero UI framework runtime overhead using Astro v7 and Tailwind CSS v4',
      'Full bilingual (TR/EN) route parity, dynamic llms.txt, and linked JSON-LD schema graph',
    ],
    liveUrl: 'https://studio.v1be.io/',
  },
  {
    id: 'rook-ai',
    slug: 'rook-ai',
    category: 'web-design',
    categoryTitleTr: 'Web Design & Development (Web Tasarım & Geliştirme)',
    categoryTitleEn: 'Web Design & Development',
    titleTr: 'Rook AI — E-Commerce & Startup Web Experience',
    titleEn: 'Rook AI — E-Commerce & Startup Web Experience',
    badgeTr: 'E-Commerce / Web',
    badgeEn: 'E-Commerce / Web',
    date: '2025 (July - Oct)',
    summaryTr:
      'E-ticaret ve girişim odaklı, modern, duyarlı ve performanslı web arayüz tasarımı ve geliştirme.',
    summaryEn:
      'Modern, responsive, and performance-focused web interface design and front-end development for e-commerce startup projects.',
    descriptionTr:
      'Rook AI projesi kapsamında e-ticaret temelli startup müşterileri için modern, responsive ve dönüşüm odaklı web siteleri tasarlandı ve geliştirildi.',
    descriptionEn:
      'Designed and developed responsive websites for startup and client projects based on e-commerce under Rook AI.',
    roleTr: 'Web Designer & Developer',
    roleEn: 'Web Designer & Developer',
    tech: ['UI Design', 'Responsive Web', 'E-Commerce UX', 'Front-End'],
    highlightsTr: [
      'E-ticaret odaklı dönüşüm optimizasyonu ve duyarlı arayüz tasarımı',
      'Startup ihtiyaçlarına özel hızlı prototipleme ve web geliştirme',
    ],
    highlightsEn: [
      'E-commerce focused conversion optimization and responsive UI design',
      'Rapid prototyping and web development tailored to startup needs',
    ],
  },
  {
    id: 'mynessa-media',
    slug: 'mynessa-media',
    category: 'web-design',
    categoryTitleTr: 'Web Design & Development (Web Tasarım & Geliştirme)',
    categoryTitleEn: 'Web Design & Development',
    titleTr: 'MyNessa Media — Client Web Platform & E-Commerce',
    titleEn: 'MyNessa Media — Client Web Platform & E-Commerce',
    badgeTr: 'Web Design & Development',
    badgeEn: 'Web Design & Development',
    date: '2026 (Jan - Apr)',
    summaryTr:
      'Müşteri projeleri ve e-ticaret odaklı responsive web sitelerinin tasarımı ve geliştirilmesi.',
    summaryEn:
      'Design and development of responsive websites and digital experiences for client and e-commerce projects.',
    descriptionTr:
      'MyNessa Media bünyesinde müşteri ve e-ticaret projelerine yönelik duyarlı, estetik ve modern web siteleri kurgulandı, geliştirildi ve yayına alındı.',
    descriptionEn:
      'Designed and developed responsive, aesthetic, and modern websites for client and e-commerce projects under MyNessa Media.',
    roleTr: 'Web Designer & Developer',
    roleEn: 'Web Designer & Developer',
    tech: ['UI/UX', 'Responsive Design', 'HTML/CSS/JS', 'Deploy'],
    highlightsTr: [
      'Müşteri odaklı estetik ve erişilebilir web tasarımı',
      'Farklı cihaz ve ekran boyutlarına tam uyumlu duyarlı mimari',
    ],
    highlightsEn: [
      'Client-focused aesthetic and accessible web design',
      'Fully responsive architecture across multiple device sizes',
    ],
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'ai-driven-ui-ux',
    slugTr: 'ai-ile-ui-ux-tasarimi',
    slugEn: 'ai-driven-ui-ux-design',
    titleTr: 'Yapay Zeka Çağında UI/UX: Hızlandırıcıdan Yaratıcı İş Ortağına',
    titleEn: 'UI/UX in the Age of AI: From Speed Accelerator to Creative Partner',
    summaryTr:
      'Yapay zekanın modern tasarım süreçlerindeki rolü, araştırma ve arayüz keşfinde bir partner olarak konumlandırılması üzerine düşünceler.',
    summaryEn:
      'Reflections on the role of artificial intelligence in modern design processes and positioning it as a co-creative partner in research and interface discovery.',
    date: '2026.02.15',
    readTimeTr: '4 dk okuma',
    readTimeEn: '4 min read',
    contentTr: [
      'Yapay zeka araçları (ChatGPT, Claude, Copilot ve yapay zeka destekli tasarım araçları) hayatımıza girdiğinde ilk odaklandığımız şey genellikle "hız" oldu. Ancak tasarım sürecini sadece hızlandırmak, ürünün derinliğini ve kullanıcıyla kurduğu bağı otomatik olarak iyileştirmiyor.',
      'Benim tasarım pratiğimde yapay zeka; hazır şablonlar üreten bir otomasyon değil, problem çözme aşamasında alternatif kullanıcı senaryolarını test eden, kenar durumları (edge cases) sorgulayan ve fikir keşfini zenginleştiren interaktif bir düşünce ortağıdır.',
      'Sıfırdan bir tasarım sistemi kurarken veya karmaşık B2B SaaS tabloları kurgularken, yapay zekayı araştırma verilerini yapılandırmak ve geliştirici el sıkışması (handoff) öncesi olası teknik sürtünmeleri öngörmek için kullanıyorum.',
      'Geleceğin dijital ürünleri, sadece yapay zeka modelleri içerenler değil; insan sezgisi, kullanıcı empatisi ve estetik hassasiyetle harmanlanmış yapay zeka destekli arayüzler olacaktır.',
    ],
    contentEn: [
      'When AI tools entered our workflows, our primary focus was almost always "speed". However, merely speeding up the design process does not automatically improve the product\'s depth or its emotional connection with users.',
      'In my design practice, AI is not an automation engine producing prefabricated templates; it is an interactive thought partner that stress-tests alternative user journeys, challenges edge cases, and enriches interface exploration.',
      'Whether building a design system from scratch or designing complex B2B SaaS data tables, I utilize AI to structure research findings and anticipate technical friction before developer handoff.',
      'The future of digital products will belong to experiences that seamlessly blend human intuition, deep user empathy, and aesthetic rigor with AI-assisted craftsmanship.',
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'design',
    nameTr: 'UI/UX & Ürün Tasarımı',
    nameEn: 'UI/UX & Product Design',
    skills: [
      'UI Design',
      'Responsive Design',
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Design Systems',
      'Component Libraries',
      'User Research',
    ],
  },
  {
    id: 'development',
    nameTr: 'Front-End & Web Mühendisliği',
    nameEn: 'Front-End & Web Engineering',
    skills: [
      'Front-end development & deploy',
      'Astro',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'HTML5 & Modern CSS',
      'Framer Motion',
      'GSAP',
    ],
  },
  {
    id: 'ai-workflow',
    nameTr: 'Yapay Zeka Destekli İş Akışları',
    nameEn: 'AI-Assisted Workflows',
    skills: [
      'AI-assisted workflows',
      'Ideation & Prompting',
      'Interface Exploration',
      'UX Problem-Solving',
      'Rapid Prototyping',
    ],
  },
];

/**
 * Helper functions
 */
export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export function getArticleBySlug(slug: string, locale: 'tr' | 'en' = 'tr'): ArticleItem | undefined {
  if (locale === 'en') {
    return ARTICLES_DATA.find((a) => a.slugEn === slug || a.slugTr === slug);
  }
  return ARTICLES_DATA.find((a) => a.slugTr === slug || a.slugEn === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS_DATA.map((p) => p.slug);
}
