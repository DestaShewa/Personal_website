import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { AnimatedSection, AnimatedItem } from '../../components/ui/AnimatedSection';
import { getAllProjects } from '../../lib/projects';

export const metadata = {
  title: 'Projects | Desta - Full-Stack Web Developer',
  description: 'Explore full-stack applications, backend workflows, business websites, and frontend projects.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <SectionHeader 
              eyebrow="My Portfolio"
              title="Work & Projects"
              description="A selection of applications I've built. These demonstrate my ability to solve real business problems across the entire web stack."
            />
          </AnimatedSection>

          <AnimatedSection staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project, index) => (
              <AnimatedItem key={project.id}>
                <ProjectCard project={project} priority={index < 3} />
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </>
  );
}
