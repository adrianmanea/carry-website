'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

/** Shown when no nav items are configured in the CMS yet. */
const FALLBACK_NAV = [
  { url: '/tools', label: 'Tools' },
  { url: '/posts', label: 'Blog' },
]

const FALLBACK_CTA = { url: '/download', label: 'Download →' }

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const cta = data?.cta

  return (
    <nav className="flex items-center gap-6 md:gap-8">
      <div className="hidden items-center gap-6 md:flex">
        {navItems.length > 0
          ? navItems.map(({ link }, i) => (
              <CMSLink
                key={i}
                {...link}
                appearance="link"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              />
            ))
          : FALLBACK_NAV.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
      </div>

      <div className="flex items-center gap-4">
        <Link href="/search" className="text-muted-foreground transition-colors hover:text-foreground">
          <span className="sr-only">Search</span>
          <SearchIcon className="h-5 w-5" />
        </Link>

        {cta?.enabled !== false &&
          (cta?.link?.url || cta?.link?.reference ? (
            <CMSLink {...cta.link} appearance="default" size="sm" />
          ) : (
            <Button asChild size="sm">
              <Link href={FALLBACK_CTA.url}>{FALLBACK_CTA.label}</Link>
            </Button>
          ))}
      </div>
    </nav>
  )
}
