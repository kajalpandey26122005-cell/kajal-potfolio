'use client'

import { SectionHeader } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { profile, aboutStats } from '@/lib/portfolio-data'

export function SectionAbout() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader command="whoami" title="About" />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="rounded-xl border border-border glass p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-term-green">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/90">
            {profile.about}
          </p>
        </Reveal>

        <Reveal delay={120} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border glass p-5 transition-colors hover:border-term-green/40"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
              <div className="mt-2 font-sans text-xl font-semibold text-term-green">
                {stat.value}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
