// game.js - Main game logic and state management

window.onload = function() {
  const container = document.getElementById("game-container");
  container.innerHTML = "";

  const gameArea = document.createElement("div");
  gameArea.id = "main-game";
  container.appendChild(gameArea);

  // Game states
  const states = {
    MENU: "menu",
    PLAY: "play",
    END: "end"
  };
  let currentState = states.MENU;
  let currentMystery = null;

  function renderMenu() {
    gameArea.innerHTML = "";
    const menuScreen = document.createElement("div");
    menuScreen.id = "menu-screen";
    menuScreen.innerHTML = "<h1>Tiny Sleuths: The Case of the Silly Mysteries</h1>";
    const startButton = document.createElement("button");
    startButton.innerText = "Start New Mystery";
    startButton.onclick = () => {
      currentMystery = generateMystery();
      currentState = states.PLAY;
      renderGame();
    };
    menuScreen.appendChild(startButton);
    gameArea.appendChild(menuScreen);
  }

  function renderGame() {
    gameArea.innerHTML = "";
    const gameScreen = document.createElement("div");
    gameScreen.id = "game-screen";
    gameScreen.innerHTML = `<h2>Mystery: ${currentMystery.mystery}</h2><div id="clue-area">Investigate the suspects!</div>`;
    gameArea.appendChild(gameScreen);

    setupInvestigation(gameScreen, currentMystery, (correct) => {
      currentState = states.END;
      renderEnd(correct);
    });
  }

  function renderEnd(correct) {
    gameArea.innerHTML = "";
    const endScreen = document.createElement("div");
    endScreen.id = "end-screen";
    endScreen.innerHTML = correct ? "<h2>Great job, Sleuth! You solved it!</h2>" : "<h2>Oops! Wrong guess. Try again!</h2>";
    const restartButton = document.createElement("button");
    restartButton.innerText = "Back to Menu";
    restartButton.onclick = () => {
      currentState = states.MENU;
      renderMenu();
    };
    endScreen.appendChild(restartButton);
    gameArea.appendChild(endScreen);
  }

  // Initial render
  renderMenu();
};