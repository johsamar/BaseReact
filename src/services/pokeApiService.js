const urlPokeApi = "https://pokeapi.co/api/v2/pokemon/ditto";

const getCharacter = async () => {
  return await fetch(urlPokeApi, {
    mode: "no-cors",
    method: "Get",
    headers: {
      "Content-Type": "application/json", 
    },
  });
};

// const response = await fetch(urlPokeApi, {
//   mode: "no-cors",
//   method: "Get",
//   headers: {
//     "Content-Type": "application/json", 
//   },
// });
export {getCharacter};
// body: JSON.stringify(data)
// return response.json();