import { motion } from 'framer-motion'
import { fadeUpVariant, staggerContainer } from '../lib/motion'

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center px-4 pt-24 md:px-6 lg:px-8"
    >
      {/* Soft nebula glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16"
      >
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.p
            variants={fadeUpVariant}
            className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-400/90"
          >
            AI-Driven Full Stack Developer • AIML Student
          </motion.p>

          <motion.h1
            variants={fadeUpVariant}
            className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-[3.3rem]"
          >
            Pamu Pavani Sri
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="max-w-xl text-sm text-slate-300 md:text-base"
          >
            I design and build intelligent digital experiences by combining AI, full stack development, and
            modern frontend engineering to solve real-world problems.
          </motion.p>

          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap justify-center gap-3 text-xs md:justify-start"
          >
            <span className="rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-sky-200">
              AI-Driven Full Stack Developer
            </span>
            <span className="rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 text-fuchsia-200">
              AIML Student
            </span>
            <span className="rounded-full border border-slate-500/70 bg-slate-900/70 px-3 py-1 text-slate-200">
              Modern Frontend Engineer
            </span>
          </motion.div>

          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-6 py-2.5 text-sm font-medium text-black shadow-[0_0_40px_rgba(56,189,248,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-sky-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-600/80 bg-black/40 px-6 py-2.5 text-sm font-medium text-slate-100 shadow-[0_0_30px_rgba(15,23,42,0.9)] hover:border-sky-400 hover:text-sky-300"
            >
              Contact Me
            </a>
            <a
              href="/Pamu-Pavani-Sri-Resume.pdf"
              className="rounded-full border border-slate-700/80 bg-slate-900/50 px-6 py-2.5 text-sm font-medium text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-200"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Floating futuristic visual element */}
        {/* Floating futuristic image frame */}
{/* Floating futuristic image frame */}
<motion.div
  variants={fadeUpVariant}
  className="flex-1"
>
  <div className="relative mx-auto h-56 w-56 max-w-xs rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/30 via-slate-950 to-fuchsia-500/30 p-[1px] shadow-[0_0_120px_rgba(56,189,248,0.6)] md:h-72 md:w-72">
    <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-black/80 backdrop-blur-xl">
      <img
        src="/pavani-avatar.jpeg"
        alt="Portrait of Pamu Pavani Sri"
        className="h-full w-full object-cover object-center md:object-[50%_20%]"
      />
      {/* subtle overlay border */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] border border-white/10" />
      {/* small floating label */}
      <div className="pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-sky-500/40 bg-black/80 px-3 py-1 text-[0.65rem] text-sky-100">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span>Future AI Product Builder</span>
      </div>
    </div>
  </div>
</motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] text-slate-400">
        <span>Scroll to explore</span>
        <div className="h-9 w-[1px] overflow-hidden rounded-full bg-slate-600/40">
          <div className="animate-[scrollline_1.4s_ease-in-out_infinite] h-4 w-full bg-sky-400" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection