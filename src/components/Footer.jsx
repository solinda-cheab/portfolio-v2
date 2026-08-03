import React from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer({ t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#060b72] pt-12 pb-8 px-4 sm:px-8 text-slate-300 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        
        {/* Top Section: Branding, Links & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-900/60">
          
          {/* Brand Logo / Khmer Title */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a 
              href="#home" 
              className="text-2xl font-bold tracking-tight font-serif text-white hover:text-blue-300 transition-colors"
            >
              ជាប សូលីនដា
            </a>
            <p className="text-xs text-blue-200/70 font-medium">
              {t?.hero?.role || "Junior Frontend Developer"}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold uppercase tracking-widest text-blue-100/80">
            <a href="#home" className="hover:text-white transition-colors">
              {t?.nav?.home || "HOME"}
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              {t?.nav?.about || "ABOUT"}
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              {t?.nav?.projects || "WORK"}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {t?.nav?.contact || "CONTACT"}
            </a>
          </nav>

          {/* Social Media Links & Scroll Top Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/solinda-cheab"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-800 text-blue-200 hover:text-white border border-blue-800/40 hover:scale-110 active:scale-95 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-800 text-blue-200 hover:text-white border border-blue-800/40 hover:scale-110 active:scale-95 transition-all"
              aria-label="Facebook Profile"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-800 text-blue-200 hover:text-white border border-blue-800/40 hover:scale-110 active:scale-95 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            {/* Back to Top Floating Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 ml-2 rounded-xl bg-white text-[#060b72] hover:bg-blue-400 hover:text-white shadow-md hover:scale-110 active:scale-95 transition-all"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200/60">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Cheab Solinda.</span>
            <span>{t?.footerNote || "All rights reserved."}</span>
          </p>

          <p className="flex items-center gap-1 text-blue-300/80">
            <span>Built with React & Tailwind</span>
            <FaHeart className="w-3 h-3 text-rose-400 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}