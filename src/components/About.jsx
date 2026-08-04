import React from "react";
import {
  FiCode,
  FiCpu,
  FiTerminal,
  FiLayers,
  FiGlobe,
  FiCheckCircle,
  FiMapPin,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

// Option A: Import logo from src/assets/ (if stored in src/assets/rupp-logo.png)
// import ruppLogo from "../assets/rupp-logo.png";

export default function About({ t }) {
  const stats = [
    { label: "Core Stack", value: "React" },
    { label: "Bilingual UIs", value: "EN / ខ្មែរ" },
    { label: "Domain", value: "Web " },
  ];

  const educationList = [
    {
      degree: t?.degree1 || "Bachelor of Science in Computer Science",
      institution: t?.institution1 || "Royal University of Phnom Penh (RUPP)",
      period: t?.period1 || "2024 — Present",
      description:
        t?.eduDesc1 ||
        "Focusing on software engineering principles, algorithms, data structures, and computer systems.",
      // Option B: Direct path if logo is placed inside public/ folder (e.g., public/rupp-logo.png)
      logo: "/Logo-removebg-preview.png", // Replace with ruppLogo if using Option A import
    },
  ];

  return (
    <section
      id="about"
      data-reveal
      className="relative max-w-6xl px-4 py-16 mx-auto font-sans transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-800/80 sm:px-8"
    >
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-black-500/10 dark:bg-black-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-96 w-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]" />

      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Main Info & Education (8 cols) */}
        <div className="space-y-12 lg:col-span-8">
          {/* Section Heading */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase border rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/60">
              <FiTerminal className="w-3.5 h-3.5 text-black-500" />
              <span>{t?.aboutTitle || "ABOUT ME"}</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white leading-[1.15]">
              {t?.aboutSub || "Building polished digital experiences with care and precision."}
            </h2>

            <p className="mt-5 text-base leading-relaxed sm:text-lg text-slate-600 dark:text-slate-300">
              {t?.aboutBody ||
                "I am currently a 2nd-year student pursuing a Bachelor's degree in Computer Science and Engineering at the Faculty of Science, Royal University of Phnom Penh, with a strong interest in technology, digital innovation, and creating solutions that address real-world challenges."}
            </p>

          </div>

          {/* Education Section */}
          <div className="pt-4 space-y-6 border-t border-slate-200/60 dark:border-slate-800/60">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
              <FiBookOpen className="w-3.5 h-3.5" />
              <span>{t?.educationTitle || "Education & Learning"}</span>
            </div>

            <div className="space-y-6">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Logo Container */}
                  {edu.logo && (
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 p-1 overflow-hidden bg-white border rounded-full shadow-sm border-slate-200 dark:border-slate-700">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="object-contain w-full h-full rounded-full"
                      />
                    </div>
                  )}

                  {/* Text Details Container */}
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold sm:text-lg text-slate-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/60">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-700 sm:text-sm dark:text-slate-300">
                      {edu.degree}
                    </p>

                    <p className="text-xs leading-relaxed sm:text-sm text-slate-600 dark:text-slate-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Profile Overview & Quick Facts (4 cols) */}
        <aside className="space-y-6 lg:col-span-4">
          <div className="p-6 border shadow-xs rounded-2xl border-slate-200/80 bg-slate-50/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/60 dark:border-slate-800/60">
              <span className="font-mono text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400">
                {t?.developerCardLabel || "Developer Card"}
              </span>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <FiBookOpen className="w-3.5 h-3.5" /> {t?.fieldLabel || "Field"}
                </span>
                <span className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                  Computer Science
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <FiMapPin className="w-3.5 h-3.5" /> {t?.locationLabel || "Location"}
                </span>
                <span className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                  Phnom Penh
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <FiGlobe className="w-3.5 h-3.5" /> {t?.languagesLabel || "Languages"}
                </span>
                <span className="text-xs font-medium text-slate-900 dark:text-white sm:text-sm">
                  Khmer, English
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <FiCheckCircle className="w-3.5 h-3.5" /> {t?.availabilityLabel || "Availability"}
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">
                  Open to projects
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}