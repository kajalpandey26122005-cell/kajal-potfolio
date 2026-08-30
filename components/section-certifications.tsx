'use client'

import { BadgeCheck, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { certifications } from '@/lib/portfolio-data'

export function SectionCertifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader
          command="cat ~/certifications.json"
          title="Certifications"
          description="Verified coursework and credentials."
        />
      </Reveal>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Wrapper = cert.url ? 'a' : 'div'
          return (
            <Reveal as="li" key={`${cert.title}-${cert.issuer}`} delay={i * 60}>
              <Wrapper
                {...(cert.url
                  ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group flex h-full flex-col rounded-xl border border-border glass p-5 transition-colors hover:border-term-green/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <BadgeCheck
                    className="size-5 shrink-0 text-term-green"
                    aria-hidden="true"
                  />
                  {cert.url ? (
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-term-green" />
                  ) : null}
                </div>
                <h3 className="mt-3 text-pretty font-sans text-sm font-semibold leading-snug">
                  {cert.title}
                </h3>
                <div className="mt-auto pt-3">
                  <p className="font-mono text-[11px] text-term-cyan">{cert.issuer}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {cert.date}
                  </p>
                </div>
              </Wrapper>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
