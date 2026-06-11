import React from 'react'

export const LegalPage: React.FC<{
  title: string
  lastUpdated: string
  children: React.ReactNode
}> = ({ title, lastUpdated, children }) => (
  <main className="container">
    <div className="mx-auto max-w-[760px] py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-[-0.02em] text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>
      <div className="prose prose-neutral max-w-none dark:prose-invert [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.01em] [&_h2]:text-foreground [&_p]:text-muted-foreground [&_p]:leading-[1.7] [&_ul]:text-muted-foreground [&_ul]:leading-[1.7] [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </div>
  </main>
)
