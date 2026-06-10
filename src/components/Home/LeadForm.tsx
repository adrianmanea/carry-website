'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

/**
 * Lead-capture form. Marketing-side stub: stores intent client-side and
 * shows a success state. Wire to a real endpoint / Payload form later.
 */
export const LeadForm: React.FC<{
  cta?: string
  placeholder?: string
  note?: string
  source?: string
}> = ({
  cta = 'Get early access →',
  placeholder = 'you@email.com',
  note = 'Free Mac app. No spam — just launch news and migration guides.',
  source = 'home',
}) => {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')

  if (done) {
    return (
      <div className="rounded-[20px] bg-[#F4F4F5] p-6 dark:bg-card">
        <p className="text-lg font-semibold text-foreground">You’re on the list. 🎉</p>
        <p className="mt-1 text-muted-foreground">
          We’ll email you the moment {source ? 'this migration' : 'Carry'} is ready.
        </p>
      </div>
    )
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault()
        if (email.includes('@')) setDone(true)
      }}
      data-lead-source={source}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className="h-[52px] flex-1 rounded-full border-border bg-background px-5 text-base shadow-none focus-visible:ring-4"
        />
        <Button type="submit" size="lg" className="shrink-0">
          {cta}
        </Button>
      </div>
      {note ? <p className="text-sm text-muted-foreground">{note}</p> : null}
    </form>
  )
}
