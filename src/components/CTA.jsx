import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export default function CTA({
  title = "Have an idea? Let's build it.",
  subtitle = 'Open to freelance work, collaborations, and full-time roles.',
  buttonText = 'Get in touch →',
  to = '/contact',
}) {
  return (
    <section className="py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <Reveal>
          <div className="cta-bg text-center p-12 rounded-[22px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--ink)' }}>
              {title}
            </h2>
            <p className="mb-6" style={{ color: 'var(--dim)' }}>
              {subtitle}
            </p>
            <Link to={to} className="btn btn-primary">
              {buttonText}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
