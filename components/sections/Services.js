import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';
import { SectionHeader } from '../ui/SectionHeader';

export function Services() {
  const services = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Modern responsive interfaces using React and Next.js.',
      details: 'Build responsive, fast, and interactive interfaces. You get a polished UI that works on any device and connects seamlessly to your backend.',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'APIs, authentication, authorization, business logic, and integrations.',
      details: 'Design and implement REST APIs and business logic. You get a reliable, secure server that powers your application.',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      id: 'database',
      title: 'PostgreSQL Database',
      description: 'Structured relational databases designed for reliable applications.',
      details: 'Structure your data with relational schemas, constraints, and efficient queries. You get a reliable database that scales with your product.',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Complete applications connecting frontend, backend, and database.',
      details: 'Complete web applications built and deployed by one developer. You get a working product, not just code.',
      icon: (
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeader 
            eyebrow="Core Services"
            title="What I Build"
            description="I specialize in building complete web solutions, taking projects from initial database design all the way to a polished frontend interface."
          />
        </AnimatedSection>

        <AnimatedSection staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {services.map((service) => (
            <AnimatedItem key={service.id}>
              <div className="bg-surface border border-border rounded-2xl p-8 hover:bg-surface-elevated transition-colors duration-300 h-full flex flex-col">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 border border-accent/20">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-text-primary font-medium mb-4">{service.description}</p>
                <p className="text-text-secondary leading-relaxed mt-auto border-t border-border/50 pt-4">
                  {service.details}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

