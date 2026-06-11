'use client'

import { Button } from '@/components/ui/button'
import { downloads } from '@/config/downloads'
import React, { useEffect, useRef, useState } from 'react'

type State = 'idle' | 3 | 2 | 1 | 'downloading'

export const DownloadButton: React.FC<{ className?: string }> = ({ className }) => {
  const [state, setState] = useState<State>('idle')
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => () => { timers.current.forEach(clearTimeout) }, [])

  const start = () => {
    if (state !== 'idle') return
    setState(3)
    timers.current.push(setTimeout(() => setState(2), 1000))
    timers.current.push(setTimeout(() => setState(1), 2000))
    timers.current.push(setTimeout(() => {
      setState('downloading')
      const a = document.createElement('a')
      a.href = downloads.mac.url
      a.download = ''
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      timers.current.push(setTimeout(() => setState('idle'), 3000))
    }, 3000))
  }

  const isCountdown = state === 3 || state === 2 || state === 1

  return (
    <Button
      size="lg"
      onClick={start}
      disabled={state === 'downloading'}
      className={className}
      aria-live="polite"
    >
      {isCountdown ? (
        <span className="flex items-center gap-2.5">
          <span className="flex size-6 items-center justify-center rounded-full bg-white/20 text-sm font-bold tabular-nums">
            {state}
          </span>
          Starting download…
        </span>
      ) : state === 'downloading' ? (
        <span className="flex items-center gap-2.5">
          <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Downloading…
        </span>
      ) : (
        <span className="flex items-center gap-2.5">
          <AppleIcon />
          Download for Mac — Free
        </span>
      )}
    </Button>
  )
}

const AppleIcon: React.FC = () => (
  <svg viewBox="0 0 14 17" fill="currentColor" className="size-[15px] shrink-0">
    <path d="M13.18 12.66c-.27.61-.59 1.17-.96 1.69-.51.72-.93 1.22-1.26 1.49-.5.46-1.04.7-1.62.71-.41 0-.91-.12-1.49-.35-.58-.24-1.11-.35-1.6-.35-.51 0-1.06.12-1.64.35-.58.24-1.05.36-1.41.37-.56.02-1.11-.22-1.65-.72-.36-.29-.8-.81-1.32-1.55C1.09 14 .64 13.08.29 12.01-.08 10.85-.27 9.73-.27 8.64c0-1.25.27-2.33.81-3.22A4.74 4.74 0 013.31 3.6a4.6 4.6 0 012.32-.66c.46 0 1.05.14 1.79.42.73.28 1.2.42 1.41.42.15 0 .67-.17 1.55-.5.83-.31 1.53-.44 2.11-.39 1.56.12 2.74.73 3.53 1.83-1.4.84-2.09 2.03-2.08 3.55.01 1.18.44 2.17 1.28 2.94.38.36.81.64 1.28.84-.1.3-.21.59-.32.86zm-3.38-11.9c0 .93-.34 1.79-1.01 2.59-.81.95-1.8 1.5-2.86 1.41a2.86 2.86 0 01-.02-.35c0-.89.39-1.84 1.07-2.62.34-.4.78-.73 1.3-.99.52-.26 1.01-.4 1.47-.42.02.13.03.25.03.37l.02.01z" />
  </svg>
)
