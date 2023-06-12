var element = document.querySelectorAll(".drum");

for(i = 0; i < element.length; i++){
  element[i].addEventListener("click", function() {

     var buttonInnerHTML = this.innerHTML;

     switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

          case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "w":
              var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;

              case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
      
                case "w":
                  var tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                  break;
     
      default:
        break;
     }











    //  var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
  } )
}







