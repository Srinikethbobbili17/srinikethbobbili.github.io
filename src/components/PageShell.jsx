export default function PageShell({ children, className = '' }) {
  return (
    <main className={`mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-0 ${className}`}>
      {children}
    </main>
  );
}
