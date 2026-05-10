import BrowserFrame from './BrowserFrame.jsx';

export default function ProjectCard({ project }) {
  return (
    <article
      className="card-surface rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1"
      style={{ borderColor: 'var(--line)' }}
    >
      <BrowserFrame url={project.url} title={project.name} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold" style={{ color: 'var(--ink)' }}>
            {project.name}
          </h3>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--dim)' }}>
          {project.blurb}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto pt-1">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </article>
  );
}
