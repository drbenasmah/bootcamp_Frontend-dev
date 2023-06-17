// Get the refresh button element
var refreshButton = document.getElementById("refresh-button");

// Add click event listener to the refresh button
refreshButton.addEventListener("click", function() {
  // Reload the page
  location.reload();
});

// Function to handle the dice challenge logic
function diceChallenge() {
  // Array of dice images
  var diceImages = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
  ];

  // Get the player 1 image element
  var player1Image = document.querySelector(".img1");

  // Get the player 2 image element
  var player2Image = document.querySelector(".img2");

  // Get the result text element
  var resultText = document.querySelector("h1");

  // Generate random numbers for player 1 and player 2
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Set the source attribute of player 1 image to display the corresponding dice image
  player1Image.setAttribute("src", "./images/" + diceImages[randomNumber1 - 1]);

  // Set the source attribute of player 2 image to display the corresponding dice image
  player2Image.setAttribute("src", "./images/" + diceImages[randomNumber2 - 1]);

  // Compare the random numbers and update the result text accordingly
  if (randomNumber1 > randomNumber2) {
    resultText.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    resultText.textContent = "Player 2 Wins! 🚩";
  } else {
    resultText.textContent = "It's a Draw!";
  }
}

// Call the diceChallenge function initially
diceChallenge();
