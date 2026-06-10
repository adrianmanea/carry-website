import { Button } from '@/components/ui/button'
import { migrations } from '@/data/migrations'
import Link from 'next/link'
import React from 'react'

import { LeadForm } from './LeadForm'
import { Placeholder } from './Placeholder'

/**
 * Carry marketing homepage. Copy grounded in PRD.md: a one-time migration
 * tool for "second-brain refugees" — empathetic positioning ("take your
 * notes with you"), free organized export, optional AI enrichment.
 * Design system modeled on the dona.ai reference.
 */
export const HomePage: React.FC = () => {
  return (
    <main className="container">
      {/* ---------- Hero ---------- */}
      <section className="mx-auto max-w-[1100px] py-20 md:py-[120px]">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
          For Mac · Free export · Runs locally
        </span>
        <h1 className="mt-6 text-[clamp(2.75rem,8vw,84px)] font-bold leading-[1.08] tracking-[-0.02em] text-foreground">
          Finally take your
          <br />
          notes with you
        </h1>
        <p className="mt-8 max-w-[660px] text-xl font-medium leading-[1.45] text-muted-foreground md:text-2xl">
          Carry moves your Apple Notes into Obsidian, Notion, or plain Markdown — cleanly and
          intelligently, in minutes. Dates, folders, and attachments intact. Nothing left behind.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-12">
          <Button size="lg" asChild>
            <Link href="/download">Download for Mac — Free →</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/tools">Browse free tools</Link>
          </Button>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          No account. No upload. Your notes never leave your Mac.
        </p>
      </section>

      {/* ---------- Hero screen ---------- */}
      <section className="mx-auto max-w-[1100px]">
        <Placeholder tone="screen" ratio={1100 / 620} label="Product preview" />
      </section>

      {/* ---------- Value props ---------- */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 py-20 md:grid-cols-2 md:py-[120px]">
        {/* Full-width feature */}
        <article className="relative flex flex-col gap-8 overflow-hidden rounded-[20px] bg-[#F4F4F5] p-10 dark:bg-card md:col-span-2 md:flex-row md:items-center md:gap-12 md:p-15">
          <div className="flex max-w-[400px] flex-col gap-4">
            <h2 className="text-3xl font-semibold leading-[1.25] tracking-[-0.01em] text-foreground md:text-[32px]">
              A faithful export,
              <br />
              not a flat dump
            </h2>
            <p className="text-lg leading-[1.5] text-muted-foreground">
              Other tools get the bytes out and lose your structure. Carry preserves folder
              hierarchy and creation dates, gives every note its own attachment folder, and rewrites
              internal links so they keep working in your new app.
            </p>
          </div>
          <Placeholder className="w-full flex-1" ratio={16 / 11} />
        </article>

        {/* Two half features */}
        <FeatureCard
          title="AI that cleans as it carries"
          body="Optional enrichment writes titles for your 'Untitled' notes, consolidates messy tags into one taxonomy, and flags duplicates — so you import an organized library, not three years of clutter."
        />
        <FeatureCard
          title="Know exactly what transferred"
          body="Every migration ends with a verification report: notes processed, attachments by type, locked notes handled, lossy conversions flagged. No silent failures, ever."
        />
      </section>

      {/* ---------- Free tools directory ---------- */}
      <section className="mx-auto max-w-[1100px] py-12 md:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[40px]">
            Free migration tools
          </h2>
          <p className="max-w-[620px] text-lg text-muted-foreground">
            Pick where your notes are going. Each tool is a free, local export that keeps your
            structure intact.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {migrations.map((m) => (
            <Link
              key={m.slug}
              href={`/tools/${m.slug}`}
              className="group flex flex-col gap-3 rounded-[20px] border border-border p-7 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>{m.source}</span>
                <span className="text-primary">→</span>
                <span>{m.destination}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground">
                Export {m.source} to {m.destination}
              </h3>
              <span className="mt-1 inline-flex items-center gap-1 font-medium text-primary">
                Open tool
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
          <Link
            href="/tools"
            className="group flex items-center justify-center rounded-[20px] bg-[#F4F4F5] p-7 text-center font-medium text-muted-foreground transition-colors hover:text-foreground dark:bg-card"
          >
            More migrations coming soon →
          </Link>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section id="pricing" className="mx-auto max-w-[1100px] scroll-mt-24 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-[20px] bg-[#F4F4F5] p-8 dark:bg-card">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Free forever
            </p>
            <p className="mt-3 text-4xl font-bold text-foreground">$0</p>
            <p className="mt-3 text-muted-foreground">
              Full library export to Obsidian, Notion, or Markdown. Per-note attachments, preserved
              dates and folders, locked-note handling, verification report. No size limits.
            </p>
          </div>
          <div className="rounded-[20px] bg-foreground p-8 text-background">
            <p className="text-sm font-semibold uppercase tracking-wide text-background/60">
              Pro · one-time
            </p>
            <p className="mt-3 text-4xl font-bold">$19</p>
            <p className="mt-3 text-background/70">
              Everything free, plus AI enrichment: title generation, tag taxonomy cleanup, duplicate
              detection, and the full review UI. One unlock — no subscription.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Lead capture ---------- */}
      <section className="mx-auto max-w-[760px] py-20 md:py-28">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[40px]">
            Get Carry the day it launches
          </h2>
          <LeadForm
            source="home"
            cta="Get early access →"
            note="Free Mac app. No spam — just launch news and migration guides."
          />
        </div>
      </section>
    </main>
  )
}

const FeatureCard: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <article className="flex flex-col gap-8 overflow-hidden rounded-[20px] bg-[#F4F4F5] p-10 dark:bg-card">
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-foreground md:text-[26px]">
        {title}
      </h2>
      <p className="text-lg leading-[1.5] text-muted-foreground">{body}</p>
    </div>
    <Placeholder className="w-full" ratio={16 / 9} />
  </article>
)
