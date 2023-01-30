const contactsSelect = document.querySelector('.container');
const contactsOption = document.querySelector('.options');

contactsSelect.addEventListener('click', () => {
    contactsOption.classList.toggle('opened');
    contactsOption.parentElement.querySelector('.label').classList.toggle('active');
    // contactsSelect.classList.toggle('opened');
});