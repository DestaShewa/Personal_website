export const projects = [
  {
    id: 'wbocs',
    slug: 'wbocs',
    title: 'WBOCS – Office Communication System',
    shortDescription: 'A MERN-stack office communication system for institutional hierarchies, memos, tasks, and real-time messaging.',
    problem: 'Institutions need communication and task workflows that reflect their organizational hierarchy and give users access based on their roles.',
    solution: 'WBOCS brings role-based authorization, electronic memos, task workflows, and real-time messaging together with REST APIs and Socket.io.',
    features: [
      'Institutional organizational hierarchy',
      'Role-based authorization',
      'Electronic memos and task workflows',
      'Real-time messaging',
      'REST APIs and Socket.io'
    ],
    contribution: 'Full-stack and backend web application development, including institutional workflows, authorization, APIs, and real-time communication.',
    result: 'Marketed as Full-Stack / Backend Web Application Development.',
    highlights: ['MERN Stack', 'Role-Based Authorization', 'REST APIs', 'Socket.io'],
    category: 'Full-Stack / Backend',
    liveUrl: 'https://web-based-office-communication-fron.vercel.app/login',
    featured: true
  },
  {
    id: 'personal-finance-dashboard',
    slug: 'personal-finance-dashboard',
    title: 'Personal Finance Dashboard',
    shortDescription: 'A full-stack finance dashboard for managing financial transactions and account workflows.',
    problem: 'A finance dashboard needs connected frontend and backend workflows to manage transactions, authentication, and supporting background tasks.',
    solution: 'The application integrates frontend and backend functionality with JWT and OAuth authentication, database operations, Redis, email, and scheduled tasks.',
    features: [
      'Frontend and backend integration',
      'JWT and OAuth authentication',
      'Financial transaction management',
      'Database operations',
      'Redis, email, and scheduled tasks'
    ],
    contribution: 'Full-stack web application development, covering transaction management, authentication, data operations, and background workflows.',
    result: 'Marketed as Full-Stack Web Application Development.',
    highlights: ['JWT', 'OAuth', 'Redis', 'Scheduled Tasks'],
    category: 'Full-Stack',
    liveUrl: 'https://personal-finance-frontend-jet.vercel.app/',
    featured: true
  },
  {
    id: 'adamu-solar',
    slug: 'adamu-solar',
    title: 'Adamu Solar',
    shortDescription: 'A responsive, multilingual business website built to present a real business professionally.',
    problem: 'A business needs a polished online presence that communicates its services clearly and works for visitors across languages and devices.',
    solution: 'Adamu Solar presents the business through a responsive website with a multilingual interface and a professional visual presentation.',
    features: [
      'Real business requirements',
      'Professional business presentation',
      'Responsive design',
      'Multilingual interface',
      'Deployment experience'
    ],
    contribution: 'Business website and frontend development, including responsive presentation, multilingual interface work, and deployment.',
    result: 'Marketed as Business Website and Frontend Development.',
    highlights: ['Responsive Design', 'Multilingual Interface', 'Business Website', 'Deployment'],
    category: 'Business Website',
    liveUrl: 'https://adamu-solar.vercel.app/',
    featured: true
  },
  {
    id: 'learnova',
    slug: 'learnova',
    title: 'Learnova – Student Learning Portal',
    shortDescription: 'A student learning portal built with vanilla JavaScript, UI development, and local data persistence.',
    problem: 'A learning portal needs a clear student-facing interface and workflows that preserve learning data between visits.',
    solution: 'Learnova combines vanilla JavaScript UI development with local data persistence and learning-platform workflows.',
    features: [
      'Vanilla JavaScript development',
      'User interface development',
      'Local data persistence',
      'Learning-platform workflows'
    ],
    contribution: 'Frontend development focused on vanilla JavaScript, interface development, local persistence, and learning workflows.',
    result: 'Marketed as Frontend Development.',
    highlights: ['Vanilla JavaScript', 'UI Development', 'Local Data Persistence', 'Learning Workflows'],
    category: 'Frontend',
    liveUrl: 'https://learnova-student-learning-portal.vercel.app/',
    featured: true
  }
];

export function getFeaturedProjects() {
  return projects.filter(project => project.featured);
}

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}
