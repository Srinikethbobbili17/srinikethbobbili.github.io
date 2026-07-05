export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-lg border border-archive-line bg-white px-6 py-6 transition-colors duration-200 hover:border-archive-olive">
      <div className="flex flex-wrap items-center gap-2 text-sm text-archive-muted">
        <span>{project.repo}</span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-archive-line bg-archive-paper px-2.5 py-1 font-mono text-xs leading-none text-archive-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mt-4 font-display text-xl font-bold leading-snug text-archive-ink">
        {project.name}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-7 text-archive-muted">
        {project.summary}
      </p>
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex min-h-10 items-center justify-center rounded-md border border-archive-line px-4 py-2 text-sm font-medium text-archive-olive transition-colors duration-200 hover:border-archive-olive hover:bg-archive-paper hover:text-archive-ink"
      >
        View repository {'->'}
      </a>
    </article>
  );
}
