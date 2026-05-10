import { Link } from 'react-router-dom';
import { projects, apps } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import PhoneFrame from '../components/PhoneFrame.jsx';
import CodeCard from '../components/CodeCard.jsx';
import CTA from '../components/CTA.jsx';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero-glow relative py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <Reveal>
            <h1 className="text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight">
              Software Developer building{' '}
              <span className="grad-text">modern web &amp; mobile apps</span>.
            </h1>
            <p
              className="mt-4 text-lg max-w-[560px]"
              style={{ color: 'var(--dim)' }}
            >
              Hi, I'm Adam Oladiran. I design and build fast, accessible, and
              beautiful digital products — from polished marketing sites to
              full-stack web apps and cross-platform mobile experiences.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn btn-primary">
                View My Work →
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <Stat value="5+" label="Live web projects" />
              <Stat value="6" label="Mobile app builds" />
              <Stat value="100%" label="Hand-coded" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <CodeCard />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <span className="section-tag">What I do</span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
              Services
            </h2>
            <p className="max-w-[640px] mb-10" style={{ color: 'var(--dim)' }}>
              End-to-end product development — from concept and UI design to
              deployment and maintenance.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            <Reveal>
              <ServiceCard
                icon="⌘"
                title="Web Apps"
                desc="Responsive websites and full-stack web apps built with modern JavaScript frameworks and clean, scalable code."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <ServiceCard
                icon="▣"
                title="Mobile Apps"
                desc="Cross-platform iOS & Android apps using Flutter and React Native — one codebase, native feel."
              />
            </Reveal>
            <Reveal delay={0.16}>
              <ServiceCard
                icon="✦"
                title="Custom Software"
                desc="APIs, dashboards, and tailored tools to automate workflows and bring your ideas to life."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <span className="section-tag">Featured Work</span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
              Selected projects
            </h2>
            <p className="max-w-[640px] mb-10" style={{ color: 'var(--dim)' }}>
              Real live previews of my recent web builds. Hover a card and
              click to open the full site.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/portfolio" className="btn btn-ghost">
              See all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile apps strip */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <span className="section-tag">Mobile</span>
            <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
              Apps in motion
            </h2>
            <p className="max-w-[640px] mb-10" style={{ color: 'var(--dim)' }}>
              A peek at mobile app projects. Real screenshots coming soon —
              placeholders below.
            </p>
          </Reveal>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {apps.slice(0, 4).map((app, i) => (
              <Reveal key={app.slug} delay={i * 0.08}>
                <PhoneFrame app={app} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <span className="section-tag">About</span>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--ink)' }}>
              Hi, I'm Adam.
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid gap-10 md:grid-cols-[260px_1fr] items-start">
              <div
                className="rounded-[22px] overflow-hidden border aspect-square grid place-items-center text-6xl font-extrabold"
                style={{
                  borderColor: 'var(--line)',
                  background:
                    'linear-gradient(135deg, #6c8cff22, #8b5cf622), var(--bg-elev2)',
                  color: 'var(--ink)',
                }}
              >
                A
              </div>
              <div style={{ color: 'var(--dim)' }} className="space-y-3 leading-relaxed">
                <p>
                  I'm a software developer focused on shipping polished web and
                  mobile experiences. I love turning rough ideas into clean,
                  working products — whether that's a marketing site, a full-stack
                  web app, or a cross-platform mobile build.
                </p>
                <p>
                  My toolkit centers on HTML, CSS, JavaScript and modern
                  frameworks like React and Node on the backend. For mobile, I
                  work with Flutter and React Native to deliver one codebase
                  across iOS and Android.
                </p>
                <p>
                  I care about details: performance, accessibility, and the
                  small interactions that make a product feel great to use.
                </p>
                <div className="flex gap-3 flex-wrap pt-3">
                  <Link to="/contact" className="btn btn-primary">
                    Start a project
                  </Link>
                  <Link to="/portfolio" className="btn btn-ghost">
                    See all work
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <strong className="block text-2xl" style={{ color: 'var(--ink)' }}>
        {value}
      </strong>
      <span className="text-sm" style={{ color: 'var(--muted, #7a86a6)' }}>
        {label}
      </span>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <article
      className="card-surface rounded-xl p-6 transition-all hover:-translate-y-1 hover:border-accent h-full"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-accent to-accent-2 text-white text-xl mb-4">
        {icon}
      </div>
      <h3 className="font-bold mb-1 text-lg" style={{ color: 'var(--ink)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--dim)' }}>
        {desc}
      </p>
    </article>
  );
}
