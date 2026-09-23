import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../projects/ProjectCard';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
import { getFeaturedProjects } from '../../lib/projects';

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 lg:py-32 bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeader 
            eyebrow="Featured Work"
            title="Evidence Over Claims"
            description="Explore my recent full-stack applications. Each project demonstrates my ability to solve complex business problems through clean architecture and modern technologies."
          />
        </AnimatedSection>

        <AnimatedSection staggerChildren={true} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {featuredProjects.map((project, index) => (
            <AnimatedItem key={project.id} className={index === 2 ? 'lg:col-span-2 lg:max-w-3xl lg:mx-auto w-full' : ''}>
              <ProjectCard project={project} priority={index === 0} />
            </AnimatedItem>
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-16 text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center justify-center gap-2 font-semibold text-accent hover:text-accent-glow transition-colors group"
          >
            View All Projects
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

