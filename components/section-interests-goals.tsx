'use client'

import { SectionHeader, Prompt } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { interests, mission, currentFocus } from '@/lib/portfolio-data'

export function SectionInterests() {
  return (
    <section id="interests" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader command="cat ~/interests.txt" title="Interests" />
      </Reveal>

      <Reveal className="flex flex-wrap gap-2.5">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-border bg-secondary/40 px-4 py-2 font-mono text-xs text-foreground/90 transition-all hover:border-term-green/50 hover:text-term-green hover:shadow-[0_0_18px_-6px_var(--term-green)]"
          >
            {interest}
          </span>
        ))}
      </Reveal>
    </section>
  )
}

export function SectionGoals() {
  return (
    <section id="goals" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader command="cat ~/mission.md" title="Goals & Mission" />
      </Reveal>

      <Reveal className="overflow-hidden rounded-2xl border border-border glass">
        <div className="flex items-center justify-between border-b border-border/70 bg-secondary/40 px-5 py-3 font-mono text-xs">
          <span className="text-muted-foreground">~/mission.md</span>
          <span className="flex items-center gap-1.5 text-term-amber">
            <span className="size-1.5 rounded-full bg-term-amber pulse-dot" aria-hidden="true" />
            {mission.status}
          </span>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div>
            <Prompt command="cat mission" className="text-xs" />
            <p className="mt-3 text-pretty text-lg leading-relaxed text-foreground/90">
              {mission.statement}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              objective.pipeline
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {mission.objective.map((obj, i) => (
                <span key={obj} className="flex items-center gap-2">
                  <span className="rounded-md border border-term-green/40 bg-term-green/10 px-3 py-1.5 font-mono text-xs font-semibold text-term-green">
                    {obj}
                  </span>
                  {i < mission.objective.length - 1 ? (
                    <span className="font-mono text-term-green/50" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              current.focus
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {currentFocus.map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs text-term-cyan"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
