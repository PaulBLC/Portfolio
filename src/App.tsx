import { useEffect } from "react";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Form from "./components/Form";

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050506] overflow-x-hidden">

      {/* ── Fixed background layer ────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Base radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]" />

        {/* Technical grid */}
        <div className="absolute inset-0 bg-grid" />

        {/* Primary blob — top center */}
        <div
          className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#5E6AD2]/25 blur-[150px] animate-float"
          style={{ animationDelay: '0s' }}
        />

        {/* Secondary blob — left */}
        <div
          className="absolute top-1/3 -left-48 w-[600px] h-[500px] rounded-full bg-purple-600/15 blur-[120px] animate-float-slow"
          style={{ animationDelay: '-3s' }}
        />

        {/* Tertiary blob — right */}
        <div
          className="absolute top-2/3 -right-48 w-[500px] h-[400px] rounded-full bg-indigo-500/12 blur-[100px] animate-float-drift"
          style={{ animationDelay: '-6s' }}
        />

        {/* Bottom accent blob */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#5E6AD2]/10 blur-[120px] animate-blob-pulse"
        />
      </div>

      {/* ── Page content ─────────────────────────────────── */}
      <div className="relative z-10">
        <Navbar />

        <div className="px-5 md:px-[10%] pt-24">
          <Home />
        </div>

        <About />

        <div className="px-5 md:px-[10%]">
          <Experiences />
          <Projects />
        </div>

        <Form />
        <Footer />
      </div>
    </div>
  );
}
