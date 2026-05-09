/* Adam Oladiran — Portfolio interactions */
(function () {
  'use strict';

  // -------- Mobile nav toggle --------
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute(
        'aria-expanded',
        navLinks.classList.contains('open') ? 'true' : 'false'
      );
    });
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // -------- Theme toggle (persisted) --------
  const root = document.documentElement;
  const themeBtn = document.querySelector('.theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.setAttribute('data-theme', 'light');

  function setIcon() {
    if (!themeBtn) return;
    const light = root.getAttribute('data-theme') === 'light';
    themeBtn.textContent = light ? '☀' : '☾';
    themeBtn.setAttribute(
      'aria-label',
      light ? 'Switch to dark mode' : 'Switch to light mode'
    );
  }
  setIcon();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = root.getAttribute('data-theme') === 'light';
      if (isLight) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
      setIcon();
    });
  }

  // -------- Reveal on scroll --------
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // -------- Project filter (portfolio page) --------
  const chips = document.querySelectorAll('.chip[data-filter]');
  const projects = document.querySelectorAll('.project[data-tags]');
  if (chips.length && projects.length) {
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        const f = chip.getAttribute('data-filter');
        projects.forEach((p) => {
          const tags = p.getAttribute('data-tags') || '';
          p.style.display = f === 'all' || tags.includes(f) ? '' : 'none';
        });
      });
    });
  }

  // -------- Footer year --------
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
