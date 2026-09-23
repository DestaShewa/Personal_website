import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ContactCTA } from '../../components/sections/ContactCTA';
import { AnimatedSection, AnimatedItem } from '../../components/ui/AnimatedSection';

export const metadata = {
  title: 'About | Desta - Full-Stack Web Developer',
  description: 'Learn about my experience, approach, and background in full-stack web development.',
};

export default function AboutPage() {
  const experiences = [
    {
      id: 1,
      role: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead developer for a B2B SaaS platform. Architected the transition from a monolithic legacy application to a modern Next.js and Node.js microservices architecture. Reduced page load times by 60% and database query times by 40%.',
    },
    {
      id: 2,
      role: 'Frontend Engineer',
      company: 'Creative Digital Agency',
      period: '2019 - 2022',
      description: 'Developed highly interactive marketing websites and e-commerce platforms using React and Tailwind CSS. Collaborated closely with UI/UX designers to implement complex animations and responsive layouts.',
    },
    {
      id: 3,
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2017 - 2019',
      description: 'Built custom websites and web applications for small to medium businesses. Handled all aspects of projects from client communication and requirements gathering to deployment and maintenance.',
    }
  ];

  const strengths = [
    { title: 'Full-Stack Coverage', desc: 'One developer who can architect the database, write the API, and build the frontend interface.' },
    { title: 'Clean & Maintainable Code', desc: 'I write code that is readable, modular, and easy for other developers to understand and extend.' },
    { title: 'Responsive by Default', desc: 'Every interface I build looks and functions perfectly on mobile, tablet, and desktop.' },
    { title: 'Clear Communication', desc: 'I provide regular updates, ask clarifying questions early, and maintain transparent timelines.' },
    { title: 'Problem-First Approach', desc: 'I focus on understanding the business problem before writing a single line of code.' },
    { title: 'Performance Focused', desc: 'I care about Core Web Vitals, database query optimization, and efficient rendering.' }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        
        {/* Bio Section */}
        <div className="container mx-auto px-6 max-w-6xl mb-24">
          <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionHeader 
                eyebrow="About Me"
                title="Engineering solutions, not just writing code."
                description="I am a Full-Stack Web Developer specialized in the React/Node ecosystem. My focus is on building robust, scalable applications that solve real business problems."
                centered={false}
              />
              <div className="mt-8 space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  With a strong foundation in both frontend aesthetics and backend architecture, I bridge the gap between design and data. I don&apos;t just build what&apos;s asked; I partner with clients to understand their users and business goals.
                </p>
                <p>
                  My approach is pragmatic: I choose the right tool for the job, prioritize maintainability over cleverness, and always keep the end-user experience at the forefront of my engineering decisions.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m usually reading about system design, contributing to open-source, or exploring new web technologies.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-surface-elevated border border-border relative z-10">
                {/* Placeholder for Profile Photo */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-gradient-to-br from-slate-800 to-slate-900">
                  <span className="text-xl font-medium">Profile Photo</span>
                </div>
              </div>
              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full z-0 pointer-events-none"></div>
            </div>
          </AnimatedSection>
        </div>

        {/* Strengths Section */}
        <div className="bg-surface/50 border-y border-border py-24 mb-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-16 text-center">Why Work With Me</h2>
            </AnimatedSection>
            
            <AnimatedSection staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strengths.map((strength, i) => (
                <AnimatedItem key={i}>
                  <div className="bg-surface border border-border rounded-2xl p-8 h-full">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{strength.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{strength.desc}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-16 text-center">Professional Experience</h2>
          </AnimatedSection>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            <AnimatedSection staggerChildren={true}>
              {experiences.map((exp, i) => (
                <AnimatedItem key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-border p-6 rounded-2xl shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                      <time className="text-sm font-medium text-accent mt-1 sm:mt-0">{exp.period}</time>
                    </div>
                    <h4 className="text-text-primary font-medium mb-4">{exp.company}</h4>
                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
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
