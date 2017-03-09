$(document).ready(function() {
  $("form#word-entry").submit(function(event) {
    event.preventDefault();
//Input
    var userInput = $("input#userInput").val();
    var array = userInput.split(" ");
    // var vowel = []
    // array.forEach(function(){
// Output
    var result = array.join(" ")
    $(".pigOutput").text(result);
  });
});


//Possible method idea: Within each word split into anotherarray of lach letters then
//if!=vowel move from beggining to end untill is vowel? === true.
