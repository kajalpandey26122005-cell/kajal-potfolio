'use client'

import { useEffect, useRef, useState } from 'react'
import { TerminalWindow, Prompt, SectionHeader } from '@/components/terminal-ui'
import { Reveal } from '@/components/reveal'
import { profile, skillCategories, projects } from '@/lib/portfolio-data'

type Line = { type: 'input' | 'output' | 'error'; text: string }

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    'Available commands:',
    '  about       — who is Kajal Pandey',
    '  skills      — list technical skills',
    '  projects    — list featured projects',
    '  contact     — get contact links',
    '  resume      — how to reach out',
    '  clear       — clear the terminal',
    '  help        — show this message',
  ],
  about: () => [profile.about],
  skills: () =>
    skillCategories.map((c) => `${c.title.padEnd(24)} ${c.items.join(', ')}`),
  projects: () => projects.map((p) => `[${p.index}] ${p.title} — ${p.subtitle}`),
  contact: () => [
    `github    ${profile.contact.github}`,
    `linkedin  ${profile.contact.linkedin}`,
    `email     ${profile.contact.email}`,
  ],
  resume: () => [
    `Reach out anytime at ${profile.contact.email}`,
    'Open to internships, collaborations, and learning opportunities.',
  ],
}

const SUGGESTIONS = ['help', 'about', 'skills', 'projects', 'contact', 'clear']

export function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: "Welcome to KAJAL.OS. Type 'help' to list commands." },
  ])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIndex, setHistIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    setHistory((h) => [...h, raw])
    setHistIndex(-1)

    if (cmd === 'clear') {
      setLines([])
      return
    }

    const next: Line[] = [{ type: 'input', text: raw }]
    const handler = COMMANDS[cmd]
    if (handler) {
      next.push(...handler().map((text) => ({ type: 'output' as const, text })))
    } else {
      next.push({
        type: 'error',
        text: `command not found: ${cmd} — type 'help' for options.`,
      })
    }
    setLines((prev) => [...prev, ...next])
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing || e.keyCode === 229) return
    if (e.key === 'Enter') {
      run(value)
      setValue('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const idx = histIndex === -1 ? history.length - 1 : Math.max(0, histIndex - 1)
      setHistIndex(idx)
      setValue(history[idx])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIndex === -1) return
      const idx = histIndex + 1
      if (idx >= history.length) {
        setHistIndex(-1)
        setValue('')
      } else {
        setHistIndex(idx)
        setValue(history[idx])
      }
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <Reveal as="section">
        <SectionHeader
          command="./contact --interactive"
          title="Let's Connect"
          description="A live shell. Type a command or tap a suggestion to explore, then reach out."
        />
      </Reveal>

      <Reveal>
        <TerminalWindow title="kajal@portfolio: ~/shell" scan>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <div
            className="flex h-80 flex-col"
            onClick={() => inputRef.current?.focus()}
          >
            <div
              ref={scrollRef}
              className="flex-1 space-y-1.5 overflow-y-auto p-4 font-mono text-sm sm:p-5"
            >
              {lines.map((line, i) => {
                if (line.type === 'input') {
                  return <Prompt key={i} command={line.text} className="text-xs sm:text-sm" />
                }
                return (
                  <p
                    key={i}
                    className={
                      line.type === 'error'
                        ? 'whitespace-pre-wrap text-destructive'
                        : 'whitespace-pre-wrap text-foreground/85'
                    }
                  >
                    {line.text}
                  </p>
                )
              })}

              <div className="flex items-center gap-2">
                <Prompt className="text-xs sm:text-sm" />
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  aria-label="Terminal command input"
                  className="flex-1 bg-transparent font-mono text-sm text-term-green caret-term-green outline-none"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-border/70 bg-secondary/30 p-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    run(s)
                    inputRef.current?.focus()
                  }}
                  className="rounded border border-border bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-term-green/50 hover:text-term-green focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </TerminalWindow>
      </Reveal>
    </section>
  )
}
