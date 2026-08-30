'use client'

import { ArrowDown, Bluetooth } from 'lucide-react'
import { evaluatorCategories, networkNodes, sensors } from '@/lib/portfolio-data'

/** Visual scoring interface for the AI Response Evaluator (no fabricated scores). */
export function EvaluatorVisual() {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-4">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>evaluation.criteria</span>
        <span className="text-term-green">scoring engine</span>
      </div>
      <ul className="space-y-2.5">
        {evaluatorCategories.map((cat) => (
          <li key={cat} className="flex items-center gap-3">
            <span className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-wide text-foreground/80 sm:w-40">
              {cat}
            </span>
            <span
              className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-secondary"
              aria-hidden="true"
            >
              <span className="absolute inset-y-0 left-0 w-full animate-pulse bg-gradient-to-r from-term-green/60 via-term-cyan/40 to-transparent" />
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">analyzed</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Animated donor → NGO → volunteer → delivery flow for Food Rescue Network. */
export function NetworkVisual() {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-4">
      <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        distribution.flow
      </div>
      <div className="flex flex-col items-center gap-1">
        {networkNodes.map((node, i) => (
          <div key={node} className="flex w-full flex-col items-center">
            <div className="w-full max-w-[220px] rounded-md border border-border bg-secondary/50 px-4 py-2 text-center font-mono text-xs tracking-wide text-foreground/90 transition-colors hover:border-term-green/50 hover:text-term-green">
              {node}
            </div>
            {i < networkNodes.length - 1 ? (
              <ArrowDown
                className="my-1 size-4 text-term-green/70 pulse-dot"
                aria-hidden="true"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Live sensor-monitoring dashboard for Smart Clean Table. */
export function SensorVisual() {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-4">
      <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        sensor.monitor
      </div>
      <ul className="space-y-2">
        {sensors.map((sensor, i) => {
          const connected = sensor.status === 'CONNECTED'
          return (
            <li
              key={sensor.name}
              className="flex items-center justify-between rounded-md border border-border/70 bg-secondary/30 px-3 py-2"
            >
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-foreground/85">
                {connected ? (
                  <Bluetooth className="size-3.5 text-term-cyan" aria-hidden="true" />
                ) : (
                  <span
                    className="size-1.5 rounded-full bg-term-green pulse-dot"
                    style={{ animationDelay: `${i * 0.2}s` }}
                    aria-hidden="true"
                  />
                )}
                {sensor.name}
              </span>
              <span
                className={`flex items-center gap-1.5 font-mono text-[10px] font-medium ${connected ? 'text-term-cyan' : 'text-term-green'}`}
              >
                {sensor.status}
              </span>
            </li>
          )
        })}
      </ul>
      {/* subtle animated signal bars */}
      <div className="mt-3 flex items-end gap-1" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="w-full flex-1 rounded-sm bg-term-green/30 pulse-dot"
            style={{
              height: `${8 + ((i * 7) % 18)}px`,
              animationDelay: `${(i % 6) * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
