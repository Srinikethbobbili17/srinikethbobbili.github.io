import ArchiveButton from '../components/ArchiveButton.jsx';
import PageShell from '../components/PageShell.jsx';

const book = {
  title: 'API Engineering from First Principles',
  repository: 'Srinikethbobbili17/API-Engineering-with-Rust-and-Python',
  repositoryUrl:
    'https://github.com/Srinikethbobbili17/API-Engineering-with-Rust-and-Python',
  readUrl:
    'https://github.com/Srinikethbobbili17/API-Engineering-with-Rust-and-Python/blob/main/api-learning/00-README.md',
  topics: ['Rust', 'Python', 'Axum', 'FastAPI', 'HTTP', 'API Design'],
};

export default function Books() {
  return (
    <PageShell className="max-w-3xl">
      <section className="py-12 md:py-16">
        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          Books
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-archive-muted">
          Long-form learning material I have written to turn complex engineering
          topics into practical, structured lessons.
        </p>
      </section>

      <section className="pb-14">
        <article className="rounded-lg border border-archive-line bg-white px-6 py-7 sm:px-8 sm:py-8">
          <p className="text-sm text-archive-muted">{book.repository}</p>
          <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-archive-ink sm:text-3xl">
            {book.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-archive-muted">
            A beginner-to-advanced curriculum for understanding APIs from network
            bytes upward. It covers consuming, designing, building, testing,
            securing, observing, and deploying HTTP APIs through parallel Rust and
            Python examples.
          </p>
          <p className="mt-4 text-base leading-7 text-archive-muted">
            The 34-part curriculum develops LearnFeed, an RSS and Atom reader, with
            Axum and FastAPI while exploring databases, authentication, async work,
            caching, OpenAPI, GReader, Fever, and production engineering.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {book.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-archive-line bg-archive-paper px-2.5 py-1 font-mono text-xs leading-none text-archive-muted"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <ArchiveButton href={book.readUrl}>Start reading {'->'}</ArchiveButton>
            <ArchiveButton href={book.repositoryUrl} variant="secondary">
              View repository {'->'}
            </ArchiveButton>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
