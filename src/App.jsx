import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/project/Projects.jsx";
import Experience from "./components/Experience.jsx";
import ViewTemplate from "./pages/ViewTemplate.jsx";
import CertificatesPage from "./pages/CertificatesPage.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { PortfolioSkeleton } from "./components/skeletons/PortfolioSkeleton";
import useReveal from "./hooks/useReveal.js";
import { T } from "./i18n/translations.js";

function AppContent({ lang, setLang, dark, setDark, t }) {
  const navigate = useNavigate();
  const location = useLocation();
  useReveal(location.pathname);
  const hideHeader = location.pathname.startsWith("/view-template");

  return (
    <div className={lang === "km" ? "khmer-text font-khmer" : "font-sans"}>
      {!hideHeader && <Header lang={lang} setLang={setLang} dark={dark} setDark={setDark} t={t} />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero t={t} />
                <About t={t} />
                <Experience t={t} />
                <Skills t={t} />
                <Projects t={t} />
                <Certificates t={t} />
                <Contact t={t} />
              </>
            }
          />
           <Route
             path="/view-template/:projectId?"
             element={<ViewTemplate t={t} onBack={() => navigate("/")} />}
           />
           <Route
             path="/certificates"
             element={<CertificatesPage t={t} />}
           />
         </Routes>
      </main>
      <Footer t={t} />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(false);
  
  const t = T[lang];

  useEffect(() => {
    // Simulates initial page assets/translations loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Show 1 unified skeleton while loading on initial start
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <PortfolioSkeleton />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppContent lang={lang} setLang={setLang} dark={dark} setDark={setDark} t={t} />
    </BrowserRouter>
  );
}