export default function Skills({ t }) {
  return (
    <section id="skills" className="max-w-6xl px-4 py-16 mx-auto border-t sm:px-8 border-border">
      <div data-reveal className="mb-10">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">{t.skillsTitle}</p>
        <h2 className="text-3xl font-bold tracking-tight">{t.skillsSub}</h2>
      </div>
      <div data-reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.skillGroups.map((g, i) => (
          <div key={g.title} className="p-5 transition-colors border rounded-xl border-border hover:border-foreground/30">
            <div className="flex items-center justify-center w-8 h-8 mb-4 font-mono text-xs rounded-md bg-primary text-background">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-3 font-semibold">{g.title}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
