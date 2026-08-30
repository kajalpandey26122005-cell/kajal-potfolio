'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function TerminalHeader({
  title,
  path,
  className,
}: {
  title: string
  path?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 border-b border-border/70 bg-secondary/40 px-4 py-2.5',
        className,
      )}
    >
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="size-3 rounded-full bg-destructive/80" />
        <span className="size-3 rounded-full bg-term-amber/80" />
        <span className="size-3 rounded-full bg-term-green/80" />
      </div>
      <div className="flex flex-1 items-center justify-center gap-2 font-mono text-xs">
        <span className="font-medium tracking-wide text-foreground/90">{title}</span>
        {path ? <span className="text-muted-foreground">{path}</span> : null}
      </div>
      <div className="w-12" aria-hidden="true" />
    </div>
  )
}

export function TerminalWindow({
  title,
  path,
  children,
  className,
  scan = false,
}: {
  title: string
  path?: string
  children: ReactNode
  className?: string
  scan?: boolean
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border glass shadow-2xl shadow-black/40',
        scan && 'scanline',
        className,
      )}
    >
      <TerminalHeader title={title} path={path} />
      <div className="relative z-[2]">{children}</div>
    </div>
  )
}

export function Prompt({
  command,
  className,
  user = 'kajal',
  host = 'portfolio',
}: {
  command?: ReactNode
  className?: string
  user?: string
  host?: string
}) {
  return (
    <span className={cn('font-mono text-sm', className)}>
      <span className="text-term-green">{user}</span>
      <span className="text-muted-foreground">@</span>
      <span className="text-term-cyan">{host}</span>
      <span className="text-muted-foreground">:~$</span>
      {command !== undefined ? <span className="ml-2 text-foreground/90">{command}</span> : null}
    </span>
  )
}

export function SectionHeader({
  command,
  title,
  description,
}: {
  command: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <Prompt command={command} />
      <h2 className="text-balance font-sans text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

export function StatusDot({ active = true }: { active?: boolean }) {
  return (
    <span
      className={cn(
        'inline-block size-2 rounded-full',
        active ? 'bg-term-green pulse-dot' : 'bg-muted-foreground/50',
      )}
      aria-hidden="true"
    />
  )
}
