import React, { useState, useEffect } from "react";
import { FiAward, FiX, FiExternalLink, FiMaximize2 } from "react-icons/fi";

export default function Certificates({ t }) {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Sample certificates data structure
  const certificateList = t?.certSample || [
    {
      title: "Web & UX/UI Program Certificate",
      issuer: "Sisters of Code",
      date: "2025",
      img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Frontend Development Specialist",
      issuer: "ETEC Center",
      date: "2025",
      img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "UI/UX Design With Figma",
      issuer: "Udemy",
      date: "2025",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cybersecurity Basics",
      issuer: "Udemy",
      date: "2024",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Social Media Certified",
      issuer: "HubSpot Academy",
      date: "2024",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "General Volunteer Recognition",
      issuer: "ESC2025 Earth Science",
      date: "2025",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="certificates"
      className="max-w-6xl mx-auto px-4 sm:px-8 py-20 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full bg-blue-100 dark:bg-blue-950/80 text-[#060b72] dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
          <FiAward className="w-3.5 h-3.5" />
          {t?.certTitle || "ACHIEVEMENTS"}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-900 dark:text-white">
          {t?.certSub || "My Training Course Certificates"}
        </h2>
      </div>

      {/* Grid Display matching UI Reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificateList.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Certificate Thumbnail Container */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              {/* Hover Overlay with Action Icon */}
              <div className="absolute inset-0 bg-[#060b72]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                <div className="p-3 rounded-full bg-white text-[#060b72] shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <FiMaximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card Information Header */}
            <div className="p-4 bg-slate-900 border-t border-slate-800/80 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              <FiExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 shrink-0 ml-2" />
            </div>
          </div>
        ))}
      </div>

      {/* Image Lightbox Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden z-10 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div>
                <h3 className="text-base font-bold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-400">
                  Issued by {selectedCert.issuer} ({selectedCert.date})
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close Preview"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Preview Box */}
            <div className="p-4 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[65vh] object-contain rounded-lg shadow-2xl border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}