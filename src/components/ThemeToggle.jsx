import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return document.documentElement.classList.contains('light') ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle theme"
      className="w-[38px] h-[38px] grid place-items-center rounded-full border transition-transform hover:rotate-12"
      style={{
        background: 'var(--bg-elev)',
        borderColor: 'var(--line)',
        color: 'var(--ink)',
      }}
    >
      {theme === 'light' ? '☀' : '☾'}
    </button>
  );
}
