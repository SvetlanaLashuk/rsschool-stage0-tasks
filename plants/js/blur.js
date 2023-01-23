const serviceButtons = document.querySelectorAll('.service__button');
serviceButtons.forEach((serviceButton) => {
    serviceButton.addEventListener('click', () => {
        const serviceItemsIsBlur = document.querySelectorAll('.service__item.blur');
        serviceItemsIsBlur.forEach((serviceItemIsBlur, i) => {
            // alert(i);
            if (i === 2) {
                serviceItemIsBlur.classList.remove('blur'); 
            } 
            //serviceItemIsBlur.classList.remove('blur');
        });

        if (serviceButton.classList.contains('active')) {
            serviceButton.classList.remove('active');
        } else {
            const serviceButtonsIsActive = document.querySelectorAll('.service__button.active');
            serviceButtonsIsActive.forEach((serviceButtonIsActive, i) => {
                alert(serviceButtonIsActive);
                if (i > 2) {
                    serviceButtonIsActive.classList.remove('active'); 
                } 
                //serviceButtonIsActive.classList.remove('active');
            });

            serviceButton.classList.add('active');

            const serviceItems = document.querySelectorAll('.service__item');
            serviceItems.forEach((serviceItem) => {
                if (serviceButton.textContent.includes('Garden')) {
                    if (!serviceItem.textContent.includes('Garden')) {
                        serviceItem.classList.add('blur');
                    }
                } else if (serviceButton.textContent.includes('Planting')) {
                    if (!serviceItem.textContent.includes('Planting')) {
                        serviceItem.classList.add('blur');
                    }
                } else if (serviceButton.textContent.includes('Lawn')) {
                    if (!serviceItem.textContent.includes('Lawn')) {
                        serviceItem.classList.add('blur');
                    }
                }

            });
        }
    });
});