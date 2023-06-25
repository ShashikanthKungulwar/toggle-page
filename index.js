function togglePage() {
  var body = document.body;
  var currentBackgroundColor = window.getComputedStyle(body).backgroundColor;
  var m = document.getElementById("message");
  var s = document.querySelector(".move");
  if (currentBackgroundColor === "rgb(255, 255, 255)") {
    body.style.backgroundColor = "black";
    m.style.color = "white";
    s.style.left = "49%";
  } else {
    body.style.backgroundColor = "white";
    m.style.color = "black";
    s.style.left = "10%";
  }
}
var id = document.querySelector(".slider");
id.addEventListener("click", togglePage());
