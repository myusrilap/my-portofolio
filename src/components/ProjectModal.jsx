import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <div className="min-h-screen px-4 py-8 sm:px-6 sm:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl mx-auto rounded-3xl border border-white/10 bg-gray-950 shadow-2xl overflow-hidden"
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
                aria-label="Close project"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="relative p-7 sm:p-10 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {project.icon}
                  </span>

                  <p className="text-sm uppercase tracking-wider text-blue-400 font-medium">
                    {project.category}
                  </p>
                </div>

                <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="mt-5 text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm text-gray-300 bg-white/5 border border-white/10"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-7">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition"
                    >
                      <FaGithub size={17} />
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-gray-950 text-sm font-medium hover:bg-gray-200 transition"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Detail */}
              <div className="p-7 sm:p-10">
                <div className="space-y-12">

                  {/* Overview */}
                  {project.details?.overview && (
                    <DetailSection title="Overview">
                      <p>{project.details.overview}</p>
                    </DetailSection>
                  )}

                  {/* Problem */}
                  {project.details?.problem && (
                    <DetailSection title="Problem">
                      <p>{project.details.problem}</p>
                    </DetailSection>
                  )}

                  {/* Process */}
                  {project.details?.process && (
                    <DetailSection title="Process">
                      <div className="space-y-3">
                        {project.details.process.map((item, index) => (
                          <div
                            key={index}
                            className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10"
                          >
                            <span className="text-blue-400 font-medium">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="text-gray-300">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DetailSection>
                  )}

                  {/* Results */}
                  {project.details?.results && (
                    <DetailSection title="Results">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {project.details.results.map((result, index) => (
                          <div
                            key={index}
                            className="p-5 rounded-xl bg-white/[0.03] border border-white/10"
                          >
                            <p className="text-sm text-gray-500">
                              {result.label}
                            </p>

                            <p className="mt-2 text-white font-medium">
                              {result.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DetailSection>
                  )}

                  {/* Findings */}
                  {project.details?.findings && (
                    <DetailSection title="Key Findings">
                      <div className="space-y-3">
                        {project.details.findings.map((finding, index) => (
                          <div
                            key={index}
                            className="p-5 rounded-xl bg-blue-500/[0.04] border border-blue-500/10"
                          >
                            <p className="text-gray-300">
                              {finding}
                            </p>
                          </div>
                        ))}
                      </div>
                    </DetailSection>
                  )}

                </div>
              </div>

              {/* Footer */}
              <div className="px-7 py-6 sm:px-10 border-t border-white/10 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Project Details
                </p>

                <button
                  onClick={onClose}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DetailSection = ({ title, children }) => {
  return (
    <section>
      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-5 text-gray-400 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default ProjectModal;