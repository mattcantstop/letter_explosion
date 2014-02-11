var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function processAlphabet() {
  for (var i = 0; i < alphabetLower.length; i++) {
    createLettersDiv(alphabetLower[i]);
  }
}

function createLettersDiv (letter) {

  var div = document.createElement("div");
  div.className = "letters";
  div.id = letter;
  div.innerHTML = div.innerHTML + letter;
  document.body.appendChild(div);
}

function getCurrentLetter () {
 var currentLetter = alphabetLower.splice([getRandomInt(0,25)],1);
  console.log(currentLetter);
  setAudioSource(currentLetter);
  currentLetterClickableAndExplosion(currentLetter);
}

function getRandomInt (min, max) {
  var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  var usedNums = [];
  var selectedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  usedNums.push(selectedNumber);
  if (inArray(usedNums, selectedNumber)) {
    getRandomInt (min, max);
  }
  else {
    return selected_number;
  }
}

function setAudioSource (currentLetter) {
  var source = document.getElementById("track").src = currentLetter + ".mp3";
  html_element = $(audio);
  html_element.load();
  console.log(source);
}

function currentLetterClickableAndExplosion (currentLetter) {
  $("#" + currentLetter + ".letters").click(function() {
    $(this).attr('class', 'letters explode');
    getCurrentLetter();
  });
}

function inArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return true;
  }
  return false;
}
