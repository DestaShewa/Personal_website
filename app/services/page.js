import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { AnimatedSection, AnimatedItem } from '../../components/ui/AnimatedSection';
import { Button } from '../../components/ui/Button';

export const metadata = {
  title: 'Services | Desta - Full-Stack Web Developer',
  description: 'Frontend, backend, PostgreSQL, and full-stack web development services.',
};

export default function ServicesPage() {
  const specializedServices = [
    {
      title: 'Frontend Architecture & Development',
      description: 'I build modern, responsive, and highly interactive user interfaces that users love. My focus is on creating maintainable component architectures that scale as your application grows.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      deliverables: [
        'Responsive Web Applications',
        'Interactive Dashboards',
        'E-commerce Storefronts',
        'Design System Implementation',
        'Performance Optimization (Core Web Vitals)'
      ]
    },
    {
      title: 'Backend API Engineering',
      description: 'I design and implement robust server-side architectures that securely power your frontend applications. I prioritize clean code, secure authentication, and optimized performance.',
      technologies: ['Node.js', 'Express', 'Next.js API Routes', 'JWT Auth', 'REST'],
      deliverables: [
        'RESTful API Development',
        'Third-party API Integrations (Stripe, Twilio, etc.)',
        'Authentication & Authorization Systems',
        'Serverless Functions',
        'Microservices Architecture'
      ]
    },
    {
      title: 'Database Design & Management',
      description: 'Data is the core of any serious application. I design normalized relational database schemas that ensure data integrity while optimizing for query performance.',
      technologies: ['PostgreSQL', 'Prisma', 'SQL', 'Database Modeling', 'Indexing'],
      deliverables: [
        'Relational Database Schema Design',
        'Complex Query Optimization',
        'Data Migration Scripts',
        'Secure Data Storage solutions',
        'Database Performance Tuning'
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
              title="End-to-End Web Development"
              description="I offer specialized services across the entire web stack, allowing me to take your project from initial database design all the way to a polished frontend interface."
              centered={false}
            />
          </AnimatedSection>

          <div className="mt-20 space-y-24">
            <AnimatedSection staggerChildren={true}>
              {specializedServices.map((service, index) => (
                <AnimatedItem key={index} className="border-t border-border pt-12 first:border-0 first:pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{service.title}</h2>
                      <p className="text-lg text-text-secondary leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Core Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-surface-elevated rounded-md text-sm font-medium text-slate-300 border border-border">
                            {tech}
                          </span>
                        ))}
                      </div>
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

