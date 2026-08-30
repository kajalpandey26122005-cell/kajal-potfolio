'use client'

import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="font-mono text-sm">
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-term-green pulse-dot" aria-hidden="true" />
            <span className="text-foreground">KAJAL</span>
            <span className="text-term-green">.OS</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {year} {profile.name}. Built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <FooterLink href={profile.contact.github} label="GitHub">
            <GithubIcon className="size-4" aria-hidden="true" />
          </FooterLink>
          <FooterLink href={profile.contact.linkedin} label="LinkedIn">
            <LinkedinIcon className="size-4" aria-hidden="true" />
          </FooterLink>
          <FooterLink href={`mailto:${profile.contact.email}`} label="Email" external={false}>
            <Mail className="size-4" aria-hidden="true" />
          </FooterLink>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-1 inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-term-green/50 hover:text-term-green focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string
  label: string
  external?: boolean
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-term-cyan/50 hover:text-term-cyan focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    >
      {children}
    </a>
  )
}
