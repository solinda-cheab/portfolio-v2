import React from 'react';
import LogoLoop from './LogoLoop';
import { 
  // Languages & Core
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiCplusplus, SiPhp, SiWordpress, SiC,
  // Frontend Frameworks & Styling
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiSass, SiVite,
  // Backend & Databases
  SiLaravel, SiNodedotjs, SiMysql, SiPostgresql, SiMongodb, SiLaragon, SiXampp, SiJquery,
  // Design & UI/UX
  SiFigma,
  // DevOps & Tooling
  SiGit, SiGithub, SiDocker, SiPostman, SiVercel,
  // Hardware & IoT
  SiArduino,
} from 'react-icons/si';

const techLogos = [
  // Languages
  {node : <SiC className="text-blue-600 text-3xl" />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <SiJavascript className="text-yellow-400 text-3xl" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript className="text-blue-500 text-3xl" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiCplusplus className="text-blue-600 text-3xl" />, title: "C++", href: "https://isocpp.org" },
  { node: <SiWordpress className="text-blue-700 text-3xl" />, title: "WordPress", href: "https://wordpress.org" },
  { node: <SiPhp className="text-indigo-400 text-3xl" />, title: "PHP", href: "https://www.php.net" },

  // Frontend & UI
  { node: <SiReact className="text-cyan-400 text-3xl" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-black text-3xl" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss className="text-sky-400 text-3xl" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiBootstrap className="text-purple-500 text-3xl" />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiSass className="text-pink-500 text-3xl" />, title: "Sass", href: "https://sass-lang.com" },
  { node: <SiHtml5 className="text-orange-500 text-3xl" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss className="text-blue-400 text-3xl" />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiVite className="text-purple-400 text-3xl" />, title: "Vite", href: "https://vitejs.dev" },
{ node: <SiJquery className="text-blue-600 text-3xl" />, title: "jQuery", href: "https://jquery.com" },
  // Backend & Databases
  { node: <SiXampp className="text-orange-500 text-3xl" />, title: "XAMPP", href: "https://www.apachefriends.org/index.html" },
  { node: <SiLaravel className="text-red-500 text-3xl" />, title: "Laravel", href: "https://laravel.com" },
  { node: <SiNodedotjs className="text-green-500 text-3xl" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiLaragon className="text-blue-500 text-3xl" />, title: "Laragon", href: "https://laragon.org" },

  { node: <SiMysql className="text-blue-500 text-3xl" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql className="text-blue-400 text-3xl" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb className="text-green-400 text-3xl" />, title: "MongoDB", href: "https://www.mongodb.com" },

  // Design
  { node: <SiFigma className="text-pink-400 text-3xl" />, title: "Figma", href: "https://figma.com" },

  
  // DevOps & Tools
  { node: <SiGit className="text-orange-500 text-3xl" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub className="text-black text-3xl" />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker className="text-sky-500 text-3xl" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiPostman className="text-orange-600 text-3xl" />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiVercel className="text-black text-3xl" />, title: "Vercel", href: "https://vercel.com" },

  // Hardware / IoT
  { node: <SiArduino className="text-teal-500 text-3xl" />, title: "Arduino", href: "https://www.arduino.cc" },

];

export default function Skills() {
  return (
    <section className="py-12 bg-white text-black">
      <div className="max-w-6xl mx-auto px-9 mb-14 text-center">
        <h2 className="text-2xl font-bold tracking-wide">Tech Stack & Tools</h2>
      </div>

      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={40}
        gap={48}
        pauseOnHover
        scaleOnHover
        fadeOut
      />
    </section>
  );
}