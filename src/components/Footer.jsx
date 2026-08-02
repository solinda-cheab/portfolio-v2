export default function Footer({ t }) {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-8 py-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <p>
        © {new Date().getFullYear()} Linda. {t.footerNote}
      </p>
      <div className="flex items-center gap-4">
        <a href="#home" className="hover:text-foreground transition-colors">
          {t.nav.home}
        </a>
        <a href="#projects" className="hover:text-foreground transition-colors">
          {t.nav.projects}
        </a>
        <a href="#contact" className="hover:text-foreground transition-colors">
          {t.nav.contact}
        </a>
      </div>
    </footer>
  );
}
