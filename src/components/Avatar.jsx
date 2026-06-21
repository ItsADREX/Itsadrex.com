import { useState } from 'react';
import { brand } from '../data/projects.js';

const sizes = {
  sm: 'w-10 h-10 text-sm rounded-xl',
  md: 'w-16 h-16 text-2xl rounded-2xl',
  lg: 'w-full aspect-square text-6xl rounded-[22px]',
};

export default function Avatar({ src, alt, size = 'lg', className = '' }) {
  const [failed, setFailed] = useState(false);
  const photo = src ?? brand.photo;
  const label = alt ?? brand.photoAlt;
  const sizeClass = sizes[size] ?? sizes.lg;

  if (!photo || failed) {
    return (
      <div
        className={`grid place-items-center font-extrabold overflow-hidden border ${sizeClass} ${className}`}
        style={{
          borderColor: 'var(--line)',
          background:
            'linear-gradient(135deg, #6c8cff22, #8b5cf622), var(--bg-elev2)',
          color: 'var(--ink)',
        }}
        aria-label={label}
      >
        A
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden border ${sizeClass} ${className}`}
      style={{ borderColor: 'var(--line)' }}
    >
      <img
        src={photo}
        alt={label}
        className="w-full h-full object-cover object-[center_20%]"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
