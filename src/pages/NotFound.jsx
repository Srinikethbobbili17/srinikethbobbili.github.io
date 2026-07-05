import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell.jsx';

export default function NotFound() {
  return (
    <PageShell className="min-h-[72vh]">
      <section className="py-20">
        <p className="text-xs font-bold uppercase text-archive-olive">
          Not found
        </p>
        <h1 className="mt-5 font-display text-5xl leading-tight md:text-7xl">
          This page does not exist.
        </h1>
        <Link className="mt-8 inline-block font-bold text-archive-olive" to="/">
          Return home
        </Link>
      </section>
    </PageShell>
  );
}
