import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { CapabilitySummary } from '../components/sections/CapabilitySummary';
import { Services } from '../components/sections/Services';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { TechStack } from '../components/sections/TechStack';
import { HowIWork } from '../components/sections/HowIWork';
import { ContactCTA } from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CapabilitySummary />
        <Services />
        <FeaturedProjects />
        <TechStack />
        <HowIWork />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
