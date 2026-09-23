import Link from 'next/link';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-accent/5"></div>
      <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-accent/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] bg-accent-glow/10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <AnimatedSection>
          <SectionHeader 
            title="Have a web project in mind?"
            description="Whether you need a new web application built from scratch, or an experienced developer to join your team, I'm available to help."
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-glow text-white px-8 py-4 font-bold text-lg shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 hover:-translate-y-1"
            >
              Start a Project
            </Link>
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-surface hover:bg-surface-elevated text-white border border-border px-8 py-4 font-bold text-lg transition-all duration-200"
            >
              View My Work
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
