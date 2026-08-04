import React, { useState, useEffect } from "react";
import { FiX, FiArrowLeft, FiAward } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function CertificatesPage({ t }) {
  const navigate = useNavigate();
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const certificateList = t?.certSample || [];

  return (
    <section className="w-full min-h-screen bg-[#1e2022] py-20 px-4 sm:px-8 font-sans text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center justify-center w-10 h-10 text-sm font-medium text-white transition-all bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 focus:outline-none"
              aria-label={t?.backButton || "Back"}
            >
              <FiArrowLeft className="w-4 h-4" />
            </button>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-slate-400">
                {t?.certCount?.replace("{count}", certificateList.length) || `${certificateList.length} certificates`}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t?.certGridTitle || "All Certificates"}
              </h1>
            </div>
          </div>

          {certificateList.length > 0 && (
            <p className="text-sm text-slate-400">
              {t?.certGridSub || "A complete collection of training certificates and credentials."}
            </p>
          )}
        </div>

        {certificateList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <FiAward className="w-12 h-12 mb-4 text-slate-500" />
            <p className="max-w-md text-slate-400">
              {t?.certEmpty || "Add your certificates here — title, issuer, and date — each with a link to the credential."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
            {certificateList.map((cert, index) => (
              <div
                key={cert.id || index}
                onClick={() => setSelectedCert(cert)}
                className="relative overflow-hidden rounded-xl bg-slate-800/80 border border-slate-700/50 shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-slate-600 cursor-pointer group aspect-[4/3] flex flex-col"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title || "Certificate"}
                    className="object-cover object-center w-full h-full transition-opacity duration-300 group-hover:opacity-85"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/800x600/1e293b/ffffff?text=Certificate+Preview+Unavailable";
                    }}
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="p-3 border-t border-slate-700/50">
                  <h3 className="text-sm font-semibold text-white truncate">
                    {cert.title || "Certificate"}
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    {cert.issuer || ""}
                  </p>
                </div>
              </div>
            ))}
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
                aria-label={t?.certClose || "Close Preview"}
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
                  e.currentTarget.src =
                    "https://placehold.co/800x600/1e293b/ffffff?text=Certificate+Preview+Unavailable";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
