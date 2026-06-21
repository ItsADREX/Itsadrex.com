import { apps } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';
import PhoneFrame from '../components/PhoneFrame.jsx';
import { AppCard } from '../components/ProjectCard.jsx';
import CTA from '../components/CTA.jsx';

export default function Apps() {
  return (
    <>
      <section className="hero-glow relative py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <Reveal>
            <span className="section-tag">Mobile builds</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              App Lab
            </h1>
            <p className="mt-4 text-lg max-w-[640px]" style={{ color: 'var(--dim)' }}>
              Explore my mobile apps — swipe through screenshots, watch demos, and
              request beta access before they hit the stores.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {apps.map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.06}>
                <AppCard app={app} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <span className="section-tag">Previews</span>
            <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--ink)' }}>
              In the phone
            </h2>
          </Reveal>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.08}>
                <PhoneFrame app={app} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want early access?"
        subtitle="Request a beta invite for any app above — I'll send install instructions personally."
        buttonText="Contact me →"
      />
    </>
  );
}
