export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20 ${className}`}>
      {children}
    </span>
  );
}

export function StatusBadge({ children, status = 'success', className = '' }) {
  const styles = {
    success: "bg-success/10 text-success ring-success/20",
    default: "bg-slate-800 text-slate-300 ring-slate-700"
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ring-1 ring-inset ${styles[status]} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${status === 'success' ? 'bg-success' : 'bg-slate-400'}`}></span>
      {children}
    </span>
  );
}

