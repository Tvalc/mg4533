// dialogueSystem.js - Dialogue system for interactions

function showDialogue(container, text, callback) {
  const dialogueBox = document.createElement("div");
  dialogueBox.style.position = "absolute";
  dialogueBox.style.bottom = "20px";
  dialogueBox.style.left = "50%";
  dialogueBox.style.transform = "translateX(-50%)";
  dialogueBox.style.background = "#fff";
  dialogueBox.style.border = "1px solid #000";
  dialogueBox.style.padding = "10px";
  dialogueBox.style.maxWidth = "600px";
  dialogueBox.innerText = text;

  const okButton = document.createElement("button");
  okButton.innerText = "OK";
  okButton.onclick = () => {
    container.removeChild(dialogueBox);
    if (callback) callback();
  };
  dialogueBox.appendChild(okButton);

  container.appendChild(dialogueBox);
}