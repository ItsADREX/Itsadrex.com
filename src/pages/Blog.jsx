import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

export default function Blog() {
  return (
    <>
      <section className="hero-glow relative py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <Reveal>
            <span className="section-tag">Notes &amp; articles</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Blog
            </h1>
            <p className="mt-4 text-lg max-w-[640px]" style={{ color: 'var(--dim)' }}>
              Thoughts on web development, mobile apps, and building products.
              Articles dropping soon.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <Reveal>
            <div
              className="text-center py-16 px-6 rounded-[22px]"
              style={{
                background: 'var(--bg-elev)',
                border: '1px dashed var(--line)',
              }}
            >
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
                Articles coming soon
              </h2>
              <p className="max-w-[540px] mx-auto" style={{ color: 'var(--dim)' }}>
                I'm preparing the first batch of posts on web performance,
                Flutter tips, and shipping side projects. Check back soon — or
                reach out to get notified.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Link to="/contact" className="btn btn-primary">
                  Notify me
                </Link>
                <Link to="/portfolio" className="btn btn-ghost">
                  See projects
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
