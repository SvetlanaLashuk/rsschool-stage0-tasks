
const body = document.querySelector("body");
const burgerIcon    = document.querySelector('.burger');
const menu          = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nav-close');

burgerIcon.addEventListener('click', () => {
    menu.classList.add('active');
    body.classList.add('lock');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.add('lock');
});
menu.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('lock');
});
