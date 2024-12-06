fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
        const dittoSprite = data.sprites.front_shiny;
        const dittoImg = document.getElementById('ditto');
        dittoImg.src = dittoSprite;
        const dittoName = data.species.name;
        const dittoAnchor = document.getElementById('ditto-name');
        dittoAnchor.innerText = dittoName;
        displayPokemonMoves(data.moves);
    })
    .catch(error => console.error('Error fetching data:' , error));

function displayPokemonMoves(moves) {
    const movesList = document.getElementById('moves');
    movesList.innerHTML ='';
    moves.forEach(move => {
        const moveName = move.move.name;
        const listItem = document.createElement('li');
        listItem.textContent = moveName;
        movesList.appendChild(listItem);
    });
}