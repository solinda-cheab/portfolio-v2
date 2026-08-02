import { useState, useEffect } from "react";
import { AwardIcon, ArrowIcon, CloseIcon } from "./icons/Icons.jsx";

export default function Certificates({ t }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-4 sm:px-8 py-16 border-t border-border">
      <div
        data-reveal
        className="rounded-xl border border-border bg-muted/30 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-lg bg-primary text-background flex items-center justify-center shrink-0">
            <AwardIcon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{t.certTitle}</p>
            <h2 className="text-xl font-bold tracking-tight">{t.certSub}</h2>
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-md bg-primary text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          {t.certCta} <ArrowIcon className="w-4 h-4" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-background border border-border rounded-xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border sticky top-0 bg-background">
              <h3 className="font-bold">{t.certModalTitle}</h3>
              <button
                onClick={() => setOpen(false)}
                aria-label={t.certClose}
                className="w-8 h-8 rounded-md hover:bg-muted flex items-center justify-center"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground">{t.certEmpty}</p>
              {t.certSample.map((c, i) => (
                <div key={i} className="rounded-lg border border-dashed border-border p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-sm">{c.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {c.issuer} · {c.date}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">—</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
