let container = document.getElementById("data-container");
let infoContainer = document.getElementById("info-container");

function showPokemon(id, target) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
            let div = document.createElement("div");
            div.className = "card-box";
            div.onclick = () => window.location.href = `inf-index.html?id=${id}`;

            div.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.forms[0].name}">
                <h1>${data.forms[0].name}</h1>
                ${target === infoContainer ? `
                    <p>Abilities: ${data.abilities.map(a => a.ability.name).join(", ")}</p>
                    <p>Weight: ${data.weight}</p>
                ` : ""}
            `;
            target.appendChild(div);
        });
}

if (container) for (let i = 1; i <= 20; i++) showPokemon(i, container);

if (infoContainer) {
    let id = new URLSearchParams(window.location.search).get("id");
    id ? showPokemon(id, infoContainer) : infoContainer.textContent = "No Pokémon selected.";
}
