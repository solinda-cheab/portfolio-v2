import { MailIcon, GithubIcon, LinkedinIcon, FileIcon } from "./icons/Icons.jsx";

export default function Contact({ t }) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-border">
      <div data-reveal className="rounded-2xl bg-primary text-background p-10 sm:p-14 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-background/60 mb-3">{t.contactTitle}</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{t.contactSub}</h2>
        <p className="text-background/70 max-w-xl mx-auto mb-8 leading-relaxed">{t.contactBody}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Replace with your real email */}
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-background text-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MailIcon className="w-4 h-4" /> {t.emailBtn}
          </a>
          {/* Replace with your real GitHub URL */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-5 py-2.5 text-sm font-semibold hover:bg-background/10 transition-colors"
          >
            <GithubIcon className="w-4 h-4" /> {t.githubBtn}
          </a>
          {/* Replace with your real LinkedIn URL */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-5 py-2.5 text-sm font-semibold hover:bg-background/10 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" /> {t.linkedinBtn}
          </a>
          {/* Add your resume PDF to /public/resume.pdf */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-5 py-2.5 text-sm font-semibold hover:bg-background/10 transition-colors"
          >
            <FileIcon className="w-4 h-4" /> {t.resumeBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
