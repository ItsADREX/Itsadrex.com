import { statusLabels } from '../data/projects.js';

export default function StatusBadge({ status }) {
  const meta = statusLabels[status];
  if (!meta) return null;

  return <span className={`status-badge ${meta.className}`}>{meta.label}</span>;
}
