const containerPokemons = document.getElementById("main-container");
const selectPokemon = document.getElementById("selectPokemon");
const btnFindPokemon = document.getElementById("findPokemon");
const squirtleBtn = document.getElementById("squirtleButton");
const butterfreeBtn = document.getElementById("butterfreeButton");

export const mainUi = (pokemonsData) => {
  const printPokemons = (listPokemons) => {
    console.log(listPokemons);
    containerPokemons.innerHTML = "";
    listPokemons.forEach((pokemon) => {
      const { abilities, types, sprites, name } = pokemon;

      let typePokemon = "";
      types.forEach((item) => {
        typePokemon += `
             <span> ${item.type.name} </span>
             `;
      });

      let habilidadesPokemon = "";
      abilities.forEach((item) => {
        habilidadesPokemon += `
              <span class="info-text">${item.ability.name} </span>
              `;
      });

      containerPokemons.innerHTML += `
        <section class="charizard-container">
          <div class="title">
            <figure>
              <img
                src="https://static.vecteezy.com/system/resources/previews/001/188/706/original/flame-png.png"
                alt="llama"
              />
            </figure>
            <h2>${name}</h2>
          </div>
          <div class="pokemonDetails">
            <figure class="image-charizard">
              <img
                src="${sprites.other.dream_world.front_default}"
                alt="chaizard"
              />
            </figure>
            <div class="info-pokemon">
            <div class="row-info">
              <div class="row-item">
                <span class="title-info">No.</span>
                <span class="info-text">006</span>
              </div>
              <div class="row-item">
                <span class="title-info">LEVEL</span>
                <span class="info-text">${pokemon.base_experience}</span>
              </div>
            </div>
            <div class="row-info">
              <div class="row-item">
                <span class="title-info">TYPE</span>
                <span class="info-text">${typePokemon}</span>
              </div>
              <div class="row-item">
                <span class="title-info">HABILITY</span>
                <span class="info-text">${habilidadesPokemon}</span>
              </div>
            </div>
            <div class="row-info">
              <div class="row-item">
                <span class="title-info">HEIGHT</span>
                <span class="info-text">${pokemon.height}</span>
              </div>
              <div class="row-item">
                <span class="title-info">WEIGHT</span>
                <span class="info-text">${pokemon.weight}</span>
              </div>
            </div>
          </div>
        </div>
        </section>
          `;
    });

    const finalPokemon = () => {
      let pokemonInfo = selectPokemon.value;
      filterArray(pokemonInfo);
    };

    const filterArray = (item) => {
      let finalArrayPokemons = pokemonsData.filter((object) =>
        object.name.includes(item)
      );
      printPokemons(finalArrayPokemons);
    };

    btnFindPokemon.addEventListener("click", finalPokemon);

    squirtleBtn.addEventListener("click", () => {
      filterArray("squirtle");
    });
  };

  printPokemons(pokemonsData);
};
