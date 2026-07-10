# esplumoir-albrecht

Songwriting reference tool — key/mode grimoire, chord builder, progression manager, constraint deck, and session log.

## Run

```bash
python3 -m http.server 3232
# → http://localhost:3232
```

No dependencies. No build step. Static site with ES modules.

## Sections

### Grimoire
Browse 32 musical keys and modes. Each key has an emotional profile, interactive SVG fretboard (8 tunings), diatonic chord tabs, Logic instruments, and Helix Native tones. The Modal Colors panel shows every parallel mode of the current root (with the exact notes that change) and borrowed chords, previewable on the fretboard.

### The Forge
Build chords by clicking frets on the fretboard. Save voicings to named progressions — each save records date, key, tuning, and the moods explored that visit. Audition a progression in-browser with WebAudio. Copy a saved progression as Markdown (metadata + tab block) for direct paste into Obsidian. Mood-based suggestions toggle between **Iron** (Helix tones) and **Ether** (Logic instruments).

### Esoteric Strategies
30 constraint cards inspired by Oblique Strategies. ~30% chance of reversal. Every intentional draw is logged with a timestamp — and with the song, when opened from a `wiz song` deep link.

### Session Log
A timestamped record of each visit: keys explored, moods searched, chords added, progressions saved, cards drawn. Save the session straight to the Obsidian vault (File System Access API — pick the folder once) or send it to the live `wiz song` session.

## Features

- **Mood search** — 105 pre-researched mood profiles, keyword-scored client-side; auto-selects the top matching key
- **Deep links** — `?tool=grimoire&root=E&mode=phrygian&tuning=b-standard&mood=menacing` lands directly on that view; progressions accept literal chords or degree shorthand (`i,VI,III,VII`)
- **wiz integration** — `wiz song open <slug>` starts a live session; key, tuning, progressions, and notes sync back
- **Key detail modal** — emotional profile, notable uses, related keys, chords, tones, instruments
- **8 guitar tunings** — E/Eb/C/B standard, DADGAD, Open D, Open G, BFBEFBb
- **4-octave piano roll** — scrollable, highlights scale notes

## Tech

Pure static site — HTML, CSS, vanilla ES modules. All data pre-researched and hardcoded in `data/*.js`. No API calls, no build, no dependencies. Deployed on GitHub Pages.
