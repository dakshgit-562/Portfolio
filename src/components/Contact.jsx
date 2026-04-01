function Contact() {
  return (
    <section id="contact" className="py-10 bg-[#020617] text-white px-10">
      <div className="text-4xl font-bold text-purple-500 text-center mb-28">
        Contact <span className="text-white">Me</span>
      </div>
  
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-purple-400">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project idea or want to collaborate? Feel free to reach out!
          </p>

          <div className="mt-6 space-y-3">
            <p>Email: daksh@email.com</p>
            <p>Location: India</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/dakshgit-562/To-DO-APP-React" className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/20">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/daksh-chaudhary-6b3002379/" className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/20">
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-6">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 outline-none focus:border-purple-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 outline-none focus:border-purple-500"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-[#0f172a] border border-gray-700 outline-none focus:border-purple-500"
          ></textarea>

          <button className="w-full py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;