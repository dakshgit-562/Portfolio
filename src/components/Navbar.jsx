import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="about" className={`
      fixed top-0 w-full z-50 px-4 md:px-8 py-3 md:py-4 transition-all duration-500
      ${scrolled 
        ? "bg-slate-900/80 backdrop-blur-2xl shadow-xl border-b border-slate-800/50" 
        : "bg-slate-900/95 backdrop-blur-xl"
      }
    `}>
      <div  className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
          Daksh
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <a href="#about" className="group text-lg font-medium text-slate-400 hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300">About</a>
          <a href="#skills" className="group text-lg font-medium text-slate-400 hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300">Skills</a>
          <a href="#projects" className="group text-lg font-medium text-slate-400 hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300">Projects</a>
          <a href="#contact" className="group text-lg font-medium text-slate-400 hover:text-purple-400 hover:underline underline-offset-4 transition-all duration-300">Contact</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/dakshgit-562" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-800/50 hover:bg-purple-500/20 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.185 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          
          <a href="https://www.linkedin.com/in/daksh-chaudhary-6b3002379/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-800/50 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>

          <button
            className="md:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-purple-500/20 text-xl transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-2xl border-t border-slate-800/50
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        transition-all duration-300 ease-out
      `}>
        <div className="flex flex-col items-center gap-8 py-8">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-xl font-semibold text-slate-400 hover:text-purple-400 hover:scale-105 transition-all">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-xl font-semibold text-slate-400 hover:text-purple-400 hover:scale-105 transition-all">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-xl font-semibold text-slate-400 hover:text-purple-400 hover:scale-105 transition-all">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xl font-semibold text-slate-400 hover:text-purple-400 hover:scale-105 transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;