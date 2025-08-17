import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPython,
  SiCplusplus,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiRedis,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiElasticsearch,
  SiGooglecloud,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiSelenium,
} from "react-icons/si";
import { AiOutlineCloud } from "react-icons/ai";
import { motion } from "framer-motion";
import lpuLogo from "../assets/lpu.jpeg";

export default function About() {
  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  // Snapshot bullets (concise, recruiter-focused)
  const snapshot = [
    "Built GPT-4 powered BetterQuery (Flask + Elasticsearch) enabling natural language querying with validation and feedback loops.",
    "Automated AdSense→BigQuery ETL with OAuth2, deduplication, retries, and scheduling for reliable analytics.",
    "Containerized ML/NLP services on AWS/GCP; tuned resources for lower latency and resilient inference.",
    "Engineered IoT systems (ESP8266/ESP32, MQTT, OTA); secure home-lab ops on TrueNAS with Nextcloud/Jellyfin/VPN.",
  ];

  // Strengths
  const coreHighlights = [
    {
      k: "Cloud & DevOps",
      v: "Docker, Kubernetes, AWS, GCP, Azure, Terraform, GitLab CI/CD",
      note: "Containerized microservices, IaC, automated pipelines, performance tuning.",
    },
    {
      k: "Back-end & APIs",
      v: "Flask, FastAPI, Spring Boot, Node/Express",
      note: "Secure REST, JWT/OAuth2, logging, reliability, observability.",
    },
    {
      k: "Data & ML",
      v: "scikit-learn, pandas, NumPy, NLP (spaCy, NLTK), Selenium",
      note: "EDA, feature engineering, training, and productionization with CI/CD.",
    },
    {
      k: "Datastores & Search",
      v: "PostgreSQL, MySQL, MongoDB, SQLite, Redis, BigQuery, Elasticsearch",
      note: "Schema design, indexing, optimization, semantic search relevance.",
    },
  ];

  // Experience timeline (Janvee removed)
  const experience = [
    {
      role: "Data Scientist Intern",
      org: "BlackCoffer (Remote)",
      date: "Dec 2024 – Mar 2025",
      bullets: [
        "Designed and deployed BetterQuery: GPT-4 driven Flask API for advanced Elasticsearch querying with validation and feedback.",
        "Built AdSense Data Fetcher: OAuth2 ingestion to BigQuery with deduplication, retries, and scheduled ETL.",
        "Orchestrated AI analytics pipelines: ingestion, cleansing, feature engineering, EDA, and dashboards.",
        "Containerized ML services on AWS/GCP; tuned resources to reduce latency and improve reliability.",
      ],
    },
  ];

  // Education
  const education = [
    {
      school: "Lovely Professional University",
      degree: "B.Tech in Computer Science",
      date: "August 2025",
      details:
        "DSA, ML, OS, DBMS, Cloud, IoT. Capstone: Sentiment Analysis Web App (Flask + Selenium).",
      logo: lpuLogo,
    },
    {
      school: "Lovely Professional University",
      degree: "Diploma in Computer Science",
      date: "2022",
      details: "CGPA: 8.6/10",
      logo: lpuLogo,
    },
  ];

  // Certifications
  const certifications = [
    "Azure Security Engineer (AZ-500) – Apr 2025",
    "Microservices & Serverless (IBM) – Jul 2024",
    "DSA (GeeksforGeeks) – Jul 2024",
    "Cloud Virtualization, Containers & APIs (Duke) – Jul 2024",
    "Spring Cloud – Jun/Jul 2024",
    "Kubernetes & Docker (IBM) – Jun 2024",
    "ML (IIT Bombay) – Mar 2023",
    "Theory of Computation – Nov 2023",
  ];

  // Toolbelt chips (mirrors resume 1:1)
  const toolbelt = {
    Languages: [
      "Python",
      "C++",
      "Java",
      "C",
      "JavaScript",
      "TypeScript",
      "Dart",
    ],
    Frameworks: [
      "Flask",
      "Django",
      "FastAPI",
      "Spring Boot",
      "React",
      "Angular",
      "Flutter",
      "ESP8266/ESP32 SDKs",
    ],
    "Cloud & DevOps": [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "GCP",
      "GitLab CI/CD",
      "Terraform",
    ],
    Databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "Firebase",
      "Redis",
    ],
    "Search & Analytics": ["Elasticsearch", "BigQuery"],
    "Data & ML/NLP": [
      "scikit-learn",
      "pandas",
      "NumPy",
      "NLTK",
      "spaCy",
      "Selenium",
      "BeautifulSoup",
      "TensorFlow (basic)",
    ],
    Tools: [
      "Git",
      "REST",
      "WebSocket",
      "OAuth2",
      "Bash",
      "pytest",
      "Jest",
      "Responsive design",
      "Security best practices",
    ],
  };

  // Core icon strip — only verified icons (safe set from Home.jsx + standard ones)
  const coreIcons = [
    { icon: <SiPython />, name: "Python" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiGooglecloud />, name: "GCP" },
    { icon: <AiOutlineCloud />, name: "Azure" }, // neutral icon to avoid SiMicrosoftazure issues
    { icon: <SiElasticsearch />, name: "Elasticsearch" },
    { icon: <FaDatabase />, name: "SQL" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            About Sayan Chatterjee
          </h1>
          <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
            Engineer focused on scalable, resilient systems across cloud-native,
            IoT, and AI. Passionate about clean architecture, developer
            experience, and measurable impact—turning complex ideas into
            reliable, tested services.
          </p>
        </motion.div>

        {/* Snapshot */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
          >
            <h2 className="text-xl font-semibold">Snapshot</h2>
            <ul className="mt-3 space-y-2 text-slate-300">
              {snapshot.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
          >
            <h2 className="text-xl font-semibold">What I’m great at</h2>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>
                • Designing clean APIs, robust data pipelines, and search/NLP
                workflows end-to-end.
              </li>
              <li>
                • Turning ambiguous problems into measurable outcomes with
                systems thinking.
              </li>
              <li>
                • Shipping fast with quality—tests, CI/CD, observability,
                security best practices.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Core Icons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold">Core Tech</h2>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {coreIcons.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow hover:shadow-lg transition"
                title={s.name}
              >
                <div className="text-3xl text-blue-400">{s.icon}</div>
                <div className="text-xs font-semibold text-slate-200 mt-2">
                  {s.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strengths */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4">Strengths & Focus</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coreHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg"
              >
                <div className="text-sm text-slate-400">{item.k}</div>
                <div className="mt-1 text-slate-100 font-semibold">
                  {item.v}
                </div>
                <div className="mt-2 text-slate-300 text-sm">{item.note}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-6">Experience</h2>
          <div className="relative pl-6">
            {/* Vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 via-blue-400/40 to-transparent" />
            {experience.map((e, i) => (
              <div key={i} className="relative mb-8">
                {/* Node */}
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
                <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="font-semibold text-slate-100">{e.role}</div>
                    <div className="text-slate-400">•</div>
                    <div className="text-slate-300">{e.org}</div>
                    <div className="ml-auto text-sm text-slate-400">
                      {e.date}
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    {e.bullets.map((b, idx) => (
                      <li key={idx}>• {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education + Certifications */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {education.map((ed, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex gap-4 items-start"
            >
              <img
                src={ed.logo}
                alt="LPU"
                className="w-12 h-12 rounded-md object-cover border border-white/10"
              />
              <div>
                <div className="font-semibold text-slate-100">{ed.school}</div>
                <div className="text-slate-200">{ed.degree}</div>
                <div className="text-sm text-slate-400">{ed.date}</div>
                <div className="text-sm text-slate-300 mt-1">{ed.details}</div>
              </div>
            </div>
          ))}

          <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
            <h2 className="text-xl font-semibold text-slate-100">
              Certifications
            </h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              {certifications.map((c, i) => (
                <li key={i}>• {c}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Toolbelt Chips */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Toolbelt</h2>
          <div className="space-y-5">
            {Object.entries(toolbelt).map(([group, items]) => (
              <div key={group}>
                <div className="text-sm text-slate-400 mb-2">{group}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold text-slate-100 bg-white/10 border border-white/10 px-2 py-1 rounded-md hover:bg-white/15 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex flex-col md:flex-row items-center gap-3"
        >
          <a
            href="https://github.com/cayanide"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition shadow"
          >
            View GitHub Projects →
          </a>
          <a
            href="https://www.linkedin.com/in/sayan-chatterjee-a43613176/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-blue-500 text-blue-300 rounded-lg hover:bg-blue-500/10 transition"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  );
}
