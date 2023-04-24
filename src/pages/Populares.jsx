import React from "react";
import { useNavigate } from "react-router-dom";

const Populares = () => {
  const navigate = useNavigate();

  const regresar = () => {
    navigate(`/carta/${"bebidas"}`);
  };
  return (
    <>
      <div class="container-fluid">
        <h1>Populares</h1>
        <div className="row">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary"
              onClick={regresar}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Populares };
