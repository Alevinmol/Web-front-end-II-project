const options = {wekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-Us', options);
const lastMod = document.querySelector('#date');
lastMod.textContent = `Last updated: ${document.lastModified}`;