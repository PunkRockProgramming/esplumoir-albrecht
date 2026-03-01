# esplumoir-albrecht — Roadmap

*Songwriting reference tool. Dark studio aesthetic. Oblique Strategies meets guitar pedal board.*

---

## Shipped

### v1 — Core Tool
- Data files: keys (20+), tunings (4), tones (9), instruments (13), strategies (15), mood profiles (45)
- **Grimoire** — key/mode reference with emotional profiles; root + mode free selectors; SVG fretboard (0–12) + piano visualizer; diatonic chord tabs (Scale / I–VII) that filter fretboard to chord notes; scale degree color legend; tuning selector
- **Suggestions panel** — Analog (Helix tones) / Digital (Logic instruments) toggle, filtered by key mood tags
- **Mood search** — client-side keyword scoring against 45 pre-researched profiles; returns key, tone, instrument, and starting point suggestions with no API call
- **Esoteric Strategies** — 15-card deck with reversed state (~30% draw chance), flip animation, category badge
- **The Forge** — interactive SVG fretboard (click to select notes); chord identification (16 templates: power → 9ths); chord chips + tab frames showing voicing; progression builder; localStorage save and recall of named progressions
- Static site — no server, no build step, no dependencies; deployed on GitHub Pages

---

## Next

### Sprint 2 (active)
- [in-sprint] Expand strategies deck: 15 → 30 cards
- [in-sprint] Fill all 12 major + 12 minor keys (complete root × mode coverage)
- [in-sprint] Forge: mute / open string indicators above fretboard (× / O)
- [in-sprint] Forge: reorder chords in progression (← → on chips)
- [in-sprint] Grimoire: first-position mode toggle (frets 0–4 only)

### Content
- [ ] More Helix tones (9 → 15) — broader genre coverage
- [ ] More Logic instruments (13 → 25) — heavier ambient / industrial / folk
- [ ] Expand mood profiles (45 → 60+)

### The Forge
- [ ] Export progression as plain-text tab block (copy to clipboard)
- [ ] Barre chord detection — if all selected frets share a minimum fret, label it a barre

### Grimoire
- [ ] Relative key links on each key card (e.g. "relative major: G")
- [ ] Pentatonic and blues scale support

### Session / Export
- [ ] Save current key + tuning selection to localStorage (restore on reload)
- [ ] Export current Grimoire view (key + fretboard) as SVG download

---

## Deferred / Unlikely

- Server / CLI (`song serve`) — dropped in favor of static deployment
- Lyrics brainstorm section — removed; out of scope
- MIDI output — too heavy
- Audio playback in browser — too heavy
- Multi-user / cloud sync — personal tool only
