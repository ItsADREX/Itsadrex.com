import { useState } from 'react';
import { contact } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || 'Hello from your portfolio');
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="hero-glow relative py-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <Reveal>
            <span className="section-tag">Open to new projects</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Let's work together.
            </h1>
            <p className="mt-4 text-lg max-w-[640px]" style={{ color: 'var(--dim)' }}>
              Have a project in mind, a question, or just want to say hi? Send a
              message — I usually reply within a day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <span className="section-tag">Contact</span>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--ink)' }}>
                Get in touch
              </h2>
              <p style={{ color: 'var(--dim)' }}>
                Prefer email or social? Reach me directly:
              </p>
              <ul className="flex flex-col gap-2 mt-4 text-[0.95rem]">
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Email: </strong>
                  <a href={`mailto:${contact.email}`} style={{ color: 'var(--ink)' }}>
                    {contact.email}
                  </a>
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>GitHub: </strong>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                    github.com/ItsADREX
                  </a>
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>LinkedIn: </strong>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                    Adam Oladiran
                  </a>
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>X / Twitter: </strong>
                  <a href={contact.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                    {contact.twitterHandle}
                  </a>
                </li>
                <li>
                  <strong style={{ color: 'var(--ink)' }}>Instagram: </strong>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>
                    {contact.instagramHandle}
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit}>
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your full name"
                    className="input-field"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </Field>
                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={update('subject')}
                    placeholder="What's it about?"
                    className="input-field"
                  />
                </Field>
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    required
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="input-field resize-y min-h-[140px]"
                  />
                </Field>
                <button type="submit" className="btn btn-primary">
                  Send message →
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={htmlFor}
        className="block text-sm mb-1.5"
        style={{ color: 'var(--dim)' }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
