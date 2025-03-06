document.querySelector(".btn").addEventListener("click", function(event) {
    event.preventDefault();
    this.textContent = "Coming Soon!";
    this.style.pointerEvents = "none";
});
