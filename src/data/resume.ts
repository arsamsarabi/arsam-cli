import type { ResumeType } from '../types.js'

function job(
  company: string,
  title: string,
  bullets: readonly string[],
  teamRoles?: string | readonly string[]
): string {
  const roles = teamRoles ? (Array.isArray(teamRoles) ? teamRoles : [teamRoles]) : []
  const header = [`💼 ${title} @ ${company}`, ...roles.map((role) => `🎯 ${role}`)]
  return [...header, '', ...bullets.map((b) => `🔧 ${b}`)].join('\n')
}

function paragraph(...parts: readonly string[]): string {
  return parts.join('\n\n')
}

function stack(...lines: readonly string[]): string {
  return lines.join('\n')
}

export const resume: ResumeType = {
  About: [
    paragraph(
      "Hi 👋 I'm Arsam — a senior frontend engineer with 10+ years of experience shipping products people actually enjoy using.",
      'I care about clean architecture, thoughtful UX, and teams that communicate well. I have led squads, owned roadmaps, and stayed hands-on in the codebase — usually at the same time.',
      'Recent work spans biotech imaging software, e-commerce platforms, and regulated health-tech. I am comfortable in ambiguity, good under release pressure, and happiest when the work has a clear purpose.',
      'I am building toward Staff-level scope: technical direction, standards that scale beyond one person, and helping teams deliver reliably without burning out.'
    ),
  ],

  Education: ['🎓 BSc Computer Science — Oxford Brookes University'],

  'Recent employment': [
    job(
      'ONI',
      'Senior Frontend Engineer',
      [
        'Build frontend for CODI and the Aplo Scope platform — desktop super-resolution microscopy software where solid UI and data visualisation help researchers move faster on real biopharma problems, including LNP characterisation.',
        'Team Lead and Technical Product Owner for a Scrum squad: align roadmaps with PMs, turn goals into well-scoped stories, and keep delivery moving while still writing code myself.',
        'Owned the LNP Prep frontend end to end — greenfield architecture through hardening and the bug-fix push before customer go-live.',
        'Shipped across Aplo Scope, AutoLNP, and AutoEV, including work that helped get the first customer shipment out the door.',
        'Led frontend modernisation: React upgrade, Mantine rollout, better linting and formatting, and style guidelines the whole team could actually follow.',
      ],
      ['Team Lead', 'Technical Product Owner']
    ),

    job('MOO', 'Senior Software Engineer', [
      "Helped design and build MOO's new e-commerce platform from the ground up — React, Next.js, Framer Motion, and Apollo GraphQL on the frontend, Apollo Server in the BFF, with Terraform, AWS, Auth0, GitHub Actions, and Netlify in the mix.",
      'Kept code review useful and constructive, and helped tighten how the team shipped.',
      'Built and maintained shared libraries, tooling, and build scripts the squad relied on daily.',
    ]),

    job('CX Loyalty (a.k.a. Tenerity)', 'Senior Mobile Engineer', [
      'Built and maintained React Native apps for iOS and Android.',
      'Worked with design, product, and backend to ship polished mobile experiences on time.',
      'Introduced automated testing to catch regressions earlier and raise the quality bar.',
    ]),

    job(
      'Sensyne Health',
      'Senior Software Engineer',
      [
        'Partnered with product and design to shape requirements and deliver frontend features across health-data applications.',
        'Owned shared libraries, build tooling, and test infrastructure the wider frontend team depended on.',
        'Mentored developers across the team and helped PMs keep a realistic, evolving delivery roadmap.',
        'Ran Scrum ceremonies and pushed for better performance and accessibility across our apps.',
      ],
      ['Tech Lead', 'Scrum Master']
    ),

    job(
      'Contact Partners',
      'Senior Software Engineer',
      [
        'Led a team of six engineers building SaaS products for major UK banks — still hands-on, still shipping code alongside the management work.',
        'Balanced delivery pressure with enough process to keep a small team focused and predictable.',
      ],
      ['Development Manager', 'Scrum Master']
    ),

    job('Relayware (a.k.a. Zift Solutions)', 'UI Developer', [
      'Built UI for the core Relayware product and a set of client-facing portals — where I first cut my teeth on production frontend at scale.',
    ]),
  ],

  'Tech Stack': [
    stack(
      '🛠 TypeScript | JavaScript | Node | Express | GraphQL',
      '✨ React | Next.js | Redux | TanStack Query | Vue | Svelte | SvelteKit',
      '💄 Mantine | Styled-Components | CSS | Sass | Tailwind | Emotion',
      '✅ Jest | React Testing Library | Cypress | Playwright | DevTools',
      '📦 Vite | Webpack | esbuild | Docker | CI/CD | GitHub Actions',
      '📱 React Native | Expo',
      '💻 AWS | Terraform | Serverless | Netlify | Vercel'
    ),
  ],

  Contact: [stack('🌠 https://arsam.dev', '📧 arsamsarabi@me.com')],
}
