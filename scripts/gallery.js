// Fetch Pokémon data and create cards for the first 151 Pokémon
async function fetchAndDisplayPokemon() {
    const pokemonList = document.getElementById('pokemonList');
    
    // Loop through the first 151 Pokémon
    for (let i = 1; i <= 151; i++) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            
            // Create and append a card for the Pokémon
            const pokemonCard = createPokemonCard(data);
            pokemonList.appendChild(pokemonCard);
        } catch (error) {
            console.error(`Failed to fetch Pokémon #${i}:`, error);
        }
    }
}

// Create a card for a single Pokémon
function createPokemonCard(data) {
    // Create list item
    const card = document.createElement('li');
    card.className = 'pokemon-card';

    // Create link with Pokémon image
    const link = document.createElement('a');
    link.href = '#';
    link.title = `View details for ${data.name}`;
    const image = document.createElement('img');
    image.src = data.sprites.front_shiny;
    image.alt = `Image of ${data.name}`;
    link.appendChild(image);

    // Create div for name and price
    const namePrice = document.createElement('div');
    namePrice.className = 'namePrice';

    const hr = document.createElement('hr');
    namePrice.appendChild(hr);

    // Name and price header
    const title = document.createElement('h2');
    title.className = 'card-title';
    const nameLink = document.createElement('a');
    nameLink.href = '#';
    nameLink.id = `${data.name}-name`;
    nameLink.title = `View details for ${data.name}`;
    nameLink.textContent = capitalize(data.name);
    const price = document.createElement('span');
    price.className = 'price';
    price.textContent = `$${(Math.random() * 10 + 1).toFixed(2)}`; // Random price
    title.appendChild(nameLink);
    title.appendChild(price);
    namePrice.appendChild(title);

    // Moves
    const movesHeader = document.createElement('h3');
    movesHeader.textContent = 'Moves';
    namePrice.appendChild(movesHeader);
    const movesList = document.createElement('ul');
    movesList.className = 'moves-list';

    // Display up to 5 moves
    const moves = data.moves.slice(0, 5);
    moves.forEach(move => {
        const moveItem = document.createElement('li');
        moveItem.textContent = move.move.name;
        movesList.appendChild(moveItem);
    });
    namePrice.appendChild(movesList);

    // Append all to the card
    card.appendChild(link);
    card.appendChild(namePrice);
    return card;
}

// Helper function to capitalize names
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Load Pokémon when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayPokemon);