const options = {wekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-Us', options);
const lastMod = document.querySelector('#date');
lastMod.textContent = `Last updated: ${document.lastModified}`;

// ham menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});