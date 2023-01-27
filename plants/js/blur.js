const buttons           = document.querySelector('.service__btn-group');
const serviceButtons    = document.querySelectorAll('.service__button');
const serviceItems      = document.querySelectorAll('.service__item');
let buttonsClickCounter = 0;
let isActive = false;
let buttonTitle;

buttons.addEventListener('click', (event) => {
    serviceButtons.forEach((serviceButton) => {
        if (serviceButton === event.target) {
            buttonTitle = serviceButton.textContent.trim().slice(0, length - 1);

            function addBlurItem(title, isActive) {
                serviceItems.forEach((serviceItem) => {
                    if (isActive) {
                        if (serviceItem.textContent.includes(title)) {
                            serviceItem.classList.add('blur');
                        } 
                    } else {
                        if (!serviceItem.textContent.includes(title)) {
                            serviceItem.classList.add('blur');
                        }
                    }
                });  
            }

            function removeBlurItem(title, isActive) {
                serviceItems.forEach((serviceItem) => {
                    if (serviceButton.textContent.includes(title)) {
                        if (isActive) {
                            if (!serviceItem.textContent.includes(title)) {
                                serviceItem.classList.remove('blur');
                            } 
                        } else {
                            if (serviceItem.textContent.includes(title)) {
                                serviceItem.classList.remove('blur');
                            }
                        }
                    }
                });  
            }

            function removeAllActiveButtons() {
                let serviceButtonsIsActive = document.querySelectorAll('.service__button.active')
                serviceButtonsIsActive.forEach((serviceButtonIsActive) => {
                    serviceButtonIsActive.classList.remove('active');
                });  
            }

            function removeAllBlurItems() {
                const serviceItemsIsBlur = document.querySelectorAll('.service__item.blur');
                serviceItemsIsBlur.forEach((serviceItemIsBlur) => {
                    serviceItemIsBlur.classList.remove('blur');
                }); 
            }

            if (serviceButton.classList.contains('active')) {
                let buttonsIsActive = document.querySelectorAll('.service__button.active');
                if (buttonsIsActive.length !== 1) {
                    isActive = true;
                    addBlurItem(buttonTitle, isActive);
                } else {
                    isActive = true;
                    removeBlurItem(buttonTitle, isActive);
                }
                buttonsClickCounter = 1;
                serviceButton.classList.remove('active');
            } else {
                if (serviceButton) {
                    let serviceButtonsIsActive = document.querySelectorAll('.service__button.active');
                    if (serviceButtonsIsActive.length !== 0 || buttonsClickCounter === 0) {
                        buttonsClickCounter += 1;
                    }
                }
                if (buttonsClickCounter === serviceButtons.length) {
                    removeAllActiveButtons();
                    removeAllBlurItems();
                    addBlurItem(buttonTitle, isActive);
                    serviceButton.classList.add('active');
                    buttonsClickCounter = 1;
                } else if (buttonsClickCounter > 1) {
                    isActive = false;
                    removeBlurItem(buttonTitle, isActive);
                    serviceButton.classList.add('active');
                } else {
                    isActive = false;
                    addBlurItem(buttonTitle, isActive);
                    serviceButton.classList.add('active');
                }
            }
        }
    });
});