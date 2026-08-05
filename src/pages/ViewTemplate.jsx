import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiNpm, SiAstro, SiMdx, SiCplusplus, SiRaylib, SiCss, SiSvelte } from 'react-icons/si';

const TechLogos = {
  typescript: <SiTypescript className="w-5 h-5 text-blue-500" title="TypeScript" />,
  javascript: <SiJavascript className="w-5 h-5 text-yellow-400" title="JavaScript" />,
  react: <SiReact className="w-5 h-5 text-cyan-400" title="React" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-sky-400" title="Tailwind CSS" />,
  npm: <SiNpm className="w-5 h-5 text-red-600" title="npm" />,
  astro: <SiAstro className="w-5 h-5 text-slate-700" title="Astro" />,
  mdx: <SiMdx className="w-5 h-5 text-violet-500" title="MDX" />,
  cplusplus: <SiCplusplus className="w-5 h-5 text-blue-600" title="C++" />,
  raylib: <SiRaylib className="w-5 h-5 text-orange-500" title="Raylib" />,
  css: <SiCss className="w-5 h-5 text-blue-600" title="CSS3" />,
  svelte: <SiSvelte className="w-5 h-5 text-orange-500" title="Svelte" />,
  
};

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ViewTemplate = ({ t }) => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = window.setTimeout(() => setIsLoading(false), 280);
    return () => window.clearTimeout(timeout);
  }, [projectId]);

  const templateData = {
    "e-wedding": {
    title: "E-Wedding Invitations",
    subtitle: "A modern wedding invitation template built with React, Tailwind CSS, and Framer Motion.",
    liveUrl: "https://e-weddinginvitations.vercel.app/",
    githubUrl: "https://github.com/solinda-cheab/E-Wedding-Invitation-Project",
    previewImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    overview: "A modern wedding invitation template built with React, Tailwind CSS, and Framer Motion. Available in both Next.js and Astro editions, ideal for couples and wedding planners.",
    problem: "Couples and event planners need a modern, interactive, and mobile-responsive digital invitation platform that replaces traditional paper invites while keeping guest management seamless.",
    approach: "Leveraged component-driven architecture with React and Framer Motion for dynamic animations, styled via Tailwind CSS utility classes across Next.js and Astro for maximum site speed and asset optimization.",
    result: "Delivered an elegant, high-performing e-invitation template featuring smooth interactions, dual-framework adaptability, and fluid viewports across desktop and mobile devices.",
    reflection: "Building a digital invitation platform required balancing fluid design aesthetics with reliable performance across mobile viewports. Leveraging React and Framer Motion, I engineered interactive micro-animations and smooth layout transitions without compromising load times. Implementing component-driven styling via Tailwind CSS made the design scalable and customizable for dual-framework availability in Next.js and Astro. This project deepened my understanding of state-driven animations, static-site generation performance, and asset optimization for media-heavy web applications.",
    role: "Template Designer & Developer",
    timeline: "DEC 2025",
    outcome: "Built a responsive template with Next.js and Astro editions, featuring a clean component library and Tailwind CSS styling.",
    tags: ["typescript", "react", "tailwind", "javascript", "npm"],
    location: "Based in Phnom Penh.",
    freelanceStatus: "This template is available for purchase.",
    previewImages: [
      "/e-invitation/Screenshot 2026-08-04 170252.png",
      "/e-invitation/Screenshot 2026-08-04 170307.png",
      "/e-invitation/Screenshot 2026-08-04 170316.png"
    ],
  },
    "apex-dashboard": {
      title: "Apex Dashboard",
      subtitle: "A modern analytics and SaaS admin dashboard template with rich UI components.",
      liveUrl: "https://example.com/apex-dashboard",
      githubUrl: "https://github.com/example/apex-dashboard",
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      overview: "Apex Dashboard brings together analytics, user management, and reporting modules for modern SaaS applications.",
      problem: "Teams need a polished admin workspace that can surface key metrics without becoming overly complex.",
      approach: "The layout uses a modular dashboard structure with charts, tables, and compact views that stay easy to scan.",
      result: "The template gives product teams a cleaner way to present data and manage operations.",
      role: "Product UI Designer",
      timeline: "MAY 2026",
      outcome: "Launched an admin dashboard concept with light and dark mode support and interactive views.",
      tags: ["react", "typescript", "tailwind"],
      location: "Based in Phnom Penh.",
      freelanceStatus: "This template is available for purchase.",
      previewImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    "nexus-agency": {
      title: "Nexus Agency",
      subtitle: "A clean, high-converting agency portfolio and services showcase template.",
      liveUrl: "https://example.com/nexus-agency",
      githubUrl: "https://github.com/example/nexus-agency",
      previewImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      overview: "Nexus Agency is designed for creative studios and digital agencies that want a modern presence with strong conversion points.",
      problem: "Agencies often struggle to balance visual storytelling with a fast, lightweight experience.",
      approach: "The template focuses on clear service sections, portfolio storytelling, and a streamlined mobile-first layout.",
      result: "The result is a crisp, conversion-oriented landing experience that feels polished on every screen.",
      role: "Frontend Developer",
      timeline: "APRIL 2026",
      outcome: "Built a flexible agency website template with a fast loading experience and strong content hierarchy.",
      tags: ["astro", "tailwind", "mdx"],
      location: "Based in Phnom Penh.",
      freelanceStatus: "This template is available for purchase.",
      previewImages: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    "agency-landingpage": {
    title: "Agency Landing Page",
    subtitle: "A modern landing page for a creative agency built with React and Tailwind.",
    liveUrl: "https://agency-website-pearl-nine.vercel.app/",
    githubUrl: "https://github.com/solinda-cheab/agency-landingpage",
    previewImage: "/agency-website/1.png",
    overview: "A modern landing page for creative agencies featuring responsive sections, service showcases, and case studies.",
    problem: "Agencies need lightweight, editable landing pages that convert visitors into leads.",
    approach: "Built modular components and utility-first styles with Tailwind for quick customization.",
    result: "Delivered a fast, responsive template with clear conversion points.",
    reflection: "Created to serve as a fast-loading, highly adaptable template for creative agencies, this project prioritized atomic design principles and responsive layouts. By decoupling UI components into modular Tailwind-styled structures, I ensured the template remains effortlessly customizable and CMS-ready. Engineering interactive sections and mobile-first layouts reinforced my proficiency in component reusability, responsive grid systems, and clean codebase organization.",
    role: "Frontend Developer",
    timeline: "MAY 2026",
    outcome: "Template shipped with responsive layouts and CMS-ready sections.",
    tags: ["javascript", "react", "tailwind"],
    location: "Based in Phnom Penh.",
    freelanceStatus: "This template is available for purchase.",
    previewImages: [
      "/agency-website/1.png",
      "/agency-website/2.png",
      "/agency-website/3.png"
    ],
  },
   "c+=group-project": {
    title: "Library Management System CLI/GUI",
    subtitle: "C++ library management with both CLI and Raylib GUI components.",
    liveUrl: "",
    githubUrl: "https://github.com/solinda-cheab/dsa-final-book-assigment",
    previewImage: "/c++group-project/1.png",
    overview: "A group project implementing a library management system in C++ with CSV persistence and a Raylib GUI.",
    problem: "Classic library workflows require efficient record handling and search over limited resources.",
    approach: "Implemented modular C++ components with a simple GUI for demonstration and CLI for batch operations.",
    result: "Completed core CRUD features, efficient search, and a GUI prototype using Raylib.",
    reflection: "Leading this project involved bridging fundamental C++ data structures with both terminal operations and a lightweight GUI built using Raylib. The primary technical focus was managing memory, file I/O operations, and CSV persistence efficiently to handle record operations without external database reliance. Navigating the constraints of C++ for UI rendering while acting as Project Lead sharpened my core low-level programming skills, system design logic, and cross-functional task coordination.",
    role: "Project Lead",
    timeline: "APR 2026",
    outcome: "Delivered a functional prototype and documentation for future extension.",
    tags: ["cplusplus", "raylib"],
    location: "Based in Phnom Penh.",
    freelanceStatus: "Academic project",
    previewImages: [
      "/c++group-project/1.png",
      "/c++group-project/2.png",
      "/c++group-project/image.png",
    ],
  },
  };

   const resolvedTemplateData = templateData[projectId] || templateData["e-wedding"];

  useEffect(() => {
    const previewImg = resolvedTemplateData.previewImages?.[0] || resolvedTemplateData.previewImage || "/og-image.png";

    const updateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="og:${property}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", `og:${property}`);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("title", `${resolvedTemplateData.title} | Solinda Cheab`);
    updateMeta("description", resolvedTemplateData.subtitle);
    updateMeta("image", previewImg);

    return () => {
      updateMeta("title", "Solinda Cheab | Frontend Developer");
      updateMeta("description", "Frontend Developer with a passion for creating responsive and user-friendly web applications.");
      updateMeta("image", "https://solindacheabportfolio.vercel.app/og-image.png");
    };
  }, [projectId, resolvedTemplateData]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen font-sans bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
        <main className="max-w-5xl px-6 py-12 mx-auto space-y-10 md:py-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-20 h-10 rounded-full skeleton-bg" />
              <div className="w-24 h-10 rounded-full skeleton-bg" />
            </div>
            <div className="w-3/4 h-12 rounded-xl skeleton-bg" />
            <div className="w-1/2 h-5 rounded-full skeleton-bg" />
          </div>

          <div className="overflow-hidden rounded-3xl h-[380px] skeleton-bg" />

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-32 h-5 rounded-full skeleton-bg" />
                  <div className="space-y-2">
                    <div className="w-full h-4 rounded-full skeleton-bg" />
                    <div className="w-5/6 h-4 rounded-full skeleton-bg" />
                    <div className="w-2/3 h-4 rounded-full skeleton-bg" />
                  </div>
                </div>
              ))}
            </div>

            <aside className="space-y-5 lg:col-span-4 lg:sticky lg:top-12 lg:border-l lg:border-neutral-200 lg:pl-10">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="w-24 h-4 rounded-full skeleton-bg" />
                  <div className="w-full h-4 rounded-full skeleton-bg" />
                </div>
              ))}
            </aside>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen font-sans bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <main className="max-w-5xl px-6 py-12 mx-auto space-y-12 md:py-16">

        <header className="space-y-6">
          <div className="space-y-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all bg-white border rounded-lg shadow-sm cursor-pointer text-neutral-800 hover:bg-neutral-100 border-neutral-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t?.backButton || "Back"}
            </button>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-neutral-900">
              {resolvedTemplateData.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-neutral-600">
              {resolvedTemplateData.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {resolvedTemplateData.liveUrl && (
              <a
                href={resolvedTemplateData.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all bg-white border rounded-lg shadow-sm text-neutral-800 hover:bg-neutral-100 border-neutral-300"
              >
                {t?.liveDemo || "Live Demo"}
              </a>
            )}
            {resolvedTemplateData.githubUrl && (
              <a
                href={resolvedTemplateData.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all bg-white border rounded-lg shadow-sm text-neutral-800 hover:bg-neutral-100 border-neutral-300"
              >
                <GithubIcon className="w-4 h-4 text-neutral-800" />
                {t?.githubBtn || "GitHub"}
              </a>
            )}
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {(resolvedTemplateData.previewImages || [resolvedTemplateData.previewImage]).map((src, idx) => (
            <div key={idx} className="overflow-hidden border shadow-sm rounded-xl border-neutral-300/80 bg-neutral-900">
              <img
                src={src}
                alt={`${resolvedTemplateData.title} Preview ${idx + 1}`}
                className="w-full h-auto max-h-[400px] object-cover object-top"
              />
            </div>
          ))}
        </section>

        <div className="grid items-start grid-cols-1 gap-12 pt-4 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <section className="space-y-3">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">{t?.overviewLabel || "Overview"}</h2>
              <p className="text-base leading-relaxed text-neutral-600">{resolvedTemplateData.overview}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">{t?.problemLabel || "Problem"}</h2>
              <p className="text-base leading-relaxed text-neutral-600">{resolvedTemplateData.problem}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">{t?.approachLabel || "Approach"}</h2>
              <p className="text-base leading-relaxed text-neutral-600">{resolvedTemplateData.approach}</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900">{t?.resultLabel || "Result"}</h2>
              <p className="text-base leading-relaxed text-neutral-600">{resolvedTemplateData.result}</p>
            </section>
          </div>

          <aside className="space-y-8 lg:col-span-4 lg:sticky lg:top-12 lg:border-l lg:border-neutral-200 lg:pl-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-px bg-neutral-900"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-900">OVERVIEW</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-bold text-neutral-900">{t?.roleLabel || "Role"}</h3>
              <p className="text-sm text-neutral-600">{resolvedTemplateData.role}</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-bold text-neutral-900">{t?.timelineLabel || "Timeline"}</h3>
              <p className="text-xs font-semibold tracking-wider uppercase text-neutral-500">{resolvedTemplateData.timeline}</p>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-bold text-neutral-900">{t?.outcomeLabel || "Outcome"}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{resolvedTemplateData.outcome}</p>
            </div>

            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400">{t?.techStackLabel || "Tech Stack"}</h3>
              <div className="flex flex-wrap items-center gap-3">
                {resolvedTemplateData.tags.map((tag, idx) => {
                  const key = tag.toLowerCase();
                  return (
                    <div
                      key={idx}
                      className="p-2 transition-colors border rounded-lg shadow-sm bg-neutral-100 hover:bg-neutral-200/80 border-neutral-200"
                      title={tag.toUpperCase()}
                    >
                      {TechLogos[key] || (
                        <span className="font-mono text-xs font-medium text-neutral-700">{tag}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>

        <footer className="flex flex-col items-center justify-between gap-4 pt-12 text-xs border-t border-neutral-200 sm:flex-row text-neutral-500">
          <p>{resolvedTemplateData.freelanceStatus}</p>
          <p>{resolvedTemplateData.location}</p>
        </footer>

      </main>
    </div>
  );
};

export default ViewTemplate;