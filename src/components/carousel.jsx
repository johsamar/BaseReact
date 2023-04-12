import React, { useEffect, useState } from "react";
import { getProductos } from "../services/productos";

const Carousel = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState("carousel-item active");

  useEffect(() => {
    getProductos().then((response) => {
      setData(response);
    });
  }, []);

  const activar = () => {
    setSlide("carousel-item");
  };

  return (
    <div className="d-flex flex-column align-items-center m-3 text-light">
      <div>
        <h2>Promociones</h2>
      </div>
      <div id="carouselExample" class="carousel slide w-50 h-50">
        <div class="carousel-inner">
          {data.map((producto) => {
            return (
              <div class={slide}>
                <img
                  src={producto.imagen}
                  className="d-block img-fluid"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{producto.titulo}</h5>
                  <p>{producto.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          onClick={() => activar()}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          onClick={() => activar()}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
