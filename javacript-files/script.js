function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var diceImage1 = document.getElementById("dice-img-1");
  var diceImage2 = document.getElementById("dice-img-2");

  diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
}
