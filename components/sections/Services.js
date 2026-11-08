import Link from 'next/link';
import { getProjectBySlug } from '../../lib/projects';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';

const services = [
  {
    id: 'full-stack',
    title: 'Full-Stack Web Application Development',
    description: 'Build complete web applications that bring frontend, backend, and data workflows together.',
    projectSlugs: ['personal-finance-dashboard', 'wbocs']
  },
  {
    id: 'frontend',
    title: 'React / Next.js Frontend Development',
    description: 'Create responsive, polished interfaces for web applications and business websites.',
    projectSlugs: ['wbocs', 'adamu-solar']
  },
  {
    id: 'backend',
    title: 'Node.js Backend & REST API Development',
    description: 'Develop application backends, REST APIs, role-based access, and real-time integrations.',
    projectSlugs: ['wbocs', 'personal-finance-dashboard']
  },
  {
    id: 'business-website',
    title: 'Business Website Development',
    description: 'Present your business professionally with responsive, multilingual web experiences.',
    projectSlugs: ['adamu-solar']
  },
  {
    id: 'dashboards',
    title: 'Dashboard & Admin Panel Development',
    description: 'Build interfaces for transaction management, institutional workflows, and administration.',
    projectSlugs: ['personal-finance-dashboard', 'wbocs']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Core Services"
            title="What I Build"
            description="Focused web development services backed by projects that demonstrate the work."
          />
        </AnimatedSection>

        <AnimatedSection staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {services.map((service, index) => (
            <AnimatedItem key={service.id}>
              <div className="bg-surface border border-border rounded-2xl p-8 hover:bg-surface-elevated transition-colors duration-300 h-full flex flex-col">
                <p className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
                  Priority {index + 1}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
                <div className="mt-auto border-t border-border/50 pt-4">
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                    Related Projects
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {service.projectSlugs.map((slug) => {
                      const project = getProjectBySlug(slug);
                      return (
                        <Link
                          key={slug}
                          href={`/projects/${project.slug}`}
                          className="text-sm font-medium text-accent hover:text-accent-glow transition-colors"
                        >
                          {project.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
