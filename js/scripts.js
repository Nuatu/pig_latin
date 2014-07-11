// git test

var isVowel = function (checkedLetter) {
  var vowels = ["a","e","i","o","u"];
  return vowels.indexOf(checkedLetter) > -1 ;
};

var vowelPosition = function(targetWord, startPosition) {
  var foundVowelPosition = 0;
  for(var i = startPosition; i < targetWord.length; i++) {
    if (isVowel(targetWord[i])) {
      foundVowelPosition = i;
      break;
    }
  };
  return foundVowelPosition;
};

var qUPosition = function (checkedWord) {
  var isIt;
  for(var i=0; i<checkedWord.length; i++) {
    if(checkedWord[i] === "q" && checkedWord[i+1] === "u"){
      isIt = i;
      break;
    }else{
      isIt = false;
    }
  };
  return isIt;
};

var splicinator = function (inputWord, index) {
  return inputWord.slice(index) + inputWord.substring(0,index) + "ay";
};

var pigLatin = function (input) {
    var qIndex = qUPosition(input);
    var firstVowel = vowelPosition(input, 0);
  if(isVowel(input[0])){
      return input + "ay";
    } else if(qIndex != false && firstVowel > qIndex) {
      return splicinator(input, qIndex+2);
    } else {
      return splicinator(input, firstVowel);
    }
};

$(document).ready(function(){
  $("form#letters").submit(function(event){
    $("#outputArea").css({"font-size": "0"});
    var boxInput = $("input#wordBox").val();
    var output = pigLatin(boxInput);
    $("#outputArea").text(output);
    event.preventDefault();
    $("#outputArea").animate({"font-size": "60px"}, 500);
  });
});
