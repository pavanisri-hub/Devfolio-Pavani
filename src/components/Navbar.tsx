import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-40',
        'border-b transition-colors',
        isScrolled ? 'bg-black/75 backdrop-blur-xl border-white/10' : 'bg-black/10 backdrop-blur border-transparent',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5 lg:px-8">
        <a href="#hero" className="text-xl font-semibold tracking-tight md:text-2xl">
  <span className="text-slate-100">Pamu</span>
  <span className="ml-1 text-sky-400">Pavani Sri</span>
</a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 text-[0.9rem] font-medium text-slate-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative pb-1 text-slate-300 transition-colors hover:text-sky-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-medium text-slate-100 shadow-[0_0_20px_rgba(15,23,42,0.9)] backdrop-blur md:hidden"        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-3 text-sm text-slate-200 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-slate-200 hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar