import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiFramer, SiAstro, SiMdx, SiCplusplus, SiRaylib, SiNpm, SiCss, SiSvelte } from 'react-icons/si';
import { GlareHover } from "@/components/ui/glare-hover";

// 1. Projects Data
const TechLogos = {
  typescript: <SiTypescript className="w-5 h-5 text-blue-500" title="TypeScript" />,
  javascript: <SiJavascript className="w-5 h-5 text-yellow-400" title="JavaScript" />,
  react: <SiReact className="w-5 h-5 text-cyan-400" title="React" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-sky-400" title="Tailwind CSS" />,
  framermotion: <SiFramer className="w-5 h-5 text-blue-600" title="Framer Motion" />,
  astro: <SiAstro className="w-5 h-5 text-slate-700" title="Astro" />,
  mdx: <SiMdx className="w-5 h-5 text-violet-500" title="MDX" />,
  cplusplus: <SiCplusplus className="w-5 h-5 text-blue-600" title="C++" />,
  raylib: <SiRaylib className="w-5 h-5 text-orange-500" title="Raylib" />,
  npm: <SiNpm className="w-5 h-5 text-red-600" title="npm" />,
  css: <SiCss className="w-5 h-5 text-blue-600" title="CSS3" />,
  svelte: <SiSvelte className="w-5 h-5 text-orange-500" title="Svelte" />,
};

const projectsData = [
  {
    id: "e-wedding",
    title: "E-Wedding Invitations",
    date: "Released Dec 20, 2025",
    price: "All-in-one Developer",
    tag: "Frontend Project",
    description:
      "An E-wedding invitation template built with React, Tailwind CSS, and Framer Motion. Features include responsive design, interactive animations, and customizable content for a modern wedding experience.",
    techStack: ["react", "tailwind", "javascript", "framermotion"],
    previewImages: [
      "/e-invitation/Screenshot 2026-08-04 170252.png",
      "/e-invitation/Screenshot 2026-08-04 170307.png",
      "/e-invitation/Screenshot 2026-08-04 170316.png"

    ]
  },
  {
    id: "agency-landingpage",
    title: "Agency Landing Page",
    date: "Released May 15, 2026",
    price: "All-in-one Developer",
    tag: "Frontend Project",
    description:
      "A modern landing page for a creative agency, featuring responsive design, interactive elements, and seamless user experience.",
    techStack: ["javascript", "react", "tailwind"],
    previewImages: [
      "/agency-website/1.png",
      "/agency-website/2.png",
      "/agency-website/3.png"
    ]
  },
  {
    id: "c+=group-project",
    title: "Library Management System CLI/GUI",
    date: "Released April 10, 2026",
    price: "Project Lead",
    tag: "Group Project",
    description:
      "A C++ Library Management System featuring both a terminal-based CLI and a Raylib GUI, with full book CRUD operations, custom data structures, and CSV persistence.",
    techStack: ["cplusplus", "raylib"],
    previewImages: [
      "/c++group-project/1.png",
      "/c++group-project/2.png",
      "/c++group-project/image.png"
    ]
  }
];

// Sub-component for Project Card
const ProjectCard = ({ project, navigate, t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.previewImages.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide(
      (prev) => (prev - 1 + project.previewImages.length) % project.previewImages.length
    );
  };

  return (
    <div className="w-full py-6 border-b border-slate-100 last:border-none dark:border-slate-800">
      <GlareHover
        background="transparent"
        className="w-full h-full overflow-hidden"
        color="#ffffff"
        opacity={0.03}
        duration={700}
      >
        <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column: Information */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-4">
            <div className="space-y-4">
              {/* Title & Release Date */}
              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-base text-slate-400 dark:text-slate-400 font-normal">
                  {project.date}
                </p>
              </div>

              {/* Pricing & Tag */}
              <div className="flex items-center gap-2 pt-1 text-base">
                <span className="font-bold text-slate-900 dark:text-white">{project.price}</span>
                
                <span className="rounded-md bg-emerald-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {project.tag}
                </span>
              </div>

              {/* Description */}
              <p className="max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {project.description}
              </p>

              {/* Tech Stack Logos */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {project.techStack.map((tech, i) => {
                  const key = tech.toLowerCase();
                  return (
                    <span
                      key={i}
                      className="flex items-center justify-center p-2 transition rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
                      aria-label={tech}
                      title={tech}
                    >
                      {TechLogos[key] ?? <span className="w-5 h-5 text-xs font-semibold uppercase text-slate-700 dark:text-slate-200">{tech}</span>}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => navigate(`/view-template/${project.id}`)}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-150 ease-in-out bg-white border shadow-xs text-slate-900 border-slate-300 rounded-xl hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                {t?.viewProject || "View Template"}
              </button>
            </div>
          </div>

          {/* Right Column: Previews Container */}
          <div className="lg:col-span-8">
            {/* Desktop / Tablet Grid (3 Cards Side-by-Side) */}
            <div className="hidden grid-cols-3 gap-4 sm:grid">
              {project.previewImages.slice(0, 3).map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/view-template/${project.id}`)}
                  className="overflow-hidden transition border shadow-xs cursor-pointer group rounded-2xl border-slate-200/80 bg-slate-50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <img
                    src={src}
                    alt={`Preview ${idx + 1}`}
                    className="object-cover object-top w-full h-48 transition duration-300 group-hover:scale-102"
                  />
                </div>
              ))}
            </div>

            {/* Mobile Carousel View */}
            <div className="relative block overflow-hidden border rounded-2xl border-slate-200 bg-slate-50 sm:hidden dark:border-slate-800 dark:bg-slate-900">
              <div className="relative h-56">
                <img
                  src={project.previewImages[currentSlide]}
                  alt="Template Preview Mobile"
                  className="object-cover object-top w-full h-full"
                />
              </div>

              {project.previewImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute z-10 p-2 -translate-y-1/2 rounded-full shadow-md left-2 top-1/2 bg-white/90 text-slate-700 hover:bg-white dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute z-10 p-2 -translate-y-1/2 rounded-full shadow-md right-2 top-1/2 bg-white/90 text-slate-700 hover:bg-white dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

        </div>
      </GlareHover>
    </div>
  );
};

export default function Project({ t }) {
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative py-20 font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t?.projectsTitle || "Featured Projects"}
            </h2>
            <p className="mt-2 text-base text-slate-500 dark:text-slate-400">
              {t?.projectsSub || "Explore our latest premium templates built with modern web standards."}
            </p>
          </div>

        {/* Project List */}
        <div className="space-y-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} navigate={navigate} t={t} />
          ))}
        </div>

      </div>
    </section>
  );
}