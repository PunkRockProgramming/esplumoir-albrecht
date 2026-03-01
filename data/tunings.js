export const TUNINGS = [
  {
    id: 'e-standard',
    name: 'E Standard',
    strings: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
    openNotes: ['E', 'A', 'D', 'G', 'B', 'E'],
    description: 'Standard tuning. The default reference point for all guitar work.',
    character: 'Balanced, versatile — everything the instrument was designed to do'
  },
  {
    id: 'eb-standard',
    name: 'Eb Standard',
    strings: ['Eb2', 'Ab2', 'Db3', 'Gb3', 'Bb3', 'Eb4'],
    openNotes: ['Eb', 'Ab', 'Db', 'Gb', 'Bb', 'Eb'],
    description: 'All strings tuned down one semitone from standard. Loosens tension, deepens the sound, and lets you play standard-fingering shapes in a slightly darker tonal space.',
    character: 'Darker and looser than standard — classic hard rock and metal color'
  },
  {
    id: 'dadgad',
    name: 'DADGAD',
    strings: ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'],
    openNotes: ['D', 'A', 'D', 'G', 'A', 'D'],
    description: 'Open Dsus4 tuning. The strings drone and ring together naturally, producing lush, ambiguous harmonics suited to fingerstyle and Celtic music.',
    character: 'Droning, modal, ancient — open strings sing without resolution'
  },
  {
    id: 'bfbefb',
    name: 'BFBEFB (Modal B)',
    strings: ['B1', 'F#2', 'B2', 'E3', 'F#3', 'B3'],
    openNotes: ['B', 'F#', 'B', 'E', 'F#', 'B'],
    description: 'DADGAD tuned down three semitones to B. Opens strings form a Bsus4 chord — root, fifth, fourth — with the same modal, unresolved quality as DADGAD but three steps lower. Darker, heavier, and suited to minor and Phrygian modal playing.',
    character: 'Dark and droning — DADGAD\'s modal ambiguity pulled into heavier, lower territory'
  },
  {
    id: 'b-standard',
    name: 'B Standard',
    strings: ['B1', 'E2', 'A2', 'D3', 'F#3', 'B3'],
    openNotes: ['B', 'E', 'A', 'D', 'F#', 'B'],
    description: 'All strings tuned down a major third from standard. Requires heavier strings. Produces a massive, sub-heavy tone suited to doom, sludge, and extended-range work.',
    character: 'Cavernous and slow — gravity-heavy, built for riffs that want to collapse inward'
  },
  {
    id: 'open-d',
    name: 'Open D',
    strings: ['D2', 'A2', 'D3', 'F#3', 'A3', 'D4'],
    openNotes: ['D', 'A', 'D', 'F#', 'A', 'D'],
    description: 'All strings tuned to a D major chord. Strumming open strings produces a full D major. Slide-friendly — a bottleneck makes every position a major chord. Used across blues, folk, and slide guitar traditions.',
    character: 'Open, resonant, country-blues warmth — slides and drones ring true without fretting'
  },
  {
    id: 'open-g',
    name: 'Open G',
    strings: ['D2', 'G2', 'D3', 'G3', 'B3', 'D4'],
    openNotes: ['D', 'G', 'D', 'G', 'B', 'D'],
    description: 'All strings tuned to a G major chord. Keith Richards famously removes the low D string and plays five-string. Slide-friendly; every straight bar across the frets is a major chord. Common in Delta blues, rock, and open-tuning folk.',
    character: 'Rolling, percussive, rock-and-roll authority — raw and resonant, open bass drones underneath everything'
  },
  {
    id: 'c-standard',
    name: 'C Standard',
    strings: ['C2', 'F2', 'Bb2', 'Eb3', 'G3', 'C4'],
    openNotes: ['C', 'F', 'Bb', 'Eb', 'G', 'C'],
    description: 'All strings tuned down a major third from standard — four semitones below E Standard. Standard fingering shapes still apply. Common in progressive metal, doom, and stoner rock where extra low-end weight is needed without the extreme drop of B Standard.',
    character: 'Thick and saturated — heavier than Eb without the collapse of B, riffs carry their full weight'
  }
]
