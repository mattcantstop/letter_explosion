var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function processAlphabet() {
  for (var i = 0; i < alphabetLower.length; i++) {
    createLettersDiv(alphabetLower[i]);
  }
}

function createLettersDiv (letter) {

  var div = document.createElement("div");
  div.className = "letters";
  div.innerHTML = div.innerHTML + letter;
  document.body.appendChild(div);
}

/*for (var i = 0; i < alphabetLower.length; i++) {
  function createLetters() {
    var div = document.createElement("div");
    div.className = "letters";
    div.innerHTML = div.innerHTML + alphabetLower[i];
    document.body.appendChild(div);
  };
}

function createLettersDiv(element, index, array) {
    // console.log("a[" + index + "] = " + element);
    var div = document.createElement("div");
    div.className = "letters";
    div.innerHTML = div.innerHTML + element;
    document.body.appendChild(div);
}
alphabetLower.forEach(createLettersDiv);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
*/
