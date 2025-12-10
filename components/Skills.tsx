import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 w-full max-w-4xl px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">Tech Stack & Skills</h2>
        <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 rounded-full mb-6"></div>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">
           Tools and technologies I use to build scalable, production-ready AI systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};