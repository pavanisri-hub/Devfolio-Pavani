const projects = [
  {
    title: 'Tenantwise Analytics',
    description:
      'Multi-tenant SaaS analytics dashboard with role-based access, async jobs, and rich visualizations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    github: 'https://github.com/your-username/tenantwise-analytics',
  },
  {
    title: 'Real Estate Finder',
    description:
      'Property search app with interactive maps, filters, and responsive UI optimized for mobile.',
    tech: ['React', 'TypeScript', 'Map APIs', 'Node.js'],
    github: 'https://github.com/your-username/real-estate-finder',
  },
  {
    title: 'Snippet Studio',
    description:
      'Code snippet manager with Monaco editor, tags, GitHub Gist integration, and dark, app-like UI.',
    tech: ['React', 'Vite', 'Tailwind', 'Zustand'],
    github: 'https://github.com/your-username/snippet-studio',
  },
]

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-white/5 bg-black/60 px-4 py-16 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
          <p className="text-sm text-slate-300 md:text-base">
            A few real-world projects that show how I think about architecture, DX, and UX.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-slate-900/40 p-5 shadow-[0_0_30px_rgba(15,23,42,0.9)]"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-slate-600/70 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-sky-400 hover:text-sky-300"
                >
                  View on GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection