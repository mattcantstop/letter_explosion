var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var numbers       = [1,2,3,4,5,6,7,8,8,10,11,12,13,14,15,16,17,18,19,20];

function processNewAndRemoveFormerCollection(collection) {
  parentNodeId = "collection_container";
  removeCurrentCollection(parentNodeId);
  for (var i = 0; i < collection.length; i++) {
    createEachObjectDiv(collection[i], "collection_container");
  }
  getActiveSelection(collection);
}

function createEachObjectDiv (objectFromCollection,parentDivId) {
  var childDiv = document.createElement("div");
  childDiv.className = "letters";
  childDiv.id = objectFromCollection;
  childDiv.innerHTML = childDiv.innerHTML + objectFromCollection;
  document.getElementById(parentDivId).appendChild(childDiv);
}

function getActiveSelection (currentCollection) {
 var activeSelection = currentCollection.splice([getRandomInt(0,currentCollection.length)],1);
  console.log(activeSelection);
  setAudioSource(activeSelection);
  activeSelectionClickableAndExplosion(activeSelection);
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

function setAudioSource (activeSelection) {
  var source = document.getElementById("track").src = activeSelection + ".mp3";
  html_element = $(audio);
  html_element.load();
  console.log(source);
}

function activeSelectionClickableAndExplosion (activeSelection) {
  $("#" + activeSelection.toLowerCase() + ".letters").click(function() {
    $(this).attr('class', 'letters explode');
    getActiveSelection();
  });
}

function inArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return true;
  }
  usedNums.push(value);
  return false;
}

function removeCurrentCollection(parentNodeId) {
  var el = document.getElementById(parentNodeId);
  console.log(el);
  while( el.hasChildNodes() ){
    el.removeChild(el.lastChild);
}
}
