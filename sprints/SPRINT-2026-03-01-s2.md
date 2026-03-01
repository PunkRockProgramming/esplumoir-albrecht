# Sprint 2 — Deepen Data, Polish The Forge

**Goal:** More content, fewer rough edges. Expand the two data sets that feel thin (strategies, keys) and finish the Forge UX so it's genuinely useful for building progressions.

---

## Decisions

- Strategies expansion: write 15 new cards in the same tone — dark, terse, a little cruel. Same 6 categories. Each must have a `reversed` that subverts or contradicts the upright reading, not just negates it.
- Keys expansion: fill all 12 roots × major + minor (24 total). Existing entries count toward the 24. Add remaining roots where missing. Keep the same `emotionalProfile` prose standard — no bullet points, no lists.
- Forge mute/open: render `×` above strings with no selected fret, `O` above fret 0 selections. These are display-only labels above the SVG fretboard, not interactive.
- Forge reorder: arrow buttons (← →) on each chord chip to shift position in the array.

---

## Tasks

### Content — Strategies
- [ ] Add 15 new strategy cards to `data/strategies.js` (ids 16–30)
  - Maintain even distribution across categories: subtraction, inversion, process, constraint, sabotage, oracle
  - Each card: `text`, `reversed`, `category`

### Content — Keys
- [ ] Audit `data/keys.js` — list which of the 24 root × major/minor combinations are missing
- [ ] Write missing entries to complete all 12 major + 12 minor keys
  - Same schema: `id`, `name`, `root`, `mode`, `notes`, `moods`, `emotionalProfile`, `notableUses`, `relatedKeys`
  - `emotionalProfile` must be 2–4 sentence prose

### Forge — Mute / Open indicators
- [ ] Above the Forge fretboard SVG, render a row of 6 string indicators
  - String has a selected fret ≥ 1: show fret number (already visible on dot, this is optional — may skip)
  - String has fret 0 selected: show `O`
  - String has no selection: show `×`
  - Implemented as a small HTML row above `#forge-fretboard-container`, updated in `updateForge()`

### Forge — Reorder chords in progression
- [ ] Add `←` and `→` buttons to each chord chip in `renderForgeProgression()`
- [ ] `←` swaps chord at index `i` with `i - 1` (disabled/hidden at index 0)
- [ ] `→` swaps chord at index `i` with `i + 1` (disabled/hidden at last index)
- [ ] After swap: call `renderForgeProgression()` to re-render chips + tab frames

### Grimoire — First-position mode
- [ ] Add a "First position" checkbox or toggle to the viz-controls row
- [ ] When active, `renderFretboardSVG` only shows dots on frets 0–4
- [ ] State: `vizFirstPosition = false` — toggling re-calls `updateVisualizer()`

---

## Done When

- `data/strategies.js` has 30 cards
- `data/keys.js` has all 12 major + 12 minor (24 minimum) with full `emotionalProfile` prose
- Forge fretboard shows mute/open indicators above strings
- Chord chips have working reorder arrows
- Grimoire has a first-position toggle that restricts fretboard to frets 0–4
- No console errors, local dev clean at `http://localhost:3232`
