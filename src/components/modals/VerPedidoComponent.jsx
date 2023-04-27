import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { findPlatilloById } from "../../services/Platillos";
import { PedidosContext } from "../../contexts/PedidosContext";
import { MdDelete } from "react-icons/md";

const VerPedidoComponent = () => {
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
                {({ pedidos, setPedidos, total }) => {
                  const eliminarProductoPedido = (pedido) => {
                    const index = pedidos.indexOf(pedido);
                    const tempPedidos = [...pedidos];
                    tempPedidos.splice(index, 1);
                    setPedidos(tempPedidos);
                  };
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
                                <th scope="col">Acciones</th>
                              </tr>
                            </thead>
                            <tbody>
                              {pedidos.map((pedido) => {
                                const platilloFind = findPlatilloById(
                                  pedido.platillo
                                );
                                return (
                                  <tr key={pedido.platillo}>
                                    <td>{platilloFind.nombre}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{platilloFind.precio}</td>
                                    <td>
                                      {platilloFind.precio * pedido.cantidad}
                                    </td>
                                    <td>
                                      <MdDelete
                                        onClick={() =>
                                          eliminarProductoPedido(pedido)
                                        }
                                        className="action-pedido"
                                      />
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
