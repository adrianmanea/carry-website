import { LegalPage } from '@/components/LegalPage'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Terms of Service — Carry',
  description: 'Terms of Service for the Carry Mac app and website.',
}

export default function Page() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="June 11, 2026">
      <h2>Acceptance</h2>
      <p>
        By downloading or using Carry (&quot;the App&quot;) or visiting carry.so (&quot;the
        Site&quot;), you agree to these Terms. If you do not agree, do not use Carry.
      </p>

      <h2>What Carry does</h2>
      <p>
        Carry is a Mac application that exports Apple Notes content to third-party note-taking
        platforms such as Obsidian and Notion, or to plain Markdown files. The App runs entirely
        on your device. We do not store, access, or transmit your notes.
      </p>

      <h2>Free tier</h2>
      <p>
        The free version of Carry is provided at no charge and includes full library export with
        no size limits. We reserve the right to change or discontinue the free tier with
        reasonable notice.
      </p>

      <h2>Pro licence</h2>
      <p>
        The Pro licence is a one-time purchase that unlocks AI-powered enrichment features. It is
        tied to a single Apple ID / device. The licence is non-transferable and non-refundable
        except where required by applicable law.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse-engineer, decompile, or disassemble the App</li>
        <li>Use the App to process notes you do not own or have no right to migrate</li>
        <li>Attempt to circumvent the Pro licence mechanism</li>
        <li>Use automated means to scrape or overload the Site</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        Carry and its logo are owned by the Carry team. Your notes and their contents remain
        entirely your property. We claim no ownership or licence over any content you process
        through the App.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        Carry is provided &quot;as is&quot; without warranty of any kind, express or implied. We
        do not guarantee that the App will be error-free or that every note will migrate without
        issue. Always keep a backup of your Apple Notes before running a migration.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, the Carry team shall not be liable for any
        indirect, incidental, special, or consequential damages arising from your use of the App
        or Site, including data loss. Our total liability for any claim shall not exceed the
        amount you paid for the Pro licence, if any.
      </p>

      <h2>Third-party platforms</h2>
      <p>
        Carry exports to Obsidian, Notion, and other third-party platforms. We are not affiliated
        with or endorsed by those platforms. Their own terms of service govern your use of their
        products.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the App or Site after
        changes constitutes acceptance of the revised Terms. Material changes will be communicated
        via email to registered users.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the jurisdiction in which the Carry team operates,
        without regard to conflict-of-law principles.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@carry.so">hello@carry.so</a>.
      </p>
    </LegalPage>
  )
}
