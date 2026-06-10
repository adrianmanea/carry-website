import type { Metadata } from 'next'
import React from 'react'

import { HomePage } from '@/components/Home'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'

export default function Page() {
  return <HomePage />
}

const TITLE = 'Carry — Move your notes anywhere, cleanly'
const DESCRIPTION =
  'Carry migrates your Apple Notes into Obsidian, Notion, or Markdown — dates, folders, and attachments intact. Free export, runs locally on your Mac. Optional AI cleanup.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: getServerSideURL() },
  openGraph: mergeOpenGraph({ title: TITLE, description: DESCRIPTION, url: '/' }),
}
