// LFG deck — Major Arcana
// Each card: n = Roman numeral, name = card name, glyph = symbolic unicode,
// up = upright keyword (single word prompt), rev = reversed keyword.
// Keywords are intentionally one word — prompts, not interpretations.
// Edit freely; the app reads this file at load.

const DECK = [
  { n: '0',     name: 'The Fool',           glyph: '☉', up: 'Leap',        rev: 'Hesitation', img: 'cards/RWS_Tarot_00_Fool.jpg',            desc: 'Let go of preconceived ideas; remain open to change' },
  { n: 'I',     name: 'The Magician',       glyph: '∞', up: 'Agency',      rev: 'Misdirection', img: 'cards/RWS_Tarot_01_Magician.jpg',      desc: 'Trust your inspiration; you are smarter than you think' },
  { n: 'II',    name: 'The High Priestess', glyph: '☾', up: 'Intuition',   rev: 'Noise',        img: 'cards/RWS_Tarot_02_High_Priestess.jpg', desc: 'Put self-cultivation at the top of your daily priority list' },
  { n: 'III',   name: 'The Empress',        glyph: '♀', up: 'Abundance',   rev: 'Depletion',    img: 'cards/RWS_Tarot_03_Empress.jpg',        desc: 'Your positive influence has facilitated favorable outcomes; stop measuring yourself against others' },
  { n: 'IV',    name: 'The Emperor',        glyph: '♃', up: 'Structure',   rev: 'Rigidity',     img: 'cards/RWS_Tarot_04_Emperor.jpg',        desc: 'Draw upon the capable inner resources you possess to get the task completed' },
  { n: 'V',     name: 'The Hierophant',     glyph: '✝', up: 'Tradition',   rev: 'Dogma',        img: 'cards/RWS_Tarot_05_Hierophant.jpg',     desc: 'Develop your expertise; have faith that you are a master in the making' },
  { n: 'VI',    name: 'The Lovers',         glyph: '⚭', up: 'Alignment',   rev: 'Conflict',     img: 'cards/RWS_Tarot_06_Lovers.jpg',         desc: 'Creative compromise helps you accept your commitments fully' },
  { n: 'VII',   name: 'The Chariot',        glyph: '➳', up: 'Drive',       rev: 'Scatter',      img: 'cards/RWS_Tarot_07_Chariot.jpg',        desc: 'Look upon the movements of change as full of promise and adventure' },
  { n: 'VIII',  name: 'Strength',           glyph: '∞', up: 'Resolve',     rev: 'Doubt',        img: 'cards/RWS_Tarot_08_Strength.jpg',       desc: 'Clearly distinguish between your ego and your intuitive self' },
  { n: 'IX',    name: 'The Hermit',         glyph: '✦', up: 'Reflection',  rev: 'Isolation',    img: 'cards/RWS_Tarot_09_Hermit.jpg',         desc: 'Give yourself time for contemplation; don\'t allow others to stand in your way' },
  { n: 'X',     name: 'Wheel of Fortune',   glyph: '☯', up: 'Cycle',       rev: 'Fixation',     img: 'cards/RWS_Tarot_10_Wheel_of_Fortune.jpg', desc: 'Fundamental change is imminent; the positive benefits you gain could last a long time' },
  { n: 'XI',    name: 'Justice',            glyph: '⚖', up: 'Balance',     rev: 'Distortion',   img: 'cards/RWS_Tarot_11_Justice.jpg',        desc: 'You are seen as a fair-minded party whose opinion matters' },
  { n: 'XII',   name: 'The Hanged Man',     glyph: '⋔', up: 'Perspective', rev: 'Stalling',     img: 'cards/RWS_Tarot_12_Hanged_Man.jpg',     desc: 'Accept the consequences of your decisions; go through it, get it over with, and free yourself for new pursuits' },
  { n: 'XIII',  name: 'Death',              glyph: '☗', up: 'Ending',      rev: 'Clinging',     img: 'cards/RWS_Tarot_13_Death.jpg',          desc: 'Free yourself from a past that no longer serves you; proceed toward the future' },
  { n: 'XIV',   name: 'Temperance',         glyph: '⚗', up: 'Measure',     rev: 'Excess',       img: 'cards/RWS_Tarot_14_Temperance.jpg',     desc: 'Identify and acquire what will most help you complete your mission; leave the rest behind' },
  { n: 'XV',    name: 'The Devil',          glyph: '⛧', up: 'Attachment',  rev: 'Release',      img: 'cards/RWS_Tarot_15_Devil.jpg',          desc: 'Let go of inhibitions; allow yourself to express all of who you are' },
  { n: 'XVI',   name: 'The Tower',          glyph: '⚡', up: 'Rupture',     rev: 'Avoidance',    img: 'cards/RWS_Tarot_16_Tower.jpg',          desc: 'You are the one to serve as a catalyst for change' },
  { n: 'XVII',  name: 'The Star',           glyph: '✧', up: 'Hope',        rev: 'Dimness',      img: 'cards/RWS_Tarot_17_Star.jpg',           desc: 'Your time is better spent in reflection and spiritual pursuit' },
  { n: 'XVIII', name: 'The Moon',           glyph: '☽', up: 'Mystery',     rev: 'Clarity',      img: 'cards/RWS_Tarot_18_Moon.jpg',           desc: 'Listen to the body and its unique wisdom; rely upon your inner resources for support and security' },
  { n: 'XIX',   name: 'The Sun',            glyph: '☀', up: 'Vitality',    rev: 'Shadow',       img: 'cards/RWS_Tarot_19_Sun.jpg',            desc: 'Let your light shine; be confident in the sacred power of your original nature' },
  { n: 'XX',    name: 'Judgement',          glyph: '⚶', up: 'Reckoning',   rev: 'Denial',       img: 'cards/RWS_Tarot_20_Judgement.jpg',      desc: 'Let go of your past; the future welcomes you with a bounty of growth and change' },
  { n: 'XXI',   name: 'The World',          glyph: '✪', up: 'Wholeness',   rev: 'Incomplete',   img: 'cards/RWS_Tarot_21_World.jpg',          desc: 'Be serene in knowing you are succeeding in your goal' },
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
