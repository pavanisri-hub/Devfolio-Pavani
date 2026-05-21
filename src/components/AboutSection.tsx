function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-white/5 bg-black/60 px-4 py-16 md:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <div className="h-32 w-32 flex-shrink-0 rounded-2xl border border-slate-700 bg-gradient-to-br from-sky-500/40 via-slate-900 to-fuchsia-500/40 md:h-40 md:w-40" />
        <div className="space-y-4 text-slate-200">
          <h2 className="text-2xl font-semibold md:text-3xl">About me</h2>
          <p className="text-sm text-slate-300 md:text-base">
            I&apos;m a full stack developer based in Hyderabad who enjoys building clean, performant products
            with modern JavaScript, TypeScript, and cloud tooling.
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            I&apos;ve worked extensively with React, Next.js, Tailwind, APIs, Docker, and ML tooling, focusing
            on developer experience and production-ready architecture.
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            Right now I&apos;m leveling up my skills in LLM integrations, frontend performance, and
            end-to-end automation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection