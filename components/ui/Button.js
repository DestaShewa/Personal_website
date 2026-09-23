import Link from 'next/link';

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold transition-all duration-200";
  
  const variants = {
    primary: "bg-accent hover:bg-accent-glow text-white shadow-lg shadow-accent/25 hover:shadow-accent/40",
    secondary: "bg-surface-elevated hover:bg-slate-800 text-text-primary border border-border hover:border-slate-700",
    ghost: "bg-transparent hover:bg-surface-elevated text-text-primary",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href) {
    // If it's an external link
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a href={href} className={combinedClassName} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    }
    
    // Internal link
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Regular button
  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
}

