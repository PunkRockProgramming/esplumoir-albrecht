// Pre-researched mood profiles for client-side search.
// Each entry maps keywords → key / tone / instrument suggestions.
// Add new profiles in future sprints to expand coverage.

export const MOOD_MAP = [
  {
    keywords: ['dark', 'heavy', 'doom', 'crushing', 'oppressive', 'slow', 'sludge', 'weight', 'massive', 'suffocating'],
    keys: ['e-minor', 'd-minor', 'b-minor'],
    tones: ['doom-fuzz', 'black-metal-cold'],
    instruments: ['alchemy-dark-pad', 'string-ensemble', 'percussion-industrial'],
    startingPoint: 'Tune to Eb or B standard. Open on a single low power chord and hold it past comfortable. Slow tempo — let the fuzz bloom into the room before the next note arrives.'
  },
  {
    keywords: ['grief', 'loss', 'heartbreak', 'mourning', 'sad', 'sadness', 'broken', 'hurt', 'cry', 'tears', 'devastated', 'bereaved', 'bereavement', 'sorrow'],
    keys: ['a-minor', 'b-minor', 'd-minor'],
    tones: ['edge-of-breakup', 'acoustic-sim'],
    instruments: ['string-ensemble', 'alchemy-pad-lush', 'alchemy-choir'],
    startingPoint: 'Fingerpick in A minor. Don\'t rush to the next chord — let each one breathe. String ensemble at low volume underneath, no percussion.'
  },
  {
    keywords: ['rage', 'anger', 'angry', 'aggression', 'aggressive', 'furious', 'fury', 'hatred', 'violent', 'violence', 'brutal', 'brutality', 'wrath'],
    keys: ['e-minor', 'c-sharp-minor', 'e-phrygian'],
    tones: ['high-gain-modern', 'heavy-metal'],
    instruments: ['es2-lead', 'percussion-industrial', 'es2-texture'],
    startingPoint: 'Drop-tuned riff in E minor or E Phrygian. Gate tight, tempo precise. The anger is in the attack, not the volume — keep the rhythm locked and let the distortion do the rest.'
  },
  {
    keywords: ['melancholy', 'melancholic', 'longing', 'yearning', 'wistful', 'wistfulness', 'ache', 'aching', 'nostalgia', 'nostalgic', 'pine', 'pining', 'bittersweet'],
    keys: ['b-minor', 'f-sharp-minor', 'c-sharp-minor'],
    tones: ['edge-of-breakup', 'ambient-reverb'],
    instruments: ['alchemy-pad-lush', 'string-ensemble', 'alchemy-shimmer'],
    startingPoint: 'B minor with gentle picking. Let the melody almost resolve before pulling away. Lush pad underneath for warmth — something that\'s tender rather than dramatic.'
  },
  {
    keywords: ['ethereal', 'floating', 'dreamy', 'dream', 'surreal', 'dissolving', 'drift', 'drifting', 'hazy', 'weightless', 'transcendent', 'otherworldly', 'suspended'],
    keys: ['c-lydian', 'a-dorian', 'eb-major'],
    tones: ['ambient-reverb', 'clean-fender'],
    instruments: ['alchemy-shimmer', 'sculpture-glass', 'alchemy-pad-lush'],
    startingPoint: 'Lydian over a long reverb wash. High E harmonics bloom into shimmer pad. Prioritize space — silence is part of the texture.'
  },
  {
    keywords: ['haunted', 'ghost', 'ghostly', 'eerie', 'uncanny', 'strange', 'unsettling', 'supernatural', 'spirit', 'horror', 'dread', 'foreboding', 'ominous'],
    keys: ['e-phrygian', 'a-harmonic-minor', 'd-minor'],
    tones: ['black-metal-cold', 'ambient-reverb'],
    instruments: ['alchemy-choir', 'sculpture-glass', 'es2-texture'],
    startingPoint: 'Phrygian half-step descent. Ghosted choir pad at low volume underneath, distant. Let the space between phrases carry the unease — don\'t fill it.'
  },
  {
    keywords: ['lonely', 'loneliness', 'isolated', 'isolation', 'alone', 'abandoned', 'desolate', 'desolation', 'empty', 'emptiness', 'forsaken', 'solitude'],
    keys: ['e-minor', 'b-minor', 'g-dorian'],
    tones: ['acoustic-sim', 'edge-of-breakup'],
    instruments: ['string-ensemble', 'alchemy-dark-pad', 'alchemy-pad-lush'],
    startingPoint: 'Single-note melody in E minor over an open-string drone. Sparse arrangement — leave room between notes. The silence is the subject.'
  },
  {
    keywords: ['meditative', 'meditation', 'peaceful', 'peace', 'still', 'stillness', 'calm', 'serene', 'serenity', 'quiet', 'tranquil', 'contemplative', 'centered'],
    keys: ['g-dorian', 'd-dorian', 'f-major'],
    tones: ['acoustic-sim', 'clean-fender'],
    instruments: ['alchemy-pad-lush', 'sculpture-glass', 'alchemy-shimmer'],
    startingPoint: 'DADGAD tuning, slow open chord shapes. Let strings ring together and decay naturally. No percussion — let breath and silence set the tempo.'
  },
  {
    keywords: ['euphoric', 'euphoria', 'triumphant', 'triumph', 'uplifting', 'ecstatic', 'ecstasy', 'joyful', 'joy', 'elated', 'elation', 'victory', 'cathartic', 'catharsis', 'release'],
    keys: ['eb-major', 'g-major', 'd-mixolydian'],
    tones: ['crunch-marshall', 'edge-of-breakup'],
    instruments: ['alchemy-organ', 'string-ensemble', 'alchemy-shimmer'],
    startingPoint: 'Open power chords in Eb or G. Natural string sustain adds to the swell. Organ underneath for ceremonial weight. Push the tempo slightly — euphoria lives just above comfortable.'
  },
  {
    keywords: ['anxious', 'anxiety', 'paranoid', 'paranoia', 'tense', 'tension', 'unsettled', 'nervous', 'uneasy', 'unease', 'fear', 'fearful', 'dread', 'panic'],
    keys: ['c-sharp-minor', 'f-sharp-minor', 'a-harmonic-minor'],
    tones: ['high-gain-modern', 'crunch-marshall'],
    instruments: ['es2-texture', 'retro-synth-arp', 'percussion-industrial'],
    startingPoint: 'Tremolo-picked pattern in C# minor. Keep it irregular — avoid resolving. Noise texture underneath at low volume, the kind of sound that makes you feel watched.'
  },
  {
    keywords: ['occult', 'ritual', 'magic', 'forbidden', 'summoning', 'ceremony', 'esoteric', 'mystical', 'arcane', 'witchcraft', 'invocation', 'dark ritual', 'sigil'],
    keys: ['e-phrygian', 'b-phrygian-dominant', 'a-harmonic-minor'],
    tones: ['doom-fuzz', 'black-metal-cold'],
    instruments: ['alchemy-choir', 'alchemy-dark-pad', 'sculpture-glass'],
    startingPoint: 'B Phrygian Dominant at slow, deliberate tempo. Choir pad on sustained drone notes — barely audible at first. The space between gestures is part of the invocation.'
  },
  {
    keywords: ['cinematic', 'epic', 'sweeping', 'grand', 'orchestral', 'film', 'score', 'soundtrack', 'dramatic', 'theatrical', 'operatic'],
    keys: ['d-minor', 'eb-major', 'b-minor'],
    tones: ['ambient-reverb', 'crunch-marshall'],
    instruments: ['string-ensemble', 'alchemy-choir', 'alchemy-pad-lush'],
    startingPoint: 'String ensemble on the root chord, slow build. Think in scenes: establish, complicate, arrive. Guitar enters when dynamics allow. Don\'t rush the silence before the climax.'
  },
  {
    keywords: ['industrial', 'mechanical', 'cold', 'machine', 'factory', 'robotic', 'dehumanized', 'inhuman', 'clinical', 'sterile', 'hostile'],
    keys: ['c-sharp-minor', 'e-minor', 'd-minor'],
    tones: ['high-gain-modern', 'black-metal-cold'],
    instruments: ['percussion-industrial', 'es2-texture', 'es2-lead'],
    startingPoint: 'Industrial percussion pattern first — let the machine establish the grid. Noise texture underneath. Guitar enters on top like a siren: purposeful, cold, precise.'
  },
  {
    keywords: ['lo-fi', 'hazy', 'faded', 'distant', 'cassette', 'bedroom', 'tape', 'degraded', 'imperfect', 'worn', 'vintage feel', 'overcast'],
    keys: ['g-major', 'a-minor', 'd-dorian'],
    tones: ['edge-of-breakup', 'crunch-marshall'],
    instruments: ['alchemy-pad-lush', 'vintage-clav', 'retro-synth-arp'],
    startingPoint: 'Slightly overdriven chord progression in G or A minor. Roll the tone back. Let it blur and breathe. Record a little hot — the saturation is the texture.'
  },
  {
    keywords: ['folk', 'earthy', 'organic', 'natural', 'acoustic', 'campfire', 'traditional', 'roots', 'fingerpicked', 'rural', 'pastoral', 'honest'],
    keys: ['g-major', 'd-mixolydian', 'g-dorian'],
    tones: ['acoustic-sim', 'clean-fender'],
    instruments: ['alchemy-organ', 'vintage-clav', 'alchemy-pad-lush'],
    startingPoint: 'DADGAD or open G. Simple chord progression with space for melody. Play without a pick. Let open strings ring together — the drone is the foundation.'
  },
  {
    keywords: ['post-rock', 'instrumental', 'build', 'building', 'crescendo', 'swell', 'dynamic', 'tension release', 'walls', 'eruption', 'post metal'],
    keys: ['e-minor', 'b-minor', 'c-sharp-minor'],
    tones: ['ambient-reverb', 'high-gain-modern'],
    instruments: ['alchemy-shimmer', 'alchemy-dark-pad', 'string-ensemble'],
    startingPoint: 'Start clean in E minor, single notes only. Add chords. Then fuzz. The silence before the explosion is structural — don\'t rush it.'
  },
  {
    keywords: ['shoegaze', 'dense', 'layered', 'fuzzy', 'wall of sound', 'noise pop', 'beautiful noise', 'My Bloody Valentine', 'lush', 'distorted pretty'],
    keys: ['c-lydian', 'a-dorian', 'eb-major'],
    tones: ['ambient-reverb', 'doom-fuzz'],
    instruments: ['alchemy-shimmer', 'alchemy-pad-lush', 'es2-texture'],
    startingPoint: 'Lydian chords, heavy reverb, fuzz layered over shimmer. High notes carry melody, low notes carry weight, noise fills the middle. Everything at equal importance.'
  },
  {
    keywords: ['black metal', 'bleak', 'frozen', 'tremolo', 'raw', 'atmospheric', 'kvlt', 'winter metal', 'cold darkness', 'void'],
    keys: ['e-minor', 'e-phrygian', 'c-sharp-minor'],
    tones: ['black-metal-cold', 'doom-fuzz'],
    instruments: ['alchemy-dark-pad', 'es2-texture', 'alchemy-choir'],
    startingPoint: 'Tremolo-picked minor chord pattern. Keep it cold and trebly. Dark atmosphere pad at barely audible volume underneath — it should feel like weather.'
  },
  {
    keywords: ['psychedelic', 'trippy', 'hallucinatory', 'acid', 'liquid', 'morphing', 'bending', 'altered', 'consciousness', 'mind expanding', 'kaleidoscopic'],
    keys: ['d-mixolydian', 'a-dorian', 'c-lydian'],
    tones: ['ambient-reverb', 'crunch-marshall'],
    instruments: ['alchemy-shimmer', 'sculpture-glass', 'retro-synth-arp'],
    startingPoint: 'Modal playing in D Mixolydian with long reverb. Let notes bend and blur at the edges. Arpeggiator underneath for pulse without clarity — rhythm felt, not counted.'
  },
  {
    keywords: ['death', 'dying', 'decay', 'decompose', 'mortality', 'end', 'finality', 'funeral', 'morbid', 'requiem', 'last', 'passing'],
    keys: ['d-minor', 'b-minor', 'a-harmonic-minor'],
    tones: ['doom-fuzz', 'black-metal-cold'],
    instruments: ['alchemy-choir', 'string-ensemble', 'alchemy-dark-pad'],
    startingPoint: 'D minor, slow tempo. Choral pad underneath — something that sounds like it\'s singing even though you can\'t make out the words. Strings carry the melody upward before falling.'
  },
  {
    keywords: ['nature', 'wilderness', 'forest', 'wood', 'woods', 'trees', 'mountain', 'wind', 'earth', 'storm', 'elemental', 'primal earth'],
    keys: ['g-dorian', 'd-mixolydian', 'g-major'],
    tones: ['acoustic-sim', 'clean-fender'],
    instruments: ['sculpture-glass', 'alchemy-shimmer', 'alchemy-pad-lush'],
    startingPoint: 'DADGAD for a droning, ancient quality. Let open strings ring like wind through trees. Glass resonator for atmospheric, non-human melodic elements.'
  },
  {
    keywords: ['urban', 'city', 'streets', 'concrete', 'pavement', 'neon', 'downtown', 'subway', 'gritty', 'metropolitan', 'nocturnal city'],
    keys: ['d-dorian', 'a-dorian', 'a-minor'],
    tones: ['crunch-marshall', 'edge-of-breakup'],
    instruments: ['vintage-clav', 'retro-synth-bass', 'retro-synth-arp'],
    startingPoint: 'Dorian groove — something that swings but doesn\'t commit to a resolution. Bass synth underneath holds the pulse. Clav for rhythmic texture at the surface.'
  },
  {
    keywords: ['spiritual', 'sacred', 'holy', 'transcendent', 'divine', 'prayer', 'worship', 'devotion', 'cathedral', 'gospel', 'hymn', 'congregation'],
    keys: ['eb-major', 'c-major', 'f-major'],
    tones: ['clean-fender', 'ambient-reverb'],
    instruments: ['alchemy-organ', 'alchemy-choir', 'alchemy-pad-lush'],
    startingPoint: 'Open voicings in Eb or C major. Organ underneath — rotary slow, mournful. Choir pad for shimmer. Let the progression breathe like a hymn: each chord a statement, not a transition.'
  },
  {
    keywords: ['obsession', 'obsessive', 'fixation', 'fixated', 'relentless', 'consumed', 'compulsion', 'driven', 'revenge', 'cannot stop', 'pursuit'],
    keys: ['f-sharp-minor', 'c-sharp-minor', 'a-harmonic-minor'],
    tones: ['high-gain-modern', 'crunch-marshall'],
    instruments: ['es2-lead', 'retro-synth-arp', 'percussion-industrial'],
    startingPoint: 'F# or C# minor with a driving, repeating motif — something that circles before it resolves. The arpeggiator is the intrusive thought. Don\'t let it rest.'
  },
  {
    keywords: ['memory', 'remembering', 'past', 'fading', 'childhood', 'nostalgia', 'forgotten', 'recollection', 'looking back', 'used to be'],
    keys: ['g-major', 'ab-major', 'd-mixolydian'],
    tones: ['edge-of-breakup', 'acoustic-sim'],
    instruments: ['alchemy-pad-lush', 'alchemy-organ', 'vintage-clav'],
    startingPoint: 'G or Ab major with a slow, gentle progression. Tempo slightly slower than feels comfortable — that\'s what memory feels like. Let pad fill the gaps between chords like light through a window.'
  },
  {
    keywords: ['apocalypse', 'collapse', 'ruin', 'ruins', 'end of world', 'catastrophe', 'fallen', 'aftermath', 'wasteland', 'everything ends', 'extinction'],
    keys: ['d-minor', 'e-phrygian', 'b-phrygian-dominant'],
    tones: ['doom-fuzz', 'high-gain-modern'],
    instruments: ['percussion-industrial', 'alchemy-dark-pad', 'es2-texture'],
    startingPoint: 'Slow, low, tuned down. Single heavy riff. Industrial percussion like collapsing infrastructure. The fuzz is the landscape, not the commentary on it.'
  },
  {
    keywords: ['winter', 'cold', 'ice', 'frozen', 'frost', 'freezing', 'blizzard', 'snow', 'arctic', 'glacial', 'tundra', 'bare'],
    keys: ['c-sharp-minor', 'b-minor', 'e-phrygian'],
    tones: ['black-metal-cold', 'ambient-reverb'],
    instruments: ['sculpture-glass', 'alchemy-dark-pad', 'string-ensemble'],
    startingPoint: 'C# minor or E Phrygian. Cold, trebly tone — no warmth in the reverb. Glass resonator for sparse melodic moments. Let the space between notes be as long as the notes.'
  },
  {
    keywords: ['fire', 'burning', 'burn', 'flames', 'consuming', 'inferno', 'blazing', 'ablaze', 'combustion', 'ignite', 'scorched'],
    keys: ['e-phrygian', 'a-harmonic-minor', 'd-minor'],
    tones: ['high-gain-modern', 'heavy-metal'],
    instruments: ['es2-lead', 'percussion-industrial', 'es2-texture'],
    startingPoint: 'Fast, aggressive in E Phrygian. The half-step descent feels like fuel catching. Don\'t let it breathe — momentum is the subject.'
  },
  {
    keywords: ['night', 'darkness', 'shadow', 'midnight', 'nocturnal', 'insomnia', 'late night', 'nighttime', '3am', 'sleepless', 'dark hours'],
    keys: ['c-sharp-minor', 'a-minor', 'd-dorian'],
    tones: ['edge-of-breakup', 'ambient-reverb'],
    instruments: ['alchemy-dark-pad', 'alchemy-pad-lush', 'retro-synth-bass'],
    startingPoint: 'C# minor with long sustain. Moonlight Sonata energy — something that won\'t let you sleep. Reverb long enough that notes overlap into each other like thoughts.'
  },
  {
    keywords: ['power', 'dominance', 'dominant', 'control', 'force', 'authority', 'commanding', 'imposing', 'strength', 'imposing will'],
    keys: ['d-mixolydian', 'eb-major', 'e-minor'],
    tones: ['high-gain-modern', 'crunch-marshall'],
    instruments: ['alchemy-organ', 'percussion-industrial', 'es2-lead'],
    startingPoint: 'Mixolydian riff with a driving rhythm that locks and doesn\'t ask permission. Organ underneath adds weight without softness. The flatted 7 makes it feel unconquered.'
  },
  {
    keywords: ['vulnerable', 'vulnerability', 'exposed', 'fragile', 'fragility', 'raw', 'open', 'unguarded', 'tender', 'soft', 'delicate', 'stripped down'],
    keys: ['a-minor', 'f-major', 'ab-major'],
    tones: ['acoustic-sim', 'clean-fender'],
    instruments: ['sculpture-glass', 'alchemy-shimmer', 'string-ensemble'],
    startingPoint: 'Fingerpick quietly in A minor or F major. One note at a time. No distortion, no compression. Let the notes be slightly imperfect — that\'s the point.'
  },
  {
    keywords: ['mystery', 'mysterious', 'hidden', 'unknown', 'obscure', 'secret', 'enigma', 'enigmatic', 'veiled', 'unseen', 'lurking'],
    keys: ['g-dorian', 'd-dorian', 'a-harmonic-minor'],
    tones: ['ambient-reverb', 'edge-of-breakup'],
    instruments: ['alchemy-choir', 'sculpture-glass', 'alchemy-dark-pad'],
    startingPoint: 'Modal playing in G or D Dorian. Leave musical questions unanswered — don\'t resolve phrases. Choir pad very quiet, distant, as if heard through a wall.'
  },
  {
    keywords: ['devotion', 'worship', 'surrender', 'offering', 'sacrifice', 'devoted', 'submission', 'adoration', 'reverence', 'fidelity'],
    keys: ['f-major', 'bb-major', 'c-major'],
    tones: ['clean-fender', 'ambient-reverb'],
    instruments: ['alchemy-organ', 'alchemy-choir', 'alchemy-pad-lush'],
    startingPoint: 'Open major voicings, very slow. Organ underneath — let it sustain beneath each chord change before moving. This is music that knows it is being heard by something larger than you.'
  },
  {
    keywords: ['defiance', 'defiant', 'refuse', 'refusal', 'revolt', 'rebellion', 'fight back', 'resist', 'against', 'oppose', 'resistance', 'no'],
    keys: ['d-mixolydian', 'g-major', 'e-minor'],
    tones: ['crunch-marshall', 'heavy-metal'],
    instruments: ['es2-lead', 'retro-synth-arp', 'percussion-industrial'],
    startingPoint: 'Mixolydian riff with punchy, committed rhythm. The flatted 7 refuses to resolve into submission. Arpeggiator underneath like a fist hitting a table.'
  },
  {
    keywords: ['liminal', 'threshold', 'between', 'transition', 'in-between', 'border', 'crossing', 'uncertain', 'neither', 'purgatory', 'waiting room', 'suspended state'],
    keys: ['d-dorian', 'g-dorian', 'c-lydian'],
    tones: ['ambient-reverb', 'edge-of-breakup'],
    instruments: ['alchemy-shimmer', 'sculpture-glass', 'es2-texture'],
    startingPoint: 'Modal and ambiguous — Dorian or Lydian. Notes that don\'t clearly land anywhere. Let reverb blur the edges. Nothing should resolve completely.'
  },
  {
    keywords: ['hypnotic', 'repetitive', 'trance', 'motorik', 'krautrock', 'mantra', 'loop', 'locked groove', 'drone', 'cyclic', 'mechanical repetition'],
    keys: ['d-dorian', 'a-dorian', 'g-dorian'],
    tones: ['crunch-marshall', 'edge-of-breakup'],
    instruments: ['retro-synth-arp', 'retro-synth-bass', 'percussion-industrial'],
    startingPoint: 'Dorian two-chord vamp. Arpeggiator at 16th notes. Let the repetition build its own intention — don\'t add variation too early. The groove is the destination.'
  },
  {
    keywords: ['romantic', 'romance', 'tender', 'intimate', 'love', 'loving', 'beloved', 'cherish', 'warmth', 'closeness', 'affection', 'adore'],
    keys: ['ab-major', 'f-major', 'g-major'],
    tones: ['clean-fender', 'edge-of-breakup'],
    instruments: ['alchemy-pad-lush', 'alchemy-organ', 'string-ensemble'],
    startingPoint: 'Ab or F major with simple, open voicings. Organ or lush pad underneath. Don\'t oversell it — the restraint is what makes it feel true.'
  },
  {
    keywords: ['desperate', 'desperation', 'tortured', 'anguish', 'anguished', 'torment', 'suffering', 'agony', 'raw pain', 'unbearable', 'cannot bear'],
    keys: ['d-minor', 'f-sharp-minor', 'a-harmonic-minor'],
    tones: ['heavy-metal', 'doom-fuzz'],
    instruments: ['string-ensemble', 'alchemy-dark-pad', 'es2-lead'],
    startingPoint: 'A harmonic minor at mid-tempo. The augmented second sounds like something that can\'t hold itself together. Strings underneath make it beautiful — don\'t let it be only ugly.'
  },
  {
    keywords: ['ocean', 'sea', 'water', 'depths', 'deep', 'drowning', 'waves', 'tide', 'maritime', 'submerged', 'underwater', 'the deep'],
    keys: ['d-dorian', 'g-dorian', 'c-lydian'],
    tones: ['ambient-reverb', 'clean-fender'],
    instruments: ['alchemy-shimmer', 'sculpture-glass', 'alchemy-pad-lush'],
    startingPoint: 'Modal and slow. Let notes sustain and overlap like waves — no hard stops. Shimmer pad for the sense of light filtered through water. The melody should float, not swim.'
  },
  {
    keywords: ['addiction', 'addicted', 'spiral', 'craving', 'hunger', 'compulsion', 'need', 'pulled under', 'cannot stop', 'drawn back', 'the pull'],
    keys: ['f-sharp-minor', 'c-sharp-minor', 'e-minor'],
    tones: ['edge-of-breakup', 'high-gain-modern'],
    instruments: ['retro-synth-arp', 'alchemy-dark-pad', 'es2-lead'],
    startingPoint: 'Driving, repeating pattern in F# or C# minor. Something that circles back before it finishes. The arpeggiator is the craving — it never satisfies, it only continues.'
  },
  {
    keywords: ['ecstasy', 'bliss', 'dissolution', 'merging', 'rapture', 'union', 'transcendence', 'dissolve', 'merge', 'transport', 'beyond', 'pure joy'],
    keys: ['c-lydian', 'eb-major', 'ab-major'],
    tones: ['ambient-reverb', 'clean-fender'],
    instruments: ['alchemy-shimmer', 'alchemy-choir', 'sculpture-glass'],
    startingPoint: 'Lydian with shimmer reverb. Hold high notes past comfortable. Choir at low volume underneath — voices joining. This is music that doesn\'t know where it ends and you begin.'
  },
  {
    keywords: ['betrayal', 'betrayed', 'wound', 'wounded', 'scar', 'scarred', 'broken trust', 'deceived', 'deceive', 'stabbed', 'abandoned by'],
    keys: ['f-sharp-minor', 'b-minor', 'd-minor'],
    tones: ['crunch-marshall', 'edge-of-breakup'],
    instruments: ['string-ensemble', 'alchemy-dark-pad', 'alchemy-choir'],
    startingPoint: 'F# or B minor. Something that sounds like it\'s almost okay but isn\'t. Let the string ensemble carry the weight — it should feel noble, not petty.'
  },
  {
    keywords: ['exile', 'wandering', 'wanderer', 'displacement', 'outcast', 'journey', 'displaced', 'belonging', 'rootless', 'nowhere', 'homeless', 'drifter'],
    keys: ['g-dorian', 'd-dorian', 'a-minor'],
    tones: ['acoustic-sim', 'edge-of-breakup'],
    instruments: ['alchemy-pad-lush', 'string-ensemble', 'retro-synth-bass'],
    startingPoint: 'Modal Dorian — a mode that sounds like it\'s from somewhere but won\'t name where. Acoustic sim for something immediate and physical. Let the melody search without arriving.'
  },
  {
    keywords: ['war', 'conflict', 'battle', 'combat', 'soldier', 'military', 'brutality', 'killing', 'massacre', 'bloodshed', 'carnage'],
    keys: ['d-minor', 'e-phrygian', 'c-sharp-minor'],
    tones: ['heavy-metal', 'high-gain-modern'],
    instruments: ['percussion-industrial', 'string-ensemble', 'alchemy-dark-pad'],
    startingPoint: 'D minor or E Phrygian at driving tempo. Industrial percussion — the machine rhythm of organized violence. Strings underneath for the human cost. Don\'t let one cancel the other.'
  },
  {
    keywords: ['freedom', 'liberation', 'free', 'breaking free', 'escape', 'unleash', 'unbounded', 'finally', 'release', 'no chains', 'open road'],
    keys: ['d-mixolydian', 'g-major', 'eb-major'],
    tones: ['crunch-marshall', 'edge-of-breakup'],
    instruments: ['alchemy-organ', 'alchemy-shimmer', 'string-ensemble'],
    startingPoint: 'Mixolydian riff that refuses to resolve where expected — the flatted 7 is the sound of something that won\'t be contained. Organ gives it a joyful-sacred quality. Let it feel large.'
  },
  {
    keywords: ['rage against', 'nihilism', 'nihilistic', 'nothing matters', 'futile', 'futility', 'pointless', 'meaningless', 'abyss', 'despair', 'hopeless', 'hopelessness'],
    keys: ['e-minor', 'd-minor', 'e-phrygian'],
    tones: ['doom-fuzz', 'black-metal-cold'],
    instruments: ['es2-texture', 'alchemy-dark-pad', 'percussion-industrial'],
    startingPoint: 'Low, slow, purposeless tempo. Let it drone. The pointlessness is structural — don\'t try to resolve it into meaning. Noise texture underneath like static that won\'t quit.'
  },
  {
    keywords: ['seduction', 'seductive', 'dangerous', 'allure', 'temptation', 'forbidden', 'desire', 'magnetic', 'irresistible', 'pull toward'],
    keys: ['b-phrygian-dominant', 'a-harmonic-minor', 'a-dorian'],
    tones: ['edge-of-breakup', 'crunch-marshall'],
    instruments: ['vintage-clav', 'alchemy-dark-pad', 'retro-synth-bass'],
    startingPoint: 'Phrygian Dominant or harmonic minor — the exotic interval makes it feel like something you shouldn\'t be doing. Edge-of-breakup tone: warm enough to invite, gritty enough to warn.'
  },
  {
    keywords: ['wonder', 'awe', 'vast', 'vastness', 'cosmic', 'universe', 'space', 'infinite', 'immense', 'sublime', 'overwhelmed by beauty', 'reverent'],
    keys: ['c-lydian', 'eb-major', 'ab-major'],
    tones: ['ambient-reverb', 'clean-fender'],
    instruments: ['alchemy-shimmer', 'alchemy-choir', 'alchemy-pad-lush'],
    startingPoint: 'Lydian over a massive reverb tail. Hold each chord long enough to hear its interior change. Shimmer pad and choir at high volume — this is music that knows how small you are.'
  },
  {
    keywords: ['protest', 'political', 'injustice', 'corrupt', 'corruption', 'system', 'broken system', 'rage against the machine', 'uprising', 'manifesto'],
    keys: ['d-mixolydian', 'e-minor', 'g-major'],
    tones: ['crunch-marshall', 'high-gain-modern'],
    instruments: ['alchemy-organ', 'percussion-industrial', 'es2-lead'],
    startingPoint: 'Mixolydian or minor riff with hard, committed rhythm. Organ for communal weight — this is music for a room of people who agree. Let it feel like a fist in the air.'
  },
  {
    keywords: ['fractured', 'dissociation', 'dissociate', 'split', 'fragmented', 'disconnected', 'unreal', 'unreality', 'outside myself', 'watching myself', 'depersonalization', 'shattered'],
    keys: ['c-sharp-minor', 'f-sharp-minor', 'e-phrygian'],
    tones: ['post-punk-chorus', 'ambient-reverb'],
    instruments: ['sculpture-mallet', 'es2-texture', 'alchemy-breath'],
    startingPoint: 'Chorused, icy riff in C# minor — something that sounds like it\'s happening in another room. Glass mallet for melodic fragments that don\'t belong to the main line. Breath pad underneath: human but not present.'
  },
  {
    keywords: ['autumn', 'fall', 'harvest', 'dying leaves', 'decay', 'fading light', 'october', 'november', 'amber', 'dusk', 'seasonal', 'end of warmth'],
    keys: ['d-minor', 'g-dorian', 'a-minor'],
    tones: ['acoustic-sim', 'lo-fi-tape'],
    instruments: ['alchemy-folk-strings', 'vintage-keys-rhodes', 'alchemy-pad-lush'],
    startingPoint: 'D minor or G Dorian with a slow, fingerpicked progression. Folk strings doubling the melody at low volume — something that sounds like it\'s being played in a room that\'s getting dark. Tape saturation on the guitar track.'
  },
  {
    keywords: ['tender', 'gentle', 'soft touch', 'careful', 'tentative', 'delicate love', 'quiet affection', 'hushed', 'whispered', 'barely there', 'intimate moment'],
    keys: ['f-major', 'ab-major', 'g-major'],
    tones: ['jazz-clean', 'lo-fi-tape'],
    instruments: ['vintage-keys-rhodes', 'alchemy-breath', 'alchemy-pad-lush'],
    startingPoint: 'Jazz clean tone, volume rolled back to 6. Rhodes underneath at very low level. One note at a time in the melody — more space than sound. The restraint is what makes it tender.'
  },
  {
    keywords: ['cold revenge', 'revenge', 'calculated', 'patient', 'ice cold', 'methodical', 'planning', 'waiting', 'retribution', 'payback', 'settle scores'],
    keys: ['c-sharp-minor', 'b-minor', 'f-sharp-minor'],
    tones: ['post-punk-chorus', 'high-gain-modern'],
    instruments: ['retro-synth-dark-lead', 'es2-sub-drone', 'percussion-industrial'],
    startingPoint: 'Cold, chorused minor progression in C# or B minor — nothing frantic, nothing hot. Dark lead synth on the melody: controlled, deliberate. Sub drone on the root holds pressure underneath everything.'
  },
  {
    keywords: ['dreamlike', 'unconscious', 'sleep', 'sleeping', 'hypnagogia', 'half awake', 'liminal sleep', 'between sleeping', 'lucid', 'surreal landscape', 'subconscious'],
    keys: ['a-dorian', 'c-lydian', 'eb-major'],
    tones: ['lo-fi-tape', 'ambient-reverb'],
    instruments: ['alchemy-breath', 'alchemy-shimmer', 'vintage-keys-rhodes'],
    startingPoint: 'Dorian or Lydian with tape saturation and long reverb. Let notes blur at the edges. Rhodes for something familiar in an unfamiliar place. The tape wobble gives it the feeling of uncertain ground.'
  },
  {
    keywords: ['gothic', 'gothic cathedral', 'ruin', 'ruined', 'crumbling', 'stone', 'decay architecture', 'derelict', 'abandoned building', 'moss', 'ancient', 'medieval'],
    keys: ['d-minor', 'a-harmonic-minor', 'e-phrygian'],
    tones: ['black-metal-cold', 'jazz-clean'],
    instruments: ['alchemy-choir', 'alchemy-ritual-bells', 'string-ensemble'],
    startingPoint: 'A harmonic minor or D minor at slow, deliberate tempo. Ritual bells sparingly — one strike per section. Choir pad barely audible, as if singing came through the walls. The space is as important as the sound.'
  },
  {
    keywords: ['triumph', 'triumphant', 'hard won', 'earned', 'survived', 'made it', 'overcoming', 'vindication', 'proved them wrong', 'release', 'finally', 'arrived'],
    keys: ['eb-major', 'd-mixolydian', 'g-major'],
    tones: ['crunch-marshall', 'psych-fuzz'],
    instruments: ['alchemy-organ', 'string-ensemble', 'alchemy-ritual-bells'],
    startingPoint: 'Open power chords in Eb or G, full amp volume. Organ gives it ceremonial weight. Let string ensemble build underneath before the guitar enters. Ritual bell strike at the arrival — a single note that means: here.'
  },
  {
    keywords: ['bunker', 'siege', 'trapped', 'fortified', 'survival', 'under attack', 'endurance', 'holding out', 'surrounded', 'last stand', 'waiting for impact'],
    keys: ['e-minor', 'b-minor', 'd-minor'],
    tones: ['high-gain-modern', 'noise-feedback'],
    instruments: ['es2-sub-drone', 'percussion-industrial', 'alchemy-dark-pad'],
    startingPoint: 'Heavy minor riff at midtempo — functional, not expressive. Sub drone on the root: constant, oppressive. Industrial percussion like a metronome built by someone who doesn\'t expect to survive. Noise feedback as transition material between sections.'
  },
  {
    keywords: ['childhood', 'child', 'young', 'innocent', 'innocence', 'early', 'small', 'before', 'simpler time', 'home as a kid', 'growing up', 'formative'],
    keys: ['g-major', 'c-major', 'f-major'],
    tones: ['lo-fi-tape', 'acoustic-sim'],
    instruments: ['vintage-keys-rhodes', 'alchemy-pad-lush', 'sculpture-mallet'],
    startingPoint: 'G or C major, slow tempo. Tape saturation makes it feel slightly faded, like old footage. Glass mallet for single melodic notes that feel simple but mean everything. Rhodes for warmth and the specific ache of something remembered, not lived.'
  },
  {
    keywords: ['hunger', 'craving', 'wanting', 'desire', 'appetite', 'longing for', 'can\'t have', 'ache for', 'need', 'starving', 'thirst', 'desperate want'],
    keys: ['f-sharp-minor', 'b-phrygian-dominant', 'a-harmonic-minor'],
    tones: ['psych-fuzz', 'edge-of-breakup'],
    instruments: ['retro-synth-dark-lead', 'vintage-keys-rhodes', 'es2-sub-drone'],
    startingPoint: 'Harmonic minor or Phrygian Dominant — the exotic interval sounds like something that can\'t be satisfied. Psych fuzz tone with the guitar volume at 7: warm but straining. Dark lead for the melodic line that keeps circling back to the same note.'
  },
  {
    keywords: ['sacred', 'reverence', 'reverend', 'holy ground', 'sanctified', 'hallowed', 'altar', 'shrine', 'pilgrimage', 'consecrated', 'set apart', 'numinous'],
    keys: ['eb-major', 'f-major', 'a-harmonic-minor'],
    tones: ['jazz-clean', 'ambient-reverb'],
    instruments: ['alchemy-ritual-bells', 'alchemy-choir', 'es2-sub-drone'],
    startingPoint: 'Jazz clean tone, extremely sparse playing — one note, then silence. Ritual bells mark the phrase endings. Choir pad at barely audible volume: the sense of voices that have always been here. Sub drone on the tonic, so low you feel it rather than hear it.'
  },
  {
    keywords: ['chaos', 'entropy', 'disorder', 'everything breaking', 'collapse', 'unraveling', 'out of control', 'panic', 'spiraling', 'falling apart', 'disintegration'],
    keys: ['e-minor', 'c-sharp-minor', 'e-phrygian'],
    tones: ['noise-feedback', 'high-gain-modern'],
    instruments: ['percussion-industrial', 'es2-texture', 'retro-synth-dark-lead'],
    startingPoint: 'Start with a locked, precise metal riff in E minor or E Phrygian — then introduce noise feedback gradually. Industrial percussion keeps the machine rhythm even as the guitar dissolves. By the end, the structure should feel like it\'s barely holding.'
  },
  {
    keywords: ['aftermath', 'silence after', 'quiet after', 'the morning after', 'still standing', 'wreckage', 'what remains', 'dust settling', 'survive', 'surviving', 'post-event'],
    keys: ['d-minor', 'a-minor', 'g-dorian'],
    tones: ['lo-fi-tape', 'jazz-clean'],
    instruments: ['alchemy-folk-strings', 'alchemy-breath', 'sculpture-mallet'],
    startingPoint: 'Very sparse. D minor or A minor, single notes only. Tape tone — not high fidelity, something that\'s been through it. Breath pad at low volume: the sense of someone still breathing. Folk strings for one melodic phrase, once. Don\'t repeat it.'
  },
  {
    keywords: ['coastal', 'shore', 'cliff', 'headland', 'lighthouse', 'fog', 'tidal', 'estuary', 'saltwater', 'grey sea', 'overcast water', 'maritime melancholy'],
    keys: ['d-dorian', 'g-dorian', 'f-major'],
    tones: ['clean-fender', 'shoegaze-wall'],
    instruments: ['alchemy-shimmer', 'alchemy-folk-strings', 'es2-sub-drone'],
    startingPoint: 'D Dorian with open strings ringing. Clean Fender for the exposed guitar, shimmer pad for the sense of distance and water. Folk strings on the melody — something that sounds like it comes from the land, not the sea. Sub drone for the low weight of water.'
  },
  {
    keywords: ['folk tale', 'storytelling', 'narrative', 'ballad', 'once upon a time', 'legend', 'myth', 'oral tradition', 'singer', 'chronicle', 'saga', 'epic story'],
    keys: ['g-dorian', 'd-mixolydian', 'a-minor'],
    tones: ['acoustic-sim', 'jazz-clean'],
    instruments: ['alchemy-folk-strings', 'alchemy-ritual-bells', 'vintage-keys-rhodes'],
    startingPoint: 'DADGAD or open G. Modal — Dorian or Mixolydian for that ancient quality. Folk strings doubling the guitar at unison or octave. Ritual bells for scene breaks. Let the song breathe between verses — the silence is where the listener makes pictures.'
  },
  {
    keywords: ['claustrophobia', 'claustrophobic', 'trapped', 'confined', 'no escape', 'walls closing', 'tight', 'suffocate', 'boxed in', 'enclosed', 'cramped', 'no way out'],
    keys: ['c-sharp-minor', 'e-phrygian', 'a-harmonic-minor'],
    tones: ['high-gain-modern', 'doom-fuzz'],
    instruments: ['es2-sub-drone', 'es2-texture', 'alchemy-dark-pad'],
    startingPoint: 'E Phrygian or C# minor — the half-step semitone feels like a wall. Build density rather than dynamics: add layers without giving the music room to breathe. Sub drone on the root keeps the low end pressurized. Do not resolve the tension.'
  },
  {
    keywords: ['spring', 'rebirth', 'renewal', 'new growth', 'bloom', 'thaw', 'emerging', 'beginning again', 'hope', 'green', 'awakening', 'revival', 'fresh start'],
    keys: ['g-major', 'f-major', 'a-dorian'],
    tones: ['clean-fender', 'acoustic-sim'],
    instruments: ['alchemy-mellotron', 'alchemy-shimmer', 'alchemy-pad-lush'],
    startingPoint: 'G or F major with open voicings — let the strings ring. Mellotron flute underneath for a warmth that feels like something waking up. Avoid percussion at first; let the melody carry before the rhythm enters. The arrival is the point.'
  },
  {
    keywords: ['shame', 'ashamed', 'guilt', 'guilty', 'humiliation', 'humiliated', 'disgrace', 'disgraced', 'remorse', 'regret', 'self-loathing', 'worthless', 'failure'],
    keys: ['d-minor', 'f-sharp-minor', 'a-minor'],
    tones: ['edge-of-breakup', 'acoustic-sim'],
    instruments: ['alchemy-piano', 'alchemy-breath', 'string-ensemble'],
    startingPoint: 'D minor, slow and exposed. Piano plays the chord and holds — no melodic movement, just the harmony sitting there. Breath pad underneath: something human and barely audible. This music knows what it did.'
  },
  {
    keywords: ['surveillance', 'watched', 'watching', 'observed', 'monitored', 'tracked', 'visibility', 'seen', 'exposed', 'panopticon', 'cameras', 'scrutiny', 'no privacy'],
    keys: ['c-sharp-minor', 'f-sharp-minor', 'e-phrygian'],
    tones: ['post-punk-chorus', 'high-gain-modern'],
    instruments: ['retro-synth-dark-lead', 'retro-synth-arp', 'es2-texture'],
    startingPoint: 'C# minor or E Phrygian with a cold, chorused guitar. Arpeggiator at 16th notes — something mechanical, regular, without emotion. Dark lead synth on the melodic line: it doesn\'t hide, it doesn\'t run. Noise texture underneath like static on a line that isn\'t quite secure.'
  },
  {
    keywords: ['exhaustion', 'burnout', 'tired', 'emptied', 'drained', 'depleted', 'nothing left', 'worn out', 'run down', 'bone tired', 'fatigue', 'overworked'],
    keys: ['d-minor', 'a-minor', 'g-dorian'],
    tones: ['lo-fi-tape', 'edge-of-breakup'],
    instruments: ['alchemy-piano', 'alchemy-breath', 'alchemy-folk-strings'],
    startingPoint: 'D minor at very slow tempo. Piano chords with long spacing — each one feels like an effort. Tape saturation for the sense of something degraded. Do not build to anything. This music ends where it started, just quieter.'
  },
  {
    keywords: ['crowd', 'crowded', 'isolation in crowd', 'surrounded but alone', 'invisible', 'among people', 'public loneliness', 'anonymous', 'nobody sees me', 'lost in the noise'],
    keys: ['a-minor', 'd-dorian', 'c-sharp-minor'],
    tones: ['post-punk-chorus', 'ambient-reverb'],
    instruments: ['alchemy-mellotron', 'alchemy-dark-pad', 'retro-synth-arp'],
    startingPoint: 'Dense, layered texture — Mellotron strings underneath to suggest a mass of sound around a melody. The arpeggiator represents the noise of other people. The guitar melody sits on top: clear, singular, unheard. Reverb long enough that individual notes blur into the atmosphere.'
  },
  {
    keywords: ['transformation', 'metamorphosis', 'becoming', 'changing', 'change', 'shifting', 'morphing', 'transition', 'evolving', 'shed', 'unrecognizable', 'no longer', 'becoming someone else'],
    keys: ['a-dorian', 'd-mixolydian', 'eb-major'],
    tones: ['ambient-reverb', 'psych-fuzz'],
    instruments: ['alchemy-shimmer', 'sculpture-glass', 'alchemy-mellotron'],
    startingPoint: 'Start in A Dorian with clean, recognizable chord shapes. Gradually introduce shimmer pad and glass resonator — let the tonality blur at the edges. By the end, the original melody should be unrecognizable. The transformation is in the arrangement, not just the notes.'
  },
  {
    keywords: ['science fiction', 'sci-fi', 'future', 'futuristic', 'cyberpunk', 'space', 'technology', 'artificial', 'synthetic', 'dystopia', 'android', 'machine intelligence', 'neon dystopia'],
    keys: ['c-sharp-minor', 'e-minor', 'd-dorian'],
    tones: ['post-punk-chorus', 'high-gain-modern'],
    instruments: ['retro-synth-dark-lead', 'retro-synth-arp', 'es2-sub-drone'],
    startingPoint: 'Cold, precise, electronic. C# minor or D Dorian with a chorused guitar that sounds like it was designed, not played. Dark lead synth on the melodic line. Arpeggiator at a locked tempo — the grid is the aesthetic. Sub drone for the weight of infrastructure. This is a world without mercy but with very good reverb.'
  },
  {
    keywords: ['reckless', 'recklessness', 'youth', 'young and stupid', 'invincible', 'nothing to lose', 'impulse', 'impulsive', 'no consequences', 'drunk on it', 'abandon', 'careless abandon'],
    keys: ['d-mixolydian', 'e-minor', 'g-major'],
    tones: ['crunch-marshall', 'psych-fuzz'],
    instruments: ['alchemy-organ', 'retro-synth-arp', 'vintage-clav'],
    startingPoint: 'Mixolydian riff, fast, slightly ahead of the beat. Organ underneath for the feeling that this is also ceremonial — recklessness as ritual. Don\'t lock the tempo too hard; let it rush. The imprecision is the point. Play like you believe nothing will go wrong.'
  },
  {
    keywords: ['predator', 'hunting', 'stalking', 'prey', 'circling', 'patient threat', 'dangerous calm', 'menace', 'before the attack', 'closing in', 'inevitable'],
    keys: ['b-phrygian-dominant', 'e-phrygian', 'c-sharp-minor'],
    tones: ['doom-fuzz', 'high-gain-modern'],
    instruments: ['es2-sub-drone', 'alchemy-dark-pad', 'retro-synth-dark-lead'],
    startingPoint: 'Phrygian Dominant or E Phrygian at slow, deliberate tempo. The danger is in the patience — do not rush. Sub drone on the root: constant pressure. Dark pad underneath like shadow moving. Guitar enters when it\'s ready, not when the listener expects it.'
  },
  {
    keywords: ['home', 'returning home', 'homecoming', 'coming back', 'familiar', 'where I belong', 'roots', 'return', 'place I know', 'the old house', 'welcome back'],
    keys: ['g-major', 'c-major', 'f-major', 'd-mixolydian'],
    tones: ['acoustic-sim', 'clean-fender'],
    instruments: ['alchemy-piano', 'alchemy-folk-strings', 'alchemy-pad-lush'],
    startingPoint: 'G or C major with familiar, open chord shapes — nothing clever. Piano for the warmth of a lit room. Folk strings doubling the melody at a distance, like something half-remembered. Play at a tempo that feels like walking. The song should feel like it was always there.'
  },
  {
    keywords: ['summer', 'hot', 'heat', 'humid', 'languid', 'lazy', 'sun-drenched', 'baking', 'sweltering', 'afternoon heat', 'july', 'august', 'hazy summer', 'sunbaked'],
    keys: ['d-mixolydian', 'g-major', 'a-dorian'],
    tones: ['crunch-marshall', 'clean-fender'],
    instruments: ['vintage-clav', 'retro-synth-arp', 'alchemy-organ'],
    startingPoint: 'D Mixolydian at a tempo that moves like the heat does — unhurried but not still. Organ underneath at low volume. Clav for the surface rhythm: loose, slightly behind the beat, rolling rather than locking. The flatted 7 makes it feel unresolved and entirely okay with that.'
  },
  {
    keywords: ['infatuation', 'crush', 'butterflies', 'smitten', 'giddy', 'new love', 'can\'t stop thinking', 'obsessed with', 'captivated', 'falling for', 'intoxicated by someone', 'fixated on'],
    keys: ['g-major', 'ab-major', 'd-mixolydian'],
    tones: ['clean-fender', 'edge-of-breakup'],
    instruments: ['vintage-keys-rhodes', 'alchemy-pad-lush', 'retro-synth-arp'],
    startingPoint: 'G or Ab major, mid-tempo, slightly off the beat — the imprecision is deliberate. Rhodes underneath for the warmth of early attachment. Let the melody circle back to the same note: the mind doing what the mind does when it can\'t let go of something new.'
  },
  {
    keywords: ['jealous', 'jealousy', 'envy', 'envious', 'covet', 'coveting', 'resentment', 'bitter', 'bitterness', 'what they have', 'not fair', 'wanting what\'s not mine', 'possessive'],
    keys: ['c-sharp-minor', 'd-minor', 'f-sharp-minor'],
    tones: ['crunch-marshall', 'post-punk-chorus'],
    instruments: ['es2-lead', 'retro-synth-dark-lead', 'es2-texture'],
    startingPoint: 'C# or D minor with something tight and coiled — not explosively angry, but compressed. Cold lead synth on the melodic line: something that knows exactly what it wants and can\'t have it. Texture underneath is the noise of trying to be okay with it. The tension never resolves because jealousy never lets it.'
  },
  {
    keywords: ['depression', 'depressed', 'numb', 'numbness', 'anhedonia', 'flat', 'nothing moves me', 'apathy', 'hollow', 'blank', 'going through the motions', 'can\'t feel anything', 'grey inside'],
    keys: ['d-minor', 'a-minor', 'g-dorian'],
    tones: ['lo-fi-tape', 'jazz-clean'],
    instruments: ['alchemy-piano', 'alchemy-breath', 'alchemy-dark-pad'],
    startingPoint: 'D minor or A minor at the slowest possible tempo that isn\'t stopped. Piano plays the chord and holds — no melodic movement, nothing to say. Tape saturation makes it feel like everything is at a slight remove. Do not build. Do not resolve. This music has given up on the ending.'
  },
  {
    keywords: ['rain', 'raining', 'rainy', 'storm', 'stormy', 'downpour', 'thunder', 'grey sky', 'drizzle', 'puddles', 'heavy rain', 'weather', 'wet', 'persistent rain'],
    keys: ['d-dorian', 'g-dorian', 'd-minor'],
    tones: ['ambient-reverb', 'edge-of-breakup'],
    instruments: ['alchemy-shimmer', 'alchemy-pad-lush', 'sculpture-glass'],
    startingPoint: 'D Dorian or G Dorian with long reverb — let notes tail into each other like rain into standing water. Shimmer pad for the specific grey brightness of an overcast day. Sparse melody: a few notes per phrase, enough space to hear the weather between them.'
  },
  {
    keywords: ['absurd', 'absurdism', 'dark humor', 'gallows humor', 'ridiculous', 'Camus', 'Beckett', 'comic despair', 'bitter laugh', 'ironic', 'sardonic', 'nothing matters but it\'s funny', 'tragic comedy'],
    keys: ['d-dorian', 'a-dorian', 'd-minor'],
    tones: ['jazz-clean', 'crunch-marshall'],
    instruments: ['vintage-clav', 'vintage-keys-rhodes', 'sculpture-mallet'],
    startingPoint: 'D Dorian — modal enough to feel like it could go tragic, but don\'t let it. Clav for a rhythm that\'s more sardonic than serious. Rhodes underneath adds warmth the situation doesn\'t deserve. Glass mallet for melodic moments that are beautiful despite themselves — the joke is that it\'s actually kind of moving.'
  },
  {
    keywords: ['speed', 'fast', 'velocity', 'kinetic', 'racing', 'rushing', 'driving', 'urgent', 'acceleration', 'momentum', 'running', 'full speed', 'no brakes', 'forward'],
    keys: ['e-minor', 'd-mixolydian', 'c-sharp-minor'],
    tones: ['high-gain-modern', 'crunch-marshall'],
    instruments: ['retro-synth-arp', 'percussion-industrial', 'es2-lead'],
    startingPoint: 'Fast, locked tempo in E minor. Guitar enters on top of a precise industrial percussion pattern — the machine keeps time so the guitar can move. Arpeggiator at 16ths: the pulse never wavers. This is music for something that cannot slow down.'
  },
  {
    keywords: ['homesick', 'homesickness', 'missing home', 'can\'t go back', 'far from home', 'somewhere else', 'distance from home', 'away from home', 'foreignness', 'longing for place', 'diaspora', 'not where I belong'],
    keys: ['g-major', 'g-dorian', 'c-major'],
    tones: ['acoustic-sim', 'lo-fi-tape'],
    instruments: ['alchemy-folk-strings', 'alchemy-piano', 'alchemy-mellotron'],
    startingPoint: 'G major or G Dorian, fingerpicked. Something that uses open strings — the instrument remembering its own body. Folk strings doubling the melody: familiar but at a distance. Piano for the warmth of a specific place at a specific time. Tape saturation because the memory is inexact but emotionally overwhelming.'
  },
  {
    keywords: ['corruption', 'corrupted', 'compromise', 'sell out', 'sold out', 'wrong choice', 'doing wrong', 'moral failure', 'betrayed myself', 'gave in', 'complicit', 'dirt on my hands', 'not who I was', 'compromised'],
    keys: ['d-minor', 'b-minor', 'a-harmonic-minor'],
    tones: ['edge-of-breakup', 'post-punk-chorus'],
    instruments: ['alchemy-dark-pad', 'alchemy-piano', 'string-ensemble'],
    startingPoint: 'D minor or A harmonic minor, unhurried. Piano plays the melody — something formal, even noble — while the dark pad underneath tells a different story. The augmented second is the interval that sounds like something that can\'t quite justify itself. Let the strings carry the weight of what was lost.'
  },
  {
    keywords: ['impermanence', 'fleeting', 'this will end', 'passing', 'temporary', 'everything ends', 'precious', 'ephemeral', 'finite', 'last time', 'won\'t last', 'beautiful because brief', 'transience', 'holding on'],
    keys: ['g-major', 'c-major', 'ab-major'],
    tones: ['clean-fender', 'acoustic-sim'],
    instruments: ['alchemy-shimmer', 'alchemy-piano', 'alchemy-folk-strings'],
    startingPoint: 'G or C major with open, ringing voicings. Play it like it\'s the last time — not dramatically, just with full attention. Shimmer pad that fades in and then away. Piano for moments of clarity. Let some notes decay completely before the next one arrives. The ending is built into the beginning.'
  },
  {
    keywords: ['drunk', 'high', 'intoxicated', 'altered state', 'substances', 'floating pleasantly', 'hazy pleasure', 'woozy', 'loose', 'everything is fine', 'foggy', 'blissfully impaired', 'pleasantly numb'],
    keys: ['d-mixolydian', 'a-dorian', 'g-major'],
    tones: ['psych-fuzz', 'lo-fi-tape'],
    instruments: ['alchemy-pad-lush', 'retro-synth-poly', 'vintage-keys-rhodes'],
    startingPoint: 'Mixolydian or Dorian — pleasant and unresolved. Psych fuzz tone with the volume rolled back to 6. Poly synth pad for warm, slightly unfocused harmony. Tape saturation on the guitar. Play slightly behind the beat, let notes blur at the edges. This music doesn\'t know exactly where it is, and that\'s fine.'
  },
  {
    keywords: ['bored', 'boredom', 'ennui', 'listless', 'nothing to do', 'going nowhere', 'stagnant', 'stasis', 'monotonous', 'dull', 'tedium', 'can\'t be bothered', 'indifferent', 'uninspired'],
    keys: ['d-dorian', 'a-minor', 'g-dorian'],
    tones: ['edge-of-breakup', 'jazz-clean'],
    instruments: ['vintage-keys-rhodes', 'alchemy-breath', 'retro-synth-bass'],
    startingPoint: 'D Dorian at medium-slow tempo with a progression that doesn\'t commit to going anywhere. Rhodes for warmth that can\'t be bothered. Breath pad very low — present but not engaged. Bass synth on the root: still here, just doesn\'t care. The key is never trying harder than the subject warrants.'
  },
  {
    keywords: ['dread', 'existential dread', 'impending', 'something wrong', 'existential crisis', 'finitude', 'the void', 'something coming', 'can\'t name it', 'creeping doom', 'low-level horror', 'nameless fear'],
    keys: ['c-sharp-minor', 'e-phrygian', 'b-minor'],
    tones: ['ambient-reverb', 'doom-fuzz'],
    instruments: ['es2-sub-drone', 'alchemy-dark-pad', 'alchemy-breath'],
    startingPoint: 'C# minor or E Phrygian. Don\'t move fast — the dread is in the sitting. Sub drone underneath: constant, low, felt before heard. Dark pad fills the space without naming what it is. Breath pad because you\'re still breathing even though you don\'t know why. Melody, if any: sparse, unresolved, minor.'
  },
  {
    keywords: ['hell', 'infernal', 'hellfire', 'demonic', 'brimstone', 'diabolical', 'punishing', 'relentless punishment', 'burning forever', 'trapped in fire', 'damned', 'diabolic', 'satanic', 'hellish'],
    keys: ['b-phrygian-dominant', 'e-phrygian', 'a-harmonic-minor'],
    tones: ['heavy-metal', 'doom-fuzz'],
    instruments: ['percussion-industrial', 'es2-sub-drone', 'alchemy-choir'],
    startingPoint: 'Phrygian Dominant at high tempo — the augmented second is the sound of something ancient and correct about punishment. Industrial percussion for the machine rhythm of damnation: precise, without mercy. Choir at medium volume, dissonant with the guitar. Sub drone on the tonic. No release. No light at the end.'
  },
  {
    keywords: ['hope', 'hopeful', 'optimistic', 'optimism', 'looking forward', 'better future', 'things will be better', 'light at the end', 'perseverance', 'not giving up', 'belief', 'possible', 'can do this', 'tomorrow'],
    keys: ['g-major', 'eb-major', 'c-major'],
    tones: ['clean-fender', 'crunch-marshall'],
    instruments: ['alchemy-shimmer', 'alchemy-mellotron', 'alchemy-organ'],
    startingPoint: 'G or Eb major, moderate tempo. Open chord voicings with sustained ringing. Mellotron strings for the warmth of something that\'s been through it but is still here. Shimmer pad builds slowly underneath. Don\'t resolve too quickly — hope is living with uncertainty. Let the chords sit in their own light before moving.'
  }
]
