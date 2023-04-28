import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { getCharacter } from "../services/rickmortyService";
import {response} from "../services/pokeApiService";
import { HandlerGET } from "../handlers/handlerService";

const Populares = () => {
  const [character, setCharacter] = useState(null);

  const getCharacterFromService = async () => {
    const data = await HandlerGET({ request: getCharacter });
    console.log(data);
    setCharacter(data);
  };

  useEffect(() => {
    getCharacterFromService();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h1>Populares</h1>
        <div className="row">
          {character &&
            character.map((item) => {
              return (
                <div className="col">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.species}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export { Populares };
