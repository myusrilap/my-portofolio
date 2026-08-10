import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index = 0, onViewProject }) => {
  if (!project) {
    return null;
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border ${
        project.featured
          ? "border-blue-500/30 bg-blue-500/[0.04]"
          : "border-white/10 bg-white/[0.03]"
      } transition-colors duration-300`}
    >
      {/* Featured */}
      {project.featured && (
        <div className="absolute top-5 right-5 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20">
            Featured
          </span>
        </div>
      )}

      {/* Visual */}
      <div className="relative h-56 overflow-hidden bg-gray-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center px-6">
              <div className="text-4xl mb-3">
                {project.icon}
              </div>

              <p className="text-sm text-gray-500">
                Project Preview
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-xs uppercase tracking-wider text-blue-400 font-medium">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-2.5 py-1 rounded-md text-xs text-gray-300 bg-white/5 border border-white/5"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 mt-6">

          <button
            onClick={() => onViewProject(project)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-gray-950 text-sm font-medium hover:bg-gray-200 transition"
          >
            View Project
            <ArrowUpRight size={16} />
          </button>

          {project.githubPath && (
  <a
    href={`https://github.com/${project.githubPath}`}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition"
  >
    <FaGithub size={16} />
    GitHub
  </a>
)}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-gray-950 text-sm font-medium hover:bg-gray-200 transition"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          )}

        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;