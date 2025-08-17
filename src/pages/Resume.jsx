import {
  FaDownload,
  FaExternalLinkAlt,
  FaPrint,
  FaFilePdf,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Resume() {
  // Use a base-aware path so it works in dev ("/") and on GitHub Pages ("/resume/")
  const pdfPath = import.meta.env.BASE_URL + "SayanChatterjee.pdf";

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Resume</h2>
          <p className="mt-3 text-slate-300">
            View, download, or print a copy. Best experienced on desktop for
            full-page view.
          </p>
        </motion.div>

        {/* Action bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <a
            href={pdfPath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition shadow"
          >
            <FaDownload className="text-sm" />
            Download PDF
          </a>

          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-300 rounded-lg hover:bg-blue-500/10 transition"
          >
            <FaExternalLinkAlt className="text-sm" />
            Open in new tab
          </a>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-600 text-slate-200 rounded-lg hover:bg-white/10 transition"
          >
            <FaPrint className="text-sm" />
            Print
          </button>
        </motion.div>

        {/* Viewer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg overflow-hidden"
        >
          <iframe
            src={pdfPath}
            title="Resume"
            className="w-full h-[70vh] md:h-[80vh] bg-slate-950"
          />

          {/* Fallback/helper */}
          <div className="p-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-slate-300">
              <FaFilePdf className="text-red-400" />
              <span className="text-sm">
                If the PDF doesn’t load here, use Open or Download above.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={pdfPath}
                download
                className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                <FaDownload className="text-sm" />
                Download
              </a>
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 border border-blue-500 text-blue-300 rounded-lg hover:bg-blue-500/10 transition"
              >
                <FaExternalLinkAlt className="text-sm" />
                Open
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-center text-slate-400 text-sm"
        >
          Ensure the file exists at public/SayanChatterjee.pdf (case-sensitive).
        </motion.div>
      </div>
    </div>
  );
}
