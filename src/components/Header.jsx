import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-[72px] flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold" style={{ color: 'var(--ink)' }}>
          <span className="w-8 h-8 grid place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 text-white font-extrabold shadow-glow">
            A
          </span>
          <span>Adam Oladiran</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative text-[0.95rem] font-medium py-1 transition-colors ${
                      isActive ? 'text-ink' : 'text-dim hover:text-ink'
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--ink)' : 'var(--dim)',
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-1 h-[2px] rounded bg-gradient-to-r from-accent to-accent-2"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="hidden sm:inline-flex btn btn-primary btn-sm">
            Hire Me
          </Link>
          <button
            type="button"
            className="md:hidden w-[38px] h-[38px] rounded-lg flex flex-col justify-between py-[9px] px-2 border"
            style={{ background: 'var(--bg-elev)', borderColor: 'var(--line)' }}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="h-[2px] rounded transition-transform"
              style={{
                background: 'var(--ink)',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="h-[2px] rounded transition-opacity"
              style={{
                background: 'var(--ink)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="h-[2px] rounded transition-transform"
              style={{
                background: 'var(--ink)',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
            style={{
              background: 'var(--bg-elev)',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <ul className="px-5 py-2">
              {links.map((l) => (
                <li
                  key={l.to}
                  className="border-b last:border-none"
                  style={{ borderColor: 'var(--line)' }}
                >
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[0.95rem]"
                    style={({ isActive }) => ({
                      color: isActive ? 'var(--ink)' : 'var(--dim)',
                    })}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
