const serviceButtons = document.querySelectorAll('.service__button');
const serviceItems   = document.querySelectorAll('.service__item');

const getActiveButtons = () => Array.from(document.querySelectorAll('.service__button.active'));

serviceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        const activeButtons = getActiveButtons();
        if (activeButtons.length > serviceButtons.length - 1) {
            activeButtons.forEach((button) => {
                button.classList.remove('active');
            });
            e.target.classList.add('active');
        }
        onBlur();
    });
});

function onBlur() {
    const activeButtons = getActiveButtons();
    const activeCards = activeButtons.map((i) => i.textContent.toLowerCase().trim());

    serviceItems.forEach((item) => {
        const serviceItem = item.dataset.service;
        if (activeCards.length === 0 || activeCards.indexOf(serviceItem) >= 0) {
            item.classList.remove('blur');
        } else {
            item.classList.add('blur');
        }
    });
}