const audio = document.getElementById("bg-audio");
const btn = document.getElementById("audio-toggle");
const backToTop = document.getElementById("back-to-top");

audio.loop = true;
audio.volume = 0.2;

btn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        btn.classList.add("playing");
    } else {
        audio.pause();
        btn.classList.remove("playing");
    }
});

// auto-play on first interaction (click, scroll, key, touch)
function unlockAudio() {
    audio.play().catch(() => { });
    btn.classList.add("playing");

    // remove listeners after first trigger
    window.removeEventListener("click", unlockAudio);
    window.removeEventListener("keydown", unlockAudio);
    window.removeEventListener("touchstart", unlockAudio);
}

window.addEventListener("click", unlockAudio);
window.addEventListener("keydown", unlockAudio);
window.addEventListener("touchstart", unlockAudio);

window.addEventListener("scroll", () => {
    if (window.scrollY > 1600) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});