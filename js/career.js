const posbtn = document.querySelectorAll(".pos-btn");
const crossBtn = document.querySelectorAll(".cross-btn");
const psBox = document.querySelectorAll(".position-box");

posbtn.forEach((element) => {
  element.addEventListener("click", function () {
    element.nextElementSibling.style.display = "block";
  });
});
crossBtn.forEach((element) => {
  element.addEventListener("click", function () {
    element.parentElement.style.display = "none";
  });
});
