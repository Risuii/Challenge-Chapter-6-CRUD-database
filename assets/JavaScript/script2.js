let button = document.getElementById("button");
let modal = document.querySelector(".bg-modal");
let close = document.getElementById("close");

button.addEventListener("click", function () {
  modal.style.display = "flex";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});
