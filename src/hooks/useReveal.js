import { useEffect } from "react";

/**
 * Adds a `.in` class to any element with a `data-reveal` attribute
 * once it scrolls into view, powering the fade/slide-up entrance effect.
 * Re-runs when route location changes so newly mounted pages are observed.
 */
export default function useReveal(locationPath = "") {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [locationPath]);
}
