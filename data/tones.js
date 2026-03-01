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
  },
  {
    id: 'shoegaze-wall',
    name: 'Shoegaze / Wall of Sound',
    ampModel: 'Fender Jazzmaster → Fender Deluxe Reverb',
    cabinet: '1x12 Jensen',
    moodTags: ['lush', 'shoegaze', 'wall-of-sound', 'romantic', 'overwhelming'],
    keyTags: ['C Lydian', 'Eb major', 'Ab major', 'A Dorian', 'any — the tone is the point'],
    effectsChain: [
      { type: 'fuzz', model: 'Fuzz Face', notes: 'Silicon, cranked — compressed and smooth at the top end' },
      { type: 'pitch', model: 'Octave Up', notes: 'Dry signal + one octave up blended — fattens the shimmer' },
      { type: 'reverb', model: 'Shimmer Reverb', notes: 'Long decay, high shimmer mix — the note blooms into a cloud' },
      { type: 'delay', model: 'Tape Echo', notes: '480ms, high feedback — smears into the reverb tail' }
    ],
    description: 'Wall of sound through fuzz and shimmer. The guitar dissolves into the effect chain — you\'re not playing chords, you\'re playing texture. Tune to Lydian, strum whole notes, let it bloom.'
  },
  {
    id: 'post-punk-chorus',
    name: 'Post-Punk / Cold Wave',
    ampModel: 'Roland JC-120',
    cabinet: '2x12 Chorus Built-In',
    moodTags: ['cold', 'distant', 'post-punk', 'mechanical', 'alienated'],
    keyTags: ['E minor', 'D minor', 'B minor', 'A minor', 'G Dorian'],
    effectsChain: [
      { type: 'chorus', model: 'Roland Dimension D', notes: 'Mode 4 — widest chorus, icy stereo spread' },
      { type: 'delay', model: 'Digital Delay', notes: '340ms, moderate mix — clean, not tape-warped' }
    ],
    description: 'Clean, icy, chorused. The sound of 1983 in a room with bad lighting. No overdrive — the coldness is the point. Works for angular post-punk riffs and distant arpeggios alike. The Cure, Joy Division, Bauhaus territory.'
  },
  {
    id: 'jazz-clean',
    name: 'Jazz Clean',
    ampModel: 'Fender Super Reverb',
    cabinet: '4x10 Jensen',
    moodTags: ['warm', 'intimate', 'sophisticated', 'smooth', 'jazz'],
    keyTags: ['D Dorian', 'G Dorian', 'C major', 'F major', 'Bb major', 'A Dorian'],
    effectsChain: [
      { type: 'eq', model: 'Treble Roll-Off', notes: 'Tone knob at 3/10 — dark, round attack, no brightness' }
    ],
    description: 'Hollow-body warmth through a clean amp with the tone rolled back. Dark, round, no reverb added — let the room breathe. Pick lightly near the neck pickup. Best for chord melody, single-line improvisation, and anything that wants to feel like late night and cigarette smoke.'
  },
  {
    id: 'psych-fuzz',
    name: 'Psychedelic Fuzz',
    ampModel: 'Marshall Super Bass 100W',
    cabinet: '4x12 Greenback',
    moodTags: ['psychedelic', 'swirling', 'warm', 'bluesy', 'vintage'],
    keyTags: ['E minor', 'A Dorian', 'D Mixolydian', 'E blues', 'A blues'],
    effectsChain: [
      { type: 'fuzz', model: 'Germanium Fuzz Face', notes: 'Warm, touch-responsive — cleans up when you roll the guitar volume back' },
      { type: 'modulation', model: 'Rotary Speaker', notes: 'Slow speed — swirling, organ-adjacent movement' },
      { type: 'reverb', model: 'Spring Reverb', notes: 'Long spring — adds drip and vintage splash' }
    ],
    description: 'Germanium fuzz through a roaring Marshall, rotary and spring reverb. The sound of 1968 leaking into the present. Touch-responsive — play soft for crunch, dig in for the wall. Hendrix, Cream, Blue Cheer territory.'
  },
  {
    id: 'lo-fi-tape',
    name: 'Lo-Fi / Tape',
    ampModel: 'Fender Champ 5W',
    cabinet: '1x8 Alnico',
    moodTags: ['lo-fi', 'degraded', 'nostalgic', 'warm', 'intimate'],
    keyTags: ['G major', 'D major', 'A minor', 'C major', 'any — tone is bedroom-level'],
    effectsChain: [
      { type: 'saturation', model: 'Tape Cassette', notes: 'Warm saturation with slight compression — no clean headroom' },
      { type: 'modulation', model: 'Wow/Flutter', notes: 'Subtle pitch wobble — not obvious, just alive and unstable' },
      { type: 'noise', model: 'Hiss/Room', notes: 'Low-level hiss layer — sounds like a home recording' }
    ],
    description: 'Bedroom-level Champ through cassette saturation. The imperfections are the character — slight pitch wobble, quiet hiss, compressed headroom. Record at low volume. The degradation is not a flaw, it\'s the texture.'
  },
  {
    id: 'noise-feedback',
    name: 'Noise / Feedback',
    ampModel: 'Any loud amp — driven hard',
    cabinet: '4x12 close-mic',
    moodTags: ['noise', 'abrasive', 'dissonant', 'experimental', 'chaotic'],
    keyTags: ['any — atonal or E minor for organized chaos'],
    effectsChain: [
      { type: 'distortion', model: 'Rat + Boss DS-1 stacked', notes: 'Both drives cranked — walls of harmonic distortion' },
      { type: 'reverb', model: 'Gated Reverb', notes: 'Long pre-delay, short gate — sustains then cuts brutally' },
      { type: 'feedback', model: 'Controlled Feedback', notes: 'Guitar angled toward speaker — pitch of feedback controlled by position' }
    ],
    description: 'Prepared guitar and sustained feedback as compositional element. Volume and position control pitch. Not random — intentional noise. Sonic Youth, Glenn Branca, Rhys Chatham territory. Point the guitar, listen to what comes back.'
  }
]
