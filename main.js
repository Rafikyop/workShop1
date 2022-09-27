import { getInfo, getDataUnique } from "./scripts/process.js";
import { mainUi } from "./scripts/ui.js";

const mainFunction = async () => {
  let pokemonURLS = await getInfo();
  let responseInfo = [];
  let pokemonsData = [];
  pokemonURLS.forEach((element) => {
    let infoPokemons = getDataUnique(element.url);
    responseInfo.push(infoPokemons);
  });

  const newResponse = await Promise.all(responseInfo);

  pokemonURLS.forEach((_, index) => {
    pokemonsData[index] = newResponse[index];
  });
  console.log(pokemonsData);
  mainUi(pokemonsData);
};

mainFunction();
