document.querySelectorAll('.page').forEach((page, index) => {
    page.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});

// Floating hearts effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeart, 1000);
