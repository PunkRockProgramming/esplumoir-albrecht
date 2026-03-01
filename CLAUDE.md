# esplumoir-albrecht — Claude Project Context

Songwriting reference tool. Dark studio aesthetic. Three sections: **Grimoire** (key/mode reference with interactive fretboard), **The Forge** (chord builder + progression manager), and **Esoteric Strategies** (Oblique Strategies–inspired card deck). Client-side mood search scores against pre-researched profiles. No server. No build step. Deployed on GitHub Pages.

## Commands

```bash
python3 -m http.server 3232    # local dev — run from project root
```

Open `http://localhost:3232` in the browser. ES modules require a server (can't open index.html directly due to CORS).

## File Structure

```
index.html          Single-page UI — all three sections
script.js           All app logic — ES module, imports from data/
style.css           Dark studio CSS palette
data/
  keys.js           20+ musical keys/modes with emotional profiles
  tunings.js        4 guitar tunings (E std, Eb std, DADGAD, B std)
  tones.js          9 Helix Native tone presets
  instruments.js    13 Logic Pro software instruments
  strategies.js     15 Esoteric Strategy cards
  mood-map.js       45 pre-researched mood profiles for client-side search
```

## Architecture

**Pure static site.** No server, no build, no dependencies. `index.html` + `script.js` + `style.css` + `data/*.js`.

**Data loading:** Browser ES module imports — `import { KEYS } from './data/keys.js'` etc. No fetch calls for data.

**Mood search:** Client-side only. `searchMoodMap(query)` tokenizes the input and scores each of the 45 profiles in `mood-map.js` by keyword overlap. Returns the best-matching profile instantly.

**Fretboard rendering:** SVG, `viewBox="0 0 1400 240"`. Scale degree colors mapped to dots. Grimoire fretboard is read-only (colored by degree). Forge fretboard has transparent `circle.forge-hit` hit targets on top for click interaction.

**Chord identification (Forge):** `identifyChord(notes)` — for each selected note as candidate root, computes intervals to all other notes mod 12, scores against 16 `CHORD_TEMPLATES` (power → 9ths), returns highest-scoring match.

**Progressions (Forge):** In-memory `forgeProgression = [{ name, voicing: Map }]`. Persisted to `localStorage` under key `esplumoir-forge` as `{ progressions: [{ name, chords: [{ name, voicing: {} }] }] }`. `Map` serialized via `positionsToObject` / `objectToPositions`.

## Sections

### Grimoire
- Root + mode free selectors drive `makeSyntheticKey()` — creates a key object on the fly so the same code path as clicking a key card is used
- Diatonic chord tabs (Scale / I–VII): clicking a tab filters the `degreeMap` to just those 3 chord notes before passing to fretboard/piano renderers
- Suggestions panel: Analog (tones) / Digital (instruments) toggle, filtered by selected key's mood tags
- Mood search bar (sticky header): runs `showMoodResult()` → renders matching keys, tones, instruments, starting point

### The Forge
- `forgePositions: Map<"str,fret", true>` — selected note positions
- `forgeTuningId` — drives string label display and note calculation
- Tab frames below the progression chip row: `renderForgeProgTabs()` — one compact frame per chord showing string label + fret number
- Clicking a chip or tab frame reloads that voicing into `forgePositions` + calls `updateForge()`

### Esoteric Strategies
- `drawCard()` — picks random (no immediate repeat), ~30% reversed, triggers flip CSS animation
- Reversed: full card rotates 180deg, `card.reversed` text shown, "reversed" badge visible

## Data Schemas

### `data/keys.js` — export `KEYS`
```js
{
  id: string,
  name: string,             // "A Dorian"
  root: string,             // "A"
  mode: string,             // "dorian"
  notes: string[7],         // scale degree note names
  moods: string[],          // ["dark", "melancholic"] — used for tag filters + suggestions
  emotionalProfile: string, // rich prose paragraph
  notableUses: string,
  relatedKeys: string[]
}
```

### `data/tunings.js` — export `TUNINGS`
```js
{
  id: string,
  name: string,             // "E Standard"
  strings: string[6],       // scientific pitch low→high: ["E2","A2","D3","G3","B3","E4"]
  openNotes: string[6],     // letters only: ["E","A","D","G","B","E"]
  description: string,
  character: string
}
```
`openNotes` is reversed in the fretboard renderer (`displayStrings = [...tuning.openNotes].reverse()`) so index 0 = high e at top.

### `data/tones.js` — export `TONES`
```js
{
  id: string,
  name: string,
  ampModel: string,
  cabinet: string,
  moodTags: string[],
  keyTags: string[],
  effectsChain: { type, model, notes }[],
  description: string
}
```

### `data/instruments.js` — export `INSTRUMENTS`
```js
{
  id: string,
  name: string,
  plugin: string,           // "Alchemy", "ES2", "Retro Synth"
  preset: string,
  category: string,         // "pad", "lead", "texture", "keys", "strings"
  moodTags: string[],
  genreTags: string[],
  keyTags: string[],
  midiNotes: string,
  description: string
}
```

### `data/strategies.js` — export `STRATEGIES`
```js
{
  id: number,
  text: string,
  reversed: string,
  category: 'subtraction'|'inversion'|'process'|'constraint'|'sabotage'|'oracle'
}
```

### `data/mood-map.js` — export `MOOD_MAP`
```js
{
  keywords: string[],       // matched against tokenized user input
  keys: string[],           // key IDs from keys.js
  tones: string[],          // tone IDs from tones.js
  instruments: string[],    // instrument IDs from instruments.js
  startingPoint: string     // concrete suggestion paragraph
}
```
45 profiles. Scoring: token vs keyword substring overlap; highest score wins.

## Key Algorithms in `script.js`

```
CHROMATIC        = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
ENHARMONIC       = { Db→C#, Eb→D#, Fb→E, Gb→F#, Ab→G#, Bb→A#, Cb→B }
SCALE_INTERVALS  = { major, minor, dorian, phrygian, lydian, mixolydian, harmonicMinor, phrygianDominant }
DEGREE_COLORS    = 7 colors (amber root, green 2nd, blue 3rd, purple 4th, red 5th, teal 6th, tan 7th)
CHORD_TEMPLATES  = 16 entries — suffix + interval array mod 12 (power, major, minor, dim, aug, sus2, sus4, maj7, m7, 7, dim7, m7b5, add9, maj9, m9, 9)

getScaleDegreeMap(root, mode)          → Map<note, degreeIndex>
renderFretboardSVG(degreeMap, tuning)  → SVG string
renderPianoHTML(degreeMap)             → HTML string
computeDiatonicChords(root, mode)      → [{ degree, name, quality, notes }]
makeSyntheticKey(root, mode)           → minimal key object (for free selectors)
identifyChord(notes)                   → chord name string or null
renderForgeFretboardSVG()              → SVG with .forge-hit click targets
```

## CSS Palette

```css
--bg:          #111111
--surface:     #1c1c1c
--surface2:    #252525
--border:      #2e2e2e
--text:        #d4cfc8   /* warm off-white */
--muted:       #6e6a64
--accent:      #c8882a   /* amber */
--accent2:     #8a3a3a   /* deep red */
--accent-dim:  #7a5318   /* dim amber — hover borders */
--font-mono:   'Courier New', monospace
--font-ui:     system-ui, sans-serif
--radius:      4px
--radius-lg:   8px
```

## Patterns

- All data files are plain ESM exports — `export const FOO = [...]` — never `require()`
- `script.js` is `type="module"` — top-level `import` statements, no global scope leakage
- No build step, no bundler, no npm dependencies
- GitHub Pages: deploy from `main` branch root, `.nojekyll` present to skip Jekyll
- Adding a new data entry: edit the relevant `data/*.js` file, no other changes needed
- Adding a new mood profile: append to `MOOD_MAP` array in `data/mood-map.js`
