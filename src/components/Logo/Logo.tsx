import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  /** kept for API compatibility with previous <img> logo */
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

/**
 * Carry wordmark — a rounded "squircle" mark + the name, both in currentColor
 * so it adapts to light/dark and to whatever color the parent sets.
 */
export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <span className={clsx('inline-flex items-center gap-2.5', className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <g clipPath="url(#carry-logo-clip)">
          <path
            d="M16.5714 2.85714H11.4286C6.69471 2.85714 2.85714 6.69471 2.85714 11.4286V16.5714C2.85714 21.3053 6.69471 25.1429 11.4286 25.1429H16.5714C21.3053 25.1429 25.1429 21.3053 25.1429 16.5714V11.4286C25.1429 6.69471 21.3053 2.85714 16.5714 2.85714ZM11.4286 0C5.11675 0 0 5.11675 0 11.4286V16.5714C0 22.8833 5.11675 28 11.4286 28H16.5714C22.8833 28 28 22.8833 28 16.5714V11.4286C28 5.11675 22.8833 0 16.5714 0H11.4286Z"
            fill="currentColor"
          />
          <path
            d="M14 18C16.2091 18 18 16.2091 18 14C18 11.7909 16.2091 10 14 10C11.7909 10 10 11.7909 10 14C10 16.2091 11.7909 18 14 18Z"
            fill="var(--color-primary)"
          />
          <path d="M22 15V21H16" fill="var(--color-primary)" />
        </g>
        <defs>
          <clipPath id="carry-logo-clip">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="text-[1.35rem] font-bold leading-none tracking-[-0.02em]">Carry</span>
    </span>
  )
}
