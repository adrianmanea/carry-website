'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'carry-cookie-consent'

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    // delay to trigger CSS transition on mount
    requestAnimationFrame(() => setMounted(true))
  }, [])

  const respond = (choice: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, choice)
    setMounted(false)
    setTimeout(() => setVisible(false), 250)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
      }}
      className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[540px] -translate-x-1/2"
    >
      <div className="flex flex-col gap-4 rounded-[20px] border border-border bg-background/90 p-6 shadow-[rgba(12,20,66,0.08)_0px_8px_32px_0px,rgba(12,20,66,0.04)_0px_2px_8px_0px] backdrop-blur-md sm:flex-row sm:items-center sm:gap-6">
        <p className="flex-1 text-sm leading-[1.55] text-muted-foreground">
          Carry uses analytics to understand how people find and use the site.{' '}
          <Link
            href="/privacy"
            className="text-foreground underline underline-offset-2 transition-colors hover:text-primary"
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => respond('declined')}
            className="h-9 px-4 text-sm"
          >
            Decline
          </Button>
          <Button size="sm" onClick={() => respond('accepted')} className="h-9 px-4 text-sm">
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
