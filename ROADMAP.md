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

### v2 — Content Depth + Forge Polish
- Strategies deck expanded 15 → 30 cards (balanced across 6 categories)
- Keys expanded 20 → 32 entries — all 12 major + all 12 minor roots covered with full `emotionalProfile` prose
- Forge: mute/open string indicators above fretboard (× / O / fret number, amber when active)
- Forge: chord reorder arrows (‹ ›) on progression chips
- Grimoire: first-position mode toggle (frets 0–4, inlay markers clip to range)

---

## Next

### Content
- [ ] More Helix tones (9 → 15) — broader genre coverage
- [ ] More Logic instruments (13 → 25) — heavier ambient / industrial / folk
- [ ] Expand mood profiles (45 → 60+)

### The Forge
- [ ] Export progression as plain-text tab block (copy to clipboard)
- [ ] Barre chord detection — if all selected frets share a minimum, label as barre

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
