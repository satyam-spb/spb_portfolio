import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import { SIGNAL_PILLS, CONTACT_INFO } from '../constants';

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden w-full group pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background Dot Pattern with Spotlight */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-zinc-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Light Mode: Subtle Yellow Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 dark:opacity-0 transition duration-300 group-hover:opacity-100 dark:group-hover:opacity-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(250, 204, 21, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        {/* Dark Mode: Subtle White Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-0 dark:group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
                radial-gradient(
                  650px circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.08),
                  transparent 80%
                )
              `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability & Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-50/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm">
            <div className="flex items-center gap-2 pr-3 border-r border-zinc-200 dark:border-zinc-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 uppercase tracking-wide">
                Available
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <MapPin size={12} />
              <span>{CONTACT_INFO.location} — Open to Relocation</span>
            </div>
          </div>
        </motion.div>

        {/* Prominent Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-4"
        >
          <span className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Hi, I'm Satyam Pratik Bharti.
          </span>
        </motion.div>

        {/* Outcome-Driven Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]"
        >
          Building fast, seamless <br className="hidden md:block" />
          <span className="text-zinc-400 dark:text-zinc-500">
            AI products for the web.
          </span>
        </motion.h1>

        {/* Quantifiable Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
        >
          Full-Stack AI Engineer focused on high-reliability backend systems and
          adversarial NLP. Proven track record of optimizing fine-tuning
          pipelines (Samsung PRISM) and deploying secure RAG architectures.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4 mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-zinc-900 dark:bg-zinc-100 px-8 font-medium text-zinc-50 dark:text-zinc-900 transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-lg shadow-zinc-500/10"
            >
              <span>Open for AI Engineering Roles →</span>
            </a>
            <a
              href="./Satyam_spb_D.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-8 font-medium text-zinc-900 dark:text-zinc-100 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </div>

          <a
            href="#projects"
            className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 flex items-center gap-2 transition-colors py-2"
          >
            <span>See my best work</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Achievements / Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-zinc-200 dark:border-zinc-800/60 pt-8"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
            Proven Outcomes
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {SIGNAL_PILLS.map((signal, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                {signal}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};