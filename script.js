const cells = document.querySelectorAll("td");
const resultDisplay = document.querySelector("#result");
let currentPlayer = "X";
let gameOver = false;

for (const cell of cells) {
  cell.addEventListener("click", function() {
    if (!gameOver && cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkForWinner()) {
        resultDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameOver = true;
      } else if (checkForDraw()) {
        resultDisplay.textContent = "It's a draw!";
        gameOver = true;
      } else {
        if (currentPlayer === "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
      }
    }
  });
}

function checkForWinner() {
  return (
    checkRows() ||
    checkColumns() ||
    checkDiagonals()
  );
}

function checkRows() {
  for (let i = 1; i <= 9; i += 3) {
    if (
      cells[i - 1].textContent === currentPlayer &&
      cells[i].textContent === currentPlayer &&
      cells[i + 1].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkColumns() {
  for (let i = 1; i <= 3; i++) {
    if (
      cells[i - 1].textContent === currentPlayer &&
      cells[i + 2].textContent === currentPlayer &&
      cells[i + 5].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkDiagonals() {
  if (
    cells[0].textContent === currentPlayer &&
    cells[4].textContent === currentPlayer &&
    cells[8].textContent === currentPlayer
  ) {
    return true;
  } else if (
    cells[2].textContent === currentPlayer &&
    cells[4].textContent === currentPlayer &&
    cells[6].textContent === currentPlayer
  ) {
    return true;
  }
  return false;
}

function checkForDraw() {
  for (const cell of cells) {
    if (cell.textContent === "") {
      return false;
    }
  }
  return true;
}
