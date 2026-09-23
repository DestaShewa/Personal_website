export const projects = [
  {
    id: 'ecommerce-platform',
    slug: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    shortDescription: 'A full-stack e-commerce solution with cart, checkout, and admin dashboard.',
    problem: 'The client needed a custom e-commerce solution that could handle complex product variants and integrate with their existing inventory management system, which off-the-shelf platforms could not support.',
    solution: 'Built a headless Next.js frontend connected to a robust Node.js REST API. Designed a normalized PostgreSQL schema to handle product variants, inventory tracking, and complex order states.',
    features: [
      'Authentication and role-based authorization (Customer vs Admin)',
      'Product catalog with complex variant selection',
      'Shopping cart with optimistic UI updates',
      'Secure checkout flow integration',
      'Admin dashboard for order management and inventory tracking',
      'Performance-optimized image loading'
    ],
    contribution: 'I architected and developed the entire application from scratch. I designed the database schema, built the REST API, and developed the responsive React frontend.',
    result: 'The platform successfully handles thousands of daily visitors with a 99.9% uptime and sub-second page load times. The custom variant system reduced inventory errors by 40%.',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    category: 'Full-Stack',
    image: '/images/projects/ecommerce.jpg', // Placeholder
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/desta/ecommerce',
    featured: true
  },
  {
    id: 'saas-analytics-dashboard',
    slug: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription: 'Interactive data visualization dashboard for a marketing SaaS product.',
    problem: 'Marketing teams were struggling to understand their campaign performance because the existing reporting tool was slow and required manual data exports.',
    solution: 'Developed a high-performance React dashboard that connects to multiple third-party APIs, aggregates the data in a PostgreSQL data warehouse, and presents it through interactive charts.',
    features: [
      'Real-time data synchronization',
      'Interactive time-series charts and geographic maps',
      'Customizable report generation (PDF/CSV exports)',
      'Advanced filtering and segmenting capabilities',
      'Dark/Light mode support'
    ],
    contribution: 'Focused primarily on the frontend architecture and complex data visualization components, ensuring smooth rendering even with large datasets.',
    result: 'Reduced report generation time from hours to seconds. The dashboard became the highest-rated feature in customer satisfaction surveys.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'PostgreSQL'],
    category: 'Frontend',
    image: '/images/projects/dashboard.jpg', // Placeholder
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/desta/analytics',
    featured: true
  },
  {
    id: 'task-management-api',
    slug: 'task-management-api',
    title: 'Enterprise Task Management API',
    shortDescription: 'Robust RESTful API powering a multi-tenant task management system.',
    problem: 'A growing startup needed a scalable backend architecture to support their new mobile and web applications, replacing their legacy monolithic system.',
    solution: 'Designed and implemented a microservices-ready REST API using Node.js and Express. Created a highly optimized PostgreSQL schema with proper indexing for complex query performance.',
    features: [
      'Multi-tenant architecture with data isolation',
      'JWT-based authentication and granular permission system',
      'Complex database queries for task filtering and sorting',
      'Webhooks for external integrations',
      'Comprehensive API documentation (Swagger/OpenAPI)'
    ],
    contribution: 'Lead backend developer. Designed the database schema, implemented the API endpoints, wrote comprehensive unit and integration tests, and set up the CI/CD pipeline.',
    result: 'The API handles over 500 requests per second with average response times under 50ms. The clean architecture allowed the mobile team to integrate 3 weeks ahead of schedule.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Jest', 'Docker'],
    category: 'Backend',
    image: '/images/projects/api.jpg', // Placeholder
    githubUrl: 'https://github.com/desta/task-api',
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

