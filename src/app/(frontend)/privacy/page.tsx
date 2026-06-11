import { LegalPage } from '@/components/LegalPage'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Carry',
  description: 'How Carry handles your data. Short version: your notes never leave your Mac.',
}

export default function Page() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 11, 2026">
      <h2>The short version</h2>
      <p>
        Carry is a local Mac app. Your notes are read directly from your Mac and written to your
        chosen destination — they are never uploaded to our servers, never stored in the cloud by
        us, and never shared with third parties.
      </p>

      <h2>Information we collect</h2>
      <p>We collect two categories of information:</p>
      <ul>
        <li>
          <strong>Analytics data.</strong> We use Google Analytics (GA4) to understand how people
          find and use carry.so — pages visited, session duration, and general location (country
          level). This data is anonymised and aggregated. No personally identifiable information is
          collected via analytics.
        </li>
        <li>
          <strong>Email address.</strong> If you sign up for early access or purchase a Pro
          licence, we collect your email address. We use it to send you launch updates, licence
          information, and migration guides. We do not sell or share it.
        </li>
      </ul>

      <h2>Your notes and files</h2>
      <p>
        The Carry Mac app reads your Apple Notes database locally. All processing — export,
        formatting, and optional AI enrichment — happens on your device. No note content, titles,
        attachments, or metadata are transmitted to our servers at any point.
      </p>
      <p>
        The optional AI enrichment feature ($19 one-time unlock) processes your notes locally
        using an on-device model. No note data is sent to any external AI service.
      </p>

      <h2>Cookies</h2>
      <p>
        The Carry website uses cookies set by Google Analytics. These are analytics-only cookies
        used to measure traffic and usage patterns. No advertising or tracking cookies are used.
        You can decline cookies via the banner shown on your first visit.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Google Analytics (GA4)</strong> — website analytics. See{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google&apos;s Privacy Policy
          </a>
          .
        </li>
        <li>
          <strong>Vercel</strong> — website hosting. Vercel may log request metadata (IP, user
          agent) as part of standard web serving infrastructure.
        </li>
      </ul>

      <h2>Data retention</h2>
      <p>
        Analytics data is retained for 14 months in Google Analytics per their default settings.
        Email addresses are retained until you unsubscribe. You can request deletion at any time
        by emailing us.
      </p>

      <h2>Your rights</h2>
      <p>
        You have the right to access, correct, or delete any personal data we hold about you. To
        exercise these rights, email us at{' '}
        <a href="mailto:privacy@carry.so">privacy@carry.so</a>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the product evolves. Material changes will be communicated
        via email to registered users. The &quot;last updated&quot; date at the top of this page
        reflects the most recent revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:privacy@carry.so">privacy@carry.so</a>.
      </p>
    </LegalPage>
  )
}
