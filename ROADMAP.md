# esplumoir-albrecht — Roadmap

*Songwriting reference tool. Dark studio aesthetic. Oblique Strategies meets guitar pedal board.*

---

## Shipped

### v4 — Content Depth + SVG Export
- Tones expanded 9 → 15: shoegaze-wall, post-punk-chorus, jazz-clean, psych-fuzz, lo-fi-tape, noise-feedback
- Instruments expanded 13 → 20: vintage-keys-rhodes, alchemy-breath, sculpture-mallet, es2-sub-drone, alchemy-folk-strings, retro-synth-dark-lead, alchemy-ritual-bells
- Mood profiles expanded 49 → 64: +15 profiles covering fractured, autumn, tender, cold revenge, dreamlike, gothic, triumph, bunker, childhood, hunger, sacred, chaos, aftermath, coastal, folk storytelling
- Grimoire: SVG fretboard export — `⬇ SVG` button downloads `fretboard-{key}.svg` with current tuning/labels/position applied

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

### v3 — Scales, Session, Forge Export
- Grimoire: pentatonic major, pentatonic minor, blues scale support — fretboard + piano render correctly; chord tabs suppressed for sub-6-note scales
- Grimoire: related key links on each key card — clickable, navigates to that key
- Forge: barre chord detection — appends `(barre N)` to chord name when 2+ strings share a fret
- Forge: Export tab — ASCII tab block copied to clipboard with "copied!" confirmation; disabled when progression empty
- Session persistence — selected key + tuning saved to localStorage, restored on reload

---

## Next

### Content
- [ ] More Logic instruments (20 → 25) — remaining gaps
- [ ] Expand mood profiles (64 → 75+)

### The Forge
- [ ] Smarter chord identification — inversion awareness, slash chords (e.g. G/B)

---

## Deferred / Unlikely

- Server / CLI (`song serve`) — dropped in favor of static deployment
- Lyrics brainstorm section — removed; out of scope
- MIDI output — too heavy
- Audio playback in browser — too heavy
- Multi-user / cloud sync — personal tool only
