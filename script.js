const navbar = document.querySelector('.nav ul');
const hamburbger = document.querySelector('.hamburger');
const videoContainers = document.querySelectorAll('.video-container');
const sendMessage = document.querySelector('#sendMessage');

if (sendMessage) {
    sendMessage.addEventListener('click', function () {
        alert("We’ll be in touch soon — stay awesome! 🚀");
    });
}

videoContainers.forEach((container) => {
    const video = container.querySelector('video');
    const playPauseBtn = container.querySelector('#playPause');
    const fullscreenBtn = container.querySelector('#fullscreen');

    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            video.pause();
            playPauseBtn.textContent = '▶️';
        }
    });

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
});
hamburbger.addEventListener("click", function () {
    navbar.classList.toggle("show");
    hamburbger.classList.toggle("active");
})
document.getElementById('downloadResume').addEventListener('click', function () {
    var toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(function () {
        toast.style.display = 'none';
    }, 2000);
});