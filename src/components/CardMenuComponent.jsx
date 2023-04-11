import React from "react";
import "./CardMenuStyle.css";

const CardMenuComponent = ({ platillo }) => {
  const { nombre, descripcion, precio, puntacion } = platillo;

  return (
    <div
      className="card"
      style={{
        border: "1px solid black",
      }}
    >
      <h1>{nombre}</h1>
      <img
        className="image-card"
        src="https://static.wikia.nocookie.net/gen-impact/images/1/13/Comida_sospechosa_Torre_de_Ludi.png/revision/latest?cb=20201214214018&path-prefix=es"
        alt="platillo"
      />
      <p>
        <b>Descripcion: </b>
        {descripcion}
      </p>
      <p>Precio: ${precio}</p>
      <div className="card-column">
        <div className="card-row">
          <p>Puntacion: {puntacion}</p>
          <button>Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default CardMenuComponent;
