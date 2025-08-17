import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiCplusplus,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AiOutlineCloud } from "react-icons/ai";

import profile from "../assets/sayan.jpeg";
import lpu from "../assets/lpu.jpeg";

const githubUsername = "cayanide";

// Scroll reveal variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  // === Parallax setup ===
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // start when hero enters viewport, end when top leaves
  });

  // Layered parallax transforms
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100 min-h-screen overflow-hidden">
      {/* ================= HERO WRAPPER ================= */}
      <div className="relative">
        {" "}
        {/* Added wrapper to ensure non-static position */}
        <section
          ref={heroRef}
          className="relative container mx-auto px-6 py-20 md:py-24"
        >
          {/* Parallax layers */}
          <motion.div
            style={{ y: yBack }}
            className="pointer-events-none absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-blue-600 to-purple-700"
          />
          <motion.div
            style={{ y: yMid }}
            className="pointer-events-none absolute -bottom-24 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 to-rose-600"
          />
          <motion.div
            style={{ y: yFront }}
            className="pointer-events-none absolute top-32 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl opacity-15 bg-gradient-to-br from-cyan-400 to-blue-500"
          />

          {/* Floating LPU logo */}
          <motion.img
            src={lpu}
            alt="LPU"
            className="absolute top-6 right-6 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white bg-white shadow-md"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left: Headline + CTA */}
            <motion.div
              className="md:w-2/3 text-center md:text-left"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I’m <span className="text-blue-400">Sayan Chatterjee</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
                Backend & Cloud-leaning engineer building scalable, resilient
                systems across{" "}
                <span className="text-gray-200">Python/Java</span>, APIs, and
                DevOps. I love turning complex ideas into reliable, tested
                services.
              </p>

              {/* Recruiter Snapshot */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { k: "Core", v: "Python • Java • C++" },
                  { k: "Backend", v: "Flask • FastAPI • Spring Boot" },
                  { k: "Cloud/DevOps", v: "Docker • K8s • AWS • Azure" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-900/70 border border-white/10 text-center"
                  >
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      {item.k}
                    </p>
                    <p className="mt-1 font-semibold">{item.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex gap-4 justify-center md:justify-start">
                <a
                  href="/projects"
                  className="btn btn-primary hover:shadow-[0_0_18px_#3b82f6]"
                >
                  🚀 View My Work
                </a>
                <a
                  href="/resume"
                  className="btn btn-secondary hover:shadow-[0_0_18px_#22c55e]"
                >
                  📄 View Resume
                </a>
              </div>
            </motion.div>

            {/* Right: Profile */}
            <motion.div
              className="relative md:w-1/3 flex justify-center"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              whileHover={{ scale: 1.04, rotate: 0.8 }}
            >
              <img
                src={profile}
                alt="Sayan"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-400 shadow-[0_0_28px_rgba(59,130,246,0.65)]"
              />
            </motion.div>
          </div>
        </section>
      </div>

      {/* ================= TOP LANGUAGES + FRAMEWORKS ================= */}
      <motion.section
        className="section container mx-auto px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          🧠 Core Stack Focus
        </h2>

        {/* Top 3 Languages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: <SiPython size={28} />,
              label: "Python",
              note: "APIs • Data • Automation",
            },
            {
              icon: <FaJava size={28} />,
              label: "Java",
              note: "Spring • Services • Concurrency",
            },
            {
              icon: <SiCplusplus size={28} />,
              label: "C++",
              note: "Perf • Algorithms • Systems",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="card flex items-center gap-3 justify-center text-center"
            >
              <div className="opacity-90">{item.icon}</div>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Python Frameworks",
              items: [
                { icon: <SiFlask />, name: "Flask" },
                { icon: <SiFastapi />, name: "FastAPI" },
              ],
            },
            {
              title: "Java Frameworks",
              items: [{ icon: <SiSpringboot />, name: "Spring Boot" }],
            },
            {
              title: "Cloud & DevOps",
              items: [
                { icon: <SiDocker />, name: "Docker" },
                { icon: <SiKubernetes />, name: "Kubernetes" },
                { icon: <AiOutlineCloud />, name: "AWS" },
                { icon: <AiOutlineCloud />, name: "Azure" },
              ],
            },
          ].map((group, idx) => (
            <div key={idx} className="card">
              <h3 className="text-xl font-bold mb-3 text-center">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {group.items.map((it, j) => (
                  <span
                    key={j}
                    className="px-3 py-2 rounded-lg bg-gray-800/70 border border-white/10 text-sm flex items-center gap-2 hover:border-blue-400"
                  >
                    <span className="opacity-90">{it.icon}</span>
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= FEATURED PROJECTS ================= */}
      <motion.section
        className="section container mx-auto px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          🌟 Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Sentiment Analysis",
              desc: "NLP pipeline analyzing user feedback using Python, TensorFlow, and Flask API deployment.",
              link: "https://github.com/cayanide/sentiment-analysis",
            },
            {
              title: "BetterQuery",
              desc: "AI-powered query assistant using Flask, Elasticsearch, and GPT-4 to optimize search.",
              link: "https://github.com/cayanide/ElasticLLMIntegration",
            },
            {
              title: "AdSense Data Fetcher",
              desc: "Python automation tool to fetch & analyze AdSense reports, integrated with BigQuery.",
              link: "https://github.com/cayanide/Adsense-Data-Fetcher",
            },
            {
              title: "HomeServer Ecosystem",
              desc: "Centralized storage & automation hub powered by TrueNAS, Nextcloud, Jellyfin, and Pi-hole.",
              link: "https://truenas.cayanidelabs.shop",
            },
            {
              title: "N-Queens Visualizer",
              desc: "Interactive chessboard visualizer animating backtracking solutions for N-Queens.",
              link: "https://cayanide.github.io/N-Queens_Visualizer/",
            },
            {
              title: "QR Mover",
              desc: "Flask-powered app for secure file sharing with QR code cross-device access.",
              link: "https://qr-mover.onrender.com",
            },
          ].map((project, idx) => (
            <motion.a
              href={project.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              className="card hover:border-blue-400 hover:shadow-[0_0_15px_#3b82f6] flex flex-col justify-between text-center"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ================= GITHUB STATS ================= */}
      <motion.section
        className="section text-center container mx-auto px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">📊 My GitHub</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical`}
            alt="GitHub Stats"
            className="rounded-lg shadow-lg w-full md:w-[48%] max-w-[640px] aspect-[16/9] object-contain"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical`}
            alt="Top Languages"
            className="rounded-lg shadow-lg w-full md:w-[48%] max-w-[640px] aspect-[16/9] object-contain"
          />
        </div>
      </motion.section>
    </div>
  );
}
