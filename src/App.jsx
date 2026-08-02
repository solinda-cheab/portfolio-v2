import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";
import { T } from "./i18n/translations.js";

export default function App() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(false);
  const t = T[lang];

  useReveal();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={lang === "km" ? "khmer-text" : ""}>
      <Header lang={lang} setLang={setLang} dark={dark} setDark={setDark} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Certificates t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
