import ProjectCard from '../components/ProjectCard.jsx';
import PageShell from '../components/PageShell.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <PageShell className="max-w-3xl">
      <section className="py-12 md:py-16">
        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          My Projects
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-archive-muted">
          A small collection of projects I have built while learning machine learning,
          deep learning, browser tooling, and practical software development.
        </p>
      </section>
      <section className="space-y-4 pb-14">
        {projects.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </section>
    </PageShell>
  );
}
