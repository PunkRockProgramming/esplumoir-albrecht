# esplumoir-albrecht — Roadmap

*Songwriting reference tool. Dark studio aesthetic. Oblique Strategies meets guitar pedal board.*

---

## v1 — Core Tool (Sprint 1)

**Goal:** Working web app with all five sections functional, AI suggestions live.

- [ ] Scaffold: `package.json`, install deps, `npm link` as `song`
- [ ] Data files: keys (20+), tunings (4), tones (8–10), logic-instruments (12–15), strategies (15)
- [ ] `server.js` — Express static + 5 GET data routes + stub AI routes
- [ ] `bin/song.js` — `serve` command
- [ ] Tab algorithm in `public/script.js` — scale builder, ASCII tab, chord diagrams
- [ ] `public/index.html` — 5 section tabs, all form elements, output containers
- [ ] `public/style.css` — full dark studio palette, card-flip CSS
- [ ] Section wiring: navigation, data loading, Analog, Keys, Digital, Esoteric sections
- [ ] AI integration: `POST /api/suggest` and `POST /api/lyrics` + client fetch calls
- [ ] End-to-end test: all sections functional, mood search and lyrics return real Claude output

**Done when:** `song serve` starts on :3232, all five sections work, AI endpoints return real responses.

---

## v2 — Content Depth

- [ ] Expand strategies deck: 15 → 30 cards
- [ ] Add more keys: all 12 major + 12 natural minor + 6 modes = ~30 entries
- [ ] Add more tone presets (8→15) covering more genres
- [ ] Add more Logic instruments (15→25) — heavier focus on ambient/industrial/folk
- [ ] Pentatonic and blues scale support in tab generator

---

## v3 — Save & Session

- [ ] Save a "session" — current key, tuning, tone, instrument picks → JSON
- [ ] Load previous session from local storage or a JSON file
- [ ] Export session as text summary (markdown or plaintext)
- [ ] Lyrics brainstorm: ability to save/append generated outlines to a file

---

## v4 — Integration

- [ ] `wiz creature` style: `song idea <theme>` CLI command — runs mood search and prints suggestions directly in terminal without opening browser
- [ ] Connect to `~/.wiz-notes.md` — pull recent brain dumps as lyric seeds
- [ ] Optional: if Folklore Wiki exists, link key entries to wiki stubs

---

## Deferred / Unlikely

- MIDI output — scope creep; use Logic directly
- Audio playback in browser — too heavy for this tool
- Multi-user or cloud sync — personal tool only
- Chord progression generator — out of scope until tab algorithm is mature
