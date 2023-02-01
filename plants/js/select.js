const selected 		  = document.querySelector('.label');
const contactsOptions = document.querySelector('.options');
const optionsList 	  = document.querySelectorAll('.option');
const contactsCard 	  = document.querySelector('.contacts__card');
const cardCity 		  = document.querySelector('.card__row.city .card__value');
const cardPhone 	  = document.querySelector('.card__row.phone .card__value');
const cardAddress 	  = document.querySelector('.card__row.address .card__value');
const cardButton 	  = document.querySelector('.card__button');
const contactsPic	  = document.querySelector('.woman');

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

selected.addEventListener('click', () => {
	selected.classList.toggle('active');
	contactsOptions.classList.toggle('opened');
});

optionsList.forEach((elem) => {
	elem.addEventListener('click', () => {
		selected.textContent = elem.textContent;
		contactsOptions.classList.remove('opened');
		selected.classList.remove('active');
		selected.classList.add('selected');
		showCard(elem.textContent.trim());
	});
});

function showCard(cityName) {
	const selectedObject = cards.find(item => item.city === cityName);
	cardCity.textContent = selectedObject.city;
	cardPhone.textContent = selectedObject.phone;
	cardAddress.textContent = selectedObject.address;
	cardButton.setAttribute('href', `tel:${selectedObject.phone}`)
	contactsCard.classList.add('shown');
	contactsPic.classList.add('hide');
}