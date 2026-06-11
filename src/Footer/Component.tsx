import { migrations } from '@/data/migrations'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black text-white dark:bg-card">
      <div className="container py-12 md:py-16">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1fr_auto_auto_auto]">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="max-w-[260px] text-sm leading-[1.6] text-white/50">
              Move your Apple Notes anywhere — cleanly, locally, and free.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              Product
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="/download" className="text-sm text-white/60 transition-colors hover:text-white">
                Download
              </Link>
              <Link href="/tools" className="text-sm text-white/60 transition-colors hover:text-white">
                All tools
              </Link>
              <Link href="/posts" className="text-sm text-white/60 transition-colors hover:text-white">
                Blog
              </Link>
              {navItems.map(({ link }, i) => (
                <CMSLink key={i} {...link} className="text-sm text-white/60 transition-colors hover:text-white" />
              ))}
            </nav>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              Free tools
            </p>
            <nav className="flex flex-col gap-3">
              {migrations.map((m) => (
                <Link
                  key={m.slug}
                  href={`/tools/${m.slug}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {m.source} → {m.destination}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30">
              Legal
            </p>
            <nav className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-white/60 transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-white/60 transition-colors hover:text-white">
                Terms
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom: copyright + theme */}
        <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Carry. All rights reserved.
          </p>
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}
