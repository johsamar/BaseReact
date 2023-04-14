import React from "react";
import "./CardMenuStyle.css";

const CardMenuComponent = ({ platillo }) => {
  const { nombre, descripcion, precio, puntacion, imagen } = platillo;

  return (
    <div
      className="card"
      style={{
        border: "1px solid black",
      }}
    >
      <h1>{nombre}</h1>
      <img className="image-card" src={imagen} alt="platillo" />
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
