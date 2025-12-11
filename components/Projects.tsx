import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import { Github, Globe, X, Star } from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Automatically extract unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter logic: Show project if it matches ANY selected tag (Union).
  // If no tags selected, show all.
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return PROJECTS;
    return PROJECTS.filter((project) =>
      project.tags.some((tag) => selectedTags.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setSelectedTags([]);

  return (
    <section id="projects" className="py-24 w-full max-w-4xl px-6 mx-auto">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-12 sm:gap-8 items-start mb-12">
        <div className="hidden sm:block sm:col-span-2"></div>
        <div className="sm:col-span-10 sm:-ml-[12%] flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Engineering Showcase
          </h2>
          <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 rounded-full mb-6"></div>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-lg">
            Production-grade systems demonstrating scale, security, and
            algorithmic complexity.
          </p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                  isSelected
                    ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Clear Filter Button (Conditional) */}
        <AnimatePresence>
          {selectedTags.length > 0 && (
            <motion.button
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              onClick={clearFilters}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-red-500 transition-colors"
            >
              <X size={12} />
              <span>Clear filters</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-16 min-h-[500px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{
                duration: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="group relative grid grid-cols-1 gap-8 p-0 sm:grid-cols-12 sm:gap-8 items-start"
            >
              {/* Tech Stack Decoration Line */}
              <div className="hidden sm:flex sm:col-span-2 flex-col items-end pt-1">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">
                  0{index + 1}
                </span>
                <div
                  className={`w-px h-full min-h-[100px] ${
                    project.isFeatured
                      ? "bg-indigo-400 dark:bg-indigo-500"
                      : "bg-zinc-200 dark:bg-zinc-800"
                  } transition-colors duration-300`}
                ></div>
              </div>

              <div
                className={`sm:col-span-10 flex flex-col h-full border rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  project.isFeatured
                    ? "bg-white dark:bg-zinc-900/60 border-zinc-300 dark:border-zinc-700 shadow-xl shadow-zinc-200/50 dark:shadow-[0_0_20px_-5px_rgba(99,102,241,0.15)] ring-1 ring-zinc-200 dark:ring-zinc-800"
                    : "bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg shadow-zinc-200/50 dark:shadow-none"
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.isFeatured && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <Globe size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      aria-label="View Source"
                    >
                      <Github size={14} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mt-1">
                      Problem
                    </span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mt-1">
                      Solution
                    </span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] gap-2">
                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mt-1">
                      Impact
                    </span>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-zinc-100 dark:border-zinc-800">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-100 dark:border-zinc-700/50 rounded-md text-[11px] font-mono font-medium text-zinc-500 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-zinc-500"
          >
            No projects match the selected filters.
          </motion.div>
        )}
      </div>
    </section>
  );
};
