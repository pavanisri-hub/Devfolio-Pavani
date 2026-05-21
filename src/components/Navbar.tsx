function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          <span className="text-slate-100">Pavanisri</span>
          <span className="ml-1 text-sky-400">.dev</span>
        </a>

        <div className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Mobile placeholder: we’ll make this a hamburger later */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-1 text-xs font-medium text-slate-200 md:hidden"
        >
          Menu
        </button>
      </nav>
    </header>
  )
}

export default Navbar