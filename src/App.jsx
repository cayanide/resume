import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const NAV_HEIGHT = 64; // px

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
          if (delta > 0 && currentY > 100) {
            setNavOffset(-NAV_HEIGHT);
          } else if (delta < 0) {
            setNavOffset(0);
          }
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

  // Close mobile menu on route change click
  const closeMobile = () => setMobileOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  // Animations
  const mobilePanel = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

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
          className={`fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md transition-shadow duration-300 ${
            navShadow ? "shadow-lg" : "shadow-none"
          }`}
          style={{ translateY: navOffset }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
            {/* Brand (you can replace with a logo/text) */}
            <Link
              to="/"
              className="text-lg sm:text-xl font-semibold tracking-wide hover:text-blue-300 transition-colors"
              onClick={closeMobile}
            >
              Sayan Chatterjee
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex gap-5 lg:gap-8 text-sm lg:text-base font-medium">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link
                    to={link.path}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right-side actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://github.com/cayanide"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sayan-chatterjee-a43613176/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:sayanc354@gmail.com"
                className="hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 border border-white/10 bg-white/5 hover:bg-white/10 transition"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

          {/* Mobile slide-down panel */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                variants={mobilePanel}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden border-t border-white/10 bg-gray-900/80 backdrop-blur-md"
              >
                <div className="px-4 sm:px-6 py-3 flex flex-col gap-3">
                  {/* Links */}
                  <div className="flex flex-col">
                    {navLinks.map((l, idx) => (
                      <Link
                        key={idx}
                        to={l.path}
                        onClick={closeMobile}
                        className="py-2 px-2 rounded-md hover:bg-white/10 transition-colors"
                      >
                        {l.name}
                      </Link>
                    ))}
                  </div>
                  {/* Social row */}
                  <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                    <a
                      href="https://github.com/cayanide"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-300 transition-colors"
                    >
                      <div className="inline-flex items-center gap-2">
                        <FaGithub /> <span className="text-sm">GitHub</span>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sayan-chatterjee-a43613176/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-300 transition-colors"
                    >
                      <div className="inline-flex items-center gap-2">
                        <FaLinkedin /> <span className="text-sm">LinkedIn</span>
                      </div>
                    </a>
                    <a
                      href="mailto:sayanc354@gmail.com"
                      className="hover:text-blue-300 transition-colors"
                    >
                      <div className="inline-flex items-center gap-2">
                        <FaEnvelope /> <span className="text-sm">Email</span>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Main content with padding (extra top space so content isn't under navbar) */}
        <main className="flex-1 pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400 px-4 pb-6">
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
