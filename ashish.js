document.addEventListener("DOMContentLoaded", function () {
  let pages = document.querySelectorAll(".page");
  
  pages.forEach((page, index) => {
    page.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });
  });
});
