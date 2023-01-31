const contactsSelect = document.querySelector('.container');

const contactsOpt = document.querySelector('.options.opened');


const selected = document.querySelector('.label');
const contactsOptions = document.querySelector('.options');
const optionsList = document.querySelectorAll('.option');
const contactsCard = document.querySelector('.contacts__card');
// const contactsOption = document.querySelector('.options');
const cards = [
	{
		city: 'Yonkers, NY',
		phone: '+1 914 678 0003',
		address: '511 Warburton Ave',
	},
	{
		city: 'Canandaigua, NY',
		phone: '+1 585 393 0001',
		address: '151 Charlotte Street',
	},
	{
		city: 'Sherrill, NY',
		phone: '+1 315 908 0004',
		address: '14 WEST Noyes BLVD',
	},
	{
		city: 'New York City',
		phone: '+1 212 456 0002',
		address: '9 East 91st Street',
	}
]

const cityElement = document.querySelector('.card__row.city');
const phoneElement = document.querySelector('.card__row.phone');
const addressElement = document.querySelector('.card__row.address');

selected.addEventListener('click', () => {
	selected.classList.toggle('active');
	contactsOptions.classList.toggle('opened');
	// if (contactsOptions.classList.contains('opened')) contactsOptions.classList.remove('opened');
	// else contactsOptions.classList.add('opened');
});

optionsList.forEach((elem) => {
	elem.addEventListener('click', () => {
		
		//let city = el.querySelector('label').innerHTML;
		//selected.innerHtml = city;
		selected.textContent = elem.textContent;
		contactsOptions.classList.remove('opened');
		selected.classList.remove('active');
		contactsCard.classList.add('shown');
		cityElement.innerHTML = elem.textContent;
		cards.forEach(i => {
			if (i.city == elem.textContent.trim()) {
				//alert(i.city);
				phoneElement.innerHTML = i.phone;
				addressElement.innerHTML = i.address;
				
			}
		});
		
		//contactsCard.classList.add('shown');
	// alert(elem.textContent);
		// showCard(elem.textContent.trim());
	});
});

// function showCard(cityName) {
// 	const selectedObject = cards.find(item => item.city === cityName);
// 	alert(selectedObject.city);
// 	cityElement.innerHTML = selectedObject.city;
// 	phoneElement.textContent = selectedObject.phone;
// 	addressElement.textContent = selectedObject.address;
// 	contactsCard.classList.add('shown')
// }