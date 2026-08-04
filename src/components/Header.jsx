import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ lang, setLang, dark, setDark, t }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    ["#home", t?.nav?.home || "HOME", "home"],
    ["#about", t?.nav?.about || "ABOUT", "about"],
    ["#experience", t?.nav?.experience || "EXPERIENCE", "experience"],
    ["#skills", t?.nav?.skills || "SKILLS", "skills"],
    ["#projects", t?.nav?.projects || "PROJECTS", "projects"],
    ["/certificates", t?.nav?.certificates || "CERTIFICATES", "certificates"],
    ["#contact", t?.nav?.contact || "CONTACT", "contact"],
  ];

  // Smooth scroll / route navigation handler
  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    setActiveSection(id);
    setOpen(false);

    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll observer & scroll trigger handler
  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    links.forEach(([_, __, id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", handleScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollState);
      observer.disconnect();
    };
  }, [links]);

  return (
    <header className="sticky top-0 z-50 w-full px-3 py-3 transition-all duration-300 sm:px-6">
      {/* Floating Glassmorphic Container */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-6xl mx-auto backdrop-blur-md rounded-2xl border px-4 py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 border-black/15 dark:border-white/15 shadow-md"
            : "bg-white/60 dark:bg-black/60 border-black/10 dark:border-white/10"
        }`}
      >
        {/* Brand Logo */}
          <motion.a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home", "home")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 text-sm font-bold tracking-wider text-black uppercase dark:text-white focus:outline-none"
        >
          <span>{t?.brandName || "Solinda Cheab"}</span>
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-block w-1.5 h-1.5 rounded-full bg-black dark:bg-white"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 text-[11px] font-semibold tracking-wider uppercase text-black/60 dark:text-white/60">
          {links.map(([href, label, id]) => {
            const isActive = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                 onClick={(e) => handleLinkClick(e, href, id)}
                 className={`relative px-3 py-1.5 rounded-xl transition-colors duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? "text-black dark:text-white font-bold"
                    : "hover:text-black dark:hover:text-white"
                }`}
              >
                <span className="relative z-10">{label}</span>

                {/* Sliding Monochrome Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 border bg-black/5 dark:bg-white/10 rounded-xl border-black/10 dark:border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Language Toggle */}
          {setLang && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setLang(lang === "en" ? "km" : "en")}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-black/5 dark:bg-white/10 text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/15 transition-all flex items-center gap-1.5 border border-black/10 dark:border-white/10 cursor-pointer focus:outline-none"
              aria-label="Switch Language"
            >
              <FiGlobe className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "ខ្មែរ" : "EN"}</span>
            </motion.button>
          )}

          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={() => setDark(!dark)}
            className="flex items-center justify-center w-8 h-8 text-black transition-all border cursor-pointer sm:w-9 sm:h-9 rounded-xl bg-black/5 dark:bg-white/10 border-black/10 dark:border-white/10 dark:text-white focus:outline-none"
            aria-label="Toggle Theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {dark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiSun className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMoon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 text-black border cursor-pointer md:hidden rounded-xl bg-black/5 dark:bg-white/10 dark:text-white border-black/10 dark:border-white/10 focus:outline-none"
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <FiX className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <FiMenu className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col max-w-6xl gap-1 p-2.5 mx-auto mt-2 text-[11px] font-semibold tracking-wider uppercase border shadow-xl md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl rounded-2xl border-black/10 dark:border-white/10"
          >
            {links.map(([href, label, id], idx) => {
              const isActive = activeSection === id;
              return (
                <motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.2 }}
                   onClick={(e) => handleLinkClick(e, href, id)}
                   className={`px-3.5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "text-black dark:text-white font-bold bg-black/5 dark:bg-white/10"
                      : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="mobileActiveDot"
                      className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}