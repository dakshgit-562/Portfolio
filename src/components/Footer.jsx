import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#020617] text-white px-6 py-14 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* 1️⃣ Branding */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400">
            Daksh.dev
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            I build modern, scalable and user-friendly web applications using latest technologies.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-gray-400">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>

        {/* 3️⃣ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

          <div className="space-y-3 text-gray-400 text-sm">

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-purple-400" />
              <span>dakshchaudhary10009@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="text-purple-400" />
              <span>+91 7988798616</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>Ugala, Haryana, India</span>
            </div>

          </div>
        </div>

        {/* 4️⃣ Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>

          <div className="flex gap-4">
            <a
              href="https://github.com/dakshgit-562"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-purple-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/daksh-chaudhary-6b3002379/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-purple-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-6">
        © 2026 Daksh Chaudhary. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;