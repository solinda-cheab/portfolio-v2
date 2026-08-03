import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from "react-icons/fi";

export default function Header({ lang, setLang, dark, setDark, t }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    ["#home", t?.nav?.home || "HOME", "home"],
    ["#about", t?.nav?.about || "ABOUT", "about"],
    ["#portfolio", t?.nav?.projects || "WORK", "portfolio"],
    ["#contact", t?.nav?.contact || "CONTACT", "contact"],
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(([, , id]) => document.getElementById(id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-4 pb-3 px-4 sm:px-8 transition-colors duration-300">
      {/* Glassmorphic Floating Container */}
      <div className="max-w-6xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#060b72] dark:text-white rounded-2xl shadow-lg hover:shadow-2xl px-6 py-3.5 flex items-center justify-between border border-white/40 dark:border-slate-800 transition-all duration-300">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="text-xl sm:text-2xl font-bold tracking-tight font-serif text-[#060b72] dark:text-blue-400 hover:opacity-85 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-1"
        >
          ជាប សូលីនដា
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-semibold tracking-widest uppercase text-slate-700 dark:text-slate-300">
          {links.map(([href, label, id]) => {
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                className={`px-4 py-2 rounded-xl transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isActive
                    ? "text-[#060b72] dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/50"
                    : "hover:text-[#060b72] dark:hover:text-blue-300 hover:bg-slate-100/60 dark:hover:bg-slate-800/50"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#060b72] dark:bg-blue-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Utility Controls */}
        <div className="flex items-center gap-2.5">
          {/* Language Toggle */}
          {setLang && (
            <button
              onClick={() => setLang(lang === "en" ? "km" : "en")}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Switch Language"
            >
              <FiGlobe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "ខ្មែរ" : "EN"}</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all text-[#060b72] dark:text-yellow-400 border border-slate-200/60 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Theme"
          >
            {dark ? (
              <FiSun className="w-4 h-4 transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <FiMoon className="w-4 h-4 text-amber-500 fill-amber-500 transition-transform -rotate-12 hover:rotate-0" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#060b72] dark:text-white shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded={open}
          >
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl flex flex-col gap-1 text-xs font-semibold tracking-widest uppercase border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map(([href, label, id]) => {
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? "text-[#060b72] dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/50"
                    : "text-slate-700 dark:text-slate-200 hover:text-[#060b72] dark:hover:text-blue-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}