import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import portfolioImg from "../assets/portfolio.png";
import todoImg from "../assets/TODO.png";
function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio built with React & Tailwind CSS.",
      tech: ["React", "Tailwind"],
      image: portfolioImg,
      live: "http://localhost:5173/",
      github: "#",
    },
    {
      title: "Todo App",
      desc: "Task manager with local storage and clean UI.",
      tech: ["JavaScript", "CSS"],
      image: todoImg,
      live: "http://localhost:5174/",
      github: "https://github.com/dakshgit-562/To-DO-APP-React",
    },
    {
      title: "Weather App",
      desc: "Real-time weather app using API integration.",
      tech: ["React", "API"],
      image: "https://via.placeholder.com/600x400",
      live: "",
      github: "",
    },
  ];

  return (
    <section id="projects" className="py-28 bg-[#020617] text-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className=" text-4xl md:text-6xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mb-16 mt-8">
          A showcase of my work and skills
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >

              {/* Image */}
              <div className="overflow-hidden p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 md:h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 text-xs bg-purple-500/20 border border-purple-500/30 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 bg-white/10 rounded-full hover:bg-purple-500 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="p-2 bg-white/10 rounded-full hover:bg-purple-500 transition"
                  >
                    <FiExternalLink />
                  </a>
                </div>

              </div>

              {/* Bottom Info (visible always) */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-500">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;