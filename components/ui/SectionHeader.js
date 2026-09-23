export function SectionHeader({ eyebrow, title, description, centered = true }) {
  return (
    <div className={`flex flex-col gap-3 mb-12 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
      {eyebrow && (
        <span className="text-accent text-sm font-bold uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

