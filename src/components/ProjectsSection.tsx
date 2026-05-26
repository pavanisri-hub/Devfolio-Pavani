// src/components/ProjectsSection.tsx
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../lib/motion'

const projects = [
  {
    title: 'Smart Faculty Availability Tracker',
    description:
      'A real-time web application that helps students check faculty availability in staff rooms using ID-card scan based presence tracking.',
    features: [
      'Faculty presence tracking',
      'Department-wise navigation',
      'Student & faculty login',
      'Real-time updates',
      'Search functionality',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/pavanisri-hub',
    live: 'https://pavanisri2005.github.io/Faculty-Tracker/',
  },
  {
    title: 'QuickCheck – AI Certificate Verification Platform',
    description:
      'An AI-assisted student certificate intelligence platform that helps colleges validate and analyze certificates efficiently.',
    features: [
      'AI-based verification',
      'Suspicious certificate detection',
      'Mentor review workflow',
      'Centralized certificate storage',
    ],
    tech: ['React', 'AI APIs', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/pavanisri-hub',
    live: '',
  },
  {
    title: 'Premium Developer Portfolio',
    description:
      'A cinematic modern portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion featuring premium animations and immersive UI.',
    features: [
      'Cinematic hero section',
      'Framer Motion animations',
      'Dark space-tech aesthetic',
      'Responsive experience across devices',
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/pavanisri-hub',
    live: '',
  },
]

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-black/70 px-4 py-16 md:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl space-y-8"
      >
        <motion.div variants={fadeUpVariant} className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
          <p className="text-sm text-slate-300 md:text-base">
            A selection of projects that combine AI, full stack engineering, and modern frontend experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUpVariant}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-black/70 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur transition-transform hover:-translate-y-2 hover:border-sky-400/70"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-2 space-y-1 text-[0.75rem] text-slate-400">
                  {project.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-600/70 bg-slate-900/70 px-3 py-1 text-[0.7rem] font-medium text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full border border-slate-600/70 bg-slate-900/70 px-3 py-1.5 text-center text-xs font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full bg-sky-500 px-3 py-1.5 text-center text-xs font-medium text-black shadow-[0_0_20px_rgba(56,189,248,0.7)] hover:bg-sky-400"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectsSection