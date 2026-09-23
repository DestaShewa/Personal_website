import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ContactForm } from '../../components/ui/ContactForm';
import { AnimatedSection, AnimatedItem } from '../../components/ui/AnimatedSection';

export const metadata = {
  title: 'Contact | Desta - Full-Stack Web Developer',
  description: 'Hire a full-stack web developer. Start a project, discuss freelance work, or reach out regarding employment opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <SectionHeader 
                  eyebrow="Get In Touch"
                  title="Let's build something together."
                  description="I'm currently available for freelance projects and full-time opportunities."
                  centered={false}
                />
                
                <div className="mt-12 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center text-accent shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Email</h3>
                      <a href="mailto:hello@example.com" className="text-text-secondary hover:text-accent transition-colors">
                        hello@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center text-accent shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Availability</h3>
                      <p className="text-text-secondary">
                        Open for freelance contracts and full-time employment roles.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Right Column: Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

