import React from 'react'

/**
 * Renders a JSON-LD <script> block. Keep payloads server-rendered so
 * crawlers see structured data in the initial HTML.
 */
export const JsonLd: React.FC<{ data: Record<string, unknown> | Record<string, unknown>[] }> = ({
  data,
}) => {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
