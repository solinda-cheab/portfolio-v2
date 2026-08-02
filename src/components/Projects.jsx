import React, { useState } from "react";

// Tech Icon Components
const NextJsIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="currentColor" />
    <path
      d="M149.508 157.52L69.141 54H54V126H67.5V71.1852L138.837 162.772C142.607 161.277 146.182 159.508 149.508 157.52Z"
      fill="white"
    />
    <rect x="115.5" y="54" width="13.5" height="72" fill="white" />
  </svg>
);

const AstroIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M8.358 20.162c-.186.418-.584.676-1.038.676-.692 0-1.182-.61-1.001-1.278l2.604-9.615c.089-.328.388-.545.727-.545h2.7c.339 0 .638.217.727.545l2.604 9.615c.181.668-.309 1.278-1.001 1.278-.454 0-.852-.258-1.038-.676l-.504-1.135H9.862l-.504 1.135zm1.967-4.435h3.35l-1.675-3.769-1.675 3.769z" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-4 h-4 fill-sky-500" viewBox="0 0 24 24">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

// Individual Template Card Item with Interactive Mobile Carousel
function TemplateCard({ item, t }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = item.images || [];

  const slideNext = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="p-6 transition-all border group rounded-xl border-border bg-card sm:p-8 hover:border-foreground/20">
      <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Info Column */}
        <div className="space-y-4 lg:col-span-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              {item.title}
            </h2>
            <p className="font-mono text-xs text-muted-foreground">
              {item.releaseDate}
            </p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground">
              {item.price}
            </span>
            <span className="text-xs text-muted-foreground">
              {t.orIncludedWith || "or included with"}
            </span>
            <span className="bg-badge text-badge-text px-2 py-0.5 font-mono text-[10px] font-semibold rounded uppercase tracking-wider">
              {item.tag || "PREMIUM"}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.desc}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-3 pt-1 text-foreground/80">
            <div className="p-1.5 rounded-md border border-border bg-muted/40" title="Next.js">
              <NextJsIcon />
            </div>
            <div className="p-1.5 rounded-md border border-border bg-muted/40" title="Astro">
              <AstroIcon />
            </div>
            <div className="p-1.5 rounded-md border border-border bg-muted/40" title="Tailwind CSS">
              <TailwindIcon />
            </div>
          </div>

          <div className="pt-2">
            <a
              href={item.href || "#"}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium transition-colors border rounded-md border-border bg-background text-foreground hover:bg-muted"
            >
              {t.viewTemplate || "View Template"}
            </a>
          </div>
        </div>

        {/* Right Preview Column (Desktop Grid + Mobile Slider) */}
        <div className="lg:col-span-8">
          {/* 1. DESKTOP VIEW: 3 Grid Cards */}
          <div className="hidden grid-cols-3 gap-3 lg:grid">
            {images.slice(0, 3).map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted"
              >
                <img
                  src={imgUrl}
                  alt={`${item.title} Desktop Preview ${idx + 1}`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* 2. MOBILE VIEW: Slider Carousel */}
          {images.length > 0 && (
            <div className="block lg:hidden relative group/carousel aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
              <img
                src={images[currentIdx]}
                alt={`${item.title} Mobile Preview`}
                className="object-cover w-full h-full transition-all duration-300"
              />

              {/* Prev Button */}
              <button
                onClick={slidePrev}
                type="button"
                className="absolute flex items-center justify-center text-white transition-transform -translate-y-1/2 rounded-full left-3 top-1/2 h-9 w-9 bg-black/60 backdrop-blur active:scale-95"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={slideNext}
                type="button"
                className="absolute flex items-center justify-center text-black transition-transform -translate-y-1/2 bg-white rounded-full right-3 top-1/2 h-9 w-9 active:scale-95"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ t }) {
  // Mock data fallback if t.templates or t.projects is passed
  const projectList = t.templates || t.projects || [
    {
      title: "Meridian",
      releaseDate: "Released May 30, 2026",
      price: "$79",
      tag: "PREMIUM",
      desc: "A premium developer tools saas template built on shadcn/ui and Tailwind, featuring a signature intro animation and Fumadocs-powered MDX...",
      href: "/template/meridian",
      images: [
        "https://lh3.googleusercontent.com/aida/AP1WRLuiXb-i1BaOdwL6NVoYOxUMMpToT5ZT5enCMRAawMLJNZstiIZuAbZv5nzJuMCAO4wB6INjGzoqNQolZYPqDFNEFvkK-2-2YdtEPvkICvlmlxVk8nc5WTSUmT2wGSLGr29gV07YZF0zdggZ9k34cK70SKGcayGg0e0dQnPTz6EwtTcugl6CdcnNoZR2invtEdAVQaejdeYJEinxGWeWcVIzHcnoU-JVSSkxwhlilReFpziAEwHlgKXC9NOv",
        "https://lh3.googleusercontent.com/aida/AP1WRLvO5tJ1tqKtaRidMahpZT1rZeb9zKlOPyNLGrcJT67qSiRm_6mkpMfJNgB4E7587t6LLN1noS_mwPFZjxwhRHEGjNBuhQiuMo6uUkW0-B8l71C2QsBZBwL82pXAWdAITuZSjdcfdLw2Df5yujZ7ACB5R4zb8rZLNHFY-h7PkaF5EmCMkOdzXpie6FmW7SFUbsgDLbm_mx9QK-UtSsBc55QYoz-H6Zb8Oym6derJ-8WDXFiQmIjb6GRZyCZ1",
        "https://lh3.googleusercontent.com/aida/AP1WRLuiXb-i1BaOdwL6NVoYOxUMMpToT5ZT5enCMRAawMLJNZstiIZuAbZv5nzJuMCAO4wB6INjGzoqNQolZYPqDFNEFvkK-2-2YdtEPvkICvlmlxVk8nc5WTSUmT2wGSLGr29gV07YZF0zdggZ9k34cK70SKGcayGg0e0dQnPTz6EwtTcugl6CdcnNoZR2invtEdAVQaejdeYJEinxGWeWcVIzHcnoU-JVSSkxwhlilReFpziAEwHlgKXC9NOv"
      ]
    },
    {
      title: "Verdict",
      releaseDate: "Released June 30, 2026",
      price: "$79",
      tag: "PREMIUM",
      desc: "A professional law firm and legal services template built on shadcn/ui and Tailwind. Available in Next.js and Astro editions, ideal for legal services...",
      href: "/template/verdict",
      images: [
        "https://lh3.googleusercontent.com/aida/AP1WRLvO5tJ1tqKtaRidMahpZT1rZeb9zKlOPyNLGrcJT67qSiRm_6mkpMfJNgB4E7587t6LLN1noS_mwPFZjxwhRHEGjNBuhQiuMo6uUkW0-B8l71C2QsBZBwL82pXAWdAITuZSjdcfdLw2Df5yujZ7ACB5R4zb8rZLNHFY-h7PkaF5EmCMkOdzXpie6FmW7SFUbsgDLbm_mx9QK-UtSsBc55QYoz-H6Zb8Oym6derJ-8WDXFiQmIjb6GRZyCZ1",
        "https://lh3.googleusercontent.com/aida/AP1WRLuiXb-i1BaOdwL6NVoYOxUMMpToT5ZT5enCMRAawMLJNZstiIZuAbZv5nzJuMCAO4wB6INjGzoqNQolZYPqDFNEFvkK-2-2YdtEPvkICvlmlxVk8nc5WTSUmT2wGSLGr29gV07YZF0zdggZ9k34cK70SKGcayGg0e0dQnPTz6EwtTcugl6CdcnNoZR2invtEdAVQaejdeYJEinxGWeWcVIzHcnoU-JVSSkxwhlilReFpziAEwHlgKXC9NOv",
        "https://lh3.googleusercontent.com/aida/AP1WRLvO5tJ1tqKtaRidMahpZT1rZeb9zKlOPyNLGrcJT67qSiRm_6mkpMfJNgB4E7587t6LLN1noS_mwPFZjxwhRHEGjNBuhQiuMo6uUkW0-B8l71C2QsBZBwL82pXAWdAITuZSjdcfdLw2Df5yujZ7ACB5R4zb8rZLNHFY-h7PkaF5EmCMkOdzXpie6FmW7SFUbsgDLbm_mx9QK-UtSsBc55QYoz-H6Zb8Oym6derJ-8WDXFiQmIjb6GRZyCZ1"
      ]
    }
  ];

  return (
    <section id="projects" className="max-w-6xl px-4 py-16 mx-auto border-t sm:px-8 border-border">
      <div data-reveal className="mb-10 space-y-2">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          {t?.projectsTitle || "PREMIUM MARKETPLACE"}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {t?.projectsSub || "Shadcn UI Templates"}
        </h2>
      </div>

      <div data-reveal className="space-y-12">
        {projectList.map((item) => (
          <TemplateCard key={item.title} item={item} t={t || {}} />
        ))}
      </div>
    </section>
  );
}