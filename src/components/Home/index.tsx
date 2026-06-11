import { Button } from '@/components/ui/button'
import { migrations } from '@/data/migrations'
import Link from 'next/link'
import React from 'react'

import { LeadForm } from './LeadForm'

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

      {/* ---------- Demo video ---------- */}
      <section className="mx-auto max-w-[1100px]">
        <div className="overflow-hidden rounded-[20px] bg-[#EFF2F5] dark:bg-secondary">
          <video
            src="/carry-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
        </div>
      </section>

      {/* ---------- Value props ---------- */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 py-20 md:grid-cols-2 md:py-[120px]">
        {/* Full-width feature */}
        <article className="flex flex-col gap-8 overflow-hidden rounded-[20px] bg-[#F4F4F5] p-10 dark:bg-card md:col-span-2 md:flex-row md:items-start md:gap-16 md:p-14">
          <div className="flex max-w-[400px] shrink-0 flex-col gap-4">
            <h2 className="text-3xl font-semibold leading-[1.25] tracking-[-0.01em] text-foreground md:text-[32px]">
              A faithful export,
              <br />
              not a flat dump
            </h2>
            <p className="text-lg leading-[1.5] text-muted-foreground">
              Other tools get the bytes out and lose your structure. Carry preserves everything
              that makes your library yours.
            </p>
          </div>
          <ul className="flex flex-1 flex-col divide-y divide-border">
            {[
              ['Folder hierarchy', 'Nested folders map 1-to-1 to your destination'],
              ['Creation & edit dates', 'Land in frontmatter or file metadata automatically'],
              ['Attachments', 'Each note gets its own folder — nothing shared, nothing lost'],
              ['Internal links', 'Rewritten to work natively in your new app'],
              ['Locked notes', 'Handled gracefully — flagged in the verification report'],
            ].map(([label, detail]) => (
              <li key={label} className="flex flex-col gap-0.5 py-4 first:pt-0 last:pb-0">
                <span className="font-medium text-foreground">{label}</span>
                <span className="text-sm text-muted-foreground">{detail}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Two half features */}
        <FeatureCard
          title="AI that cleans as it carries"
          body="Optional enrichment writes titles for your 'Untitled' notes, consolidates messy tags into one taxonomy, and flags duplicates — so you import an organized library, not three years of clutter."
          items={['Title generation for untitled notes', 'Tag taxonomy cleanup', 'Duplicate detection', 'Full review UI before export']}
        />
        <FeatureCard
          title="Know exactly what transferred"
          body="Every migration ends with a verification report: notes processed, attachments by type, locked notes handled, lossy conversions flagged. No silent failures, ever."
          items={['Notes processed count', 'Attachments by file type', 'Locked note status', 'Lossy conversion flags']}
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

const FeatureCard: React.FC<{ title: string; body: string; items: string[] }> = ({
  title,
  body,
  items,
}) => (
  <article className="flex flex-col gap-6 rounded-[20px] bg-[#F4F4F5] p-10 dark:bg-card">
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-semibold leading-[1.25] tracking-[-0.01em] text-foreground md:text-[26px]">
        {title}
      </h2>
      <p className="text-base leading-[1.6] text-muted-foreground">{body}</p>
    </div>
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="size-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  </article>
)
