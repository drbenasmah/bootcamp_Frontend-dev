function fibonacciGenerator(n) {
  var fibArray = [0, 1];

  for (var i = 2; i < n; i++) {
  

    var lastElement = fibArray[fibArray.length - 1];
    var butOneLastElement = fibArray[fibArray.length - 2];

    var pushElement = lastElement + butOneLastElement;

    fibArray.push(pushElement);
  }
  console.log(fibArray);
}
fibonacciGenerator(20);
