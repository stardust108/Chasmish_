let currentPage = 1;

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function movePage(element, page) {
  if (page === currentPage) {
    currentPage += 2;
    toggleClass(element, "left-side");
    toggleClass(element.nextElementSibling, "left-side");
  } else if (page === currentPage - 1) {
    currentPage -= 2;
    toggleClass(element, "left-side");
    toggleClass(element.previousElementSibling, "left-side");
  }
}

// Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 1000);
