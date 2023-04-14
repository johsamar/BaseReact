/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ImageComponent } from "./ImageComponent";
import { CantidadComponent } from "./modals/CantidadComponent";

const CardMenuComponent = ({ platillo }) => {
  const { id, nombre, precio, descripcion, imagen, puntuacion } = platillo;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <ImageComponent src={imagen} alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>

        {/* Acordeón de descripción */}
        <div className="accordion" id={`accordion${id}`}>
          <div className="accordion-item">
            <h5 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${id}`}
                aria-expanded="false"
                aria-controls={id}
              >
                Descripción
              </button>
            </h5>
            <div
              id={id}
              className="accordion-collapse collapse"
              data-bs-parent={`#accordion${id}`}
            >
              <div className="accordion-body">
                <p>{descripcion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Precio */}
        <div className="row justify-content-center">
          <div className="col-auto">
            <h3>$ {precio}</h3>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-auto">
            <p className="card-text">
              <b>Puntuación: </b>
              {puntuacion}
            </p>
          </div>
          <div className="col-auto">
            {/* <button className="btn btn-primary">Agregar</button> */}
            <CantidadComponent id={id} nombre={nombre} valor={precio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenuComponent;
