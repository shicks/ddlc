const words = {
  'Adventure': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Afterimage': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Agonizing': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Alone': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Amazing': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Ambient': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Analysis': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Anger': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Anime': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Anxiety': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Atone': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Aura': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Awesome': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Beauty': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Bed': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Blanket': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Bliss': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Boop': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Bouncy': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Breathe': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Broken': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Bubbles': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Bunny': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Cage': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Calm': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Candy': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Captive': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Charm': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Cheeks': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Cheer': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Childhood': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Chocolate': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Climax': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Clouds': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Clumsy': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Color': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Comfort': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Contamination': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Covet': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Crimson': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Cry': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Cute': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Dance': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Dark': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Daydream': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Dazzle': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Death': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Defeat': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Depression': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Desire': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Despise': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Destiny': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Determination': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Disarray': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Disaster': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Disoriented': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Disown': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Doki Doki': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Dream': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 2},
  'Effulgent': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Electricity': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Email': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Embrace': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Empty': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Entropy': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Essence': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Eternity': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Excitement': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Existence': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Explode': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Extraordinary': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Extreme': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Family': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Fantasy': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Fear': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Feather': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Fester': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Fickle': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Fireflies': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Fireworks': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Flee': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Flower': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Fluffy': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Flying': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Forgive': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Friends': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Frightening': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Fun': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Games': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Giggle': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Graveyard': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Grief': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Hair': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Happiness': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Headphones': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Heart': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Heartbeat': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Heavensent': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Holiday': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Hop': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Hope': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Hopeless': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Horror': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Hurt': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Imagination': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Incapable': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Incongruent': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Infallible': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Inferno': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Infinite': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Insight': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Intellectual': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Journey': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Joy': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Judgement': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Jump': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Jumpy': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Kawaii': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Kiss': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Kitty': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Landscape': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Laugh': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Lazy': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Lipstick': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Lollipop': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Loud': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Love': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Lucky': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Lust': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Marriage': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Marshmallow': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Massacre': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Meager': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Melancholy': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Melody': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Memories': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Milk': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Misery': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Misfortune': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Mouse': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Music': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Nature': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Nibble': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Nightgown': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Ocean': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Pain': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Papa': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Parfait': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Party': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Passion': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Peace': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Peaceful': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Philosophy': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Pink': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Play': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Playground': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Pleasure': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Poof': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Portrait': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Pout': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Prayer': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Precious': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Promise': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Puppy': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Pure': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Question': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Rainbow': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Raincloud': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Raindrops': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Ribbon': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Romance': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Rose': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Sadness': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Scars': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Secretive': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Sensation': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Shame': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Shiny': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Shopping': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Silly': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Sing': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Skipping': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Skirt': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Smile': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Socks': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Sparkle': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Special': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Spinning': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Starscape': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Sticky': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Strawberry': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Sugar': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Suicide': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Summer': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Sunny': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Sunset': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Sweet': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Swimsuit': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Tears': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Tenacious': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Time': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Together': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Tragedy': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Treasure': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Twirl': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Uncanny': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Uncontrollable': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Unending': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Universe': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Unrequited': {'Sayori': 3, 'Yuri': 2, 'Natsuki': 1},
  'Unrestrained': {' Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Unstable': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Vacation': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Valentine': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Vanilla': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Variance': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Vertigo': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Vibrant': {'Yuri': 3, 'Natsuki': 2, 'Sayori': 1},
  'Vitality': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Vivacious': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Vivid': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
  'Warm': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Waterfall': {'Natsuki': 3, 'Yuri': 2, 'Sayori': 1},
  'Whirlwind': {'Yuri': 3, 'Natsuki': 1, 'Sayori': 1},
  'Whisper': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Whistle': {'Natsuki': 3, 'Sayori': 2, 'Yuri': 1},
  'Wonderful': {'Sayori': 3, 'Natsuki': 2, 'Yuri': 1},
  'Wrath': {'Yuri': 3, 'Sayori': 2, 'Natsuki': 1},
};

const score = {};
const scores = document.getElementById('scores');
const current = document.getElementById('current');
const word = document.getElementById('word');

let currentWord;

reset();
document.getElementById('accept').addEventListener('click', accept);
document.getElementById('reset').addEventListener('click', reset);

word.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    escape();
    return;
  }
  if (e.key === 'Enter') {
    accept();
    return;
  }
  type();
});

function reset() {
  score['Sayori'] = 0;
  score['Natsuki'] = 0;
  score['Yuri'] = 0;
  word.value = '';
  escape();
  scores.textContent = '';
}

function escape() {
  word.value = '';
  currentWord = undefined;
  current.textContent = '';
  return;
}

function accept() {
  if (!currentWord) return;
  for (const [k, v] of Object.entries(words[currentWord])) {
    score[k] += v;
  }
  scores.textContent = Object.entries(score).map(([k, v]) => `${k}: ${v}`).join('\n');
  escape();
}

function type() {
  currentWord = undefined;
  current.textContent = '';
  if (!word.value) return;
  const prefix = word.value.toLowerCase();
  const match = Object.keys(words).filter(x => x.toLowerCase().startsWith(prefix));
  if (!match.length) return;
  currentWord = match[0];
  const result = words[currentWord];
  const delta = Object.entries(result).map(([k, v]) => `${k} +${v}`).join(', ');
  current.textContent = `${currentWord}: ${delta}`;
}
