let buttons = document.getElementById("btn");
let mdl = document.querySelector(".bg-modals");
let cls = document.getElementById("close1");

buttons.addEventListener("click", function () {
  mdl.style.display = "flex";
});

cls.addEventListener("click", function () {
  mdl.style.display = "none";
});
