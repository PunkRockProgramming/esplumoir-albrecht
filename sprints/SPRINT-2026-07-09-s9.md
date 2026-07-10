# Sprint: Session Logging + Deep-Link Gap-Fill (s9)

**Date:** 2026-07-09
**Type:** Build
**Ratio:** 20% quick wins / 80% session-logging focus

---

## Goal

Give Grimoire/Forge/Esoteric Strategies memory between sessions so the app can feed the Claude Desktop practice project and the Obsidian vault without manual after-the-fact logging. Close the URL-param gaps so a practice session can deep-link straight into a scale view or a Forge progression. Source: vault note `1 Projects/Active/punkrockprogramming/Esplumoir Albrecht.md` (Feature Ideas + Enhancement Requests, triaged 2026-07-09).

---

## Decisions (locked before sprint starts)

- **:3232 vs :3341:** Stay separate. `song serve` (:3232) serves the static app; `wiz song open` (:3341) is the live session sync server. No convergence this sprint.
- **Strategy deck growth:** Not in this sprint. Future content sprint — brainstorm session, sources mixed from Oblique Strategies lineage and mined session notes. Logged on workspace roadmap.
- **Draw history per song folded into draw log:** One task — timestamped draw log always, song-slug association added when a wiz session is live.
- **Stretch items last:** Direct vault write and the strategy draw log stay at the end of the order regardless of value score.
- **Storage:** New localStorage keys — `esplumoir-session-log` (per-visit activity events), `esplumoir-draws` (strategy draw log). Existing `esplumoir-forge` schema gains optional metadata fields (`savedAt`, `key`, `mode`, `tuning`, `moods`); old records without them must keep loading.
- **Process:** One branch + one PR per task; task marked `[x]` only after its PR merges.

---

## Tasks

### Quick Wins
- [x] **T1 — Voicings for deep-linked progressions.** *(PR #1, merged 2026-07-09)* In `initFromParams()`, generate voicings via `generateFirstPositionVoicing()` instead of empty Maps for `progression` params; apply the `tuning` param to the Grimoire visualizer (`vizTuningId`), not just the Forge.
- [x] **T2 — URL-param gap-fill.** *(PR #2, merged 2026-07-09)* `tool` (land on a section), `root` + `mode` as separate Grimoire params (via `makeSyntheticKey`), `mood` as pre-filter, `notenames`/`firstposition` booleans, Forge `key`+`mode`, scale-degree shorthand progressions (`i,VI,III,VII`) and bare literal chord lists.

### Session Logging
- [x] **T3 — Session capture on Forge save.** *(PR #3, merged 2026-07-10)* Saved progressions carry `savedAt`, root/mode, tuning, and mood tags touched during the visit. Backward-compatible with existing `esplumoir-forge` records.
- [x] **T4 — Export to Markdown.** *(PR #4, merged 2026-07-10)* `buildForgeMarkdown()` beside `buildForgeTabText()` — chord names, tab block, date/key/tuning metadata — copy button per saved progression, paste-ready for Obsidian.
- [x] **T5 — Session log view.** *(PR #5, merged 2026-07-10)* Event log (key selected, mode explored, progression built/saved, card drawn, mood searched) → `esplumoir-session-log`; timestamped per-visit view in the UI.

### Features
- [x] **T6 — Progression audition (WebAudio).** *(PR #6, merged 2026-07-10)* Play a stored progression in-browser from its voicings; play/stop state; no external deps.
- [x] **T7 — Mode/borrowed-chord suggestions.** *(PR #7, merged 2026-07-10 — includes computeDiatonicChords triad-stacking fix)* Parallel-mode comparison off `SCALE_INTERVALS` + `computeDiatonicChords()` — "you're in D minor; here's dorian / a borrowed IV" panel in the Grimoire.

### Stretch
- [x] **T8 — Strategy draw log (+ per-song history).** *(PR #8, merged 2026-07-10)* Every draw appends `{timestamp, cardId, reversed}` to `esplumoir-draws`; small history list in the Esoteric section; song-slug association when `wizSessionActive`. Draw events also feed the T5 session log.
- [ ] **T9 — Direct vault write.** "Save session to vault": `postToWiz` path when a :3341 session is live; File System Access API fallback (directory picked once) in static mode. Scope finalized at build time per the note.

### Close
- [ ] Update workspace `project-roadmap.md` — mark shipped, remove `[in-sprint]`
- [ ] Update `README.md` + `ROADMAP.md` for esplumoir-albrecht
- [ ] Update `esplumoir-albrecht/CLAUDE.md` if new patterns were established (new localStorage keys, WebAudio module)
- [ ] Archive this file → `sprints/SPRINT-2026-07-09-s9.md`
- [ ] Git commit, then run `node agents/orchestrator.js sync`

---

## Out of Scope

- Helix patch field on Song Context banner — blocked on `wiz helix` existing.
- Strategy deck growth — separate future content sprint (see roadmap).
- :3232/:3341 convergence — decided against for now.

---

## Done When

- A URL like `?tool=grimoire&root=E&mode=phrygian&tuning=b-standard&mood=menacing` lands directly on that scale view with the fretboard in the right tuning.
- Deep-linked progressions render tab frames with real voicings and can be auditioned in-browser.
- Saving a Forge progression records when, in what key/tuning, and under what moods it was made — and old saved progressions still load.
- A saved progression can be pasted into an Obsidian note as formatted Markdown in one action.
- A session leaves a timestamped trace viewable in the app.
- (Stretch) Every strategy draw is logged; a session can be written to the vault without copy/paste.
