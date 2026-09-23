import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell.jsx';

export default function Learnings() {
  return (
    <PageShell className="max-w-3xl">
      <section className="py-12 md:py-16">
        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Learnings from Underground
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-archive-muted">
          Notes and stories about the engineering ideas that only started making
          sense after I encountered them in real work.
        </p>
      </section>

      <section className="pb-14">
        <article className="group rounded-lg border border-archive-line bg-white px-6 py-7 transition-colors duration-200 hover:border-archive-olive sm:px-8">
          <div className="flex flex-wrap gap-2">
            {['Git', 'Version Control', 'Collaboration'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-archive-line bg-archive-paper px-2.5 py-1 font-mono text-xs leading-none text-archive-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold leading-snug text-archive-ink sm:text-3xl">
            Git Finally Made Sense When I Started Working With Other People's Code
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-archive-muted">
            A merge conflict exposed the limits of my command-based understanding of
            Git. This is how collaborative development gave me a clearer mental model
            of branches, remotes, merges, rebases, and pull requests.
          </p>
          <Link
            to="/learnings/git-finally-made-sense"
            className="mt-6 inline-flex text-sm font-medium text-archive-olive underline-offset-4 transition hover:text-archive-ink hover:underline"
          >
            Read article {'->'}
          </Link>
        </article>
      </section>
    </PageShell>
  );
}
