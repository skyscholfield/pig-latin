//
//
//
// function reverseArray(word){
//   var separate = word.split("");
//   var reverseArray = splitString.reverse();
//   var joinArray = reverseArray.join("");
//   return joinArray();
//   }
//
// var palendrome = function(detection) {
//   if (word === joinArray) {
//     return true;
//   } else {
//     return false;
//   }
// };
//    var word = $("input#word").val();
//    var result = palendrome(word);
//  $(".word").text(year);

var userInput = $("input#userInput").val();
var result = userInput.split(" ");

$(document).ready(function() {
  $("form#word-entry").submit(function(event) {
    event.preventDefault();

  if (unserInput != ) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $(".pigOutput").text(result);
  });
});
