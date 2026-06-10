import { cn } from '@/utilities/ui'
import React from 'react'

/**
 * Placeholder frame standing in for product screenshots / videos.
 * Mirrors Dona's empty colored video frames: a soft rounded surface
 * with a centered play glyph. Swap for real <Media> later.
 */
export const Placeholder: React.FC<{
  className?: string
  /** aspect ratio as width/height, e.g. 16/9 */
  ratio?: number
  tone?: 'default' | 'screen'
  label?: string
}> = ({ className, ratio, tone = 'default', label }) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-[20px]',
        tone === 'screen' ? 'bg-[#EFF2F5] dark:bg-secondary' : 'bg-[#F4F4F5] dark:bg-card',
        className,
      )}
      style={ratio ? { aspectRatio: String(ratio) } : undefined}
    >
      {/* subtle grid sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,143,253,0.08),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-3 text-muted-foreground">
        <span className="flex size-16 items-center justify-center rounded-full bg-background/70 shadow-sm backdrop-blur-sm">
          <svg viewBox="0 0 16 16" fill="none" className="size-5 translate-x-[1px]">
            <path
              d="M3 13.2591V2.7409C3 1.55552 4.31017 0.838508 5.30858 1.47749L13.5259 6.73659C14.4478 7.3266 14.4478 8.6734 13.5259 9.26341L5.30858 14.5225C4.31017 15.1615 3 14.4445 3 13.2591Z"
              fill="currentColor"
            />
          </svg>
        </span>
        {label ? <span className="text-sm font-medium">{label}</span> : null}
      </div>
    </div>
  )
}
