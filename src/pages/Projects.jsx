import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

// === Project Data ===
const projects = [
  {
    title: "BetterQuery: AI Search Assistant",
    tech: ["Flask", "Elasticsearch", "GPT-4", "Docker"],
    short:
      "AI assistant that crafts semantic search queries with feedback-driven refinements.",
    details:
      "Engineered a Flask API integrating Elasticsearch and GPT-4 to dynamically generate precise queries. Features automated index selection, sanitization, error handling, and logging for reliability.",
    link: "https://github.com/cayanide/ElasticLLMIntegration",
    featured: true,
  },
  {
    title: "AdSense Data Fetcher",
    tech: ["Python", "OAuth2", "BigQuery"],
    short: "Automated ETL pipeline fetching AdSense reports into BigQuery.",
    details:
      "Python OAuth2 tool to fetch AdSense reports into BigQuery. Includes deduplication, scheduled jobs, retry logic, and secure credential management for enterprise reliability.",
    link: "https://github.com/cayanide/Adsense-Data-Fetcher",
    featured: false,
  },
  {
    title: "Sentiment Analysis Web App",
    tech: ["Flask", "Docker", "Scikit-learn", "NLP"],
    short:
      "NLP pipeline analyzing product reviews improving recommendations by 15%.",
    details:
      "Full-stack web app for sentiment insights using NLP (spaCy, NLTK, Naive Bayes). Dockerized & CI/CD-deployed with ~15% uplift in recommendation accuracy.",
    link: "https://github.com/cayanide/Data-Extraction-and-NLP",
    featured: true,
  },
  {
    title: "Anime Recommendation System",
    tech: ["Flask", "PostgreSQL", "JWT", "Docker"],
    short:
      "REST API delivering personalized anime recommendations via AniList GraphQL.",
    details:
      "JWT-secured API integrating AniList GraphQL + PostgreSQL. Dockerized for reproducibility, modular logging, and extendable filtering engine.",
    link: "https://github.com/cayanide/Anime-Recommendation-System",
    featured: false,
  },
  {
    title: "QR_MOVER",
    tech: ["Flask", "Docker", "JavaScript"],
    short:
      "Drag-and-drop file sharing app with QR-based cross-device transfer.",
    details:
      "Built with Flask + JS UI, allows QR-mediated file transfers with encryption. Deployed via Docker with CI/CD pipelines for zero downtime.",
    link: "https://qr-mover.onrender.com",
    featured: false,
  },
  {
    title: "HomeServer Ecosystem",
    tech: ["TrueNAS", "Nextcloud", "Jellyfin", "VPN"],
    short: "Full home server integrating media storage, streams & security.",
    details:
      "Built resilient TrueNAS system connecting Nextcloud, Jellyfin, Pi-hole with VPN tunnels. Automated monitoring + backups. Balanced efficiency & privacy.",
    link: "https://truenas.cayanidelabs.shop",
    featured: false,
  },
  {
    title: "Home Automation IoT System",
    tech: ["ESP8266/ESP32", "MQTT", "IoT Dashboards"],
    short: "IoT system automating smart devices for energy efficiency.",
    details:
      "ESP-based IoT with MQTT real time control, OTA firmware updates, web dashboards, and energy algorithms — blending hardware + software expertise.",
    link: "#",
    featured: false,
  },
  {
    title: "N-Queens Visualizer",
    tech: ["JavaScript", "Algorithms", "Animation"],
    short: "Interactive visualization of the N-Queens problem.",
    details:
      "Educational JS app animating classic backtracking. Clean modular code, hosted on GitHub Pages for global accessibility.",
    link: "https://cayanide.github.io/N-QueensVisualizer",
    featured: false,
  },
  {
    title: "PDF → DOCX Converter",
    tech: ["Python", "pdfplumber", "docx"],
    short: "Utility converting PDFs to editable Word docs.",
    details:
      "CLI Python tool converting PDFs to Word, preserving layout, hyperlinks and structure. Packaged reusable for document workflows.",
    link: "https://github.com/cayanide/PDF-to-Word-Converter",
    featured: false,
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  // Scroll reveal
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yTranslate = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!active) return;
      const idx = projects.findIndex((p) => p.title === active.title);
      if (e.key === "ArrowRight") {
        setActive(projects[(idx + 1) % projects.length]);
      }
      if (e.key === "ArrowLeft") {
        setActive(projects[(idx - 1 + projects.length) % projects.length]);
      }
      if (e.key === "Escape") {
        setActive(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  return (
    <div ref={containerRef} className="p-10 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10 text-center text-gray-900"
      >
        🚀 Highlighted Projects
      </motion.h2>

      <motion.div
        style={{ y: yTranslate }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-6 border bg-white rounded-xl shadow hover:shadow-xl cursor-pointer transition ${
              p.featured ? "ring-2 ring-yellow-400" : ""
            }`}
            onClick={() => setActive(p)}
          >
            {p.featured && (
              <div className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded shadow">
                ⭐ Featured
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{p.short}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-xl w-full p-8 rounded-xl shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -50 }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-black"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-gray-900">
                {active.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                {active.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {active.details}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() =>
                    setActive(
                      projects[
                        (projects.findIndex((p) => p.title === active.title) -
                          1 +
                          projects.length) %
                          projects.length
                      ],
                    )
                  }
                  className="px-4 py-2 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-50 transition"
                >
                  ← Prev
                </button>
                <a
                  href={active.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  Take me to the project →
                </a>
                <button
                  onClick={() =>
                    setActive(
                      projects[
                        (projects.findIndex((p) => p.title === active.title) +
                          1) %
                          projects.length
                      ],
                    )
                  }
                  className="px-4 py-2 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-50 transition"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
