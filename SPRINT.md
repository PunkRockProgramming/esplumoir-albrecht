# Sprint 1 — Build v1 Core

**Goal:** Working tool with all five sections functional and AI suggestions live.
**Start from:** Empty scaffolded directory. CLAUDE.md has all architecture decisions locked.

---

## Decisions (already locked — do not re-litigate)

- Express + static `public/` — same pattern as creature-db
- CLI linked as `song`, port 3232
- No streaming — full JSON response from Claude
- Tab generation: algorithmic, client-side, ASCII output
- `.env` at `../pictures-to-story-graph/.env`
- No database — flat JS files only

---

## Tasks

### Phase 1 — Scaffold
- [ ] Write `package.json`: `"type": "module"`, `"bin": { "song": "./bin/song.js" }`, deps: `express`, `@anthropic-ai/sdk`, `dotenv`
- [ ] `npm install` inside `esplumoir-albrecht/`
- [ ] `npm link` to register `song` globally
- [ ] Verify: `song` is found by shell

### Phase 2 — Data Files
- [ ] Write `data/keys.js` — 20+ entries using schema in CLAUDE.md
  - Must include: C major, A minor, D Dorian, E Phrygian, B Phrygian Dominant, F# minor, G major, E minor, A Dorian, C# minor, Bb major, F major, G Dorian, D Mixolydian, A Harmonic Minor, B minor, Eb major, Ab major, C Lydian, D minor
  - Each entry must include `emotionalProfile`: a rich 2–4 sentence paragraph describing what emotions the key is historically and culturally known to evoke, how it feels to play, and its character (not a list — prose)
- [ ] Write `data/tunings.js` — 4 entries: E Standard, Eb Standard, DADGAD, B Standard
- [ ] Write `data/tones.js` — 8–10 Helix Native presets (clean Fender, crunch Marshall, high-gain modern, doom/fuzz, ambient reverb, edge-of-breakup, heavy metal, acoustic sim + 1–2 more)
- [ ] Write `data/logic-instruments.js` — 12–15 Logic Pro instruments (Alchemy pads, ES2 leads, Retro Synth, Vintage Clav, strings, choir, Sculpture textures, orchestral percussion + more)
- [ ] Write `data/strategies.js` — exactly these 15 cards (each has `text` and `reversed`):
  ```
  1.  text:     "Remove the note that is doing the most work."
      reversed: "The note doing the most work is the only thing holding it together. Do not touch it."
      category: subtraction

  2.  text:     "Play what the song is afraid of."
      reversed: "The song's fear is justified. Do not go there."
      category: oracle

  3.  text:     "The verse is a lie. The chorus admits it."
      reversed: "The chorus is the lie. The verse has been telling the truth all along."
      category: inversion

  4.  text:     "Tune down until it becomes a different instrument."
      reversed: "Tune up until the instrument resists you."
      category: process

  5.  text:     "Write the bridge first. Then decide if you need the rest."
      reversed: "There is no bridge. There never was."
      category: constraint

  6.  text:     "Replace the chord with silence. Hold it longer than comfortable."
      reversed: "Fill every silence. Leave no room for doubt."
      category: subtraction

  7.  text:     "The song is already finished. You are only uncovering it."
      reversed: "The song does not exist yet. You are inventing it in real time."
      category: oracle

  8.  text:     "Record the mistake. Build the song around the mistake."
      reversed: "The mistake was not a mistake. What you called a mistake was the correct version."
      category: sabotage

  9.  text:     "Add a part that does not belong. Do not remove it."
      reversed: "Everything belongs. Nothing is wrong here. That is the problem."
      category: sabotage

  10. text:     "Sing it to someone who would not understand it."
      reversed: "Do not sing it to anyone. It is not ready to be heard."
      category: process

  11. text:     "The wrong key is the right key. Retune."
      reversed: "You were in the right key. You have now made it worse."
      category: inversion

  12. text:     "Double the tempo. Then half it. Which one is the song?"
      reversed: "Neither tempo is the song. The song exists only at the speed you cannot play it."
      category: constraint

  13. text:     "Write the outro first. Everything before it is justification."
      reversed: "There is no outro. This does not end."
      category: constraint

  14. text:     "What would this sound like if you had never heard music?"
      reversed: "You have heard too much music. It is too late."
      category: oracle

  15. text:     "The best part is the part you keep thinking about cutting."
      reversed: "The part you keep thinking about cutting should be cut. You already know this."
      category: inversion
  ```

### Phase 3 — Server + CLI
- [ ] Write `server.js`:
  - Import all 5 data modules
  - `express.static('public/')`
  - `GET /data/keys` → JSON KEYS
  - `GET /data/tunings` → JSON TUNINGS
  - `GET /data/tones` → JSON TONES
  - `GET /data/instruments` → JSON LOGIC_INSTRUMENTS
  - `GET /data/strategies` → JSON STRATEGIES
  - `POST /api/suggest` — stub returning `{ error: "not implemented" }` for now
  - `POST /api/lyrics` — stub
  - Export `startServer(port)` function
- [ ] Write `bin/song.js`:
  - Parse `process.argv[2]` for command
  - `serve`: call `startServer(3232)`, log URL
  - Unknown command: print usage and exit 1
- [ ] Smoke test: `song serve` → curl `/data/keys` returns JSON array

### Phase 4 — Tab Algorithm (`public/script.js`)
- [ ] Define constants: `CHROMATIC`, `ENHARMONIC`, `SCALE_INTERVALS` (major, minor, dorian, phrygian, lydian, mixolydian, harmonicMinor, phrygianDominant)
- [ ] `normalizeNote(note)` — resolve enharmonics to sharps
- [ ] `buildScaleNoteSet(root, scaleType)` → Set of 7 note letter names
- [ ] `computeStringPositions(openNotes, noteSet, maxFret)` → array of fret arrays per string
- [ ] `renderScaleTab(positions, tuningName, mode)` → ASCII string (full neck or first position)
- [ ] `computeDiatonicChords(root, scaleType)` → array of 7 `{ degree, name, quality, notes }` objects
- [ ] `renderChordDiagram(chord, stringPositions)` → ASCII vertical chord box string
- [ ] Console test in browser: call each function directly, verify output looks right

### Phase 5 — HTML + CSS
- [ ] Write `public/index.html`:
  - `<header>` with app name and tagline
  - Sticky mood search bar (text input + submit, result panel below)
  - Section tab nav: Analog | Digital | Keys | Lyrics | Esoteric
  - Section divs (only active one visible):
    - **Analog:** tuning select, root select, scale select, position mode toggle (full/first), tab output `<pre>`, chord diagrams `<pre>`, tones panel (filtered cards)
    - **Digital:** mood filter buttons, genre filter buttons, instruments grid
    - **Keys:** mood tag cloud (filter buttons), keys grid (cards)
    - **Lyrics:** theme textarea, structure select (verse-chorus, through-composed, suite), generate button, output sections (title ideas, angles, structure, imagery, clichés to avoid)
    - **Esoteric:** current card (flip animation), draw-again button, category badge
- [ ] Write `public/style.css`:
  - All CSS variables from CLAUDE.md palette
  - Base reset, body, layout
  - Header styles
  - Mood search bar (sticky, full-width)
  - Section nav tabs (active state)
  - `.tab-output` — `white-space: pre`, `font-family: var(--font-mono)`, border, padding
  - `.card-flip` — CSS 3D perspective, `.card-inner`, `.card-front`, `.card-back`
    - Flip triggered by JS class toggle only — no hover flip
    - `.card-flip.reversed` — applies `transform: rotate(180deg)` to the card as a whole (upside-down)
    - `.card-flip.flipped` — reveals back face (standard 3D Y-axis flip on click/draw)
    - Reversed state badge visible when card is reversed
  - Filter button group styles (active state)
  - Key card, tone card, instrument card grid styles
  - Lyrics output sections
  - Loading state styles (spinner or dimmed opacity)

### Phase 6 — Section Logic
- [ ] `switchSection(id)` — show/hide section divs, update active tab
- [ ] `DOMContentLoaded`: call `loadData()`, init section, attach all event listeners
- [ ] `loadData()` — fetch all 5 endpoints in parallel, store in module-level vars
- [ ] **Analog section:**
  - Populate tuning/root/scale selects from loaded data
  - `updateAnalogDisplay()` — call tab algorithm, render into `<pre>` elements
  - Fire on any select change
  - Filter tones panel by key tags matching selected root
- [ ] **Keys section:**
  - `renderKeys(filter)` — render key cards, highlight mood matches
  - Mood tag filter buttons — clicking toggles filter, re-renders
- [ ] **Digital section:**
  - `renderInstruments(moodFilter, genreFilter)` — render instrument cards
  - Mood and genre filter button groups — clicking filters grid
- [ ] **Esoteric section:**
  - `drawCard()` — pick random card (avoid immediate repeat), determine reversed state (~30% chance), update card display
  - Reversed: rotate full card 180deg via `.reversed` class; show `card.reversed` text instead of `card.text`; show "REVERSED" badge
  - Flip animation: on draw-again, flip card face-down first (add `.flipped`), swap content mid-flip, then flip back — simulates dealing a new card
  - Draw-again button wired up; clicking it re-runs `drawCard()`

### Phase 7 — AI Integration
- [ ] `loadCache()` / `saveCache()` helpers in `server.js`:
  - Read/write `data/cache.json` (create empty `{ suggest: {}, lyrics: {} }` if missing)
  - Cache key for suggest: `mood.trim().toLowerCase()`
  - Cache key for lyrics: `${theme.trim().toLowerCase()}::${structure}`
- [ ] `POST /api/suggest` in `server.js`:
  - Accept `{ mood: string }`
  - Check cache first — return cached response if hit
  - Build prompt: inject all keys, tones, instruments as context
  - Ask Claude to return JSON matching `{ keys[], tones[], instruments[], startingPoint: string }`
  - `JSON.parse()` the response, write to cache, send to client
  - On error: `{ error: string }` with 500 status
- [ ] `POST /api/lyrics` in `server.js`:
  - Accept `{ theme: string, structure: string }`
  - Check cache first — return cached response if hit
  - Ask Claude to return JSON: `{ titleIdeas[], thematicAngles[], structure: { sections: [{ name: string, description: string }] }, imageryBank[], avoidClichés[] }`
  - Write to cache on success; same parse + error pattern
- [ ] `runMoodSearch(mood)` client-side:
  - POST to `/api/suggest`
  - Show loading state on result panel
  - On success: render keys/tones/instruments suggestions above section tabs
  - On error: show error message in result panel
- [ ] `generateLyrics(theme, structure)` client-side:
  - POST to `/api/lyrics`
  - Show loading state
  - On success: render each section of output
  - On error: show error

### Phase 8 — Verify + Close
- [ ] `song serve` starts cleanly, no errors
- [ ] Analog: pick E Standard + D + minor → tab renders across 6 strings correctly
- [ ] Keys: filter by "dark" → subset of keys appears
- [ ] Digital: filter by "ambient" → Alchemy pads appear
- [ ] Esoteric: draw card → flips, draw again → different card; reversed state appears upside-down with reversed text + badge
- [ ] Mood search: "dark and droning, like a funeral procession" → Claude returns suggestions
- [ ] Lyrics: type theme → structured output appears
- [ ] Ctrl+C exits server cleanly

---

## Done When

- `song serve` opens a working page at localhost:3232
- All five section tabs render without errors
- AI mood search and lyrics endpoints return real Claude output
- Tab algorithm renders correct ASCII for at least E Standard + D minor
- Esoteric card draw + flip works
- No console errors on page load
