$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Hello";

    document.body.appendChild(div);

    $('#container').html(your_score + message);

  });
});
