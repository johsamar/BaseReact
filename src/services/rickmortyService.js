import axios from "axios";


const getCharacter = async () => {
    return await axios.get("https://rickandmortyapi.com/api/character");
};


const setCharacter = async ({ body }) => {
    const header = {
        "Content-Type": "application/json",
        "Authorization": "Bearer TOKENTOKENTOKENTOKENTOKENTOKENTOKENTOKEN"
    }

    return await axios.post("https://rickandmortyapi.com/api/character", body, {
        headers: header
    });
};


export { getCharacter, setCharacter };
