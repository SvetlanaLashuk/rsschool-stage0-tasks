const contactsSelect = document.querySelector('.container');
const contactsOptions = document.querySelector('.options');

const contactsOpt = document.querySelector('.options.opened');

const options = document.querySelectorAll('.option');
const a = document.querySelectorAll('.label.active');
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

contactsSelect.addEventListener('click', () => {
    if (contactsOptions.classList.contains('opened')) {
        contactsOptions.classList.remove('opened');
        contactsOptions.parentElement.querySelector('.label').classList.remove('active');
    } else {
        contactsOptions.classList.add('opened');
        contactsOptions.parentElement.querySelector('.label').classList.add('active');
    }
   
    // contactsSelect.classList.toggle('opened');
});

options.forEach((elem) => {
    elem.addEventListener('click', () => {
        contactsOptions.parentElement.querySelector('.label').textContent = elem.textContent;
        //alert(contactsOptions.parentElement.querySelector('.label').classList);
        //contactsOptions.parentElement.querySelector('.label').classList.remove('active');
        //alert(contactsOptions.parentElement.querySelector('.label').classList)
        //contactsOpt.classList.remove('opened');
        alert(contactsOptions.parentElement.querySelector('.label').classList);
    });
    
    contactsOptions.parentElement.querySelector('.label').classList.remove('active')
    contactsOptions.classList.remove('opened')
    //contactsOptions.parentElement.querySelector('.label').classList.remove('active');
});



