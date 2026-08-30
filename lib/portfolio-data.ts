export const profile = {
  name: 'Kajal Pandey',
  role: 'Computer Science Engineering Student',
  tagline: 'Developer • Problem Solver • AI/ML Enthusiast',
  location: 'India',
  about:
    'Computer Science Engineering student with a strong academic foundation and hands-on experience across AI/ML, full-stack development, and sensor-based systems. Passionate about programming, problem solving, emerging technologies, and building practical solutions to real-world problems.',
  cgpa: '9.16',
  // Edit these links as needed.
  contact: {
    github: 'https://github.com/kajalpandey26122005-cell',
    linkedin: 'http://www.linkedin.com/in/kajal-pandey-8b50b4362',
    email: 'kajalpandeyletsdoit041201@gmail.com',
  },
}

export const systemStatus = [
  { label: 'SYSTEM', value: 'ONLINE' },
  { label: 'BUILD', value: 'STABLE' },
  { label: 'PROFILE', value: 'DEVELOPER' },
  { label: 'MODE', value: 'PORTFOLIO' },
  { label: 'LOCATION', value: 'INDIA' },
]

export const navSections = [
  'about',
  'education',
  'skills',
  'projects',
  'achievements',
  'certifications',
  'interests',
  'goals',
] as const

export const aboutStats = [
  { label: 'CGPA', value: '9.16' },
  { label: 'LANGUAGES', value: 'Python • C • C++' },
  { label: 'FOCUS', value: 'AI/ML • Software Development' },
]

export type EducationEntry = {
  tag: string
  institution: string
  location: string
  degree: string
  detail: string
  metricLabel: string
  metric: string
  period: string
  status: string
}

export const education: EducationEntry[] = [
  {
    tag: '2025 → PRESENT',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology',
    detail: 'Computer Science and Engineering — First Year',
    metricLabel: 'CGPA',
    metric: '9.16',
    period: 'Aug 2025 – Present',
    status: 'ACTIVE',
  },
  {
    tag: '2022 → 2024',
    institution: 'Shakun Vidya Niketan',
    location: 'Naini, Prayagraj, UP',
    degree: 'Intermediate — PCM',
    detail: 'Physics, Chemistry, Mathematics',
    metricLabel: 'SCORE',
    metric: '85%',
    period: '2022 – 2024',
    status: 'COMPLETE',
  },
  {
    tag: '2020 → 2022',
    institution: 'Shakun Vidya Niketan',
    location: 'Naini, Prayagraj, UP',
    degree: 'Matriculation',
    detail: 'Secondary Education',
    metricLabel: 'SCORE',
    metric: '95%',
    period: '2020 – 2022',
    status: 'COMPLETE',
  },
]

export type SkillCategory = {
  id: string
  title: string
  command: string
  items: string[]
  note: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    command: 'cat languages.txt',
    items: ['Python', 'C', 'C++'],
    note: 'Core languages used across academic and personal projects.',
  },
  {
    id: 'cs',
    title: 'Computer Science',
    command: 'cat concepts.txt',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Problem Solving'],
    note: 'Foundational concepts driving efficient, structured solutions.',
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    command: 'cat ai.txt',
    items: ['Machine Learning Fundamentals'],
    note: 'Understanding of core machine learning principles and workflows.',
  },
  {
    id: 'tools',
    title: 'Development Tools',
    command: 'cat tools.txt',
    items: ['Git', 'GitHub', 'VS Code'],
    note: 'Version control and everyday development environment.',
  },
  {
    id: 'ai-assisted',
    title: 'AI-Assisted Development',
    command: 'cat ai-tools.txt',
    items: ['Google Antigravity', 'Emergent AI'],
    note: 'Leveraging modern AI tooling to accelerate development.',
  },
]

export type Project = {
  id: string
  index: string
  title: string
  subtitle: string
  tech: string[]
  description: string
  features: string[]
  // Set to a real URL when available, otherwise leave as '' to render a disabled/editable button.
  liveUrl: string
  githubUrl: string
  kind: 'evaluator' | 'network' | 'sensors'
}

export const projects: Project[] = [
  {
    id: 'ai-response-evaluator',
    index: '01',
    title: 'AI Response Evaluator',
    subtitle: 'Python • LLM APIs',
    tech: ['Python', 'LLM APIs', 'Git'],
    description:
      'Built a Python-based evaluation system that scores AI-generated responses on correctness, relevance, completeness, clarity, and hallucination risk.',
    features: [
      'Structured scoring criteria',
      'LLM API integration',
      'Automated response analysis',
      'Secure API key management',
      'Environment variables',
      'Git/GitHub version control',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/kajalpandey26122005-cell',
    kind: 'evaluator',
  },
  {
    id: 'food-rescue-network',
    index: '02',
    title: 'Food Rescue Network',
    subtitle: 'Full-Stack Hackathon Project',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io'],
    description:
      'Built a full-stack platform connecting food donors, NGOs, and volunteers for real-time surplus food distribution.',
    features: [
      'AI-powered NGO matching',
      'Google Maps live tracking',
      'Real-time notifications',
      'Socket.io',
      'JWT authentication',
      'OTP/QR delivery verification',
      'Expiry-based urgency tracking',
      'Admin dashboards',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/kajalpandey26122005-cell',
    kind: 'network',
  },
  {
    id: 'smart-clean-table',
    index: '03',
    title: 'Smart Clean Table',
    subtitle: 'Sensor-Based Waste Detection System',
    tech: ['Arduino', 'Ultrasonic', 'PIR', 'Capacitive', 'Piezoelectric', 'Bluetooth', 'Servo/Motor'],
    description:
      'Developed an Arduino-based system using multiple sensors to detect objects left on tables and trigger an automated cleaning mechanism.',
    features: [
      'Sensor fusion',
      'Object detection',
      'Automated cleaning mechanism',
      'Motor control',
      'Servo actuation',
      'Bluetooth monitoring',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/kajalpandey26122005-cell',
    kind: 'sensors',
  },
]

export const evaluatorCategories = [
  'CORRECTNESS',
  'RELEVANCE',
  'COMPLETENESS',
  'CLARITY',
  'HALLUCINATION RISK',
]

export const networkNodes = ['DONOR', 'NGO', 'VOLUNTEER', 'DELIVERY']

export const sensors = [
  { name: 'ULTRASONIC', status: 'ACTIVE' },
  { name: 'PIR', status: 'ACTIVE' },
  { name: 'CAPACITIVE', status: 'ACTIVE' },
  { name: 'PIEZOELECTRIC', status: 'ACTIVE' },
  { name: 'BLUETOOTH', status: 'CONNECTED' },
]

export type Achievement = {
  id: string
  title: string
  metric?: string
  description: string
}

export const achievements: Achievement[] = [
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    description:
      'Anchored various school events and functions, demonstrating strong public speaking and stage presence.',
  },
  {
    id: 'python-score',
    title: 'Python Certification Score',
    metric: '96.84%',
    description: 'Achieved 96.84% in CS105: Introduction to Python from Saylor Academy.',
  },
]

export type Certification = {
  title: string
  issuer: string
  date: string
  // Add a real verification URL when available.
  url: string
}

export const certifications: Certification[] = [
  {
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    date: 'Mar 2026',
    url: '',
  },
  { title: 'Data Science', issuer: 'Infosys Springboard', date: 'Mar 2026', url: '' },
  { title: 'Big Data', issuer: 'Infosys Springboard', date: 'Mar 2026', url: '' },
  {
    title: 'CS105: Introduction to Python',
    issuer: 'Saylor Academy',
    date: 'Feb 2026',
    url: '',
  },
  {
    title: 'Computer Programming — 150 Hours',
    issuer: 'neo colab (An NIT Venture)',
    date: 'May 2026',
    url: '',
  },
  { title: 'CS107: C++ Programming', issuer: 'Saylor Academy', date: 'Jan 2026', url: '' },
]

export const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Programming',
  'Problem Solving',
  'Software Development',
  'Technology Projects',
  'Learning New Technologies',
  'Public Speaking',
]

export const mission = {
  statement:
    'Build strong foundations in computer science, continuously improve problem-solving and development skills, explore AI/ML, and create technology that solves meaningful real-world problems.',
  status: 'IN PROGRESS',
  objective: ['LEARN', 'BUILD', 'SHIP', 'IMPROVE'],
}

export const currentFocus = ['AI/ML', 'SOFTWARE DEVELOPMENT', 'PROBLEM SOLVING']
