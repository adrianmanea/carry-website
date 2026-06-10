import { DownloadPage } from '@/components/Download'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download Carry for Mac — Free note migration app',
  description:
    'Move your Apple Notes to Obsidian, Notion, or Markdown in minutes. Free, local, no account required. Download Carry for macOS.',
  openGraph: {
    title: 'Download Carry for Mac',
    description:
      'Move your Apple Notes anywhere, cleanly. Free export, optional AI enrichment. Runs fully offline.',
    type: 'website',
  },
}

export default function Page() {
  return <DownloadPage />
}
