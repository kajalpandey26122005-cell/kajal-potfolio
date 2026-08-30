'use client'

import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeader } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { EvaluatorVisual, NetworkVisual, SensorVisual } from '@/components/project-visuals'
import { projects, type Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

function ProjectVisual({ kind }: { kind: Project['kind'] }) {
  if (kind === 'evaluator') return <EvaluatorVisual />
  if (kind === 'network') return <NetworkVisual />
  return <SensorVisual />
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="group grid gap-6 overflow-hidden rounded-2xl border border-border glass p-5 transition-colors hover:border-term-green/40 sm:p-8 lg:grid-cols-2 lg:items-center">
      <div className={cn('order-1', flip && 'lg:order-2')}>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-term-green/70">PROJECT {project.index}</span>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>
        <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-term-cyan">
          {project.subtitle}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 text-pretty leading-relaxed text-foreground/90">{project.description}</p>

        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 font-mono text-xs text-muted-foreground">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-term-green" aria-hidden />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-term-green px-4 py-2 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              VIEW PROJECT
            </a>
          ) : (
            <span
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-border px-4 py-2 font-mono text-xs text-muted-foreground"
              title="Add a live URL in lib/portfolio-data.ts"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              VIEW PROJECT
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs font-semibold text-foreground/90 transition-colors hover:border-term-cyan/50 hover:text-term-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <GithubIcon className="size-3.5" aria-hidden="true" />
            GITHUB
          </a>
        </div>
      </div>

      <div className={cn('order-2', flip && 'lg:order-1')}>
        <ProjectVisual kind={project.kind} />
      </div>
    </article>
  )
}

export function SectionProjects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader
          command="ls ~/projects"
          title="Projects"
          description="Real systems spanning AI evaluation, full-stack platforms, and embedded hardware."
        />
      </Reveal>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard project={project} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
