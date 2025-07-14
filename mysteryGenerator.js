// mysteryGenerator.js - Procedural mystery generation system

// Predefined data for procedural generation
const mysteries = [
  "Who ate the last cookie?",
  "Who hid the teddy bear?",
  "Who painted the walls with crayons?",
  "Who left the toys all over the floor?"
];

const suspectNames = ["Fluffy the Cat", "Giggles the Clown", "Zoomy the Rabbit", "Wobbly the Jelly"];
const traits = ["loves sweets", "always laughing", "super fast", "wiggles a lot"];
const alibis = ["was napping", "was juggling", "was hopping around", "was jiggling"];
const guiltyClues = ["crumbs on fur", "cookie wrapper in pocket", "sticky paws", "chocolate stains"];

function generateMystery() {
  const mystery = getRandomElement(mysteries);
  const suspects = [];
  const shuffledNames = shuffleArray([...suspectNames]);
  const shuffledTraits = shuffleArray([...traits]);
  const shuffledAlibis = shuffleArray([...alibis]);
  const guiltyIndex = Math.floor(Math.random() * 3); // 3 suspects per mystery

  for (let i = 0; i < 3; i++) {
    suspects.push({
      name: shuffledNames[i],
      trait: shuffledTraits[i],
      alibi: shuffledAlibis[i],
      isGuilty: i === guiltyIndex,
      clue: i === guiltyIndex ? getRandomElement(guiltyClues) : "nothing suspicious"
    });
  }

  return { mystery, suspects };
}