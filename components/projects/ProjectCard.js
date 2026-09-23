import Link from 'next/link';
import { Badge } from '../ui/Badge';

export function ProjectCard({ project, priority = false }) {
  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-slate-700 transition-colors duration-300 flex flex-col h-full">
      {/* Project Image Placeholder (Using a gradient if no image exists) */}
      <div className="aspect-video w-full relative bg-slate-800 border-b border-border overflow-hidden group">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-700">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Badge className="bg-surface/90 backdrop-blur-sm border-border text-white">{project.category}</Badge>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-text-primary mb-6">{project.shortDescription}</p>
        
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">The Problem</h4>
          <p className="text-text-secondary line-clamp-2">{project.problem}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.techStack.slice(0, 4).map(tech => (
            <span key={tech} className="px-3 py-1 bg-surface-elevated rounded-md text-xs font-medium text-slate-300 border border-border">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 bg-surface-elevated rounded-md text-xs font-medium text-slate-400 border border-border">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4 pt-6 border-t border-border">
          <Link 
            href={`/projects/${project.slug}`}
            className="flex-1 bg-accent hover:bg-accent-glow text-white text-center py-2.5 rounded-lg font-semibold transition-colors"
          >
            Read Case Study
          </Link>
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:bg-surface-elevated text-text-secondary hover:text-white transition-colors"
              aria-label="View source code on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-border hover:bg-surface-elevated text-text-secondary hover:text-white transition-colors"
              aria-label="View live site"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

