'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = ['about', 'projects', 'skills', 'education', 'contact'] as const

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-border/70 glass' : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-wide"
        >
          <Terminal className="size-4 text-term-green" aria-hidden="true" />
          <span className="text-foreground">KAJAL</span>
          <span className="text-term-green">.OS</span>
        </a>

        <ul className="hidden items-center gap-1 font-mono text-sm md:flex">
          {NAV_ITEMS.map((item, i) => (
            <li key={item} className="flex items-center">
              {i > 0 ? (
                <span className="px-1 text-muted-foreground/50" aria-hidden="true">
                  /
                </span>
              ) : null}
              <a
                href={`#${item}`}
                className="rounded px-2 py-1 uppercase tracking-wide text-muted-foreground transition-colors hover:text-term-green focus-visible:text-term-green focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border/70 glass md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 font-mono text-sm sm:px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2.5 uppercase tracking-wide text-muted-foreground transition-colors hover:text-term-green focus-visible:text-term-green focus-visible:outline-none"
                >
                  <span className="mr-2 text-term-green/60" aria-hidden="true">
                    ›
                  </span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
