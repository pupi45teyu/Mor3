let step = 0;
document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("love-message").classList.remove("hidden");
    this.style.display = "none";
    document.getElementById("background-music").play();
});

document.getElementById("next-btn").addEventListener("click", function() {
    if (step === 0) {
        document.getElementById("image-gallery").classList.remove("hidden");
    } else if (step === 1) {
        document.querySelector(".final-message").classList.remove("hidden");
    }
    step++;
});
