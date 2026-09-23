import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';

export function HowIWork() {
  const steps = [
    { num: '01', title: 'Understand', desc: 'Learn your requirements, goals, and constraints.' },
    { num: '02', title: 'Plan', desc: 'Map architecture, data model, and user flows.' },
    { num: '03', title: 'Design', desc: 'Create layouts and component structure.' },
    { num: '04', title: 'Build', desc: 'Implement frontend, backend, and database.' },
    { num: '05', title: 'Test', desc: 'Validate functionality and edge cases.' },
    { num: '06', title: 'Deploy', desc: 'Ship to production on Vercel.' },
    { num: '07', title: 'Improve', desc: 'Iterate based on user feedback.' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeader 
            eyebrow="My Process"
            title="How I Work"
            description="A structured, predictable workflow from the first conversation to final deployment. No guesswork."
          />
        </AnimatedSection>

        <div className="mt-16 overflow-x-auto pb-8 hide-scrollbar">
          <AnimatedSection staggerChildren={true} className="flex flex-col md:flex-row gap-6 md:gap-4 min-w-max md:min-w-0">
            {steps.map((step, index) => (
              <AnimatedItem key={step.num} className="flex-1 min-w-[250px] md:min-w-0">
                <div className="relative h-full">
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-border border-dashed z-0"></div>
                  )}
                  
                  {/* Connection line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-6 top-12 w-[1px] h-full bg-border border-dashed z-0"></div>
                  )}
                  
                  <div className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-6">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-surface border-2 border-accent text-accent font-bold flex items-center justify-center text-sm">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2">{step.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-[200px] md:mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

