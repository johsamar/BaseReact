import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { findPlatilloById } from "../../services/Platillos";
import { PedidosContext } from "../../contexts/PedidosContext";

const VerPedidoComponent = ({ pedidos }) => {
  console.log("Re-renderizado");

  const [Total, setTotal] = useState(0);

  const totalHandle = (total) => {
    setTotal(total);
  };

  useEffect(() => {
    let total = 0;
    pedidos.forEach((pedido) => {
      const platilloFind = findPlatilloById(pedido.platillo);
      total += platilloFind.precio * pedido.cantidad;
    });
    //Acá es donde se renderiza una vez más
    totalHandle(total);
  }, [pedidos]);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#verPedidoModal"
      >
        <strong>Ver Pedido</strong>
        <FiShoppingCart />
      </button>
      <div
        className="modal fade"
        id="verPedidoModal"
        tabindex="-1"
        aria-labelledby="verPedidoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="verPedidoModalLabel">
                Pedido
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <PedidosContext.Consumer>
                {({ pedidos, total }) => {
                  return (
                    <>
                      <div className="row">
                        <div className="col">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Platillo</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {pedidos.map((pedido) => {
                                const platilloFind = findPlatilloById(
                                  pedido.platillo
                                );
                                return (
                                  <tr>
                                    <td>{platilloFind.nombre}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{platilloFind.precio}</td>
                                    <td>
                                      {platilloFind.precio * pedido.cantidad}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row justify-content-end">
                        <div className="col-auto">
                          <h3>
                            <strong>Total:</strong> $ {total}
                          </h3>
                        </div>
                      </div>
                    </>
                  );
                }}
              </PedidosContext.Consumer>
            </div>
            <div className="row justify-content-end">
              <div className="col">
                <h3>Total : {Total}</h3>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-success">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { VerPedidoComponent };
