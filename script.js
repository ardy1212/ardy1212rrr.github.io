const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
});
