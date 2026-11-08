import { notFound } from 'next/navigation';
import { Navbar } from '../../../components/layout/Navbar';
import { Footer } from '../../../components/layout/Footer';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { ContactCTA } from '../../../components/sections/ContactCTA';
import { AnimatedSection, AnimatedItem } from '../../../components/ui/AnimatedSection';
import { getProjectBySlug, getAllProjects } from '../../../lib/projects';

// Generate static parameters for all projects during build time
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project dynamically
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.shortDescription,
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Project Header */}
        <div className="container mx-auto px-6 max-w-4xl mb-16">
          <AnimatedSection>
            <div className="mb-6">
              <Badge>{project.category}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-10 max-w-3xl">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary">
                  View Live Site
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="secondary">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Source Code
                  </span>
                </Button>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Hero Image */}
        <AnimatedSection className="container mx-auto px-6 max-w-6xl mb-24">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-surface-elevated border border-border">
            {project.image ? (
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                <span className="text-xl">Image Placeholder</span>
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Case Study Content */}
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection staggerChildren={true} className="space-y-16">
            
            {/* Context */}
            <AnimatedItem className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 border-t border-border pt-6">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">Skills &amp; Focus</h3>
                <ul className="flex flex-col gap-2 text-text-secondary">
                  {project.highlights.map(highlight => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 border-t border-border pt-6">
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4">My Role</h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </AnimatedItem>

            {/* Problem & Solution */}
            <AnimatedItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why It Matters</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-12">
                {project.problem}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The Solution</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </AnimatedItem>

            {/* Key Features */}
            <AnimatedItem className="bg-surface border border-border rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Highlights</h2>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-text-secondary">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedItem>

            {/* The Result */}
            <AnimatedItem>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How It Is Marketed</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {project.result}
              </p>
            </AnimatedItem>

          </AnimatedSection>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </>
  );
}
