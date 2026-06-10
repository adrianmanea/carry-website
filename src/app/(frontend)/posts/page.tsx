import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="max-w-[760px]">
          <h1 className="text-[clamp(2.5rem,7vw,64px)] font-bold leading-[1.08] tracking-[-0.02em] text-foreground">
            The Carry blog
          </h1>
          <p className="mt-5 text-lg text-muted-foreground md:text-xl">
            Guides, teardowns, and migration playbooks for leaving your notes app — moving from Apple
            Notes to Obsidian, Notion, and beyond without losing your structure.
          </p>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  const title = 'Blog — Note migration guides & playbooks | Carry'
  const description =
    'Practical guides for migrating your notes between apps: Apple Notes to Obsidian, Apple Notes to Notion, attachment handling, and clean exports without losing structure.'
  return {
    title,
    description,
    openGraph: mergeOpenGraph({ title, description, url: '/posts' }),
  }
}
