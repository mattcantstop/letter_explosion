var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var numbers       = [1,2,3,4,5,6,7,8,8,10,11,12,13,14,15,16,17,18,19,20];


function processCollection(collection) {
  for (var i = 0; i < collection.length; i++) {
    createEachObjectDiv(collection[i]);
  }
}

function createEachObjectDiv (objectFromCollection) {

  var div = document.createElement("div");
  div.className = "letters";
  div.id = objectFromCollection;
  div.innerHTML = div.innerHTML + objectFromCollection;
  document.body.appendChild(div);
}

function getCurrentLetter () {
 var currentLetter = alphabetLower.splice([getRandomInt(0,alphabetLower.length)],1);
  console.log(currentLetter);
  setAudioSource(currentLetter);
  currentLetterClickableAndExplosion(currentLetter);
}

function getRandomInt (min, max) {
  var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  usedNums = [];
  var selectedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (inArray(usedNums, selectedNumber)) {
    console.log(selectedNumber);
    getRandomInt (min, max);
  }
  else {
    return selectedNumber;
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
  console.log("inside inArray");
  usedNums.push(value);
  return false;
}
