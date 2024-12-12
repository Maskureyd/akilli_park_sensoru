// Basit resim büyütme efekti
const images = document.querySelectorAll("#gallery img");
images.forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.5)";
        img.style.transition = "transform 0.5s ease";
    });
});
