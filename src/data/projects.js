export const brand = {
  handle: 'ITS_ADREX',
  name: 'Adam Oladiran',
  tagline: 'Software developer building modern web & mobile apps',
  creditLine: 'Made by ITS_ADREX',
  creditUrl: 'https://itsadrex.com',
  photo: '/images/profile.png',
  photoAlt: 'Adam Oladiran — ITS_ADREX',
};

export const projects = [
  {
    slug: 'adirebloom',
    name: 'AdireBloom',
    url: 'https://adirebloomtest.netlify.app',
    github: 'https://github.com/ItsADREX/AdireBloom',
    category: 'client',
    type: 'web',
    status: 'live',
    featured: true,
    preview: true,
    tags: ['React', 'Vite', 'Express', 'Paystack', 'E-commerce'],
    blurb:
      'Full-stack fashion e-commerce for a heritage Adire brand — shop, cart, Paystack checkout, auth, and order tracking.',
  },
  {
    slug: 'gc-studios',
    name: 'GC STUDIO',
    url: 'https://gc-studio.netlify.app',
    github: 'https://github.com/itsadrex/gc-studio-web',
    category: 'client',
    type: 'web',
    status: 'live',
    featured: true,
    preview: true,
    tags: ['Next.js', 'Supabase', 'Tailwind', 'E-commerce'],
    blurb:
      'Handmade crochet e-commerce for Gifted Crochet Studio — shop, custom orders, WhatsApp checkout, and admin product management.',
  },
  {
    slug: 'anime-store',
    name: 'The Otaku City',
    url: 'https://theotakucity.netlify.app',
    github: 'https://github.com/ItsADREX/portfolio-anime-store',
    category: 'showcase',
    type: 'web',
    status: 'live',
    featured: false,
    preview: true,
    tags: ['HTML', 'CSS', 'JS', 'E-commerce'],
    blurb:
      'A cinematic e-commerce concept for anime merchandise — curated collections, product cards and a smooth shopping flow.',
  },
  {
    slug: 'agency',
    name: 'OFF / Studio',
    url: 'https://off-studio.netlify.app',
    github: 'https://github.com/ItsADREX/portfolio-agency',
    category: 'showcase',
    type: 'web',
    status: 'live',
    featured: false,
    preview: true,
    tags: ['HTML', 'CSS', 'JS', 'Agency'],
    blurb:
      'A bold, brutalist marketing site for a creative studio — identity, web, motion and product work.',
  },
  {
    slug: 'gadget-store',
    name: 'KOVA Gadgets',
    url: 'https://kovagadget.netlify.app',
    github: 'https://github.com/ItsADREX/portfolio-gadget-store',
    category: 'showcase',
    type: 'web',
    status: 'live',
    featured: false,
    preview: true,
    tags: ['HTML', 'CSS', 'JS', 'E-commerce'],
    blurb:
      'A modern storefront for phones, laptops and accessories with filters and a clean buying flow.',
  },
  {
    slug: 'real-estate',
    name: 'Ilé Luxury',
    url: 'https://ileluxury.netlify.app',
    github: 'https://github.com/ItsADREX/portfolio-real-estate',
    category: 'showcase',
    type: 'web',
    status: 'live',
    featured: false,
    preview: true,
    tags: ['HTML', 'CSS', 'JS', 'Real Estate'],
    blurb:
      'Luxury property listings with hero search, featured estates and an agent-friendly layout.',
  },
  {
    slug: 'restaurant',
    name: 'Solène',
    url: 'https://solenerestorant.netlify.app',
    github: 'https://github.com/ItsADREX/portfolio-restaurant',
    category: 'showcase',
    type: 'web',
    status: 'live',
    featured: false,
    preview: true,
    tags: ['HTML', 'CSS', 'JS', 'Hospitality'],
    blurb:
      'An elegant Lagos dining experience site with menu showcase, reservations and gallery.',
  },
  {
    slug: 'jobaiready',
    name: 'JobAI Ready',
    url: 'https://jobaiready.com',
    category: 'platform',
    type: 'web',
    status: 'live',
    featured: false,
    preview: false,
    thumbnail: '/projects/jobaiready.svg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AI', 'LMS'],
    blurb:
      'Production e-learning platform — 29+ courses, LMS, payments, AI study buddy, certificates, and admin dashboard.',
  },
];

export const apps = [
  {
    slug: 'split-ide',
    name: 'Split IDE',
    tagline: 'Mobile cloud code editor',
    status: 'beta',
    platforms: ['android'],
    gradient: ['#dc2626', '#991b1b'],
    icon: '⌘',
    logo: '/apps/split-ide/logo.jpg',
    screenshots: [
      '/apps/split-ide/1.png',
      '/apps/split-ide/2.png',
      '/apps/split-ide/3.png',
    ],
    github: 'https://github.com/ItsADREX/split-ide-mobile',
    tags: ['Flutter', 'Supabase', 'GitHub API'],
    blurb:
      'Edit code on your phone with syntax highlighting, live HTML preview, GitHub sync, and cloud project storage.',
    features: [
      'Multi-file projects with syntax highlighting',
      'Live HTML preview in WebView',
      'GitHub clone, pull, and push',
      'Google and email auth via Supabase',
    ],
    tryIt: {
      type: 'waitlist',
      label: 'Request Android beta',
    },
  },
  {
    slug: 'rexpay',
    name: 'Rexpay',
    tagline: 'Personal finance for Nigeria',
    status: 'wip',
    platforms: ['android'],
    gradient: ['#6c8cff', '#8b5cf6'],
    icon: '₦',
    screenshots: [],
    github: 'https://github.com/ItsADREX/rexpay',
    tags: ['Flutter', 'Supabase', 'Paystack', 'FinTech'],
    blurb:
      'Wallet dashboard, expense tracking, budgets, savings goals, and Nigeria-focused KYC via Paystack.',
    features: [
      'Wallet and transaction management',
      'Budgets and savings goals',
      'Paystack virtual accounts and BVN verification',
      'Row-level security on Supabase',
    ],
    tryIt: {
      type: 'waitlist',
      label: 'Join waitlist',
    },
  },
  {
    slug: 'devpresence',
    name: 'DevPresence',
    tagline: 'Developer social presence',
    status: 'concept',
    platforms: ['android', 'ios'],
    gradient: ['#34d399', '#06b6d4'],
    icon: '✦',
    screenshots: [],
    github: null,
    tags: ['Flutter', 'Firebase', 'FastAPI', 'AI'],
    blurb:
      'Multi-platform post composer for developers — schedule content across Twitter, LinkedIn, and more with AI assist.',
    features: [
      'Cross-platform post composer',
      'OAuth social connections',
      'AI content generation (backend in progress)',
      'Onboarding and subscription hooks',
    ],
    tryIt: {
      type: 'waitlist',
      label: 'Notify me at launch',
    },
  },
];

export const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'platform', label: 'Platform' },
  { value: 'client', label: 'Client Work' },
  { value: 'showcase', label: 'Showcase Sites' },
];

export const statusLabels = {
  live: { label: 'Live', className: 'status-live' },
  beta: { label: 'Beta', className: 'status-beta' },
  wip: { label: 'WIP', className: 'status-wip' },
  concept: { label: 'Concept', className: 'status-concept' },
};

export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'Tailwind',
  'Flutter',
  'React Native',
  'Firebase',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'Git & GitHub',
  'Figma',
];

export const contact = {
  email: 'itsadrex205@gmail.com',
  github: 'https://github.com/ItsADREX',
  linkedin: 'https://www.linkedin.com/in/adam-oladiran-994665254/',
  twitter: 'https://x.com/ITS_ADREX',
  twitterHandle: '@ITS_ADREX',
  instagram: 'https://www.instagram.com/adam_oladiran/',
  instagramHandle: '@adam_oladiran',
};

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAppBySlug(slug) {
  return apps.find((a) => a.slug === slug);
}
