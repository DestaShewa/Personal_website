import Link from 'next/link';
import { Badge } from '../ui/Badge';

export function ProjectCard({ project, priority = false }) {
  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-slate-700 transition-colors duration-300 flex flex-col h-full">
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
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">Why It Matters</h4>
          <p className="text-text-secondary line-clamp-2">{project.problem}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {project.highlights.slice(0, 4).map(highlight => (
            <span key={highlight} className="px-3 py-1 bg-surface-elevated rounded-md text-xs font-medium text-slate-300 border border-border">
              {highlight}
            </span>
          ))}
          {project.highlights.length > 4 && (
            <span className="px-3 py-1 bg-surface-elevated rounded-md text-xs font-medium text-slate-400 border border-border">
              +{project.highlights.length - 4} more
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
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-border hover:bg-surface-elevated text-text-secondary hover:text-white transition-colors py-2.5 font-semibold"
            >
              View Live Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
