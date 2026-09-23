import { getAllProjects } from '../lib/projects';

export default function sitemap() {
  const baseUrl = 'https://desta-portfolio.vercel.app'; // User needs to update this with real domain
  
  // Base routes
  const routes = ['', '/projects', '/services', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic project routes
  const projects = getAllProjects();
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}

