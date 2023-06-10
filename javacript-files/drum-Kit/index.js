var element = document.querySelectorAll(".drum");

for(i = 0; i < element.length; i++){
  element[i].addEventListener("click", function() {
     alert("I got clicked");} )
}