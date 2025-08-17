import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sayanc354@gmail.com";
  const location = "Haridwar, Uttarakhand, India";
  const github = "https://github.com/cayanide";
  const linkedin = "https://www.linkedin.com/in/sayan-chatterjee-a43613176/";

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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // no-op
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="mt-3 text-slate-300">
            Open to collaborating on backend, cloud, IoT, or ML/NLP projects —
            or just geeking out about systems.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6 mb-8"
        >
          {/* Email */}
          <motion.a
            variants={fadeInUp}
            href={`mailto:${email}`}
            className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 transition flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-blue-600/20 text-blue-300">
              <FaEnvelope />
            </div>
            <div>
              <div className="text-sm text-slate-400">Email</div>
              <div className="font-semibold text-slate-100 group-hover:text-white">
                {email}
              </div>
            </div>
          </motion.a>

          {/* Location (non-clickable) */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-emerald-600/20 text-emerald-300">
              <FaMapMarkerAlt />
            </div>
            <div>
              <div className="text-sm text-slate-400">Location</div>
              <div className="font-semibold text-slate-100">{location}</div>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.a
            variants={fadeInUp}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 transition flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-slate-600/20 text-slate-200">
              <FaGithub />
            </div>
            <div>
              <div className="text-sm text-slate-400">GitHub</div>
              <div className="font-semibold text-slate-100 group-hover:text-white">
                github.com/cayanide
              </div>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={fadeInUp}
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:bg-white/10 transition flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-sky-600/20 text-sky-300">
              <FaLinkedin />
            </div>
            <div>
              <div className="text-sm text-slate-400">LinkedIn</div>
              <div className="font-semibold text-slate-100 group-hover:text-white">
                linkedin.com/in/sayan-chatterjee
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Compact Contact Bar + Copy */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="p-4 md:p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <div className="text-slate-300 text-center md:text-left">
            Prefer a quick drop? Email is the fastest way to reach out.
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              <FaEnvelope className="text-sm" />
              Compose Email
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-300 rounded-lg hover:bg-blue-500/10 transition"
            >
              {copied ? <FaCheck className="text-emerald-300" /> : <FaCopy />}
              {copied ? "Copied" : "Copy Email"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
