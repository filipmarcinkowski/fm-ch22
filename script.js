'strict mode';

const navList = document.querySelector('.nav');
const blurBg = document.querySelector('.bg-transparency');
const menuBox = document.querySelector('.menu-box');
const menuIcon = document.querySelector('.menu-icon');

const resolution = function () {
  if (window.innerWidth <= 544) {
    menuBox.classList.remove('hidden');
  } else if (menuBox && window.innerWidth > 544) {
    menuBox.classList.add('hidden');
    blurBg.classList.add('bg');
    navList.classList.remove('nav-open');
    menuIcon.src = `./assets/images/icon-menu.svg`;
  }
};

window.onload = resolution;
window.onresize = resolution;

const showMenu = function () {
  blurBg.classList.toggle('bg');
  navList.classList.toggle('nav-open');
  menuIcon.src = `./assets/images/icon-${
    navList.classList.contains('nav-open') ? 'menu-close' : 'menu'
  }.svg`;
};

menuBox.addEventListener('click', showMenu);
