'use client'

import type { ReactNode } from 'react'
import { useReveal } from '@/lib/hooks'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'section'
}) {
  const ref = useReveal<HTMLElement>()
  return (
    // @ts-expect-error -- dynamic tag with a forwarded ref
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
