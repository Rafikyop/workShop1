import { getInfo, getDataUnique } from "./scripts/process.js";
import { printPokemons } from "./scripts/ui.js";

const mainFunction = async () => {
  let data = await getInfo();
  let responseInfo = [];
  data.forEach((element) => {
    let infoPokemons = getDataUnique(element.url);
    responseInfo.push(infoPokemons);
  });

  const newResponse = await Promise.all(responseInfo);

  data.forEach((_, index) => {
    data[index].info = newResponse[index];
  });
  printPokemons(data);
};

mainFunction();