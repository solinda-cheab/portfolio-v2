import { ArrowIcon } from "./icons/Icons.jsx";

export default function Hero({ t }) {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 sm:px-8 pt-36 pb-20">
      <div data-reveal className="max-w-2xl space-y-5">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-mono text-muted-foreground">
          {t.eyebrow}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">{t.heroTitle}</h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{t.heroSub}</p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t.ctaProjects} <ArrowIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
          >
            {t.ctaContact}
          </a>
        </div>
        <div className="flex items-center gap-3 pt-4 text-foreground/70">
          {["React", "Tailwind", "C++", "LaTeX"].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md border border-border bg-muted/40 text-[11px] font-mono uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
