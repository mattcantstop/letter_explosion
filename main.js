var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function processAlphabet() {
  for (var i = 0; i < alphabetLower.length; i++) {
    createLettersDiv(alphabetLower[i]);
  }
}

function createLettersDiv (letter) {

  var div = document.createElement("div");
  div.className = "letters " + letter;
  div.innerHTML = div.innerHTML + letter;
  document.body.appendChild(div);
}

function getCurrentLetter () {
  var current_letter = alphabetLower[getRandomInt(0,25)];
  setAudioSource(current_letter);
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setAudioSource () {
  source = document.getElementById('track');
  source.src = current_letter + '.mp3';
}



