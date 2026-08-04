import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const TechLogos = {
  typescript: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#3178C6" title="TypeScript">
      <path d="M1.125 0C.507 0 0 .507 0 1.125v21.75C0 23.493.507 24 1.125 24h21.75c.618 0 1.125-.507 1.125-1.125V1.125C24 .507 23.493 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.362 5.093 5.093 0 0 0-.713-.242 3.882 3.882 0 0 0-.82-.093c-.423 0-.783.083-1.08.25-.297.166-.522.396-.675.69-.153.294-.23.633-.23 1.018 0 .341.061.634.183.88.122.245.297.456.525.633.228.177.502.33.822.46.32.13.682.257 1.086.382.502.155.975.328 1.418.52.443.19.822.422 1.137.696a3.02 3.02 0 0 1 .773.992c.18.398.27.886.27 1.464 0 .736-.178 1.385-.533 1.947a4.01 4.01 0 0 1-1.503 1.378c-.647.354-1.428.531-2.343.531-.692 0-1.348-.063-1.968-.188a8.31 8.31 0 0 1-1.683-.518v-2.613c.277.185.626.356 1.047.513.42.157.87.275 1.35.353.48.078.932.117 1.356.117.483 0 .891-.088 1.224-.264.333-.176.587-.417.762-.723.175-.306.262-.656.262-1.05 0-.348-.061-.643-.183-.885a2.23 2.23 0 0 0-.51-.645 4.01 4.01 0 0 0-.787-.472c-.3-.133-.643-.263-1.028-.39a10.82 10.82 0 0 1-1.455-.544 4.037 4.037 0 0 1-1.168-.738 2.87 2.87 0 0 1-.762-1.012c-.172-.41-.258-.9-.258-1.47 0-.72.176-1.352.528-1.897a3.923 3.923 0 0 1 1.473-1.332c.63-.342 1.393-.513 2.288-.513zM9.702 9.878v2.298H7.134v9.648H4.256v-9.648H1.688V9.878h8.014z"/>
    </svg>
  ),
  svelte: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#FF3E00" title="Svelte">
      <path d="M19.305 3.327a5.553 5.553 0 0 0-7.854.896L8.41 8.33l1.838 1.488 3.042-4.108a3.228 3.228 0 0 1 4.568-.521 3.228 3.228 0 0 1 .521 4.568l-4.108 5.071 1.838 1.488 4.108-5.07a5.553 5.553 0 0 0-.897-7.92zm-14.61 7.346a5.553 5.553 0 0 0 .897 7.92l3.041 2.463a5.553 5.553 0 0 0 7.854-.896l3.041-4.108-1.838-1.488-3.042 4.108a3.228 3.228 0 0 1-4.568.521 3.228 3.228 0 0 1-.521-4.568l4.108-5.071-1.838-1.488-4.108 5.07a5.553 5.553 0 0 0-.13 7.54z"/>
    </svg>
  ),
  css: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1572B6" title="CSS3">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.236-2.658-12.924-.003.702 7.994h8.868l-.34 3.738-3.901 1.054-3.901-1.054-.251-2.825H4.116l.488 5.487 7.396 2.052 7.398-2.052.932-10.518H8.531z"/>
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5 rounded-[2px]" viewBox="0 0 24 24" fill="#F7DF1E" title="JavaScript">
      <path d="M0 0h24v24H0z" fill="#F7DF1E"/>
      <path d="M6.776 19.349c.813 1.312 1.95 2.125 3.875 2.125 1.775 0 2.875-.862 2.875-2.125 0-1.475-.925-2.025-2.525-2.725l-.875-.375c-2.488-1.062-4.125-2.388-4.125-5.325 0-3.325 2.588-5.75 6.425-5.75 2.925 0 4.888.988 6.088 3.125l-2.75 1.763c-.638-1.125-1.475-1.638-2.988-1.638-1.225 0-2.088.638-2.088 1.575 0 1.138.75 1.638 2.375 2.325l.875.375c3.088 1.325 4.6 2.625 4.6 5.6 0 3.738-2.888 6.012-7.15 6.012-3.825 0-6.175-1.625-7.375-4.125l2.763-1.837zM18 19.349" fill="#000"/>
    </svg>
  ),
  npm: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#CB3837" title="npm">
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zm1.763 3.526h16.948v16.948H16.95V7.052h-5.297v13.422H3.526V3.526z"/>
    </svg>
  ),
  react: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#61DAFB" title="React">
      <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7.5c-3.1 0-6.1 1.2-8 3.2C2.1 6.6 1 9.2 1 12s1.1 5.4 3 7.3c1.9 2 4.9 3.2 8 3.2s6.1-1.2 8-3.2c1.9-1.9 3-4.5 3-7.3s-1.1-5.4-3-7.3c-1.9-2-4.9-3.2-8-3.2z"/>
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#06B6D4" title="Tailwind CSS">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
    </svg>
  )
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
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setSlideIndex(0);
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
      problem: "Law firms and legal professionals need a modern, responsive web presence that is easy to maintain and customize without deep technical knowledge.",
      approach: "The template pairs a clean component library with Tailwind CSS utility classes and a readable file structure. That makes each page easier to customize, deploy, and maintain.",
      result: "Verdict turns a legal practice website into something professional, fast, and easy to continue editing.",
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
      liveUrl: "https://solindacheab.github.io/agency-landingpage/",
      githubUrl: "https://github.com/solinda-cheab/agency-landingpage",
      previewImage: "/agency-website/1.png",
      overview:
        "A modern landing page for creative agencies featuring responsive sections, service showcases, and case studies.",
      problem: "Agencies need lightweight, editable landing pages that convert visitors into leads.",
      approach: "Built modular components and utility-first styles with Tailwind for quick customization.",
      result: "Delivered a fast, responsive template with clear conversion points.",
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
      githubUrl: "https://github.com/solinda-cheab/cpp-library-management",
      previewImage: "/c++group-project/1.png",
      overview: "A group project implementing a library management system in C++ with CSV persistence and a Raylib GUI.",
      problem: "Classic library workflows require efficient record handling and search over limited resources.",
      approach: "Implemented modular C++ components with a simple GUI for demonstration and CLI for batch operations.",
      result: "Completed core CRUD features, efficient search, and a GUI prototype using Raylib.",
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

        <section className="relative overflow-hidden border shadow-md rounded-xl border-neutral-300/80 bg-neutral-900">
          <img
            src={(resolvedTemplateData.previewImages || [resolvedTemplateData.previewImage])[slideIndex]}
            alt={`${resolvedTemplateData.title} Preview`}
            className="w-full h-auto max-h-[550px] object-cover object-top"
          />

          {(resolvedTemplateData.previewImages || [resolvedTemplateData.previewImage]).length > 1 && (
            <>
              <button
                onClick={() => setSlideIndex((prev) => (prev - 1 + (resolvedTemplateData.previewImages || [resolvedTemplateData.previewImage]).length) % (resolvedTemplateData.previewImages || [resolvedTemplateData.previewImage]).length)}
                className="absolute z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full shadow-lg left-3 top-1/2 bg-white/90 text-neutral-800 hover:bg-white sm:hidden"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSlideIndex((prev) => (prev + 1) % (resolvedTemplateData.previewImages || [resolvedTemplateData.previewImage]).length)}
                className="absolute z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full shadow-lg right-3 top-1/2 bg-white/90 text-neutral-800 hover:bg-white sm:hidden"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
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