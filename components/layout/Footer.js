import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Value Prop */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-accent transition-colors inline-block mb-4">
              Desta<span className="text-accent">.</span>
            </Link>
            <p className="text-text-secondary max-w-sm mb-6">
              Full-Stack Web Developer building modern, responsive, and reliable web applications from frontend to backend and database.
            </p>
            <div className="flex gap-4">
              {/* GitHub */}
              <a href="https://github.com/DestaShewa" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-white transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/desta-shewa-99985642b/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Upwork - Using a generic work icon as SVG placeholder */}
              <a href="https://www.upwork.com/freelancers/~014c9b56f13c3d6bc4" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#14a800] transition-colors" aria-label="Upwork">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.4,14.6c-0.8,0-1.6-0.3-2.2-0.8c-0.2,0.4-0.4,0.9-0.6,1.4l-2.4,5.4l-1.9-0.8l1.9-4.3c-1.4-1.1-2.2-2.7-2.2-4.4 c0-1.9,1-3.6,2.6-4.5V1h2v5c0.1,0,0.2,0,0.3,0c1.7,0,3.3,0.8,4.2,2.2c0.9,1.4,1.1,3.2,0.4,4.7C19,13.9,18.2,14.6,17.4,14.6z M17,12.7c0.4,0,0.8-0.2,1-0.6c0.4-0.8,0.2-1.9-0.4-2.6c-0.6-0.7-1.5-1-2.5-1C14,8.5,13.2,9,12.7,9.7c-0.5,0.7-0.7,1.6-0.5,2.4 C13,13,13.8,13.6,14.7,13.6C15.5,13.6,16.4,13.3,17,12.7z M6,6H4v8c0,1.1,0.9,2,2,2s2-0.9,2-2V6H6z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578217797539" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-[#1877f2] transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-text-secondary hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-text-secondary hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/contact" className="text-text-secondary hover:text-accent transition-colors">Start a Project</Link></li>
              <li><a href="mailto:destashewa67@gmail.com" className="text-text-secondary hover:text-accent transition-colors">destashewa67@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Desta. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm flex items-center gap-1">
            Built with Next.js, Tailwind & PostgreSQL
          </p>
        </div>
      </div>
    </footer>
  );
}
