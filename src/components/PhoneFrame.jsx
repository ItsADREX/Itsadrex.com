export default function PhoneFrame({ app }) {
  const [c1, c2] = app.gradient;
  return (
    <div>
      <div className="phone">
        <div className="phone-screen">
          <div
            className="w-full h-full flex flex-col items-center justify-center text-white"
            style={{ background: `linear-gradient(180deg, ${c1}, ${c2})` }}
          >
            <span className="text-[11px] tracking-[0.2em] opacity-70 mt-3">9:41</span>
            <div className="flex-1 flex flex-col items-center justify-center gap-1">
              <span className="text-xl font-extrabold">{app.name.split(' ')[0]}</span>
              <span className="text-[11px] opacity-80">App preview</span>
            </div>
            <div className="w-full px-4 flex flex-col gap-2 mb-5 opacity-30">
              <span className="h-3 rounded bg-white/70" />
              <span className="h-3 rounded bg-white/50" />
              <span className="h-3 rounded bg-white/60" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-3 text-sm" style={{ color: 'var(--dim)' }}>
        {app.name}
      </p>
    </div>
  );
}
