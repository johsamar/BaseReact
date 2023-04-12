import React, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";

const CantidadComponent = ({ id, nombre, valor, pedidos, setPedidos }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    setCantidad(cantidad + 1);
  };
  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const reset = () => {
    setCantidad(1);
  };

  const aceptar = (id) => {
    const copyPedidos = [...pedidos];

    copyPedidos.push({
      platillo: id,
      cantidad: cantidad,
    });

    setPedidos(copyPedidos);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#cantidadModal${id}`}
      >
        Añadir <BsFillCartPlusFill />
      </button>
      <div
        className="modal fade"
        id={`cantidadModal${id}`}
        tabindex="-1"
        aria-labelledby={`cantidadModal${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`cantidadModal${id}Label`}>
                Añadir {nombre}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={reset}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-around">
                <div className="col-auto">
                  <button className="btn btn-primary" onClick={handleRestar}>
                    <FiMinus />
                  </button>
                </div>
                <div className="col-auto">
                  <h1>{cantidad}</h1>
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" onClick={handleAgregar}>
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <h3>
                    <strong>Total</strong> $ {valor * cantidad}
                  </h3>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={reset}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={() => {
                  aceptar(id);
                  reset();
                }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CantidadComponent };
