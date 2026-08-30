'use client'

import { MapPin } from 'lucide-react'
import { SectionHeader, StatusDot } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { education } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SectionEducation() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader
          command="cat ~/education.log"
          title="Education"
          description="System logs tracing the academic boot sequence."
        />
      </Reveal>

      <ol className="relative ml-2 space-y-6 border-l border-border pl-6 sm:ml-3 sm:pl-8">
        {education.map((entry, i) => {
          const active = entry.status === 'ACTIVE'
          return (
            <Reveal as="li" key={`${entry.institution}-${entry.tag}`} delay={i * 100}>
              <span
                className={cn(
                  'absolute -left-[6.5px] mt-2 size-3 rounded-full border-2 border-background sm:-left-[7px]',
                  active ? 'bg-term-green pulse-dot' : 'bg-muted-foreground/60',
                )}
                aria-hidden="true"
              />
              <article className="rounded-xl border border-border glass p-5 transition-colors hover:border-term-green/40 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                  <span className="rounded bg-secondary/60 px-2 py-0.5 text-term-cyan">
                    [{entry.tag}]
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <StatusDot active={active} />
                    STATUS: {entry.status}
                  </span>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-sans text-lg font-semibold">{entry.institution}</h3>
                    <p className="mt-0.5 text-sm text-foreground/90">{entry.degree}</p>
                    <p className="text-sm text-muted-foreground">{entry.detail}</p>
                    <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {entry.location} · {entry.period}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-lg border border-border bg-card/60 px-4 py-2 text-center">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {entry.metricLabel}
                    </div>
                    <div className="mt-0.5 font-sans text-2xl font-bold text-term-green">
                      {entry.metric}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
