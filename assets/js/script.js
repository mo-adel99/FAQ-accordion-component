document.querySelectorAll(".answer-toggle").forEach((btn) => {
  btn.addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("answer-active");
    this.children[1].classList.toggle("icon-active");})})