# esplumoir-albrecht — Claude Project Context

Songwriting reference tool. Two creative modes (Analog/guitar, Digital/MIDI), a musical key guide, a lyrics brainstorming section, and an Esoteric Strategies card deck (Oblique Strategies–inspired, darker). Mood/theme search is Claude-powered. Guitar tab generation is algorithmic, client-side. All reference data lives in flat JS files.

## Commands

```bash
song serve    # start web UI on localhost:3232
```

Globally linked via `npm link` as `song`.

## Key Files

| File | Purpose |
|---|---|
| `server.js` | Express server — static serving, data GET routes, AI POST endpoints |
| `bin/song.js` | CLI entry — `serve` command only at v1 |
| `data/keys.js` | 20+ musical keys/modes with mood tags |
| `data/tunings.js` | 4 guitar tunings (E std, Eb std, DADGAD, B std) |
| `data/tones.js` | 8–10 Helix Native tone presets |
| `data/logic-instruments.js` | 12–15 Logic Pro software instruments |
| `data/strategies.js` | 15 Esoteric Strategy cards |
| `public/index.html` | Single-page UI — 5 section tabs |
| `public/style.css` | Dark studio CSS palette |
| `public/script.js` | Tab algorithm, section logic, Claude fetch calls |

## Architecture

**Stack:** Node.js ESM + Express + static `public/` — same pattern as `creature-db`.

**Port:** 3232

**AI:** Server-side proxy only. Client never calls Claude directly.
- `POST /api/suggest` — mood/theme → key + tone + instrument suggestions
- `POST /api/lyrics` — theme + structure → lyric brainstorm output
- Claude returns JSON; server parses and re-sends. Errors return `{ error: string }`.

**Claude API Cache:** `data/cache.json` — gitignored, auto-created on first response.
- Structure: `{ suggest: { [normalizedMood]: response }, lyrics: { [themeKey]: response } }`
- Server checks cache before calling Claude; writes on successful response. No TTL in v1.
- Cache key for suggest: lowercased, trimmed mood string. For lyrics: `${theme}::${structure}`.
- Prevents redundant API calls for repeat queries.

**Tab generation:** Fully algorithmic, client-side. No AI involved. ASCII output in a `<pre>` block.

**Data:** Flat JS files in `data/` — exported as ESM arrays. Server imports them and serves as JSON via GET routes.

**.env:** `../pictures-to-story-graph/.env` — same dotenv pattern as `wiz`.

## Server Routes

```
GET  /                  → public/index.html (Express static)
GET  /style.css         → public/style.css
GET  /script.js         → public/script.js
GET  /data/keys         → JSON array from data/keys.js
GET  /data/tunings      → JSON array from data/tunings.js
GET  /data/tones        → JSON array from data/tones.js
GET  /data/instruments  → JSON array from data/logic-instruments.js
GET  /data/strategies   → JSON array from data/strategies.js
POST /api/suggest       → mood/theme → { keys[], tones[], instruments[], startingPoint }
POST /api/lyrics        → theme + structure → { titleIdeas[], thematicAngles[], structure: { sections: [{ name, description }] }, imageryBank[], avoidClichés[] }
```

## Data Schemas

### `data/keys.js`
```js
{
  id: string,
  name: string,           // e.g. "A Dorian"
  root: string,           // e.g. "A"
  mode: string,           // e.g. "dorian"
  notes: string[7],       // scale degrees
  moods: string[],        // e.g. ["dark", "melancholic", "modal"] — used for tag filtering
  emotionalProfile: string, // rich paragraph: what emotions this key is known to evoke, historical/cultural associations, how it feels to play
  description: string,
  notableUses: string,
  relatedKeys: string[]
}
```
20+ entries: all major/minor keys + Dorian, Phrygian, Lydian, Mixolydian, Harmonic Minor, Phrygian Dominant.

### `data/tunings.js`
```js
{
  id: string,
  name: string,           // e.g. "E Standard"
  strings: string[6],     // scientific pitch low→high: ["E2","A2","D3","G3","B3","E4"]
  openNotes: string[6],   // letters only: ["E","A","D","G","B","E"] — used by tab algorithm
  description: string,
  character: string       // one-line feel/vibe
}
```

### `data/tones.js`
```js
{
  id: string,
  name: string,
  ampModel: string,
  cabinet: string,
  moodTags: string[],
  keyTags: string[],
  effectsChain: { type: string, model: string, notes: string }[],
  description: string
}
```
8–10 entries: clean Fender, crunch Marshall, high-gain modern, doom/fuzz, ambient reverb, edge-of-breakup, heavy metal, acoustic sim.

### `data/logic-instruments.js`
```js
{
  id: string,
  name: string,
  plugin: string,         // e.g. "Alchemy", "ES2", "Retro Synth"
  preset: string,
  category: string,       // e.g. "pad", "lead", "texture", "keys", "strings"
  moodTags: string[],
  genreTags: string[],
  keyTags: string[],
  midiNotes: string,      // e.g. "C3–C5"
  description: string
}
```
12–15 entries.

### `data/strategies.js`
```js
{
  id: number,
  text: string,
  reversed: string,       // alternate/shadow interpretation — shown when card is drawn reversed (upside-down)
  category: 'subtraction'|'inversion'|'process'|'constraint'|'sabotage'|'oracle'
}
```
15 cards — see SPRINT.md for exact texts and reversed texts.

## Tab Generation Algorithm (client-side, `public/script.js`)

```
CHROMATIC = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
ENHARMONIC = { 'Db':'C#', 'Eb':'D#', 'Gb':'F#', 'Ab':'G#', 'Bb':'A#' }
SCALE_INTERVALS = { major:[0,2,4,5,7,9,11], minor:[0,2,3,5,7,8,10], dorian:[0,2,3,5,7,9,10], ... }

1. buildScaleNoteSet(root, scaleType) → Set of 7 note letters
2. For each string (low→high): find all frets 0–12 where note is in set
3. renderScaleTab: format as ASCII tab with string label + fret markers
4. computeDiatonicChords: derive 7 triads from scale intervals, detect quality
5. renderChordDiagram: 6-string vertical ASCII chord box
```

Two modes: full neck (0–12) and first position (0–4). Tab output uses `white-space: pre` monospace.

## CSS Palette

```css
--bg:        #111111
--surface:   #1c1c1c
--surface2:  #252525
--border:    #2e2e2e
--text:      #d4cfc8   /* warm off-white */
--muted:     #6e6a64
--accent:    #c8882a   /* amber — amp indicator */
--accent2:   #8a3a3a   /* deep red */
--font-mono: 'Courier New', monospace
--font-ui:   system-ui, sans-serif
```

## Patterns

- `startServer(port)` exported from `server.js` — same pattern as `creature-db/server/index.js`
- CLI entry reads `.env` via dotenv before anything else
- No build step — `public/` is served directly by Express
- All data files are plain ESM exports — never require() anywhere
- `data/cache.json` is gitignored — created at runtime, never committed
