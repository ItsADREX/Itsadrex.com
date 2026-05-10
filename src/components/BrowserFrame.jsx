import { useEffect, useRef, useState } from 'react';

/**
 * A scaled-down live iframe preview of a website, wrapped in mock browser chrome.
 * The iframe renders at 1280x800 "desktop" size and is scaled to fit the card.
 */
export default function BrowserFrame({ url, title }) {
  const viewportRef = useRef(null);
  const iframeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [scale, setScale] = useState(0.28);

  // Re-compute scale whenever the viewport resizes so it always fits.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      // 1280 is the iframe's internal width
      setScale(Math.max(0.12, w / 1280));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const domain = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  })();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title} in a new tab`}
      className="block group"
    >
      <div className="browser-frame transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-card">
        <div className="browser-bar">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-url">{domain}</span>
        </div>

        <div className="browser-viewport" ref={viewportRef}>
          {!loaded && <div className="iframe-skeleton" />}
          <iframe
            ref={iframeRef}
            src={url}
            title={title}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            onLoad={() => setLoaded(true)}
            style={{ transform: `scale(${scale})` }}
          />

          <div className="browser-overlay" aria-hidden="true">
            <span>Open live site ↗</span>
          </div>
        </div>
      </div>
    </a>
  );
}
