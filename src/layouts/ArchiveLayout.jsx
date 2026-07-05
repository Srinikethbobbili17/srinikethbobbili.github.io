import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'My Projects' },
];

export default function ArchiveLayout({ children }) {
  return (
    <div className="min-h-screen text-archive-ink">
      <header className="sticky top-0 z-40 bg-archive-paper/92 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-3xl items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-0">
          <NavLink to="/" className="font-display text-base font-semibold leading-none sm:text-lg">
            Sriniketh Bobbili
          </NavLink>
          <div className="flex flex-wrap justify-end gap-x-6 gap-y-3 text-sm text-archive-muted">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `archive-link transition hover:text-archive-ink ${isActive ? 'active text-archive-ink' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      {children}
      <footer className="mx-auto max-w-3xl border-t border-archive-line px-5 py-8 text-sm text-archive-muted sm:px-8 lg:px-0">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <NavLink to="/" className="transition hover:text-archive-ink">
            Sriniketh Bobbili
          </NavLink>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 md:justify-end">
            <a
              className="transition hover:text-archive-ink"
              href="mailto:srinikethbobbili1705@gmail.com"
            >
              email:srinikethbobbili1705@gmail.com
            </a>
            <a
              className="transition hover:text-archive-ink"
              href="https://github.com/Srinikethbobbili17"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a className="transition hover:text-archive-ink" href="tel:+918688209148">
              phone:+91 8688209148
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
