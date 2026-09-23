import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';

export function CapabilitySummary() {
  const capabilities = [
    'Frontend',
    'Backend',
    'PostgreSQL',
    'Full-Stack'
  ];

  const trustItems = [
    { label: 'Real Projects', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Live Applications', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
    { label: 'Open-Source Code', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  ];

  return (
    <section className="py-12 border-y border-border bg-surface/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection staggerChildren={true} className="flex flex-col items-center gap-8">
          
          {/* Main Capabilities Pills */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {capabilities.map((cap, i) => (
              <AnimatedItem key={cap}>
                <div className="px-6 py-2.5 rounded-full bg-surface-elevated border border-border text-white font-medium text-sm md:text-base">
                  {cap}
                </div>
              </AnimatedItem>
            ))}
          </div>

          {/* Trust Evidence Row */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-text-secondary text-sm md:text-base">
            {trustItems.map((item, i) => (
              <AnimatedItem key={item.label} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                {item.label}
              </AnimatedItem>
            ))}
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}

