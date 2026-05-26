// src/components/Footer.tsx
function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/90 px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-slate-300">
            Pamu Pavani Sri
          </p>
          <p>AI-Driven Full Stack Developer</p>
        </div>
        <div className="flex items-center gap-4 text-[0.7rem]">
          <a
            href="https://github.com/pavanisri-hub"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-sky-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-[0.7rem] text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} Pamu Pavani Sri. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer