import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Certifications from "./pages/Certifications.jsx";

export default function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [navOffset, setNavOffset] = useState(0);
  const [navShadow, setNavShadow] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const NAV_HEIGHT = 64; // px, adjust as needed

  // Track mouse for glow effect
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Smooth scroll-hide navbar + dynamic shadow
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastScrollY.current;
          // Hide navbar on scroll down, show on scroll up
          if (delta > 0 && currentY > 100) {
            setNavOffset(-NAV_HEIGHT);
          } else if (delta < 0) {
            setNavOffset(0);
          }

          // Add shadow/backdrop when scrolling down a bit
          setNavShadow(currentY > 50);

          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="relative flex flex-col min-h-screen text-gray-100 font-sans overflow-x-hidden">
        {/* Animated background */}
        <motion.div
          className="animated-bg -z-50"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Mouse glow */}
        <motion.div
          className="mouse-glow -z-40"
          animate={{ x: cursor.x, y: cursor.y }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        {/* Navbar */}
        <motion.nav
          className={`navbar fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md transition-shadow duration-300 ${
            navShadow ? "shadow-lg" : "shadow-none"
          }`}
          style={{ translateY: navOffset }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Nav links */}
            <div className="flex gap-6 md:gap-8 text-lg font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Resume", path: "/resume" },
                { name: "Certifications", path: "/certifications" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={link.path}>{link.name}</Link>
                </motion.div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/cayanide"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 transition-transform"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/sayan-chatterjee-a43613176/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-125 transition-transform"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:sayanc354@gmail.com"
                className="hover:scale-125 transition-transform"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </motion.nav>

        {/* Main content with padding equal to navbar height */}
        <main className="flex-1 pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer mt-16 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">
              Sayan Chatterjee | cayanide
            </span>{" "}
            · Built with ❤️ using React + Tailwind
          </p>
          <div className="mt-2 flex justify-center gap-6">
            <a
              href="https://github.com/cayanide"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sayan-chatterjee-a43613176/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sayanc354@gmail.com"
              className="hover:text-blue-400 transition"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}
