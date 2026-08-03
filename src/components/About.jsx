import React from "react";
import { FiCode, FiCpu, FiLayout, FiCheckCircle } from "react-icons/fi";

export default function About({ t }) {
  // Highlights/Focus areas
  const focusAreas = [
    {
      icon: <FiLayout className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Frontend Engineering",
      desc: "Crafting responsive, high-performance UIs with React and Tailwind CSS.",
    },
    {
      icon: <FiCpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "IoT & Hardware Integration",
      desc: "Connecting smart hardware solutions using Arduino and automated sensors.",
    },
    {
      icon: <FiCode className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      title: "Clean Architecture",
      desc: "Building maintainable, modular design systems and reusable components.",
    },
  ];

  return (
    <section 
      id="about" 
      className="max-w-6xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Story & Focus Areas */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-950/80 text-[#060b72] dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
              {t?.aboutTitle || "ABOUT ME"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-serif">
              {t?.aboutSub || "Passionate about building intuitive digital experiences."}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              {t?.aboutBody || 
                "I am a Computer Science student and frontend developer dedicated to creating high-quality web applications. I bridge design and functionality by transforming complex ideas into responsive, user-friendly digital products."
              }
            </p>
          </div>

          {/* Specialization Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {focusAreas.map((area, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-200 flex flex-col gap-2"
              >
                <div className="p-2 w-fit rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                  {area.icon}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mt-1">
                  {area.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Stats / Facts Card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80 dark:border-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#060b72] dark:text-blue-400">
                {t?.factsTitle || "FAST FACTS"}
              </h3>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                <FiCheckCircle className="w-3.5 h-3.5" />
                Available for projects
              </span>
            </div>

            {/* Fact List */}
            <dl className="space-y-4">
              {t?.facts ? (
                t.facts.map((f, i) => (
                  <div
                    key={f.label || i}
                    className="flex items-center justify-between text-sm pb-3.5 border-b border-slate-100 dark:border-slate-800/60 last:border-0 last:pb-0"
                  >
                    <dt className="text-slate-500 dark:text-slate-400 font-medium">{f.label}</dt>
                    <dd className="font-semibold text-slate-900 dark:text-slate-100 text-right">{f.value}</dd>
                  </div>
                ))
              ) : (
                /* Default fallback data if t.facts is missing */
                <>
                  <div className="flex items-center justify-between text-sm pb-3.5 border-b border-slate-100 dark:border-slate-800/60">
                    <dt className="text-slate-500 dark:text-slate-400 font-medium">Role</dt>
                    <dd className="font-semibold text-slate-900 dark:text-slate-100 text-right">Frontend Developer</dd>
                  </div>
                  <div className="flex items-center justify-between text-sm pb-3.5 border-b border-slate-100 dark:border-slate-800/60">
                    <dt className="text-slate-500 dark:text-slate-400 font-medium">Education</dt>
                    <dd className="font-semibold text-slate-900 dark:text-slate-100 text-right">Computer Science Student</dd>
                  </div>
                  <div className="flex items-center justify-between text-sm pb-3.5 border-b border-slate-100 dark:border-slate-800/60">
                    <dt className="text-slate-500 dark:text-slate-400 font-medium">Main Stack</dt>
                    <dd className="font-semibold text-slate-900 dark:text-slate-100 text-right">React, Tailwind, JavaScript</dd>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <dt className="text-slate-500 dark:text-slate-400 font-medium">Location</dt>
                    <dd className="font-semibold text-slate-900 dark:text-slate-100 text-right">Phnom Penh, Cambodia</dd>
                  </div>
                </>
              )}
            </dl>

          </div>
        </div>

      </div>
    </section>
  );
}