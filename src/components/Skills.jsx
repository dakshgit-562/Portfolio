import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const skillData = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400 " /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#020617] text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className=" text-3xl md:text-6xl font-bold text-center  text-opacity-80 text-white ">
          My <span className="text-purple-500">Skills</span>
        </h2>
       <div className="hidden md:block w-1/4 h-[2px] bg-gradient-to-r from-purple-500 to-transparent mx-auto mt-4"></div>

        <div className="mt-16 space-y-16">

          {skillData.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              
              {/* BOX */}
              <div className=" relative w-full md:w-1/2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition duration-300">

              <h3 className="text-3xl font-extrabold text-purple-400 mb-6">
                  {category.title}
              </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-6 py-3 bg-[#0f172a] border border-gray-700 rounded-full hover:bg-purple-500/20 transition"
                    >
                      <span className="text-3xl">
                        {skill.icon}
                      </span>
                      <span className="text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SIDE LINE / DESIGN */}
              <div className="hidden  md:block w-1/2 h-[3px] bg-gradient-to-r from-purple-500 to-transparent"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;