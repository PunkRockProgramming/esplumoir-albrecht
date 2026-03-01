# esplumoir-albrecht — Roadmap

*Songwriting reference tool. Dark studio aesthetic. Oblique Strategies meets guitar pedal board.*

---

## Shipped

### v1 — Core Tool
- Data files: keys (20+), tunings (4), tones (9), instruments (13), strategies (15)
- **Grimoire** — key/mode reference with emotional profiles; root + mode free selectors; fretboard (SVG, 0–12) + piano visualizer; diatonic chord tabs (Scale / I–VII) that filter the fretboard to chord notes; scale degree color legend
- **Suggestions panel** — Analog (Helix tone presets) / Digital (Logic instruments) toggle, filtered by key mood tags
- **Mood search** — client-side keyword scoring against 45 pre-researched mood profiles; returns key, tone, instrument, and starting point suggestions instantly with no API call
- **Esoteric Strategies** — 15-card deck with reversed state (~30% draw chance), flip animation, category badge
- **The Forge** — interactive fretboard (click to select notes); chord identification (16 templates: power through 9ths); chord chips with tab diagrams showing fret/string layout; progression builder; localStorage save and recall of named progressions
- Static site — no server, no build step; deployed on GitHub Pages

---

## Next

### Content Depth
- [ ] Expand strategies deck: 15 → 30 cards
- [ ] Add more keys: fill out all 12 roots × major/minor + remaining modes (~30 total)
- [ ] More Helix tones (9 → 15) — broader genre coverage
- [ ] More Logic instruments (13 → 25) — heavier ambient/industrial/folk representation
- [ ] Pentatonic and blues scale support in the Grimoire visualizer

### The Forge — Enhancements
- [ ] Mute/open string markers (× and O) above the fretboard
- [ ] Barre chord detection — if all selected frets share a minimum, suggest it's a barre
- [ ] Export progression as plain-text tab block
- [ ] Reorder chords in progression (drag or arrow buttons)

### Grimoire — Enhancements
- [ ] First-position mode toggle (frets 0–4 only) for the visualizer
- [ ] Relative key links on each key card (e.g. "relative major: G")
- [ ] Notable uses expanded — more entries, linked to Esoteric cards thematically

### Session / Export
- [ ] Save current key + tuning selection to localStorage (restore on reload)
- [ ] Export current Grimoire view (key + fretboard) as SVG or PNG

---

## Deferred / Unlikely

- Server / CLI (`song serve`) — dropped in favor of static deployment
- Lyrics brainstorm section — removed; out of scope
- MIDI output — too heavy
- Audio playback in browser — too heavy
- Multi-user / cloud sync — personal tool only
