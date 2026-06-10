'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

const PageClient: React.FC = () => {
  /* Let the header inherit the site theme (same as the homepage), so the
     navbar looks identical everywhere. The old 'dark' override was for a
     transparent header overlaying a dark hero image — no longer applies to
     the redesigned solid, sticky header. */
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme(null)
  }, [setHeaderTheme])
  return <React.Fragment />
}

export default PageClient
