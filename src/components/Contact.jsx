import React, { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiFileText, FiSend, FiMapPin, FiCheckCircle } from "react-icons/fi";

export default function Contact({ t }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section 
      id="contact" 
      className="max-w-6xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      {/* Hero Callout Container */}
      <div className="rounded-3xl bg-[#060b72] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden animate-fade-in-up">
        
        {/* Animated Background Glowing Orbs */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow-reverse" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Links & Messaging */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-950/80 text-blue-300 border border-blue-700/50 mb-3 animate-fade-in">
                {t?.contactTitle || "GET IN TOUCH"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif text-white">
                {t?.contactSub || "Let's work together on your next project."}
              </h2>
            </div>

            <p className="text-blue-100/80 leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              {t?.contactBody || "Have a question, collaboration idea, or want to build an exciting web application? Drop a message or reach out directly!"}
            </p>

            {/* Location Indicator */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-blue-200/80">
              <FiMapPin className="w-4 h-4 text-blue-400 animate-bounce-subtle" />
              <span>Phnom Penh, Cambodia</span>
            </div>

            {/* Quick Action Button Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="mailto:solindacheab@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-[#060b72] px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-blue-400/20"
              >
                <FiMail className="w-4 h-4 text-[#060b72]" /> 
                {t?.emailBtn || "Email Me"}
              </a>

              <a
                href="https://github.com/solinda-cheab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-950/60 text-white border border-blue-800/60 px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-blue-900/80 hover:scale-105 active:scale-95 transition-all"
              >
                <FiGithub className="w-4 h-4 text-blue-300" /> 
                {t?.githubBtn || "GitHub"}
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-950/60 text-white border border-blue-800/60 px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-blue-900/80 hover:scale-105 active:scale-95 transition-all"
              >
                <FiLinkedin className="w-4 h-4 text-blue-300" /> 
                {t?.linkedinBtn || "LinkedIn"}
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-blue-950/60 text-white border border-blue-800/60 px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-blue-900/80 hover:scale-105 active:scale-95 transition-all"
              >
                <FiFileText className="w-4 h-4 text-blue-300" /> 
                {t?.resumeBtn || "Resume"}
              </a>
            </div>
          </div>

          {/* Right Column: Contact Interactive Form */}
          <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:border-white/20">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-scale-up">
                <FiCheckCircle className="w-12 h-12 text-emerald-400 animate-bounce" />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-xs text-blue-200">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-blue-950/60 border border-blue-800/60 text-white placeholder-blue-300/40 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-blue-950/60 border border-blue-800/60 text-white placeholder-blue-300/40 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-blue-950/60 border border-blue-800/60 text-white placeholder-blue-300/40 text-xs focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-white text-[#060b72] font-bold text-xs uppercase tracking-wider hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg group"
                >
                  <FiSend className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Animation Keyframe Definitions */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.15); opacity: 0.35; }
        }
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        .animate-pulse-slow-reverse {
          animation: pulseSlow 8s ease-in-out infinite reverse;
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}