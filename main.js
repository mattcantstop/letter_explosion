  function createLetters() {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Hello";
    div.padding = "auto";

    document.body.appendChild(div);
  };
