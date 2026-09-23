import { Button } from '../ui/Button';
import { Badge, StatusBadge } from '../ui/Badge';
import { AnimatedSection, AnimatedItem } from '../ui/AnimatedSection';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <AnimatedSection staggerChildren={true} className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <AnimatedItem className="mb-8">
            <StatusBadge status="success">Available for Hire</StatusBadge>
          </AnimatedItem>
          
          <AnimatedItem>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
              Full-Stack <br className="md:hidden" />
              <span className="text-gradient-accent">Web Developer</span>
            </h1>
          </AnimatedItem>
          
          <AnimatedItem>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              I build modern, responsive, and reliable web applications — from pixel-perfect frontends to scalable backends and structured databases.
            </p>
          </AnimatedItem>
          
          <AnimatedItem className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button href="/projects" variant="primary">
              View My Work
            </Button>
            <Button href="/contact" variant="secondary">
              Hire Me
            </Button>
          </AnimatedItem>

        </AnimatedSection>
      </div>
    </section>
  );
}

