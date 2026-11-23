// Page Flip Function
function nextPage(pageNumber) {
    showPage(pageNumber);
}

function prevPage(pageNumber) {
    showPage(pageNumber);
}

function showPage(pageNumber) {
    // सभी पेजों से active क्लास हटाएं
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // चुने हुए पेज को दिखाएं
    const targetPage = document.getElementById('page' + pageNumber);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Music Play/Pause Control
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '🎵 Play Music';
        isPlaying = false;
    } else {
        music.play();
        musicBtn.innerHTML = '⏸️ Pause Music';
        isPlaying = true;
    }
}
