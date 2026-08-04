import React, { useState } from "react";

export default function Experience({ t }) {
  const [activeTab, setActiveTab] = useState("work");

  // Fallback items based on real roles
  const workItems = t?.workExperienceItems || [
    {
      title: "ICT Officer",
      company: "MOSC Cambodia",
      date: "2024 - Present",
      description:
        "Researched and configured online examination platforms (Testportal, AutoProctor), managed storage hosting, and developed technical test modules.",
    },
    {
      title: "Technical Team Lead",
      company: "CIMO Cambodia",
      date: "04-2025 - 04-2026",
      description:
        "Built responsive web components and interactive layouts using React and Tailwind CSS for web applications and training platforms.",
    },
    {
      title: "Website Committee Member",
      company: "Youth Internet Governance Forum 2026",
      date: "Present",
      description:
        "Gained hands-on experience in  Wordpress development workflows, Git collaboration, and modern frontend design systems.",
    },
  ];

  const volunteerItems = t?.volunteerExperienceItems || [
    {
      title: "Stage Lead",
      company: "RISE Week 2026",
      date: "05-2026 - 07-2026",
      description:
        "Planning and executing stage management for a youth technology conference, coordinating with speakers, technical teams, and event staff.",
    },
    {
      title: "General Volunteer",
      company: "ESC2025 (Earth Science Competition)",
      date: "2025",
      description:
        "Assisted with event operations, contestant management, and technical logistics during the regional Earth Science Competition.",
    },
    {
      title: "Technical Volunteer",
      company: "MKO Cambodia",
      date: "2025",
      description:
        "Provided technical support and ensured smooth operation during  event.",
    },
    {
      title: "Stage Volunteer",
      company: "Mekong Tech Festival 2025",
      date: "2025",
      description:
        "Coordinated stage activities, managed speaker schedules, and assisted with technical setups for a regional technology festival.",
    },
    {
      title: "Invigilator",
      company: "ESC2025 (Earth Science Competition)",
      date: "2025",
      description:
        "Ensured fair and secure examination conditions, monitored participants, and assisted with the administration of the competition.",
    },
  ];

  const activeItems = activeTab === "work" ? workItems : volunteerItems;

  return (
    <section
      id="experience"
      data-reveal
      className="max-w-6xl px-4 py-16 mx-auto font-sans transition-colors duration-300 sm:px-8"
    >
      {/* Header & Category Switcher */}
      <div className="flex flex-col gap-4 mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500">
            {t?.careerPathLabel || "Career Path"}
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl text-slate-900 dark:text-white">
            {t?.experienceTitle || "Experience"}
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="inline-flex self-start p-1 space-x-1 border rounded-xl border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-sm sm:self-auto">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
              activeTab === "work"
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            {t?.workTabLabel || "Work Experience"}
          </button>
          <button
            onClick={() => setActiveTab("volunteer")}
            className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
              activeTab === "volunteer"
                ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            {t?.volunteerTabLabel || "Volunteering"}
          </button>
        </div>
      </div>

      {/* Minimalist Timeline Container */}
      <div className="relative pl-6 space-y-8 border-l border-slate-200 dark:border-slate-800">
        {activeItems.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Subtle Node Indicator */}
            <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-200" />

            {/* Content Block */}
            <div>
              {/* Meta: Title, Company, Date */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-medium text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <span className="text-sm font-normal text-slate-400 dark:text-slate-500">
                    / {item.company}
                  </span>
                </div>

                <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                  {item.date}
                </span>
              </div>

              {/* Description */}
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 leading-normal max-w-2xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}