import { useState } from 'react';
import { contact } from '../data/projects.js';

export default function BetaAccessForm({ appName }) {
  const [form, setForm] = useState({ name: '', email: '', platform: 'android' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Beta access request — ${appName}`);
    const body = encodeURIComponent(
      `App: ${appName}\nName: ${form.name}\nEmail: ${form.email}\nPlatform: ${form.platform}\n`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-xl p-5">
      <h3 className="font-bold mb-1" style={{ color: 'var(--ink)' }}>
        Request beta access
      </h3>
      <p className="text-sm mb-4" style={{ color: 'var(--dim)' }}>
        Send a quick request — I&apos;ll reply with install instructions.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 mb-3">
        <input
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="input-field"
        />
        <input
          type="email"
          required
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="input-field"
        />
      </div>
      <select
        value={form.platform}
        onChange={(e) => setForm((f) => ({ ...f, platform: e.target.value }))}
        className="input-field mb-3"
      >
        <option value="android">Android</option>
        <option value="ios">iOS</option>
        <option value="both">Both</option>
      </select>
      <button type="submit" className="btn btn-primary btn-sm">
        Send request →
      </button>
    </form>
  );
}
