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
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M17.7551 3.06122H12.2449C7.1729 3.06122 3.06122 7.1729 3.06122 12.2449V17.7551C3.06122 22.8271 7.1729 26.9388 12.2449 26.9388H17.7551C22.8271 26.9388 26.9388 22.8271 26.9388 17.7551V12.2449C26.9388 7.1729 22.8271 3.06122 17.7551 3.06122ZM12.2449 0C5.48223 0 0 5.48223 0 12.2449V17.7551C0 24.5178 5.48223 30 12.2449 30H17.7551C24.5178 30 30 24.5178 30 17.7551V12.2449C30 5.48223 24.5178 0 17.7551 0H12.2449Z"
          fill="currentColor"
        />
        <circle cx="15" cy="15" r="4.5" fill="var(--color-primary)" />
      </svg>
      <span className="text-[1.35rem] font-bold leading-none tracking-[-0.02em]">Carry</span>
    </span>
  )
}
