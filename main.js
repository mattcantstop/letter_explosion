var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for (var i = 0; i < alphabetLower.length; i++) {
  function createLetters() {
    var div = document.createElement("div");
    div.className = "letters";
    div.innerHTML = div.innerHTML + i;
    document.body.appendChild(div);
  };
}

