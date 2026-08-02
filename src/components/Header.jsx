import { useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, GlobeIcon } from "./icons/Icons.jsx";

export default function Header({ lang, setLang, dark, setDark, t }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["#home", t.nav.home],
    ["#about", t.nav.about],
    ["#skills", t.nav.skills],
    ["#projects", t.nav.projects],
    ["#certificates", t.nav.certificates],
    ["#contact", t.nav.contact],
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-sm tracking-tight">
          <span className="w-7 h-7 rounded-md bg-primary text-background flex items-center justify-center font-mono text-xs">
            L
          </span>
          Linda
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "km" : "en")}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-mono font-medium hover:bg-muted transition-colors"
            aria-label="Toggle language"
          >
            <GlobeIcon className="w-3.5 h-3.5" /> {lang === "en" ? "ខ្មែរ" : "EN"}
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-md border border-border"
            aria-label="Toggle menu"
          >
            {open ? <CloseIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-3 text-sm font-medium">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              {label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "km" : "en")}
            className="self-start inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-mono font-medium"
          >
            <GlobeIcon className="w-3.5 h-3.5" /> {lang === "en" ? "ខ្មែរ" : "EN"}
          </button>
        </div>
      )}
    </header>
  );
}
