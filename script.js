// JavaScript untuk membuat tombol No berpindah posisi pada posisi random
const noButton = document.getElementById('no');

// Fungsi untuk mengenerate posisi random
function getRandomPosition() {
    return Math.floor(Math.random() * 100) - 50;
}

// Event listener untuk mouseover
noButton.addEventListener('mouseover', () => {
    const x = getRandomPosition();
    const y = getRandomPosition();
    noButton.style.top = `${y}px`;
    noButton.style.left = `${x}px`;
});

// Event listener untuk mouseout
// noButton.addEventListener('mouseout', () => {
    
// });
