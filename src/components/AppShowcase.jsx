import { useState } from 'react';
import PhoneFrame from './PhoneFrame.jsx';
import BetaAccessForm from './BetaAccessForm.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function AppShowcase({ app }) {
  const [shotIndex, setShotIndex] = useState(0);
  const hasScreenshots = app.screenshots?.length > 0;

  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr] items-start">
      <div>
        {hasScreenshots ? (
          <>
            <div className="phone mx-auto">
              <div className="phone-screen">
                <img
                  src={app.screenshots[shotIndex]}
                  alt={`${app.name} screenshot ${shotIndex + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {app.screenshots.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {app.screenshots.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setShotIndex(i)}
                    className="w-14 h-24 rounded-lg overflow-hidden border-2 transition-all"
                    style={{
                      borderColor: i === shotIndex ? 'var(--accent)' : 'var(--line)',
                      opacity: i === shotIndex ? 1 : 0.6,
                    }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <PhoneFrame app={app} linkToDetail={false} />
        )}
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold" style={{ color: 'var(--ink)' }}>
              {app.name}
            </h2>
            <StatusBadge status={app.status} />
          </div>
          <p className="text-lg mb-3" style={{ color: 'var(--dim)' }}>{app.tagline}</p>
          <p className="leading-relaxed" style={{ color: 'var(--dim)' }}>{app.blurb}</p>
        </div>

        {app.platforms?.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--muted, #7a86a6)' }}>
              Platforms
            </h3>
            <div className="flex gap-2">
              {app.platforms.map((p) => (
                <span key={p} className="tag-pill capitalize">{p}</span>
              ))}
            </div>
          </div>
        )}

        {app.features?.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--muted, #7a86a6)' }}>
              Features
            </h3>
            <ul className="space-y-2">
              {app.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm" style={{ color: 'var(--dim)' }}>
                  <span style={{ color: 'var(--accent)' }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {app.tags.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {app.github && (
            <a href={app.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
              View on GitHub
            </a>
          )}
        </div>

        <BetaAccessForm appName={app.name} />
      </div>
    </div>
  );
}
