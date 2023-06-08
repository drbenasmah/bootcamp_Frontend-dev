var i = 99;

function beerBottle() {
  while (i > 1) {
    n = i - 1;
    console.log(
      i +
        " bottles of beer on the wall," +
        i +
        " bottles of beer. Take 1 down, pass it around, " +
        n +
        " bottles of beer on the wall."
    );

    i--;
  }
  console.log(
    "1 bottles of beer on the wall,1 bottles of beer. Take 1 down, pass it around, no more bottles of beer on the wall."
  );

  console.log(
    "No more bottles of beer on the wall, no bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
  );
}
beerBottle();
