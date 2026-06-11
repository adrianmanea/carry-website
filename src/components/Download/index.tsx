import { downloads } from '@/config/downloads'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

import { Placeholder } from '../Home/Placeholder'
import { DownloadButton } from './DownloadButton'

const STEPS = [
  {
    n: '01',
    title: 'Open Apple Notes',
    body: 'Carry reads directly from your local Notes database. No export file, no iCloud sync required.',
  },
  {
    n: '02',
    title: 'Pick a destination',
    body: 'Choose Obsidian, Notion, or plain Markdown. Carry previews what will transfer before it starts.',
  },
  {
    n: '03',
    title: 'Run the migration',
    body: 'Folder hierarchy, dates, and attachments carry over intact. A verification report tells you exactly what transferred.',
  },
]

const REQUIREMENTS = [
  { label: 'macOS', value: '13 Ventura or later' },
  { label: 'Chip', value: 'Apple Silicon & Intel' },
  { label: 'Disk', value: '~40 MB install' },
  { label: 'Privacy', value: 'Runs fully offline' },
]

export const DownloadPage: React.FC = () => {
  return (
    <main className="container">
      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-[1100px] py-20 md:py-[120px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
          <div className="flex max-w-[600px] flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              macOS · Free · Runs locally
            </span>
            <h1 className="text-[clamp(2.5rem,7vw,72px)] font-bold leading-[1.08] tracking-[-0.02em] text-foreground">
              Download
              <br />
              Carry for Mac
            </h1>
            <p className="text-xl font-medium leading-[1.45] text-muted-foreground">
              Move your Apple Notes to Obsidian, Notion, or Markdown — cleanly, locally, and free.
              Your notes never leave your Mac.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <DownloadButton />
              <Button variant="secondary" size="lg" asChild>
                <Link href="#how-it-works">See how it works</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">{downloads.mac.requirements}</p>
          </div>

          {/* App icon / screenshot placeholder */}
          <div className="w-full max-w-[420px] shrink-0 md:w-[380px]">
            <Placeholder ratio={1} tone="screen" label="App icon" />
          </div>
        </div>
      </section>

      {/* ---------- App preview ---------- */}
      <section className="mx-auto max-w-[1100px]">
        <Placeholder ratio={1100 / 660} tone="screen" label="App screenshot" />
      </section>

      {/* ---------- System requirements ---------- */}
      <section className="mx-auto max-w-[1100px] py-12">
        <div className="flex flex-wrap gap-4">
          {REQUIREMENTS.map((r) => (
            <div
              key={r.label}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm"
            >
              <span className="font-medium text-foreground">{r.label}</span>
              <span className="text-muted-foreground">{r.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section
        id="how-it-works"
        className="mx-auto max-w-[1100px] scroll-mt-24 py-16 md:py-24"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[40px]">
            Three steps. Done in minutes.
          </h2>
          <p className="max-w-[520px] text-lg text-muted-foreground">
            No account, no upload, no waiting. Carry runs entirely on your Mac.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-4 rounded-[20px] bg-[#F4F4F5] p-8 dark:bg-card"
            >
              <span className="text-4xl font-bold tabular-nums text-primary/30">{step.n}</span>
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground">
                {step.title}
              </h3>
              <p className="text-base leading-[1.55] text-muted-foreground">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}


