import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../config/site';
import { IDENTITY_DATA, PROJECTS_DATA, ARTICLES_DATA, SKILLS_DATA } from '../data/portfolioData';

export const GET: APIRoute = async () => {
  const content = `# ${IDENTITY_DATA.name} — ${IDENTITY_DATA.titleEn}

> Canonical Website: ${SITE_CONFIG.domain}
> Primary Roles: ${IDENTITY_DATA.currentRolesEn.join(' | ')}
> Location: ${IDENTITY_DATA.locationEn}

## Professional Summary
${IDENTITY_DATA.aboutShortEn}

## Projects & Product Cases (Static Routes)
${PROJECTS_DATA.map(
  (p) => `- [${p.titleEn}](${SITE_CONFIG.domain}/en/projects/${p.slug}/)
  - Category: ${p.categoryTitleEn}
  - Role: ${p.roleEn}
  - Tech: ${p.tech.join(', ')}
  - Summary: ${p.summaryEn}`
).join('\n')}

## Articles & Insights
${ARTICLES_DATA.map(
  (a) => `- [${a.titleEn}](${SITE_CONFIG.domain}/en/articles/${a.slugEn}/)
  - Date: ${a.date} | Read Time: ${a.readTimeEn}
  - Summary: ${a.summaryEn}`
).join('\n')}

## Verified Skills & Competencies
${SKILLS_DATA.map((s) => `- **${s.nameEn}**: ${s.skills.join(', ')}`).join('\n')}

## Contact & Profiles
- LinkedIn: ${IDENTITY_DATA.social.linkedin}
- GitHub: ${IDENTITY_DATA.social.github}
- Email: ${IDENTITY_DATA.social.email}
- WhatsApp: ${IDENTITY_DATA.social.whatsapp}
- CV Asset: ${SITE_CONFIG.domain}${IDENTITY_DATA.social.cvPath}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
