import React from 'react';
import LogoLoop from './LogoLoop';
import { 
  // Frontend & Languages
  SiReact, SiTailwindcss, SiVite, SiJavascript, SiTypescript, SiNextdotjs, SiHtml5, SiCss, SiSass, SiBootstrap,
  // Backend & Runtime
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiPhp, SiLaravel, SiGraphql,
  // Databases & Cloud
  SiMongodb, SiPostgresql, SiMysql, SiDocker,
  // Design & Tools
  SiGit, SiGithub, SiFigma, SiPostman, SiVercel, SiNpm
} from 'react-icons/si';

export default function Skills({ t }) {
  // Comprehensive Icon Mapping (Add any missing custom names here)
  const skillIcons = {
    // Frontend
    "React": <SiReact className="text-xl text-cyan-400" />,
    "React.js": <SiReact className="text-xl text-cyan-400" />,
    "Tailwind CSS": <SiTailwindcss className="text-xl text-sky-400" />,
    "Tailwind": <SiTailwindcss className="text-xl text-sky-400" />,
    "Vite": <SiVite className="text-xl text-purple-500" />,
    "JavaScript": <SiJavascript className="text-xl text-yellow-400" />,
    "JS": <SiJavascript className="text-xl text-yellow-400" />,
    "TypeScript": <SiTypescript className="text-xl text-blue-500" />,
    "TS": <SiTypescript className="text-xl text-blue-500" />,
    "Next.js": <SiNextdotjs className="text-xl text-foreground" />,
    "HTML": <SiHtml5 className="text-xl text-orange-600" />,
    "HTML5": <SiHtml5 className="text-xl text-orange-600" />,
    "CSS": <SiCss className="text-xl text-blue-600" />,
    "Sass": <SiSass className="text-xl text-pink-500" />,
    "Bootstrap": <SiBootstrap className="text-xl text-purple-500" />,

    // Backend & APIs
    "Node.js": <SiNodedotjs className="text-xl text-green-500" />,
    "Node": <SiNodedotjs className="text-xl text-green-500" />,
    "Express": <SiExpress className="text-xl text-foreground" />,
    "Express.js": <SiExpress className="text-xl text-foreground" />,
    "Python": <SiPython className="text-xl text-yellow-500" />,
    "Django": <SiDjango className="text-xl text-emerald-700" />,
    "PHP": <SiPhp className="text-xl text-indigo-400" />,
    "Laravel": <SiLaravel className="text-xl text-red-600" />,
    "GraphQL": <SiGraphql className="text-xl text-pink-600" />,

    // Databases & Cloud
    "MongoDB": <SiMongodb className="text-xl text-green-600" />,
    "PostgreSQL": <SiPostgresql className="text-xl text-blue-400" />,
    "MySQL": <SiMysql className="text-xl text-blue-600" />,

    // Tools & Design
    "Git": <SiGit className="text-xl text-orange-500" />,
    "GitHub": <SiGithub className="text-xl text-foreground" />,
    "Figma": <SiFigma className="text-xl text-purple-400" />,
    "Postman": <SiPostman className="text-xl text-orange-600" />,
    "Vercel": <SiVercel className="text-xl text-foreground" />,
    "NPM": <SiNpm className="text-xl text-red-500" />,
  };

 const logoItems = t.skillGroups.flatMap((group) =>
  group.items.map((item) => {
    const cleanItem = item.trim();
    
    // Check if the item contains multiple skills separated by "/"
    const parts = cleanItem.split('/').map(p => p.trim());
    const matchedIcons = parts.map(part => skillIcons[part]).filter(Boolean);

    return {
      node: (
        <div className="flex items-center gap-2.5 px-4 py-2 border rounded-xl bg-card text-foreground border-border hover:border-foreground/40 whitespace-nowrap shadow-sm">
          {/* Render all matching icons, or fallback to dot if none match */}
          {matchedIcons.length > 0 ? (
            <div className="flex items-center gap-1.5">
              {matchedIcons}
            </div>
          ) : (
            <span className="w-2 h-2 rounded-full bg-primary" />
          )}
          <span className="font-mono text-sm font-medium">{cleanItem}</span>
        </div>
      ),
      title: cleanItem,
    };
  })
);

  return (
    <section id="skills" className="max-w-6xl px-4 py-16 mx-auto border-t sm:px-8 border-border">
      <div data-reveal className="mb-10">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">{t.skillsTitle}</p>
        <h2 className="text-3xl font-bold tracking-tight">{t.skillsSub}</h2>
      </div>

      <div data-reveal className="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-2 lg:grid-cols-4">
        {t.skillGroups.map((g, i) => (
          <div key={g.title} className="p-5 transition-colors border rounded-xl border-border hover:border-foreground/30">
            <div className="flex items-center justify-center w-8 h-8 mb-4 font-mono text-xs rounded-md bg-primary text-background">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-3 font-semibold">{g.title}</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div data-reveal className="pt-4 overflow-hidden">
        <LogoLoop
          logos={logoItems}
          speed={60}
          direction="left"
          logoHeight={42}
          gap={16}
          pauseOnHover
          scaleOnHover
          fadeOut
          ariaLabel={t.skillsTitle}
        />
      </div>
    </section>
  );
}