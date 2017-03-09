// take an input from the user
  // split()
  // reverse()
// determine if a palendrome
  //
// return a yes or no answer



function reverseArray(word){
  var separate = word.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray();
  }
 // Our neighbors fixed the above by stringing together split, reverse, and join in one line
var palendrome = function(detection) {
  if (word === joinArray) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#word-entry").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = palendrome(word);

    $(".word").text(year);
    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").text(result);
  });
});
