// Animate elements on page load
gsap.to(".container", { opacity: 1, duration: 1.5, ease: "power2.out" });
gsap.from(".animated-text", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".fade-in", { opacity: 0, y: 30, duration: 1, delay: 1 });
gsap.from(".btn", { opacity: 0, scale: 0.8, duration: 0.8, delay: 1.5 });

// Button Click Animation
document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();
    gsap.to(this, { scale: 1.2, duration: 0.3, yoyo: true, repeat: 1 });
    this.textContent = "Coming Soon!";
    this.style.pointerEvents = "none";
});
