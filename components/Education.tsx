import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 w-full max-w-4xl px-6">
        <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">Education</h2>
            <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 p-0 sm:grid-cols-12 sm:gap-8 items-start">
            {/* Sidebar / Icon column to match timeline width of other sections */}
            <div className="hidden sm:flex sm:col-span-2 justify-end pt-1">
                 <div className="p-2 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm">
                    <GraduationCap className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                </div>
            </div>

            {/* Content Card */}
            <div className="sm:col-span-10 relative border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">{EDUCATION.degree}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
                            {EDUCATION.university}
                        </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 px-3 py-1 bg-white dark:bg-zinc-800 rounded-md border border-zinc-100 dark:border-zinc-700">
                        {EDUCATION.period}
                    </span>
                </div>
                
                <div className="flex items-center gap-3 mt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Performance</div>
                    <div className="h-px flex-grow bg-zinc-200 dark:bg-zinc-700/50"></div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md">
                        CGPA: {EDUCATION.cgpa}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};