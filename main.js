var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function processAlphabet() {
  for (var i = 0; i < alphabetLower.length; i++) {
    letter = alphabetLower[i];
    audio_path = alphabetLower[i] + '.mp3';
    createLettersDiv(alphabetLower[i]);
    new Letter(letter,audio_path);
  }
}

function createLettersDiv (letter) {

  var div = document.createElement("div");
  div.className = "letters " + letter;
  div.innerHTML = div.innerHTML + letter;
  document.body.appendChild(div);
}

function Letter(character,audioPath) {
  this.character = character;
  this.audioPath = audioPath;
}
