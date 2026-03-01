# esplumoir-albrecht — Roadmap

*Songwriting reference tool. Dark studio aesthetic. Oblique Strategies meets guitar pedal board.*

---

## Shipped

### v8 — Forge Voicing Generator + Content Depth
- Forge: diatonic suggestion chips now generate a first-position voicing — `generateFirstPositionVoicing()` finds the lowest fret 0–4 per string that plays a chord tone, tuning-aware, algorithmic (no hardcoded shapes)
- Grimoire: 7th degree color changed from warm tan (#b88a3a) to steel blue (#6a8a9a) — no longer confused with the amber root
- Mood profiles expanded 90 → 105: +15 profiles covering coming-of-age, the uncanny, midnight confession, anticipation, self-directed anger, beautiful decay, estrangement, small wonders, post-joy melancholy, missing a specific person, vertigo/disorientation, fever, horizon/departure, swamp/humid wilderness, transgression

### v7 — Content Depth + Tunings
- Tunings expanded 4 → 8: open-d (Open D), open-g (Open G), c-standard (C Standard), bfbefb (BFBEFB / Modal B — DADGAD down 3 semitones)
- Mood profiles expanded 75 → 90: +15 profiles covering summer/heat, infatuation, jealousy/envy, depression/numbness, rain/storm, absurdism/dark humor, speed/velocity, homesickness, corruption/moral compromise, impermanence, altered state/intoxication, ennui/boredom, existential dread, hellish/infernal, hope

### v6 — Forge: Chord Suggestions + Text Export
- Forge: diatonic chord suggestions — key selector in forge controls; when key + chord are both set, 7 diatonic chips appear below chord identification; current chord root highlighted in amber; clicking another chip adds that chord name (empty voicing) to progression
- Forge: text file download — `⬇ TXT` button downloads progression as `[name].txt` using same ASCII tab format as clipboard export; enabled/disabled alongside Export tab button

### v5 — Content Depth + Slash Chords
- Instruments expanded 20 → 25: alchemy-piano (Steinway Grand), alchemy-mellotron (Mellotron Mk II), retro-synth-poly (Poly Analog Pad), sculpture-upright-bass (Upright Bass), ultrabeat-world-perc (World Percussion)
- Mood profiles expanded 64 → 75: +11 profiles covering claustrophobia, spring/rebirth, shame/guilt, surveillance, exhaustion/burnout, isolation in a crowd, transformation, science fiction, recklessness/youth, predator/hunting, home/returning home
- Forge: slash chord / inversion detection — `getForgeBassNote()` finds the lowest-pitched selected string; appends `/BassNote` when bass differs from chord root (e.g. `G/B`, `Am/E`, `D/F#`)

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
- [ ] Continue expanding mood profiles (90 → 105+)
- [ ] Add more keys / modes as needed (all 12 pentatonic minor, chromatic-adjacent modes)

### Content
- [ ] Continue expanding mood profiles (105 → 120+)

### The Forge
- [ ] Progression playback sketch — single strum ordering hint (text-based, no audio)
- [ ] Voicing quality improvements — generated shapes sometimes include low strings that guitarists would mute; could score by playability

---

## Deferred / Unlikely

- Server / CLI (`song serve`) — dropped in favor of static deployment
- Lyrics brainstorm section — removed; out of scope
- MIDI output — too heavy
- Audio playback in browser — too heavy
- Multi-user / cloud sync — personal tool only
