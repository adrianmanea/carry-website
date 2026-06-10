import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

import { JsonLd } from '@/components/seo/JsonLd'
import { LeadForm } from '@/components/Home/LeadForm'
import { Placeholder } from '@/components/Home/Placeholder'
import { Button } from '@/components/ui/button'
import { getMigration, migrations, SITE } from '@/data/migrations'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'

export const dynamicParams = false

export function generateStaticParams() {
  return migrations.map((m) => ({ tool: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>
}): Promise<Metadata> {
  const { tool } = await params
  const m = getMigration(tool)
  if (!m) return {}
  const url = `${getServerSideURL()}/tools/${m.slug}`
  return {
    title: m.title,
    description: m.metaDescription,
    alternates: { canonical: url },
    openGraph: mergeOpenGraph({
      title: m.title,
      description: m.metaDescription,
      url: `/tools/${m.slug}`,
    }),
  }
}

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params
  const m = getMigration(tool)
  if (!m) notFound()

  const base = getServerSideURL()
  const url = `${base}/tools/${m.slug}`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: `${SITE.name} — ${m.source} to ${m.destination}`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'macOS',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: `Free export from ${m.source} to ${m.destination}.`,
      },
      description: m.metaDescription,
      url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: m.h1,
      description: m.subhead,
      step: m.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.title,
        text: s.body,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: m.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: base },
        { '@type': 'ListItem', position: 2, name: 'Tools', item: `${base}/tools` },
        { '@type': 'ListItem', position: 3, name: `${m.source} to ${m.destination}`, item: url },
      ],
    },
  ]

  return (
    <main className="container">
      <JsonLd data={jsonLd} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1100px] pt-10 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/tools" className="hover:text-foreground">
              Tools
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground">
            {m.source} to {m.destination}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1100px] py-12 md:py-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
          Free Mac app · Runs locally
        </span>
        <h1 className="mt-6 text-[clamp(2.25rem,6vw,64px)] font-bold leading-[1.08] tracking-[-0.02em] text-foreground">
          {m.h1}
        </h1>
        <p className="mt-6 max-w-[640px] text-lg font-medium leading-[1.5] text-muted-foreground md:text-xl">
          {m.subhead}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg">Migrate {m.source} free →</Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#how-it-works">See how it works</a>
          </Button>
        </div>
      </section>

      {/* Preview */}
      <section className="mx-auto max-w-[1100px]">
        <Placeholder tone="screen" ratio={1100 / 560} label={`${m.source} → ${m.destination}`} />
      </section>

      {/* What's preserved */}
      <section className="mx-auto max-w-[1100px] py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[32px]">
          What carries over
        </h2>
        <p className="mt-3 max-w-[620px] text-lg text-muted-foreground">
          A faithful export — not a flat dump. Everything below transfers automatically.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {m.preserved.map((p) => (
            <div key={p.title} className="rounded-[20px] bg-[#F4F4F5] p-7 dark:bg-card">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / context */}
      <section className="mx-auto max-w-[720px] pb-4">
        <div className="flex flex-col gap-4">
          {m.intro.map((para, i) => (
            <p key={i} className="text-lg leading-[1.6] text-muted-foreground">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-[1100px] py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[32px]">
          How to export {m.source} to {m.destination}
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {m.steps.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-[20px] bg-[#F4F4F5] p-7 dark:bg-card">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-base font-semibold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1.5 text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Destination note + verification */}
      <section className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 pb-16 md:grid-cols-2 md:pb-24">
        <div className="rounded-[20px] bg-[#F4F4F5] p-8 dark:bg-card">
          <h3 className="text-2xl font-semibold tracking-[-0.01em] text-foreground">
            {m.destinationNote.title}
          </h3>
          <p className="mt-3 text-lg leading-[1.55] text-muted-foreground">{m.destinationNote.body}</p>
        </div>
        <div className="rounded-[20px] bg-[#F4F4F5] p-8 dark:bg-card">
          <h3 className="text-2xl font-semibold tracking-[-0.01em] text-foreground">
            Know exactly what transferred
          </h3>
          <p className="mt-3 text-lg leading-[1.55] text-muted-foreground">
            Every migration ends with a verification report: notes processed, attachments by type,
            locked notes handled, and any lossy conversions flagged — no silent failures.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[760px] py-16 md:py-24">
        <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[32px]">
          Frequently asked questions
        </h2>
        <div className="mt-8 divide-y divide-border">
          {m.faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-foreground">
                {f.q}
                <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Lead capture */}
      <section className="mx-auto max-w-[760px] pb-20">
        <div className="rounded-[24px] bg-foreground p-8 text-background md:p-12">
          <h2 className="text-2xl font-semibold tracking-[-0.01em] md:text-3xl">
            Be first to migrate {m.source} → {m.destination}
          </h2>
          <p className="mt-3 max-w-[520px] text-background/70">
            Carry is launching soon. Drop your email and we’ll send you the app the moment this
            migration is ready.
          </p>
          <div className="mt-6">
            <LeadForm
              source={m.slug}
              cta="Notify me →"
              note="Free Mac app. No spam — launch news and migration guides only."
            />
          </div>
        </div>
      </section>

      {/* Related tools (internal linking) */}
      {m.related.length > 0 && (
        <section className="mx-auto max-w-[1100px] pb-24">
          <h2 className="text-xl font-semibold text-foreground">Other migrations</h2>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {m.related
              .map((slug) => getMigration(slug))
              .filter((x): x is NonNullable<typeof x> => Boolean(x))
              .map((r) => (
                <Link
                  key={r.slug}
                  href={`/tools/${r.slug}`}
                  className="group flex items-center justify-between rounded-[16px] border border-border p-5 transition-colors hover:bg-secondary"
                >
                  <span className="font-medium text-foreground">
                    {r.source} → {r.destination}
                  </span>
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
          </div>
        </section>
      )}
    </main>
  )
}
