'use client'

import { useEffect, useState } from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { TerminalWindow, Prompt } from '@/components/terminal-ui'
import { useTypewriter } from '@/lib/hooks'
import { profile, systemStatus, navSections } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function Hero() {
  const { output, done } = useTypewriter(profile.name, 90, 700)
  const [step, setStep] = useState(0)

  // Advance reveal steps once the name finishes typing.
  useEffect(() => {
    if (!done) return
    const timers = [200, 600, 1000, 1500].map((delay, i) =>
      setTimeout(() => setStep(i + 1), delay),
    )
    return () => timers.forEach(clearTimeout)
  }, [done])

  return (
    <section
      id="top"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6"
    >
      <TerminalWindow title="KAJAL.OS" path="~/portfolio" scan className="w-full">
        <div className="space-y-6 p-5 font-mono text-sm sm:p-8">
          {/* whoami */}
          <div className="space-y-3">
            <Prompt command="whoami" />
            <p
              className={cn(
                'font-sans text-4xl font-bold tracking-tight text-term-green text-glow-green sm:text-6xl',
                !done && 'cursor-blink',
              )}
            >
              {output || '\u00A0'}
            </p>
            <div
              className={cn(
                'space-y-1 transition-opacity duration-500',
                step >= 1 ? 'opacity-100' : 'opacity-0',
              )}
            >
              <p className="text-base text-foreground/90 sm:text-lg">{profile.role}</p>
              <p className="text-sm text-muted-foreground">{profile.tagline}</p>
            </div>
          </div>

          {/* system.status */}
          <div
            className={cn(
              'space-y-3 transition-opacity duration-500',
              step >= 2 ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Prompt command="system.status" />
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-5">
              {systemStatus.map((s) => (
                <div key={s.label} className="bg-card/80 px-3 py-2.5">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-term-green">
                    <span className="size-1.5 rounded-full bg-term-green pulse-dot" aria-hidden />
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* explore */}
          <div
            className={cn(
              'space-y-3 transition-opacity duration-500',
              step >= 3 ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Prompt command="./explore" />
            <ul className="flex flex-wrap gap-2">
              {navSections.map((s) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    className="inline-flex rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs uppercase tracking-wide text-muted-foreground transition-all hover:border-term-green/50 hover:text-term-green hover:shadow-[0_0_18px_-6px_var(--term-green)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <span className="mr-1 text-term-green/50" aria-hidden>
                      [
                    </span>
                    {s}
                    <span className="ml-1 text-term-green/50" aria-hidden>
                      ]
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* connect */}
          <div
            className={cn(
              'space-y-3 transition-opacity duration-500',
              step >= 4 ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Prompt command="./connect" />
            <div className="flex flex-wrap gap-2">
              <ConnectLink
                href={profile.contact.github}
                icon={<GithubIcon className="size-4" />}
                label="GitHub"
              />
              <ConnectLink
                href={profile.contact.linkedin}
                icon={<LinkedinIcon className="size-4" />}
                label="LinkedIn"
              />
              <ConnectLink
                href={`mailto:${profile.contact.email}`}
                icon={<Mail className="size-4" />}
                label="Email"
                external={false}
              />
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  )
}

function ConnectLink({
  href,
  icon,
  label,
  external = true,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-3.5 py-2 text-xs text-foreground/90 transition-all hover:border-term-cyan/50 hover:text-term-cyan hover:shadow-[0_0_18px_-6px_var(--term-cyan)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    >
      <span className="text-term-cyan/80 transition-colors group-hover:text-term-cyan">{icon}</span>
      {label}
      {external ? (
        <ArrowUpRight className="size-3.5 text-muted-foreground transition-colors group-hover:text-term-cyan" />
      ) : null}
    </a>
  )
}
