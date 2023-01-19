
const burgerIcon    = document.querySelector('.burger');
const menu          = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nav-close');
const body          = document.querySelector('body');

burgerIcon.addEventListener('click', () => {
    menu.classList.add('active');
    body.classList.toggle('lock');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('lock');
});
menu.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('lock');
});
