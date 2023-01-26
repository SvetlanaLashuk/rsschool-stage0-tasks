const priceTypes        = document.querySelectorAll('.price-type');

priceTypes.forEach((priceType) => {
    priceType.addEventListener('click', () =>{
        if (priceType.classList.contains('active')) {
            priceType.classList.remove('active');
            priceType.parentElement.querySelector('.price-button').classList.remove('active');
        } else {
            const priceTypesIsActive = document.querySelectorAll('.price-type.active');
            priceTypesIsActive.forEach((priceTypeIsActive) => {
                priceTypeIsActive.classList.remove('active');
            });

            const priceButtonsIsActive = document.querySelectorAll('.price-button.active');
            priceButtonsIsActive.forEach((priceButtonIsActive) => {
                priceButtonIsActive.classList.remove('active');
            });

            priceType.classList.add('active'); 
            priceType.parentElement.querySelector('.price-button').classList.add('active');
        }
    });
});