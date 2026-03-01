export const TONES = [
  {
    id: 'clean-fender',
    name: 'Clean Fender',
    ampModel: 'Fender Twin Reverb',
    cabinet: '2x12 Open Back',
    moodTags: ['clean', 'bright', 'airy', 'jangly', 'open'],
    keyTags: ['G major', 'C major', 'D major', 'A major', 'E major'],
    effectsChain: [
      { type: 'compressor', model: 'LA Studio Comp', notes: 'Light ratio, adds sustain without squash' },
      { type: 'reverb', model: 'Hall', notes: 'Small-medium size, pre-delay 20ms' }
    ],
    description: 'Glassy Fender clean with room reverb. Picks up every nuance of your playing. Ideal for arpeggios, fingerpicking, and clean rhythm work.'
  },
  {
    id: 'crunch-marshall',
    name: 'Crunch Marshall',
    ampModel: 'Plexi Super Lead',
    cabinet: '4x12 Greenback',
    moodTags: ['gritty', 'raw', 'classic', 'driven', 'rock'],
    keyTags: ['E major', 'A major', 'G major', 'D major', 'B minor'],
    effectsChain: [
      { type: 'overdrive', model: 'Tube Screamer', notes: 'Low drive, boost volume — pushes the amp into natural breakup' },
      { type: 'delay', model: 'Analog Echo', notes: '280ms, ~25% mix — fills space without cluttering' }
    ],
    description: 'Classic British crunch. The sound of a Plexi pushed hard by the input. Responds dynamically — dig in for grunt, play lightly for edge-of-breakup shimmer.'
  },
  {
    id: 'high-gain-modern',
    name: 'High Gain Modern',
    ampModel: 'Mesa Boogie Dual Rectifier',
    cabinet: '4x12 Vintage 30',
    moodTags: ['heavy', 'aggressive', 'tight', 'modern', 'crushing'],
    keyTags: ['E minor', 'B minor', 'C# minor', 'drop tunings'],
    effectsChain: [
      { type: 'gate', model: 'Noise Gate', notes: 'Tight threshold — kills hum between riffs' },
      { type: 'eq', model: 'Low Cut', notes: 'High-pass at 80Hz, reduces mud in low register' },
      { type: 'delay', model: 'Digital Delay', notes: '320ms, low mix — adds depth without smearing' }
    ],
    description: 'Scooped modern high gain. Tight low end, searing mids, fizzy top. Standard for technical metal, djent-adjacent playing, and power chord walls.'
  },
  {
    id: 'doom-fuzz',
    name: 'Doom / Fuzz',
    ampModel: 'Hiwatt DR103',
    cabinet: '4x12 Heritage',
    moodTags: ['doom', 'dark', 'heavy', 'slow', 'suffocating', 'ritual'],
    keyTags: ['B standard', 'Eb standard', 'D minor', 'E minor', 'E Phrygian'],
    effectsChain: [
      { type: 'fuzz', model: 'Op-Amp Big Muff', notes: 'Full sustain, tone rolled back — almost synth-like' },
      { type: 'reverb', model: 'Cave Reverb', notes: 'Large decay, high diffusion — the room becomes the sound' },
      { type: 'filter', model: 'Wah', notes: 'Parked mid-position for nasal low-mid emphasis' }
    ],
    description: 'Slow, suffocating fuzz through a massive clean amp. For riffs that move like tectonic plates. Tune down, play slow, let it breathe.'
  },
  {
    id: 'ambient-reverb',
    name: 'Ambient / Reverb',
    ampModel: 'Vox AC30',
    cabinet: '2x12 Alnico Blue',
    moodTags: ['ambient', 'ethereal', 'dreamy', 'floating', 'spacious'],
    keyTags: ['C Lydian', 'D Mixolydian', 'A Dorian', 'E minor', 'open tunings'],
    effectsChain: [
      { type: 'reverb', model: 'Shimmer Reverb', notes: 'Long tail with octave shimmer — creates a sustained wash' },
      { type: 'delay', model: 'Tape Echo', notes: '640ms, high feedback — cascading repeats that blend into reverb' },
      { type: 'tremolo', model: 'Optical Tremolo', notes: 'Slow rate, moderate depth — pulses beneath the wash' }
    ],
    description: 'Lush shimmer reverb over AC30 sparkle. Notes bloom into clouds. Better for texture and atmosphere than precision. High E string harmonics are transcendent.'
  },
  {
    id: 'edge-of-breakup',
    name: 'Edge of Breakup',
    ampModel: 'Dumble ODS',
    cabinet: '1x12 Celestion 65',
    moodTags: ['warm', 'expressive', 'dynamic', 'blues', 'sensitive'],
    keyTags: ['G major', 'A major', 'E minor', 'B minor', 'D Dorian'],
    effectsChain: [
      { type: 'compressor', model: 'Optical Compressor', notes: 'Slow attack — lets the pick attack breathe' },
      { type: 'reverb', model: 'Plate Reverb', notes: 'Short-medium, adds body without smearing' }
    ],
    description: 'The most responsive tone on the list. Barely breaking up — your pick attack controls whether it sings clean or growls. The tone that rewards the player who plays quietly.'
  },
  {
    id: 'heavy-metal',
    name: 'Heavy Metal',
    ampModel: 'EVH 5150 III',
    cabinet: '4x12 Vintage 30',
    moodTags: ['heavy', 'aggressive', 'fast', 'technical', 'precise'],
    keyTags: ['E minor', 'E Phrygian', 'B Phrygian Dominant', 'drop D', 'drop B'],
    effectsChain: [
      { type: 'gate', model: 'ISP Decimator', notes: 'Tight, tracks pick attack — silence between notes is absolute' },
      { type: 'eq', model: 'Graphic EQ', notes: 'Mid scoop 500Hz, boost 3kHz for cut — the metal V-shape' },
      { type: 'delay', model: 'Stereo Delay', notes: 'Ping-pong, 240ms — adds width on leads' }
    ],
    description: 'Saturated, articulate modern metal. The gate is tight and the mids are scooped. Built for precision rhythm playing and screaming leads. Zero forgiveness.'
  },
  {
    id: 'acoustic-sim',
    name: 'Acoustic Sim',
    ampModel: 'Acoustic Simulator',
    cabinet: 'FRFR Flat',
    moodTags: ['acoustic', 'natural', 'open', 'folk', 'intimate'],
    keyTags: ['G major', 'D major', 'A major', 'C major', 'DADGAD'],
    effectsChain: [
      { type: 'eq', model: 'Body Resonance EQ', notes: 'Boost 200Hz for body, cut 1kHz to remove electric nasal quality' },
      { type: 'reverb', model: 'Small Room', notes: 'Short decay — sounds like a recording session, not a hall' },
      { type: 'compressor', model: 'Studio Compressor', notes: 'Gentle, adds sustain common to acoustic recordings' }
    ],
    description: 'Convincing acoustic simulation on electric. Works best with a clean touch and fingerpicking. Strumming hard exposes the artifice.'
  },
  {
    id: 'black-metal-cold',
    name: 'Black Metal / Raw',
    ampModel: 'Marshall JCM800',
    cabinet: '4x12 Greenback (close mic off-axis)',
    moodTags: ['raw', 'cold', 'bleak', 'atmospheric', 'lo-fi', 'ritual'],
    keyTags: ['E minor', 'E Phrygian', 'B minor', 'C# minor', 'tremolo picking keys'],
    effectsChain: [
      { type: 'distortion', model: 'ProCo RAT', notes: 'Filter rolled back — cuts high end, adds the characteristic mid-spike' },
      { type: 'reverb', model: 'Frozen Reverb', notes: 'Very long decay with infinite sustain option — sounds like a stone church' }
    ],
    description: 'Cold, trebly, purposefully raw. The tone of frozen landscapes and burning churches. Tremolo-pick a minor chord and leave it ringing. It knows what it is.'
  }
]
