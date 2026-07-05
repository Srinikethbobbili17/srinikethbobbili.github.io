import { Link } from 'react-router-dom';

const styles = {
  primary:
    'text-archive-olive hover:text-archive-ink',
  secondary:
    'text-archive-olive hover:text-archive-ink',
};

export default function ArchiveButton({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
}) {
  const classes = `inline-flex items-center justify-center text-sm font-medium underline-offset-4 transition-colors duration-200 hover:underline ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
