function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/80 px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Pavanisri Pamu. All rights reserved.</p>
        <p>Built with React, Vite, Tailwind, and Motion.</p>
      </div>
    </footer>
  )
}

export default Footer