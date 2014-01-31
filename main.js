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
 var currentLetter = alphabetLower[getRandomInt(0,25)];
  setAudioSource(currentLetter);
  currentLetterClickableAndExplosion(currentLetter);
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setAudioSource (currentLetter) {
  var source = document.getElementById('track');
  var new_file_name = currentLetter + '.mp3'
  $(source).attr('src', new_file_name);
}

function currentLetterClickableAndExplosion (currentLetter) {
  var currentLetterId = document.getElementById(currentLetter);
  $(currentLetterId).click(currentLetterAddExplosionClass(currentLetter));
}

function currentLetterAddExplosionClass (currentLetter) {
  var currentLetterId = document.getElementById(currentLetter);
  $(currentLetterId).attr('class', 'letters '+ 'explode');
}

