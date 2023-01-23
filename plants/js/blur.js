const serviceButtons = document.querySelectorAll('.service__button');
const buttons = document.querySelector('.service__btn-group');
const serviceItems = document.querySelectorAll('.service__item');
buttons.addEventListener('click', (event) => {
    serviceButtons.forEach((button, index) => {
        if (button === event.target) {
            // if (button.classList.contains('active')) {
            //     button.classList.remove('active');
            // }
            //alert(event.currentTarget);
            if (button.classList.contains('active')) {
                // const serviceItemsIsBlur = document.querySelectorAll('.service__item.blur');
                // serviceItemsIsBlur.forEach((serviceItemIsBlur) => {
                //     serviceItemIsBlur.classList.remove('blur');
                // });
                serviceItems.forEach((serviceItem) => {
                    if (button.textContent.includes('Garden')) {
                        if (serviceItem.textContent.includes('Garden')) {
                            serviceItem.classList.remove('blur');
                        }
                    } else if (button.textContent.includes('Planting')) {
                        if (serviceItem.textContent.includes('Planting')) {
                            serviceItem.classList.remove('blur');
                        }
                    } else if (button.textContent.includes('Lawn')) {
                        if (serviceItem.textContent.includes('Lawn')) {
                            serviceItem.classList.remove('blur');
                        }
                    }
                });
                button.classList.remove('active');

            } else {
                
                serviceItems.forEach((serviceItem) => {
                    if (button.textContent.includes('Garden')) {
                        alert(index);
                        if (index > 0) {
                            if (serviceItem.textContent.includes('Garden')) {
                                serviceItem.classList.remove('blur');
                            }
                        } else {
                            if (!serviceItem.textContent.includes('Garden')) {
                                serviceItem.classList.add('blur');
                            }
                        }
                    } else if (button.textContent.includes('Planting')) {
                        alert(index);
                        if (index > 0) {
                            if (serviceItem.textContent.includes('Planting')) {
                                serviceItem.classList.remove('blur');
                            }
                        } else {
                            if (!serviceItem.textContent.includes('Planting')) {
                                serviceItem.classList.add('blur');
                            }
                        }
                    } else if (button.textContent.includes('Lawn')) {
                        alert(index);
                        if (index > 0) {
                            if (serviceItem.textContent.includes('Lawn')) {
                                serviceItem.classList.remove('blur');
                            }
                        } else {
                            if (!serviceItem.textContent.includes('Lawn')) {
                                serviceItem.classList.add('blur');
                            }
                        }
                    }
                });
                button.classList.add('active');
            }
        }
    });
});



// serviceButtons.forEach((serviceButton) => {
//     serviceButton.addEventListener('click', () => {
//         const serviceItemsIsBlur = document.querySelectorAll('.service__item.blur');
//         serviceItemsIsBlur.forEach((serviceItemIsBlur, i) => {
//             // alert(i);
//             if (i === 2) {
//                 serviceItemIsBlur.classList.remove('blur'); 
//             } 
//             //serviceItemIsBlur.classList.remove('blur');
//         });

//         if (serviceButton.classList.contains('active')) {
//             serviceButton.classList.remove('active');
//         } else {
//             const serviceButtonsIsActive = document.querySelectorAll('.service__button.active');
//             serviceButtonsIsActive.forEach((serviceButtonIsActive, i) => {
//                 alert(serviceButtonIsActive);
//                 if (i > 2) {
//                     serviceButtonIsActive.classList.remove('active'); 
//                 } 
//                 //serviceButtonIsActive.classList.remove('active');
//             });

//             serviceButton.classList.add('active');

//             const serviceItems = document.querySelectorAll('.service__item');
//             serviceItems.forEach((serviceItem) => {
//                 if (serviceButton.textContent.includes('Garden')) {
//                     if (!serviceItem.textContent.includes('Garden')) {
//                         serviceItem.classList.add('blur');
//                     }
//                 } else if (serviceButton.textContent.includes('Planting')) {
//                     if (!serviceItem.textContent.includes('Planting')) {
//                         serviceItem.classList.add('blur');
//                     }
//                 } else if (serviceButton.textContent.includes('Lawn')) {
//                     if (!serviceItem.textContent.includes('Lawn')) {
//                         serviceItem.classList.add('blur');
//                     }
//                 }

//             });
//         }
//     });
// });