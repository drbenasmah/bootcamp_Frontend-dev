// var output = []
// var count = 0

// function fizzBuzz() {
//     count++;
//     output.push(count);
//     console.log(output)

// }
// // fizzBuzz();

var output = [];
var counter = 0;

function fizzBuzz() {
  var i = 1;
  while(i <=100){
    counter++;

  if (counter % 3 === 0 && counter % 5 === 0) {
    output.push("fizzbuzz");
  }
  // output.push(count);
  else if (counter % 3 === 0) {
    output.push("fizz");
  } else if (counter % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(counter);
  }
  console.log(output);
  i++;
}
}
  
fizzBuzz();
