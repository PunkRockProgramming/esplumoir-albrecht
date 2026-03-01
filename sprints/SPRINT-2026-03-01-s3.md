# Sprint 3 — Scales, Session, Forge Export

**Goal:** Add pentatonic and blues scales (the biggest missing feature for a guitar tool), finish the Forge export workflow, polish chord identification, and add session persistence so the tool remembers where you left off.

---

## Decisions

- **Pentatonic/blues in the Grimoire visualizer only** — no key card entries needed. Add the modes to `SCALE_INTERVALS` and `MODE_LABELS` so the free root+mode selectors include them. The fretboard and piano render correctly for any scale size already. No diatonic chord tabs for these modes (skip chord tab rendering when scale has < 6 notes).
- **Barre detection** — if 2+ strings share the same minimum selected fret (fret > 0), append `(barre N)` to the chord name. Simple heuristic, not exhaustive.
- **Export format** — plain-text ASCII tab block, all chords side by side with chord name below each column. Copy to clipboard via `navigator.clipboard.writeText()`. Show a brief "copied!" confirmation on the button.
- **Session persistence** — save selected key id + tuning id to `localStorage` under `esplumoir-session`. Restore on load before rendering. Synthetic keys (free selector picks not in key cards) are not persisted — only card-selected keys by id.

---

## Tasks

### Grimoire — Pentatonic + blues scales
- [x] Add to `SCALE_INTERVALS` in `script.js`:
  - `pentatonicMajor: [0, 2, 4, 7, 9]`
  - `pentatonicMinor: [0, 3, 5, 7, 10]`
  - `blues: [0, 3, 5, 6, 7, 10]`
- [x] Add to `MODE_LABELS`:
  - `pentatonicMajor: 'Pentatonic Major'`
  - `pentatonicMinor: 'Pentatonic Minor'`
  - `blues: 'Blues'`
- [x] In `computeDiatonicChords`: return `[]` early if scale has fewer than 6 intervals (no chord tabs for pentatonic/blues)
- [x] In `renderChordTabs`: if `currentDiatonicChords` is empty, show a single "Scale" tab only — no chord tabs
- [x] Smoke test: select E + Pentatonic Minor → fretboard shows 5 dots per octave, no chord tabs appear

### Grimoire — Relative key links
- [x] In `renderKeys()`, add a `relatedKeys` line to each key card showing the related key names as clickable spans
- [x] Clicking a related key name finds the matching key in `allKeys` by name and calls `selectKey()` on it
- [x] If the related key is not in `allKeys` (e.g. a mode not in the data), render it as plain text

### The Forge — Barre chord detection
- [x] In `updateForge()`: after identifying the chord name, check `forgePositions` for a barre — find the minimum fret > 0 that appears on 2+ strings
- [x] If found, append ` (barre ${n})` to the displayed chord name (display only, not stored in progression chip name)

### The Forge — Export progression as tab
- [x] Add an "Export tab" button next to the Save button in `.forge-save-row`
- [x] `exportForgeTab()` — builds a plain-text tab block with string labels, fret columns, chord names below
- [x] Copy to clipboard with `navigator.clipboard.writeText()` (execCommand fallback)
- [x] Button text temporarily changes to "copied!" for 1.5s then resets
- [x] Disabled (greyed) when progression is empty

### Session — Save + restore key and tuning
- [x] On `selectKey(keyData)`: if `keyData.id` is non-null, write `{ keyId: keyData.id, tuningId: vizTuningId }` to `localStorage` under `esplumoir-session`
- [x] On `vizTuningSelect` change: update `esplumoir-session.tuningId`
- [x] In `DOMContentLoaded` init: after data is loaded, read `esplumoir-session`; if found, restore tuning select value and call `selectKey()` on the matching key — fall back to E minor if not found

---

## Done When

- `E + Pentatonic Minor` renders 5 dots on fretboard and piano, no chord tab strip
- `A + Blues` renders 6 dots correctly
- Related key names appear on key cards and clicking navigates to that key
- Barre chords show `(barre N)` in the Forge chord panel when applicable
- Forge "Export tab" copies a readable ASCII tab block to clipboard and shows "copied!"
- Reloading the page restores the previously selected key and tuning
- No console errors
