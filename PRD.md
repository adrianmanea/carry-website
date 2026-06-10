# PRD: Carry — The Note Migration Platform

*Working title: Carry. Frames the product as "carry your notes anywhere from anywhere." Other candidates retained: Exodus, Migrate, Second Brain Bridge.*

---

## 1. Summary

A migration platform for second-brain refugees. Launches with Apple Notes → Obsidian / Notion / plain markdown; expands post-launch to Evernote, Notion-out, Roam, OneNote, Day One, and other sources where there is documented refugee energy and migration demand.

Each source uses the same engine: faithful export (preserving dates, attachments, folder structure, internal links), optional AI enrichment (titles for untitled notes, consolidated tag taxonomy, duplicate detection), destination-ready output, and a verification report.

The product is a **one-time-purchase migration tool** for any given source, not a daily-use app. A user opens it once when they want to leave a notes app, leaves with a clean, structured archive in their destination of choice, and recommends it to a friend leaving a different notes app. The shared engine means each new source is a writer + adapter module, not a new product.

**Why a platform, not a single tool:** Keyword research on Apple-Notes-only migration shows the category is too narrow to sustain a business by itself (head term "apple notes export" is 880/month; long-tail is mostly under measurement threshold). The same research shows much larger demand for Evernote exodus (Bending Spoons price hike has driven sustained refugee energy) and Notion-out flows. The technical capabilities we're building for Apple Notes — source extraction, attachment handling, AI enrichment, destination writers — are 80% reusable across sources. Building once and shipping multiple migrations is the right shape of the business.

---

## 2. Problem

Note-taking apps are write-only traps. Years of accumulated content — meeting notes, recipes, research, journal entries, code snippets — get locked into proprietary formats with token export options. The friction of leaving is high enough that most people stay and live with the mess, or migrate badly and end up with a dump rather than a structured archive.

The pattern repeats across the category:

- **Apple Notes** has no public API, no bulk export option in the UI, and a proprietary CRDT-based storage format. Users feel trapped despite wanting to leave.
- **Evernote** has a real export format (.enex) but the import side at any modern destination is poor — Notion's importer flattens hierarchy, Obsidian's loses notebook structure, and the formatting degrades in transit. Bending Spoons' 2022 price hikes and free-tier restrictions have created an active refugee population.
- **Notion** lets you export to markdown, but the exported zip is a tangled mess of nested folders with cryptic IDs, broken internal links, and inconsistent frontmatter. Many users who picked Notion 2-3 years ago now want out and find the export unusable.
- **OneNote, Roam, Day One** all have similar stories: technically possible to export, practically painful to land cleanly somewhere else.

The existing market is fragmented and shallow. Each source has 1-3 hobbyist tools that get the bytes out but produce a dump rather than a destination-ready archive. Generic importers in destination apps (Obsidian's Apple Notes importer, Notion's Evernote importer) treat each source as a one-off and don't apply enrichment or polish.

When users do migrate, the friction breaks down into three stages, all of them rough:

- **Bulk export tools** get bytes out but produce a *dump*, not an organized archive. Folder hierarchies survive; titles, tags, and structure do not.
- **Manual cleanup** of 1,000–5,000 notes is prohibitive. Users abandon the migration midway and either go back to their old app resentfully or live with a mess in two apps instead of one.
- **AI cleanup**, where it exists, is generic (text summarization), not migration-aware (tag taxonomy consolidation across a whole library, title generation per note, duplicate clustering).

There is no tool today that combines faithful per-source extraction with destination-aware output and intelligent cleanup, across multiple sources, with a unified product experience. That gap is the product.

---

## 3. Target Users

**Primary, by launch order:**

1. **Apple Notes refugees** (v1.0). Power users actively migrating to Obsidian, Notion, or plain markdown. Hundreds to thousands of notes, several years of accumulation. Have tried at least one export tool and been frustrated. Smaller absolute population but well-defined audience with high migration intent.
2. **Evernote refugees** (v2.0). Largest refugee population in the category by an order of magnitude. Bending Spoons' price hikes and free-tier restrictions have created sustained exodus energy for two years. Tend to have very large libraries (5,000+ notes) accumulated over a decade. The most underserved migration market today.
3. **Notion-out users** (v2.5). Users who picked Notion 2-3 years ago, now find it slow, vendor-locked, and want a markdown-based system. Often moving to Obsidian or Logseq. Highly vocal on social media and in PKM communities.
4. **OneNote, Roam, Day One** (v3.0+). Smaller but real populations. Each has its own export quirks; each becomes a writer + adapter module.

**Shared characteristics across all source populations:**

- Have outgrown their current notes app, either feature-wise or trust-wise.
- Want a specific destination, not just "out."
- Have non-trivial libraries (the threshold for "worth migrating" is roughly 100+ notes; the threshold for "needs AI enrichment" is roughly 500+).
- Have tried at least one export approach and been disappointed.
- Are vocal in communities (Reddit, Twitter, Hacker News) — high word-of-mouth potential.

**Secondary across all sources:** Users archiving their notes for safekeeping — researchers, writers, journalists, students finishing a thesis — who want a portable, durable copy independent of their app's cloud.

**Tertiary across all sources:** Privacy-conscious users who don't trust their current app's AI features (Apple Intelligence, Notion AI, etc.) with their personal writing and want to leave preemptively.

**Not the target:** Casual users of any source with under 100 notes. The product's value is proportional to library size and disarray; small libraries don't justify the friction.

---

## 4. Value Proposition

One sentence: **Carry your notes anywhere from anywhere — cleanly and intelligently, in one app, in minutes.**

**The platform shape:**

Carry is one product, one app, one purchase. Inside it, the user picks their source (Apple Notes at v1.0; Evernote, Notion-out, etc. as we add them) and their destination (Obsidian, Notion, plain markdown). The shared engine handles attachment management, date preservation, link rewriting, AI enrichment, and destination formatting.

**Two-tier model, source-agnostic:**

- **Free tier — Organized Export.** Full library export from any supported source to any supported destination. Per-note attachment folders, preserved dates, folder hierarchy, verification report. No artificial limits. The complete export experience as a free product — not a crippled demo.
- **Pro tier — AI Enrichment ($19 one-time unlock).** Adds title generation for untitled notes, tag taxonomy clustering, duplicate detection, language detection, and the full review UI for curating the result before export. Same engine, intelligence layer on top. Unlocks for all current and future sources, not per-source.

**Why this split:** Export is the infrastructure; enrichment is the intelligence. Users with clean libraries don't need intelligence; they get the infrastructure free. Users with messy libraries (long-time Evernote users especially) get obvious value from the AI and convert.

**Why one purchase covers all sources:** Most users only need to migrate from one source — they're leaving Apple Notes *or* Evernote, not both. Charging per-source would feel exploitative and would penalize the rare power user with multiple migrations. One unlock signals confidence in our roadmap and rewards early buyers as we add their source.

What this beats:

- *vs. source-specific hobbyist tools* (Exporter for Apple Notes, exportnotes for Evernote, etc.): Even the free tier is meaningfully better — per-note attachment folders instead of one flat dump, destination-aware output, cleaner UX. Pro adds a category of value (AI enrichment) none of them attempt. And one product supports all of them.
- *vs. destination apps' built-in importers:* Cross-source and cross-destination (not just "X to Y"), Pro adds AI enrichment, with explicit handling for edge cases (locked notes, attachment quirks, broken cross-references) in both tiers.
- *vs. doing it manually:* Hours instead of weeks. AI titles for "Untitled" notes you've been meaning to fix for three years. A tag taxonomy that's actually consistent.
- *vs. staying in the source app:* The user already wanted to leave. We make leaving possible.

**Defensibility:** Three layers.

1. **Engine reuse compounds.** Each new source we add benefits from the destination writers, attachment handling, AI enrichment, and verification we've already built. Competitors building source-specific tools have to rebuild this infrastructure each time.
2. **Enrichment quality** (taxonomy clustering, title generation taste, duplicate detection accuracy) is the moat. Easy to copy the surface; hard to copy the prompts, the clustering logic, and the destination-aware output formatting once they're tuned through hundreds of real libraries across multiple sources.
3. **Brand position.** "The migration tool for second-brain refugees" is a category-defining position. Owning that mental space across multiple migration flows is more defensible than competing on any single source.

**Demand signal:** The founder of Obsidian (kepano) publicly stated on Hacker News in March 2023: *"I am excited to see more ways to export data out of Apple Notes. Long term it would be amazing to see a solution that allows more interoperability with other apps."* The "more interoperability with other apps" framing is exactly the platform thesis. Worth pursuing partnership / co-marketing on launch.

**Positioning tone:** The target user is not someone who hates their current notes app. They feel *trapped* by it despite liking parts of it. Marketing should reflect this emotional state. Not "ditch your notes app" (aggressive, alienates the target) but "finally take your notes with you" (empathetic, matches the actual feeling). A representative voice from the Hacker News Apple Notes thread: *"I'm absolutely sick of being held hostage by my software and for me my notes are too important not to protect."* The same emotion applies across Evernote, Notion, and other refugee populations.

---

## 5. Goals & Non-Goals

### Goals

1. Migrate a 2,000-note Apple Notes library to a destination of choice in under 10 minutes of active user time (excluding processing).
2. Achieve >90% user-rated satisfaction with AI-generated titles and tags (measured via in-app post-migration prompt).
3. Preserve all metadata that the destination can accept (dates, attachments, folders, tags, links).
4. Run locally by default; no notes leave the user's machine without explicit opt-in.
5. Make the export + enrichment flow feel like one product, not two stitched together.

### Non-Goals

1. **Not a daily-use companion.** No ongoing sync, no two-way editing, no live integration after migration. Migration is a finite job.
2. **Not a notes app replacement.** We don't store notes ourselves. The destination is the destination.
3. **Not cross-platform at v1.0.** Mac-only at launch because Apple Notes extraction requires macOS APIs. Future sources may not have this constraint — Evernote (.enex), Notion (.zip), and other file-based exports can be processed cross-platform, opening Windows and Linux support as a v2+ consideration when those sources ship.
4. **Not a backup tool.** Backup is a side effect; framing it that way invites a different user with different expectations.
5. **Not a per-source price ladder.** One Pro unlock covers every current and future source. We will not introduce "+$X for Evernote support" later. Trust earned at launch is worth more than the extra revenue.

---

## 6. User Stories

- *As a writer with 8 years of journal notes,* I want to migrate to Obsidian without losing any creation dates, so my journal timeline stays intact.
- *As a researcher with hundreds of "Untitled" notes,* I want AI to suggest titles based on content, so I can find things in my new tool.
- *As a heavy tagger,* I want the AI to consolidate my inconsistent tags (`#mtg`, `#meeting`, `#meetings`) into a clean taxonomy, so I don't import the mess.
- *As a privacy-conscious user,* I want enrichment to run locally with no cloud upload, so my journals never leave my Mac.
- *As someone whose Notes contain a lot of duplicates* (pasted recipes, repeated meeting agendas), I want them flagged but not auto-deleted, so I can decide.
- *As a skeptical user,* I want to preview the entire migration plan before anything is written, so I can trust the result.
- *As someone who's moved tools before,* I want a verification report so I know exactly what transferred and what didn't.

---

## 7. Functional Requirements

### 7.1 Export (Read from Apple Notes)

- Read all notes from iCloud account and On My Mac account.
- Preserve original creation and modification dates in both frontmatter and filesystem metadata (`touch -t`).
- Export attachments (images, PDFs, audio, video, scanned documents, docx).
- Preserve folder structure.
- Detect and rewrite internal `note://` links as destination-appropriate references (wikilinks for Obsidian, IDs for Notion, etc.).
- Handle locked notes: prompt user to unlock in batches; never skip silently.
- Flag lossy conversions explicitly (Pencil drawings → flattened image, etc.) and surface them in the verification report.

#### 7.1.1 Attachment Organization (Competitive Differentiator)

Exporter dumps all attachments into a single flat folder with cryptic filenames. This is the visible failure of the current best-in-class tool and where the free tier wins on quality alone.

**Default layout: per-note sibling folder.** Each note gets a sibling folder with the same name (without extension) containing only its own attachments. Markdown references attachments via relative paths.

Example structure:
```
MyNotes/
├── Personal/
│   ├── Recipes/
│   │   ├── Sourdough Bread.md
│   │   ├── Sourdough Bread/
│   │   │   ├── starter-photo.jpg
│   │   │   └── final-loaf.jpg
│   │   ├── Pasta Dough.md
│   │   └── Pasta Dough/
│   │       └── kneading-technique.jpg
│   └── Journal/
│       ├── 2024-03-15.md
│       └── 2024-03-15/
│           └── morning-walk.heic
└── Work/
    └── Meetings/
        ├── Q3 Planning.md
        └── Q3 Planning/
            ├── whiteboard.jpg
            └── agenda.pdf
```

**Alternative layout (user setting): `_attachments` convention.** For Obsidian power users who follow the conventional pattern, allow toggling to a per-folder `_attachments/` subdirectory style. Same engine, different writer logic.

**Edge cases — required handling:**

- **Notes with no attachments:** No sibling folder created. No empty directories left behind.
- **Notes with identical names in the same parent folder:** Apple Notes permits this; the filesystem doesn't. Append a creation-date suffix: `Meeting Notes (2024-03-15).md` + `Meeting Notes (2024-03-15)/`. Original title preserved in frontmatter as `original_title`.
- **Long filenames or special characters:** Sanitize aggressively using a conservative ASCII-safe ruleset (no slashes, colons, leading dots, control characters; cap at 200 characters). Preserve the original title in frontmatter so nothing is lost.
- **Multiple attachments with the same original filename in one note:** Append a counter — `photo.jpg`, `photo-2.jpg`, `photo-3.jpg`.
- **HEIC images:** Convert to JPG on export for cross-platform compatibility, with a setting to preserve HEIC for users who specifically want it.
- **Notion destination:** Inside the import ZIP, attachments still grouped per-note in the same pattern. Notion's ZIP importer handles relative paths correctly when properly structured.

Markdown references use forward slashes regardless of OS, e.g. `![whiteboard](Q3 Planning/whiteboard.jpg)`.

### 7.2 AI Enrichment

- **Title generation** for notes whose title is empty, "Untitled," or matches a heuristic for non-informative titles ("New Note," date-only titles, single-word titles where the body has 500+ words). Generated titles must match the voice of the note (terse for terse notes, descriptive for long ones). Always preserve original title in frontmatter as `original_title`.
- **Tag suggestion** with two-pass logic:
  - Pass 1: extract candidate tags per note (5–10 candidates).
  - Pass 2: cluster candidates across the whole library, consolidate to a coherent taxonomy of 20–80 tags depending on library size.
  - User reviews and edits the taxonomy before application.
- **Duplicate detection** via embeddings. Exact duplicates auto-grouped; near-duplicates (>0.85 cosine similarity) flagged with diff view. Never auto-merge.
- **Language detection** per note. Multi-language libraries are tagged appropriately; title generation respects detected language.
- **Content type detection** (recipe, meeting note, journal entry, code snippet, list, reference) — optional but useful for some destinations.

### 7.3 Review UI

The make-or-break screen. Three tabs:

1. **Notes** — scrollable list, default-sorted by AI confidence (low confidence first). Each row: original title, AI-suggested title, target folder, proposed tags, inline edit. "Show only items needing review" toggle on by default.
2. **Tag taxonomy** — list of proposed tags with note counts. Rename, merge, delete. Changes propagate to affected notes in real time.
3. **Duplicates** — clusters of likely duplicates with diff view. User picks: keep all, keep one, merge content manually, ignore cluster.

### 7.4 Destination Presets

Launch with three destinations:

- **Obsidian** — vault structure, wikilinks, `tags:` in YAML frontmatter, attachments in `_attachments/` folder.
- **Notion** — zip import format with proper page hierarchy, tags as multi-select properties.
- **Plain Markdown** — generic folder + frontmatter, for users moving to anything else (Logseq, Bear, custom systems).

Each preset includes destination-specific formatting rules and a brief "what to do next" guide for that destination.

### 7.5 Verification Report

Post-migration, always shown:

- Total notes processed / exported / skipped.
- Locked notes status (which were unlocked and exported, which were skipped).
- Attachments exported by type and count.
- Lossy conversions flagged with note IDs (Pencil drawings flattened, HEIC converted, etc.).
- Sample of 10 random notes to spot-check.
- Path to output, one-click "Open in destination."

**Pro-tier additions (only if AI enrichment ran):**

- Titles generated: count, with confidence distribution.
- Tag taxonomy: final tag list, with note counts per tag and consolidation summary ("47 candidate tags consolidated to 18 final tags").
- Duplicates identified: clusters, with user decisions recorded.
- Language breakdown if multi-language library detected.

---

## 8. Technical Architecture

### 8.1 Stack

- **App:** Swift + SwiftUI for native macOS feel and speed of development. Bundle size matters; users shouldn't feel they're installing a heavyweight tool.
- **Distribution:** Mac App Store (Exporter proves ScriptingBridge-based Notes exporters can ship there). Direct download with notarization as fallback.
- **Min OS:** macOS 13 (Ventura). Earlier versions expose different fields in the Notes scripting dictionary and have meaningfully different attachment handling; supporting them is a long tail with low ROI.

### 8.2 Notes Extraction

**Primary path: ScriptingBridge.** Use Apple's ScriptingBridge framework (the modern Objective-C / Swift API for the same Apple Events system that powers AppleScript). This is the path Chintan Ghate, Exporter's developer, migrated to after two years of using raw AppleScript — he stated publicly that AppleScript was "hard to handle complex programs, and handing off data to Swift or Objective-C from AppleScript." ScriptingBridge gives type-safe, native integration with the rest of the Swift codebase while still going through Apple's blessed, version-stable scripting dictionary for Notes.

Requirements:
- Automation permission (System Settings → Privacy & Security → Automation), prompted on first use.
- Notes.app must be installed (always true on macOS).
- Notes.app will activate during extraction — UX must handle this gracefully (see Risks).

**Why not direct SQLite read (deferred to v1.5 or later):**

The Notes database lives at `~/Library/Group Containers/group.com.apple.notes/NoteStore.sqlite`, but reading it is significantly harder than it first appears. Note bodies are not stored as text — they're stored in the `ZMERGEABLEDATA` field as a custom CRDT representation that Apple developed internally. From the March 2023 Hacker News thread on Apple Notes Liberator, oneearedrabbit (who built an ORM over the database) describes Apple Notes as using "two flavors of CRDT-like algorithms: one for plaintext chunks ('topotext') and the other for embedded objects like tables." dunham, who wrote a SQLite-based parser, notes: "topotext is weird and unlike anything I've found in the literature. It is kind of like RGA, but with more links. And I haven't seen anyone else layer attributes on top of text… I think my table decoding may be broken now."

Multiple smart engineers have started SQLite-based projects and shelved them. The schema also evolves with macOS releases — oneearedrabbit explicitly cites a "long tail of databases to parse… starts with Mountain Lion and then adds up quickly." This is a months-long reverse-engineering project with ongoing maintenance burden, justified only if ScriptingBridge performance becomes the bottleneck on large libraries.

We will revisit SQLite as an optional fast path in v1.5+ if real user data shows ScriptingBridge is too slow on 5,000+ note libraries. Not before.

**Why not IMAP sync (rejected):**

Apple Notes can sync to non-iCloud IMAP accounts, exposing notes as email messages. This is cross-platform, requires no AppleScript, and could in theory be read from any OS. We explicitly reject this path because IMAP-synced Notes lose attachments, checklists, photos, tables, and most rich formatting — the same Hacker News thread documents this loss in detail (polyrand spent significant time building a CMS on this approach and abandoned it for these reasons). A migration tool that silently drops attachments is worse than no migration tool. IMAP would also require users to set up a sync account and wait for re-sync, adding significant onboarding friction.

**Locked notes:** Neither ScriptingBridge nor SQLite can read locked note content directly — the decryption key only exists in memory when Notes has them unlocked. UX handles this by prompting the user to unlock locked notes in the Notes app, then resuming extraction. Never skip silently.

### 8.3 Local AI

- **Bundled model:** Gemma 3 4B or Llama 3.2 3B Instruct, MLX-optimized for Apple Silicon. ~2.5 GB bundled or downloaded on first run.
- **Inference runtime:** MLX-Swift directly, or embedded llama.cpp via Swift bindings.
- **Embeddings model:** nomic-embed-text or similar small embedding model for duplicate detection (~100 MB).
- **Intel Macs:** Fall back to llama.cpp with CPU inference; slower but functional. May warn user about processing time.

### 8.4 Optional Cloud AI

User can provide their own API key for Claude or OpenAI. Used for:

- Higher-quality title generation on large libraries where local is slow.
- Better duplicate detection on edge cases.
- Always opt-in, never default. Stored in macOS Keychain.

### 8.5 Output Writers

Modular writer per destination. Each writer takes the canonical internal representation (notes + metadata + attachments + taxonomy + duplicate decisions) and produces destination-specific output. Adding new destinations = writing new writer module.

### 8.6 Privacy & Safety

- All processing local by default.
- No analytics, no crash reporters that send content. Crash reports require explicit user submission with redacted content.
- Source notes are *never modified*, regardless of source app. Output goes to user-chosen folder; if they hate it, they delete the folder.
- API keys (if provided) stored in Keychain, never logged.
- Privacy policy is one paragraph long: "We don't see, store, or transmit your notes. Everything happens on your Mac. If you opt into cloud AI, your notes go to that provider under their terms."

### 8.7 Source Adapter Architecture (Platform Extensibility)

The engine is designed source-agnostic from day one, even though v1.0 ships only the Apple Notes adapter. This is essential to the platform thesis — every new source we add should be a writer + adapter module slotting into existing infrastructure, not a rewrite.

**The canonical intermediate representation (CIR):**

All sources extract into a common data model:

```
Note {
  id: stable opaque id
  title: string?
  body: markdown
  body_html: html?            (for richer destination rendering)
  created_at: timestamp
  modified_at: timestamp
  folder_path: string[]
  tags: string[]
  attachments: Attachment[]
  links_to: note_id[]
  source_metadata: opaque blob (source-specific extras)
  language: detected_language?
  is_locked: bool
}

Attachment {
  filename: string
  mime_type: string
  data: bytes | filepath
  width / height / duration: optional media metadata
  ocr_text: string?           (for scanned documents)
}
```

Source adapters produce CIR. Destination writers consume CIR. Enrichment runs on CIR between the two. Adding a new source = implementing one adapter against this interface.

**Source adapter interface:**

```
interface SourceAdapter {
  identify(): SourceInfo                    // name, version, capabilities
  validate(): ValidationResult              // can we read this source?
  scan(): LibrarySummary                    // counts, before any actual extraction
  extract(progress_callback): Note[]
  cleanup(): void
}
```

**Source-specific implementations at launch and roadmap:**

- **v1.0 — Apple Notes adapter.** ScriptingBridge-based, Mac-only. Documented in §8.2.
- **v2.0 — Evernote adapter.** .enex file parser, cross-platform. .enex is XML-based, well-documented, contains base64-encoded attachments inline. Significantly simpler to implement than the Apple Notes adapter — no permissions, no scripting, no proprietary CRDT format. Likely 2-3 weeks of work given the engine is already in place.
- **v2.5 — Notion adapter.** .zip export parser, cross-platform. Notion's export structure is messy (nested folders with UUID suffixes, broken internal links) but the formats inside are markdown + HTML + CSV. Main engineering effort is link rewriting and folder restructuring.
- **v3.0+ — OneNote, Roam, Day One, Bear, etc.** Each becomes an adapter module. OneNote has the most complex export format; Roam has a clean .json export; Day One has SQLite-based local backup files; Bear has SQLite + Markdown export.

**Why this architecture matters strategically:**

The engineering investment compounds. By the time we ship the Evernote adapter at v2.0, we already have: three destination writers, AI enrichment, the review UI, the verification report, the permissions and onboarding flow, the Mac App Store presence, and the brand. Evernote-to-Obsidian as a standalone product would take 6-12 months to build to the same polish. As an adapter on top of Carry, it's weeks. This asymmetry is the platform moat.

---

## 9. UX Flow

1. **Open app → "Where to?"** Pick destination first. This shapes everything.
2. **Permissions onboarding.** Walk user through Automation grant with screenshots/video. Offer "preview with 5 notes" mode before requiring full access. Single biggest drop-off point; over-invest here.
3. **Scan.** Read library, show summary: count of notes, folders, attachments, locked notes. Estimated time.
4. **Unlock locked notes** (optional, if any exist). Modal walks through unlocking in Notes.
5. **Enrichment options.** Three toggles (titles, tags, duplicates), model picker (local vs cloud). Sensible defaults: all on, local model.
6. **Processing.** Progress bar with live status: "Generating titles… Clustering tags… Finding duplicates…" Playful loading messages, no jargon.
7. **Review.** The make-or-break screen described in 7.3. User can spend 0 seconds (accept defaults) or 30 minutes (curate every tag).
8. **Execute.** Write to destination. Progress bar.
9. **Done screen.** Verification report + one-click "Open destination" + share prompt ("Migration took 8 minutes. Tell a friend?") + thumbs up/down for product feedback.

---

## 10. Success Metrics

### Activation
- % of users who grant permissions after install
- % who complete scan
- % who reach review screen
- % who execute the migration

### Quality
- % of AI-generated titles accepted without edit
- % of proposed tags accepted into final taxonomy
- Self-reported satisfaction post-migration (1–5 scale)
- Verification report "looks right" rate

### Business
- Conversions (free preview → paid)
- Word-of-mouth coefficient (referral source on signup)
- Reviews and ratings on Mac App Store

### Anti-metrics (intentionally not optimizing)
- DAU / retention. This is a one-shot tool. High retention would mean people are migrating repeatedly, which is bad.
- Time-in-app. Less is better.

---

## 11. Pricing & Business Model

**Two-tier, one-time pricing — no subscriptions.**

### Free tier (unlimited)
- Full library export to Obsidian, Notion, or plain markdown.
- Per-note attachment folders.
- Preserved dates and folder hierarchy.
- Locked notes handling.
- Verification report.
- No artificial limits on library size or attachments.

### Pro tier — $19 one-time unlock
- All AI enrichment features: title generation, tag taxonomy clustering, duplicate detection, language detection.
- Full three-tab review UI.
- Cloud AI option (bring your own Claude or OpenAI API key) for higher-quality enrichment on large libraries.

**Why no subscription:** Migration is a finite job. Subscriptions for one-shot tools breed resentment and bad reviews. One-time pricing aligns with how users actually experience the product — pay once when you need it, recommend to a friend.

**Why a fully functional free tier:** Three reasons.

1. **Honest value distribution.** Export is the infrastructure; enrichment is the intelligence. Users with clean libraries don't need intelligence; they get the infrastructure free. Users with messy libraries get obvious value from the AI and convert.
2. **Distribution and trust.** A great free tier generates word-of-mouth and reviews. A crippled free tier generates frustration. The free tier is the marketing.
3. **Competitive moat.** Anyone entering this space now has to match the free tier before selling enrichment. That's a higher barrier than competing against a fully-paid product.

**Pricing anchor:** Exporter charges $6.50 (29.99 lei) for a single in-app feature (folder filtering). Our free tier exceeds that on its own. The Pro tier at $19 represents a different category of feature — AI enrichment is not what Exporter offers — so the comparison is apples to oranges, but the price ratio (roughly 3x) is defensible given the capability delta.

**Future revenue:** Adjacent products. "Notion → Obsidian" migrator. "Evernote rescue" tool. Same engine, different inputs/outputs. The platform is "data migration with AI enrichment," not specifically Apple Notes.

---

## 12. Risks & Mitigations

### High

- **Permissions friction kills activation.** Mitigation: invest disproportionate UX effort in the permissions walkthrough. Sample-of-5 preview mode before requiring full access.
- **Apple Intelligence ships overlapping features.** Mitigation: we're a *bridge out*, not in-place improvement. Apple has zero incentive to make leaving Notes easier. Position around destinations.
- **Local model quality disappoints.** Mitigation: ship with strong prompts, cloud fallback option, transparent confidence indicators in the review UI. Users can edit anything they don't like.

### Medium

- **Platform scope creep.** Once the engine exists, the temptation to add "just one more source" is constant. Each new source is an adapter module, integration testing, support burden, and marketing moment. Shipping six mediocre source adapters is worse than shipping two great ones. Mitigation: explicit per-source launch criteria (documented in §13), demand validation before any engineering investment, and discipline about not putting unsupported sources on the homepage.
- **macOS update breaks ScriptingBridge path.** Apple maintains the Notes scripting dictionary but has changed fields between major releases. Mitigation: active monitoring of macOS beta releases, single-developer agility to patch within days, set a clear minimum macOS version and don't try to support the long tail. Note: this risk only affects the Apple Notes adapter — Evernote, Notion, and other file-based adapters are immune.
- **Notes.app activates visibly during extraction.** ScriptingBridge wakes the target app, so Notes will pop to the foreground when migration starts — a "feels like duct tape" moment that distinguishes utility tools from products. Mitigation: warn the user upfront ("Notes will open during this — that's normal"), keep our own progress UI on top, make the loading screen engaging enough that the Notes activation feels like part of the show rather than a glitch.
- **Edge cases in Notes content** (legacy IMAP accounts, encrypted notes, malformed attachments). Mitigation: graceful skipping with verification report transparency. Honest "here's what didn't work" beats silent failure.
- **Exporter as direct free-tier competitor.** With our free tier offering organized export, we overlap with Exporter's core capability — and our free tier output is better organized than Exporter's paid output (per-note attachment folders vs. flat dump). However, this is not really a competitive risk because we're in different market segments: Exporter is a $6.50 utility for users who want a quick dump; we're a polished migration product for users who want a destination-ready result with optional AI enrichment. The audiences self-select, and the Pro-tier value (AI enrichment) is not something Exporter offers. No preemptive outreach needed — we'll credit Exporter publicly at launch as the project that proved this approach was viable, but we don't need permission to build a better product. Both can coexist.

### Low

- **Destination apps change formats.** Mitigation: modular writer architecture. Updating one destination doesn't touch others.
- **User has duplicate Apple IDs / multi-account Notes.** Mitigation: explicit account picker in onboarding.

---

## 13. Phasing

The release schedule is organized around **source rollout**. Each major version adds a new source adapter; minor versions add destinations or refine enrichment. The Apple Notes launch is the platform's first instance, not the entire product.

### v0.1 — Internal alpha (4 weeks)
- Engine architecture: source adapter interface, canonical intermediate representation, destination writer interface — all stubbed so future sources slot in cleanly.
- ScriptingBridge-based Apple Notes adapter.
- Plain markdown writer with per-note attachment folders.
- No AI yet. No review UI yet.
- Verification report.
- Goal: prove the export path works on a real 2,000-note Apple Notes library, measure timing, validate the adapter architecture is genuinely extensible.

### v0.5 — Closed beta (8 weeks)
- Add Obsidian destination writer.
- Add AI title generation, local model only.
- Basic review screen for titles.
- Ship to 20 beta users from Obsidian community.

### v1.0 — Apple Notes public launch (16 weeks)
- Apple Notes adapter, three destinations (Obsidian, Notion, plain markdown).
- Full enrichment: titles, tags, duplicates, language.
- Full review UI with three tabs.
- Free / Pro tier model.
- Mac App Store submission.
- Goal: validate the product with the Apple Notes audience while the engine is ready for the next source.

### v1.5 — Polish & infrastructure (1-2 months post-launch)
- Additional destinations driven by user demand (Reflect, Logseq, Bear).
- Cloud AI option (Claude / OpenAI API key).
- Content type detection.
- Cross-references (`note://` link rewriting).
- Optional direct-SQLite fast path for Apple Notes libraries over ~3,000 notes if real-world data shows ScriptingBridge timing is unacceptable.
- Begin development on Evernote adapter using the v1.0 engine.

### v2.0 — Evernote launch (3-4 months post-v1.0)
- Evernote adapter. Reads .enex files (Evernote's official export format) and direct iCloud/local sync where possible.
- Same engine, same destinations, same enrichment.
- New landing page specifically for Evernote-to-Obsidian / Evernote-to-Notion flows.
- Cross-platform support: since .enex is a file-based format, the Evernote adapter doesn't require macOS. Opens Windows and Linux support for Evernote users (Mac app remains the primary surface but a cross-platform CLI or web tool for the .enex path is on the table).
- Existing Pro users get Evernote support automatically — proof point for the "one unlock, all sources" promise.

### v2.5 — Notion-out launch (2 months post-v2.0)
- Notion-out adapter. Processes Notion's official .zip export, untangles the nested folder mess, rewrites internal links cleanly.
- Same engine, same destinations, same enrichment.
- Cross-platform (file-based input).
- New landing page for Notion-to-Obsidian and Notion-to-markdown flows — the most actively searched destination pair in our keyword research.

### v3.0+ — Continued source expansion
- OneNote, Roam Research, Day One, Bear, and other sources added in order of demonstrated demand.
- Each new source = an adapter module + a landing page + a launch moment.
- Engine and enrichment continue to compound — by v3.0 the quality bar is higher than any single competitor can match.

### Strategic note on phasing

Each launch is its own marketing moment with its own landing page and its own audience. Internally it's one product with one codebase. Externally, "Apple Notes → Obsidian" and "Evernote → Obsidian" are different promises to different users at different times. Resist the temptation to put "supports 8 source apps" on the homepage; that's how migration tools end up being good at nothing.

---

## 14. Open Questions

1. **Source prioritization after v1.0.** Current plan is Evernote (v2.0) → Notion-out (v2.5) → OneNote/Roam/Day One (v3.0+). Driven by Evernote's documented refugee energy and Notion-out's destination search volume. Worth validating with v1.0 launch traffic — if Apple Notes users frequently ask "do you support X next?", that may shift the order.
2. **Cross-platform timing.** Evernote and Notion adapters are file-based and inherently cross-platform. Question is whether to ship a Windows/Linux build alongside v2.0 or stay Mac-only until later. Argument for cross-platform: doubles the Evernote audience. Argument against: doubles QA surface, dilutes "best-in-class Mac app" positioning.
3. **Bundled model vs download-on-first-run.** Bundling means a 3 GB initial download. Downloading on first run means an awkward first-launch wait. Test both with users.
4. **Pricing experimentation.** Is $19 right for Pro unlock? Worth testing $14, $19, $24 with landing-page splits before launch. Free tier should remain free in all variants. *Open: does Pro pricing change if/when we add Evernote? My instinct is no — one unlock covers all sources, in perpetuity, is the right brand promise.*
5. **Mobile preview / control.** Could a companion iOS app trigger the Mac-side migration remotely, or provide a place to review the migration plan on the go? Probably overengineering for v1, but worth thinking about as v3+ infrastructure.
6. **Source-specific landing pages vs unified landing page.** Each new source launch should have its own landing page focused on that source's pain (e.g. evernote-refugee.com), but the product itself is unified. The marketing question: do we run multiple domains and SEO targets, or one site with multiple source-specific pages? Probably the latter, but worth A/B testing once we have data.
7. **What constitutes "v2.0 launch" success?** Apple Notes launch metric is "1,000 paid conversions in 90 days" — defensible from the keyword research. Evernote launch metric needs to be 5-10x that to justify the engineering. If the Apple Notes launch teaches us that conversion economics don't scale linearly with audience, we may need to rethink the platform thesis.

---

## 15. Definition of Done (v1.0)

- A new user with no prior context can install, grant permissions, migrate a 1,000-note library to Obsidian, and reach the "done" screen with a satisfactory result in under 15 minutes total wall-clock time, with no manual cleanup required afterward beyond their own preferences.
- 50% of users in beta rate the result 4+ out of 5 on satisfaction.
- Verification report accurately reflects what was migrated; no silent failures.
- Mac App Store approval received.

---

*Document version 0.4. Major pivot: reframed from "Apple Notes migration tool" to "Carry — multi-source migration platform." Apple Notes is now positioned as the v1.0 launch wedge, with Evernote (v2.0), Notion-out (v2.5), and other sources following. Driven by keyword research showing Apple Notes alone is too narrow a market (head term 880/mo) while Evernote and Notion-out clusters are significantly larger. Architecture explicitly source-agnostic via the adapter pattern (§8.7). One Pro unlock covers all current and future sources — trust-building over per-source extraction. Next revision after v1.0 launch data validates (or invalidates) the platform thesis.*
