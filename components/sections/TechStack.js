import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';

export function TechStack() {
  const stacks = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'Next.js', icon: 'M2 12A10 10 0 1122 12 10 10 0 012 12zm13.58 4.29L9.42 7.71A1 1 0 008 8.5v7.29a1 1 0 002 0v-5.08l5.58 7.87a1 1 0 001.42 0 9.8 9.8 0 001-1.79 1 1 0 00-.42-1.29V8.5a1 1 0 00-2 0v7.79z' },
        { name: 'React', icon: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-4a4 4 0 110-8 4 4 0 010 8z' },
        { name: 'JavaScript', icon: 'M4 4h16v16H4V4zm11 11h2v-5h-2v5zm-5 0h2v-2h-2v2zm0-4h2V9H10v2z' },
        { name: 'Tailwind CSS', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
      ]
    },
    {
      category: 'Backend & Database',
      technologies: [
        { name: 'Node.js', icon: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z' },
        { name: 'PostgreSQL', icon: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z' },
        { name: 'REST API', icon: 'M8 9l3 3-3 3M13 15h3M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z' },
        { name: 'Authentication', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
      ]
    },
    {
      category: 'Tools & Ecosystem',
      technologies: [
        { name: 'Git & GitHub', icon: 'M8 2a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H8zm0 2h8v16H8V4zm2 2v2h4V6h-4zm0 4v2h4v-2h-4zm0 4v2h4v-2h-4z' },
        { name: 'Vercel', icon: 'M12 4L2 20h20L12 4z' },
        { name: 'Framer Motion', icon: 'M12 2L2 12h10v10L22 12H12V2z' },
        { name: 'Figma', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z' },
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeader 
            eyebrow="Technology Stack"
            title="Modern Tools for Modern Web"
            description="I focus on a specialized stack to deliver high-quality, maintainable, and scalable applications rather than trying to learn every framework."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stacks.map((stack, groupIndex) => (
            <AnimatedSection key={stack.category} delay={groupIndex * 0.1}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-border/50">
                  {stack.category}
                </h3>
                <ul className="flex flex-col gap-4">
                  {stack.technologies.map((tech) => (
                    <li key={tech.name} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-text-secondary">
                        {/* Generic icon paths for representation */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d={tech.icon} />
                        </svg>
                      </div>
                      <span className="text-text-primary font-medium">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

