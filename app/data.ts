export const profile = {
  name: 'Bipin Namburu',
  title: 'Full Stack Developer',
  yearsExperience: 5,
  location: 'Bengaluru, India',
  email: 'bipinnamburu2244@gmail.com',
  phone: '+91 9440618881',
  github: 'https://github.com/BipinNamburu',
  linkedin: 'https://www.linkedin.com/in/bipinnamburu/',
  intro:
    'Five years building products end-to-end — from React interfaces that load fast and feel right, to Node and Python services that quietly do the heavy lifting. Currently shipping a GenAI insights platform at AB InBev.',
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  logo: string; // Logo.dev or Clearbit URL
  projects: {
    name: string;
    stack: string[];
    bullets: string[];
  }[];
};

export const experiences: Experience[] = [
  {
    company: 'AB InBev',
    role: 'Full Stack Developer',
    location: 'Bengaluru',
    period: 'Aug 2025 — Present',
    logo: 'https://logo.clearbit.com/ab-inbev.com',
    projects: [
      {
        name: 'GenAI Insights Chat Platform',
        stack: ['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'LLM APIs'],
        bullets: [
          'Part of a cross-functional team delivering a GenAI-powered chat application providing real-time business insights across company-wide operations.',
          'Developed Node.js backend services to integrate LLM APIs, manage streaming responses, and expose REST endpoints consumed by the React frontend.',
          'Built FastAPI microservices in Python to handle AI inference requests, data processing pipelines, and serve structured business insights to the frontend.',
          'Wrote Python data processing scripts to transform and surface operational metrics through the AI chat layer.',
          'Built the conversational React UI enabling employees to query internal company data through natural language with real-time streaming feedback.',
          'Implemented performant UI components handling dynamic data visualisations for business intelligence insights.',
        ],
      },
    ],
  },
  {
    company: 'ZopSmart',
    role: 'Software Development Engineer 2',
    location: 'Bengaluru',
    period: 'Aug 2024 — Jul 2025',
    logo: 'https://logo.clearbit.com/zopsmart.com',
    projects: [
      {
        name: 'EazyUpdates',
        stack: ['React', 'TypeScript', 'Node.js', 'Redux', 'React Query'],
        bullets: [
          'Migrated the entire frontend codebase to TypeScript, reducing critical bugs by 25% as measured with SonarQube.',
          'Built and maintained Node.js backend services for real-time content updates, notification delivery, and user preference management.',
          'Improved Lighthouse score from 65 → 90+ through render optimisation and asset tuning.',
          'Designed API contracts between frontend and backend; integrated Redux and React Query for efficient state and caching layers.',
          'Mentored junior engineers in clean code practices across both frontend and backend layers.',
        ],
      },
      {
        name: 'Zopping',
        stack: ['ReactJS', 'NextJS', 'Node.js'],
        bullets: [
          'Reduced bundle size by 37% via tree shaking and lazy loading, cutting initial load time by 2 seconds.',
          'Implemented Next.js SSR alongside Node.js API optimisations, boosting SEO and organic traffic by 20% over a quarter.',
          'Contributed to backend route handlers for product catalogue and search endpoints.',
        ],
      },
    ],
  },
  {
    company: 'NowFloats',
    role: 'Software Developer',
    location: 'Hyderabad',
    period: 'Apr 2023 — Jul 2024',
    logo: 'https://logo.clearbit.com/nowfloats.com',
    projects: [
      {
        name: 'Boost 360',
        stack: ['ReactJS', 'NextJS', 'TypeScript'],
        bullets: [
          'Rebuilt the product website, improving load times by 40% and enhancing SEO rankings.',
          'Developed 10+ reusable React components with modular CSS for consistent, maintainable UI.',
        ],
      },
      {
        name: 'Cosmetics E-Commerce',
        stack: ['ReactJS', 'NextJS'],
        bullets: [
          'Led a 3-member team to deliver a cross-device platform in 8 weeks.',
          'Reduced page load times by 60% and boosted organic traffic by 40% in Q1 via SSR.',
          'Integrated REST APIs and collaborated with UX and product teams through code reviews.',
        ],
      },
    ],
  },
  {
    company: 'Infosys',
    role: 'Digital Specialist Engineer',
    location: 'Hyderabad',
    period: 'Aug 2021 — Mar 2023',
    logo: 'https://logo.clearbit.com/infosys.com',
    projects: [
      {
        name: 'BNSF Railways Application',
        stack: ['Angular', 'Electron', 'TypeScript'],
        bullets: [
          'Built a scalable cross-platform desktop application using Angular and Electron with accessible, semantic layouts.',
          'Designed a routing algorithm optimising task allocation for customer interactions, ensuring high-priority queries resolved within minutes.',
          'Developed reusable TypeScript components and services using Angular\u2019s dependency injection across cross-functional teams.',
        ],
      },
    ],
  },
];

export type SkillCategory = {
  label: string;
  items: { name: string; icon: string }[];
};

// Using simpleicons CDN — free, no key, every major tech logo
const si = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: si('react') },
      { name: 'Next.js', icon: si('nextdotjs') },
      { name: 'TypeScript', icon: si('typescript') },
      { name: 'JavaScript', icon: si('javascript') },
      { name: 'Angular', icon: si('angular') },
      { name: 'Redux', icon: si('redux') },
      { name: 'React Query', icon: si('reactquery') },
      { name: 'Tailwind CSS', icon: si('tailwindcss') },
      { name: 'HTML5', icon: si('html5') },
      { name: 'CSS3', icon: si('css3') },
      { name: 'Jest', icon: si('jest') },
      { name: 'Storybook', icon: si('storybook') },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: si('nodedotjs') },
      { name: 'Python', icon: si('python') },
      { name: 'Express', icon: si('express') },
      { name: 'FastAPI', icon: si('fastapi') },
      { name: 'GraphQL', icon: si('graphql') },
    ],
  },
  {
    label: 'Cloud & Tools',
    items: [
      { name: 'AWS', icon: si('amazonaws') },
      { name: 'Azure', icon: si('microsoftazure') },
      { name: 'Docker', icon: si('docker') },
      { name: 'Git', icon: si('git') },
      { name: 'Webpack', icon: si('webpack') },
      { name: 'Grafana', icon: si('grafana') },
    ],
  },
];

export const stats = [
  { value: '5+', label: 'Years building products' },
  { value: '4', label: 'Companies, end-to-end ownership' },
  { value: '90+', label: 'Lighthouse, from 65' },
  { value: '37%', label: 'Bundle size reduction' },
];
