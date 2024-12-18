let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage or initialize as empty

// Fetch Pokémon data and create cards for the first 151 Pokémon
async function fetchAndDisplayPokemon() {
    const pokemonList = document.getElementById('pokemonList');

    for (let i = 1; i <= 151; i++) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            const pokemonCard = createPokemonCard(data);
            pokemonList.appendChild(pokemonCard);
        } catch (error) {
            console.error(`Failed to fetch Pokémon #${i}:`, error);
        }
    }
}

// Create a card for a single Pokémon
function createPokemonCard(data) {
    const card = document.createElement('li');
    card.className = 'pokemon-card';

    const image = document.createElement('img');
    image.src = data.sprites.front_default;
    image.alt = `Image of ${data.name}`;
    card.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = capitalize(data.name);
    card.appendChild(title);

    const price = `$${(Math.random() * 10 + 1).toFixed(2)}`;
    const priceSpan = document.createElement('span');
    priceSpan.textContent = price;
    card.appendChild(priceSpan);

    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart-btn';
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.onclick = () => addToCart(data.name, price);
    card.appendChild(addToCartBtn);

    return card;
}

// Capitalize names
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Add an item to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    alert(`${name} has been added to the cart!`);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', fetchAndDisplayPokemon);