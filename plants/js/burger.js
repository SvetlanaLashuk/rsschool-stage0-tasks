
const burgerIcon    = document.querySelector('.burger');
const menu          = document.querySelector('.header__nav');
const menuCloseItem = document.querySelector('.header__nav-close');

burgerIcon.addEventListener('click', () => {
    menu.classList.add('active');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('active');
});
menu.addEventListener('click', () => {
    menu.classList.remove('active');
  });
