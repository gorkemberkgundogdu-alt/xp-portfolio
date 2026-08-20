import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const content = `# Görkem Berk Gündoğdu — UI/UX Designer & Front-End Builder

> Portfolio: Interactive Windows XP Web Experience
> Role: UI/UX Designer at Operater.io | Co-Founder at v1be.io

## Summary
Görkem Berk Gündoğdu is a UI/UX Designer and Front-End Builder who transitioned from mechanical engineering to digital product design and front-end engineering. He crafts responsive, accessible, and high-performance digital experiences combining aesthetics with modern web technologies and AI-augmented workflows.

## Key Projects
- **Operater.io (Operater_SaaS.exe)**: End-to-end B2B SaaS product interface design, scalable design system architecture, complex data visualizations, and AI problem-solving.
- **v1be.io (v1be_Platform.exe)**: Co-founder vision, early-stage product prototypes, landing page design, and front-end architecture.
- **Freelance Web Experiences (E-Commerce_Bundle.zip)**: High-converting, responsive web platforms for Rook AI & MyNessa Media.

## Skills & Stack
- **Design**: Figma, UI/UX Systems, Prototyping, Wireframing, User Research
- **Engineering**: Astro, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Zustand
- **AI Integrations**: Prompt engineering, rapid user flow testing, AI-assisted frontend iteration

## Contact
- Email: gorkemberk@operater.io
- Interactive Portfolio: https://gorkemberk.design
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
