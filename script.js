import { KEYS }       from './data/keys.js'
import { TUNINGS }    from './data/tunings.js'
import { TONES }      from './data/tones.js'
import { INSTRUMENTS } from './data/instruments.js'
import { STRATEGIES }  from './data/strategies.js'
import { MOOD_MAP }    from './data/mood-map.js'

// ============================================================
// Constants
// ============================================================

const CHROMATIC = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

const ENHARMONIC = {
  'Db': 'C#', 'Eb': 'D#', 'Fb': 'E', 'Gb': 'F#',
  'Ab': 'G#', 'Bb': 'A#', 'Cb': 'B'
}

const SCALE_INTERVALS = {
  major:            [0, 2, 4, 5, 7, 9, 11],
  minor:            [0, 2, 3, 5, 7, 8, 10],
  dorian:           [0, 2, 3, 5, 7, 9, 10],
  phrygian:         [0, 1, 3, 5, 7, 8, 10],
  lydian:           [0, 2, 4, 6, 7, 9, 11],
  mixolydian:       [0, 2, 4, 5, 7, 9, 10],
  harmonicMinor:    [0, 2, 3, 5, 7, 8, 11],
  phrygianDominant: [0, 1, 4, 5, 7, 8, 10],
  pentatonicMajor:  [0, 2, 4, 7, 9],
  pentatonicMinor:  [0, 3, 5, 7, 10],
  blues:            [0, 3, 5, 6, 7, 10],
}

// Scale degree colors: 1–7 (index 0–6)
const DEGREE_COLORS = [
  '#c8882a', // 1 — root (amber)
  '#5a9e5a', // 2 — green
  '#5a7ab8', // 3 — blue
  '#8a5aaa', // 4 — purple
  '#b85a5a', // 5 — red
  '#3a9a8a', // 6 — teal
  '#6a8a9a', // 7 — steel blue
]

const DEGREE_NAMES_SHORT = ['1', '2', '3', '4', '5', '6', '7']

const CHORD_TEMPLATES = [
  { suffix: '5',    intervals: [0, 7] },
  { suffix: '',     intervals: [0, 4, 7] },
  { suffix: 'm',    intervals: [0, 3, 7] },
  { suffix: 'dim',  intervals: [0, 3, 6] },
  { suffix: 'aug',  intervals: [0, 4, 8] },
  { suffix: 'sus2', intervals: [0, 2, 7] },
  { suffix: 'sus4', intervals: [0, 5, 7] },
  { suffix: 'maj7', intervals: [0, 4, 7, 11] },
  { suffix: 'm7',   intervals: [0, 3, 7, 10] },
  { suffix: '7',    intervals: [0, 4, 7, 10] },
  { suffix: 'dim7', intervals: [0, 3, 6, 9] },
  { suffix: 'm7b5', intervals: [0, 3, 6, 10] },
  { suffix: 'add9', intervals: [0, 4, 7, 2] },
  { suffix: 'maj9', intervals: [0, 4, 7, 11, 2] },
  { suffix: 'm9',   intervals: [0, 3, 7, 10, 2] },
  { suffix: '9',    intervals: [0, 4, 7, 10, 2] },
]

// ============================================================
// Tab Algorithm
// ============================================================

function normalizeNote(note) {
  return ENHARMONIC[note] || note
}

function buildScaleNoteSet(root, scaleType) {
  const normalizedRoot = normalizeNote(root)
  const rootIdx = CHROMATIC.indexOf(normalizedRoot)
  if (rootIdx === -1) return new Set()
  const intervals = SCALE_INTERVALS[scaleType]
  if (!intervals) return new Set()
  return new Set(intervals.map(i => CHROMATIC[(rootIdx + i) % 12]))
}


function computeDiatonicChords(root, scaleType) {
  const normalizedRoot = normalizeNote(root)
  const rootIdx = CHROMATIC.indexOf(normalizedRoot)
  const intervals = SCALE_INTERVALS[scaleType]
  if (!intervals || rootIdx === -1) return []
  if (intervals.length < 6) return []

  const scaleNotes = intervals.map(i => CHROMATIC[(rootIdx + i) % 12])

  const TRIAD_QUALITIES = {
    '4,7': 'major', '3,7': 'minor', '3,6': 'dim', '4,8': 'aug'
  }
  const DEGREE_NAMES = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']

  return scaleNotes.map((note, i) => {
    const noteIdx = CHROMATIC.indexOf(note)
    const third = CHROMATIC[(noteIdx + 3) % 12]
    const fifth = CHROMATIC[(noteIdx + 7) % 12]

    // Find intervals within scale
    const thirdInterval = scaleNotes.includes(third) ? 3 : 4
    const fifthIntervalOptions = [6, 7, 8]
    const fifthInterval = fifthIntervalOptions.find(iv => scaleNotes.includes(CHROMATIC[(noteIdx + iv) % 12])) || 7

    const qualityKey = `${thirdInterval},${fifthInterval}`
    const quality = TRIAD_QUALITIES[qualityKey] || 'major'

    const chordThird = CHROMATIC[(noteIdx + thirdInterval) % 12]
    const chordFifth = CHROMATIC[(noteIdx + fifthInterval) % 12]

    return {
      degree: DEGREE_NAMES[i],
      name: note + (quality === 'minor' ? 'm' : quality === 'dim' ? 'dim' : quality === 'aug' ? 'aug' : ''),
      root: note,
      quality,
      notes: [note, chordThird, chordFifth]
    }
  })
}

// ============================================================
// Key Visualizer — Fretboard + Piano
// ============================================================

function getScaleDegreeMap(root, scaleType) {
  const r = normalizeNote(root)
  const rootIdx = CHROMATIC.indexOf(r)
  const intervals = SCALE_INTERVALS[scaleType]
  if (!intervals || rootIdx === -1) return new Map()
  const map = new Map()
  intervals.forEach((interval, degree) => {
    map.set(CHROMATIC[(rootIdx + interval) % 12], degree)
  })
  return map
}

function renderFretboardSVG(degreeMap, tuningId, showLabels, firstPosition = false) {
  const tuning = allTunings.find(t => t.id === tuningId) || allTunings[0]
  if (!tuning) return ''

  const W = 1400, H = 240
  const PAD_L = 30, PAD_R = 10, PAD_T = 28, PAD_B = 10
  const FRETS = firstPosition ? 4 : 12, STRINGS = 6
  // col 0 = open string (left of nut), cols 1–N = frets
  const COLS = FRETS + 1
  const COL_W = (W - PAD_L - PAD_R) / COLS
  const STRING_SPACING = (H - PAD_T - PAD_B) / (STRINGS - 1)
  const NUT_X = PAD_L + COL_W
  const DOT_R = 14

  const colX = col => PAD_L + col * COL_W + COL_W / 2
  const strY = s  => PAD_T + s * STRING_SPACING

  // Display order: high string at top (index 5 of openNotes), low string at bottom (index 0)
  const displayStrings = [...tuning.openNotes].reverse()

  const p = [] // SVG parts

  // Fretboard background
  p.push(`<rect x="${PAD_L}" y="${PAD_T}" width="${W - PAD_L - PAD_R}" height="${H - PAD_T - PAD_B}" fill="#181818" rx="2"/>`)

  // Inlay markers (only show if within visible fret range)
  const midY = strY(0) + (H - PAD_T - PAD_B) / 2;
  [3, 5, 7, 9].filter(f => f <= FRETS).forEach(f => p.push(`<circle cx="${colX(f)}" cy="${midY}" r="8" fill="#252525"/>`))
  if (FRETS >= 12) {
    p.push(`<circle cx="${colX(12)}" cy="${strY(1)}" r="8" fill="#252525"/>`)
    p.push(`<circle cx="${colX(12)}" cy="${strY(4)}" r="8" fill="#252525"/>`)
  }

  // Strings — thicker toward low E (bottom)
  for (let s = 0; s < STRINGS; s++) {
    const y = strY(s)
    const sw = (0.6 + (STRINGS - 1 - s) * 0.2).toFixed(2)
    p.push(`<line x1="${PAD_L}" y1="${y}" x2="${W - PAD_R}" y2="${y}" stroke="#404040" stroke-width="${sw}"/>`)
  }

  // Nut
  p.push(`<line x1="${NUT_X}" y1="${strY(0)}" x2="${NUT_X}" y2="${strY(5)}" stroke="#8a8278" stroke-width="4" stroke-linecap="round"/>`)

  // Fret lines (starting at fret 2 column = after nut)
  for (let f = 2; f <= FRETS; f++) {
    const x = PAD_L + f * COL_W
    p.push(`<line x1="${x}" y1="${strY(0)}" x2="${x}" y2="${strY(5)}" stroke="#303030" stroke-width="1"/>`)
  }

  // Fret numbers
  ;[3, 5, 7, 9, 12].filter(f => f <= FRETS).forEach(f => {
    p.push(`<text x="${colX(f)}" y="${PAD_T - 7}" text-anchor="middle" fill="#504c48" font-size="13" font-family="system-ui,sans-serif">${f}</text>`)
  })

  // String labels (open note name)
  for (let s = 0; s < STRINGS; s++) {
    const note = normalizeNote(displayStrings[s])
    p.push(`<text x="${PAD_L - 4}" y="${strY(s) + 4}" text-anchor="end" fill="#6e6a64" font-size="13" font-family="Courier New,monospace">${note}</text>`)
  }

  // Scale note dots
  for (let s = 0; s < STRINGS; s++) {
    const openNote = normalizeNote(displayStrings[s])
    const openIdx = CHROMATIC.indexOf(openNote)
    for (let col = 0; col <= FRETS; col++) {
      const note = col === 0 ? openNote : CHROMATIC[(openIdx + col) % 12]
      if (!degreeMap.has(note)) continue
      const degree = degreeMap.get(note)
      const color = DEGREE_COLORS[degree]
      const x = colX(col), y = strY(s)
      p.push(`<circle cx="${x}" cy="${y}" r="${DOT_R}" fill="${color}" opacity="0.95"/>`)
      if (showLabels) {
        p.push(`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" fill="#111" font-size="9.5" font-weight="700" font-family="system-ui,sans-serif">${note}</text>`)
      }
    }
  }

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${p.join('')}</svg>`
}

function renderPianoHTML(degreeMap, showLabels) {
  const WW = 54, WH = 172  // white key dims
  const BW = 34, BH = 108  // black key dims
  const GAP = 2
  const STEP = WW + GAP

  const WHITE_NOTES   = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  const BLACK_AFTER   = { C: 'C#', D: 'D#', F: 'F#', G: 'G#', A: 'A#' }

  let html = `<div class="piano" style="width:${28 * STEP - GAP}px">`

  let wi = 0
  for (const oct of [2, 3, 4, 5]) {
    for (const note of WHITE_NOTES) {
      const x = wi * STEP
      const deg = degreeMap.has(note) ? degreeMap.get(note) : null
      const bg  = deg !== null ? DEGREE_COLORS[deg] : '#2e2926'
      html += `<div class="piano-key piano-white" style="left:${x}px;background:${bg}" title="${note}${oct}">`
      if (showLabels && deg !== null) {
        const isRoot = deg === 0
        html += `<span class="piano-key-label" style="color:#111;font-weight:${isRoot ? '700' : '500'}">${note}</span>`
      }
      html += `</div>`

      // Black key to the right of this white key (if one exists)
      const bn = BLACK_AFTER[note]
      if (bn) {
        const bx  = x + WW - Math.floor(BW / 2) + 1
        const bdg = degreeMap.has(bn) ? degreeMap.get(bn) : null
        const bbg = bdg !== null ? DEGREE_COLORS[bdg] : '#111'
        html += `<div class="piano-key piano-black" style="left:${bx}px;background:${bbg}" title="${bn}${oct}">`
        if (showLabels && bdg !== null) {
          html += `<span class="piano-key-label" style="color:#111;font-weight:${bdg === 0 ? '700' : '500'}">${bn}</span>`
        }
        html += `</div>`
      }
      wi++
    }
  }

  html += `</div>`
  return html
}

function renderDegreeLegend() {
  const labels = ['root', '2nd', '3rd', '4th', '5th', '6th', '7th']
  return DEGREE_COLORS.map((color, i) =>
    `<span class="degree-chip" style="background:${color}"><span class="degree-chip-label">${labels[i]}</span></span>`
  ).join('')
}

// ============================================================
// App State
// ============================================================

let allKeys = []
let allTunings = []
let allTones = []
let allInstruments = []
let allStrategies = []

let currentStrategyIdx = null
let currentStrategyReversed = false
let activeSection = 'keys'
let suggestionsMode = 'analog'
let selectedChordIdx = null       // null = full scale view
let currentDiatonicChords = []
let activeKeyRootFilter = null
let activeKeyModeFilter = null
let activeKeyMoodFilter = null
let selectedKey = null
let vizTuningId = 'e-standard'
let vizShowLabels = true
let vizFirstPosition = false

// Forge state
let forgePositions = new Map()  // "str,fret" → true
let forgeTuningId  = 'e-standard'
let forgeKeyId     = null
let forgeProgression = []       // [{ name, voicing: Map }]
const FORGE_KEY   = 'esplumoir-forge'
const SESSION_KEY = 'esplumoir-session'

// ============================================================
// Data Loading
// ============================================================

function loadData() {
  allKeys        = KEYS
  allTunings     = TUNINGS
  allTones       = TONES
  allInstruments = INSTRUMENTS
  allStrategies  = STRATEGIES
}

// ============================================================
// Navigation
// ============================================================

function switchSection(id) {
  activeSection = id
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === id))
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.section === id))
}


function renderTones(moodFilter = []) {
  const container = document.getElementById('suggestions-grid')
  container.innerHTML = ''

  const filtered = moodFilter.length
    ? allTones.filter(t => t.moodTags.some(m => moodFilter.includes(m)))
    : allTones

  const displayTones = filtered.length ? filtered : allTones

  displayTones.forEach(tone => {
    const card = document.createElement('div')
    card.className = 'tone-card'
    card.innerHTML = `
      <div class="card-header">
        <span class="card-name">${tone.name}</span>
        <span class="card-sub">${tone.ampModel}</span>
      </div>
      <p class="card-desc">${tone.description}</p>
      <div class="tag-row">${tone.moodTags.map(m => `<span class="tag">${m}</span>`).join('')}</div>
    `
    container.appendChild(card)
  })
}

// ============================================================
// Keys Section
// ============================================================

const MODE_LABELS = {
  major: 'Major', minor: 'Minor', dorian: 'Dorian', phrygian: 'Phrygian',
  lydian: 'Lydian', mixolydian: 'Mixolydian', harmonicMinor: 'Harmonic Minor',
  phrygianDominant: 'Phrygian Dominant',
  pentatonicMajor: 'Pentatonic Major', pentatonicMinor: 'Pentatonic Minor',
  blues: 'Blues'
}

function makeSyntheticKey(root, mode) {
  const normalizedRoot = normalizeNote(root)
  const rootIdx = CHROMATIC.indexOf(normalizedRoot)
  const intervals = SCALE_INTERVALS[mode] || []
  const notes = intervals.map(i => CHROMATIC[(rootIdx + i) % 12])
  return { id: null, root, mode, name: `${root} ${MODE_LABELS[mode] || mode}`, notes, moods: [] }
}

function populateVizRootMode() {
  const rootSelect = document.getElementById('viz-root')
  const modeSelect = document.getElementById('viz-mode')

  ;['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].forEach(r => {
    const opt = document.createElement('option')
    opt.value = r; opt.textContent = r
    rootSelect.appendChild(opt)
  })

  Object.entries(MODE_LABELS).forEach(([value, label]) => {
    const opt = document.createElement('option')
    opt.value = value; opt.textContent = label
    modeSelect.appendChild(opt)
  })
}

function downloadFretboardSVG() {
  if (!selectedKey) return
  const degreeMap = getScaleDegreeMap(selectedKey.root, selectedKey.mode)
  const svgStr = renderFretboardSVG(degreeMap, vizTuningId, vizShowLabels, vizFirstPosition)
  const blob = new Blob([svgStr], { type: 'image/svg+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `fretboard-${selectedKey.name.replace(/\s+/g, '-').toLowerCase()}.svg`
  a.click()
  URL.revokeObjectURL(url)
}

function updateVisualizer() {
  if (!selectedKey) return
  const tuning = allTunings.find(t => t.id === vizTuningId) || allTunings[0]

  document.getElementById('viz-key-name').textContent = selectedKey.name
  document.getElementById('viz-key-notes').textContent = selectedKey.notes.join('  ·  ')
  document.getElementById('viz-tuning-label').textContent = tuning ? tuning.name : ''

  // Build degree map — filter to chord notes when a chord tab is active
  let degreeMap = getScaleDegreeMap(selectedKey.root, selectedKey.mode)
  if (selectedChordIdx !== null && currentDiatonicChords[selectedChordIdx]) {
    const chordNoteSet = new Set(
      currentDiatonicChords[selectedChordIdx].notes.map(n => normalizeNote(n))
    )
    const filtered = new Map()
    degreeMap.forEach((degree, note) => {
      if (chordNoteSet.has(normalizeNote(note))) filtered.set(note, degree)
    })
    degreeMap = filtered
  }

  document.getElementById('fretboard-container').innerHTML =
    renderFretboardSVG(degreeMap, vizTuningId, vizShowLabels, vizFirstPosition)
  document.getElementById('piano-container').innerHTML =
    renderPianoHTML(degreeMap, vizShowLabels)
  document.getElementById('degree-legend').innerHTML =
    renderDegreeLegend()
}

function renderChordTabs() {
  const container = document.getElementById('chord-tabs')
  container.innerHTML = ''
  currentDiatonicChords = selectedKey
    ? computeDiatonicChords(selectedKey.root, selectedKey.mode)
    : []

  // For pentatonic/blues scales (< 6 notes), only show the Scale tab
  if (!currentDiatonicChords.length) {
    selectedChordIdx = null
    const scaleBtn = document.createElement('button')
    scaleBtn.className = 'chord-tab active'
    scaleBtn.textContent = 'Scale'
    container.appendChild(scaleBtn)
    return
  }

  const activate = (btn, idx) => {
    container.querySelectorAll('.chord-tab').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    selectedChordIdx = idx
    updateVisualizer()
  }

  // Scale tab (full key)
  const scaleBtn = document.createElement('button')
  scaleBtn.className = 'chord-tab' + (selectedChordIdx === null ? ' active' : '')
  scaleBtn.textContent = 'Scale'
  scaleBtn.addEventListener('click', () => activate(scaleBtn, null))
  container.appendChild(scaleBtn)

  // One tab per diatonic chord
  currentDiatonicChords.forEach((chord, i) => {
    const btn = document.createElement('button')
    btn.className = 'chord-tab' + (selectedChordIdx === i ? ' active' : '')
    btn.innerHTML =
      `<span class="chord-tab-degree">${chord.degree}</span>` +
      `<span class="chord-tab-name">${chord.name}</span>`
    btn.addEventListener('click', () => activate(btn, i))
    container.appendChild(btn)
  })
}

function updateSuggestions() {
  const moods = selectedKey ? selectedKey.moods : []
  if (suggestionsMode === 'analog') {
    renderTones(moods)
  } else {
    renderInstruments(moods)
  }
}

function saveSession() {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ keyId: selectedKey?.id || null, tuningId: vizTuningId }))
  } catch {}
}

function selectKey(keyData) {
  selectedKey = keyData
  selectedChordIdx = null

  // Sync root/mode selectors
  const rootSel = document.getElementById('viz-root')
  const modeSel = document.getElementById('viz-mode')
  if (rootSel) rootSel.value = normalizeNote(keyData.root)
  if (modeSel) modeSel.value = keyData.mode

  document.querySelectorAll('.key-card').forEach(c =>
    c.classList.toggle('selected', c.dataset.keyId === keyData.id)
  )
  document.querySelectorAll('.mood-key-btn').forEach(b =>
    b.classList.toggle('active', b.textContent === keyData.name)
  )
  renderChordTabs()
  updateVisualizer()
  updateSuggestions()

  // Persist — only card-selected keys have a non-null id
  if (keyData.id) saveSession()
}

function renderKeys() {
  const container = document.getElementById('keys-grid')
  container.innerHTML = ''

  let filtered = allKeys
  if (activeKeyRootFilter) filtered = filtered.filter(k => k.root === activeKeyRootFilter)
  if (activeKeyModeFilter) filtered = filtered.filter(k => k.mode === activeKeyModeFilter)
  if (activeKeyMoodFilter) filtered = filtered.filter(k => k.moods.includes(activeKeyMoodFilter))

  filtered.forEach(key => {
    const card = document.createElement('div')
    card.className = 'key-card' + (selectedKey && selectedKey.id === key.id ? ' selected' : '')
    card.dataset.keyId = key.id

    const relatedHtml = (key.relatedKeys && key.relatedKeys.length)
      ? `<div class="related-keys">related: ${key.relatedKeys.map(name => {
          const match = allKeys.find(k => k.name === name)
          return match
            ? `<span class="related-key-link" data-key-id="${match.id}">${name}</span>`
            : `<span>${name}</span>`
        }).join(', ')}</div>`
      : ''

    card.innerHTML = `
      <div class="card-header">
        <span class="card-name">${key.name}</span>
        <span class="card-sub">${key.notes.join(' – ')}</span>
      </div>
      <p class="emotional-profile">${key.emotionalProfile}</p>
      <p class="card-desc">${key.notableUses}</p>
      ${relatedHtml}
      <div class="tag-row">${key.moods.map(m => `<span class="tag">${m}</span>`).join('')}</div>
    `
    card.addEventListener('click', e => {
      if (e.target.closest('.related-key-link')) return
      openKeyModal(key)
    })

    card.querySelectorAll('.related-key-link').forEach(link => {
      link.addEventListener('click', e => {
        e.stopPropagation()
        const target = allKeys.find(k => k.id === link.dataset.keyId)
        if (target) openKeyModal(target)
      })
    })

    container.appendChild(card)
  })
}

function renderMoodKeyButtons(mood) {
  const container = document.getElementById('mood-key-buttons')
  container.innerHTML = ''

  if (!mood) {
    container.classList.add('hidden')
    return
  }

  const matching = allKeys.filter(k => k.moods.includes(mood))
  if (!matching.length) {
    container.classList.add('hidden')
    return
  }

  container.classList.remove('hidden')

  matching.forEach(key => {
    const btn = document.createElement('button')
    btn.className = 'mood-key-btn' + (selectedKey && selectedKey.id === key.id ? ' active' : '')
    btn.textContent = key.name
    btn.addEventListener('click', () => {
      container.querySelectorAll('.mood-key-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      selectKey(key)
    })
    container.appendChild(btn)
  })

  // Auto-select the first matching key
  const first = matching.find(k => selectedKey && k.id === selectedKey.id) || matching[0]
  if (first) selectKey(first)
}

function syncVisualizerToFilters() {
  let candidates = allKeys
  if (activeKeyRootFilter) candidates = candidates.filter(k => k.root === activeKeyRootFilter)
  if (activeKeyModeFilter) candidates = candidates.filter(k => k.mode === activeKeyModeFilter)
  if (candidates.length > 0) selectKey(candidates[0])
}

function buildKeyFilters() {
  // Root filters — ordered chromatically
  const roots = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  const presentRoots = roots.filter(r => allKeys.some(k => k.root === r))
  buildFilterGroup('key-root-filters', presentRoots, val => {
    activeKeyRootFilter = val
    renderKeys()
    syncVisualizerToFilters()
  }, () => {
    activeKeyRootFilter = null
    renderKeys()
    syncVisualizerToFilters()
  })

  // Mode filters — ordered logically
  const modeOrder = ['major', 'minor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'harmonicMinor', 'phrygianDominant']
  const modeLabels = {
    major: 'major', minor: 'minor', dorian: 'dorian', phrygian: 'phrygian',
    lydian: 'lydian', mixolydian: 'mixolydian', harmonicMinor: 'harm. minor', phrygianDominant: 'phryg. dom.'
  }
  const presentModes = modeOrder.filter(m => allKeys.some(k => k.mode === m))
  buildFilterGroup('key-mode-filters', presentModes, val => {
    activeKeyModeFilter = val
    renderKeys()
    syncVisualizerToFilters()
  }, () => {
    activeKeyModeFilter = null
    renderKeys()
    syncVisualizerToFilters()
  }, modeLabels)

  // Mood filters — show matching keys as selectable buttons
  const moodSet = new Set()
  allKeys.forEach(k => k.moods.forEach(m => moodSet.add(m)))
  buildFilterGroup('key-mood-filters', Array.from(moodSet).sort(), val => {
    activeKeyMoodFilter = val
    renderKeys()
    renderMoodKeyButtons(val)
  }, () => {
    activeKeyMoodFilter = null
    renderKeys()
    renderMoodKeyButtons(null)
  })
}

function renderInstruments(moodFilter = []) {
  const container = document.getElementById('suggestions-grid')
  container.innerHTML = ''

  const filtered = moodFilter.length
    ? allInstruments.filter(i => i.moodTags.some(m => moodFilter.includes(m)))
    : allInstruments

  const displayInstrs = filtered.length ? filtered : allInstruments

  displayInstrs.forEach(instr => {
    const card = document.createElement('div')
    card.className = 'instrument-card'
    card.innerHTML = `
      <div class="card-header">
        <span class="card-name">${instr.name}</span>
        <span class="card-sub">${instr.plugin} — ${instr.preset}</span>
      </div>
      <p class="card-desc">${instr.description}</p>
      <div class="tag-row">
        ${instr.moodTags.map(m => `<span class="tag">${m}</span>`).join('')}
        <span class="tag tag-genre">${instr.category}</span>
      </div>
    `
    container.appendChild(card)
  })
}

function buildFilterGroup(containerId, values, onSelect, onAll, labels = {}) {
  const container = document.getElementById(containerId)
  container.innerHTML = ''

  const allBtn = document.createElement('button')
  allBtn.className = 'filter-btn active'
  allBtn.textContent = 'all'
  allBtn.addEventListener('click', () => {
    container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    allBtn.classList.add('active')
    onAll()
  })
  container.appendChild(allBtn)

  values.forEach(val => {
    const btn = document.createElement('button')
    btn.className = 'filter-btn'
    btn.textContent = labels[val] || val
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      onSelect(val)
    })
    container.appendChild(btn)
  })
}

// ============================================================
// Esoteric Section
// ============================================================

function drawCard() {
  if (!allStrategies.length) return

  // Avoid immediate repeat
  let idx
  do {
    idx = Math.floor(Math.random() * allStrategies.length)
  } while (allStrategies.length > 1 && idx === currentStrategyIdx)
  currentStrategyIdx = idx

  // ~30% chance of reversed
  currentStrategyReversed = Math.random() < 0.3

  const card = allStrategies[idx]
  const cardEl = document.getElementById('strategy-card')
  const textEl = document.getElementById('card-text')
  const categoryEl = document.getElementById('card-category')
  const reversedBadge = document.getElementById('card-reversed-badge')

  // Flip out: add flipped class, swap content mid-flip, flip back
  cardEl.classList.add('flipping')

  setTimeout(() => {
    textEl.textContent = currentStrategyReversed ? card.reversed : card.text
    categoryEl.textContent = card.category
    reversedBadge.classList.toggle('hidden', !currentStrategyReversed)
    cardEl.classList.toggle('reversed', currentStrategyReversed)
    cardEl.classList.remove('flipping')
    cardEl.classList.add('flipped-in')
    setTimeout(() => cardEl.classList.remove('flipped-in'), 400)
  }, 300)
}

// ============================================================
// Mood Search (client-side, static mood map)
// ============================================================

function searchMoodMap(query) {
  const tokens = query.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(s => s.length > 2)
  if (!tokens.length) return null

  let best = null, bestScore = 0
  for (const profile of MOOD_MAP) {
    let score = 0
    for (const token of tokens) {
      for (const kw of profile.keywords) {
        if (kw.includes(token) || token.includes(kw)) score++
      }
    }
    if (score > bestScore) { bestScore = score; best = profile }
  }
  return best
}

// ============================================================
// Key Detail Modal
// ============================================================

function openKeyModal(key) {
  const modal   = document.getElementById('detail-modal')
  const content = document.getElementById('modal-content')

  const chords  = computeDiatonicChords(key.root, key.mode)
  const tones   = allTones.filter(t => t.moodTags?.some(tag => key.moods.includes(tag)))
  const instrs  = allInstruments.filter(i => i.moodTags?.some(tag => key.moods.includes(tag)))

  const relatedChips = (key.relatedKeys ?? []).map(name => {
    const rk = allKeys.find(k => k.name === name)
    return rk
      ? `<button class="modal-chip" data-key-id="${rk.id}">${name}</button>`
      : `<span class="modal-chip-static">${name}</span>`
  }).join('')

  const chordRows = chords.map(c =>
    `<div class="modal-row"><strong>${c.degree}</strong>${c.name}</div>`
  ).join('')

  const toneRows = tones.map(t =>
    `<div class="modal-row"><strong>${t.name}</strong>${t.ampModel} — ${t.description}</div>`
  ).join('')

  const instrRows = instrs.map(i =>
    `<div class="modal-row"><strong>${i.name}</strong>${i.plugin} / ${i.preset}</div>`
  ).join('')

  content.innerHTML = `
    <div class="modal-key-name" id="modal-key-name">${key.name}</div>
    <div class="modal-key-mode">${key.mode}</div>

    ${key.emotionalProfile ? `
    <div class="modal-section">
      <div class="modal-section-label">Emotional Profile</div>
      <p class="modal-prose">${key.emotionalProfile}</p>
    </div>` : ''}

    ${key.notableUses ? `
    <div class="modal-section">
      <div class="modal-section-label">Notable Uses</div>
      <p class="modal-prose">${key.notableUses}</p>
    </div>` : ''}

    ${relatedChips ? `
    <div class="modal-section">
      <div class="modal-section-label">Related Keys</div>
      <div class="modal-chips">${relatedChips}</div>
    </div>` : ''}

    ${chordRows ? `
    <div class="modal-section">
      <div class="modal-section-label">Diatonic Chords</div>
      ${chordRows}
    </div>` : ''}

    ${toneRows ? `
    <div class="modal-section">
      <div class="modal-section-label">Iron Tones (matching mood)</div>
      ${toneRows}
    </div>` : ''}

    ${instrRows ? `
    <div class="modal-section">
      <div class="modal-section-label">Ether Instruments (matching mood)</div>
      ${instrRows}
    </div>` : ''}

    <button class="modal-load-btn" id="modal-load-key">Load "${key.name}" into Grimoire →</button>
  `

  modal.hidden = false

  // Related key chips
  content.querySelectorAll('.modal-chip[data-key-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = allKeys.find(k => k.id === btn.dataset.keyId)
      if (target) openKeyModal(target)
    })
  })

  // Load key button
  content.querySelector('#modal-load-key').addEventListener('click', () => {
    selectKey(key)
    closeKeyModal()
  })
}

function closeKeyModal() {
  document.getElementById('detail-modal').hidden = true
}

function showMoodResult(query) {
  const resultPanel = document.getElementById('mood-result')
  resultPanel.classList.remove('hidden')

  const profile = searchMoodMap(query)
  if (!profile) {
    resultPanel.innerHTML = '<span class="error-text">No match — try different words.</span>'
    return
  }

  const matchedKeys   = profile.keys.map(id => allKeys.find(k => k.id === id)).filter(Boolean)
  const matchedTones  = profile.tones.map(id => allTones.find(t => t.id === id)).filter(Boolean)
  const matchedInstrs = profile.instruments.map(id => allInstruments.find(i => i.id === id)).filter(Boolean)

  // Auto-select the top matching key — updates fretboard, dropdowns, and suggestions
  if (matchedKeys[0]) selectKey(matchedKeys[0])

  resultPanel.innerHTML = `
    <div class="mood-result-inner">
      <div class="mood-result-section">
        <h4>Keys</h4>
        <ul>${matchedKeys.map(k => `<li><strong>${k.name}</strong> — ${k.moods.join(', ')}</li>`).join('')}</ul>
      </div>
      <div class="mood-result-section">
        <h4>Tones</h4>
        <ul>${matchedTones.map(t => `<li><strong>${t.name}</strong> — ${t.ampModel}</li>`).join('')}</ul>
      </div>
      <div class="mood-result-section">
        <h4>Instruments</h4>
        <ul>${matchedInstrs.map(i => `<li><strong>${i.name}</strong> — ${i.plugin}</li>`).join('')}</ul>
      </div>
      <div class="mood-result-starting-point">
        <h4>Starting Point</h4>
        <p>${profile.startingPoint}</p>
      </div>
    </div>
  `
}

// ============================================================
// The Forge
// ============================================================

function getForgeNotes() {
  const tuning = allTunings.find(t => t.id === forgeTuningId) || allTunings[0]
  if (!tuning) return []
  const displayStrings = [...tuning.openNotes].reverse()
  const seen = new Set()
  const notes = []
  forgePositions.forEach((_, key) => {
    const [s, col] = key.split(',').map(Number)
    const openNote = normalizeNote(displayStrings[s])
    const openIdx  = CHROMATIC.indexOf(openNote)
    const note = col === 0 ? openNote : CHROMATIC[(openIdx + col) % 12]
    if (!seen.has(note)) { seen.add(note); notes.push(note) }
  })
  return notes
}

function identifyChord(notes) {
  if (notes.length < 2) return null
  const indices = [...new Set(
    notes.map(n => CHROMATIC.indexOf(normalizeNote(n))).filter(i => i >= 0)
  )]
  if (indices.length < 2) return null

  let best = null, bestScore = -Infinity
  for (const rootIdx of indices) {
    const intervals = new Set(indices.map(i => (i - rootIdx + 12) % 12))
    for (const tmpl of CHORD_TEMPLATES) {
      const tmplSet = new Set(tmpl.intervals)
      let matches = 0, misses = 0
      for (const ti of tmplSet) {
        if (intervals.has(ti)) matches++
        else misses++
      }
      const extra = [...intervals].filter(i => !tmplSet.has(i)).length
      const score  = matches - misses * 0.5 - extra * 0.25
      if (score > bestScore) {
        bestScore = score
        best = { root: CHROMATIC[rootIdx], suffix: tmpl.suffix, matches }
      }
    }
  }
  if (!best || best.matches < 2) return null
  return `${best.root}${best.suffix}`
}

// Given a chord name and tuning, return a first-position voicing Map.
// For each string (high → low), find the lowest fret 0–4 that plays a chord tone.
function generateFirstPositionVoicing(chordName, tuningId) {
  const tuning = allTunings.find(t => t.id === tuningId) || allTunings[0]
  if (!tuning) return new Map()

  // Strip slash bass note and barre annotation before parsing
  const cleanName = chordName.replace(/\/.*/, '').replace(/\s*\(.*\)/, '').trim()
  const rootMatch = cleanName.match(/^[A-G][#b]?/)
  if (!rootMatch) return new Map()

  const root   = normalizeNote(rootMatch[0])
  const suffix = cleanName.slice(rootMatch[0].length)
  const tmpl   = CHORD_TEMPLATES.find(t => t.suffix === suffix)
  if (!tmpl) return new Map()

  const rootIdx  = CHROMATIC.indexOf(root)
  if (rootIdx === -1) return new Map()
  const chordNotes = new Set(tmpl.intervals.map(i => CHROMATIC[(rootIdx + i) % 12]))

  const displayStrings = [...tuning.openNotes].reverse()
  const voicing = new Map()
  for (let s = 0; s < 6; s++) {
    const openNote = normalizeNote(displayStrings[s])
    const openIdx  = CHROMATIC.indexOf(openNote)
    for (let f = 0; f <= 4; f++) {
      const note = f === 0 ? openNote : CHROMATIC[(openIdx + f) % 12]
      if (chordNotes.has(note)) { voicing.set(`${s},${f}`, true); break }
    }
  }
  return voicing
}

function renderForgeFretboardSVG() {
  const tuning = allTunings.find(t => t.id === forgeTuningId) || allTunings[0]
  if (!tuning) return ''

  const W = 1400, H = 240
  const PAD_L = 30, PAD_R = 10, PAD_T = 28, PAD_B = 10
  const FRETS = 12, STRINGS = 6
  const COLS = FRETS + 1
  const COL_W = (W - PAD_L - PAD_R) / COLS
  const STRING_SPACING = (H - PAD_T - PAD_B) / (STRINGS - 1)
  const NUT_X = PAD_L + COL_W
  const DOT_R  = 14

  const colX = col => PAD_L + col * COL_W + COL_W / 2
  const strY  = s   => PAD_T + s * STRING_SPACING

  const displayStrings = [...tuning.openNotes].reverse()
  const p = []

  // Fretboard background
  p.push(`<rect x="${PAD_L}" y="${PAD_T}" width="${W - PAD_L - PAD_R}" height="${H - PAD_T - PAD_B}" fill="#181818" rx="2"/>`)

  // Inlay markers
  const midY = strY(0) + (H - PAD_T - PAD_B) / 2
  ;[3, 5, 7, 9].forEach(f => p.push(`<circle cx="${colX(f)}" cy="${midY}" r="8" fill="#252525"/>`))
  ;[12].forEach(f => {
    p.push(`<circle cx="${colX(f)}" cy="${strY(1)}" r="8" fill="#252525"/>`)
    p.push(`<circle cx="${colX(f)}" cy="${strY(4)}" r="8" fill="#252525"/>`)
  })

  // Strings
  for (let s = 0; s < STRINGS; s++) {
    const y  = strY(s)
    const sw = (0.6 + (STRINGS - 1 - s) * 0.2).toFixed(2)
    p.push(`<line x1="${PAD_L}" y1="${y}" x2="${W - PAD_R}" y2="${y}" stroke="#404040" stroke-width="${sw}"/>`)
  }

  // Nut
  p.push(`<line x1="${NUT_X}" y1="${strY(0)}" x2="${NUT_X}" y2="${strY(5)}" stroke="#8a8278" stroke-width="4" stroke-linecap="round"/>`)

  // Fret lines
  for (let f = 2; f <= FRETS; f++) {
    const x = PAD_L + f * COL_W
    p.push(`<line x1="${x}" y1="${strY(0)}" x2="${x}" y2="${strY(5)}" stroke="#303030" stroke-width="1"/>`)
  }

  // Fret numbers
  ;[3, 5, 7, 9, 12].forEach(f => {
    p.push(`<text x="${colX(f)}" y="${PAD_T - 7}" text-anchor="middle" fill="#504c48" font-size="13" font-family="system-ui,sans-serif">${f}</text>`)
  })

  // String labels
  for (let s = 0; s < STRINGS; s++) {
    const note = normalizeNote(displayStrings[s])
    p.push(`<text x="${PAD_L - 4}" y="${strY(s) + 4}" text-anchor="end" fill="#6e6a64" font-size="13" font-family="Courier New,monospace">${note}</text>`)
  }

  // Selected note dots
  for (let s = 0; s < STRINGS; s++) {
    const openNote = normalizeNote(displayStrings[s])
    const openIdx  = CHROMATIC.indexOf(openNote)
    for (let col = 0; col <= FRETS; col++) {
      if (!forgePositions.has(`${s},${col}`)) continue
      const note = col === 0 ? openNote : CHROMATIC[(openIdx + col) % 12]
      const x = colX(col), y = strY(s)
      p.push(`<circle cx="${x}" cy="${y}" r="${DOT_R}" fill="#c8882a" opacity="0.95"/>`)
      p.push(`<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" fill="#111" font-size="9.5" font-weight="700" font-family="system-ui,sans-serif">${note}</text>`)
    }
  }

  // Transparent hit targets (on top)
  for (let s = 0; s < STRINGS; s++) {
    for (let col = 0; col <= FRETS; col++) {
      const x = colX(col), y = strY(s)
      p.push(`<circle class="forge-hit" cx="${x}" cy="${y}" r="18" fill="transparent" data-str="${s}" data-fret="${col}"/>`)
    }
  }

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${p.join('')}</svg>`
}

function getForgeBassNote() {
  const tuning = allTunings.find(t => t.id === forgeTuningId) || allTunings[0]
  if (!tuning) return null
  const displayStrings = [...tuning.openNotes].reverse()
  let bassStr = -1
  forgePositions.forEach((_, key) => {
    const s = parseInt(key.split(',')[0])
    if (s > bassStr) bassStr = s  // higher index = lower-pitched string
  })
  if (bassStr < 0) return null
  const bassKey = [...forgePositions.keys()].find(k => parseInt(k.split(',')[0]) === bassStr)
  const col = parseInt(bassKey.split(',')[1])
  const openNote = normalizeNote(displayStrings[bassStr])
  const openIdx  = CHROMATIC.indexOf(openNote)
  return col === 0 ? openNote : CHROMATIC[(openIdx + col) % 12]
}

function updateForge() {
  // String indicators (× / O / fret number)
  const tuning = allTunings.find(t => t.id === forgeTuningId) || allTunings[0]
  if (tuning) {
    const displayStrings = [...tuning.openNotes].reverse()
    const indicators = document.getElementById('forge-string-indicators')
    indicators.innerHTML = ''
    for (let s = 0; s < 6; s++) {
      const label = normalizeNote(displayStrings[s].replace(/\d/, ''))
      const strLabel = document.createElement('span')
      strLabel.className = 'forge-str-label'
      strLabel.textContent = s === 0 ? label.toLowerCase() : label

      let fretNum = null
      forgePositions.forEach((_, key) => {
        const [ks, kf] = key.split(',').map(Number)
        if (ks === s) fretNum = kf
      })

      const ind = document.createElement('div')
      ind.className = 'forge-string-ind'
      const marker = document.createElement('span')
      marker.className = 'forge-string-marker' + (fretNum !== null ? ' active' : '')
      marker.textContent = fretNum === null ? '×' : fretNum === 0 ? 'O' : fretNum
      ind.appendChild(strLabel)
      ind.appendChild(marker)
      indicators.appendChild(ind)
    }
  }

  const container = document.getElementById('forge-fretboard-container')
  container.innerHTML = renderForgeFretboardSVG()

  container.querySelectorAll('.forge-hit').forEach(el => {
    el.addEventListener('click', () => {
      const key = `${el.dataset.str},${el.dataset.fret}`
      if (forgePositions.has(key)) forgePositions.delete(key)
      else forgePositions.set(key, true)
      updateForge()
    })
  })

  const notes     = getForgeNotes()
  const chordName = notes.length >= 2 ? identifyChord(notes) : null
  const chordRoot = chordName ? chordName.replace(/[^A-G#b].*/, '') : null
  const resultEl  = document.getElementById('forge-chord-result')
  const hintEl    = document.getElementById('forge-chord-hint')

  if (notes.length >= 2) {
    // Barre detection: find the lowest fret > 0 that appears on 2+ strings
    const fretCounts = new Map()
    forgePositions.forEach((_, key) => {
      const fret = parseInt(key.split(',')[1])
      if (fret > 0) fretCounts.set(fret, (fretCounts.get(fret) || 0) + 1)
    })
    let barreLabel = ''
    fretCounts.forEach((count, fret) => {
      if (count >= 2) {
        const minBarre = barreLabel ? Math.min(parseInt(barreLabel), fret) : fret
        barreLabel = String(minBarre)
      }
    })

    const bassNote = chordName ? getForgeBassNote() : null
    const slashSuffix = (bassNote && chordRoot && bassNote !== chordRoot) ? `/${bassNote}` : ''
    const displayName = (chordName || '?') + slashSuffix + (barreLabel ? ` (barre ${barreLabel})` : '')
    document.getElementById('forge-chord-name').textContent  = displayName
    document.getElementById('forge-chord-notes').textContent = notes.join('  ·  ')
    resultEl.classList.remove('hidden')
    hintEl.style.display = 'none'
  } else {
    resultEl.classList.add('hidden')
    hintEl.style.display = ''
  }

  const suggestEl = document.getElementById('forge-suggestions')
  if (forgeKeyId && chordName) {
    const key = KEYS.find(k => k.id === forgeKeyId)
    if (key) {
      const diatonic = computeDiatonicChords(key.root, key.mode)
      suggestEl.innerHTML = ''
      diatonic.forEach(dc => {
        const chip = document.createElement('span')
        chip.className = 'suggestion-chip' + (dc.root === chordRoot ? ' current' : '')
        chip.textContent = `${dc.degree} ${dc.name}`
        if (dc.root !== chordRoot) {
          chip.addEventListener('click', () => {
            const voicing = generateFirstPositionVoicing(dc.name, forgeTuningId)
            forgeProgression.push({ name: dc.name, voicing })
            renderForgeProgression()
          })
        }
        suggestEl.appendChild(chip)
      })
      suggestEl.classList.remove('hidden')
    } else {
      suggestEl.innerHTML = ''
      suggestEl.classList.add('hidden')
    }
  } else {
    suggestEl.innerHTML = ''
    suggestEl.classList.add('hidden')
  }
}

function positionsToObject(map) {
  const obj = {}
  map.forEach((_, k) => { obj[k] = true })
  return obj
}

function objectToPositions(obj) {
  const map = new Map()
  Object.keys(obj).forEach(k => map.set(k, true))
  return map
}

function renderForgeProgression() {
  const row = document.getElementById('forge-progression-row')
  const exportBtn = document.getElementById('forge-export-tab')
  if (exportBtn) exportBtn.disabled = !forgeProgression.length
  const downloadBtn = document.getElementById('forge-download-tab')
  if (downloadBtn) downloadBtn.disabled = !forgeProgression.length
  if (!forgeProgression.length) {
    row.innerHTML = '<span class="forge-prog-empty">no chords yet — add from the fretboard above</span>'
    renderForgeProgTabs()
    return
  }
  row.innerHTML = ''
  const last = forgeProgression.length - 1
  forgeProgression.forEach((chord, i) => {
    const chip = document.createElement('div')
    chip.className = 'chord-chip'
    chip.innerHTML =
      (i > 0    ? `<button class="chord-chip-move" data-dir="-1" aria-label="move left">‹</button>` : '') +
      `<span class="chord-chip-name">${chord.name}</span>` +
      (i < last  ? `<button class="chord-chip-move" data-dir="1"  aria-label="move right">›</button>` : '') +
      `<button class="chord-chip-remove" aria-label="remove">×</button>`
    chip.querySelector('.chord-chip-name').addEventListener('click', () => {
      forgePositions = new Map(chord.voicing)
      updateForge()
    })
    chip.querySelectorAll('.chord-chip-move').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation()
        const dir = parseInt(btn.dataset.dir)
        const tmp = forgeProgression[i + dir]
        forgeProgression[i + dir] = forgeProgression[i]
        forgeProgression[i] = tmp
        renderForgeProgression()
      })
    })
    chip.querySelector('.chord-chip-remove').addEventListener('click', e => {
      e.stopPropagation()
      forgeProgression.splice(i, 1)
      renderForgeProgression()
    })
    row.appendChild(chip)
  })
  renderForgeProgTabs()
}

function renderForgeProgTabs() {
  const container = document.getElementById('forge-prog-tabs')
  container.innerHTML = ''
  if (!forgeProgression.length) return

  const tuning = allTunings.find(t => t.id === forgeTuningId) || allTunings[0]
  if (!tuning) return

  const displayStrings = [...tuning.openNotes].reverse()
  // Strip octave numbers; use lowercase 'e' for the highest string
  const stringLabels = displayStrings.map((n, i) => {
    const letter = normalizeNote(n.replace(/\d/, ''))
    return i === 0 ? letter.toLowerCase() : letter
  })

  forgeProgression.forEach((chord, chordIdx) => {
    const frame = document.createElement('div')
    frame.className = 'forge-tab-frame'
    frame.title = 'click to load voicing'

    let html = `<div class="forge-tab-name">${chord.name}</div><div class="forge-tab-strings">`
    for (let s = 0; s < 6; s++) {
      let fretNum = null
      chord.voicing.forEach((_, key) => {
        const [ks, kf] = key.split(',').map(Number)
        if (ks === s) fretNum = kf
      })
      const played = fretNum !== null
      html +=
        `<div class="forge-tab-row">` +
        `<span class="forge-tab-string">${stringLabels[s]}</span>` +
        `<span class="forge-tab-fret${played ? ' played' : ''}">${played ? fretNum : '—'}</span>` +
        `</div>`
    }
    html += '</div>'
    frame.innerHTML = html

    frame.addEventListener('click', () => {
      forgePositions = new Map(chord.voicing)
      updateForge()
    })

    container.appendChild(frame)
  })
}

function loadSavedProgressions() {
  try { return JSON.parse(localStorage.getItem(FORGE_KEY) || '[]') } catch { return [] }
}

function writeSavedProgressions(list) {
  try { localStorage.setItem(FORGE_KEY, JSON.stringify(list)) } catch {}
}

function renderSavedProgressions() {
  const list  = document.getElementById('forge-saved-list')
  const saved = loadSavedProgressions()
  if (!saved.length) {
    list.innerHTML = '<span class="forge-prog-empty">no saved progressions</span>'
    return
  }
  list.innerHTML = ''
  saved.forEach((prog, i) => {
    const row = document.createElement('div')
    row.className = 'saved-prog-row'
    row.innerHTML = `
      <div class="saved-prog-info">
        <span class="saved-prog-name">${prog.name}</span>
        <span class="saved-prog-chords">${prog.chords.map(c => c.name).join(' — ')}</span>
      </div>
      <div class="saved-prog-actions">
        <button class="secondary-btn" data-action="load">Load</button>
        <button class="secondary-btn" data-action="delete">Delete</button>
      </div>`
    row.querySelector('[data-action="load"]').addEventListener('click', () => {
      forgeProgression = prog.chords.map(c => ({ name: c.name, voicing: objectToPositions(c.voicing) }))
      renderForgeProgression()
      if (forgeProgression.length) {
        forgePositions = new Map(forgeProgression[0].voicing)
        updateForge()
      }
    })
    row.querySelector('[data-action="delete"]').addEventListener('click', () => {
      const updated = loadSavedProgressions()
      updated.splice(i, 1)
      writeSavedProgressions(updated)
      renderSavedProgressions()
    })
    list.appendChild(row)
  })
}

function buildForgeTabText() {
  const tuning = allTunings.find(t => t.id === forgeTuningId) || allTunings[0]
  const displayStrings = [...tuning.openNotes].reverse()
  const stringLabels = displayStrings.map((n, i) => {
    const letter = normalizeNote(n.replace(/\d/, ''))
    return i === 0 ? letter.toLowerCase() : letter
  })

  // Build columns: each chord is a column of 6 fret values
  const cols = forgeProgression.map(chord => {
    return Array.from({ length: 6 }, (_, s) => {
      let fretNum = null
      chord.voicing.forEach((_, key) => {
        const [ks, kf] = key.split(',').map(Number)
        if (ks === s) fretNum = kf
      })
      return fretNum
    })
  })

  // Determine width of each column (max of fret digits, chord name, min 2)
  const colWidths = forgeProgression.map((chord, ci) => {
    const maxFretLen = Math.max(...cols[ci].map(f => f === null ? 1 : String(f).length))
    return Math.max(maxFretLen, chord.name.length, 2)
  })

  // Build tab lines (one per string)
  const lines = stringLabels.map((label, s) => {
    const cells = cols.map((col, ci) => {
      const w = colWidths[ci]
      const fret = col[s]
      const val = fret === null ? '-'.repeat(w) : String(fret).padEnd(w, '-')
      return val
    })
    return `${label} |--${cells.join('--|--')}--|`
  })

  // Chord name row — each name centered under its column
  const nameRow = forgeProgression.map((chord, ci) => chord.name.padEnd(colWidths[ci]))
  lines.push(`  |  ${nameRow.join('   ')}`)

  return lines.join('\n')
}

function exportForgeTab() {
  if (!forgeProgression.length) return
  const text = buildForgeTabText()
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('forge-export-tab')
    btn.textContent = 'copied!'
    setTimeout(() => { btn.textContent = 'Export tab' }, 1500)
  }).catch(() => {
    // fallback: select a hidden textarea
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    const btn = document.getElementById('forge-export-tab')
    btn.textContent = 'copied!'
    setTimeout(() => { btn.textContent = 'Export tab' }, 1500)
  })
}

function downloadForgeTab() {
  if (!forgeProgression.length) return
  const text = buildForgeTabText()
  const name = (document.getElementById('forge-prog-name').value.trim() || 'progression')
  const blob = new Blob([text], { type: 'text/plain' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href = url
  a.download = name + '.txt'
  a.click()
  URL.revokeObjectURL(url)
}

function buildForge() {
  const forgeSelect = document.getElementById('forge-tuning')
  allTunings.forEach(t => {
    const opt = document.createElement('option')
    opt.value = t.id; opt.textContent = t.name
    forgeSelect.appendChild(opt)
  })
  forgeSelect.value = forgeTuningId
  forgeSelect.addEventListener('change', () => {
    forgeTuningId = forgeSelect.value
    forgePositions.clear()
    updateForge()
  })

  const keySelect = document.getElementById('forge-key')
  keySelect.innerHTML = '<option value="">— no key —</option>'
  KEYS.forEach(k => {
    const opt = document.createElement('option')
    opt.value = k.id
    opt.textContent = k.name
    keySelect.appendChild(opt)
  })
  keySelect.addEventListener('change', () => { forgeKeyId = keySelect.value || null; updateForge() })

  document.getElementById('forge-clear').addEventListener('click', () => {
    forgePositions.clear()
    updateForge()
  })

  document.getElementById('forge-add-chord').addEventListener('click', () => {
    const notes = getForgeNotes()
    if (notes.length < 2) return
    forgeProgression.push({ name: identifyChord(notes) || '?', voicing: new Map(forgePositions) })
    renderForgeProgression()
  })

  document.getElementById('forge-export-tab').addEventListener('click', exportForgeTab)
  document.getElementById('forge-download-tab').addEventListener('click', downloadForgeTab)

  document.getElementById('forge-save-prog').addEventListener('click', () => {
    if (!forgeProgression.length) return
    const nameInput = document.getElementById('forge-prog-name')
    const name = nameInput.value.trim() || `Progression ${loadSavedProgressions().length + 1}`
    const saved = loadSavedProgressions()
    saved.push({ name, chords: forgeProgression.map(c => ({ name: c.name, voicing: positionsToObject(c.voicing) })) })
    writeSavedProgressions(saved)
    nameInput.value = ''
    renderSavedProgressions()
  })

  updateForge()
  renderForgeProgression()
  renderSavedProgressions()
}

// ============================================================
// Init
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  loadData()

  // Nav
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => switchSection(tab.dataset.section))
  })

  // Keys — root / mode free selectors
  populateVizRootMode()
  const vizRootSelect = document.getElementById('viz-root')
  const vizModeSelect = document.getElementById('viz-mode')
  vizRootSelect.value = 'E'
  vizModeSelect.value = 'minor'

  const onVizRootModeChange = () => {
    selectedKey = makeSyntheticKey(vizRootSelect.value, vizModeSelect.value)
    selectedChordIdx = null
    document.querySelectorAll('.key-card').forEach(c => c.classList.remove('selected'))
    document.querySelectorAll('.mood-key-btn').forEach(b => b.classList.remove('active'))
    renderChordTabs()
    updateVisualizer()
    updateSuggestions()
  }
  vizRootSelect.addEventListener('change', onVizRootModeChange)
  vizModeSelect.addEventListener('change', onVizRootModeChange)

  // Keys — visualizer tuning select
  const vizTuningSelect = document.getElementById('viz-tuning')
  allTunings.forEach(t => {
    const opt = document.createElement('option')
    opt.value = t.id
    opt.textContent = t.name
    vizTuningSelect.appendChild(opt)
  })
  vizTuningSelect.value = vizTuningId
  vizTuningSelect.addEventListener('change', () => {
    vizTuningId = vizTuningSelect.value
    updateVisualizer()
    saveSession()
  })

  document.getElementById('viz-show-labels').addEventListener('change', e => {
    vizShowLabels = e.target.checked
    updateVisualizer()
  })

  document.getElementById('viz-first-position').addEventListener('change', e => {
    vizFirstPosition = e.target.checked
    updateVisualizer()
  })

  document.getElementById('viz-download-svg').addEventListener('click', downloadFretboardSVG)

  buildKeyFilters()
  renderKeys()

  // Restore session or fall back to E minor
  let sessionRestored = false
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
    if (session) {
      if (session.tuningId) {
        const savedTuning = allTunings.find(t => t.id === session.tuningId)
        if (savedTuning) {
          vizTuningId = session.tuningId
          vizTuningSelect.value = vizTuningId
        }
      }
      if (session.keyId) {
        const savedKey = allKeys.find(k => k.id === session.keyId)
        if (savedKey) { selectKey(savedKey); sessionRestored = true }
      }
    }
  } catch {}
  if (!sessionRestored) {
    const defaultKey = allKeys.find(k => k.id === 'e-minor') || allKeys[0]
    if (defaultKey) selectKey(defaultKey)
  }

  // Suggestions toggle
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      suggestionsMode = btn.dataset.mode
      updateSuggestions()
    })
  })

  // Esoteric
  drawCard()
  document.getElementById('draw-again').addEventListener('click', drawCard)

  // Mood search
  const moodInput = document.getElementById('mood-input')
  const moodSubmit = document.getElementById('mood-submit')
  moodSubmit.addEventListener('click', () => {
    const val = moodInput.value.trim()
    if (val) showMoodResult(val)
  })
  moodInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const val = moodInput.value.trim()
      if (val) showMoodResult(val)
    }
  })

  // Forge
  buildForge()

  // Modal close handlers
  document.getElementById('modal-close').addEventListener('click', closeKeyModal)
  document.getElementById('detail-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeKeyModal()
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeKeyModal()
  })

  // Initial section
  switchSection('keys')
})
