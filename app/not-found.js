import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <h1 className="text-9xl font-bold text-accent mb-4 tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold text-white mb-6">Page Not Found</h2>
      <p className="text-lg text-text-secondary max-w-md mx-auto mb-10">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-glow text-white px-8 py-3 font-semibold transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
