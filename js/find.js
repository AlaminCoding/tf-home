const tabLink = document.querySelectorAll(".tab-link");
const tabBox = document.querySelectorAll(".tab-box");
tabLink.forEach((element, index) => {
  element.addEventListener("click", () => {
    for (var i = 0; i < tabLink.length; i++) {
      if (i != index) {
        tabBox[i].style.display = "none";
        tabLink[i].classList.remove("link-active");
      } else {
        tabBox[i].style.display = "block";
        tabLink[i].classList.add("link-active");
      }
    }
  });
});
