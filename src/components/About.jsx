export default function About({ t }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-border">
      <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{t.aboutTitle}</p>
          <h2 className="text-3xl font-bold tracking-tight">{t.aboutSub}</h2>
          <p className="text-muted-foreground leading-relaxed">{t.aboutBody}</p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-border bg-muted/30 p-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">{t.factsTitle}</h3>
            <dl className="space-y-3">
              {t.facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between text-sm border-b border-border/60 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-muted-foreground">{f.label}</dt>
                  <dd className="font-medium text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
