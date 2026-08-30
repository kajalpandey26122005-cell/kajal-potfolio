'use client'

import { Mic, Award } from 'lucide-react'
import { SectionHeader } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { achievements } from '@/lib/portfolio-data'

export function SectionAchievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader command="achievements --list" title="Achievements" />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal
            key={a.id}
            delay={i * 100}
            className="group relative overflow-hidden rounded-xl border border-border glass p-6 transition-colors hover:border-term-green/40 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md border border-border bg-secondary/50 text-term-green">
                {a.metric ? (
                  <Award className="size-4" aria-hidden="true" />
                ) : (
                  <Mic className="size-4" aria-hidden="true" />
                )}
              </span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {a.title}
              </h3>
            </div>

            {a.metric ? (
              <p className="mt-4 font-sans text-5xl font-bold tracking-tight text-term-green text-glow-green sm:text-6xl">
                {a.metric}
              </p>
            ) : null}

            <p className="mt-4 text-pretty leading-relaxed text-foreground/85">{a.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
