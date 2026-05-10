import { Link } from 'react-router-dom';
import { contact } from '../data/projects.js';

export default function Footer() {
  return (
    <footer
      className="mt-16 py-12"
      style={{
        borderTop: '1px solid var(--line)',
        background: 'var(--bg-elev)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid gap-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold" style={{ color: 'var(--ink)' }}>
              <span className="w-8 h-8 grid place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white font-extrabold shadow-glow">
                A
              </span>
              <span>Adam Oladiran</span>
            </Link>
            <p className="mt-3 max-w-[320px]" style={{ color: 'var(--dim)' }}>
              Software developer crafting modern web &amp; mobile apps. Based in
              Lagos, working worldwide.
            </p>
          </div>

          <FooterCol title="Explore">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </FooterCol>

          <FooterCol title="Services">
            <li><Link to="/portfolio">Web Apps</Link></li>
            <li><Link to="/portfolio">Mobile Apps</Link></li>
            <li><Link to="/portfolio">Custom Software</Link></li>
          </FooterCol>

          <FooterCol title="Connect">
            <li><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={contact.twitter} target="_blank" rel="noopener noreferrer">X / Twitter</a></li>
            <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={`mailto:${contact.email}`}>Email</a></li>
          </FooterCol>
        </div>

        <div
          className="mt-8 pt-5 text-center text-[0.85rem]"
          style={{ borderTop: '1px solid var(--line)', color: 'var(--muted, #7a86a6)' }}
        >
          © {new Date().getFullYear()} Adam Oladiran. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h4
        className="text-[0.82rem] uppercase tracking-[0.12em] mb-3"
        style={{ color: 'var(--muted, #7a86a6)' }}
      >
        {title}
      </h4>
      <ul className="flex flex-col gap-2 text-[0.92rem] [&_a]:transition-colors" style={{ color: 'var(--dim)' }}>
        {children}
      </ul>
    </div>
  );
}
