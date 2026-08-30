'use client'

import { ChevronRight } from 'lucide-react'
import { SectionHeader, Prompt } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { skillCategories } from '@/lib/portfolio-data'

export function SectionSkills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader
          command="./skills --list"
          title="Skills"
          description="Interactive modules. Hover a card to inspect its contents."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal
            key={cat.id}
            delay={i * 80}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-border glass transition-all hover:border-term-green/50 hover:shadow-[0_10px_40px_-16px_var(--term-green)]"
          >
            <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/40 px-4 py-2.5">
              <span className="size-2 rounded-full bg-term-green/70 pulse-dot" aria-hidden="true" />
              <span className="font-sans text-sm font-semibold tracking-tight">{cat.title}</span>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <Prompt command={cat.command} className="text-xs" />
              <ul className="mt-3 flex flex-1 flex-col gap-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-sm text-foreground/90"
                  >
                    <ChevronRight
                      className="size-3.5 text-term-green transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-h-0 overflow-hidden text-xs leading-relaxed text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                {cat.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
