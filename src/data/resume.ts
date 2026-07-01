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
      'Hi 👋 My name is Arsam. I am a highly skilled and results-driven Software Engineer with over 10 years of experience in developing and delivering complex software solutions. Proficient in modern frontend technologies and frameworks, including React, Next.js, Svelte, SvelteKit and more!',
      'I have a proven track record of building scalable, user-friendly, and visually appealing applications; and the ability to work collaboratively in cross-functional teams and lead projects from concept to deployment.',
      'I am committed to staying current with industry trends and advancements to ensure delivery of top-quality solutions.',
      'As I continue to grow and develop my skills, I am eager to take on new challenges and responsibilities, and I believe that a Principal Engineer or Staff Engineer role, where I can leverage my expertise in frontend development to lead and guide teams, would be the perfect next step in my career.'
    ),
  ],

  Education: ['🎓 BSc Computer Science @ Oxford Brookes University'],

  'Recent employment': [
    job(
      'ONI',
      'Senior Frontend Engineer',
      [
        'Senior frontend engineer on the CODI platform for the Aplo Scope super-resolution microscopy system — building interfaces where UI performance and data visualisation support biopharma research, including lipid nanoparticle (LNP) characterisation.',
        'Team Lead and Technical Product Owner for a Scrum team: owning roadmap alignment with PMs, breaking down product goals into Jira stories and acceptance criteria, and keeping sprint delivery on track while staying hands-on in code.',
        'Architected and delivered the LNP Prep application frontend as a greenfield project, then led hardening and critical bug-fix work ahead of customer delivery.',
        'Contributed across Aplo Scope, AutoLNP, and AutoEV — including frontend work that supported first customer shipment readiness.',
        'Drove frontend modernisation: React upgrade, Mantine adoption, linting and formatting improvements, and team-wide style guidelines.',
      ],
      ['Team Lead', 'Technical Product Owner']
    ),

    job('MOO', 'Senior Software Engineer', [
      "Working on a greenfield project, designing, building and delivering MOO's new e-commerce platform using React, Next.js, motion and Apollo GraphQL in the frontend and Apollo Server in the BFF layer. Other technologies include Terraform, AWS, Auth0, GitHub Actions and Netlify.",
      'Actively participate in code reviews and contribute to improving the development process.',
      'Implementing and maintaining shared libraries, tooling and build scripts.',
    ]),

    job('CX Loyalty (a.k.a. Tenerity)', 'Senior Mobile Engineer', [
      'Developed and maintained mobile applications for both iOS and Android platforms using React Native.',
      'Worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver high-quality and user-friendly mobile apps that meet business requirements and project timelines.',
      'Introduced test automation frameworks to the codebase to ensure the delivery of high-quality code.',
    ]),

    job(
      'Sensyne Health',
      'Senior Software Engineer',
      [
        'Worked closely with the product and design teams to understand requirements and architect and implement frontend applications and new features.',
        'Implemented and maintained shared libraries.',
        'Implemented and maintained tooling and build scripts for frontend applications and test frameworks.',
        'Mentored and coached other developers in my team and the wider engineering team.',
        'Worked with project managers to develop a living roadmap for product delivery.',
        'Facilitated all Scrum ceremonies for the team.',
        'Optimized applications for better performance and accessibility.',
      ],
      ['Tech Lead', 'Scrum Master']
    ),

    job(
      'Contact Partners',
      'Senior Software Engineer',
      [
        'Led an engineering team of 6 developers providing SaaS applications for major banks within the UK.',
        'Hands-on role — alongside management duties, contributed heavily to the implementation of our applications.',
      ],
      ['Development Manager', 'Scrum Master']
    ),

    job('Relayware (a.k.a. Zift Solutions)', 'UI Developer', [
      'Worked on the Relayware product application and various client portals.',
    ]),
  ],

  'Tech Stack': [
    stack(
      '🛠 JavaScript | TypeScript | Node | Express | GraphQL',
      '✨ React | Next | Redux | Vue | Svelte | SvelteKit | Mongoose',
      '💄 Styled-Components | CSS | Sass | Less | PostCSS | Emotion',
      '✅ Jest | Enzyme | Cypress | Puppeteer | DevTools',
      '📦 Webpack | Docker | esbuild | CI/CD | GitHub Actions',
      '🆕 Python | Rust | Go',
      '📱 React Native | Expo | Android | iOS',
      '💻 AWS | Terraform | Serverless | Netlify | Heroku | Vercel'
    ),
  ],

  Contact: [stack('🌠 https://arsam.dev', '📧 arsamsarabi@me.com')],
}
