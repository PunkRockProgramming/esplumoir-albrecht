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
  }
]
