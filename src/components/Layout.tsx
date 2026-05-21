import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      {/* Starfield background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937,_#020617_60%,_#000000)]" />
        <div className="starfield absolute inset-0 opacity-60" />
        <div className="starfield-slow absolute inset-0 opacity-40" />
      </div>

      {/* Content overlay gradient for depth */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
export default Layout