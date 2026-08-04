import React from "react";
import { motion } from "framer-motion";
import { ArrowIcon } from "./icons/Icons.jsx";
import { FiDownload, FiTerminal, FiCode, FiCpu, FiLayers } from "react-icons/fi";

export default function Hero({ t }) {
  // Replace with your photo path
  const myPhoto = "/lanyard.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const techBadges = [
    { name: "Frontend", icon: FiCode, color: "hover:border-black-500/50 hover:text-black-500 dark:hover:text-black-400" },
    { name: "Backend", icon: FiLayers, color: "hover:border-black-500/50 hover:text-black-500 dark:hover:text-black-400" },

  ];

  return (
   <section id="home" className="relative w-full max-w-6xl px-4 pt-6 pb-12 mx-auto overflow-hidden font-sans sm:pt-10 lg:pt-12 sm:px-6 lg:px-8 sm:pb-20">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-56 sm:h-72 w-56 sm:w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[90px] sm:blur-[110px] dark:bg-emerald-400/10" />
      <div className="pointer-events-none absolute top-40 right-10 -z-10 h-64 sm:h-80 w-64 sm:w-80 rounded-full bg-indigo-500/10 blur-[100px] sm:blur-[130px] dark:bg-indigo-400/10" />

      {/* Grid Layout */}
      <div className="grid items-center grid-cols-1 gap-12 lg:gap-8 lg:grid-cols-12">
        
        {/* Left Column: Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 space-y-6 text-left sm:space-y-8 lg:col-span-7"
        >
          {/* Status Eyebrow */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest border rounded-full border-black/15 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.03] text-black/80 dark:text-white/80 backdrop-blur-md shadow-xs">
              <span className="relative flex w-2 h-2 shrink-0">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
              </span>
              <span className="truncate">{t?.eyebrow || "Full-Stack Developer / CS Student"}</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-black dark:text-white"
          >
            {t?.heroTitle || (
              <>
                Hi, I'm Linda.
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-xl text-sm leading-relaxed sm:text-base lg:text-lg text-black/70 dark:text-white/70"
          >
            {t?.heroSub || "I build clean, functional web products — from full-stack apps to C++ systems and bilingual academic tools — as a Computer Science student in Phnom Penh, Cambodia."}
          </motion.p>

          {/* Core Toolkit */}
          <motion.div variants={itemVariants} className="pt-1">
            <p className="mb-2.5 sm:mb-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-black/50 dark:text-white/50">
              Core Skills
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.span
                    key={idx}
                    whileHover={{ y: -2 }}
                    className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-mono rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] text-black/80 dark:text-white/80 transition-all duration-200 cursor-default ${badge.color}`}
                  >
                    <Icon className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    {badge.name}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#cv"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-black text-white dark:bg-white dark:text-black px-6 py-3.5 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
            >
              <FiDownload className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>{t?.ctaProjects || "View Projects"}</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-black/20 dark:border-white/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <span>{t?.ctaContact || "Get in Touch"}</span>
              <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: Lanyard & Exact Student ID Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center w-full pt-12 mx-auto lg:col-span-5 sm:pt-16 lg:pt-0"
        >
          {/* LANYARD STRAP */}
          <div className="relative z-0 flex items-center justify-center w-8 overflow-hidden shadow-md h-14 bg-emerald-800 sm:w-10 sm:h-18 border-x border-emerald-950">
            <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.08)_50%,transparent_75%)] bg-[size:6px_6px]" />
            <span className="absolute font-mono text-[7px] sm:text-[8px] font-extrabold uppercase tracking-widest text-emerald-100/40 rotate-90 whitespace-nowrap">
              RUPP • COMPUTER SCIENCE
            </span>
          </div>

          {/* METAL HOOK */}
          <div className="z-20 flex flex-col items-center -mt-0.5">
            <div className="w-7 sm:w-8 h-2.5 sm:h-3 rounded-t-sm bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 border border-slate-500 shadow-xs" />
            <div className="w-3.5 sm:w-4 h-5 sm:h-6 border-2 border-slate-400 rounded-b-full bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 shadow-inner -mt-0.5" />
          </div>

          {/* LANDSCAPE PVC CARD HOLDER */}
          <motion.div
            whileHover={{ y: -6, rotate: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[370px] p-2.5 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/60 dark:border-white/20 shadow-2xl -mt-1 mx-auto"
          >
            <div className="flex items-center justify-center w-10 h-2 mx-auto mb-2 border rounded-full bg-slate-900/30 dark:bg-black/50 border-white/40">
              <div className="w-6 h-1 rounded-full bg-slate-800/80 dark:bg-black/80" />
            </div>

            {/* REAL LANDSCAPE ID CARD (WITH KANTUMRUY PRO FONT) */}
            <div 
              className="relative overflow-hidden rounded-xl bg-white text-slate-800 border border-slate-300 shadow-md text-left p-3 sm:p-3.5"
              style={{ fontFamily: "'Kantumruy Pro', sans-serif" }}
            >
              
              {/* Left Green Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-emerald-700 flex items-center justify-center">
                <div className="h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,transparent_100%)]" />
              </div>

              <div className="pl-3.5">
                {/* Card Header */}
                <div className="pb-2 text-center border-b border-slate-200">
                  <h2 className="text-xs font-bold leading-none tracking-tight sm:text-sm text-emerald-800">
                    ប័ណ្ណសម្គាល់ខ្លួននិស្សិត
                  </h2>
                  <p className="text-[8px] sm:text-[9px] font-bold text-slate-600 tracking-wider font-sans">
                    STUDENT ID CARD
                  </p>
                </div>

                {/* Card Body */}
                <div className="flex gap-3 pt-2.5 items-start relative z-10">
                  {/* Photo & Barcode Column */}
                  <div className="flex flex-col items-center gap-1.5 shrink-0">
                    <div className="relative w-20 overflow-hidden border rounded-md shadow-xs sm:w-22 h-26 sm:h-28 border-slate-300 bg-slate-100">
                      <img
                        src={myPhoto}
                        alt="CHEAB SOLINDA"
                        className="object-cover object-top w-full h-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/lanyard.png";
                        }}
                      />
                    </div>

                    {/* Barcode & ID */}
                    <div className="flex flex-col items-center">
                      <div className="h-3.5 flex items-center gap-[1.5px] opacity-95">
                        {[2, 1, 3, 1, 2, 1, 4, 1, 2, 3, 1, 2, 1, 3, 1, 2, 1].map((w, i) => (
                          <div key={i} className="h-full bg-slate-900" style={{ width: `${w}px` }} />
                        ))}
                      </div>
                      <span className="text-[8px] font-mono font-bold text-slate-800 tracking-wider">
                        000090135
                      </span>
                    </div>
                  </div>

                  {/* Information Details with Kantumruy Pro */}
                  <div className="space-y-1 text-[10px] sm:text-[11px] leading-tight min-w-0 flex-1">
                    <div>
                      <p className="font-bold truncate text-slate-900">
                        ជាប សូលីនដា <span className="text-[9px] font-semibold text-slate-600 font-sans">/ CHEAB SOLINDA</span>
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-slate-800">
                        ស្រី <span className="text-[9px] text-slate-600 font-sans">/ Female</span>
                      </p>
                    </div>

                    <div>
                      <p className="font-mono text-[10px] font-bold text-slate-700">
                        30/12/2006
                      </p>
                    </div>

                    <div>
                      <p className="font-medium leading-tight text-slate-800">
                        ដេប៉ាតឺម៉ង់ ព័ត៌មានវិទ្យា
                      </p>
                      <p className="text-[8.5px] font-semibold text-slate-600 truncate font-sans">
                        Department of Computer Science
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-slate-800">
                        បរិញ្ញាបត្រ <span className="text-[9px] font-normal text-slate-600 font-sans">/ Bachelor</span>
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] text-slate-500 leading-tight">
                        សង្កាត់ក្បាលកោះ ខណ្ឌច្បារអំពៅ រាជធានីភ្នំពេញ
                      </p>
                    </div>
                  </div>
                </div>

                {/* Red Stamp & Official Watermark */}
                <div className="absolute flex flex-col items-center pointer-events-none right-2 bottom-1 opacity-80">
                  <div className="w-12 h-12 rounded-full border border-rose-600/60 flex items-center justify-center p-0.5 rotate-[-10deg]">
                    <div className="w-full h-full rounded-full border border-rose-600/40 flex flex-col items-center justify-center text-[5px] text-rose-700 font-bold text-center leading-none">
                      <span className="font-sans">RUPP</span>
                      <span className="text-[4px]">សាកលវិទ្យាល័យ</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}