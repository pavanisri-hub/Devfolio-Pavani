function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center justify-center px-4 pt-24 md:px-6 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:text-left">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-400">
            Full Stack Developer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-6xl">
            Hi, I&apos;m<span className="text-sky-400"> Pavanisri</span>
          </h1>
          <p className="max-w-xl text-base text-slate-300 md:text-lg">
            I build fast, scalable web applications with React, TypeScript, and modern tooling.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-sky-500 px-6 py-2 text-sm font-medium text-black shadow-lg shadow-sky-500/40 hover:bg-sky-400"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-6 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="mx-auto h-40 w-40 rounded-3xl border border-slate-700 bg-gradient-to-br from-sky-500/40 via-slate-900 to-fuchsia-500/30 shadow-[0_0_80px_rgba(56,189,248,0.4)] md:h-56 md:w-56" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection