import { Link } from 'react-router-dom';
import BrowserFrame from './BrowserFrame.jsx';
import StatusBadge from './StatusBadge.jsx';

function ProjectPreview({ project }) {
  const domain = (() => {
    if (!project.url) return project.name;
    try {
      return new URL(project.url).hostname;
    } catch {
      return project.name;
    }
  })();

  const preview = project.thumbnail ? (
    <div className="browser-frame transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-card">
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-url">{domain}</span>
      </div>
      <div className="browser-viewport-static">
        <img
          src={project.thumbnail}
          alt={`${project.name} preview`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </div>
  ) : project.preview && project.url ? (
    <BrowserFrame url={project.url} title={project.name} />
  ) : (
    <div
      className="h-[180px] grid place-items-center text-4xl font-extrabold"
      style={{
        background:
          'linear-gradient(135deg, #6c8cff18, #8b5cf618), var(--bg-elev2)',
        color: 'var(--dim)',
      }}
    >
      {project.name.charAt(0)}
    </div>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.name}`}
        className="block group"
      >
        {preview}
      </a>
    );
  }

  return preview;
}

export default function ProjectCard({ project }) {
  return (
    <article
      className="card-surface rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1"
      style={{ borderColor: 'var(--line)' }}
    >
      <ProjectPreview project={project} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold" style={{ color: 'var(--ink)' }}>
            {project.name}
          </h3>
          <StatusBadge status={project.status} />
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
        <div className="flex gap-2 mt-auto pt-1 flex-wrap">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Live Demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function AppCard({ app }) {
  return (
    <Link
      to={`/apps/${app.slug}`}
      className="card-surface rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 group"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold group-hover:text-accent transition-colors" style={{ color: 'var(--ink)' }}>
              {app.name}
            </h3>
            <p className="text-sm" style={{ color: 'var(--dim)' }}>{app.tagline}</p>
          </div>
          <StatusBadge status={app.status} />
        </div>
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--dim)' }}>
          {app.blurb}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {app.tags.slice(0, 3).map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>
        <span className="text-sm font-medium mt-auto pt-1" style={{ color: 'var(--accent)' }}>
          View in App Lab →
        </span>
      </div>
    </Link>
  );
}
