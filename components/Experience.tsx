import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 w-full max-w-4xl px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">Professional Experience</h2>
         <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 rounded-full mb-6"></div>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">
            AI in research and LLM security
        </p>
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative grid grid-cols-1 gap-8 p-0 sm:grid-cols-12 sm:gap-8 items-start"
          >
            {/* Timeline Numbering Column (Consistent with Projects) */}
            <div className="hidden sm:flex sm:col-span-2 flex-col items-end pt-1">
                 <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mb-2">0{index + 1}</span>
                 {/* Vertical line that lights up on hover */}
                 <div className="w-px h-full min-h-[100px] bg-zinc-200 dark:bg-zinc-800 group-hover:bg-indigo-400 dark:group-hover:bg-indigo-500 transition-colors duration-500"></div>
            </div>

            {/* Content Card */}
            <div className="sm:col-span-10 relative border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg shadow-zinc-200/50 dark:shadow-none">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                     <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{exp.company}</span>
                     <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-medium border border-zinc-200 dark:border-zinc-700/50">
                        {exp.type}
                     </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 px-2.5 py-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-md border border-zinc-100 dark:border-zinc-800 self-start sm:self-auto mt-2 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-4">
                <ul className="space-y-3">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed group/item">
                       <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors duration-300"></span>
                       <span dangerouslySetInnerHTML={{ 
                          __html: item
                            .replace("7.12 minutes", "<span class='text-zinc-900 dark:text-zinc-200 font-semibold'>7.12 minutes</span>")
                            .replace("52.7%", "<span class='text-zinc-900 dark:text-zinc-200 font-semibold'>52.7%</span>") 
                        }} 
                       />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};