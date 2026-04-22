// LFG deck — Major Arcana
// Each card: n = Roman numeral, name = card name, glyph = symbolic unicode,
// up = upright keyword (single word prompt), rev = reversed keyword.
// Keywords are intentionally one word — prompts, not interpretations.
// Edit freely; the app reads this file at load.

const DECK = [
  { n: '0',     name: 'The Fool',           glyph: '☉', up: 'Leap',        rev: 'Hesitation', img: 'cards/RWS_Tarot_00_Fool.jpg',            desc: 'Embrace the unknown; let go of certainty' },
  { n: 'I',     name: 'The Magician',       glyph: '∞', up: 'Agency',      rev: 'Misdirection', img: 'cards/RWS_Tarot_01_Magician.jpg',      desc: 'Trust in your own power; move from thought to action' },
  { n: 'II',    name: 'The High Priestess', glyph: '☾', up: 'Intuition',   rev: 'Noise',        img: 'cards/RWS_Tarot_02_High_Priestess.jpg', desc: 'Look inside for guidance; listen for quiet truths' },
  { n: 'III',   name: 'The Empress',        glyph: '♀', up: 'Abundance',   rev: 'Depletion',    img: 'cards/RWS_Tarot_03_Empress.jpg',        desc: 'Learn from the cycles of creation; soften to receive what nature offers' },
  { n: 'IV',    name: 'The Emperor',        glyph: '♃', up: 'Structure',   rev: 'Rigidity',     img: 'cards/RWS_Tarot_04_Emperor.jpg',        desc: 'Bring order from chaos; lead with focus and determination' },
  { n: 'V',     name: 'The Hierophant',     glyph: '✝', up: 'Tradition',   rev: 'Dogma',        img: 'cards/RWS_Tarot_05_Hierophant.jpg',     desc: 'Bridge the earthly and the divine; grow deep roots through ritual' },
  { n: 'VI',    name: 'The Lovers',         glyph: '⚭', up: 'Alignment',   rev: 'Conflict',     img: 'cards/RWS_Tarot_06_Lovers.jpg',         desc: 'Meaning arises from union; harmony or discord both create something new' },
  { n: 'VII',   name: 'The Chariot',        glyph: '➳', up: 'Drive',       rev: 'Scatter',      img: 'cards/RWS_Tarot_07_Chariot.jpg',        desc: 'Use momentum to traverse obstacles; inertia works both ways' },
  { n: 'VIII',  name: 'Strength',           glyph: '∞', up: 'Resolve',     rev: 'Doubt',        img: 'cards/RWS_Tarot_08_Strength.jpg',       desc: 'Compassion is born from confidence; remain grounded and trust your instinct' },
  { n: 'IX',    name: 'The Hermit',         glyph: '✦', up: 'Reflection',  rev: 'Isolation',    img: 'cards/RWS_Tarot_09_Hermit.jpg',         desc: 'Reflect in solitude; seek signal among the noise' },
  { n: 'X',     name: 'Wheel of Fortune',   glyph: '☯', up: 'Cycle',       rev: 'Fixation',     img: 'cards/RWS_Tarot_10_Wheel_of_Fortune.jpg', desc: 'Change is imminent; the karmic wheel turns' },
  { n: 'XI',    name: 'Justice',            glyph: '⚖', up: 'Balance',     rev: 'Distortion',   img: 'cards/RWS_Tarot_11_Justice.jpg',        desc: 'Examine the choices at hand; seek fairness and balance' },
  { n: 'XII',   name: 'The Hanged Man',     glyph: '⋔', up: 'Perspective', rev: 'Stalling',     img: 'cards/RWS_Tarot_12_Hanged_Man.jpg',     desc: 'Surrender to external motion; seek progress without resistance' },
  { n: 'XIII',  name: 'Death',              glyph: '☗', up: 'Ending',      rev: 'Clinging',     img: 'cards/RWS_Tarot_13_Death.jpg',          desc: 'End this chapter; disrupt roots and encourage new growth' },
  { n: 'XIV',   name: 'Temperance',         glyph: '⚗', up: 'Measure',     rev: 'Excess',       img: 'cards/RWS_Tarot_14_Temperance.jpg',     desc: 'Seek moderation; explore the alchemy of opposites' },
  { n: 'XV',    name: 'The Devil',          glyph: '⛧', up: 'Attachment',  rev: 'Release',      img: 'cards/RWS_Tarot_15_Devil.jpg',          desc: 'Confront your shadows; liberation comes from awareness' },
  { n: 'XVI',   name: 'The Tower',          glyph: '⚡', up: 'Rupture',     rev: 'Avoidance',    img: 'cards/RWS_Tarot_16_Tower.jpg',          desc: 'Revelation brings dramatic change; chaos is a ladder' },
  { n: 'XVII',  name: 'The Star',           glyph: '✧', up: 'Hope',        rev: 'Dimness',      img: 'cards/RWS_Tarot_17_Star.jpg',           desc: 'Find purpose in peaceful reflection; seek inspiration in the natural order' },
  { n: 'XVIII', name: 'The Moon',           glyph: '☽', up: 'Mystery',     rev: 'Clarity',      img: 'cards/RWS_Tarot_18_Moon.jpg',           desc: 'Not everything is as it seems; meaning arises from deep mystery' },
  { n: 'XIX',   name: 'The Sun',            glyph: '☀', up: 'Vitality',    rev: 'Shadow',       img: 'cards/RWS_Tarot_19_Sun.jpg',            desc: 'Joy and light radiate to bring clarity; celebrate and say yes' },
  { n: 'XX',    name: 'Judgement',          glyph: '⚶', up: 'Reckoning',   rev: 'Denial',       img: 'cards/RWS_Tarot_20_Judgement.jpg',      desc: 'Own your decisions; take responsibility and step forward' },
  { n: 'XXI',   name: 'The World',          glyph: '✪', up: 'Wholeness',   rev: 'Incomplete',   img: 'cards/RWS_Tarot_21_World.jpg',          desc: 'View the whole scene from afar; the journey ends and begins' },
];

// Three positions. Edit labels or blurbs here; order controls left-to-right layout.
const AREAS = [
  { key: 'location', label: 'Location', blurb: 'where you are' },
  { key: 'flow',     label: 'Flow',     blurb: 'what\'s changing' },
  { key: 'growth',   label: 'Growth',   blurb: 'where you\'re going' },
];

// Reversal rate: probability any given card is drawn reversed.
// Physical decks naturally produce ~20–30%. Lower = rarer + more meaningful.
const REVERSAL_RATE = 0.25;
