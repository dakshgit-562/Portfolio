import dakshpic from "../assets/dakshpic.png";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950 text-white px-4 md:px-6 mt-16 overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
        
        {/* LEFT */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Daksh
            </span>
            <br />
            <span className="text-xl md:text-2xl lg:text-3xl font-normal text-slate-400 bg-gradient-to-r from-transparent via-slate-300 to-transparent bg-clip-text">
              Building Future with Code 🚀
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="group">
            <div className="inline-flex items-center gap-2 p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800/50 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-[1.02]">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Frontend Developer", 
                  "C++ & DSA Enthusiast"
                ]}
                typeSpeed={80}
                backSpeed={20}
                loop 
                
                className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed">
            I build modern, scalable web applications using React, Node.js and Tailwind CSS. 
            Passionate about problem solving and Data Structures & Algorithms.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-transparent 
              bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
              hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span>Contact Me</span>
            </a>
            <a href="/resume.pdf" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl 
              border-2 border-slate-700/50 hover:border-purple-500/50 bg-slate-900/50 backdrop-blur-sm
              hover:bg-slate-800/50 hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-105 transition-all duration-300"
              download>
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/dakshgit-562" className="group p-3 rounded-xl bg-slate-800/50 hover:bg-purple-500/20 hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current text-slate-400 group-hover:text-purple-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.185 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/daksh-chaudhary-6b3002379/" className="group p-3 rounded-xl bg-slate-800/50 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 fill-current text-slate-400 group-hover:text-blue-400" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-around">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-xl opacity-30 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            
            <img
              src={dakshpic}
              alt="Daksh Chaudhary - Full Stack Developer"
              loading="lazy"
              className="relative z-10 rounded-full object-cover border-4 border-white/20 bg-gradient-to-br from-purple-500/30 to-pink-500/30
              h-72 w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 shadow-2xl
              group-hover:scale-110 group-hover:shadow-purple-500/50 group-hover:shadow-3xl transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-t from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}

export default Hero;