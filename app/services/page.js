import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { AnimatedSection, AnimatedItem } from '../../components/ui/AnimatedSection';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';
import { getProjectBySlug } from '../../lib/projects';

export const metadata = {
  title: 'Services | Desta - Full-Stack Web Developer',
  description: 'Full-stack web applications, React and Next.js frontend development, Node.js APIs, business websites, and dashboards.',
};

export default function ServicesPage() {
  const specializedServices = [
    {
      title: 'Full-Stack Web Application Development',
      description: 'Build complete web applications that bring frontend, backend, and data workflows together.',
      projectSlugs: ['personal-finance-dashboard', 'wbocs'],
      deliverables: [
        'Frontend and backend integration',
        'Authentication and role-based workflows',
        'Database-backed application features',
        'End-to-end web application development'
      ]
    },
    {
      title: 'React / Next.js Frontend Development',
      description: 'Create responsive, polished interfaces for web applications and business websites.',
      projectSlugs: ['wbocs', 'adamu-solar'],
      deliverables: [
        'Responsive web interfaces',
        'React and Next.js frontend development',
        'Multilingual interface implementation',
        'Frontend integration with application APIs'
      ]
    },
    {
      title: 'Node.js Backend & REST API Development',
      description: 'Develop application backends, REST APIs, role-based access, and real-time integrations.',
      projectSlugs: ['wbocs', 'personal-finance-dashboard'],
      deliverables: [
        'Node.js backend development',
        'REST API design and integration',
        'Authentication and authorization workflows',
        'Real-time application communication'
      ]
    },
    {
      title: 'Business Website Development',
      description: 'Present your business professionally with responsive, multilingual web experiences.',
      projectSlugs: ['adamu-solar'],
      deliverables: [
        'Professional business presentation',
        'Responsive website development',
        'Multilingual interface support',
        'Website deployment'
      ]
    },
    {
      title: 'Dashboard & Admin Panel Development',
      description: 'Build interfaces for transaction management, institutional workflows, and administration.',
      projectSlugs: ['personal-finance-dashboard', 'wbocs'],
      deliverables: [
        'Financial transaction dashboards',
        'Institutional and role-based workflows',
        'Administrative interfaces',
        'Connected frontend and backend features'
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <SectionHeader 
              eyebrow="My Capabilities"
              title="Web Development Services"
              description="Focused services across full-stack applications, React and Next.js frontends, Node.js APIs, business websites, and dashboards."
              centered={false}
            />
          </AnimatedSection>

          <div className="mt-20 space-y-24">
            <AnimatedSection staggerChildren={true}>
              {specializedServices.map((service, index) => (
                <AnimatedItem key={index} className="border-t border-border pt-12 first:border-0 first:pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
                        Priority {index + 1}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{service.title}</h2>
                      <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Related Projects</h3>
                      <ul className="flex flex-wrap gap-x-5 gap-y-2">
                        {service.projectSlugs.map((slug) => {
                          const project = getProjectBySlug(slug);
                          return (
                            <li key={slug}>
                              <Link
                                href={`/projects/${project.slug}`}
                                className="font-medium text-accent hover:text-accent-glow transition-colors"
                              >
                                {project.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    
                    <div className="bg-surface border border-border rounded-2xl p-8">
                      <h3 className="text-xl font-bold text-white mb-6">What You Get</h3>
                      <ul className="space-y-4">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-text-secondary">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-8 border-t border-border">
                        <Button href="/contact" variant="secondary" className="w-full">
                          Discuss a Project
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </>
  );
}
