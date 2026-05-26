// src/components/AboutSection.tsx
import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../lib/motion'

function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-black/70 px-4 py-16 md:px-6 lg:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start"
      >
        {/* Left: bio */}
        <motion.div variants={fadeUpVariant} className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">About me</h2>
          <p className="text-sm text-slate-300 md:text-base">
            I am a passionate 3rd-year B.Tech student specializing in Artificial Intelligence &amp; Machine
            Learning at Aditya College of Engineering and Technology.
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            I enjoy building modern digital products that combine intelligent systems with beautiful user
            experiences. My interests lie in AI, full stack development, frontend engineering, and creating
            real-world impactful solutions.
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            I constantly explore new technologies, improve my development skills, and work on innovative
            projects that solve practical challenges.
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            I believe in continuous learning, creative thinking, and building technology that creates meaningful
            impact.
          </p>

          <motion.div
            variants={fadeUpVariant}
            className="mt-4 flex flex-wrap gap-2"
          >
            {['Problem Solver', 'Quick Learner', 'Team Player', 'Creative Thinker', 'Innovative Builder'].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-600/70 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {tag}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Right: education timeline */}
        <motion.div
          variants={fadeUpVariant}
          className="flex-1 space-y-4 rounded-2xl border border-white/10 bg-black/60 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Education
          </h3>
          <div className="space-y-5">
            <div className="relative pl-5">
              <div className="absolute left-0 top-1 h-3 w-3 rounded-full border border-sky-400 bg-sky-500/80" />
              <h4 className="text-sm font-semibold text-slate-100">
                B.Tech – AIML (2023–2027)
              </h4>
              <p className="text-xs text-slate-400">
                Aditya College of Engineering and Technology • Currently pursuing 3rd Year
              </p>
            </div>
            <div className="relative pl-5">
              <div className="absolute left-0 top-1 h-3 w-3 rounded-full border border-slate-400 bg-slate-500/70" />
              <h4 className="text-sm font-semibold text-slate-100">
                Intermediate – MPC
              </h4>
              <p className="text-xs text-slate-400">
                Sri Chaitanya Junior College – Amalapuram
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutSection