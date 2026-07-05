import ArchiveButton from '../components/ArchiveButton.jsx';
import PageShell from '../components/PageShell.jsx';
import TypewriterText from '../components/TypewriterText.jsx';

export default function Home() {
  return (
    <PageShell className="max-w-3xl">
      <section className="py-20 md:py-24">
        <p className="text-base leading-7 text-archive-muted">
          <TypewriterText text="Hey, I'm Sriniketh -" />
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.35rem,7vw,4.25rem)] font-bold leading-[1.08]">
          I build software, learn by doing, and stay curious about AI.
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-archive-muted">
          I'm Sriniketh Bobbili, an early-career engineer with a strong interest in
          artificial intelligence and software development. I enjoy building systems,
          exploring new ideas, and learning through practical experience. My goal is
          simple: to become a thoughtful engineer who creates reliable, meaningful
          technology while never losing the curiosity that inspired me to start.
        </p>
        <div className="mt-10">
          <ArchiveButton to="/projects" variant="secondary">My Projects {'->'}</ArchiveButton>
        </div>
      </section>
    </PageShell>
  );
}
