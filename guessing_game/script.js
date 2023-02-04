const secretNumber = Math.trunc(Math.random() * 21);

let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guessValue = Number(document.querySelector(".guess").value);
  if (!guessValue) {
    document.querySelector(".message").textContent =
      "😒 No Number are given...";
  } else if (guessValue === secretNumber) {
    document.querySelector(".message").textContent =
      "🏆🏆Hurray!!You won the game...";
  } else if (guessValue > secretNumber) {

    if (score > 0) {
      document.querySelector(".message").textContent = "Too High!!☝️";
      score--;
      document.querySelector(".score").textContent = score;
      
    } else {
      document.querySelector(".message").textContent =
        "Your are Score is not enough to play the game!!";
    }
  } else if (guessValue < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low!!👇";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Your are Score is not enough to play the game!!";
    }
  }
});
