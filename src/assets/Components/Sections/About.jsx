import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"];

  const backendSkills = ["Django", "MongoDB", "Mysql", "Gin(Golang),"];

  const developerTools = ["Git/Github", "Postman", "Docker", "Linux"]

  const mlSkills = ["Scikit-learn", "NumPy"," Pandas", "Seaborn", "Matplotlib"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Devloper Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {developerTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {mlSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="text-xl font-bold mb-2  text-gray-300">
                    {" "}
                    <strong> B.S. in Computer Science And Engineering</strong>-
                    Adama Science and Technology University (2022-2026)</p>
                 
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Relevant Coursework: Data Structures, Web Development,
                      Computer Networks, Database Systems...
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2  text-gray-300">
                    {" "}
                    <strong>
                      {" "}
                      Competitive Programming and Coding Academy
                    </strong>{" "}
                    - Africa To Silicon Valley | A2 SV - Backed by Google
                    (2023-2025)
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      A2SV graduate with a strong foundation in data structures
                      and algorithms (Solved over 1,400 problems on LeetCode and
                      Codeforces .) and hands-on experience in backend
                      development and product management.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold mb-2  text-gray-300">
                    {" "}
                    Head of Education at A2SV (2025 - Present){" "}
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Delivered lectures with slides on advanced DSA topics
                      (e.g., sorting algorithms, sliding window), monitored
                      student progress with personalized support, curated
                      problems from LeetCode/Codeforces/HackerRank, and
                      organized programming contests to enhance problem-solving
                      skills.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2  text-gray-300">
                    {" "}
                    Intern at Eskalate (2024){" "}
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    Developed a RESTful backend with Go GIN, implemented JWT
                    auth and email verification, optimized MongoDB with fuzzy
                    search and TTL indexing, integrated Gemini LLM API for AI
                    chat, and automated testing with Postman, reducing testing
                    time by 50% and manual work by 90%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
