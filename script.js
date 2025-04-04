// Animasi sederhana saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    hero.style.opacity = 0;
    setTimeout(() => {
        hero.style.transition = "opacity 1s ease";
        hero.style.opacity = 1;
    }, 100);
});