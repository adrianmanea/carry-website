import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { JsonLd } from '@/components/seo/JsonLd'
import { migrations } from '@/data/migrations'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'

const TITLE = 'Free Note Migration Tools — Carry'
const DESCRIPTION =
  'Free tools to move your notes between apps without losing structure. Export Apple Notes to Notion, Obsidian, and more — dates, folders, and attachments preserved.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${getServerSideURL()}/tools` },
  openGraph: mergeOpenGraph({ title: TITLE, description: DESCRIPTION, url: '/tools' }),
}

export default function ToolsIndex() {
  const base = getServerSideURL()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Note migration tools',
    itemListElement: migrations.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${m.source} to ${m.destination}`,
      url: `${base}/tools/${m.slug}`,
    })),
  }

  return (
    <main className="container">
      <JsonLd data={jsonLd} />

      <section className="mx-auto max-w-[1100px] py-16 md:py-24">
        <h1 className="text-[clamp(2.5rem,7vw,72px)] font-bold leading-[1.08] tracking-[-0.02em] text-foreground">
          Free migration tools
        </h1>
        <p className="mt-6 max-w-[620px] text-lg font-medium text-muted-foreground md:text-xl">
          Move your notes between apps without losing structure. Pick your migration — each export
          keeps your dates, folders, and attachments intact, and runs locally on your Mac.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] pb-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {migrations.map((m) => (
            <Link
              key={m.slug}
              href={`/tools/${m.slug}`}
              className="group flex flex-col gap-4 rounded-[20px] bg-[#F4F4F5] p-8 transition-colors hover:bg-secondary dark:bg-card"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span>{m.source}</span>
                <span className="text-primary">→</span>
                <span>{m.destination}</span>
              </div>
              <h2 className="text-2xl font-semibold tracking-[-0.01em] text-foreground">
                Export {m.source} to {m.destination}
              </h2>
              <p className="text-muted-foreground">{m.subhead}</p>
              <span className="mt-2 inline-flex items-center gap-1 font-medium text-primary">
                Open tool
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
