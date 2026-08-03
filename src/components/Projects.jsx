import React, { useState } from "react";

// Tech Icon Components with subtle scale hover effect
const NextJsIcon = () => (
  <svg className="w-4 h-4 transition-transform duration-200 hover:scale-110" viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="currentColor" />
    <path
      d="M149.508 157.52L69.141 54H54V126H67.5V71.1852L138.837 162.772C142.607 161.277 146.182 159.508 149.508 157.52Z"
      fill="white"
    />
    <rect x="115.5" y="54" width="13.5" height="72" fill="white" />
  </svg>
);

const AstroIcon = () => (
  <svg className="w-4 h-4 fill-current transition-transform duration-200 hover:scale-110" viewBox="0 0 24 24">
    <path d="M8.358 20.162c-.186.418-.584.676-1.038.676-.692 0-1.182-.61-1.001-1.278l2.604-9.615c.089-.328.388-.545.727-.545h2.7c.339 0 .638.217.727.545l2.604 9.615c.181.668-.309 1.278-1.001 1.278-.454 0-.852-.258-1.038-.676l-.504-1.135H9.862l-.504 1.135zm1.967-4.435h3.35l-1.675-3.769-1.675 3.769z" />
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-4 h-4 fill-sky-500 transition-transform duration-200 hover:scale-110" viewBox="0 0 24 24">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

// Individual Template Card Item with Interactive Mobile Carousel
function TemplateCard({ item, t, index }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = item.images || [];

  const handleSlide = (newIdx) => {
    setIsAnimating(true);
    setCurrentIdx(newIdx);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const slideNext = () => {
    handleSlide((currentIdx + 1) % images.length);
  };

  const slidePrev = () => {
    handleSlide((currentIdx - 1 + images.length) % images.length);
  };

  return (
    <article
      style={{ animationDelay: `${index * 150}ms` }}
      className="p-6 transition-all duration-300 border group rounded-xl border-border bg-card sm:p-8 hover:border-foreground/30 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up opacity-0 fill-mode-forwards"
    >
      <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Info Column */}
        <div className="space-y-4 lg:col-span-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
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
            <span className="bg-badge text-badge-text px-2 py-0.5 font-mono text-[10px] font-semibold rounded uppercase tracking-wider transition-all duration-300 group-hover:scale-105">
              {item.tag || "PREMIUM"}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.desc}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-3 pt-1 text-foreground/80">
            <div
              className="p-1.5 rounded-md border border-border bg-muted/40 transition-all duration-200 hover:bg-muted hover:border-foreground/20"
              title="Next.js"
            >
              <NextJsIcon />
            </div>
            <div
              className="p-1.5 rounded-md border border-border bg-muted/40 transition-all duration-200 hover:bg-muted hover:border-foreground/20"
              title="Astro"
            >
              <AstroIcon />
            </div>
            <div
              className="p-1.5 rounded-md border border-border bg-muted/40 transition-all duration-200 hover:bg-muted hover:border-foreground/20"
              title="Tailwind CSS"
            >
              <TailwindIcon />
            </div>
          </div>

          <div className="pt-2">
            <a
              href={item.href || "#"}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium transition-all duration-200 border rounded-md border-border bg-background text-foreground hover:bg-muted hover:border-foreground/40 active:scale-95 shadow-xs"
            >
              {t.viewTemplate || "View Template"}
            </a>
          </div>
        </div>

        {/* Right Preview Column (Desktop Grid + Mobile Slider) */}
        <div className="lg:col-span-8">
          {/* 1. DESKTOP VIEW: 3 Grid Cards with Zoom FX */}
          <div className="hidden grid-cols-3 gap-3 lg:grid">
            {images.slice(0, 3).map((imgUrl, idx) => (
              <div
                key={idx}
                className="aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted relative group/img cursor-pointer"
              >
                <img
                  src={imgUrl}
                  alt={`${item.title} Desktop Preview ${idx + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* 2. MOBILE VIEW: Slider Carousel with Smooth Transitions */}
          {images.length > 0 && (
            <div className="block lg:hidden relative group/carousel aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
              <img
                src={images[currentIdx]}
                alt={`${item.title} Mobile Preview`}
                className={`object-cover w-full h-full transition-all duration-300 ease-in-out ${
                  isAnimating ? "opacity-40 scale-95" : "opacity-100 scale-100"
                }`}
              />

              {/* Prev Button */}
              <button
                onClick={slidePrev}
                type="button"
                className="absolute flex items-center justify-center text-white transition-all duration-200 -translate-y-1/2 rounded-full left-3 top-1/2 h-9 w-9 bg-black/60 backdrop-blur hover:bg-black/80 active:scale-90 shadow-md"
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
                className="absolute flex items-center justify-center text-black transition-all duration-200 -translate-y-1/2 bg-white rounded-full right-3 top-1/2 h-9 w-9 hover:bg-slate-100 active:scale-90 shadow-md"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Indicator Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-xs">
                {images.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === currentIdx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ t }) {
  const projectList = t?.templates || t?.projects || [
    {
      title: "Meridian",
      releaseDate: "Released May 30, 2026",
      price: "$79",
      tag: "PREMIUM",
      desc: "A premium developer tools saas template built on shadcn/ui and Tailwind, featuring a signature intro animation and Fumadocs-powered MDX...",
      href: "/template/meridian",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=800&q=80",
      ]
    }
  ];

  return (
    <section id="projects" className="max-w-6xl px-4 py-16 mx-auto border-t sm:px-8 border-border">
      <div data-reveal className="mb-10 space-y-2 animate-fade-in">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          {t?.projectsTitle || "PREMIUM MARKETPLACE"}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          {t?.projectsSub || "Shadcn UI Templates"}
        </h2>
      </div>

      <div data-reveal className="space-y-12">
        {projectList.map((item, index) => (
          <TemplateCard key={item.title} item={item} t={t || {}} index={index} />
        ))}
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}