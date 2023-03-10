let secretNumber = Math.trunc(Math.random() * 21);

let score = 20;

let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guessValue = Number(document.querySelector(".guess").value);

  // when player given not any value
  if (!guessValue) {
    document.querySelector(".message").textContent =
      "π No Number are given...";

    // When Player Wins
  } else if (guessValue === secretNumber) {
    document.querySelector(".message").textContent =
      "ππHurray!!You won the game...";

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // check the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when the player guess high number from given number
  } else if (guessValue > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too High!!βοΈ";
      score--;
      document.querySelector(".score").textContent = score;

      // when the player guess low number from given number
    } else {
      document.querySelector(".message").textContent =
        "Your are Score is not enough to play the game!!";
    }
  } else if (guessValue < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low!!π";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Your are Score is not enough to play the game!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
