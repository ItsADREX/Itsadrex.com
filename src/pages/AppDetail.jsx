import { Link, Navigate, useParams } from 'react-router-dom';
import { getAppBySlug } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';
import AppShowcase from '../components/AppShowcase.jsx';

export default function AppDetail() {
  const { slug } = useParams();
  const app = getAppBySlug(slug);

  if (!app) return <Navigate to="/apps" replace />;

  return (
    <>
      <section className="hero-glow relative py-12 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <Reveal>
            <Link to="/apps" className="text-sm mb-4 inline-block" style={{ color: 'var(--dim)' }}>
              ← Back to App Lab
            </Link>
            <span className="section-tag">App Lab</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              {app.name}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <AppShowcase app={app} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
