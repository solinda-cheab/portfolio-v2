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
      data-reveal
      className="max-w-6xl px-4 py-16 mx-auto transition-colors duration-300 border-t border-black/10 dark:border-white/10 sm:px-8"
    >
      {/* Container */}
      <div className="p-8 bg-white border dark:bg-black border-black/10 dark:border-white/15 rounded-3xl sm:p-12 animate-fade-in-up">
        <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Information & Direct Action */}
          <div className="space-y-6 text-center lg:col-span-6 lg:text-left">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-white uppercase bg-black rounded-full dark:bg-white dark:text-black">
                {t?.contactTitle || "GET IN TOUCH"}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                {t?.contactSub || "Let's work together on your next project."}
              </h2>
            </div>

            <p className="max-w-lg mx-auto text-sm leading-relaxed text-black/70 dark:text-white/70 sm:text-base lg:mx-0">
              {t?.contactBody || "Have a question, collaboration idea, or want to build an exciting web application? Drop a message or reach out directly!"}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-black/60 dark:text-white/60 lg:justify-start">
              <FiMapPin className="w-4 h-4 text-black dark:text-white" />
              <span>Phnom Penh, Cambodia</span>
            </div>

            {/* Direct Action Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              <a
                href="mailto:meym5913@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-wider text-white uppercase transition-all bg-black dark:bg-white dark:text-black rounded-xl hover:opacity-90 active:scale-95"
              >
                <FiMail className="w-4 h-4" /> 
                {t?.emailBtn || "Email Me"}
              </a>

              <a
                href="https://github.com/solinda-cheab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-wider text-black uppercase transition-all border border-black/20 dark:border-white/20 dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
              >
                <FiGithub className="w-4 h-4" /> 
                {t?.githubBtn || "GitHub"}
              </a>

              <a
                href="https://www.linkedin.com/in/solindacheab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-wider text-black uppercase transition-all border border-black/20 dark:border-white/20 dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
              >
                <FiLinkedin className="w-4 h-4" /> 
                {t?.linkedinBtn || "LinkedIn"}
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-wider text-black uppercase transition-all border border-black/20 dark:border-white/20 dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
              >
                <FiFileText className="w-4 h-4" /> 
                {t?.resumeBtn || "Resume"}
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-6 border bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 lg:col-span-6 rounded-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-3 text-center animate-scale-up">
                <FiCheckCircle className="w-12 h-12 text-black dark:text-white" />
                <h3 className="text-xl font-bold text-black dark:text-white">{t?.contactSentTitle || "Message Sent!"}</h3>
                <p className="text-xs text-black/70 dark:text-white/70">{t?.contactSentBody || "Thank you for reaching out. I'll get back to you as soon as possible."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-black/80 dark:text-white/80">
                    {t?.contactNameLabel || "Your Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t?.contactNamePlaceholder || "John Doe"}
                    className="w-full px-4 py-3 text-xs text-black transition-colors bg-transparent border dark:text-white border-black/20 dark:border-white/20 rounded-xl placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-black/80 dark:text-white/80">
                    {t?.contactEmailLabel || "Email Address"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t?.contactEmailPlaceholder || "john@example.com"}
                    className="w-full px-4 py-3 text-xs text-black transition-colors bg-transparent border dark:text-white border-black/20 dark:border-white/20 rounded-xl placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-black/80 dark:text-white/80">
                    {t?.contactMessageLabel || "Message"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t?.contactMessagePlaceholder || "Tell me about your project or inquiry..."}
                    className="w-full px-4 py-3 text-xs text-black transition-colors bg-transparent border resize-none dark:text-white border-black/20 dark:border-white/20 rounded-xl placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                >
                  <FiSend className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>{t?.contactSubmit || "Send Message"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
}