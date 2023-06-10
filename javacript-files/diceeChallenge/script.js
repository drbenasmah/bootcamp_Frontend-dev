function diceChallenge() {
  var diceImages = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImage1 = diceImages[randomNumber1 - 1];
  var player1Image = document.querySelector(".img1");
  player1Image.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImage2 = diceImages[randomNumber2 - 1];
  var player2Image = document.querySelector(".img2");
  player2Image.setAttribute("src", "./images/dice" + randomNumber2 + ".png");
  console.log(randomNumber1);
  console.log(randomNumber2);
}
diceChallenge();
