import { useState } from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge.jsx';

export default function PhoneFrame({ app, linkToDetail = true }) {
  const [shotIndex, setShotIndex] = useState(0);
  const [c1, c2] = app.gradient;
  const hasScreenshots = app.screenshots?.length > 0;
  const currentShot = hasScreenshots ? app.screenshots[shotIndex] : null;

  const frame = (
    <div>
      <div className="phone">
        <div className="phone-screen">
          {currentShot ? (
            <img
              src={currentShot}
              alt={`${app.name} screenshot`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center text-white"
              style={{ background: `linear-gradient(180deg, ${c1}, ${c2})` }}
            >
              <span className="text-[11px] tracking-[0.2em] opacity-70 mt-3">9:41</span>
              <div className="flex-1 flex flex-col items-center justify-center gap-1">
                <span className="text-2xl">{app.icon ?? app.name.split(' ')[0]}</span>
                <span className="text-[11px] opacity-80 px-4 text-center">{app.tagline ?? 'App preview'}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {hasScreenshots && app.screenshots.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {app.screenshots.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Screenshot ${i + 1}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShotIndex(i);
              }}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i === shotIndex ? 'var(--accent)' : 'var(--line)',
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-3">
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
            {app.name}
          </p>
          <StatusBadge status={app.status} />
        </div>
      </div>
    </div>
  );

  if (linkToDetail) {
    return (
      <Link to={`/apps/${app.slug}`} className="block transition-transform hover:-translate-y-1">
        {frame}
      </Link>
    );
  }

  return frame;
}
