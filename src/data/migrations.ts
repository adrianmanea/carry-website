/**
 * Programmatic-SEO data for migration ("free tool") landing pages.
 *
 * Each entry drives a page at /tools/<slug>. Adding a new migration flow
 * = adding one object here. Copy is grounded in PRD.md (Carry positioning,
 * free export tier, faithful extraction, AI enrichment, verification report).
 */

export type FAQ = { q: string; a: string }
export type Step = { title: string; body: string }
export type Preserved = { title: string; body: string }

export type Migration = {
  slug: string
  /** Primary keyword, lowercased, e.g. "apple notes to notion" */
  keyword: string
  source: string
  destination: string
  /** Monthly search volume from keyword research, if known (for prioritization) */
  searchVolume?: number

  // SEO
  title: string
  metaDescription: string

  // Page content
  h1: string
  subhead: string
  intro: string[]
  preserved: Preserved[]
  steps: Step[]
  destinationNote: { title: string; body: string }
  faqs: FAQ[]
  /** slugs of related migrations for internal linking */
  related: string[]
}

export const SITE = {
  name: 'Carry',
  tagline: 'Carry your notes anywhere from anywhere.',
}

export const migrations: Migration[] = [
  {
    slug: 'apple-notes-to-notion',
    keyword: 'apple notes to notion',
    source: 'Apple Notes',
    destination: 'Notion',
    searchVolume: 30,
    title: 'Export Apple Notes to Notion (Free) — Carry',
    metaDescription:
      'Move your entire Apple Notes library into Notion for free. Carry preserves dates, folders, and attachments, rewrites links, and gives you a verification report. Mac app, runs locally.',
    h1: 'Export Apple Notes to Notion',
    subhead:
      'Move your whole Apple Notes library into Notion — dates, folders, and attachments intact. Free, runs on your Mac, no notes leave your machine.',
    intro: [
      'Apple Notes has no bulk export and no public API, so getting years of notes into Notion usually means copy-pasting one note at a time or settling for a flat dump that loses your structure. Carry reads your entire library and writes a clean, Notion-ready import that keeps your folders, creation dates, and attachments where they belong.',
      'The export is completely free with no limit on library size. Everything happens locally on your Mac — your notes are never uploaded.',
    ],
    preserved: [
      {
        title: 'Folder hierarchy',
        body: 'Your Apple Notes folders become Notion page hierarchy, not a flattened pile.',
      },
      {
        title: 'Creation & modification dates',
        body: 'Original dates are written into each page so your timeline stays accurate.',
      },
      {
        title: 'Attachments, per note',
        body: 'Images, PDFs, and scans are grouped per note in the import ZIP — no cryptic flat folder.',
      },
      {
        title: 'Internal links',
        body: 'note:// links between notes are rewritten so they keep working in Notion.',
      },
    ],
    steps: [
      {
        title: 'Pick Notion as your destination',
        body: 'Open Carry and choose Notion. The output is shaped for Notion’s ZIP importer.',
      },
      {
        title: 'Scan your library',
        body: 'Carry counts your notes, folders, attachments, and any locked notes, and estimates the time.',
      },
      {
        title: 'Export',
        body: 'Carry produces a Notion-ready ZIP with per-note attachment folders and preserved metadata.',
      },
      {
        title: 'Import into Notion',
        body: 'In Notion, choose Import → Markdown & CSV and select the ZIP. Your structure lands intact.',
      },
    ],
    destinationNote: {
      title: 'Built for Notion’s importer',
      body: 'Notion’s ZIP importer handles relative attachment paths correctly when the export is structured right — which most exporters get wrong. Carry groups each note’s attachments in their own folder and uses forward-slash relative paths so images and PDFs resolve instead of breaking on import.',
    },
    faqs: [
      {
        q: 'Can you export Apple Notes to Notion directly?',
        a: 'Not from Apple Notes itself — there’s no bulk export and no public API. Carry reads your library on your Mac and produces a Notion-ready ZIP you import via Notion’s Import → Markdown & CSV option.',
      },
      {
        q: 'Will my attachments and images come across?',
        a: 'Yes. Images, PDFs, scanned documents, and other attachments are exported and grouped per note so Notion’s importer resolves them correctly instead of dropping them.',
      },
      {
        q: 'Do my creation dates survive?',
        a: 'Yes. Original creation and modification dates are written into each note’s frontmatter so your timeline stays intact in Notion.',
      },
      {
        q: 'Is it free?',
        a: 'The full export is free with no cap on library size. Optional AI enrichment (auto-titles for untitled notes, a cleaned-up tag taxonomy, duplicate detection) is a one-time $19 unlock.',
      },
      {
        q: 'Do my notes get uploaded anywhere?',
        a: 'No. Everything runs locally on your Mac. Your notes are never sent to a server unless you explicitly opt into cloud AI with your own API key.',
      },
    ],
    related: ['apple-notes-to-obsidian'],
  },
  {
    slug: 'apple-notes-to-obsidian',
    keyword: 'apple notes to obsidian',
    source: 'Apple Notes',
    destination: 'Obsidian',
    searchVolume: 20,
    title: 'Export Apple Notes to Obsidian (Free) — Carry',
    metaDescription:
      'Migrate Apple Notes to an Obsidian vault for free. Carry preserves dates and folders, converts links to wikilinks, organizes attachments, and gives you a verification report. Runs locally on your Mac.',
    h1: 'Export Apple Notes to Obsidian',
    subhead:
      'Turn your Apple Notes into a clean Obsidian vault — wikilinks, frontmatter, and organized attachments included. Free, local, no cleanup afterward.',
    intro: [
      'Obsidian’s built-in Apple Notes importer treats the job as a one-off and leaves you with flattened folders, broken links, and attachments dumped in one place. Carry produces a proper vault: your folder structure preserved, internal links converted to wikilinks, tags in YAML frontmatter, and each note’s attachments in their own place.',
      'The export is free with no library-size limit and runs entirely on your Mac. Source notes are never modified — output goes to a folder you choose.',
    ],
    preserved: [
      {
        title: 'Vault structure',
        body: 'Folders map directly to vault folders, so your organization carries over untouched.',
      },
      {
        title: 'Wikilinks',
        body: 'note:// links between notes become [[wikilinks]] that work natively in Obsidian.',
      },
      {
        title: 'YAML frontmatter',
        body: 'Creation dates and tags land in frontmatter so Dataview and search work day one.',
      },
      {
        title: 'Attachments',
        body: 'Each note’s images and files are organized cleanly — per-note folders or the _attachments convention, your choice.',
      },
    ],
    steps: [
      {
        title: 'Pick Obsidian as your destination',
        body: 'Open Carry and choose Obsidian. Output is shaped as a ready-to-open vault.',
      },
      {
        title: 'Scan your library',
        body: 'Carry counts notes, folders, attachments, and locked notes, and estimates time.',
      },
      {
        title: 'Export the vault',
        body: 'Carry writes Markdown with wikilinks, YAML frontmatter, and organized attachments.',
      },
      {
        title: 'Open in Obsidian',
        body: 'In Obsidian, choose “Open folder as vault” and point it at the exported folder. Done.',
      },
    ],
    destinationNote: {
      title: 'A real vault, not a dump',
      body: 'Carry writes wikilinks, puts creation dates and tags in YAML frontmatter, and lets you choose between per-note attachment folders or Obsidian’s conventional _attachments/ layout. The result works with Dataview, graph view, and backlinks immediately — no manual cleanup.',
    },
    faqs: [
      {
        q: 'How do I export Apple Notes to Obsidian?',
        a: 'Open Carry, choose Obsidian as the destination, scan your library, and export. You get a folder you open in Obsidian via “Open folder as vault.” Links become wikilinks and dates land in frontmatter automatically.',
      },
      {
        q: 'Is Carry better than Obsidian’s built-in Apple Notes importer?',
        a: 'For most libraries, yes. The built-in importer flattens structure and dumps attachments; Carry preserves your folder hierarchy, converts links to wikilinks, organizes attachments per note, and gives you a verification report of exactly what transferred.',
      },
      {
        q: 'Do internal links between notes still work?',
        a: 'Yes. Apple Notes note:// links are rewritten as Obsidian [[wikilinks]], so backlinks and graph view work right away.',
      },
      {
        q: 'Is it free?',
        a: 'The full export is free with no cap on library size. Optional AI enrichment (auto-titles, tag taxonomy cleanup, duplicate detection) is a one-time $19 unlock.',
      },
      {
        q: 'Will it change my original Apple Notes?',
        a: 'No. Carry only reads your notes. The export is written to a folder you choose; your Apple Notes are never modified.',
      },
    ],
    related: ['apple-notes-to-notion'],
  },
]

export function getMigration(slug: string): Migration | undefined {
  return migrations.find((m) => m.slug === slug)
}
