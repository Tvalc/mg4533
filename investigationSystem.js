// investigationSystem.js - Investigation mechanics

function setupInvestigation(gameArea, mystery, onSolve) {
  const suspectsArea = document.createElement("div");
  suspectsArea.style.display = "flex";
  suspectsArea.style.justifyContent = "space-around";
  suspectsArea.style.margin = "20px";

  mystery.suspects.forEach(suspect => {
    const suspectElem = document.createElement("div");
    suspectElem.className = "suspect";
    suspectElem.innerHTML = `<h3>${suspect.name}</h3><p>Trait: ${suspect.trait}</p>`;
    suspectElem.onclick = () => {
      showDialogue(gameArea, `${suspect.name} says: "I was ${suspect.alibi}!" Clue: ${suspect.clue}`, () => {
        // After dialogue, check if all investigated or allow solving
      });
    };
    suspectsArea.appendChild(suspectElem);
  });

  const solveButton = document.createElement("button");
  solveButton.innerText = "Solve Mystery";
  solveButton.onclick = () => {
    const guess = prompt("Who is the culprit? (Enter name)");
    const culprit = mystery.suspects.find(s => s.isGuilty).name;
    onSolve(guess === culprit);
  };

  gameArea.appendChild(suspectsArea);
  gameArea.appendChild(solveButton);
}