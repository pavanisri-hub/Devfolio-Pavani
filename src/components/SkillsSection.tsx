const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'Docker',
  'PostgreSQL',
  'Git & GitHub',
]

function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 bg-black px-4 py-16 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold md:text-3xl">Skills</h2>
          <p className="text-sm text-slate-300 md:text-base">
            A snapshot of the technologies I use to design, build, and ship modern web applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-3 text-center text-sm font-medium text-slate-100 shadow-[0_0_20px_rgba(15,23,42,0.7)]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection