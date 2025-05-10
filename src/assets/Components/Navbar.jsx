import { useEffect } from "react";
// import resumePDF from "/src/assets/Resume.pdf";
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            S<span className="text-blue-500">W</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>

            <div className="text-center my-8">
              <a
                href="Resume.pdf"
                download="My_Resume.pdf"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                📄 Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
