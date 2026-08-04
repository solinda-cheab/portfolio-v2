import React, { useState, useEffect } from "react";
import { FiX, FiAward } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Certificates({ t }) {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const allCerts = t?.certSample || [
    {
      title: "UX/UI Program Certificate",
      issuer: "Sisters of Code",
      date: "2025",
      img: "/certificate/uxui.jpg",
    },
    {
      title: "Frontend Development Specialist",
      issuer: "ETEC Center",
      date: "2025",
      img: "/certificate/frontend.jpg",
    },
  ];

  // Show only the first 6 as a preview on the home page
  const certificateList = allCerts.slice(0, 6);
  const hasMore = allCerts.length > certificateList.length;

  return (
    <section id="certificates" className="w-full bg-[#1e2022] py-20 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl mb-14">
          {t?.certSub || "My Training Course Certificate"}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {certificateList.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="relative overflow-hidden rounded-lg bg-slate-800/80 border border-slate-700/50 shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer group aspect-[4/3] flex items-center justify-center"
            >
              <img
                src={cert.img}
                alt={cert.title || "Certificate"}
                className="object-cover object-center w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                onError={(e) => {
                  // Fallback if image path fails to load
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://placehold.co/800x600/1e293b/ffffff?text=Certificate+Preview+Unavailable";
                }}
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/certificates")}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all bg-emerald-600 rounded-xl hover:bg-emerald-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <FiAward className="w-4 h-4" />
              {t?.certCta || "View All Certificates"} ({allCerts.length})
            </button>
          </div>
        )}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          />

          <div className="relative z-10 flex flex-col w-full max-w-4xl overflow-hidden bg-[#181a1b] rounded-xl border border-slate-700/50 shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-semibold text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {t?.issuedByLabel || "Issued by"} {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Preview"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-black flex items-center justify-center max-h-[80vh] overflow-auto">
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://placehold.co/800x600/1e293b/ffffff?text=Certificate+Preview+Unavailable";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}