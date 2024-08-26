'use strict'
const navlinks = document.querySelector('.nav-link');
function ToggleMenu(e) {
    e.name = e.name == 'menu' ? 'close' : 'menu';
    navlinks.classList.toggle('top-[9%]');
}