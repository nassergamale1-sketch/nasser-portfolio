// =============================================================
//  ALL SITE CONTENT LIVES HERE.
//  Edit text, links, projects and certifications in this file —
//  no need to touch any component.
//  Source of truth: Nasser_Gamal_CV.pdf (July 2026)
// =============================================================

export const site = {
  name: 'Nasser Gamal',
  fullName: 'Nasser Gamal Mohamed Idris',
  role: 'AI & Machine Learning Student | Digital Marketing Specialist',
  tagline: 'I build with code. I grow with data.',
  email: 'nassergamal.e1@gmail.com',
  phone: '+20 109 329 2350',
  phoneHref: '+201093292350',
  instagram: 'https://www.instagram.com/nasser.gamal.official',
  instagramHandle: '@nasser.gamal.official',
  linkedin: 'https://www.linkedin.com/in/nasser-gamal',
  linkedinHandle: 'in/nasser-gamal',
  github: 'https://github.com/nassergamale1-sketch',
  githubHandle: 'nassergamale1-sketch',
  photo: './nasser.jpg',
  location: 'Egypt',
}

export const nav = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'services', label: 'Services', num: '02' },
  { id: 'skills', label: 'Skills', num: '03' },
  { id: 'experience', label: 'Experience', num: '04' },
  { id: 'press', label: 'Press', num: '05' },
  { id: 'certifications', label: 'Certs', num: '06' },
  { id: 'work', label: 'Work', num: '07' },
  { id: 'contact', label: 'Contact', num: '08' },
]

// Animated stat counters — shown in a band under About.
export const stats = [
  { value: 3, suffix: 'rd', label: 'Place — TechFront Hackathon' },
  { value: 1, suffix: '', label: 'Patent application filed' },
  { value: 16, suffix: '', label: 'Certifications & programs' },
  { value: 3, suffix: '+', label: 'Years growing brands' },
]

// Services — what clients can hire him for.
export const services = [
  {
    num: '01',
    title: 'AI Development',
    desc: 'Real AI products — from computer vision (OpenCV, YOLO) to smart platforms like Mwasalaty. Award-winning, patent-backed work.',
    tags: ['Python', 'Machine Learning', 'Computer Vision'],
    featured: true,
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Fast, modern websites — from landing pages to full builds. Designed well, deployed properly, easy to update.',
    tags: ['Front-End', 'React', 'Deployment'],
  },
  {
    num: '03',
    title: 'Growth & Social Media',
    desc: 'Content strategy, paid ads on Meta & TikTok, and SEO. Plans built on data — not guesses.',
    tags: ['Meta Ads', 'TikTok Ads', 'SEO'],
  },
]

export const marquee = [
  'Artificial Intelligence',
  'Machine Learning',
  'Computer Vision',
  'Python',
  'Prompt Engineering',
  'Web Development',
  'Growth Marketing',
  'Paid Ads',
  'SEO',
  'Google Cloud',
]

export const about = {
  lead: 'Most developers can’t sell. Most marketers can’t build. I do both.',
  // Award-ceremony photo shown under the pull quote.
  photo: {
    src: './nasser-ceremony.jpg',
    alt: 'Nasser Gamal in a black suit receiving a certificate on stage at a tech event, sponsor logos behind him',
    caption: 'On stage — certificate ceremony',
  },
  paragraphs: [
    'AI & Machine Learning student at Arab Open University (BSc 2026), trained at AUC. My biggest build: Mwasalaty (مواصلاتي) — an AI transportation platform that took 3rd place at the TechFront Hackathon and is now patent-pending.',
    'The other side: 3+ years growing social accounts for celebrities and brands. Code plus growth — a mix recognized by the Ministry of Youth & Sports and Misr El Kheir Foundation.',
  ],
}

export const skills = {
  tech: {
    title: 'AI & Tech',
    code: 'builder.exe',
    intro: 'The engineering side — building things that work.',
    items: [
      { name: 'Python', level: 'Core' },
      { name: 'Machine Learning', level: 'Applied' },
      { name: 'Computer Vision — OpenCV · YOLO', level: 'Hands-on' },
      { name: 'Prompt Engineering', level: 'Certified' },
      { name: 'Web Development', level: 'Core' },
      { name: 'C++', level: 'Learning' },
      { name: 'GitHub / Version Control', level: 'Daily' },
      { name: 'Google Cloud Deployment', level: 'Working' },
    ],
  },
  growth: {
    title: 'Marketing & Growth',
    code: 'growth.exe',
    intro: 'The growth side — making things reach people.',
    items: [
      { name: 'Social Media Strategy', level: '3+ yrs' },
      { name: 'Meta Ads', level: 'Paid' },
      { name: 'TikTok Ads', level: 'Paid' },
      { name: 'SEO — On & Off Page', level: 'Proven' },
      { name: 'Content Strategy', level: 'Core' },
      { name: 'Campaign Analytics', level: 'Data-driven' },
    ],
  },
  finance: {
    title: 'Banking & Markets',
    code: 'finance.exe',
    intro: 'The finance side — markets, banking and confident presenting.',
    items: [
      { name: 'Stock Exchange Basics — EGX', level: 'Simulated' },
      { name: 'Financial Inclusion', level: 'Trained' },
      { name: 'Banking Products', level: 'Trained' },
      { name: 'Public Speaking', level: 'Best Presenter' },
    ],
  },
}

export const experience = [
  {
    period: '2025 — Present',
    role: 'Founder & Sole Developer — Mwasalaty',
    org: 'AI-Powered Smart Transportation Platform',
    current: true,
    points: [
      'Designed, developed and presented an AI platform that makes public transport in Egypt easier and smarter — built completely solo.',
      'Won 3rd place at the TechFront Hackathon 2025–2026 (Arab Open University), competing against full teams.',
      'Filed a patent application — “Mwasalaty Express” — with the Academy of Scientific Research and Technology.',
      'Now developing it into a market-ready product with real-world impact.',
    ],
  },
  {
    period: '2022 — Present',
    role: 'Social Media & Digital Marketing Specialist',
    org: 'Freelance — Egypt',
    current: true,
    points: [
      'Managed and grew social accounts for celebrities, influencers and brands — strategy, content and community.',
      'Ran paid campaigns on Meta and TikTok, optimized by real performance data.',
      'Improved visibility with SEO and built websites that support clients’ marketing goals.',
    ],
  },
  {
    period: '→ 2026',
    role: 'AI & Machine Learning Student',
    org: 'Arab Open University',
    current: true,
    points: [
      'BSc in Artificial Intelligence — expected 2026.',
      'Completed “Introduction to AI with Python” at The American University in Cairo (AUC).',
      'Code Camp graduate — Ministry of Youth & Sports × Misr El Kheir: Python, GitHub, AI prompting and Google Cloud deployment.',
      'Built a real-time object detection system with Python, OpenCV and YOLO.',
    ],
  },
]

// Awards & recognition — rendered as trophy cards above certifications.
// `image` (optional) opens the certificate in a lightbox on click.
export const awards = [
  {
    title: '3rd Place — TechFront Hackathon',
    org: 'Arab Open University · 2025–2026',
    note: 'Won with Mwasalaty at the student competition.',
    image: './projects/mwasalaty.jpg',
  },
  {
    title: 'Best Presenter Award',
    org: 'Banker’s Lounge Academy',
    note: 'For clear, confident public speaking.',
    image: './certificates/best-presenter.jpg',
  },
  {
    title: 'Excellence in Programming & AI',
    org: 'Ministry of Youth & Sports × Misr El Kheir',
    note: 'National recognition for tech skills.',
    image: './certificates/code-camp.jpg',
  },
]

// Event / behind-the-scenes photos ("Moments" strip).
// Files that don't exist yet are hidden automatically.
export const moments = [
  {
    src: './moments/ceremony.jpg',
    caption: 'On stage — certificate ceremony',
  },
  {
    src: './moments/egypt-post-visit.jpg',
    caption: 'Egypt Post Museum — educational visit',
  },
  {
    src: './moments/bankers-workspace.jpg',
    caption: 'Banker’s Lounge Academy — training day',
  },
]

export const press = [
  {
    outlet: 'Al Hadath Al Youm',
    type: 'TV Channel',
    detail: 'Featured guest — speaking on digital marketing and personal branding.',
    date: '2022',
  },
  {
    outlet: 'Online with Radwa Muneer',
    type: 'TV Show',
    detail: 'Guest appearance — digital marketing and building an online presence.',
    date: 'Oct 12, 2022',
  },
]

// Photo used as the big feature image in the Press section.
export const pressPhoto = {
  src: './nasser-speaking.jpg',
  alt: 'Nasser Gamal speaking on stage at a conference, in front of TV channel microphones',
  caption: 'Speaking on stage — national TV mics on the podium',
}

// `image` (optional) = scanned certificate; shows in the wall + opens a lightbox.
// Missing image files are hidden automatically until you add them.
export const certifications = [
  {
    title: 'Introduction to AI with Python',
    org: 'The American University in Cairo (AUC)',
    year: '2026',
    tag: 'AI',
    featured: true,
    note: '100 contact hours — School of Continuing Education',
    image: './certificates/auc-ai-python.jpg',
  },
  {
    title: 'AI & Machine Learning Diploma',
    org: 'Route IT Training Center',
    year: '2025',
    tag: 'AI',
    image: './certificates/route-it-aiml.jpg',
  },
  {
    title: 'Big Data Analysis — Summer Training',
    org: 'ITIDA × National Telecommunication Institute',
    year: '2024',
    tag: 'AI',
    note: '120 hours — incl. freelancing & personal branding',
    image: './certificates/itida-big-data.jpg',
  },
  {
    title: 'One Million Prompters — Prompt Engineering',
    org: 'Dubai Centre for Artificial Intelligence',
    year: '2026',
    tag: 'AI',
    image: './certificates/one-million-prompters.jpg',
  },
  {
    title: 'Code Camp Training Program',
    org: 'Ministry of Youth & Sports × Misr El Kheir',
    year: '2026',
    tag: 'Dev',
    featured: true,
    note: 'Python · GitHub · AI prompting · Google Cloud',
    image: './certificates/code-camp.jpg',
  },
  {
    title: 'Summer Training Program',
    org: 'Banker’s Lounge Academy',
    year: '2026',
    tag: 'Business',
    image: './certificates/bankers-summer.jpg',
  },
  {
    title: 'EGX Simulation Day',
    org: 'Egyptian Stock Exchange (EGX)',
    year: '2026',
    tag: 'Business',
    image: './certificates/egx-simulation.jpg',
  },
  {
    title: 'Financial Inclusion & Banking Products',
    org: 'NilePreneurs × Agricultural Bank of Egypt',
    year: '2026',
    tag: 'Business',
    image: './certificates/nilepreneurs.jpg',
  },
  {
    title: 'Pledge & Commitment National Initiative',
    org: 'Certificate of Appreciation',
    year: '—',
    tag: 'Business',
    image: './certificates/pledge-commitment.jpg',
  },
  {
    title: 'Certificate of Appreciation',
    org: 'Egypt Post Museum × Banker’s Lounge',
    year: '2026',
    tag: 'Business',
    image: './certificates/egypt-post.jpg',
  },
  {
    title: 'Social Media Certification',
    org: 'HubSpot Academy',
    year: '2022',
    tag: 'Marketing',
  },
  {
    title: 'Paid Digital Campaigns',
    org: 'Edraak',
    year: '2022',
    tag: 'Marketing',
  },
  {
    title: 'Digital Marketing',
    org: 'For9a Platform',
    year: '2022',
    tag: 'Marketing',
  },
  {
    title: 'Full-Stack Web Development',
    org: 'Fellstak',
    year: 'Ongoing',
    tag: 'Dev',
    ongoing: true,
  },
  {
    title: 'C++ Programming',
    org: 'Online Course',
    year: 'Ongoing',
    tag: 'Dev',
    ongoing: true,
  },
  {
    title: 'AI, Data Science & ML',
    org: 'Multiple Online Platforms',
    year: 'Ongoing',
    tag: 'AI',
    ongoing: true,
  },
]

// ---------------------------------------------------------------
//  PROJECTS — first two are real AI projects from the CV.
//  To add a screenshot: drop it in /public/projects/
//  (e.g. project-1.jpg) and it appears automatically.
//  `kind` is either 'dev' or 'growth' (controls the label color).
// ---------------------------------------------------------------
export const projects = [
  {
    image: './projects/mwasalaty.jpg',
    alt: 'TechFront Hackathon certificate for Mwasalaty, held up in the award hall',
    title: 'Mwasalaty (مواصلاتي)',
    desc: 'AI-powered smart transportation platform for Egypt — designed and built completely solo, now patent-pending.',
    result: '3rd place + patent filed',
    kind: 'dev',
  },
  {
    image: './projects/project-2.jpg',
    alt: 'Real-time object detection system — Python, OpenCV, YOLO',
    title: 'Real-Time Object Detection',
    desc: 'Live video object detection and tracking built with Python, OpenCV and YOLO.',
    result: 'Computer vision — YOLO',
    kind: 'dev',
  },
  {
    image: './projects/project-3.jpg',
    alt: 'Campaign results screenshot — placeholder',
    title: 'Influencer Growth Campaign',
    desc: 'Full-funnel content and ads strategy for a public figure.',
    result: '+40% engagement',
    kind: 'growth',
  },
  {
    image: './projects/aqargo.jpg',
    alt: 'Aqar-Go real estate platform — homepage with smart search and property listings',
    title: 'Aqar-Go — Real Estate Platform',
    desc: 'AI-powered real estate platform — smart search, bank financing tools and AI virtual tours.',
    result: 'Full product build',
    kind: 'dev',
  },
  {
    image: './projects/project-5.jpg',
    alt: 'Paid ads dashboard screenshot — placeholder',
    title: 'Meta & TikTok Ads Sprint',
    desc: 'Paid acquisition with weekly data-driven optimization.',
    result: 'Lower CPA',
    kind: 'growth',
  },
  {
    image: './projects/project-6.jpg',
    alt: 'SEO analytics screenshot — placeholder',
    title: 'SEO Visibility Push',
    desc: 'On-page SEO and content plan for a client brand.',
    result: 'Ranking gains',
    kind: 'growth',
  },
]
