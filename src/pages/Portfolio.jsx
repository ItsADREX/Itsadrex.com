import { useMemo, useState } from 'react';
import { projects, filterOptions, apps, skills } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import PhoneFrame from '../components/PhoneFrame.jsx';
import CTA from '../components/CTA.jsx';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <>
      <section className="hero-glow relative py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <Reveal>
            <span className="section-tag">Live demos &amp; mobile builds</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Portfolio
            </h1>
            <p className="mt-4 text-lg max-w-[640px]" style={{ color: 'var(--dim)' }}>
              A collection of real, deployed web projects and mobile app builds.
              Each card shows a live preview — hover and click to open the full
              site.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {filterOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFilter(opt.value)}
                  className={`chip ${filter === opt.value ? 'active' : ''}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <span className="section-tag">Mobile Apps</span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
              App builds &amp; concepts
            </h2>
            <p className="max-w-[640px] mb-10" style={{ color: 'var(--dim)' }}>
              Cross-platform builds with Flutter and React Native. Real
              screenshots coming soon — placeholders below.
            </p>
          </Reveal>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {apps.map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.05}>
                <PhoneFrame app={app} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <span className="section-tag">Tech</span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
              Tools &amp; technologies
            </h2>
            <p className="max-w-[640px] mb-8" style={{ color: 'var(--dim)' }}>
              The stack I reach for most often when building products.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg px-4 py-2 text-sm font-medium"
                  style={{
                    background: 'var(--bg-elev)',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Like what you see?"
        subtitle="I'm available for freelance and contract work. Let's talk about your project."
        buttonText="Contact me →"
      />
    </>
  );
}
